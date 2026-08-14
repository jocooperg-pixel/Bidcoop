import React, { useState, useMemo } from 'react';
import { Oportunidad, Postulacion } from '../types';

interface AnalyticsModuleProps {
  activeSubSection: string;
  oportunidades: Oportunidad[];
  postulaciones: Postulacion[];
  onNavigateView?: (module: string, subSection: string) => void;
}

export default function AnalyticsModule({
  activeSubSection,
  oportunidades,
  postulaciones,
  onNavigateView
}: AnalyticsModuleProps) {
  const [currentTab, setCurrentTab] = useState(activeSubSection || 'inteligencia-mercado');

  // Índice de pago de compradores y cuota de mercado de competidores: NO
  // existe ninguna fuente real para esto — Mercado Público no expone días
  // de pago del organismo vía API pública (mismo motivo que
  // organismoPagoDias siempre es null), y BidCoop no tiene datos reales de
  // ventas de la competencia. Antes había arrays 100% inventados con
  // nombres reales de organismos/empresas — eliminados. Si algún día existe
  // una fuente real, se agrega aquí; mientras tanto la UI muestra un estado
  // vacío honesto en vez de rellenar con cifras plausibles.

  // Desempeño por responsable — derivado de postulaciones REALES (antes
  // este ranking tenía nombres y estadísticas de personas reales
  // completamente inventadas, sin usar el prop `postulaciones` real que sí
  // se recibe).
  const teamLeaderboard = useMemo(() => {
    const porResponsable = new Map<string, { postuladas: number; ganadas: number; perdidas: number }>();
    postulaciones.forEach(p => {
      const nombre = p.responsable?.trim();
      if (!nombre) return;
      const actual = porResponsable.get(nombre) || { postuladas: 0, ganadas: 0, perdidas: 0 };
      actual.postuladas += 1;
      if (p.estado === 'Adjudicada') actual.ganadas += 1;
      if (p.estado === 'Rechazada') actual.perdidas += 1;
      porResponsable.set(nombre, actual);
    });
    return Array.from(porResponsable.entries()).map(([name, s]) => {
      const resueltas = s.ganadas + s.perdidas;
      return {
        name,
        postuladas: s.postuladas,
        ganadas: s.ganadas,
        efectividad: resueltas > 0 ? Math.round((s.ganadas / resueltas) * 100) : null
      };
    });
  }, [postulaciones]);

  // Embudo: solo etapas 100% reales, derivadas de postulaciones reales —
  // sin la etapa "En Seguimiento" inventada (antes: oportunidades.length *
  // 0.45, un ratio sin ninguna base real).
  const conversionFunnel = useMemo(() => {
    const enviadas = postulaciones.filter(p => p.estado === 'Enviada' || p.estado === 'En Evaluación' || p.estado === 'Adjudicada' || p.estado === 'Rechazada').length;
    const adjudicadas = postulaciones.filter(p => p.estado === 'Adjudicada').length;
    return [
      { stage: 'Identificadas', cantidad: oportunidades.length },
      { stage: 'Postuladas (borrador o enviadas)', cantidad: postulaciones.length },
      { stage: 'Enviadas realmente', cantidad: enviadas },
      { stage: 'Adjudicadas', cantidad: adjudicadas }
    ];
  }, [oportunidades, postulaciones]);

  const handleRawExport = () => {
    const rawData = {
      nota: 'Índice de pago de compradores y cuota de mercado de competidores no se incluyen: no existe una fuente real de estos datos.',
      conversionFunnel,
      teamLeaderboard
    };
    const blob = new Blob([JSON.stringify(rawData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'BidCoop_Analytics_Real.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('Datos reales descargados.');
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
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      alert(`Error enviando WhatsApp Push: ${msg}`);
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
              <span className="text-xs font-black text-emerald-400 uppercase tracking-wider">WhatsApp — envío manual</span>
              <span className="text-[10px] bg-amber-900/60 text-amber-200 px-2 py-0.5 rounded-full border border-amber-700/50">
                Sin automatización
              </span>
            </div>
            <p className="text-xs text-slate-300">
              BidCoop no envía nada por sí solo — el botón dispara un mensaje real de inmediato, solo cuando lo presionas.
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
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm text-center space-y-2">
          <span className="text-3xl block mb-2">📭</span>
          <p className="text-sm font-black text-slate-700 dark:text-slate-200">Sin datos reales de mercado disponibles</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            Mercado Público no expone días de pago del organismo comprador ni datos de cuota de mercado de la competencia vía API pública. Antes esta pantalla mostraba cifras de ejemplo — se retiraron para no dar a entender que eran datos reales.
          </p>
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
              {teamLeaderboard.length === 0 && (
                <p className="text-xs text-slate-400 italic text-center py-6">Sin postulaciones registradas todavía.</p>
              )}
              {teamLeaderboard.map((user, idx) => (
                <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-850/50 rounded-xl border border-slate-100 dark:border-slate-800 text-xs flex justify-between items-center">
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-white">{user.name}</h4>
                    <span className="text-[9px] text-slate-400 block mt-1">{user.postuladas} Postuladas • {user.ganadas} Adjudicadas</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[8px] uppercase font-black text-slate-400 block">Efectividad</span>
                    <strong className="text-xs font-black text-green-600 dark:text-green-400">
                      {user.efectividad !== null ? `${user.efectividad}%` : 'Sin resolver'}
                    </strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
