import React, { useState, useMemo } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, AreaChart, Area
} from 'recharts';
import { Oportunidad, Postulacion } from '../types';

interface AnalyticsModuleProps {
  activeSubSection: string;
  oportunidades: Oportunidad[];
  postulaciones: Postulacion[];
  onNavigateView?: (module: string, subSection: string) => void;
}

const COLORS = ['#2563EB', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

export default function AnalyticsModule({
  activeSubSection,
  oportunidades,
  postulaciones,
  onNavigateView
}: AnalyticsModuleProps) {
  const [currentTab, setCurrentTab] = useState(activeSubSection || 'inteligencia-mercado');

  // --- MARKET INTEL DATA ---
  // Buyer payment index data
  const buyerPaymentDays = [
    { name: 'Muni Santiago', dias: 25, rating: 'Excelente' },
    { name: 'JUNJI', dias: 45, rating: 'Normal' },
    { name: 'SSMSO', dias: 68, rating: 'Crítico' },
    { name: 'Muni Las Condes', dias: 18, rating: 'Excelente' },
    { name: 'Fonasa', dias: 32, rating: 'Normal' },
    { name: 'MOP', dias: 55, rating: 'Lento' }
  ];

  // Competitors market share
  const competitorsShare = [
    { name: 'Prisa S.A. Logística', value: 38 },
    { name: 'Inderquim S.A. (Nosotros)', value: 25 },
    { name: 'Dimeiggs Distribuidora', value: 20 },
    { name: 'Distribuidora del Sur', value: 12 },
    { name: 'Comercial Ramos SpA', value: 5 }
  ];

  // --- TEAM PERFORMANCE DATA ---
  // Funnel: Identified -> Bidding -> Postulated -> Won
  const conversionFunnel = [
    { stage: 'Identificadas', cantidad: oportunidades.length + 15 },
    { stage: 'En Seguimiento', cantidad: oportunidades.length },
    { stage: 'Postuladas', cantidad: postulaciones.length + 3 },
    { stage: 'Adjudicadas (Éxito)', cantidad: postulaciones.filter(p => p.estado === 'Adjudicada').length + 2 }
  ];

  // Team Leaderboard performance
  const teamLeaderboard = [
    { name: 'Jonathan Cooper', postuladas: 8, ganadas: 4, efectividad: 50 },
    { name: 'Carlos Mendoza', postuladas: 6, ganadas: 3, efectividad: 50 },
    { name: 'Valentina Silva', postuladas: 5, ganadas: 2, efectividad: 40 },
    { name: 'Felipe Torres', postuladas: 4, ganadas: 1, efectividad: 25 }
  ];

  const handleRawExport = () => {
    const rawData = {
      buyerPaymentIndex: buyerPaymentDays,
      marketCompetitorShares: competitorsShare,
      conversionFunnel: conversionFunnel,
      teamLeaderboard: teamLeaderboard
    };
    const blob = new Blob([JSON.stringify(rawData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'BidCoop_Raw_Analytics_Intelligence.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('Reporte bruto de inteligencia comercial descargado.');
  };

  const handleSendWhatsappDirect = async () => {
    try {
      const res = await fetch('/api/send-whatsapp-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: '56977222179',
          empresa: 'Consolidado Holding',
          oportunidades
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error enviando WhatsApp');
      alert(`¡${data.pushStatus}! Remitente: ${data.sender} ➔ Destino: ${data.destination}`);
    } catch (err: any) {
      alert(`Error enviando WhatsApp Push: ${err.message}`);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* ALERT ACTIONS QUICK BANNER */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 p-4 rounded-2xl border border-emerald-500/30 text-white flex flex-wrap items-center justify-between gap-3 shadow-md">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🔔</span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-emerald-400 uppercase tracking-wider">Servicio de Alertas Activo</span>
              <span className="text-[10px] bg-emerald-900/60 text-emerald-200 px-2 py-0.5 rounded-full border border-emerald-700/50">
                8:00 AM • UltraMsg Bot
              </span>
            </div>
            <p className="text-xs text-slate-300">
              Notificaciones de Compras Ágiles en tiempo real a <strong className="text-emerald-300 font-mono">+56 9 7722 2179 (Jonathan Cooper)</strong>.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSendWhatsappDirect}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs px-3.5 py-2 rounded-xl transition shadow-sm cursor-pointer flex items-center gap-1.5"
          >
            <span>📱</span>
            Disparar Push WhatsApp (+56 9 7722 2179)
          </button>

          {onNavigateView && (
            <button
              onClick={() => onNavigateView('analytics', 'reportes-8am')}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs px-3.5 py-2 rounded-xl transition shadow-sm cursor-pointer flex items-center gap-1.5"
            >
              <span>⏰</span>
              Ver Módulo de Reportes 8 AM
            </button>
          )}
        </div>
      </div>

      {/* TABS CONTROLLER */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
        <div className="flex items-center gap-1.5">
          {[
            { id: 'inteligencia-mercado', label: 'Inteligencia de Mercado' },
            { id: 'desempeno-equipo', label: 'Desempeño Comercial Interno' },
            { id: 'reportes-8am', label: '⏰ Reportes y Alertas 8 AM' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                if (tab.id === 'reportes-8am' && onNavigateView) {
                  onNavigateView('analytics', 'reportes-8am');
                } else {
                  setCurrentTab(tab.id);
                }
              }}
              className={`px-4 py-2 rounded-xl text-xs font-black transition ${
                currentTab === tab.id
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/10'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          onClick={handleRawExport}
          className="p-2 px-3 rounded-xl border border-slate-250 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-[10px] uppercase transition"
        >
          📥 Descargar Datos Brutos
        </button>
      </div>

      {/* =======================================================================
          TAB 1: INTELIGENCIA DE MERCADO
          ======================================================================= */}
      {currentTab === 'inteligencia-mercado' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Buyer Payment Speed */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
            <div>
              <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Índice de Pago de Compradores</h3>
              <p className="text-[10px] text-slate-400 mt-0.5">Plazos promedios declarados y reales de pago (días transcurridos).</p>
            </div>

            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={buyerPaymentDays} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" className="dark:stroke-slate-855" />
                  <XAxis dataKey="name" style={{ fontSize: 8, fontWeight: 'bold' }} stroke="#94a3b8" />
                  <YAxis style={{ fontSize: 8, fontWeight: 'bold' }} stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0f172a',
                      border: '1px solid #1e293b',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '10px'
                    }}
                  />
                  <Bar dataKey="dias" fill="#3b82f6" radius={[4, 4, 0, 0]}>
                    {buyerPaymentDays.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.dias > 50 ? '#EF4444' : entry.dias > 30 ? '#F59E0B' : '#10B981'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex gap-4 text-[9px] font-bold text-slate-400 justify-center">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-green-500 rounded-full" /> &lt;30 días (Rápido)</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-amber-500 rounded-full" /> 30-50 días (Medio)</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-red-500 rounded-full" /> &gt;50 días (Crítico)</span>
            </div>
          </div>

          {/* Competitor Market share */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Cuota de Mercado Estimada</h3>
              <p className="text-[10px] text-slate-400 mt-0.5">Distribución porcentual de adjudicaciones del rubro consolidado.</p>
            </div>

            <div className="h-48 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={competitorsShare}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {competitorsShare.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0f172a',
                      border: '1px solid #1e293b',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '10px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {competitorsShare.map((entry, index) => (
                <div key={entry.name} className="flex items-center gap-1.5 text-[9px] font-bold text-slate-500">
                  <span className="w-2.5 h-2.5 rounded" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                  <span>{entry.name} ({entry.value}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =======================================================================
          TAB 2: DESEMPEÑO COMERCIAL INTERNO
          ======================================================================= */}
      {currentTab === 'desempeno-equipo' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Conversion funnel */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
            <div>
              <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Embudo de Conversión de Ofertas</h3>
              <p className="text-[10px] text-slate-400 mt-0.5">Tasas de avance desde la detección inicial hasta la adjudicación final.</p>
            </div>

            <div className="space-y-4 py-4">
              {conversionFunnel.map((step, idx) => {
                const maxVal = conversionFunnel[0].cantidad;
                const widthPercent = (step.cantidad / maxVal) * 100;
                return (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                      <span>{step.stage}</span>
                      <span>{step.cantidad} Negocios</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden shadow-inner">
                      <div
                        className="bg-blue-600 dark:bg-blue-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${widthPercent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team performance leaderboard */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Líderes de Adquisición</h3>
              <p className="text-[10px] text-slate-400 mt-0.5">Postulaciones y tasa de éxito por especialista gestor.</p>
            </div>

            <div className="space-y-4 flex-1 mt-4">
              {teamLeaderboard.map((user, idx) => (
                <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-850/50 rounded-xl border border-slate-100 dark:border-slate-800 text-xs flex justify-between items-center">
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-white">{user.name}</h4>
                    <span className="text-[9px] text-slate-400 block mt-1">{user.postuladas} Postuladas • {user.ganadas} Adjudicadas</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[8px] uppercase font-black text-slate-400 block">Efectividad</span>
                    <strong className="text-xs font-black text-green-600 dark:text-green-400">{user.efectividad}%</strong>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => alert('Generando reporte en PDF de rendimiento interno...')}
              className="w-full mt-4 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-black rounded-xl transition"
            >
              Exportar Reporte Comercial PDF
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
