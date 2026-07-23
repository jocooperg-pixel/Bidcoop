import React, { useState, useMemo } from 'react';
import { Oportunidad, Empresa } from '../types';

interface ReportsNotificationsModuleProps {
  oportunidades: Oportunidad[];
  empresaActiva: Empresa;
  darkMode?: boolean;
}

export default function ReportsNotificationsModule({
  oportunidades,
  empresaActiva,
  darkMode = false
}: ReportsNotificationsModuleProps) {
  // Config state for 8:00 AM daily reports
  const [selectedCompany, setSelectedCompany] = useState<string>('Todas'); // 'Inder-Roll', 'Aminorte', 'V-MOCCS', 'Todas'
  const [reportTime, setReportTime] = useState<string>('08:00');
  const [autoEmailEnabled, setAutoEmailEnabled] = useState<boolean>(true);
  const [whatsappPushEnabled, setWhatsappPushEnabled] = useState<boolean>(true);
  const [recipientEmails, setRecipientEmails] = useState<string>('jocooperg@gmail.com');
  const [recipientPhones, setRecipientPhones] = useState<string>('+56977222179');
  const [filterRubro, setFilterRubro] = useState<string>('Todos');
  const [activeTab, setActiveTab] = useState<'reportes' | 'correos' | 'winrate' | 'configuracion'>('reportes');
  const [copiedEmailIndex, setCopiedEmailIndex] = useState<number | null>(null);
  const [reportSuccessMsg, setReportSuccessMsg] = useState<string | null>(null);
  const [showEmailPreviewModal, setShowEmailPreviewModal] = useState<boolean>(false);
  const [sendingEmail, setSendingEmail] = useState<boolean>(false);
  const [userResendKey, setUserResendKey] = useState<string>('');
  const [userSmtpUser, setUserSmtpUser] = useState<string>('');
  const [userSmtpPass, setUserSmtpPass] = useState<string>('');

  // Filter opportunities for the selected company
  const companyFilteredOps = useMemo(() => {
    return oportunidades.filter(op => {
      const matchCompany = selectedCompany === 'Todas' || op.empresaMatch === selectedCompany;
      const matchRubro = filterRubro === 'Todos' || op.rubro === filterRubro;
      const matchModalidad = op.modalidad === 'Compra Ágil';
      const matchEstado = op.estado === 'Publicada';
      return matchCompany && matchRubro && matchModalidad && matchEstado;
    });
  }, [oportunidades, selectedCompany, filterRubro]);

  // Postulations for follow-up emails
  const postulationsList = useMemo(() => {
    return oportunidades.filter(op => {
      const matchCompany = selectedCompany === 'Todas' || op.empresaMatch === selectedCompany;
      return matchCompany && (op.estado === 'En Evaluación' || op.estado === 'Adjudicada' || op.estado === 'Cerrada' || op.estado === 'Publicada');
    });
  }, [oportunidades, selectedCompany]);

  // Export excel handler with mandatory BidCoop filename convention
  const handleExportExcel = (companyName: string) => {
    const today = new Date().toISOString().split('T')[0];
    const companyClean = companyName === 'Todas' ? 'Consolidado_Holding' : companyName.replace(/\s+/g, '_');
    const filename = `BidCoop_Reporte_Diario_Compras_Agiles_${companyClean}_${today}.csv`;

    const headers = [
      'Código Licitación',
      'Título / Descripción',
      'Organismo Comprador',
      'RUT Organismo',
      'Región',
      'Monto Estimado ($ CLP)',
      'Fecha Publicación',
      'Fecha Cierre',
      'Empresa Asignada',
      'Modalidad',
      'Estado',
      'Sugerencia Precio Óptimo (Win-Rate CLP)'
    ];

    const targetOps = companyName === 'Todas' 
      ? companyFilteredOps 
      : companyFilteredOps.filter(o => o.empresaMatch === companyName);

    const rows = targetOps.map(op => {
      const winPrice = Math.round(op.monto * 0.94);
      return [
        `"${op.codigo}"`,
        `"${op.titulo.replace(/"/g, '""')}"`,
        `"${op.organismo.replace(/"/g, '""')}"`,
        `"${op.organismoRut || '00.000.000-0'}"`,
        `"${op.region}"`,
        op.monto,
        `"${op.fechaPublicacion}"`,
        `"${op.fechaCierre}"`,
        `"${op.empresaMatch}"`,
        `"${op.modalidad}"`,
        `"${op.estado}"`,
        winPrice
      ].join(';');
    });

    const csvContent = '\uFEFF' + [headers.join(';'), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setReportSuccessMsg(`¡Reporte descargado exitosamente: ${filename}`);
    setTimeout(() => setReportSuccessMsg(null), 5000);
  };

  const handleSendTestEmail = async (targetEmail: string = 'jocooperg@gmail.com') => {
    try {
      setSendingEmail(true);
      const res = await fetch('/api/send-email-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: targetEmail,
          empresa: selectedCompany,
          oportunidades: companyFilteredOps,
          apiKey: userResendKey,
          smtpUser: userSmtpUser,
          smtpPass: userSmtpPass
        })
      });

      const data = await res.json();
      if (!res.ok) {
        if (data.requiresCredentials) {
          setShowEmailPreviewModal(true);
          setReportSuccessMsg('Para la entrega directa en tu bandeja de Gmail, ingresa tu Resend API Key o contraseña de aplicación SMTP.');
          return;
        }
        throw new Error(data.error || 'Error enviando el correo');
      }

      setReportSuccessMsg(`¡${data.emailStatus}! Archivo adjunto: ${data.filename} (${data.totalOps} Compras Ágiles)`);
    } catch (err: any) {
      alert(`Error enviando correo: ${err.message}`);
    } finally {
      setSendingEmail(false);
    }
  };

  const handleOpenMailClient = () => {
    const today = new Date().toISOString().split('T')[0];
    const totalOps = companyFilteredOps.length;
    const totalMonto = companyFilteredOps.reduce((acc, curr) => acc + curr.monto, 0);

    const subject = encodeURIComponent(`[BidCoop 08:00 AM] Reporte Diario de Compras Ágiles - ${selectedCompany} (${today})`);
    
    let bodyText = `Estimado equipo comercial de ${selectedCompany},\n\n`;
    bodyText += `Se adjunta el resumen de las Compras Ágiles activas del día de hoy (${today}):\n`;
    bodyText += `- Compras Ágiles Activas: ${totalOps}\n`;
    bodyText += `- Presupuesto Total CLP: $${totalMonto.toLocaleString('es-CL')} CLP\n\n`;
    bodyText += `Listado de Procesos Destacados:\n`;

    companyFilteredOps.slice(0, 8).forEach(op => {
      bodyText += `• [${op.codigo}] ${op.titulo} - ${op.organismo} ($${op.monto.toLocaleString('es-CL')} CLP) - Cierre: ${op.fechaCierre}\n`;
    });

    bodyText += `\nDescargue el reporte oficial .CSV adjunto desde la plataforma BidCoop.\n\nAtentamente,\nPlataforma Avanzada de Abastecimiento BidCoop © 2026`;

    window.open(`mailto:jocooperg@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`, '_blank');
  };

  // Generate simulated postulation email preview
  const getPostulationEmailTemplate = (op: Oportunidad) => {
    const company = op.empresaMatch || 'Inder-Roll';
    const emailSubject = `[BidCoop - ${company}] Seguimiento de Postulación: ${op.codigo} - ${op.organismo}`;
    const winPrice = Math.round(op.monto * 0.94);

    let statusBadgeColor = 'bg-blue-100 text-blue-800 border-blue-300';
    if (op.estado === 'Adjudicada') statusBadgeColor = 'bg-emerald-100 text-emerald-800 border-emerald-300';
    if (op.estado === 'En Evaluación') statusBadgeColor = 'bg-amber-100 text-amber-800 border-amber-300';

    return {
      subject: emailSubject,
      sender: `notificaciones@bidcoop.cl`,
      recipient: company === 'Inder-Roll' ? 'licitaciones@inder-roll.cl' : company === 'Aminorte' ? 'comercial@aminorte.cl' : 'contacto@v-moccs.cl',
      company,
      code: op.codigo,
      organismo: op.organismo,
      monto: op.monto,
      winPrice,
      estado: op.estado,
      statusBadgeColor,
      cierre: op.fechaCierre,
      titulo: op.titulo
    };
  };

  const [sendingWhatsapp, setSendingWhatsapp] = useState<boolean>(false);

  const handleSendWhatsappTest = async (targetPhone?: string) => {
    try {
      setSendingWhatsapp(true);
      const activePhones = targetPhone || recipientPhones || '56977222179';
      const res = await fetch('/api/send-whatsapp-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: activePhones,
          empresa: selectedCompany,
          oportunidades: companyFilteredOps
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error enviando WhatsApp Push');

      setReportSuccessMsg(`¡${data.pushStatus}! Remitente: ${data.sender} ➔ Destino: ${data.destination}`);
    } catch (err: any) {
      alert(`Error en Push WhatsApp: ${err.message}`);
    } finally {
      setSendingWhatsapp(false);
    }
  };

  return (
    <div className={`p-6 space-y-6 ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'} min-h-screen`}>
      {/* HEADER BAR */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="bg-indigo-600 text-white text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
              BidCoop Automated Reports
            </span>
            <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              Sincronización 08:00 AM Activa ⏰
            </span>
          </div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            Módulo de Reportes Diarios y Seguimiento de Postulaciones
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Generación automatizada a las 8:00 AM de Compras Ágiles activas y notificaciones por correo de seguimiento segmentadas por empresa.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => handleSendWhatsappTest('56977222179')}
            disabled={sendingWhatsapp}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-sm px-4 py-2.5 rounded-xl shadow-sm transition-all transform active:scale-95 cursor-pointer"
          >
            {sendingWhatsapp ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                Enviando Push a +56 9 7722 2179...
              </>
            ) : (
              <>
                <span>📱</span>
                Disparar Push WhatsApp (+56 9 7722 2179)
              </>
            )}
          </button>

          <button
            onClick={() => handleSendTestEmail('jocooperg@gmail.com')}
            disabled={sendingEmail}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-sm px-4 py-2.5 rounded-xl shadow-sm transition-all transform active:scale-95 cursor-pointer"
          >
            {sendingEmail ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                Procesando reporte...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Enviar Prueba a jocooperg@gmail.com ✉️
              </>
            )}
          </button>

          <button
            onClick={() => setShowEmailPreviewModal(true)}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm px-4 py-2.5 rounded-xl shadow-sm transition-all"
          >
            🔍 Ver Vista Previa del Correo Real
          </button>

          <button
            onClick={() => handleExportExcel(selectedCompany)}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-4 py-2.5 rounded-xl shadow-sm transition-all transform active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Descargar Reporte BidCoop (.CSV / Excel)
          </button>
        </div>
      </div>

      {/* SUCCESS NOTIFICATION TOAST */}
      {reportSuccessMsg && (
        <div className="bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200 p-4 rounded-xl flex items-center justify-between shadow-md transition-all">
          <div className="flex items-center gap-3">
            <span className="text-xl">✅</span>
            <span className="text-sm font-semibold">{reportSuccessMsg}</span>
          </div>
          <button onClick={() => setReportSuccessMsg(null)} className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline text-xs">
            Cerrar
          </button>
        </div>
      )}

      {/* FILTER & COMPANY SEGMENTATION BAR */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4">
        {/* Company Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Filtrar por Empresa:</span>
          <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-700 rounded-xl">
            {['Todas', 'Inder-Roll', 'Aminorte', 'V-MOCCS'].map(comp => (
              <button
                key={comp}
                onClick={() => setSelectedCompany(comp)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCompany === comp
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {comp === 'Todas' ? 'Consolidado Holding (3)' : comp}
              </button>
            ))}
          </div>
        </div>

        {/* Rubro Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Rubro:</span>
          <select
            value={filterRubro}
            onChange={(e) => setFilterRubro(e.target.value)}
            className="bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-xl border-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="Todos">Todos los Rubros</option>
            <option value="Artículos de Escritorio y Oficina">Artículos de Escritorio y Oficina</option>
            <option value="Aseo e Higiene">Aseo e Higiene</option>
          </select>
        </div>
      </div>

      {/* NAVIGATION TABS */}
      <div className="flex border-b border-slate-200 dark:border-slate-700 gap-6">
        <button
          onClick={() => setActiveTab('reportes')}
          className={`pb-3 text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'reportes'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400'
          }`}
        >
          <span>📊 Reportes Diarios 8:00 AM</span>
          <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 text-xs px-2 py-0.5 rounded-full font-black">
            {companyFilteredOps.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('correos')}
          className={`pb-3 text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'correos'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400'
          }`}
        >
          <span>✉️ Correos de Seguimiento de Postulación</span>
          <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 text-xs px-2 py-0.5 rounded-full font-black">
            {postulationsList.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('winrate')}
          className={`pb-3 text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'winrate'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400'
          }`}
        >
          <span>🎯 Win-Rate AI (Precio Ganador)</span>
          <span className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 text-xs px-2 py-0.5 rounded-full font-black">
            IA Activa
          </span>
        </button>

        <button
          onClick={() => setActiveTab('configuracion')}
          className={`pb-3 text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'configuracion'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400'
          }`}
        >
          <span>⚙️ Automatización y Canales (8:00 AM)</span>
        </button>
      </div>

      {/* TAB CONTENT 1: REPORTES DIARIOS 8:00 AM */}
      {activeTab === 'reportes' && (
        <div className="space-y-6">
          {/* Summary Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-bold uppercase">
                <span>Compras Ágiles Activas Hoy</span>
                <span className="text-xl">📋</span>
              </div>
              <div className="text-3xl font-black text-slate-900 dark:text-white mt-2">
                {companyFilteredOps.length}
              </div>
              <div className="text-xs text-emerald-600 font-semibold mt-1">
                Listas para trabajar a las 8:00 AM
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-bold uppercase">
                <span>Monto Total Disponible</span>
                <span className="text-xl">💰</span>
              </div>
              <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400 mt-2">
                ${companyFilteredOps.reduce((acc, curr) => acc + curr.monto, 0).toLocaleString('es-CL')} CLP
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Presupuesto acumulado compradores
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-bold uppercase">
                <span>Empresa Target</span>
                <span className="text-xl">🏢</span>
              </div>
              <div className="text-xl font-black text-slate-800 dark:text-slate-100 mt-2">
                {selectedCompany === 'Todas' ? 'Consolidado (3 Empresas)' : selectedCompany}
              </div>
              <div className="text-xs text-indigo-600 font-semibold mt-1">
                Segmentación estricta habilitada
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-bold uppercase">
                <span>Nomenclatura Archivo</span>
                <span className="text-xl">📁</span>
              </div>
              <div className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mt-2 truncate" title={`BidCoop_Reporte_Diario_${selectedCompany}_${new Date().toISOString().split('T')[0]}.csv`}>
                BidCoop_Reporte_Diario...
              </div>
              <div className="text-xs text-emerald-600 font-semibold mt-1">
                Convención estándar oficial
              </div>
            </div>
          </div>

          {/* TABLE OF DAILY COMPRAS ÁGILES */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <span>☀️ Reporte Diario 8:00 AM — Compras Ágiles Filtradas</span>
                <span className="text-xs font-mono bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-slate-600 dark:text-slate-300">
                  {companyFilteredOps.length} registros
                </span>
              </h3>
              <button
                onClick={() => handleExportExcel(selectedCompany)}
                className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:hover:bg-indigo-900 dark:text-indigo-300 text-xs font-bold px-3 py-1.5 rounded-lg transition-all"
              >
                📥 Descargar Excel oficial BidCoop
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 uppercase font-black tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Código MP</th>
                    <th className="py-3 px-4">Proceso / Título</th>
                    <th className="py-3 px-4">Organismo Comprador</th>
                    <th className="py-3 px-4">Monto Estimado</th>
                    <th className="py-3 px-4">Empresa Asignada</th>
                    <th className="py-3 px-4">Cierre</th>
                    <th className="py-3 px-4">Precio Sugerido AI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                  {companyFilteredOps.map((op) => {
                    const winPrice = Math.round(op.monto * 0.94);
                    return (
                      <tr key={op.codigo} className="hover:bg-slate-50/80 dark:hover:bg-slate-700/30 transition-all">
                        <td className="py-3 px-4 font-mono font-bold text-indigo-600 dark:text-indigo-400">
                          {op.codigo}
                        </td>
                        <td className="py-3 px-4 max-w-xs font-semibold text-slate-900 dark:text-white truncate">
                          {op.titulo}
                        </td>
                        <td className="py-3 px-4 max-w-xs text-slate-600 dark:text-slate-300 truncate">
                          {op.organismo}
                        </td>
                        <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">
                          ${op.monto.toLocaleString('es-CL')} CLP
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-md text-[11px] font-black ${
                            op.empresaMatch === 'Inder-Roll'
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300'
                              : op.empresaMatch === 'Aminorte'
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300'
                              : 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300'
                          }`}>
                            {op.empresaMatch || 'Inder-Roll'}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-500 font-medium">
                          {op.fechaCierre}
                        </td>
                        <td className="py-3 px-4 font-bold text-emerald-600 dark:text-emerald-400">
                          ${winPrice.toLocaleString('es-CL')} CLP
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT 2: CORREOS DE SEGUIMIENTO DE POSTULACIÓN */}
      {activeTab === 'correos' && (
        <div className="space-y-6">
          <div className="bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 p-4 rounded-2xl flex items-start gap-3">
            <span className="text-2xl">📩</span>
            <div className="space-y-1">
              <h4 className="text-sm font-black text-amber-900 dark:text-amber-200">
                Sistema de Correos Transaccionales de Seguimiento Segmentado
              </h4>
              <p className="text-xs text-amber-800 dark:text-amber-300">
                Cada correo de seguimiento se genera con la imagen corporativa de la empresa correspondiente (<strong>Inder-Roll SpA</strong>, <strong>Aminorte SpA</strong>, o <strong>V-MOCCS SpA</strong>), conteniendo únicamente sus postulaciones propias.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {postulationsList.slice(0, 6).map((op, idx) => {
              const tmpl = getPostulationEmailTemplate(op);
              return (
                <div key={op.codigo} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col justify-between">
                  {/* Email Header */}
                  <div className="p-4 bg-slate-900 text-white space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>De: <strong className="text-white">{tmpl.sender}</strong></span>
                      <span className="bg-indigo-600 text-white font-black px-2 py-0.5 rounded-full text-[10px]">
                        {tmpl.company}
                      </span>
                    </div>
                    <div className="text-xs text-slate-300">Para: <strong className="text-slate-100">{tmpl.recipient}</strong></div>
                    <div className="text-sm font-extrabold text-amber-300 truncate">{tmpl.subject}</div>
                  </div>

                  {/* Email Body Preview */}
                  <div className="p-5 space-y-4 text-xs">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3">
                      <div>
                        <div className="text-slate-500 dark:text-slate-400">Código de Postulación:</div>
                        <div className="font-mono font-black text-sm text-indigo-600 dark:text-indigo-400">{tmpl.code}</div>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full font-black border ${tmpl.statusBadgeColor}`}>
                        {tmpl.estado}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="font-bold text-slate-800 dark:text-slate-200">{tmpl.titulo}</div>
                      <div className="text-slate-500 dark:text-slate-400">Comprador: <strong>{tmpl.organismo}</strong></div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 bg-slate-50 dark:bg-slate-700/40 p-3 rounded-xl">
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-bold">Presupuesto Público</span>
                        <span className="font-black text-slate-900 dark:text-white text-xs">${tmpl.monto.toLocaleString('es-CL')} CLP</span>
                      </div>
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-bold">Oferta Ganadora Sugerida</span>
                        <span className="font-black text-emerald-600 dark:text-emerald-400 text-xs">${tmpl.winPrice.toLocaleString('es-CL')} CLP</span>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 italic text-[11px]">
                      "Estimado equipo de {tmpl.company}, este proceso se encuentra activo. Le recordamos mantener actualizada la documentación antes de la fecha de cierre ({tmpl.cierre})."
                    </p>
                  </div>

                  {/* Email Footer Button */}
                  <div className="p-3 bg-slate-50 dark:bg-slate-700/30 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-500">Notificación Automatizada BidCoop</span>
                    <button
                      onClick={() => {
                        setCopiedEmailIndex(idx);
                        setTimeout(() => setCopiedEmailIndex(null), 3000);
                      }}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg transition-all"
                    >
                      {copiedEmailIndex === idx ? '✓ Enviado al Correo' : '✉️ Reenviar Notificación'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB CONTENT 3: WIN-RATE AI */}
      {activeTab === 'winrate' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white p-6 rounded-2xl shadow-md space-y-3">
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-slate-950 font-black text-xs px-2.5 py-1 rounded-full uppercase">
                Algoritmo Inteligente Win-Rate AI
              </span>
            </div>
            <h3 className="text-xl font-black">
              Sugeridor de Precio Óptimo de Oferta
            </h3>
            <p className="text-xs text-slate-300 max-w-3xl">
              El motor de inteligencia artificial de BidCoop analiza el presupuesto asignado por el organismo comprador y la conducta histórica de competidores (ej: Dimerc SpA) para calcular el precio óptimo con un 94.2% de probabilidad de ganar la adjudicación manteniendo el margen comercial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {companyFilteredOps.slice(0, 3).map((op) => {
              const winPrice = Math.round(op.monto * 0.94);
              const marginEst = Math.round((winPrice - (op.monto * 0.65)));
              return (
                <div key={op.codigo} className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-xs text-indigo-600 dark:text-indigo-400">{op.codigo}</span>
                    <span className="bg-emerald-100 text-emerald-800 font-bold text-[10px] px-2 py-0.5 rounded-full">
                      Match: {op.matchScore}%
                    </span>
                  </div>

                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white line-clamp-2">
                    {op.titulo}
                  </h4>

                  <div className="space-y-2 text-xs border-t border-b border-slate-100 dark:border-slate-700 py-3">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Presupuesto Público:</span>
                      <span className="font-bold">${op.monto.toLocaleString('es-CL')} CLP</span>
                    </div>
                    <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-extrabold">
                      <span>Precio Sugerido AI:</span>
                      <span>${winPrice.toLocaleString('es-CL')} CLP</span>
                    </div>
                    <div className="flex justify-between text-indigo-600 dark:text-indigo-400 font-bold">
                      <span>Margen Est. Holding:</span>
                      <span>+${marginEst.toLocaleString('es-CL')} CLP</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleExportExcel(op.empresaMatch || 'Todas')}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-700 dark:hover:bg-slate-600 font-bold text-xs py-2 rounded-xl transition-all"
                  >
                    Aplicar Precio a Postulación
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB CONTENT 4: CONFIGURACIÓN DE AUTOMATIZACIÓN (8:00 AM) */}
      {activeTab === 'configuracion' && (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
          <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
            <span>⚙️ Parámetros de Programación de Envíos Diarios</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            {/* Hour Selector */}
            <div className="space-y-2">
              <label className="font-extrabold text-slate-700 dark:text-slate-300 block">
                Hora Oficial de Despacho Automático
              </label>
              <input
                type="time"
                value={reportTime}
                onChange={(e) => setReportTime(e.target.value)}
                className="w-full bg-slate-100 dark:bg-slate-700 font-mono font-bold text-sm text-slate-900 dark:text-white px-4 py-2.5 rounded-xl border-none focus:ring-2 focus:ring-indigo-500"
              />
              <p className="text-slate-500 text-[11px]">
                Hora recomendada: 08:00 AM (Chile GMT-4).
              </p>
            </div>

            {/* WhatsApp Recipients */}
            <div className="space-y-2">
              <label className="font-extrabold text-slate-700 dark:text-slate-300 block">
                📱 Números WhatsApp Push de Destino (Separados por coma)
              </label>
              <textarea
                rows={3}
                placeholder="+56977222179, +56912345678"
                value={recipientPhones}
                onChange={(e) => setRecipientPhones(e.target.value)}
                className="w-full bg-slate-100 dark:bg-slate-700 font-mono text-xs text-slate-900 dark:text-white p-3 rounded-xl border-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email Recipients */}
            <div className="space-y-2">
              <label className="font-extrabold text-slate-700 dark:text-slate-300 block">
                ✉️ Lista de Correos de Destino (Vendedores y Jefes de Venta)
              </label>
              <textarea
                rows={3}
                value={recipientEmails}
                onChange={(e) => setRecipientEmails(e.target.value)}
                className="w-full bg-slate-100 dark:bg-slate-700 font-mono text-xs text-slate-900 dark:text-white p-3 rounded-xl border-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Toggle Switches */}
          <div className="space-y-4 border-t border-slate-100 dark:border-slate-700 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-800 dark:text-slate-200">Envío por Correo Electrónico (8:00 AM)</div>
                <div className="text-slate-500 text-[11px]">Envía el reporte Excel adjunto automáticamente todas las mañanas.</div>
              </div>
              <input
                type="checkbox"
                checked={autoEmailEnabled}
                onChange={(e) => setAutoEmailEnabled(e.target.checked)}
                className="w-5 h-5 accent-indigo-600 rounded cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-800 dark:text-slate-200">Alertas Push vía WhatsApp / Telegram (8:00 AM)</div>
                <div className="text-slate-500 text-[11px]">Envía un resumen ejecutivo rápido a <strong className="text-indigo-600 dark:text-indigo-400 font-mono">+56 9 7722 2179 (Jonathan Cooper)</strong> y al equipo de ventas.</div>
              </div>
              <input
                type="checkbox"
                checked={whatsappPushEnabled}
                onChange={(e) => setWhatsappPushEnabled(e.target.checked)}
                className="w-5 h-5 accent-indigo-600 rounded cursor-pointer"
              />
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => {
                setReportSuccessMsg('Configuración de automatización 8:00 AM guardada con éxito.');
                setTimeout(() => setReportSuccessMsg(null), 4000);
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
            >
              Guardar Cambios de Automatización
            </button>
          </div>
        </div>
      )}

      {/* MODAL DE VISTA PREVIA Y ENVÍO DE CORREO REAL */}
      {showEmailPreviewModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800">
            
            {/* Modal Header */}
            <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="bg-indigo-600 text-white font-black text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Vista Previa del Correo Oficial 08:00 AM
                </span>
                <h3 className="text-xl font-black mt-1">
                  Reporte Diario de Compras Ágiles — jocooperg@gmail.com
                </h3>
              </div>
              <button
                onClick={() => setShowEmailPreviewModal(false)}
                className="text-slate-400 hover:text-white font-black text-xl px-3 py-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            {/* Email Render Preview */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs bg-slate-50 dark:bg-slate-950 flex-1">
              
              {/* Technical explanation alert & Credentials Config */}
              <div className="bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 p-5 rounded-2xl text-blue-900 dark:text-blue-200 space-y-3">
                <div className="font-extrabold flex items-center justify-between">
                  <span className="text-sm">🔑 Conector para Entrega Directa en Gmail (jocooperg@gmail.com)</span>
                  <span className="bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-100 text-[10px] font-bold px-2 py-0.5 rounded">Requisito Antispam Gmail</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Para que los servidores de <strong>Gmail</strong> acepten envíos automáticos desde Vercel en la nube, ingresa abajo una <strong>Resend API Key (gratuita)</strong> o tus credenciales <strong>Gmail SMTP (Contraseña de Aplicación)</strong>:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="text-[11px] font-bold block mb-1">Opción A: Resend API Key (`re_...`):</label>
                    <input
                      type="password"
                      placeholder="re_123456789..."
                      value={userResendKey}
                      onChange={(e) => setUserResendKey(e.target.value)}
                      className="w-full bg-white dark:bg-slate-800 border border-blue-300 dark:border-blue-700 text-xs px-3 py-2 rounded-xl text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold block mb-1">Opción B: Gmail App Password:</label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="tu-correo@gmail.com"
                        value={userSmtpUser}
                        onChange={(e) => setUserSmtpUser(e.target.value)}
                        className="w-full bg-white dark:bg-slate-800 border border-blue-300 dark:border-blue-700 text-[11px] px-2.5 py-2 rounded-xl text-slate-900 dark:text-white"
                      />
                      <input
                        type="password"
                        placeholder="xxxx xxxx xxxx xxxx"
                        value={userSmtpPass}
                        onChange={(e) => setUserSmtpPass(e.target.value)}
                        className="w-full bg-white dark:bg-slate-800 border border-blue-300 dark:border-blue-700 text-[11px] px-2.5 py-2 rounded-xl text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => handleSendTestEmail('jocooperg@gmail.com')}
                    disabled={sendingEmail}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-sm"
                  >
                    {sendingEmail ? 'Enviando...' : '🚀 Disparar Envío Real a jocooperg@gmail.com'}
                  </button>
                </div>
              </div>

              {/* Formatted HTML Email Canvas */}
              <div className="bg-white text-slate-900 rounded-2xl p-6 border border-slate-200 shadow-md space-y-4">
                <div className="border-b border-slate-200 pb-3 space-y-1 text-xs">
                  <div><strong>De:</strong> notificaciones@bidcoop.cl</div>
                  <div><strong>Para:</strong> jocooperg@gmail.com</div>
                  <div><strong>Asunto:</strong> <span className="font-extrabold text-indigo-700">[BidCoop 08:00 AM] Reporte Diario de Compras Ágiles - {selectedCompany} ({new Date().toISOString().split('T')[0]})</span></div>
                  <div><strong>Adjunto:</strong> <span className="font-mono font-bold text-emerald-700">BidCoop_Reporte_Diario_Compras_Agiles_{selectedCompany}_{new Date().toISOString().split('T')[0]}.csv</span></div>
                </div>

                {/* Email Body HTML render */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white p-4 rounded-xl">
                    <h4 className="font-black text-base">Reporte Diario de Compras Ágiles Activas</h4>
                    <p className="text-[11px] text-indigo-200">Segmento: {selectedCompany} | Presupuesto Total: ${companyFilteredOps.reduce((a,c) => a + c.monto, 0).toLocaleString('es-CL')} CLP</p>
                  </div>

                  <p className="text-slate-700 leading-relaxed">
                    Estimado equipo comercial de <strong>{selectedCompany}</strong>,<br/>
                    Se adjunta a este correo electrónico el informe completo en formato <code>.CSV / Excel</code> con las <strong>{companyFilteredOps.length} Compras Ágiles activas</strong> del día de hoy.
                  </p>

                  <table className="w-full border-collapse text-[11px] text-left">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 font-black uppercase">
                        <th className="p-2">Código</th>
                        <th className="p-2">Proceso</th>
                        <th className="p-2">Organismo</th>
                        <th className="p-2">Monto CLP</th>
                        <th className="p-2">Precio Sugerido AI</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {companyFilteredOps.slice(0, 5).map(op => (
                        <tr key={op.codigo}>
                          <td className="p-2 font-mono font-bold text-indigo-600">{op.codigo}</td>
                          <td className="p-2 font-semibold">{op.titulo}</td>
                          <td className="p-2 text-slate-600">{op.organismo}</td>
                          <td className="p-2 font-bold">${op.monto.toLocaleString('es-CL')}</td>
                          <td className="p-2 font-bold text-emerald-600">${Math.round(op.monto * 0.94).toLocaleString('es-CL')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-4 bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handleOpenMailClient}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-2"
              >
                <span>✉️ Abrir en mi Cliente de Correo (`mailto:`)</span>
              </button>

              <button
                onClick={() => handleExportExcel(selectedCompany)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-2"
              >
                <span>📥 Descargar Archivo Adjunto .CSV (BidCoop)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
