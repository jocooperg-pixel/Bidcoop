import React, { useState, useMemo } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';
import { Oportunidad, MiembroEquipo } from '../types';

interface DashboardModuleProps {
  oportunidades: Oportunidad[];
  teamMembers: MiembroEquipo[];
  onInviteMember: (nombre: string, email: string, rol: 'Admin' | 'Gestor' | 'Lector') => void;
  onSelectOpportunity: (op: Oportunidad) => void;
  currentUser: { nombre: string };
  globalPrefs: {
    rubros: string[];
    modalidades: string[];
    region: string;
    montoMinimo: number;
  };
  onChangePrefs: (newPrefs: {
    rubros: string[];
    modalidades: string[];
    region: string;
    montoMinimo: number;
  }) => void;
}

export default function DashboardModule({
  oportunidades,
  teamMembers,
  onInviteMember,
  onSelectOpportunity,
  currentUser,
  globalPrefs,
  onChangePrefs
}: DashboardModuleProps) {
  const [dateRange, setDateRange] = useState<'hoy' | '7d' | '1m' | '3m'>('1m');
  const [suggestedTab, setSuggestedTab] = useState<'match' | 'recientes' | 'monto'>('match');
  
  // Team invite form
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteName, setInviteName] = useState('');
  const [inviteRole, setInviteRole] = useState<'Admin' | 'Gestor' | 'Lector'>('Gestor');

  // Search onboarding configuration (B2B Convenios & Rubros setup)
  const [selectedRubros, setSelectedRubros] = useState<string[]>(globalPrefs.rubros);
  const [selectedModalidades, setSelectedModalidades] = useState<string[]>(globalPrefs.modalidades);
  const [preferredRegion, setPreferredRegion] = useState<string>(globalPrefs.region);
  const [alertMinMonto, setAlertMinMonto] = useState<string>(globalPrefs.montoMinimo.toString());
  const [configSaved, setConfigSaved] = useState(false);

  // Date range multiplier to simulate data shifting on range change
  const rangeMultiplier = useMemo(() => {
    switch (dateRange) {
      case 'hoy': return 0.2;
      case '7d': return 0.6;
      case '1m': return 1.0;
      case '3m': return 2.4;
    }
  }, [dateRange]);

  // Dynamic KPI Card counts
  const kpiData = useMemo(() => {
    const totalOps = Math.round(oportunidades.length * rangeMultiplier);
    const alerts = Math.round(oportunidades.filter(o => o.matchScore >= 90).length * rangeMultiplier);
    const closeCount = oportunidades.filter(o => o.estado === 'Publicada').slice(0, 3).length; // hardcoded count for urgency
    const gcCount = oportunidades.filter(o => o.esInvitacionGrandesCompras || o.modalidad === 'Grandes Compras').length;
    return {
      available: totalOps,
      alerts: alerts,
      closingSoon: closeCount,
      grandesCompras: gcCount
    };
  }, [oportunidades, rangeMultiplier]);

  // Active Grandes Compras Invitations
  const grandesComprasInvitaciones = useMemo(() => {
    return oportunidades.filter(o => (o.esInvitacionGrandesCompras || o.modalidad === 'Grandes Compras') && o.estado === 'Publicada');
  }, [oportunidades]);

  // Participated Grandes Compras Summary (7 Processes)
  const participatedGrandesCompras = useMemo(() => {
    const gcOps = oportunidades.filter(o => o.esInvitacionGrandesCompras || o.modalidad === 'Grandes Compras');
    const adjudicadas = gcOps.filter(o => o.estado === 'Adjudicada');
    const enEvaluacion = gcOps.filter(o => o.estado === 'En Evaluación' || o.estado === 'Postulada');
    const montoAdjudicado = adjudicadas.reduce((acc, curr) => acc + curr.monto, 0);
    const montoEvaluacion = enEvaluacion.reduce((acc, curr) => acc + curr.monto, 0);
    
    return {
      total: adjudicadas.length + enEvaluacion.length,
      adjudicadasCount: adjudicadas.length,
      enEvaluacionCount: enEvaluacion.length,
      adjudicadas,
      enEvaluacion,
      montoAdjudicado,
      montoEvaluacion
    };
  }, [oportunidades]);

  // Suggested opportunities filtering (only active ones)
  const suggestedOpportunities = useMemo(() => {
    const activeOps = oportunidades.filter(o => o.estado === 'Publicada');
    if (suggestedTab === 'match') {
      return [...activeOps].sort((a, b) => b.matchScore - a.matchScore).slice(0, 4);
    } else if (suggestedTab === 'recientes') {
      return [...activeOps].sort((a, b) => new Date(b.fechaPublicacion).getTime() - new Date(a.fechaPublicacion).getTime()).slice(0, 4);
    } else {
      return [...activeOps].sort((a, b) => b.monto - a.monto).slice(0, 4);
    }
  }, [oportunidades, suggestedTab]);

  // Chart data simulated based on range
  const chartData = useMemo(() => {
    const base = [
      { name: 'Semana 1', oportunidades: 14, postuladas: 4, exito: 2 },
      { name: 'Semana 2', oportunidades: 18, postuladas: 8, exito: 4 },
      { name: 'Semana 3', oportunidades: 22, postuladas: 7, exito: 5 },
      { name: 'Semana 4', oportunidades: 25, postuladas: 11, exito: 8 }
    ];
    return base.map(item => ({
      ...item,
      oportunidades: Math.round(item.oportunidades * rangeMultiplier),
      postuladas: Math.round(item.postuladas * rangeMultiplier),
      exito: Math.round(item.exito * rangeMultiplier)
    }));
  }, [rangeMultiplier]);

  const handleInviteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail.trim() || !inviteName.trim()) return;
    onInviteMember(inviteName, inviteEmail, inviteRole);
    setInviteEmail('');
    setInviteName('');
    alert(`Invitación enviada con éxito a ${inviteEmail}`);
  };

  const handleSaveConfig = () => {
    onChangePrefs({
      rubros: selectedRubros,
      modalidades: selectedModalidades,
      region: preferredRegion,
      montoMinimo: parseFloat(alertMinMonto) || 0
    });
    setConfigSaved(true);
    setTimeout(() => setConfigSaved(false), 3000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* BRAND BANNER WITH FLOATING ROUND LOGO */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 rounded-3xl border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-center gap-5 relative z-10">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 p-0.5 shadow-xl shadow-sky-500/30 shrink-0 border-2 border-white">
            <div className="w-full h-full rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
              <img src="/bidcoop-logo.png" alt="BidCoop Logo" className="w-full h-full object-contain rounded-full" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-sky-500/20 text-sky-300 border border-sky-500/30 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Plataforma Oficial B2B
              </span>
              <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                Sincronizado con Mercado Público 🇨🇱
              </span>
            </div>
            <h2 className="text-xl font-black tracking-tight text-white">
              BidCoop — Tu Plataforma en Mercado Público
            </h2>
            <p className="text-xs text-slate-300 max-w-xl">
              Monitoreo inteligente en tiempo real de Convenios Marco, Compras Ágiles y Licitaciones Públicas segmentado por holding.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 relative z-10">
          <div className="text-right bg-slate-950/60 p-3 rounded-2xl border border-slate-800/80">
            <span className="text-[10px] font-extrabold uppercase text-slate-400 block">Status Holding</span>
            <span className="text-xs font-black text-sky-400 flex items-center gap-1.5 justify-end">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
              3 Empresas Activas
            </span>
          </div>
        </div>
      </div>

      {/* 1. WELCOME SCREEN & DATE PICKER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white leading-tight">
            ¡Hola, {currentUser.nombre}! 👋
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Aquí tienes el resumen de mercado y el estado de tu equipo para hoy.
          </p>
        </div>

        {/* Date Selector */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit">
          {(['hoy', '7d', '1m', '3m'] as const).map((r) => (
            <button
              key={r}
              onClick={() => setDateRange(r)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${
                dateRange === r
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              {r === 'hoy' ? 'Hoy' : r === '7d' ? '7 Días' : r === '1m' ? 'Último Mes' : '3 Meses'}
            </button>
          ))}
        </div>
      </div>
      {/* 1. GRANDES COMPRAS BANNER - ABIERTAS VS CERRADAS EN EVALUACIÓN */}
      {grandesComprasInvitaciones.length > 0 ? (
        <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 border border-purple-500/40 rounded-2xl p-5 text-white shadow-xl relative overflow-hidden space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10 border-b border-purple-500/30 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-purple-500 text-white shadow-sm">
                  🛍️ CONVENIO MARCO &gt; 1.000 UTM
                </span>
                <span className="text-xs font-bold text-purple-200">
                  {grandesComprasInvitaciones.length} Invitaciones Abiertas
                </span>
              </div>
              <h3 className="text-lg font-black text-white mt-1">
                Grandes Compras con Intención de Compra Abierta
              </h3>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-purple-950/60 border border-purple-700/50 text-purple-200">
                Total en Juego: ${(grandesComprasInvitaciones.reduce((acc, curr) => acc + curr.monto, 0)).toLocaleString('es-CL')} CLP
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 relative z-10">
            {grandesComprasInvitaciones.map(gc => (
              <div 
                key={gc.id} 
                className="bg-slate-900/90 backdrop-blur border border-purple-500/30 hover:border-purple-400 rounded-xl p-3.5 transition-all flex flex-col justify-between hover:shadow-lg hover:shadow-purple-900/20 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${
                      gc.empresaMatch === 'Inder-Roll' 
                        ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-700/50' 
                        : 'bg-blue-950/90 text-blue-300 border border-blue-700/50'
                    }`}>
                      🏢 {gc.empresaMatch || 'Empresa'}
                    </span>
                    <span className="text-[10px] font-extrabold text-amber-400">
                      Match Score: {gc.matchScore}%
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-white group-hover:text-purple-200 transition line-clamp-2">
                    {gc.titulo}
                  </h4>
                  <p className="text-[10px] text-slate-300 font-medium mt-1">
                    🏛️ {gc.organismo}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-800/90 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 block uppercase">Monto Estimado</span>
                    <span className="text-sm font-black text-emerald-400">
                      ${gc.monto.toLocaleString('es-CL')} CLP {gc.montoUtm ? `(~${gc.montoUtm} UTM)` : ''}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => onSelectOpportunity(gc)}
                    className="px-3 py-1.5 rounded-lg text-[10px] font-black uppercase bg-purple-600 hover:bg-purple-500 text-white transition cursor-pointer flex items-center gap-1 shadow-md shadow-purple-600/30"
                  >
                    <span>Ingresar Oferta CM</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-700/50 flex items-center justify-center shrink-0">
              <span className="text-lg">🔒</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase text-purple-400 tracking-wider">Estado Grandes Compras</span>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-700/40">
                  0 Procesos Abiertos en Mercado Público
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Todos los procesos de Convenio Marco &gt; 1.000 UTM están <strong>CERRADOS</strong> en recepción de cotizaciones y actualmente en <strong>COMISIÓN EVALUADORA (Sin Oferta Seleccionada aún)</strong>.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectOpportunity(participatedGrandesCompras.enEvaluacion[0] || null)}
            className="px-3 py-1.5 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white transition cursor-pointer shrink-0 text-center"
          >
            Ver Seguimiento de Cerradas ({participatedGrandesCompras.enEvaluacionCount})
          </button>
        </div>
      )}

      {/* PARTICIPATION STATUS IN GRANDES COMPRAS & SEGUIMIENTO DE CERRADAS */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase text-purple-600 dark:text-purple-400 tracking-wider">📊 Seguimiento de Grandes Compras</span>
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300">
                {participatedGrandesCompras.total} Procesos Bajo Monitoreo
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Estado de Grandes Compras en Convenio Marco: <strong>{participatedGrandesCompras.enEvaluacionCount} Cerradas en Evaluación (Sin Oferta Seleccionada aún)</strong> y <strong>{participatedGrandesCompras.adjudicadasCount} Adjudicadas</strong>.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 px-3 py-1.5 rounded-xl text-right">
              <span className="text-[9px] font-bold uppercase text-amber-600 dark:text-amber-400 block">En Evaluación (Sin Adjudicar)</span>
              <span className="text-xs font-black text-amber-700 dark:text-amber-300">
                ${participatedGrandesCompras.montoEvaluacion.toLocaleString('es-CL')} CLP
              </span>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 px-3 py-1.5 rounded-xl text-right">
              <span className="text-[9px] font-bold uppercase text-emerald-600 dark:text-emerald-400 block">Adjudicado Exitoso</span>
              <span className="text-xs font-black text-emerald-700 dark:text-emerald-300">
                ${participatedGrandesCompras.montoAdjudicado.toLocaleString('es-CL')} CLP
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* En Evaluación / Cerradas sin Oferta Seleccionada Section */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <h4 className="text-[11px] font-black uppercase text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                <span>⏳ Cerradas a Espera de Adjudicación ({participatedGrandesCompras.enEvaluacionCount})</span>
              </h4>
              <span className="text-[9px] font-extrabold uppercase text-amber-500 bg-amber-100 dark:bg-amber-950 px-2 py-0.5 rounded">
                Sin Oferta Seleccionada
              </span>
            </div>
            
            <div className="space-y-2">
              {participatedGrandesCompras.enEvaluacion.map(op => (
                <div 
                  key={op.id}
                  onClick={() => onSelectOpportunity(op)}
                  className="p-3.5 rounded-xl border border-amber-300/80 dark:border-amber-800/60 bg-amber-50/50 dark:bg-amber-950/20 hover:border-amber-500 transition cursor-pointer flex flex-col justify-between gap-2.5 group shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1.5 mb-1">
                      <span className="text-[10px] font-mono font-bold text-slate-600 dark:text-slate-400">{op.codigo}</span>
                      <div className="flex items-center gap-1">
                        <span className={`text-[8px] font-black uppercase px-1.5 py-0.2 rounded ${
                          op.empresaMatch === 'Inder-Roll' ? 'bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300' : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                        }`}>
                          {op.empresaMatch}
                        </span>
                        <span className="text-[8px] font-black uppercase px-1.5 py-0.2 rounded bg-amber-500 text-white animate-pulse">
                          Sin Oferta Seleccionada
                        </span>
                      </div>
                    </div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-600 transition line-clamp-1">
                      {op.titulo}
                    </h5>
                    <span className="text-[10px] text-slate-500 block truncate mt-0.5">🏛️ {op.organismo}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-amber-200/60 dark:border-amber-900/40">
                    <div>
                      <span className="text-[9px] text-slate-400 block font-semibold">Monto Proceso</span>
                      <span className="text-xs font-black text-amber-700 dark:text-amber-300">
                        ${op.monto.toLocaleString('es-CL')} CLP {op.montoUtm ? `(~${op.montoUtm} UTM)` : ''}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] text-slate-400 block font-semibold">Adjudicación Estimada</span>
                      <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">
                        📅 {op.fechaAdjudicacionEstimada || 'Próximamente'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Adjudicadas Section */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-black uppercase text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <span>🏆 Adjudicadas ({participatedGrandesCompras.adjudicadasCount})</span>
            </h4>
            <div className="space-y-2">
              {participatedGrandesCompras.adjudicadas.map(op => (
                <div 
                  key={op.id}
                  onClick={() => onSelectOpportunity(op)}
                  className="p-3.5 rounded-xl border border-emerald-200/80 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/15 hover:border-emerald-400 transition cursor-pointer flex flex-col justify-between gap-2.5 group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1.5 mb-1">
                      <span className="text-[10px] font-mono font-bold text-slate-500">{op.codigo}</span>
                      <span className={`text-[8px] font-black uppercase px-1.5 py-0.2 rounded ${
                        op.empresaMatch === 'Inder-Roll' ? 'bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300' : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                      }`}>
                        {op.empresaMatch}
                      </span>
                    </div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 transition line-clamp-1">
                      {op.titulo}
                    </h5>
                    <span className="text-[10px] text-slate-500 block truncate mt-0.5">🏛️ {op.organismo}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-emerald-200/60 dark:border-emerald-900/40">
                    <div>
                      <span className="text-[9px] text-slate-400 block font-semibold">Monto Adjudicado</span>
                      <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">
                        ${op.monto.toLocaleString('es-CL')} CLP
                      </span>
                    </div>
                    <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-emerald-600 text-white">
                      🏆 Adjudicada
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-2xl p-5 text-white shadow-xl shadow-blue-500/10 flex flex-col justify-between h-36">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-black tracking-wider text-blue-100">Oportunidades Disponibles</span>
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 4a2 2 0 00-2-2v3m2-3V9m0 0l-2 2" />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black">{kpiData.available}</h2>
            <span className="text-[10px] font-bold text-blue-200 block mt-1">Nuevos registros en el período</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between h-36">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-black tracking-wider text-slate-400">Alertas Inteligentes</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">{kpiData.alerts}</h2>
            <span className="text-[10px] font-bold text-green-600 dark:text-green-400 block mt-1">Con Match Score &gt; 90%</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between h-36">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-black tracking-wider text-slate-400">Cierres Próximos</span>
            <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-950/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black text-red-500">{kpiData.closingSoon}</h2>
            <span className="text-[10px] font-bold text-red-400 block mt-1">Límite en menos de 48 horas</span>
          </div>
        </div>
      </div>

      {/* 3. CHARTS AND SUGGESTED OPTIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Activity charts */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Actividad de Abastecimiento</h3>
              <span className="text-[10px] text-slate-400">Volumen detectado contra postulaciones enviadas</span>
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorOps" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPost" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" className="dark:stroke-slate-800" />
                <XAxis dataKey="name" style={{ fontSize: 9, fontWeight: 'bold' }} stroke="#94a3b8" />
                <YAxis style={{ fontSize: 9, fontWeight: 'bold' }} stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    border: '1px solid #1e293b',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '11px',
                    fontWeight: 'bold'
                  }}
                />
                <Area type="monotone" dataKey="oportunidades" name="Oportunidades" stroke="#3B82F6" strokeWidth={2} fillOpacity={1} fill="url(#colorOps)" />
                <Area type="monotone" dataKey="postuladas" name="Postuladas" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#colorPost)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Setup onboarding for new users */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-5 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xs">🚀</span>
              <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Configuración Inicial</h3>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-4">
              Calibra tus preferencias para recibir mejores recomendaciones de la IA.
            </p>

            <div className="space-y-3.5">
              <div>
                <label className="text-[10px] uppercase font-black text-slate-400 block mb-1.5">Rubros de Convenio</label>
                <div className="space-y-1.5">
                  {[
                    { id: 'Aseo e Higiene', label: '🧼 Aseo e Higiene (Inder-Roll)' },
                    { id: 'Artículos de Escritorio y Oficina', label: '✏️ Artículos de Escritorio (Aminorte)' }
                  ].map((rubro) => {
                    const isChecked = selectedRubros.includes(rubro.id);
                    return (
                      <label key={rubro.id} className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-350 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {
                            if (isChecked) {
                              if (selectedRubros.length > 1) {
                                setSelectedRubros(prev => prev.filter(r => r !== rubro.id));
                              }
                            } else {
                              setSelectedRubros(prev => [...prev, rubro.id]);
                            }
                          }}
                          className="rounded border-slate-300 dark:border-slate-700 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5"
                        />
                        {rubro.label}
                      </label>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase font-black text-slate-400 block mb-1.5">Modalidades de Adquisición</label>
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {[
                    { id: 'Compra Ágil', label: '⚡ Compra Ágil' },
                    { id: 'Convenio Marco', label: '📦 Convenio' },
                    { id: 'Grandes Compras', label: '🛍️ Grandes Compras' },
                    { id: 'Licitación', label: '🏛️ Licitación' }
                  ].map((mod) => {
                    const isChecked = selectedModalidades.includes(mod.id);
                    return (
                      <button
                        key={mod.id}
                        type="button"
                        onClick={() => {
                          if (isChecked) {
                            if (selectedModalidades.length > 1) {
                              setSelectedModalidades(prev => prev.filter(m => m !== mod.id));
                            }
                          } else {
                            setSelectedModalidades(prev => [...prev, mod.id]);
                          }
                        }}
                        className={`px-2 py-1 rounded-lg text-[9px] font-black uppercase transition-all cursor-pointer border ${
                          isChecked
                            ? 'bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-500/10'
                            : 'bg-slate-50 dark:bg-slate-805 text-slate-550 border-slate-200 dark:border-slate-700 hover:bg-slate-105 dark:hover:bg-slate-800'
                        }`}
                      >
                        {mod.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Región</label>
                  <select
                    value={preferredRegion}
                    onChange={(e) => setPreferredRegion(e.target.value)}
                    className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-blue-500 outline-none text-slate-900 dark:text-slate-100 transition cursor-pointer"
                  >
                    <option value="Todos">Todas las Regiones</option>
                    <option value="Metropolitana">Metropolitana</option>
                    <option value="Arica y Parinacota">Arica y Parinacota</option>
                    <option value="Tarapacá">Tarapacá</option>
                    <option value="Antofagasta">Antofagasta</option>
                    <option value="Atacama">Atacama</option>
                    <option value="Coquimbo">Coquimbo</option>
                    <option value="Valparaíso">Valparaíso</option>
                    <option value="O'Higgins">O'Higgins</option>
                    <option value="Maule">Maule</option>
                    <option value="Ñuble">Ñuble</option>
                    <option value="Biobío">Biobío</option>
                    <option value="La Araucanía">La Araucanía</option>
                    <option value="Los Ríos">Los Ríos</option>
                    <option value="Los Lagos">Los Lagos</option>
                    <option value="Aysén">Aysén</option>
                    <option value="Magallanes">Magallanes</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Monto Mínimo</label>
                  <input
                    type="number"
                    value={alertMinMonto}
                    onChange={(e) => setAlertMinMonto(e.target.value)}
                    className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-blue-500 outline-none text-slate-900 dark:text-slate-100 transition"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleSaveConfig}
            className="w-full mt-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-black text-xs transition-all shadow-md shadow-slate-950/15"
          >
            {configSaved ? '✓ Preferencias Guardadas' : 'Guardar Parámetros de Alerta'}
          </button>
        </div>
      </div>

      {/* 4. TEAM PANEL AND SUGGESTED BIDS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Suggested Opportunities */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <div>
              <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Oportunidades Sugeridas</h3>
              <span className="text-[10px] text-slate-400">Recomendadas en base a tu perfil e historial</span>
            </div>
            
            {/* Tabs */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg w-fit">
              {(['match', 'recientes', 'monto'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setSuggestedTab(t)}
                  className={`px-2.5 py-1 rounded text-[9px] font-bold transition ${
                    suggestedTab === t
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {t === 'match' ? 'Alto Match' : t === 'recientes' ? 'Recientes' : 'Mayor Monto'}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <th className="py-2.5 text-[9px] uppercase font-black text-slate-400">Código / Organismo</th>
                  <th className="py-2.5 text-[9px] uppercase font-black text-slate-400">Título</th>
                  <th className="py-2.5 text-[9px] uppercase font-black text-slate-400 text-right">Monto</th>
                  <th className="py-2.5 text-[9px] uppercase font-black text-slate-400 text-center">Match</th>
                  <th className="py-2.5 text-[9px] uppercase font-black text-slate-400 text-center">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                {suggestedOpportunities.map((op) => (
                  <tr key={op.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-850/20 group">
                    <td className="py-3">
                      <span className="text-[10px] font-black text-slate-900 dark:text-white block">{op.codigo}</span>
                      <span className="text-[9px] text-slate-400 block mt-0.5 truncate max-w-[140px]">{op.organismo}</span>
                    </td>
                    <td className="py-3">
                      <span className="text-xs font-bold text-slate-850 dark:text-slate-200 line-clamp-1 max-w-[280px]">
                        {op.titulo}
                      </span>
                      <span className="text-[9px] text-slate-400 mt-0.5 block">Fecha Límite: {op.fechaCierre}</span>
                    </td>
                    <td className="py-3 text-right text-xs font-black text-slate-900 dark:text-white">
                      ${op.monto.toLocaleString('es-CL')} CLP
                    </td>
                    <td className="py-3 text-center">
                      <span className={`text-[10px] font-black ${
                        op.matchScore >= 90 ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'
                      }`}>
                        {op.matchScore}%
                      </span>
                    </td>
                    <td className="py-3 text-center">
                      <button
                        onClick={() => onSelectOpportunity(op)}
                        className="p-1 px-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-extrabold text-[10px] hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition"
                      >
                        Analizar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Team Members Workplace Panel */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-1.5">Equipo de Trabajo</h3>
            <p className="text-[10px] text-slate-400 mb-4">Integrantes asignados a la postulación de ofertas.</p>

            <div className="space-y-3.5 max-h-40 overflow-y-auto pr-1">
              {teamMembers.map((m) => (
                <div key={m.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center relative">
                      {m.avatar}
                      {/* Active status bubble */}
                      <span className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-slate-900 ${
                        m.estado === 'Activo' ? 'bg-green-500' : m.estado === 'Ausente' ? 'bg-amber-500' : 'bg-slate-400'
                      }`} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">{m.nombre}</h4>
                      <span className="text-[9px] text-slate-400 block mt-0.5">{m.email}</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-black bg-slate-100 dark:bg-slate-850 px-2 py-0.5 rounded text-slate-500 dark:text-slate-400">
                    {m.rol}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleInviteSubmit} className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
            <span className="text-[9px] uppercase font-black text-slate-400 block">Invitar al Espacio</span>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Nombre"
                value={inviteName}
                onChange={(e) => setInviteName(e.target.value)}
                className="text-[10px] p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-blue-500 outline-none text-slate-900 dark:text-slate-100"
                required
              />
              <select
                value={inviteRole}
                onChange={(e: any) => setInviteRole(e.target.value)}
                className="text-[10px] p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-blue-500 outline-none text-slate-900 dark:text-slate-100"
              >
                <option value="Admin">Admin</option>
                <option value="Gestor">Gestor</option>
                <option value="Lector">Lector</option>
              </select>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="email@empresa.cl"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                className="flex-1 text-[10px] p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-blue-500 outline-none text-slate-900 dark:text-slate-100"
                required
              />
              <button
                type="submit"
                className="px-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition"
              >
                Invitar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
