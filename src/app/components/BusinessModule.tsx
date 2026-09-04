import React, { useState, useEffect, useMemo } from 'react';
import { Oportunidad, Postulacion, OrdenCompra, Empresa } from '../types';
import { FLETES_REGIONALES_CHILE } from '../mockData';
import { calcularCentroAlertas } from '../utils/alertasEngine';
import AdjudicacionesModule from './AdjudicacionesModule';



interface BusinessModuleProps {
  activeSubSection: string;
  oportunidades: Oportunidad[];
  postulaciones: Postulacion[];
  ordenesCompra: OrdenCompra[];
  onSelectOpportunity: (op: Oportunidad) => void;
  onNavigateToTab: (module: string, subSection: string) => void;
  activeCompany?: Empresa;
  selectedAdjudicacionCodigo?: string | null;
  onUpdatePostulacion: (
    postulacionId: string,
    changes: Pick<Postulacion, 'responsable' | 'proximaAccion' | 'fechaProximaAccion'>
  ) => void;
}

export default function BusinessModule({
  activeSubSection,
  oportunidades,
  postulaciones,
  ordenesCompra,
  onSelectOpportunity,
  onNavigateToTab,
  activeCompany = 'Consolidado',
  selectedAdjudicacionCodigo = null,
  onUpdatePostulacion
}: BusinessModuleProps) {
  // Forma real de un ítem del Kanban: puede ser una Oportunidad completa o un
  // objeto parcial reconstruido desde una postulación cuya oportunidad ya no
  // está en el sync (por eso todos los campos de Oportunidad son opcionales
  // salvo id/codigo).
  type KanbanItem = Partial<Oportunidad> & {
    id: string;
    codigo: string;
    responsable?: string;
    proximaAccion?: string;
    fechaProximaAccion?: string;
  };

  const [currentSub, setCurrentSub] = useState(activeSubSection || 'mis-negocios');

  useEffect(() => {
    if (activeSubSection) {
      setCurrentSub(activeSubSection);
    }
  }, [activeSubSection]);

  // Catálogo real de productos propios, persistido en Postgres (modelo
  // Producto) — reemplaza el catálogo hardcodeado de 22 productos de
  // ejemplo que vivía en catalog.ts. Se filtra por empresa activa en el
  // propio fetch de datos, no acá.
  interface CatalogoProductoReal {
    id: string;
    sku: string;
    nombre: string;
    categoria: string | null;
    precioBase: number | null;
    costoActual: number | null;
    stock: number | null;
    empresa: string;
    actualizadoEn: string;
  }
  const [catalogProducts, setCatalogProducts] = useState<CatalogoProductoReal[]>([]);
  const [catalogLoading, setCatalogLoading] = useState(true);
  const [importandoCatalogo, setImportandoCatalogo] = useState(false);
  const [importCatalogoMsg, setImportCatalogoMsg] = useState<string | null>(null);

  const cargarCatalogo = () => {
    setCatalogLoading(true);
    fetch('/api/db-productos')
      .then(res => res.json())
      .then(data => setCatalogProducts(data.productos ?? []))
      .catch(() => setCatalogProducts([]))
      .finally(() => setCatalogLoading(false));
  };

  useEffect(() => {
    cargarCatalogo();
  }, []);

  const catalogProductsFiltrados = useMemo(() => {
    if (activeCompany === 'Consolidado') return catalogProducts;
    return catalogProducts.filter(p => p.empresa === activeCompany);
  }, [catalogProducts, activeCompany]);

  const handleImportarCatalogo = async (file: File, empresaNombre: string) => {
    setImportandoCatalogo(true);
    setImportCatalogoMsg(null);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('empresaNombre', empresaNombre);
      const res = await fetch('/api/db-productos/importar', { method: 'POST', body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al importar.');
      setImportCatalogoMsg(`✓ ${data.importados} productos importados de ${data.totalFilas} filas.${data.erroresFila?.length ? ` ${data.erroresFila.length} filas omitidas.` : ''}`);
      cargarCatalogo();
    } catch (err: unknown) {
      setImportCatalogoMsg(`Error: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setImportandoCatalogo(false);
    }
  };

  // Postulaciones Filters State
  const [filterModality, setFilterModality] = useState<'Todas' | 'Compra Ágil' | 'Grandes Compras'>('Todas');
  const [filterCompany, setFilterCompany] = useState<'Todas' | 'Aminorte' | 'V-MOCCS'>('Todas');
  const [editingPostulacionId, setEditingPostulacionId] = useState<string | null>(null);
  const [editResponsable, setEditResponsable] = useState('');
  const [editProximaAccion, setEditProximaAccion] = useState('');
  const [editFechaProximaAccion, setEditFechaProximaAccion] = useState('');

  const startEditingPostulacion = (postulacion: Postulacion) => {
    setEditingPostulacionId(postulacion.id);
    setEditResponsable(postulacion.responsable || '');
    setEditProximaAccion(postulacion.proximaAccion || '');
    setEditFechaProximaAccion(postulacion.fechaProximaAccion || '');
  };

  const savePostulacionTracking = () => {
    if (!editingPostulacionId) return;
    onUpdatePostulacion(editingPostulacionId, {
      responsable: editResponsable.trim(),
      proximaAccion: editProximaAccion.trim(),
      fechaProximaAccion: editFechaProximaAccion
    });
    setEditingPostulacionId(null);
  };


  // Logistics & Margin Simulator State
  const [selectedRegionLog, setSelectedRegionLog] = useState<string>('Valparaíso');
  const [logMontoVenta, setLogMontoVenta] = useState<number>(1750000);
  const [logCostoPMP, setLogCostoPMP] = useState<number>(1050000);

  // Centro de Alertas — mismo motor real que Inicio (utils/alertasEngine.ts)
  const centroAlertasBusiness = useMemo(() => calcularCentroAlertas(oportunidades), [oportunidades]);

  // Filtered Postulaciones
  const filteredPostulaciones = useMemo(() => {
    return postulaciones.filter(p => {
      // Company match
      const pCompany = p.empresaMatch || (p.oportunidadCodigo?.includes('COT') || p.oportunidadCodigo?.startsWith('GC-6012') || p.oportunidadCodigo?.startsWith('GC-1105') ? 'Aminorte' : 'V-MOCCS');
      if (activeCompany !== 'Consolidado' && pCompany !== activeCompany) {
        return false;
      }
      if (filterCompany !== 'Todas' && pCompany !== filterCompany) {
        return false;
      }

      // Modality match
      const pModality = p.modalidad || (p.oportunidadCodigo?.includes('COT') ? 'Compra Ágil' : 'Grandes Compras');
      if (filterModality !== 'Todas' && pModality !== filterModality) {
        return false;
      }

      return true;
    });
  }, [postulaciones, activeCompany, filterCompany, filterModality]);

  const trackingStats = useMemo(() => {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const nextSevenDays = todayStart + (7 * 86400000);
    const active = filteredPostulaciones.filter(p => p.estado !== 'Adjudicada' && p.estado !== 'Rechazada');

    let vencidas = 0;
    let proximosSieteDias = 0;
    let sinPlan = 0;
    let alDia = 0;

    active.forEach(p => {
      if (!p.proximaAccion || !p.fechaProximaAccion) {
        sinPlan += 1;
        return;
      }
      const actionDate = new Date(`${p.fechaProximaAccion}T23:59:59`).getTime();
      if (actionDate < todayStart) vencidas += 1;
      else if (actionDate <= nextSevenDays) proximosSieteDias += 1;
      else alDia += 1;
    });

    return { vencidas, proximosSieteDias, sinPlan, alDia };
  }, [filteredPostulaciones]);

  // Statistics for Compras Ágiles Aminorte
  const statsAgilAminorte = useMemo(() => {
    const list = postulaciones.filter(p => {
      const pCompany = p.empresaMatch || (p.oportunidadCodigo?.startsWith('COT-') ? 'Aminorte' : 'V-MOCCS');
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

  // Documents Repo State — repositorio real (Postgres + Vercel Blob), sin
  // documentos ni tamaños inventados. Antes esto era una lista hardcodeada
  // de 4 archivos que no existían y un botón "Descargar" que solo mostraba
  // un alert() sin entregar ningún archivo real.
  interface DocumentoReal {
    id: string;
    nombre: string;
    tipo: string;
    estado: string;
    version: number;
    fechaEmision: string | null;
    fechaVencimiento: string | null;
    tamanoBytes: number | null;
    responsable: { nombre: string; email: string } | null;
    empresa: { nombre: string } | null;
  }
  const [documentos, setDocumentos] = useState<DocumentoReal[]>([]);
  const [docsLoading, setDocsLoading] = useState(true);
  const [newDocNombre, setNewDocNombre] = useState<string>('');
  const [newDocFile, setNewDocFile] = useState<File | null>(null);
  const [newDocTipo, setNewDocTipo] = useState<'INTERNO' | 'OFICIAL'>('INTERNO');
  const [newDocEmpresa, setNewDocEmpresa] = useState<string>('');
  const [newDocVencimiento, setNewDocVencimiento] = useState<string>('');
  const [subiendoDoc, setSubiendoDoc] = useState(false);

  useEffect(() => {
    fetch('/api/documentos')
      .then(res => res.json())
      .then(data => setDocumentos(data.documentos ?? []))
      .catch(() => setDocumentos([]))
      .finally(() => setDocsLoading(false));
  }, []);

  const formatBytes = (bytes: number | null) => {
    if (bytes === null) return 'No disponible';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const estadoVencimiento = (fechaVencimiento: string | null): { label: string; className: string } => {
    if (!fechaVencimiento) return { label: 'Sin vencimiento definido', className: 'text-slate-400' };
    const dias = Math.ceil((new Date(fechaVencimiento).getTime() - Date.now()) / 86400000);
    if (dias < 0) return { label: `Vencido hace ${Math.abs(dias)} día(s)`, className: 'text-red-600 dark:text-red-400 font-bold' };
    if (dias <= 30) return { label: `Vence en ${dias} día(s)`, className: 'text-amber-600 dark:text-amber-400 font-bold' };
    return { label: `Vence ${new Date(fechaVencimiento).toLocaleDateString('es-CL')}`, className: 'text-slate-500 dark:text-slate-400' };
  };

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
      const pCompany = op ? op.empresaMatch : (p.empresaMatch || (p.oportunidadCodigo?.includes('6012') || p.oportunidadCodigo?.includes('1105') ? 'Aminorte' : 'V-MOCCS'));
      if (activeCompany === 'Consolidado') return true;
      return pCompany === activeCompany;
    });

    // 1. Borrador / Siguiendo
    const borradorPosts = companyPosts.filter(p => p.estado === 'Borrador');
    const borradorItems = borradorPosts.map(p => {
      const op = oportunidades.find(o => o.codigo === p.oportunidadCodigo || o.id === p.oportunidadId);
      return op ? {
        ...op,
        estado: 'Borrador',
        responsable: p.responsable,
        proximaAccion: p.proximaAccion,
        fechaProximaAccion: p.fechaProximaAccion
      } : {
        id: p.id,
        codigo: p.oportunidadCodigo || p.id,
        titulo: p.oportunidadTitulo,
        organismo: p.organismo || 'Mercado Público',
        monto: p.montoOferta,
        empresaMatch: p.empresaMatch,
        matchScore: 90,
        estado: 'Borrador',
        responsable: p.responsable,
        proximaAccion: p.proximaAccion,
        fechaProximaAccion: p.fechaProximaAccion
      };
    });

    // 2. Abiertos con oferta enviada
    const enviadasPosts = companyPosts.filter(p => p.estado === 'Enviada');
    const abiertasItems = enviadasPosts.map(p => {
      const op = oportunidades.find(o => o.codigo === p.oportunidadCodigo || o.id === p.oportunidadId);
      return op ? {
        ...op,
        estado: 'Enviada',
        responsable: p.responsable,
        proximaAccion: p.proximaAccion,
        fechaProximaAccion: p.fechaProximaAccion
      } : {
        id: p.id,
        codigo: p.oportunidadCodigo || p.id,
        titulo: p.oportunidadTitulo,
        organismo: p.organismo || 'Mercado Público',
        monto: p.montoOferta,
        empresaMatch: p.empresaMatch,
        matchScore: 92,
        estado: 'Enviada',
        responsable: p.responsable,
        proximaAccion: p.proximaAccion,
        fechaProximaAccion: p.fechaProximaAccion
      };
    });

    // 3. Cerradas esperando resultados / En Evaluación
    const evaluacionPosts = companyPosts.filter(p => p.estado === 'En Evaluación');
    const cerradasOps = companyOps.filter(o => o.estado === 'En Evaluación' || o.estado === 'Cerrada');
    const cerradasMap = new Map();
    [...cerradasOps, ...evaluacionPosts.map(p => {
      const op = oportunidades.find(o => o.codigo === p.oportunidadCodigo || o.id === p.oportunidadId);
      return op ? {
        ...op,
        estado: 'En Evaluación',
        responsable: p.responsable,
        proximaAccion: p.proximaAccion,
        fechaProximaAccion: p.fechaProximaAccion
      } : {
        id: p.id,
        codigo: p.oportunidadCodigo || p.id,
        titulo: p.oportunidadTitulo,
        organismo: p.organismo || 'Mercado Público',
        monto: p.montoOferta,
        empresaMatch: p.empresaMatch,
        matchScore: 94,
        estado: 'En Evaluación',
        responsable: p.responsable,
        proximaAccion: p.proximaAccion,
        fechaProximaAccion: p.fechaProximaAccion
      };
    })].forEach(item => {
      if (item && (item.codigo || item.id)) cerradasMap.set(item.codigo || item.id, item);
    });
    const cerradasItems = Array.from(cerradasMap.values());

    // 4. Resultados Publicados / Adjudicados
    const adjudicadasPosts = companyPosts.filter(p => p.estado === 'Adjudicada');
    const adjudicadasOps = companyOps.filter(o => o.estado === 'Adjudicada');
    const publicadosMap = new Map();
    [...adjudicadasOps, ...adjudicadasPosts.map(p => {
      const op = oportunidades.find(o => o.codigo === p.oportunidadCodigo || o.id === p.oportunidadId);
      return op ? {
        ...op,
        estado: 'Adjudicada',
        responsable: p.responsable,
        proximaAccion: p.proximaAccion,
        fechaProximaAccion: p.fechaProximaAccion
      } : {
        id: p.id,
        codigo: p.oportunidadCodigo || p.id,
        titulo: p.oportunidadTitulo,
        organismo: p.organismo || 'Mercado Público',
        monto: p.montoOferta,
        empresaMatch: p.empresaMatch,
        matchScore: 98,
        estado: 'Adjudicada',
        responsable: p.responsable,
        proximaAccion: p.proximaAccion,
        fechaProximaAccion: p.fechaProximaAccion
      };
    })].forEach(item => {
      if (item && (item.codigo || item.id)) publicadosMap.set(item.codigo || item.id, item);
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

  // Calendar parameters — mes real (hoy), navegable, no fijo en un mes pasado
  const [calendarMonth, setCalendarMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const currentMonthLabel = calendarMonth
    .toLocaleDateString('es-CL', { month: 'long', year: 'numeric' })
    .replace(/^\w/, c => c.toUpperCase());
  
  // Seed dates on calendar: 1 to 31
  const calendarDays = useMemo(() => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth(); // 0-indexed
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Días vacíos al inicio de la grilla, semana empezando en lunes.
    const firstWeekday = new Date(year, month, 1).getDay(); // 0=Dom..6=Sáb
    const leadingEmpty = (firstWeekday + 6) % 7;

    const days: Array<{ dayNum: number | null; events: Array<{ titulo: string; tipo: 'cierre' | 'pregunta' | 'adjudicacion'; op: Oportunidad }> }> = [];
    for (let i = 0; i < leadingEmpty; i++) {
      days.push({ dayNum: null, events: [] });
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const events: Array<{ titulo: string; tipo: 'cierre' | 'pregunta' | 'adjudicacion'; op: Oportunidad }> = [];

      oportunidades.forEach(op => {
        if (op.fechaCierre) {
          const close = new Date(op.fechaCierre);
          if (!isNaN(close.getTime()) && close.getFullYear() === year && close.getMonth() === month && close.getDate() === d) {
            events.push({ titulo: `Cierre: ${op.codigo}`, tipo: 'cierre', op });
          }
        }
        if (op.fechaPublicacion) {
          const pub = new Date(op.fechaPublicacion);
          if (!isNaN(pub.getTime()) && pub.getFullYear() === year && pub.getMonth() === month && pub.getDate() === d) {
            events.push({ titulo: `Publicada: ${op.codigo}`, tipo: 'adjudicacion', op });
          }
        }
      });

      days.push({ dayNum: d, events });
    }
    return days;
  }, [oportunidades, calendarMonth]);

  const handleUploadDoc = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDocFile || !newDocNombre.trim()) return;

    setSubiendoDoc(true);
    try {
      const formData = new FormData();
      formData.append('file', newDocFile);
      formData.append('nombre', newDocNombre.trim());
      formData.append('tipo', newDocTipo);
      if (newDocEmpresa) formData.append('empresaNombre', newDocEmpresa);
      if (newDocVencimiento) formData.append('fechaVencimiento', newDocVencimiento);

      const res = await fetch('/api/documentos', { method: 'POST', body: formData });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || 'No se pudo subir el documento.');
        return;
      }

      setDocumentos(prev => [{ ...data.documento, tamanoBytes: newDocFile.size }, ...prev]);
      setNewDocNombre('');
      setNewDocFile(null);
      setNewDocVencimiento('');
    } finally {
      setSubiendoDoc(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* INTERNAL NAVIGATION TABS */}
      <div className="flex items-center gap-1.5 border-b border-slate-200 dark:border-slate-800 pb-2 overflow-x-auto">
        {[
          { id: 'mis-negocios', label: 'Mis Negocios' },
          { id: 'adjudicaciones', label: '🏆 Adjudicaciones y Participantes' },
          { id: 'postulaciones', label: 'Postulaciones Realizadas' },
          { id: 'logistica', label: '🚚 Flete y Márgenes Regionales' },
          { id: 'alertas', label: '🚨 Centro de Alertas' },
          { id: 'calendario', label: 'Calendario Clave' },
          { id: 'catalogo', label: 'Catálogo de Insumos' },
          { id: 'documentos', label: 'Repositorio Legal' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setCurrentSub(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
              currentSub === tab.id
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-brand-400/40'
                : 'text-slate-600 hover:text-blue-600 hover:bg-brand-50 dark:text-slate-400 dark:hover:text-brand-300 dark:hover:bg-slate-800/60'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* =======================================================================
          TAB 0: ADJUDICACIONES Y SEGUIMIENTO DE POSTULACIÓN
          ======================================================================= */}
      {currentSub === 'adjudicaciones' && (
        <AdjudicacionesModule
          oportunidades={oportunidades}
          postulaciones={postulaciones}
          ordenesCompra={ordenesCompra}
          activeCompany={activeCompany}
          selectedCodigoInitial={selectedAdjudicacionCodigo}
        />
      )}

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
                {activeCompany === 'Consolidado' ? '🏢 Consolidado (Aminorte + V-MOCCS)' : `🏢 ${activeCompany}`}

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
                    col.items.map((item: KanbanItem) => (
                      <div
                        key={item.id || item.codigo}
                        onClick={() => {
                          // item.estado aquí es la ETAPA INTERNA de la postulación
                          // (Borrador/Enviada/...), no el estado oficial de Mercado
                          // Público — nunca abrir el detalle con ese valor sobreescrito,
                          // o el panel mostraría "BORRADOR" como si fuera un estado real
                          // del proceso. Se busca la oportunidad real por código/id.
                          const real = oportunidades.find(o => o.codigo === item.codigo || o.id === item.id);
                          if (onSelectOpportunity) onSelectOpportunity((real || item) as Oportunidad);
                        }}
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

                        {(item.responsable || item.proximaAccion) && (
                          <div className="rounded-lg bg-slate-50 dark:bg-slate-800/70 px-2.5 py-2 space-y-1">
                            {item.responsable && (
                              <p className="text-[9px] font-bold text-slate-500 dark:text-slate-400 truncate">
                                👤 {item.responsable}
                              </p>
                            )}
                            <p className={`text-[9px] font-bold line-clamp-2 ${
                              item.fechaProximaAccion && new Date(`${item.fechaProximaAccion}T23:59:59`).getTime() < Date.now()
                                ? 'text-red-600 dark:text-red-400'
                                : 'text-blue-700 dark:text-blue-300'
                            }`}>
                              {item.proximaAccion ? `➡️ ${item.proximaAccion}` : '➡️ Sin próxima acción'}
                              {item.fechaProximaAccion ? ` · ${new Date(`${item.fechaProximaAccion}T12:00:00`).toLocaleDateString('es-CL')}` : ''}
                            </p>
                          </div>
                        )}

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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { label: 'Acciones vencidas', value: trackingStats.vencidas, icon: '⚠️', tone: 'border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300' },
              { label: 'Próximos 7 días', value: trackingStats.proximosSieteDias, icon: '📅', tone: 'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-300' },
              { label: 'Sin plan definido', value: trackingStats.sinPlan, icon: '📝', tone: 'border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300' },
              { label: 'Seguimiento al día', value: trackingStats.alDia, icon: '✅', tone: 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-300' }
            ].map(stat => (
              <div key={stat.label} className={`rounded-2xl border p-4 ${stat.tone}`}>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wide">{stat.label}</span>
                  <span>{stat.icon}</span>
                </div>
                <span className="text-2xl font-black block mt-1">{stat.value}</span>
              </div>
            ))}
          </div>

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

            {/* Corporate Company Filter Dropdown Select */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="text-xs font-black text-brand-200 uppercase tracking-wider flex items-center gap-1.5">
                <span>🏢</span> Filtrar por Empresa:
              </span>
              <div className="relative">
                <select
                  value={filterCompany}
                  onChange={(e) => setFilterCompany(e.target.value as 'Todas' | 'Aminorte' | 'V-MOCCS')}
                  className="appearance-none bg-slate-900 text-white font-extrabold text-xs pl-4 pr-10 py-2 rounded-xl border border-brand-400/40 hover:border-brand-300 shadow-md focus:outline-none focus:ring-2 focus:ring-brand-400 cursor-pointer"
                >
                  <option value="Todas">📊 Consolidado Holding (Todas las Empresas)</option>
                  <option value="Aminorte">📄 Aminorte SpA (Oficina & Librería)</option>
                  <option value="V-MOCCS">✏️ V-MOCCS SpA (Mobiliario & Equipamiento)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-brand-300">
                  ▼
                </div>
              </div>
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
                  onChange={(e) => setFilterCompany(e.target.value as 'Todas' | 'Aminorte' | 'V-MOCCS')}
                  className="px-2.5 py-1.5 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer"
                >
                  <option value="Todas">🏢 Todas las Empresas</option>
                  <option value="Aminorte">Aminorte (Escritorio / Convenio Marco)</option>
                  <option value="V-MOCCS">V-MOCCS SpA (Mobiliario / Convenio Marco)</option>
                </select>

                <select
                  value={filterModality}
                  onChange={(e) => setFilterModality(e.target.value as 'Todas' | 'Compra Ágil' | 'Grandes Compras')}
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
                    <th className="p-3 font-black text-slate-400">Próxima acción</th>
                    <th className="p-3 font-black text-slate-400 text-right">Monto Oferta</th>
                    <th className="p-3 font-black text-slate-400 text-center">Estado</th>
                    <th className="p-3 font-black text-slate-400 text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                  {filteredPostulaciones.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="py-8 text-center text-slate-400 font-medium">
                        No se encontraron postulaciones con los filtros seleccionados.
                      </td>
                    </tr>
                  ) : (
                    filteredPostulaciones.map((p) => {
                      const pCompany = p.empresaMatch || (p.oportunidadCodigo?.startsWith('COT-') || p.oportunidadCodigo?.startsWith('GC-6012') || p.oportunidadCodigo?.startsWith('GC-1105') ? 'Aminorte' : 'V-MOCCS');
                      const pModality = p.modalidad || (p.oportunidadCodigo?.startsWith('COT-') ? 'Compra Ágil' : 'Grandes Compras');

                      const fechaAccion = p.fechaProximaAccion ? new Date(`${p.fechaProximaAccion}T23:59:59`) : null;
                      const accionVencida = fechaAccion ? fechaAccion.getTime() < Date.now() : false;

                      return (
                        <React.Fragment key={p.id}>
                        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-850/15">
                          <td className="p-3">
                            <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase inline-block mb-1 ${
                              pModality === 'Compra Ágil'
                                ? 'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300 border border-orange-300'
                                : 'bg-brand-100 text-brand-800 dark:bg-brand-950 dark:text-brand-300 border border-brand-300'
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
                              pCompany === 'V-MOCCS'
                                ? 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border border-purple-300'
                                : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border border-blue-300'
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

                          <td className="p-3 min-w-48">
                            <span className="font-semibold text-slate-700 dark:text-slate-300 block line-clamp-2">
                              {p.proximaAccion || 'Sin próxima acción'}
                            </span>
                            <span className={`text-[9px] block mt-1 font-bold ${accionVencida ? 'text-red-600 dark:text-red-400' : 'text-slate-400'}`}>
                              {p.fechaProximaAccion
                                ? `${accionVencida ? '⚠️ Vencida: ' : '📅 '}${new Date(`${p.fechaProximaAccion}T12:00:00`).toLocaleDateString('es-CL')}`
                                : 'Sin fecha definida'}
                            </span>
                          </td>

                          <td className="p-3 text-right font-black text-slate-900 dark:text-white">
                            ${p.montoOferta.toLocaleString('es-CL')}
                          </td>

                          <td className="p-3 text-center">
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                              p.estado === 'Adjudicada'
                                ? 'bg-brand-100 text-brand-800 dark:bg-brand-950/80 dark:text-brand-300 border border-brand-300'
                                : p.estado === 'Rechazada'
                                ? 'bg-red-100 text-red-700 dark:bg-red-950/80 dark:text-red-300 border border-red-300'
                                : 'bg-orange-100 text-orange-700 dark:bg-orange-950/80 dark:text-orange-300 border border-orange-300'
                            }`}>
                              {p.estado === 'Adjudicada'
                                ? '🏆 Adjudicada'
                                : p.estado === 'Rechazada'
                                ? '❌ Adjudicada a Competidor'
                                : '⏳ Cerrada (Pendiente Selección Proveedor)'}
                            </span>
                          </td>

                          <td className="p-3 text-center">
                            <div className="flex flex-col gap-1.5 items-center">
                              <button
                                onClick={() => startEditingPostulacion(p)}
                                className="px-2.5 py-1 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white dark:bg-blue-950/40 dark:text-blue-300 dark:hover:bg-blue-600 rounded text-[10px] font-bold transition cursor-pointer"
                              >
                                Editar seguimiento
                              </button>
                              <button
                                onClick={() => {
                                  const op = oportunidades.find(o => o.id === p.oportunidadId);
                                  if (op) onSelectOpportunity(op);
                                }}
                                className="px-2.5 py-1 bg-slate-100 hover:bg-blue-600 hover:text-white dark:bg-slate-800 dark:hover:bg-blue-600 rounded text-[10px] font-bold transition cursor-pointer"
                              >
                                Inspeccionar
                              </button>
                            </div>
                          </td>
                        </tr>
                        {editingPostulacionId === p.id && (
                          <tr className="bg-blue-50/70 dark:bg-blue-950/20">
                            <td colSpan={8} className="p-4">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
                                <label className="text-[10px] font-black uppercase text-slate-500">
                                  Responsable
                                  <input
                                    value={editResponsable}
                                    onChange={(e) => setEditResponsable(e.target.value)}
                                    className="mt-1 w-full p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs normal-case"
                                  />
                                </label>
                                <label className="text-[10px] font-black uppercase text-slate-500">
                                  Próxima acción
                                  <input
                                    value={editProximaAccion}
                                    onChange={(e) => setEditProximaAccion(e.target.value)}
                                    placeholder="Ej.: solicitar cotización al proveedor"
                                    className="mt-1 w-full p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs normal-case"
                                  />
                                </label>
                                <label className="text-[10px] font-black uppercase text-slate-500">
                                  Fecha próxima acción
                                  <input
                                    type="date"
                                    value={editFechaProximaAccion}
                                    onChange={(e) => setEditFechaProximaAccion(e.target.value)}
                                    className="mt-1 w-full p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs normal-case"
                                  />
                                </label>
                              </div>
                              {p.historialSeguimiento && p.historialSeguimiento.length > 0 && (
                                <div className="mt-4 border-t border-blue-100 dark:border-blue-900/60 pt-3">
                                  <p className="text-[10px] font-black uppercase text-slate-500 mb-2">Historial reciente</p>
                                  <div className="space-y-2 max-h-36 overflow-y-auto">
                                    {p.historialSeguimiento.slice(-5).reverse().map((evento, index) => (
                                      <div key={`${evento.fecha}-${index}`} className="rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-2">
                                        <div className="flex flex-wrap items-center justify-between gap-2 text-[9px] text-slate-400 font-bold">
                                          <span>{evento.usuario}</span>
                                          <span>{new Date(evento.fecha).toLocaleString('es-CL')}</span>
                                        </div>
                                        <p className="text-[10px] text-slate-600 dark:text-slate-300 mt-1">
                                          {evento.cambios.join(' · ')}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                              <div className="flex justify-end gap-2 mt-3">
                                <button
                                  onClick={() => setEditingPostulacionId(null)}
                                  className="px-3 py-1.5 rounded-lg text-[10px] font-black text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800"
                                >
                                  Cancelar
                                </button>
                                <button
                                  onClick={savePostulacionTracking}
                                  className="px-3 py-1.5 rounded-lg text-[10px] font-black bg-blue-600 text-white hover:bg-blue-700"
                                >
                                  Guardar seguimiento
                                </button>
                              </div>
                            </td>
                          </tr>
                        )}
                        </React.Fragment>
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
                  <span>🚚</span> Simulador de Márgenes y Logística Regional
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Simula el margen de una oferta descontando flete e IVA (19%) a partir de los montos que ingreses. El flete es una <strong>regla comercial fija por región</strong> (no una cotización real de transportista) — úsalo como referencia, no como precio final.
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
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-black text-slate-400 block">Costo Flete</span>
                      <span className="text-[8px] font-black uppercase px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400">Regla comercial</span>
                    </div>
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
                  <span>🔔</span> Centro de Alertas
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Procesos reales agrupados por urgencia real de cierre — mismo cálculo que el resumen de Inicio, nunca dos números distintos para lo mismo.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-850/50 text-[11px] text-slate-500 dark:text-slate-400">
              BidCoop no envía WhatsApp ni correos automáticamente — ningún proceso en segundo plano lo hace. Los reportes por correo/WhatsApp se envían solo cuando tú presionas manualmente el botón en <strong>Analítica → Reportes</strong>.
            </div>

            {/* Alertas reales — mismo motor que el Centro de Alertas de Inicio (utils/alertasEngine.ts) */}
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-1">
                {centroAlertasBusiness.total} proceso{centroAlertasBusiness.total !== 1 ? 's' : ''} con cierre dentro de 7 días
              </h3>

              {centroAlertasBusiness.total === 0 && (
                <p className="text-xs text-slate-400 italic py-4 text-center">Sin procesos con cierre próximo en este momento.</p>
              )}

              {([
                { key: 'critico', label: 'Crítico — cierra en menos de 24h', emoji: '🔴', items: centroAlertasBusiness.critico },
                { key: 'alto', label: 'Alto — cierra en 1 a 3 días', emoji: '🟠', items: centroAlertasBusiness.alto },
                { key: 'medio', label: 'Medio — cierra en 3 a 7 días', emoji: '🟡', items: centroAlertasBusiness.medio }
              ] as const).map(grupo => grupo.items.length > 0 && (
                <div key={grupo.key} className="space-y-2">
                  <span className="text-[10px] font-black uppercase text-slate-500 dark:text-slate-400">{grupo.emoji} {grupo.label} ({grupo.items.length})</span>
                  {grupo.items.slice(0, 8).map(({ op, horas }) => (
                    <div
                      key={op.id}
                      onClick={() => onSelectOpportunity && onSelectOpportunity(op)}
                      className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex items-center justify-between gap-4 cursor-pointer hover:border-blue-400 dark:hover:border-blue-500 transition"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400">{op.codigo}</span>
                        </div>
                        <h4 className="text-xs font-black text-slate-900 dark:text-white truncate">{op.titulo}</h4>
                        <p className="text-[10px] text-slate-500 truncate">{op.organismo}</p>
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 shrink-0">
                        {horas < 1 ? `${Math.round(horas * 60)} min` : horas < 24 ? `${Math.round(horas)} h` : `${Math.round(horas / 24)} días`}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* =======================================================================
          TAB 3: CALENDARIO (BUG-04 FIX: Fast truncated render with max 2 items & +N badge)
          ======================================================================= */}
      {currentSub === 'calendario' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Planificador de Hitos</h3>
              <p className="text-[10px] text-slate-400 mt-0.5">Calendario mensual optimizado con plazos críticos y aperturas de Mercado Público.</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCalendarMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}
                className="w-7 h-7 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-black text-xs transition cursor-pointer"
              >
                ‹
              </button>
              <strong className="text-xs font-black text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-3.5 py-1.5 rounded-xl">
                {currentMonthLabel}
              </strong>
              <button
                onClick={() => setCalendarMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}
                className="w-7 h-7 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-black text-xs transition cursor-pointer"
              >
                ›
              </button>
            </div>
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-2">
            {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((d) => (
              <div key={d} className="text-center font-black text-[9px] uppercase text-slate-400 py-1">{d}</div>
            ))}

            {calendarDays.map((slot, idx) => {
              const visibleEvents = slot.events.slice(0, 2);
              const extraCount = slot.events.length - 2;

              return (
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
                    {extraCount > 0 && (
                      <span className="text-[8px] font-black bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 px-1 py-0.5 rounded">
                        +{extraCount} más
                      </span>
                    )}
                  </div>

                  <div className="flex-1 flex flex-col gap-1 overflow-hidden mt-1 justify-end">
                    {visibleEvents.map((e, eIdx) => (
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
              );
            })}
          </div>
        </div>
      )}

      {/* =======================================================================
          TAB 4: CATALOGO
          ======================================================================= */}
      {currentSub === 'catalogo' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Catálogo de Productos Propios</h3>
              <p className="text-[10px] text-slate-400 mt-0.5">Catálogo real, persistido — base para preparar tu oferta de Convenio Marco (la carga al portal la haces tú mismo).</p>
            </div>
            <label className="shrink-0 flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black rounded-xl cursor-pointer transition">
              {importandoCatalogo ? 'Importando…' : '📥 Importar Excel'}
              <input
                type="file"
                accept=".xlsx,.xls"
                className="hidden"
                disabled={importandoCatalogo}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const empresaDestino = activeCompany === 'Consolidado' ? 'Aminorte' : activeCompany;
                  handleImportarCatalogo(file, empresaDestino);
                  e.target.value = '';
                }}
              />
            </label>
          </div>

          {importCatalogoMsg && (
            <p className={`text-[11px] font-semibold ${importCatalogoMsg.startsWith('Error') ? 'text-red-500' : 'text-emerald-600'}`}>{importCatalogoMsg}</p>
          )}
          <p className="text-[9px] text-slate-400">Formato: columnas <code>sku, nombre, categoria, precioBase, costoActual, stock</code> en la primera fila.</p>

          {catalogLoading && <p className="text-xs text-slate-400">Cargando catálogo…</p>}
          {!catalogLoading && catalogProductsFiltrados.length === 0 && (
            <p className="text-xs text-slate-400 italic py-6 text-center">Sin productos cargados todavía — importa un Excel para empezar.</p>
          )}

          {!catalogLoading && catalogProductsFiltrados.length > 0 && (
            <div className="overflow-y-auto max-h-[450px] border border-slate-100 dark:border-slate-800 rounded-xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-slate-50 dark:bg-slate-850 sticky top-0">
                  <tr>
                    <th className="p-3 font-black text-slate-400">SKU</th>
                    <th className="p-3 font-black text-slate-400">Nombre del Producto</th>
                    <th className="p-3 font-black text-slate-400">Empresa</th>
                    <th className="p-3 font-black text-slate-400">Categoría</th>
                    <th className="p-3 font-black text-slate-400 text-right">Precio Base</th>
                    <th className="p-3 font-black text-slate-400 text-right">Costo Actual</th>
                    <th className="p-3 font-black text-slate-400 text-right">Stock</th>
                    <th className="p-3 font-black text-slate-400 text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                  {catalogProductsFiltrados.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-850/10">
                      <td className="p-3 font-bold text-slate-900 dark:text-white">{p.sku}</td>
                      <td className="p-3 font-semibold text-slate-850 dark:text-slate-350">{p.nombre}</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${
                          p.empresa === 'V-MOCCS'
                            ? 'bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400'
                            : 'bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400'
                        }`}>
                          {p.empresa}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-500 font-bold">{p.categoria || 'Sin categoría'}</span>
                      </td>
                      <td className="p-3 text-right font-black text-slate-900 dark:text-white">{p.precioBase !== null ? `$${p.precioBase.toLocaleString('es-CL')}` : 'No disponible'}</td>
                      <td className="p-3 text-right text-slate-500">{p.costoActual !== null ? `$${p.costoActual.toLocaleString('es-CL')}` : 'No disponible'}</td>
                      <td className="p-3 text-right text-slate-500">{p.stock !== null ? p.stock.toLocaleString('es-CL') : 'No disponible'}</td>
                      <td className="p-3 text-center">
                        <button
                          type="button"
                          onClick={async () => {
                            if (!confirm(`¿Eliminar "${p.nombre}" del catálogo?`)) return;
                            await fetch(`/api/db-productos?id=${p.id}`, { method: 'DELETE' });
                            cargarCatalogo();
                          }}
                          className="text-[9px] font-black text-red-500 hover:text-red-600"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* =======================================================================
          TAB 5: DOCUMENTOS REPOSITORIO
          ======================================================================= */}
      {currentSub === 'documentos' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
            <div>
              <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Repositorio Documental</h3>
              <p className="text-[10px] text-slate-400 mt-0.5">Archivos reales, con versionado y alerta de vencimiento — nada precargado ni simulado.</p>
            </div>

            {docsLoading && <p className="text-xs text-slate-400">Cargando documentos…</p>}
            {!docsLoading && documentos.length === 0 && (
              <p className="text-xs text-slate-400 italic py-6 text-center">Sin documentos cargados todavía.</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {documentos.map((doc) => {
                const venc = estadoVencimiento(doc.fechaVencimiento);
                return (
                  <div key={doc.id} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col justify-between gap-2">
                    <div className="flex items-start gap-2.5">
                      <span className="text-xl">📁</span>
                      <div className="min-w-0">
                        <h4 className="text-xs font-black text-slate-900 dark:text-white truncate" title={doc.nombre}>{doc.nombre}</h4>
                        <span className="text-[9px] text-slate-400">
                          {doc.tipo} · v{doc.version} · {formatBytes(doc.tamanoBytes)}
                          {doc.empresa && ` · ${doc.empresa.nombre}`}
                        </span>
                      </div>
                    </div>
                    <span className={`text-[9px] ${venc.className}`}>{venc.label}</span>
                    <div className="flex justify-between items-center text-[10px] pt-1 border-t border-slate-100 dark:border-slate-800">
                      <span className="text-slate-400 font-bold">
                        {doc.responsable?.nombre || 'No disponible'}
                      </span>
                      <a
                        href={`/api/documentos/${doc.id}/download`}
                        className="text-blue-500 font-black hover:text-blue-600"
                      >
                        Descargar
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Upload new */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
            <form onSubmit={handleUploadDoc} className="space-y-3">
              <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider block">Cargar Nuevo Documento</span>

              <input
                type="text"
                placeholder="Nombre descriptivo (ej. F30_Agosto.pdf)"
                value={newDocNombre}
                onChange={(e) => setNewDocNombre(e.target.value)}
                className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white"
                required
              />

              <input
                type="file"
                onChange={(e) => setNewDocFile(e.target.files?.[0] || null)}
                className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white file:mr-2 file:py-1 file:px-2 file:rounded-lg file:border-0 file:text-[10px] file:font-bold file:bg-slate-200 dark:file:bg-slate-700"
                required
              />

              <div className="grid grid-cols-2 gap-2">
                <select
                  value={newDocTipo}
                  onChange={(e) => setNewDocTipo(e.target.value as 'INTERNO' | 'OFICIAL')}
                  className="text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white"
                >
                  <option value="INTERNO">Interno</option>
                  <option value="OFICIAL">Oficial (Mercado Público)</option>
                </select>
                <select
                  value={newDocEmpresa}
                  onChange={(e) => setNewDocEmpresa(e.target.value)}
                  className="text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white"
                >
                  <option value="">Corporativo (sin empresa)</option>
                  <option value="Aminorte">Aminorte</option>
                  <option value="V-MOCCS">V-MOCCS</option>
                </select>
              </div>

              <div>
                <label className="text-[9px] uppercase font-bold text-slate-400 block mb-1">Fecha de vencimiento (opcional)</label>
                <input
                  type="date"
                  value={newDocVencimiento}
                  onChange={(e) => setNewDocVencimiento(e.target.value)}
                  className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white"
                />
              </div>

              <button
                type="submit"
                disabled={subiendoDoc}
                className="w-full py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 disabled:opacity-50 text-white font-black text-xs transition"
              >
                {subiendoDoc ? 'Subiendo…' : '✓ Guardar en Repositorio'}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
