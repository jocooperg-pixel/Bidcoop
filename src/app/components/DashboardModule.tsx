import React, { useState, useMemo, useEffect } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';
import { Oportunidad, MiembroEquipo } from '../types';
import { getMatchScoreBadgeStyle } from '../utils/smartMatchEngine';

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
  const empresasActivasCount = useMemo(
    () => new Set(oportunidades.map(o => o.empresaMatch).filter(Boolean)).size,
    [oportunidades]
  );

  // ═══════════════════════════════════════════════════════════════════════
  // "DESDE TU ÚLTIMA VISITA" — comparación real, no estimada.
  // La fecha de la visita anterior se guarda en este navegador (no hay
  // backend de usuarios todavía). "Nuevas oportunidades" = fechaPublicacion
  // real posterior a esa visita — dato real de Mercado Público, no inventado.
  // ═══════════════════════════════════════════════════════════════════════
  const LAST_VISIT_KEY = 'bidcoop_last_visit';
  const [previousVisit, setPreviousVisit] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(LAST_VISIT_KEY);
    setPreviousVisit(stored);
    window.localStorage.setItem(LAST_VISIT_KEY, new Date().toISOString());
    // Solo se ejecuta una vez al montar — no se debe re-marcar "última visita"
    // en cada render, solo al abrir la plataforma.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const desdeUltimaVisita = useMemo(() => {
    // Primera vez que se abre desde este navegador: no hay "desde cuándo"
    // real que comparar — se muestra honestamente vacío en vez de inventar
    // una ventana arbitraria.
    if (!previousVisit) {
      return null;
    }

    const cutoff = previousVisit.slice(0, 10); // YYYY-MM-DD
    const activas = oportunidades.filter(o => o.estado === 'Publicada');
    const nuevas = activas.filter(o => (o.fechaPublicacion || '') > cutoff);
    const altaPrioridad = nuevas.filter(o => (o.matchScore || 0) >= 90);

    const now = new Date();
    const en24h = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const requierenAccion = nuevas.filter(o => {
      if (!o.fechaCierre) return false;
      const cierre = new Date(o.fechaCierre);
      return !isNaN(cierre.getTime()) && cierre <= en24h && cierre >= now;
    });

    const montoPotencial = nuevas.reduce((sum, o) => sum + (o.monto || 0), 0);

    const en7d = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    const cierresProximos = activas.filter(o => {
      if (!o.fechaCierre) return false;
      const cierre = new Date(o.fechaCierre);
      return !isNaN(cierre.getTime()) && cierre <= en7d && cierre >= now;
    });

    return {
      nuevasCount: nuevas.length,
      altaPrioridadCount: altaPrioridad.length,
      requierenAccionCount: requierenAccion.length,
      requierenAccion,
      montoPotencial,
      procesosActivos: activas.length,
      cierresProximosCount: cierresProximos.length
    };
  }, [oportunidades, previousVisit]);

  // ═══════════════════════════════════════════════════════════════════════
  // "¿QUÉ CAMBIÓ?" — diff real generado por el motor de sync (Python) entre
  // esta corrida y la anterior. Viene de data/sync_meta.json vía
  // /api/sync-status. Si el campo no existe (versión antigua de sync_meta,
  // antes de que existiera esta función), se muestra honestamente ausente.
  const [cambios, setCambios] = useState<{
    comparadoContra: string | null;
    nuevosCount: number;
    modificadosCount: number;
    cerradosCount: number;
    nuevos: Array<{ codigo: string; titulo: string; organismo: string; monto: number; empresaMatch?: string }>;
    modificados: Array<{ codigo: string; titulo: string; organismo: string; estadoAnterior: string; estadoNuevo: string; montoAnterior: number; montoNuevo: number }>;
    cerrados: Array<{ codigo: string; titulo: string; organismo: string; estadoAnterior: string; monto: number }>;
  } | null>(null);

  useEffect(() => {
    fetch('/api/sync-status', { cache: 'no-store' })
      .then(r => (r.ok ? r.json() : null))
      .then(d => setCambios(d?.cambios || null))
      .catch(() => setCambios(null));
  }, []);

  // ═══════════════════════════════════════════════════════════════════════
  // "¿DÓNDE ESTÁ EL DINERO?" — Top 10 real por monto + calidad de match,
  // solo entre oportunidades activas con empresa asignada (match real).
  // ═══════════════════════════════════════════════════════════════════════
  const dondeEstaElDinero = useMemo(() => {
    const candidatas = oportunidades.filter(o =>
      o.estado === 'Publicada' && o.empresaMatch && (o.monto || 0) > 0
    );
    return [...candidatas]
      .sort((a, b) => {
        const scoreA = (a.monto || 0) * (0.5 + (a.matchScore || 0) / 200);
        const scoreB = (b.monto || 0) * (0.5 + (b.matchScore || 0) / 200);
        return scoreB - scoreA;
      })
      .slice(0, 10);
  }, [oportunidades]);

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

  // Dynamic KPI Card counts (BUG-01 & BUG-02 FIX: Stable calculation from global opportunities)
  const kpiData = useMemo(() => {
    const totalOps = oportunidades.length;
    const comprasAgilesCount = oportunidades.filter(o => o.modalidad === 'Compra Ágil').length;
    const licitacionesCount = oportunidades.filter(o => o.modalidad === 'Licitación').length;
    const convenioMarcoCount = oportunidades.filter(o => o.modalidad === 'Convenio Marco').length;
    const gcCount = oportunidades.filter(o => o.esInvitacionGrandesCompras || o.modalidad === 'Grandes Compras').length;
    const alerts = oportunidades.filter(o => o.matchScore >= 90).length;
    const closeCount = oportunidades.filter(o => o.estado === 'Publicada').length;
    return {
      available: totalOps,
      comprasAgiles: comprasAgilesCount,
      licitaciones: licitacionesCount,
      convenioMarco: convenioMarcoCount,
      alerts: alerts,
      closingSoon: closeCount,
      grandesCompras: gcCount
    };
  }, [oportunidades]);

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
              {empresasActivasCount} {empresasActivasCount === 1 ? 'Empresa Activa' : 'Empresas Activas'}
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

      {/* "BUENOS DÍAS" — DESDE TU ÚLTIMA VISITA (dato real, no estimado) */}
      {desdeUltimaVisita && (
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 border border-blue-800/40 rounded-3xl p-6 text-white shadow-xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">👋</span>
            <h3 className="text-sm font-black uppercase tracking-wider text-blue-300">Desde tu última visita</h3>
          </div>
          <p className="text-xs text-slate-300 mb-4">
            Comparado con tu visita anterior, se detectaron{' '}
            <strong className="text-white">{desdeUltimaVisita.nuevasCount} nuevas oportunidades publicadas</strong>
            {desdeUltimaVisita.altaPrioridadCount > 0 && (
              <> — <strong className="text-emerald-400">{desdeUltimaVisita.altaPrioridadCount} de alta compatibilidad</strong> (match ≥ 90)</>
            )}
            {desdeUltimaVisita.requierenAccionCount > 0 && (
              <> y <strong className="text-amber-400">{desdeUltimaVisita.requierenAccionCount} cierran en menos de 24 horas</strong>, requieren revisión hoy</>
            )}.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-3">
              <span className="text-[9px] font-bold uppercase text-slate-400 block">Nuevas Oportunidades</span>
              <span className="text-xl font-black text-white">{desdeUltimaVisita.nuevasCount}</span>
            </div>
            <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-3">
              <span className="text-[9px] font-bold uppercase text-slate-400 block">Monto Potencial</span>
              <span className="text-xl font-black text-emerald-400">${(desdeUltimaVisita.montoPotencial / 1000000).toFixed(1)}M</span>
            </div>
            <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-3">
              <span className="text-[9px] font-bold uppercase text-slate-400 block">Procesos Activos</span>
              <span className="text-xl font-black text-white">{desdeUltimaVisita.procesosActivos}</span>
            </div>
            <div className="bg-slate-950/50 border border-amber-800/50 rounded-2xl p-3">
              <span className="text-[9px] font-bold uppercase text-amber-400 block">Cierres Próximos (7 días)</span>
              <span className="text-xl font-black text-amber-400">{desdeUltimaVisita.cierresProximosCount}</span>
            </div>
          </div>
          {desdeUltimaVisita.requierenAccionCount > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-800 space-y-1.5">
              <span className="text-[10px] font-black uppercase text-amber-400">🔴 Requieren acción hoy</span>
              {desdeUltimaVisita.requierenAccion.slice(0, 3).map(op => (
                <div
                  key={op.id}
                  onClick={() => onSelectOpportunity(op)}
                  className="flex items-center justify-between gap-2 text-xs bg-amber-950/30 hover:bg-amber-950/50 border border-amber-800/40 rounded-xl px-3 py-2 cursor-pointer transition"
                >
                  <span className="font-bold text-white truncate">{op.titulo}</span>
                  <span className="text-amber-300 font-mono text-[10px] shrink-0">{op.codigo}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* "¿QUÉ CAMBIÓ?" — diff real generado por el motor de sync */}
      {cambios && (cambios.nuevosCount > 0 || cambios.modificadosCount > 0 || cambios.cerradosCount > 0) && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 tracking-wider flex items-center gap-1.5">
              <span>🔄</span> ¿Qué cambió? (última sincronización)
            </h3>
            <span className="text-[9px] text-slate-400 font-semibold">
              Comparado contra la corrida anterior
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-3 text-center">
              <span className="text-lg font-black text-emerald-700 dark:text-emerald-300 block">{cambios.nuevosCount}</span>
              <span className="text-[9px] font-bold uppercase text-emerald-600 dark:text-emerald-400">Nuevos</span>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50 rounded-xl p-3 text-center">
              <span className="text-lg font-black text-blue-700 dark:text-blue-300 block">{cambios.modificadosCount}</span>
              <span className="text-[9px] font-bold uppercase text-blue-600 dark:text-blue-400">Modificados</span>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-center">
              <span className="text-lg font-black text-slate-700 dark:text-slate-300 block">{cambios.cerradosCount}</span>
              <span className="text-[9px] font-bold uppercase text-slate-500 dark:text-slate-400">Cerrados / Expirados</span>
            </div>
          </div>
        </div>
      )}

      {/* "¿DÓNDE ESTÁ EL DINERO?" — TOP 10 real por monto + match */}
      {dondeEstaElDinero.length > 0 && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 tracking-wider flex items-center gap-1.5">
              <span>💰</span> ¿Dónde está el dinero? — Top {dondeEstaElDinero.length}
            </h3>
          </div>
          <div className="space-y-2">
            {dondeEstaElDinero.map((op, idx) => (
              <div
                key={op.id}
                onClick={() => onSelectOpportunity(op)}
                className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/10 cursor-pointer transition group"
              >
                <span className="text-xs font-black text-slate-300 dark:text-slate-600 w-5 shrink-0">{idx + 1}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-900 dark:text-white truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                      {op.titulo}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate block">{op.organismo}</span>
                </div>
                <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0">
                  {op.empresaMatch}
                </span>
                <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 shrink-0">{op.matchScore}%</span>
                <span className="text-xs font-black text-slate-900 dark:text-white shrink-0 w-24 text-right">
                  ${(op.monto || 0).toLocaleString('es-CL')}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 1. COMPACT LINK BAR FOR GRANDES COMPRAS */}
      <div className="bg-slate-900 border border-purple-500/30 rounded-2xl p-4 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-700/50 flex items-center justify-center shrink-0">
            <span className="text-lg">🛍️</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase text-purple-400 tracking-wider">Grandes Compras Convenio Marco (&gt; 1.000 UTM)</span>
              <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-purple-950/80 text-purple-300 border border-purple-700/40">
                {grandesComprasInvitaciones.length} Intenciones de Compra Abierta
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Para mantener la pantalla principal despejada y sin exceso de información, las <strong>Grandes Compras con intención de compra abierta</strong> se visualizan en su módulo dedicado.
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            if (onSelectOpportunity && grandesComprasInvitaciones[0]) {
              onSelectOpportunity(grandesComprasInvitaciones[0]);
            }
          }}
          className="px-3.5 py-2 rounded-xl text-xs font-black uppercase bg-purple-600 hover:bg-purple-500 text-white transition cursor-pointer shrink-0 text-center flex items-center gap-1.5 shadow-md shadow-purple-900/40"
        >
          <span>Ver Módulo Grandes Compras</span>
          <span>→</span>
        </button>
      </div>

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
                          op.empresaMatch === 'Aminorte' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'

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
                        op.empresaMatch === 'Aminorte' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl p-4 text-white shadow-lg shadow-blue-500/10 flex flex-col justify-between h-36">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-black tracking-wider text-blue-100">Base Total Activa</span>
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 4a2 2 0 00-2-2v3m2-3V9m0 0l-2 2" />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black">{kpiData.available}</h2>
            <span className="text-[10px] font-bold text-blue-200 block mt-1">Oportunidades en Mercado Público</span>
          </div>
        </div>

        <div className="bg-gradient-to-tr from-amber-500 to-orange-600 rounded-2xl p-4 text-white shadow-lg shadow-orange-500/10 flex flex-col justify-between h-36">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-black tracking-wider text-amber-100">Compras Ágiles Hoy</span>
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <span className="text-sm">⚡</span>
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <h2 className="text-3xl font-black">{kpiData.comprasAgiles}</h2>
              <span className="text-xs font-bold text-amber-200">vigentes hoy</span>
            </div>
            <span className="text-[10px] font-bold text-amber-100 block mt-1">Menores a 60 UTM (~$3.95M CLP)</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-col justify-between h-36">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-black tracking-wider text-slate-400">Licitaciones &amp; Convenio</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/30 flex items-center justify-center">
              <span className="text-sm">📜</span>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">{kpiData.licitaciones + kpiData.convenioMarco}</h2>
            <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 block mt-1">{kpiData.licitaciones} Licitaciones / {kpiData.convenioMarco} Convenios</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-col justify-between h-36">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-black tracking-wider text-slate-400">Match Score &gt; 90%</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black text-emerald-600 dark:text-emerald-400">{kpiData.alerts}</h2>
            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 block mt-1">Alta prioridad para postulación</span>
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
                    { id: 'Artículos de Escritorio y Oficina', label: '✏️ Artículos de Escritorio y Oficina (Aminorte / V-MOCCS)' },
                    { id: 'Tecnología y Hardware', label: '💻 Tecnología y Hardware (Aminorte)' }
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
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${getMatchScoreBadgeStyle(op.matchScore).badgeBg}`}>
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
