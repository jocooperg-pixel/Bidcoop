import React, { useState, useMemo } from 'react';
import { Oportunidad, Postulacion, OrdenCompra, Empresa } from '../types';
import { FLETES_REGIONALES_CHILE } from '../mockData';

// We import productCatalogRaw from catalog.ts to parse it
import { productCatalogRaw as rawData } from '../catalog';


interface BusinessModuleProps {
  activeSubSection: string;
  oportunidades: Oportunidad[];
  postulaciones: Postulacion[];
  ordenesCompra: OrdenCompra[];
  onSelectOpportunity: (op: Oportunidad) => void;
  onNavigateToTab: (module: string, subSection: string) => void;
  activeCompany?: Empresa;
}

export default function BusinessModule({
  activeSubSection,
  oportunidades,
  postulaciones,
  ordenesCompra,
  onSelectOpportunity,
  onNavigateToTab,
  activeCompany = 'Consolidado'
}: BusinessModuleProps) {
  const [currentSub, setCurrentSub] = useState(activeSubSection || 'mis-negocios');

  // Parse products from catalog.ts and filter by active company context
  const catalogProducts = useMemo(() => {
    const lines = rawData.trim().split('\n');
    const parsed = lines.map((line, idx) => {
      const parts = line.split('|');
      return {
        id: `p-${idx + 1}`,
        sku: parts[0] || 'SKU-000',
        nombre: parts[1] || 'Producto sin nombre',
        proveedor: parts[2] || 'Inderquim',
        categoria: parts[3] || 'General',
        detalle: parts[4] || '',
        precioBase: parseFloat(parts[5]) || 1000,
        estado: parts[6] || 'Activo'
      };
    });

    if (activeCompany === 'Consolidado') return parsed.slice(0, 100);
    if (activeCompany === 'Inder-Roll') {
      return parsed.filter(p => p.proveedor === 'Inderquim').slice(0, 100);
    }
    // Aminorte and V-MOCCS share the Convenio Marco Escritorio catalog
    return parsed.filter(p => p.proveedor === 'Aminorte' || p.proveedor === 'V-MOCCS').slice(0, 100);
  }, [activeCompany]);

  // Postulaciones Filters State
  const [filterModality, setFilterModality] = useState<'Todas' | 'Compra Ágil' | 'Grandes Compras'>('Todas');
  const [filterCompany, setFilterCompany] = useState<'Todas' | 'Inder-Roll' | 'Aminorte' | 'V-MOCCS'>('Todas');

  // Logistics & Margin Simulator State
  const [selectedRegionLog, setSelectedRegionLog] = useState<string>('Valparaíso');
  const [logMontoVenta, setLogMontoVenta] = useState<number>(1750000);
  const [logCostoPMP, setLogCostoPMP] = useState<number>(1050000);

  // Alerts Center State
  const [alertWhatsappEnabled, setAlertWhatsappEnabled] = useState<boolean>(true);
  const [alertEmailEnabled, setAlertEmailEnabled] = useState<boolean>(true);

  // Filtered Postulaciones
  const filteredPostulaciones = useMemo(() => {
    return postulaciones.filter(p => {
      // Company match
      const pCompany = p.empresaMatch || (p.oportunidadCodigo?.startsWith('COT-') || p.oportunidadCodigo?.startsWith('GC-6012') || p.oportunidadCodigo?.startsWith('GC-1105') ? 'Aminorte' : 'Inder-Roll');
      if (activeCompany !== 'Consolidado' && pCompany !== activeCompany) {
        return false;
      }
      if (filterCompany !== 'Todas' && pCompany !== filterCompany) {
        return false;
      }

      // Modality match
      const pModality = p.modalidad || (p.oportunidadCodigo?.startsWith('COT-') ? 'Compra Ágil' : 'Grandes Compras');
      if (filterModality !== 'Todas' && pModality !== filterModality) {
        return false;
      }

      return true;
    });
  }, [postulaciones, activeCompany, filterCompany, filterModality]);

  // Statistics for Compras Ágiles Aminorte
  const statsAgilAminorte = useMemo(() => {
    const list = postulaciones.filter(p => {
      const pCompany = p.empresaMatch || (p.oportunidadCodigo?.startsWith('COT-') ? 'Aminorte' : 'Inder-Roll');
      const pModality = p.modalidad || (p.oportunidadCodigo?.startsWith('COT-') ? 'Compra Ágil' : 'Grandes Compras');
      return pCompany === 'Aminorte' && pModality === 'Compra Ágil';
    });
    const totalMonto = list.reduce((acc, curr) => acc + curr.montoOferta, 0);
    const adjudicadas = list.filter(p => p.estado === 'Adjudicada').length;
    const enEvaluacion = list.filter(p => p.estado === 'Enviada' || p.estado === 'Borrador').length;
    return {
      list,
      count: list.length,
      totalMonto,
      adjudicadas,
      enEvaluacion
    };
  }, [postulaciones]);

  // Documents Repo State
  const [internalDocs, setInternalDocs] = useState([
    { nombre: 'Estatuto_Social_Inderquim_Firmado.pdf', categoria: 'Legal', fecha: '2026-01-10', tamanho: '4.5 MB' },
    { nombre: 'RUT_Efectivo_Inderquim.pdf', categoria: 'Tributario', fecha: '2026-02-15', tamanho: '850 KB' },
    { nombre: 'Certificado_Antecedentes_Laborales_F30_Julio.pdf', categoria: 'Laboral', fecha: '2026-07-01', tamanho: '340 KB' },
    { nombre: 'Balance_Financiero_Audita_2025.xlsx', categoria: 'Finanzas', fecha: '2026-04-20', tamanho: '1.2 MB' }
  ]);
  const [newDocFile, setNewDocFile] = useState<string>('');

  // Kanban Board Columns
  // Kanban Board Columns matching exact Mercado Público participation pipeline
  const kanbanColumns = useMemo(() => {
    // Filter base list by activeCompany
    const companyOps = oportunidades.filter(o => {
      if (activeCompany === 'Consolidado') return true;
      return o.empresaMatch === activeCompany;
    });

    const companyPosts = postulaciones.filter(p => {
      const op = oportunidades.find(o => o.codigo === p.oportunidadCodigo || o.id === p.oportunidadId);
      const pCompany = op ? op.empresaMatch : (p.empresaMatch || (p.oportunidadCodigo?.includes('6012') || p.oportunidadCodigo?.includes('1105') ? 'Aminorte' : 'Inder-Roll'));
      if (activeCompany === 'Consolidado') return true;
      return pCompany === activeCompany;
    });

    // 1. Borrador / Siguiendo
    const borradorPosts = companyPosts.filter(p => p.estado === 'Borrador');
    const borradorItems = borradorPosts.map(p => {
      const op = oportunidades.find(o => o.codigo === p.oportunidadCodigo);
      return op || {
        id: p.id,
        codigo: p.oportunidadCodigo,
        titulo: p.oportunidadTitulo,
        organismo: 'Mercado Público',
        monto: p.montoOferta,
        matchScore: 90,
        estado: 'Borrador'
      };
    });

    // 2. Abiertos con oferta enviada
    const enviadasPosts = companyPosts.filter(p => p.estado === 'Enviada');
    const abiertasItems = enviadasPosts.map(p => {
      const op = oportunidades.find(o => o.codigo === p.oportunidadCodigo);
      return op || {
        id: p.id,
        codigo: p.oportunidadCodigo,
        titulo: p.oportunidadTitulo,
        organismo: 'Mercado Público',
        monto: p.montoOferta,
        matchScore: 92,
        estado: 'Postulada'
      };
    });

    // 3. Cerradas esperando resultados
    const cerradasItems = companyOps.filter(o => o.estado === 'En Evaluación' || o.estado === 'Cerrada');

    // 4. Resultados Publicados / Adjudicados
    const adjudicadasPosts = companyPosts.filter(p => p.estado === 'Adjudicada');
    const adjudicadasOps = companyOps.filter(o => o.estado === 'Adjudicada');
    const publicadosMap = new Map();
    [...adjudicadasOps, ...adjudicadasPosts.map(p => {
      const op = oportunidades.find(o => o.codigo === p.oportunidadCodigo);
      return op || {
        id: p.id,
        codigo: p.oportunidadCodigo,
        titulo: p.oportunidadTitulo,
        organismo: 'Mercado Público',
        monto: p.montoOferta,
        matchScore: 95,
        estado: 'Adjudicada'
      };
    })].forEach(item => {
      if (item && item.codigo) publicadosMap.set(item.codigo, item);
    });
    const publicadosItems = Array.from(publicadosMap.values());

    return [
      {
        id: 'borrador',
        label: 'Procesos seguidos o con oferta pendiente de envío',
        sublabel: 'Siguiendo, con oferta guardada',
        items: borradorItems,
        color: 'border-amber-500 bg-amber-500/5',
        badgeBg: 'bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300'
      },
      {
        id: 'abiertos',
        label: 'Procesos en los que participaste que siguen abiertos',
        sublabel: 'Publicadas, con oferta enviada',
        items: abiertasItems,
        color: 'border-emerald-500 bg-emerald-500/5',
        badgeBg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300'
      },
      {
        id: 'cerrados',
        label: 'Procesos en los que participaste ya cerrados',
        sublabel: 'Cerradas, esperando resultados',
        items: cerradasItems,
        color: 'border-slate-400 bg-slate-500/5',
        badgeBg: 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
      },
      {
        id: 'publicados',
        label: 'Procesos en los que participaste con resultados publicados',
        sublabel: 'Resultados publicados',
        items: publicadosItems,
        color: 'border-blue-600 bg-blue-500/5',
        badgeBg: 'bg-blue-100 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300'
      }
    ];
  }, [oportunidades, postulaciones, activeCompany]);

  // Calendar parameters
  const [currentMonth, setCurrentMonth] = useState('Julio 2026');
  
  // Seed dates on calendar: 1 to 31
  const calendarDays = useMemo(() => {
    const days = [];
    // July 2026 starts on a Wednesday (index 3)
    const emptySlots = 3;
    for (let i = 0; i < emptySlots; i++) {
      days.push({ dayNum: null, events: [] });
    }

    // Bind event list to calendar days
    // op-1 closes 28th, op-2 evaluation/closes 30th, op-4 CA closes 19th
    for (let d = 1; d <= 31; d++) {
      const events: Array<{ titulo: string; tipo: 'cierre' | 'pregunta' | 'adjudicacion'; op: Oportunidad }> = [];
      
      oportunidades.forEach(op => {
        const closeDayNum = parseInt(op.fechaCierre.split('-')[2]);
        const pubDayNum = parseInt(op.fechaPublicacion.split('-')[2]);

        if (closeDayNum === d) {
          events.push({ titulo: `Límite Cierre: ${op.codigo}`, tipo: 'cierre', op });
        }
        if (pubDayNum === d) {
          events.push({ titulo: `Publicada: ${op.codigo}`, tipo: 'adjudicacion', op });
        }
      });

      days.push({ dayNum: d, events });
    }
    return days;
  }, [oportunidades]);

  const handleUploadDoc = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDocFile.trim()) return;
    setInternalDocs(prev => [
      { nombre: newDocFile, categoria: 'Corporativo', fecha: new Date().toISOString().split('T')[0], tamanho: '1.1 MB' },
      ...prev
    ]);
    setNewDocFile('');
    alert('Documento guardado con éxito en el Repositorio de Recursos B2B.');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* INTERNAL NAVIGATION TABS */}
      <div className="flex items-center gap-1.5 border-b border-slate-200 dark:border-slate-800 pb-2">
        {[
          { id: 'mis-negocios', label: 'Mis Negocios' },
          { id: 'postulaciones', label: 'Postulaciones Realizadas' },
          { id: 'logistica', label: '🚚 Flete y Márgenes Regionales' },
          { id: 'alertas', label: '🔔 Centro de Alertas' },
          { id: 'calendario', label: 'Calendario Clave' },
          { id: 'catalogo', label: 'Catálogo de Insumos' },
          { id: 'documentos', label: 'Repositorio Legal' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setCurrentSub(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-black transition ${
              currentSub === tab.id
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/10'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* =======================================================================
          TAB 1: KANBAN BOARD (Procesos en los que participaste)
          ======================================================================= */}
      {currentSub === 'mis-negocios' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div>
              <h2 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <span>📋</span> Procesos en los que participaste
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Seguimiento en tiempo real de licitaciones, compras ágiles y grandes compras según registro de Mercado Público.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400">Filtrar Empresa:</span>
              <span className="px-3 py-1 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 rounded-xl text-xs font-black">
                {activeCompany === 'Consolidado' ? '🏢 Consolidado (Inder-Roll + Aminorte + V-MOCCS)' : `🏢 ${activeCompany}`}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-start">
            {kanbanColumns.map((col) => (
              <div key={col.id} className={`rounded-2xl border-t-4 p-4 shadow-sm space-y-4 border bg-white dark:bg-slate-900/90 ${col.color}`}>
                <div className="flex items-start justify-between gap-2 min-h-[48px]">
                  <div>
                    <h3 className="text-xs font-black text-slate-900 dark:text-white leading-snug">{col.label}</h3>
                    <span className="text-[10px] text-slate-400 block mt-0.5 font-bold">{col.sublabel}</span>
                  </div>
                  <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full shrink-0 ${col.badgeBg}`}>
                    {col.items.length}
                  </span>
                </div>

                <div className="space-y-3 min-h-[300px] max-h-[580px] overflow-y-auto pr-1">
                  {col.items.length === 0 ? (
                    <div className="text-center py-16 px-4 text-slate-400 text-xs space-y-2 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-950/20">
                      <div className="text-2xl opacity-60">👁️‍🗨️</div>
                      <p className="text-[11px] font-bold text-slate-400">No hay procesos para visualizar</p>
                    </div>
                  ) : (
                    col.items.map((item: any) => (
                      <div
                        key={item.id || item.codigo}
                        onClick={() => onSelectOpportunity && onSelectOpportunity(item)}
                        className="p-3.5 bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 hover:border-blue-500 dark:hover:border-blue-400 rounded-xl shadow-sm cursor-pointer transition text-xs space-y-2.5 group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 font-mono">
                            {item.codigo}
                          </span>
                          {item.empresaMatch && (
                            <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                              {item.empresaMatch}
                            </span>
                          )}
                        </div>

                        <h4 className="font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-blue-600 transition">
                          {item.titulo}
                        </h4>

                        <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate font-medium">
                          {item.organismo}
                        </p>

                        <div className="flex justify-between items-center pt-2 border-t border-slate-100 dark:border-slate-800">
                          <span className="font-black text-slate-900 dark:text-white text-xs">
                            ${(item.monto || 0).toLocaleString('es-CL')} CLP
                          </span>
                          <span className="text-[9px] font-black text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                            {item.fechaCierre ? `Cierre: ${item.fechaCierre}` : item.estado || 'Activo'}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =======================================================================
          TAB 2: POSTULACIONES
          ======================================================================= */}
      {currentSub === 'postulaciones' && (
        <div className="space-y-5">
          {/* AMINORTE COMPRAS ÁGILES SUMMARY HERO CARD */}
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 border border-blue-500/40 rounded-2xl p-5 text-white shadow-xl relative overflow-hidden space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10 border-b border-blue-500/30 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-500 text-white shadow-sm">
                    ⚡ COMPRAS ÁGILES - AMINORTE
                  </span>
                  <span className="text-xs font-bold text-blue-200">
                    {statsAgilAminorte.count} Postulaciones Ingresadas
                  </span>
                </div>
                <h3 className="text-lg font-black text-white mt-1">
                  Resumen de Cotizaciones en Compra Ágiles (Escritorio y Oficina)
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <div className="bg-emerald-950/60 border border-emerald-700/50 px-3 py-1.5 rounded-xl text-right">
                  <span className="text-[9px] font-bold uppercase text-emerald-300 block">🏆 Adjudicado Ágil</span>
                  <span className="text-xs font-black text-emerald-200">
                    {statsAgilAminorte.adjudicadas} Procesos (${statsAgilAminorte.list.filter(p=>p.estado==='Adjudicada').reduce((a,c)=>a+c.montoOferta,0).toLocaleString('es-CL')} CLP)
                  </span>
                </div>
                <div className="bg-amber-950/60 border border-amber-700/50 px-3 py-1.5 rounded-xl text-right">
                  <span className="text-[9px] font-bold uppercase text-amber-300 block">⏳ En Evaluación</span>
                  <span className="text-xs font-black text-amber-200">
                    {statsAgilAminorte.enEvaluacion} Procesos (${statsAgilAminorte.list.filter(p=>p.estado!=='Adjudicada').reduce((a,c)=>a+c.montoOferta,0).toLocaleString('es-CL')} CLP)
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button
                onClick={() => { setFilterCompany('Aminorte'); setFilterModality('Compra Ágil'); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold uppercase transition cursor-pointer flex items-center gap-1.5 shadow-sm ${
                  filterCompany === 'Aminorte' && filterModality === 'Compra Ágil'
                    ? 'bg-blue-600 text-white ring-2 ring-blue-300'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                }`}
              >
                <span>⚡ Compras Ágiles (Aminorte)</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20">{statsAgilAminorte.count}</span>
              </button>

              <button
                onClick={() => { setFilterCompany('Aminorte'); setFilterModality('Grandes Compras'); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold uppercase transition cursor-pointer flex items-center gap-1.5 shadow-sm ${
                  filterCompany === 'Aminorte' && filterModality === 'Grandes Compras'
                    ? 'bg-purple-600 text-white ring-2 ring-purple-300'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                }`}
              >
                <span>🛍️ Grandes Compras (Aminorte)</span>
              </button>

              <button
                onClick={() => { setFilterCompany('Inder-Roll'); setFilterModality('Todas'); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold uppercase transition cursor-pointer flex items-center gap-1.5 shadow-sm ${
                  filterCompany === 'Inder-Roll'
                    ? 'bg-emerald-600 text-white ring-2 ring-emerald-300'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                }`}
              >
                <span>🧽 Inder-Roll (Aseo)</span>
              </button>

              <button
                onClick={() => { setFilterCompany('Todas'); setFilterModality('Todas'); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold uppercase transition cursor-pointer flex items-center gap-1.5 shadow-sm ${
                  filterCompany === 'Todas' && filterModality === 'Todas'
                    ? 'bg-white text-slate-900 font-black'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                }`}
              >
                <span>📋 Ver Todas</span>
              </button>
            </div>
          </div>

          {/* MAIN TABLE CARD */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                  Historial de Postulaciones Enviadas ({filteredPostulaciones.length})
                </h3>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  Registro detallado de ofertas ingresadas a la plataforma de Mercado Público.
                </p>
              </div>

              {/* Select Controls */}
              <div className="flex items-center gap-2">
                <select
                  value={filterCompany}
                  onChange={(e) => setFilterCompany(e.target.value as any)}
                  className="px-2.5 py-1.5 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer"
                >
                  <option value="Todas">🏢 Todas las Empresas</option>
                  <option value="Aminorte">Aminorte (Escritorio / Convenio Marco)</option>
                  <option value="V-MOCCS">V-MOCCS SpA (Escritorio / Convenio Marco)</option>
                  <option value="Inder-Roll">Inder-Roll (Aseo)</option>
                </select>

                <select
                  value={filterModality}
                  onChange={(e) => setFilterModality(e.target.value as any)}
                  className="px-2.5 py-1.5 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer"
                >
                  <option value="Todas">📦 Todas las Modalidades</option>
                  <option value="Compra Ágil">⚡ Compra Ágil</option>
                  <option value="Grandes Compras">🛍️ Grandes Compras</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/30">
                    <th className="p-3 font-black text-slate-400">Modalidad / ID</th>
                    <th className="p-3 font-black text-slate-400">Empresa</th>
                    <th className="p-3 font-black text-slate-400">Título & Organismo</th>
                    <th className="p-3 font-black text-slate-400">Responsable</th>
                    <th className="p-3 font-black text-slate-400 text-right">Monto Oferta</th>
                    <th className="p-3 font-black text-slate-400 text-center">Estado</th>
                    <th className="p-3 font-black text-slate-400 text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                  {filteredPostulaciones.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-slate-400 font-medium">
                        No se encontraron postulaciones con los filtros seleccionados.
                      </td>
                    </tr>
                  ) : (
                    filteredPostulaciones.map((p) => {
                      const pCompany = p.empresaMatch || (p.oportunidadCodigo?.startsWith('COT-') || p.oportunidadCodigo?.startsWith('GC-6012') || p.oportunidadCodigo?.startsWith('GC-1105') ? 'Aminorte' : 'Inder-Roll');
                      const pModality = p.modalidad || (p.oportunidadCodigo?.startsWith('COT-') ? 'Compra Ágil' : 'Grandes Compras');

                      return (
                        <tr key={p.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-850/15">
                          <td className="p-3">
                            <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase inline-block mb-1 ${
                              pModality === 'Compra Ágil'
                                ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                                : 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300'
                            }`}>
                              {pModality === 'Compra Ágil' ? '⚡ Compra Ágil' : '🛍️ Grande Compra'}
                            </span>
                            <span className="font-mono font-bold text-slate-900 dark:text-white block text-[11px]">
                              {p.oportunidadCodigo}
                            </span>
                            <span className="text-[9px] text-slate-400 block mt-0.5">📅 {p.fechaActualizacion}</span>
                          </td>

                          <td className="p-3">
                            <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${
                              pCompany === 'Inder-Roll'
                                ? 'bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300'
                                : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                            }`}>
                              {pCompany}
                            </span>
                          </td>

                          <td className="p-3 max-w-xs">
                            <span className="font-bold text-slate-900 dark:text-slate-100 block line-clamp-1">
                              {p.oportunidadTitulo}
                            </span>
                            {p.organismo && (
                              <span className="text-[10px] text-slate-500 block truncate mt-0.5">
                                🏛️ {p.organismo}
                              </span>
                            )}
                          </td>

                          <td className="p-3 font-semibold text-slate-600 dark:text-slate-400">
                            {p.responsable}
                          </td>

                          <td className="p-3 text-right font-black text-slate-900 dark:text-white">
                            ${p.montoOferta.toLocaleString('es-CL')}
                          </td>

                          <td className="p-3 text-center">
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                              p.estado === 'Adjudicada'
                                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300'
                                : p.estado === 'Rechazada'
                                ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/80 dark:text-rose-300'
                                : 'bg-amber-100 text-amber-700 dark:bg-amber-950/80 dark:text-amber-300'
                            }`}>
                              {p.estado === 'Adjudicada'
                                ? '🏆 Adjudicada'
                                : p.estado === 'Rechazada'
                                ? '❌ Adjudicada a Competidor'
                                : '⏳ Cerrada (Pendiente Selección Proveedor)'}
                            </span>
                          </td>

                          <td className="p-3 text-center">
                            <button
                              onClick={() => {
                                const op = oportunidades.find(o => o.id === p.oportunidadId);
                                if (op) onSelectOpportunity(op);
                              }}
                              className="px-2.5 py-1 bg-slate-100 hover:bg-blue-600 hover:text-white dark:bg-slate-800 dark:hover:bg-blue-600 rounded text-[10px] font-bold transition cursor-pointer"
                            >
                              Inspeccionar
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB: LOGÍSTICA Y MÁRGENES REGIONALES */}
      {currentSub === 'logistica' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <span>🚚</span> Calculadora Dinámica de Márgenes y Logística Regional
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Estima el costo de despacho a cualquiera de las 16 regiones de Chile y calcula el margen neto real de tu oferta descontando flete e IVA (19%).
                </p>
              </div>
            </div>

            {/* Inputs & Region Selector */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase block mb-1">
                  Región de Despacho / Destino
                </label>
                <select
                  value={selectedRegionLog}
                  onChange={(e) => setSelectedRegionLog(e.target.value)}
                  className="w-full text-xs font-bold p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:border-blue-500"
                >
                  {Object.keys(FLETES_REGIONALES_CHILE).map((reg) => (
                    <option key={reg} value={reg}>
                      {reg} ({FLETES_REGIONALES_CHILE[reg].zona}) — ${FLETES_REGIONALES_CHILE[reg].fleteBase.toLocaleString('es-CL')} CLP
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase block mb-1">
                  Monto de Venta Ofertado (Total CLP con IVA)
                </label>
                <input
                  type="number"
                  value={logMontoVenta}
                  onChange={(e) => setLogMontoVenta(Number(e.target.value))}
                  className="w-full text-xs font-bold p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase block mb-1">
                  Costo de Adquisición Productos (PMP Neto)
                </label>
                <input
                  type="number"
                  value={logCostoPMP}
                  onChange={(e) => setLogCostoPMP(Number(e.target.value))}
                  className="w-full text-xs font-bold p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Calculations Output */}
            {(() => {
              const regInfo = FLETES_REGIONALES_CHILE[selectedRegionLog] || FLETES_REGIONALES_CHILE['Región Metropolitana'];
              const fleteCost = regInfo.fleteBase;
              const netoVenta = Math.round(logMontoVenta / 1.19);
              const ivaVenta = logMontoVenta - netoVenta;
              const utilidadBruta = netoVenta - logCostoPMP - fleteCost;
              const margenPct = netoVenta > 0 ? Math.round((utilidadBruta / netoVenta) * 100) : 0;

              return (
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                    <span className="text-[10px] uppercase font-black text-slate-400 block">Costo Flete Estimado</span>
                    <strong className="text-sm font-black text-slate-900 dark:text-white mt-1 block">
                      ${fleteCost.toLocaleString('es-CL')} CLP
                    </strong>
                    <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 mt-1 block">
                      Tiempo: {regInfo.diasEntrega} ({regInfo.zona})
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                    <span className="text-[10px] uppercase font-black text-slate-400 block">Venta Neta (Sin IVA)</span>
                    <strong className="text-sm font-black text-slate-900 dark:text-white mt-1 block">
                      ${netoVenta.toLocaleString('es-CL')} CLP
                    </strong>
                    <span className="text-[10px] font-bold text-slate-500 mt-1 block">
                      IVA (19%): ${ivaVenta.toLocaleString('es-CL')}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                    <span className="text-[10px] uppercase font-black text-slate-400 block">Utilidad Neta Estimada</span>
                    <strong className={`text-sm font-black mt-1 block ${
                      utilidadBruta >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      ${utilidadBruta.toLocaleString('es-CL')} CLP
                    </strong>
                    <span className="text-[10px] font-bold text-slate-500 mt-1 block">
                      Post flete + PMP
                    </span>
                  </div>

                  <div className={`p-4 rounded-xl border ${
                    margenPct >= 20
                      ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/40 text-emerald-800 dark:text-emerald-300'
                      : 'bg-amber-50/60 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/40 text-amber-800 dark:text-amber-300'
                  }`}>
                    <span className="text-[10px] uppercase font-black block tracking-wider">Margen Neto (%)</span>
                    <strong className="text-lg font-black mt-1 block">
                      {margenPct}%
                    </strong>
                    <span className="text-[10px] font-bold block mt-1">
                      {margenPct >= 20 ? '✅ Margen Altamente Saludable' : '⚠️ Revisar estructura de costos'}
                    </span>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* TAB: CENTRO DE ALERTAS */}
      {currentSub === 'alertas' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <span>🔔</span> Centro de Alertas e Integración de Notificaciones (WhatsApp / Email)
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Recibe avisos inmediatos en tu celular cuando una Compra Ágil de alto calce esté a menos de 2 horas de su cierre.
                </p>
              </div>
            </div>

            {/* Channels Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* WhatsApp Channel */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-850/50 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h4 className="text-xs font-black text-slate-900 dark:text-white">Canal WhatsApp Business</h4>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">Destino: +56 9 8492 1020 (Jonathan Cooper)</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setAlertWhatsappEnabled(!alertWhatsappEnabled);
                    alert(alertWhatsappEnabled ? 'Alertas por WhatsApp pausadas.' : 'Alertas por WhatsApp activadas.');
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer ${
                    alertWhatsappEnabled
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                  }`}
                >
                  {alertWhatsappEnabled ? 'ACTIVO 🟢' : 'PAUSADO ⚪'}
                </button>
              </div>

              {/* Email Channel */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-850/50 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <h4 className="text-xs font-black text-slate-900 dark:text-white">Canal Correo Electrónico</h4>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">Destino: licitaciones@aminorte.cl | ventas@inderroll.cl</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setAlertEmailEnabled(!alertEmailEnabled);
                    alert(alertEmailEnabled ? 'Alertas por Correo pausadas.' : 'Alertas por Correo activadas.');
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer ${
                    alertEmailEnabled
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                  }`}
                >
                  {alertEmailEnabled ? 'ACTIVO 🟢' : 'PAUSADO ⚪'}
                </button>
              </div>
            </div>

            {/* Active Live Alerts List */}
            <div className="space-y-3">
              <h3 className="text-xs font-black uppercase text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-1">
                Monitoreo Activo de Alertas y Eventos Programados
              </h3>

              <div className="space-y-3">
                {[
                  {
                    id: 'alt-1',
                    tipo: '⚡ Cierre Inminente Compra Ágil',
                    codigo: '3244-277-COT26',
                    proceso: 'Papel de manualidades autoadhesivo (ID: 39985469)',
                    organismo: 'I. Municipalidad de Santo Domingo',
                    monto: '$1.750.000 CLP',
                    canal: 'WhatsApp + Email',
                    estado: 'Programado para 25/07 13:00 hrs (2 hrs antes del cierre)'
                  },
                  {
                    id: 'alt-2',
                    tipo: '🛍️ Apertura de Foro de Consultas',
                    codigo: 'GC-1105-650-CM26',
                    proceso: 'Grande Compra: Suministro Resmas Carta/Oficio y Papelería',
                    organismo: 'Servicio de Impuestos Internos (SII)',
                    monto: '$104.500.000 CLP',
                    canal: 'WhatsApp',
                    estado: 'Enviado hoy 10:15 hrs'
                  },
                  {
                    id: 'alt-3',
                    tipo: '🏆 Publicación de Adjudicación',
                    codigo: 'GC-3047-901-CM26',
                    proceso: 'Grande Compra: Insumos de Aseo Químico e Higiene',
                    organismo: 'Hospital Clínico San Borja Arriarán',
                    monto: '$91.800.000 CLP',
                    canal: 'Email',
                    estado: 'Adjudicada a Inder-Roll SpA'
                  }
                ].map((alt) => (
                  <div key={alt.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300">
                          {alt.tipo}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400">{alt.codigo}</span>
                      </div>
                      <h4 className="text-xs font-black text-slate-900 dark:text-white">{alt.proceso}</h4>
                      <p className="text-[10px] text-slate-500">{alt.organismo} • Monto: {alt.monto}</p>
                    </div>

                    <div className="text-left sm:text-right shrink-0">
                      <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 block">
                        Canal: {alt.canal}
                      </span>
                      <span className="text-[9px] text-slate-400 font-medium block mt-0.5">
                        {alt.estado}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* =======================================================================
          TAB 3: CALENDARIO
          ======================================================================= */}
      {currentSub === 'calendario' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Planificador de Hitos</h3>
              <p className="text-[10px] text-slate-400 mt-0.5">Calendario mensual con plazos críticos y aperturas de Mercado Público.</p>
            </div>
            <strong className="text-xs font-black text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-3.5 py-1.5 rounded-xl">
              {currentMonth}
            </strong>
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-2">
            {['Mié', 'Jue', 'Vie', 'Sáb', 'Dom', 'Lun', 'Mar'].map((d) => (
              <div key={d} className="text-center font-black text-[9px] uppercase text-slate-400 py-1">{d}</div>
            ))}

            {calendarDays.map((slot, idx) => (
              <div
                key={idx}
                className={`h-24 border rounded-xl p-1.5 flex flex-col justify-between overflow-hidden shadow-inner text-xs ${
                  slot.dayNum === null
                    ? 'bg-slate-50/50 dark:bg-slate-950/20 border-transparent'
                    : 'bg-white border-slate-100 dark:bg-slate-900 dark:border-slate-800 hover:border-blue-400 transition cursor-pointer'
                }`}
                onClick={() => {
                  if (slot.events.length > 0) {
                    onSelectOpportunity(slot.events[0].op);
                  }
                }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-black text-slate-400 dark:text-slate-500 text-[10px]">{slot.dayNum}</span>
                </div>

                <div className="flex-1 flex flex-col gap-1 overflow-y-auto mt-1 justify-end">
                  {slot.events.map((e, eIdx) => (
                    <div
                      key={eIdx}
                      className={`text-[8px] font-black rounded p-0.5 px-1 truncate leading-tight ${
                        e.tipo === 'cierre' ? 'bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-400' : 'bg-green-50 text-green-600 dark:bg-green-950/20'
                      }`}
                      title={e.titulo}
                    >
                      {e.titulo}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =======================================================================
          TAB 4: CATALOGO
          ======================================================================= */}
      {currentSub === 'catalogo' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
          <div>
            <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Catálogo de Productos Propios</h3>
            <p className="text-[10px] text-slate-400 mt-0.5">Listado de insumos homologados disponibles para match automático de licitaciones.</p>
          </div>

          <div className="overflow-y-auto max-h-[450px] border border-slate-100 dark:border-slate-800 rounded-xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-50 dark:bg-slate-850 sticky top-0">
                <tr>
                  <th className="p-3 font-black text-slate-400">SKU</th>
                  <th className="p-3 font-black text-slate-400">Nombre del Producto</th>
                  <th className="p-3 font-black text-slate-400">Convenio / Empresa</th>
                  <th className="p-3 font-black text-slate-400">Categoría</th>
                  <th className="p-3 font-black text-slate-400">Detalle</th>
                  <th className="p-3 font-black text-slate-400 text-right">Precio Base Neto</th>
                  <th className="p-3 font-black text-slate-400 text-center">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {catalogProducts.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-850/10">
                    <td className="p-3 font-bold text-slate-900 dark:text-white">{p.sku}</td>
                    <td className="p-3 font-semibold text-slate-850 dark:text-slate-350">{p.nombre}</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${
                        p.proveedor === 'Inderquim'
                          ? 'bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400'
                          : 'bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400'
                      }`}>
                        {p.proveedor === 'Inderquim' ? 'Aseo (Inder-Roll)' : 'Escritorio (Aminorte)'}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-500 font-bold">{p.categoria}</span>
                    </td>
                    <td className="p-3 text-[10px] text-slate-400">{p.detalle}</td>
                    <td className="p-3 text-right font-black text-slate-900 dark:text-white">${p.precioBase.toLocaleString('es-CL')}</td>
                    <td className="p-3 text-center">
                      <span className="text-[9px] font-black text-green-500">Activo</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* =======================================================================
          TAB 5: DOCUMENTOS REPOSITORIO
          ======================================================================= */}
      {currentSub === 'documentos' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
            <div>
              <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Carpeta Legal e Institucional</h3>
              <p className="text-[10px] text-slate-400 mt-0.5">Certificados y escrituras pre-cargados para adjuntar en las postulaciones.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {internalDocs.map((doc, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col justify-between h-28">
                  <div className="flex items-start gap-2.5">
                    <span className="text-xl">📁</span>
                    <div>
                      <h4 className="text-xs font-black text-slate-900 dark:text-white truncate max-w-[150px]" title={doc.nombre}>{doc.nombre}</h4>
                      <span className="text-[9px] text-slate-400">{doc.categoria} • {doc.tamanho}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-slate-400 font-bold">Subido: {doc.fecha}</span>
                    <button
                      onClick={() => alert(`Descargando ${doc.nombre}...`)}
                      className="text-blue-500 font-black hover:text-blue-600"
                    >
                      Descargar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upload new */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
            <form onSubmit={handleUploadDoc} className="space-y-4">
              <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider block">Cargar Nuevo Recurso</span>
              <p className="text-[11px] text-slate-400">Incorpore archivos PDF o Excel al repositorio para que estén accesibles en el panel de ofertas.</p>
              
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Nombre descriptivo del archivo (ej. F30_Agosto.pdf)"
                  value={newDocFile}
                  onChange={(e) => setNewDocFile(e.target.value)}
                  className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white"
                  required
                />
                <div className="p-6 border-2 border-dashed border-slate-150 dark:border-slate-850 rounded-2xl text-center text-xs text-slate-400">
                  Arrastre archivos o haga clic para simular carga local.
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-black text-xs transition"
              >
                ✓ Guardar en Repositorio
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
