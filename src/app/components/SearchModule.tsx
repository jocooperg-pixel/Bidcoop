import React, { useState, useMemo, useEffect, useRef } from 'react';
import { LayoutGrid, List, Star, Sparkles, FileSpreadsheet, Eye, Building2, Clock } from 'lucide-react';
import { Oportunidad, Postulacion, VistaGuardada, DocumentoAdjunto, Item } from '../types';
import { getMatchScoreBadgeStyle } from '../utils/smartMatchEngine';
import { getSemaforoBidCoop } from '../utils/semaforoEngine';
import { EMPRESAS } from '../utils/empresas';
import { mockPostulaciones } from '../mockData';
import Card from './ui/Card';
import { MatchBadge, SemaforoBadge } from './ui/Badge';
import Pagination from './ui/Pagination';

interface UsuarioBasico {
  id: string;
  nombre: string;
}

interface SearchModuleProps {
  oportunidades: Oportunidad[];
  vistasGuardadas: VistaGuardada[];
  activeSubSection: string;
  selectedOpportunity: Oportunidad | null;
  onSelectOpportunity: (op: Oportunidad | null) => void;
  onSaveVistaGuardada: (vista: VistaGuardada) => void;
  onPostular: (postulacion: Postulacion) => void;
  postulaciones: Postulacion[];
  currentUser: { nombre: string; email: string; rol: string };
  onConfirmarEnvio: (postulacionId: string) => void;
  teamComments: Record<string, Oportunidad['comentarios']>;
  onAddComment: (opId: string, texto: string) => void;
  onImportFromApi?: (code: string) => Promise<void>;
  onSyncRealTime?: () => Promise<void>;
  onUpdateOpportunityItems?: (opId: string, items: Item[]) => void;
  globalSearchText?: string;
  onGlobalSearchTextChange?: (text: string) => void;
  followedOps: Record<string, boolean>;
  onToggleFollow: (opId: string) => void;
}

export default function SearchModule({
  oportunidades,
  vistasGuardadas,
  activeSubSection,
  selectedOpportunity,
  onSelectOpportunity,
  onSaveVistaGuardada,
  onPostular,
  postulaciones,
  currentUser,
  onConfirmarEnvio,
  teamComments,
  onAddComment,
  onImportFromApi,
  onSyncRealTime,
  onUpdateOpportunityItems,
  globalSearchText = '',
  onGlobalSearchTextChange,
  followedOps,
  onToggleFollow
}: SearchModuleProps) {
  // --- LIST STATE ---

  const [searchText, setSearchText] = useState('');
  const [filterRubro, setFilterRubro] = useState('Todos');
  const [localSyncing, setLocalSyncing] = useState(false);
  const [filterRegion, setFilterRegion] = useState('Todos');
  const [filterRiesgo, setFilterRiesgo] = useState('Todos');
  const [filterMontoMin, setFilterMontoMin] = useState(0);
  const [filterMontoMax, setFilterMontoMax] = useState(1000000000);
  const [filterModalidad, setFilterModalidad] = useState('Todos');
  const [filterEstado, setFilterEstado] = useState('Publicada');

  // Column visibility
  const [visibleColumns, setVisibleColumns] = useState({
    codigo: true,
    organismo: true,
    titulo: true,
    monto: true,
    match: true,
    semaforo: true,
    cierre: true
  });
  const [showColumnSelector, setShowColumnSelector] = useState(false);
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  // Saved view creation
  const [newViewName, setNewViewName] = useState('');
  const [showSaveViewModal, setShowSaveViewModal] = useState(false);
  const [showAuditModal, setShowAuditModal] = useState(false);
  const [auditSearchFilter, setAuditSearchFilter] = useState('');

  // Audit Compras Ágiles memoized data and KPI calculations
  const coAuditList = useMemo(() => {
    const list = oportunidades.filter(op => op.modalidad === 'Compra Ágil' || op.tipoOficial === 'CO' || op.tipoOficial === 'COT' || (op.codigo || '').includes('-CO'));
    
    // Rule 17 sorting:
    // 1. MONTO_NO_ENCONTRADO
    // 2. monto_final = 0
    // 3. diferencias entre monto original y monto final
    // 4. correctamente validados
    return [...list].sort((a, b) => {
      const stA = a.estado_validacion_monto || 'MONTO_NO_ENCONTRADO';
      const stB = b.estado_validacion_monto || 'MONTO_NO_ENCONTRADO';
      const mFinA = a.monto_final !== undefined ? a.monto_final : (a.monto || 0);
      const mFinB = b.monto_final !== undefined ? b.monto_final : (b.monto || 0);
      const diffA = Math.abs(mFinA - (a.monto_original || 0));
      const diffB = Math.abs(mFinB - (b.monto_original || 0));

      if (stA === 'MONTO_NO_ENCONTRADO' && stB !== 'MONTO_NO_ENCONTRADO') return -1;
      if (stA !== 'MONTO_NO_ENCONTRADO' && stB === 'MONTO_NO_ENCONTRADO') return 1;

      if (mFinA === 0 && mFinB !== 0) return -1;
      if (mFinA !== 0 && mFinB === 0) return 1;

      if (diffA !== diffB) return diffB - diffA;

      return 0;
    });
  }, [oportunidades]);

  const filteredCoAuditList = useMemo(() => {
    if (!auditSearchFilter.trim()) return coAuditList;
    const q = auditSearchFilter.toLowerCase();
    return coAuditList.filter(op => 
      op.codigo.toLowerCase().includes(q) ||
      op.organismo.toLowerCase().includes(q) ||
      op.titulo.toLowerCase().includes(q) ||
      (op.proveedorAdjudicado || '').toLowerCase().includes(q) ||
      (op.fuente_monto || '').toLowerCase().includes(q) ||
      (op.codigoOrdenCompra || '').toLowerCase().includes(q)
    );
  }, [coAuditList, auditSearchFilter]);

  const auditKPIs = useMemo(() => {
    const total = coAuditList.length;
    const valid = coAuditList.filter(op => (op.monto_final !== undefined ? op.monto_final : (op.monto || 0)) > 0).length;
    const noFound = coAuditList.filter(op => op.estado_validacion_monto === 'MONTO_NO_ENCONTRADO' || (op.monto_final !== undefined ? op.monto_final : (op.monto || 0)) === 0).length;
    const recOC = coAuditList.filter(op => op.estado_validacion_monto === 'RECUPERADO_DESDE_OC').length;
    const recAdj = coAuditList.filter(op => op.estado_validacion_monto === 'RECUPERADO_DESDE_ADJUDICACION').length;
    const recCot = coAuditList.filter(op => op.estado_validacion_monto === 'RECUPERADO_DESDE_COTIZACION').length;
    const sumOrig = coAuditList.reduce((acc, op) => acc + (op.monto_original || 0), 0);
    const sumFinal = coAuditList.reduce((acc, op) => acc + (op.monto_final !== undefined ? op.monto_final : (op.monto || 0)), 0);
    const sumRec = coAuditList.filter(op => op.estado_validacion_monto && op.estado_validacion_monto !== 'MONTO_NO_ENCONTRADO').reduce((acc, op) => acc + (op.monto_final !== undefined ? op.monto_final : (op.monto || 0)), 0);
    const pctValid = total > 0 ? (valid / total * 100).toFixed(1) : '0';

    return { total, valid, noFound, recOC, recAdj, recCot, sumOrig, sumFinal, sumRec, pctValid };
  }, [coAuditList]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // --- DETAIL VIEW STATE ---
  const [detailGroup, setDetailGroup] = useState<'general' | 'inteligencia' | 'postulacion' | 'gestion'>('general');
  const [detailSub, setDetailSub] = useState<string>('resumen');
  
  // AI Analysis simulated loading states
  const [analyzedOps, setAnalyzedOps] = useState<Record<string, boolean>>({});
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisText, setAnalysisText] = useState('');

  // Competidores reales vía API OCDS de Datos Abiertos (ChileCompra) — nunca inventados
  const [ocdsData, setOcdsData] = useState<Record<string, { tenderers: Array<{ nombre: string; rut: string | null; region: string | null }>; awards: Array<{ estado?: string; proveedor?: string; monto?: number; moneda?: string }> } | null>>({});
  const [ocdsLoading, setOcdsLoading] = useState<Record<string, boolean>>({});

  // Postulation form state
  const [formMonto, setFormMonto] = useState<number>(0);
  const [formResponsable, setFormResponsable] = useState('');
  const [uploadedDocs, setUploadedDocs] = useState<string[]>([]);
  const [offerPrices, setOfferPrices] = useState<Record<string, number>>({});

  // Margin Simulator States
  const [showSimulator, setShowSimulator] = useState(false);
  const [simCostPrices, setSimCostPrices] = useState<Record<string, number>>({});
  const [simMargins, setSimMargins] = useState<Record<string, number>>({});
  const [simFlete, setSimFlete] = useState<number>(15000);

  // Comment input state
  const [newCommentText, setNewCommentText] = useState('');

  // Document preview modal state
  const [previewDocModal, setPreviewDocModal] = useState<{ doc: DocumentoAdjunto; opportunity: Oportunidad } | null>(null);

  // Official Quote Generator Modal State
  const [showQuoteModal, setShowQuoteModal] = useState<boolean>(false);
  const [quoteCompany, setQuoteCompany] = useState<'Aminorte' | 'V-MOCCS'>('Aminorte');


  // Edit Items Modal State
  const [showEditItemsModal, setShowEditItemsModal] = useState<boolean>(false);
  const [editableItems, setEditableItems] = useState<Item[]>([]);

  // Directorio real de usuarios (para "Encargado de Postulación") — reemplaza
  // el roster fabricado que antes venía por prop (teamMembers).
  const [usuariosDirectorio, setUsuariosDirectorio] = useState<UsuarioBasico[]>([]);
  useEffect(() => {
    fetch('/api/usuarios/directorio-basico')
      .then(res => (res.ok ? res.json() : { usuarios: [] }))
      .then(data => setUsuariosDirectorio(Array.isArray(data.usuarios) ? data.usuarios : []))
      .catch(() => setUsuariosDirectorio([]));
  }, []);

  // Synchronize local search state with Topbar global search input
  useEffect(() => {
    if (globalSearchText !== undefined) {
      setSearchText(globalSearchText);
    }
  }, [globalSearchText]);

  // Synchronize activeSubSection navigation from Sidebar search items
  useEffect(() => {
    if (activeSubSection === 'compra-agil') {
      setFilterModalidad('Compra Ágil');
      onSelectOpportunity(null);
      setCurrentPage(1);
    } else if (activeSubSection === 'grandes-compras') {
      setFilterModalidad('Grandes Compras');
      onSelectOpportunity(null);
      setCurrentPage(1);
    } else if (activeSubSection === 'licitaciones') {
      setFilterModalidad('Licitación');
      onSelectOpportunity(null);
      setCurrentPage(1);
    } else if (activeSubSection === 'buscador') {
      setFilterModalidad('Todos');
      setCurrentPage(1);
    }
  }, [activeSubSection]);

  const handleLocalSearchChange = (val: string) => {
    setSearchText(val);
    setCurrentPage(1);
    if (onGlobalSearchTextChange) {
      onGlobalSearchTextChange(val);
    }
  };

  const getFichaUrl = (opportunity: Oportunidad) => {
    // sourceUrl ya viene resuelto por el motor de sync (Compra Ágil vive en
    // buscador.mercadopublico.cl, licitaciones en el portal legacy) — solo
    // se usa la fórmula legacy como último recurso si por algún motivo no
    // llegó sourceUrl para ese proceso.
    if (opportunity.sourceUrl) return opportunity.sourceUrl;
    const code = (opportunity.codigo || '').toUpperCase();
    return `https://www.mercadopublico.cl/Procurement/Modules/RFB/DetailsAcquisition.aspx?qs=PD94lVIVFUe5Sth1FXBBAA==&IdLicitacion=${code}`;
  };
  // Ojo: esta función NUNCA debe imitar un documento oficial de Mercado
  // Público / Gobierno de Chile — lo que arma aquí es un resumen de trabajo
  // interno de BidCoop, con lo real que tenemos (título, organismo, montos,
  // ítems) y "No informado" explícito donde no tenemos dato real (nunca un
  // relleno inventado tipo RUT 60.000.000-0 o precio $1.000).
  const handleDownloadDoc = (doc: DocumentoAdjunto, opportunity: Oportunidad) => {
    // El único documento real que trae el sync es un link a la ficha oficial
    // — para ese caso "descargar" no tiene sentido, así que abrimos el link
    // real en vez de generar cualquier archivo.
    if (doc.tipo === 'link') {
      window.open(doc.tamanho || getFichaUrl(opportunity), '_blank', 'noopener,noreferrer');
      return;
    }

    const docName = doc.nombre;
    const title = 'Resumen de Trabajo BidCoop';

    const itemsRows = opportunity.items.map(item => `
      <tr>
        <td><code>${item.sku}</code></td>
        <td>${item.producto}</td>
        <td>${item.cantidad}</td>
        <td>${item.precioUnitario ? `$${item.precioUnitario.toLocaleString('es-CL')} CLP` : 'No informado'}</td>
      </tr>
    `).join('');

    const critList = opportunity.criteriosEvaluacion.length > 0
      ? opportunity.criteriosEvaluacion.map(crit => `
        <li><strong>${crit.aspecto} (${crit.ponderacion}%):</strong> ${crit.descripcion}</li>
      `).join('')
      : '<li>No informado por Mercado Público a través de la API pública — consulta las bases oficiales.</li>';

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${title} - ${opportunity.codigo}</title>
        <style>
          body {
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            color: #1e293b;
            line-height: 1.6;
            margin: 40px;
            background-color: #f8fafc;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            background: #ffffff;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
            border-top: 8px solid #2563eb;
          }
          .header {
            text-align: center;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .bidcoop-logo {
            font-weight: 900;
            font-size: 14px;
            color: #2563eb;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .bidcoop-sub {
            font-size: 11px;
            color: #64748b;
            margin-top: 4px;
          }
          .not-official {
            display: inline-block;
            margin-top: 8px;
            font-size: 10px;
            font-weight: 800;
            color: #b45309;
            background: #fffbeb;
            border: 1px solid #fde68a;
            padding: 3px 10px;
            border-radius: 999px;
          }
          h1 {
            font-size: 22px;
            color: #0f172a;
            margin: 20px 0 10px 0;
            font-weight: 800;
          }
          .meta-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            background: #f1f5f9;
            padding: 15px;
            border-radius: 8px;
            font-size: 13px;
            margin-bottom: 30px;
          }
          .meta-item {
            font-size: 13px;
          }
          .meta-item strong {
            color: #475569;
          }
          h2 {
            font-size: 16px;
            color: #1e3a8a;
            border-left: 4px solid #3b82f6;
            padding-left: 10px;
            margin-top: 30px;
            margin-bottom: 15px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
            font-size: 13px;
          }
          th, td {
            border: 1px solid #cbd5e1;
            padding: 10px;
            text-align: left;
          }
          th {
            background-color: #f8fafc;
            color: #334155;
            font-weight: 700;
          }
          .footer {
            margin-top: 50px;
            font-size: 11px;
            color: #94a3b8;
            text-align: center;
            border-top: 1px solid #e2e8f0;
            padding-top: 20px;
          }
          .footer a {
            color: #2563eb;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="bidcoop-logo">BIDCOOP</div>
            <div class="bidcoop-sub">Resumen de trabajo interno — no es un documento oficial de Mercado Público</div>
            <div class="not-official">⚠ Documento no oficial — consulta las bases reales antes de postular</div>
            <h1>${title}</h1>
            <p style="font-size: 14px; color: #475569; font-weight: 600;">ID Licitación / Adquisición: ${opportunity.codigo}</p>
          </div>

          <div class="meta-grid">
            <div class="meta-item"><strong>Organismo Comprador:</strong><br>${opportunity.organismo}</div>
            <div class="meta-item"><strong>RUT Organismo:</strong><br>${opportunity.organismoRut || 'No informado'}</div>
            <div class="meta-item"><strong>Fecha de Publicación:</strong><br>${opportunity.fechaPublicacion}</div>
            <div class="meta-item"><strong>Fecha de Cierre:</strong><br>${opportunity.fechaCierre}</div>
            <div class="meta-item"><strong>Modalidad:</strong><br>${opportunity.modalidad}</div>
            <div class="meta-item"><strong>Monto Neto Estimado:</strong><br>${opportunity.monto > 0 ? `$${opportunity.monto.toLocaleString('es-CL')} CLP` : 'No informado'}</div>
          </div>

          <h2>1. Objeto de la Contratación</h2>
          <p>${opportunity.descripcion}</p>

          <h2>2. Detalle de Ítems Requeridos</h2>
          <table>
            <thead>
              <tr>
                <th>Código SKU</th>
                <th>Descripción del Producto / Servicio</th>
                <th>Cantidad</th>
                <th>Precio Referencia Unitario</th>
              </tr>
            </thead>
            <tbody>
              ${itemsRows}
            </tbody>
          </table>

          <h2>3. Criterios de Evaluación</h2>
          <ul>
            ${critList}
          </ul>

          <div class="footer">
            Resumen generado por BidCoop a partir de los datos sincronizados de Mercado Público para ${opportunity.empresaMatch || 'tu empresa'}.<br>
            No reemplaza las bases oficiales — verifica siempre en: <a href="${getFichaUrl(opportunity)}">${getFichaUrl(opportunity)}</a>
          </div>
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    const cleanName = docName.replace(/[^a-zA-Z0-9_\.-]/g, '_');
    link.href = url;
    link.download = cleanName.endsWith('.html') || cleanName.endsWith('.pdf') ? cleanName : `${cleanName}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // AI analysis dynamic simulation effect
  useEffect(() => {
    if (!selectedOpportunity) {
      setAnalysisProgress(0);
      return;
    }
    
    // If user views intelligence and the opportunity has not been analyzed yet
    if (detailGroup === 'inteligencia' && !analyzedOps[selectedOpportunity.id]) {
      setAnalysisProgress(0);
      setAnalysisText('Iniciando extracción inteligente de bases...');
      
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        if (progress >= 100) {
          clearInterval(interval);
          setAnalysisProgress(100);
          setAnalyzedOps(prev => ({ ...prev, [selectedOpportunity.id]: true }));
        } else {
          setAnalysisProgress(progress);
          if (progress < 30) {
            setAnalysisText('🔍 Extrayendo bases administrativas, pliegos técnicos y datos de contacto...');
          } else if (progress < 60) {
            setAnalysisText('📊 Buscando convocatorias similares e historial de adjudicaciones en Mercado Público...');
          } else {
            setAnalysisText('🤖 Evaluando comportamiento crediticio y score de riesgo del comprador...');
          }
        }
      }, 150); // 1.5 seconds total
      
      return () => clearInterval(interval);
    }
  }, [detailGroup, selectedOpportunity, analyzedOps]);

  // Competidores reales (OCDS) — se pide solo al abrir el tab, una vez por oportunidad
  useEffect(() => {
    if (!selectedOpportunity) return;
    if (!(detailGroup === 'inteligencia' && detailSub === 'competidores')) return;
    const codigo = selectedOpportunity.codigo;
    if (!codigo || codigo in ocdsData || ocdsLoading[codigo]) return;

    setOcdsLoading(prev => ({ ...prev, [codigo]: true }));
    fetch(`/api/mercadopublico?codigo=${encodeURIComponent(codigo)}&endpoint=ocds`)
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        setOcdsData(prev => ({ ...prev, [codigo]: data && Array.isArray(data.tenderers) ? data : { tenderers: [], awards: [] } }));
      })
      .catch(() => {
        setOcdsData(prev => ({ ...prev, [codigo]: { tenderers: [], awards: [] } }));
      })
      .finally(() => {
        setOcdsLoading(prev => ({ ...prev, [codigo]: false }));
      });
  }, [detailGroup, detailSub, selectedOpportunity, ocdsData, ocdsLoading]);

  // Apply saved view filters
  const handleApplySavedView = (view: VistaGuardada) => {
    setSearchText(view.filters.search);
    setFilterRubro(view.filters.rubro);
    setFilterRegion(view.filters.region);
    setFilterRiesgo(view.filters.riesgo);
    setFilterMontoMin(view.filters.montoMin);
    setFilterMontoMax(view.filters.montoMax);
    setCurrentPage(1);
  };

  // Save current filters as a view
  const handleSaveViewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newViewName.trim()) return;
    const newView: VistaGuardada = {
      id: `v-${Date.now()}`,
      nombre: newViewName,
      filters: {
        search: searchText,
        rubro: filterRubro,
        region: filterRegion,
        riesgo: filterRiesgo,
        montoMin: filterMontoMin,
        montoMax: filterMontoMax
      }
    };
    onSaveVistaGuardada(newView);
    setNewViewName('');
    setShowSaveViewModal(false);
    alert(`Vista "${newView.nombre}" guardada con éxito.`);
  };

  // Filtered opportunities
  const filteredOportunidades = useMemo(() => {
    const cleanSearch = searchText.toLowerCase().trim();
    const list = !cleanSearch

      ? oportunidades.filter((op) => {
          const matchRubro = filterRubro === 'Todos' || op.rubro === filterRubro;
          const matchRegion = filterRegion === 'Todos' || op.region === filterRegion;
          const matchRiesgo = filterRiesgo === 'Todos' || op.riesgo === filterRiesgo;
          const matchMonto = op.monto >= filterMontoMin && op.monto <= filterMontoMax;
          const matchModalidad = filterModalidad === 'Todos' || op.modalidad === filterModalidad;
          const matchEstado = filterEstado === 'Todos' || op.estado === filterEstado;
          return matchRubro && matchRegion && matchRiesgo && matchMonto && matchModalidad && matchEstado;
        })
      : oportunidades.filter((op) => {
          const cleanSearchAlphanum = cleanSearch.replace(/[^a-z0-9]/g, '');
          const opCodigoLower = op.codigo.toLowerCase();
          const matchesCode =
            opCodigoLower.includes(cleanSearch) ||
            opCodigoLower.replace(/[^a-z0-9]/g, '').includes(cleanSearchAlphanum);

          if (matchesCode) {
            return true;
          }

          const matchesText =
            op.titulo.toLowerCase().includes(cleanSearch) ||
            op.organismo.toLowerCase().includes(cleanSearch) ||
            (op.descripcion && op.descripcion.toLowerCase().includes(cleanSearch));

          if (matchesText) {
            const matchRubro = filterRubro === 'Todos' || op.rubro === filterRubro;
            const matchRegion = filterRegion === 'Todos' || op.region === filterRegion;
            const matchRiesgo = filterRiesgo === 'Todos' || op.riesgo === filterRiesgo;
            const matchMonto = op.monto >= filterMontoMin && op.monto <= filterMontoMax;
            const matchModalidad = filterModalidad === 'Todos' || op.modalidad === filterModalidad;
            const matchEstado = filterEstado === 'Todos' || op.estado === filterEstado;
            return matchRubro && matchRegion && matchRiesgo && matchMonto && matchModalidad && matchEstado;
          }

          return false;
        });

    return [...list].sort((a, b) => {
      const dateA = a.fechaPublicacion || a.fechaCierre || '';
      const dateB = b.fechaPublicacion || b.fechaCierre || '';
      return dateB.localeCompare(dateA);
    });

  }, [oportunidades, searchText, filterRubro, filterRegion, filterRiesgo, filterMontoMin, filterMontoMax, filterModalidad, filterEstado]);

  // Paginated opportunities
  const paginatedOportunidades = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredOportunidades.slice(start, start + itemsPerPage);
  }, [filteredOportunidades, currentPage]);

  const totalPages = Math.ceil(filteredOportunidades.length / itemsPerPage) || 1;

  // Exports
  const handleExportData = (format: 'csv' | 'json') => {
    const exportString = format === 'csv'
      ? 'Código,Organismo,Título,Monto,Match,Cierre\n' + filteredOportunidades.map(o => `"${o.codigo}","${o.organismo}","${o.titulo}",${o.monto},${o.matchScore},"${o.fechaCierre}"`).join('\n')
      : JSON.stringify(filteredOportunidades, null, 2);

    const blob = new Blob([exportString], { type: format === 'csv' ? 'text/csv' : 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `BidCoop_Licitaciones.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleExportExcel = () => {
    try {
      console.log('[ExportExcel] Iniciando exportación vía API con iframe...');

      const iframeName = `download_iframe_${Date.now()}`;
      
      // Creamos un iframe oculto
      const iframe = document.createElement('iframe');
      iframe.name = iframeName;
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      // Creamos un formulario oculto
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = '/api/export-excel';
      form.target = iframeName; // Enviamos la respuesta del formulario al iframe
      form.style.display = 'none';
      
      // Añadimos los datos como un input oculto
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'payload';
      input.value = JSON.stringify(filteredOportunidades);
      
      form.appendChild(input);
      document.body.appendChild(form);
      
      console.log('[ExportExcel] Enviando POST request al iframe...');
      form.submit();
      
      // Limpiamos el DOM después de unos segundos
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
        console.log('[ExportExcel] Elementos temporales removidos del DOM');
      }, 5000);

    } catch (error: unknown) {
      console.error("[ExportExcel] ❌ Error:", error);
      const msg = error instanceof Error ? error.message : String(error);
      alert(`Error al exportar: ${msg}`);
    }
  };

  // Initialize postulation state when selecting opportunity
  const handleOpenDetail = (op: Oportunidad) => {
    onSelectOpportunity(op);
    setDetailGroup('general');
    setDetailSub('resumen');
    
    // Autofill base values
    setFormMonto(op.monto);
    setFormResponsable(currentUser.nombre || usuariosDirectorio[0]?.nombre || '');
    setUploadedDocs([]);
    const initialPrices: Record<string, number> = {};
    const initialCosts: Record<string, number> = {};
    const initialMargins: Record<string, number> = {};
    op.items.forEach(it => {
      initialPrices[it.sku] = it.precioUnitario;
      // cost base is assumed at 55% of original unit price
      initialCosts[it.sku] = Math.round(it.precioUnitario * 0.55);
      initialMargins[it.sku] = 30; // default 30% margin
    });
    setOfferPrices(initialPrices);
    setSimCostPrices(initialCosts);
    setSimMargins(initialMargins);
    setSimFlete(op.monto > 5000000 ? 80000 : 15000);
    setShowSimulator(false);
  };

  // Atajos desde la tarjeta de oportunidad — reusan el mismo estado/lógica
  // del panel de detalle (handleOpenDetail), solo cambian el punto de
  // entrada: en vez de abrir siempre en "Resumen", saltan directo a la
  // pestaña que el usuario pidió.
  const handleQuickAnalizar = (op: Oportunidad) => {
    handleOpenDetail(op);
    setDetailGroup('inteligencia');
    setDetailSub('convocatorias');
  };

  const handleQuickCotizar = (op: Oportunidad) => {
    handleOpenDetail(op);
    setShowQuoteModal(true);
  };

  // Tiempo restante hasta el cierre — mismo criterio que Centro de Alertas
  // del Dashboard (horas reales desde ahora, nunca estimado).
  const tiempoRestante = (op: Oportunidad): string | null => {
    if (!op.fechaCierre) return null;
    const cierre = new Date(op.fechaCierre);
    if (isNaN(cierre.getTime())) return null;
    const horas = (cierre.getTime() - Date.now()) / (1000 * 60 * 60);
    if (horas < 0) return null;
    if (horas < 1) return `${Math.round(horas * 60)} min`;
    if (horas < 24) return `${Math.round(horas)} h`;
    return `${Math.round(horas / 24)} días`;
  };

  // Calculate sum of item postulations
  const totalPostuladoMonto = useMemo(() => {
    if (!selectedOpportunity) return 0;
    return selectedOpportunity.items.reduce((sum, it) => {
      const price = offerPrices[it.sku] || it.precioUnitario;
      return sum + (price * it.cantidad);
    }, 0);
  }, [selectedOpportunity, offerPrices]);

  // Handle postulation submit
  const handlePostulationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOpportunity) return;

    const newPostulacion: Postulacion = {
      id: `post-${Date.now()}`,
      oportunidadId: selectedOpportunity.id,
      oportunidadTitulo: selectedOpportunity.titulo,
      oportunidadCodigo: selectedOpportunity.codigo,
      // Nunca 'Enviada' aquí — BidCoop no transmite nada a Mercado Público.
      // Queda en Borrador hasta que el usuario confirme manualmente que
      // postuló de verdad en el portal oficial.
      estado: 'Borrador',
      responsable: formResponsable,
      montoOferta: totalPostuladoMonto || formMonto,
      documentosAdjuntos: [...uploadedDocs, ...selectedOpportunity.documentos.map(d => d.nombre)],
      itemsOfertados: selectedOpportunity.items.map(it => ({
        sku: it.sku,
        precioOferta: offerPrices[it.sku] || it.precioUnitario,
        cantidad: it.cantidad
      })),
      fechaActualizacion: new Date().toISOString().split('T')[0]
    };

    onPostular(newPostulacion);
    alert('Preparación de oferta guardada en Mis Negocios. Esto NO envía nada a Mercado Público — cuando postules de verdad en el portal oficial, vuelve aquí y confírmalo.');
  };

  const [confirmacionMarcada, setConfirmacionMarcada] = useState(false);
  const [codigoCopiadoParaExtension, setCodigoCopiadoParaExtension] = useState(false);

  const handleAddCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOpportunity || !newCommentText.trim()) return;
    onAddComment(selectedOpportunity.id, newCommentText);
    setNewCommentText('');
  };

  const activeComments = selectedOpportunity
    ? teamComments[selectedOpportunity.id] || selectedOpportunity.comentarios
    : [];

  return (
    <div className="h-full flex flex-col gap-6">
      
      {/* =======================================================================
          MODE 1: DETAILED 3-COLUMN OPPORTUNITY PAGE
          ======================================================================= */}
      {selectedOpportunity ? (
        <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col lg:flex-row overflow-hidden shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
          
          {/* COLUMN 1: COLLAPSIBLE INTERNAL NAVIGATION SIDEBAR */}
          <div className="w-full lg:w-64 border-r border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-4 flex flex-col justify-between shrink-0">
            <div className="space-y-6">
              
              {/* Return Button */}
              <button
                onClick={() => onSelectOpportunity(null)}
                className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-xs font-black transition mb-4 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Volver al Listado
              </button>

              {/* Opportunity Summary Card */}
              <div className="bg-slate-100/50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/80 rounded-xl p-3.5 space-y-2">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[9px] uppercase font-black px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200/30 dark:border-blue-800/40 inline-block">
                    {selectedOpportunity.modalidad}
                  </span>
                  {(() => {
                    const semaforo = getSemaforoBidCoop(selectedOpportunity);
                    return (
                      <span
                        title={semaforo.reason}
                        className={`text-[9px] uppercase font-black px-2 py-0.5 rounded border inline-flex items-center gap-1 ${semaforo.badgeBg}`}
                      >
                        <span>{semaforo.emoji}</span> {semaforo.label}
                      </span>
                    );
                  })()}
                </div>
                <h3 className="text-xs font-black text-slate-900 dark:text-white line-clamp-2 leading-tight">
                  {selectedOpportunity.titulo}
                </h3>
                <p className="text-[10px] font-black text-slate-505 dark:text-slate-400 font-mono">
                  {selectedOpportunity.codigo}
                </p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold truncate">
                  {selectedOpportunity.organismo}
                </p>
                
                <a
                  href={getFichaUrl(selectedOpportunity)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 px-3 bg-gradient-to-r from-blue-600 to-indigo-650 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-[10px] font-black shadow-md shadow-blue-500/10 flex items-center justify-center gap-1.5 transition mt-2 cursor-pointer"
                >
                  <span>🌐 Ir a Ficha Oficial</span>
                </a>
              </div>

              {/* Bloques de navegación del detalle — reorganizados en 7 bloques
                  (Resumen/Productos/Match/Rentabilidad/Requisitos/Documentos/
                  Seguimiento) sin tocar el estado ni el contenido real: cada
                  botón sigue apuntando al mismo detailGroup/detailSub de
                  siempre, solo cambia cómo se agrupan y etiquetan. */}
              <div className="space-y-4">

                {/* Bloque 1: Resumen */}
                <div>
                  <h4 className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-wider mb-2 px-1">Resumen</h4>
                  <div className="flex flex-col gap-1">
                    {[
                      { id: 'resumen', label: 'Resumen Ejecutivo' },
                      { id: 'cronograma', label: 'Cronograma' }
                    ].map(sub => (
                      <button
                        key={sub.id}
                        onClick={() => { setDetailGroup('general'); setDetailSub(sub.id); }}
                        className={`w-full text-left text-xs font-bold px-3 py-1.5 rounded-lg transition ${
                          detailGroup === 'general' && detailSub === sub.id
                            ? 'bg-brand-600 text-white shadow-sm'
                            : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bloque 2: Productos */}
                <div>
                  <h4 className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-wider mb-2 px-1">Productos</h4>
                  <div className="flex flex-col gap-1">
                    {[
                      { id: 'items', label: 'Ítems y Cantidades' }
                    ].map(sub => (
                      <button
                        key={sub.id}
                        onClick={() => { setDetailGroup('general'); setDetailSub(sub.id); }}
                        className={`w-full text-left text-xs font-bold px-3 py-1.5 rounded-lg transition ${
                          detailGroup === 'general' && detailSub === sub.id
                            ? 'bg-brand-600 text-white shadow-sm'
                            : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bloque 3: Match — todo lo que evalúa qué tan bien calza
                    esta oportunidad con el negocio (Inteligencia B2B) */}
                <div>
                  <h4 className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-wider mb-2 px-1">Match</h4>
                  <div className="flex flex-col gap-1">
                    {[
                      { id: 'convocatorias', label: 'Convocatorias Similares' },
                      { id: 'competidores', label: 'Competidores y Compradores' },
                      { id: 'precios', label: 'Historial de Precios' },
                      { id: 'comprador', label: 'Evaluación Comprador' },
                      { id: 'contacto', label: 'Datos de Contacto' }
                    ].map(sub => (
                      <button
                        key={sub.id}
                        onClick={() => { setDetailGroup('inteligencia'); setDetailSub(sub.id); }}
                        className={`w-full text-left text-xs font-bold px-3 py-1.5 rounded-lg transition cursor-pointer ${
                          detailGroup === 'inteligencia' && detailSub === sub.id
                            ? 'bg-brand-600 text-white shadow-sm shadow-brand-600/10'
                            : 'text-slate-600 hover:bg-slate-105 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-white'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bloque 4: Rentabilidad — oferta, costos y simulador de margen */}
                <div>
                  <h4 className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-wider mb-2 px-1">Rentabilidad</h4>
                  <div className="flex flex-col gap-1">
                    {[
                      { id: 'formulario', label: 'Oferta y Presupuesto' }
                    ].map(sub => (
                      <button
                        key={sub.id}
                        onClick={() => { setDetailGroup('postulacion'); setDetailSub(sub.id); }}
                        className={`w-full text-left text-xs font-bold px-3 py-1.5 rounded-lg transition ${
                          detailGroup === 'postulacion' && detailSub === sub.id
                            ? 'bg-brand-600 text-white shadow-sm'
                            : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bloque 5: Requisitos */}
                <div>
                  <h4 className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-wider mb-2 px-1">Requisitos</h4>
                  <div className="flex flex-col gap-1">
                    {[
                      { id: 'criterios', label: 'Criterios de Evaluación' }
                    ].map(sub => (
                      <button
                        key={sub.id}
                        onClick={() => { setDetailGroup('general'); setDetailSub(sub.id); }}
                        className={`w-full text-left text-xs font-bold px-3 py-1.5 rounded-lg transition ${
                          detailGroup === 'general' && detailSub === sub.id
                            ? 'bg-brand-600 text-white shadow-sm'
                            : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bloque 6: Documentos */}
                <div>
                  <h4 className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-wider mb-2 px-1">Documentos</h4>
                  <div className="flex flex-col gap-1">
                    {[
                      { id: 'documentos', label: 'Documentos Anexos' }
                    ].map(sub => (
                      <button
                        key={sub.id}
                        onClick={() => { setDetailGroup('general'); setDetailSub(sub.id); }}
                        className={`w-full text-left text-xs font-bold px-3 py-1.5 rounded-lg transition ${
                          detailGroup === 'general' && detailSub === sub.id
                            ? 'bg-brand-600 text-white shadow-sm'
                            : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bloque 7: Seguimiento — preguntas públicas y comentarios internos del equipo */}
                <div>
                  <h4 className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-wider mb-2 px-1">Seguimiento</h4>
                  <div className="flex flex-col gap-1">
                    {[
                      { id: 'preguntas', label: 'Preguntas Públicas' },
                      { id: 'comentarios', label: 'Comentarios del Equipo' }
                    ].map(sub => (
                      <button
                        key={sub.id}
                        onClick={() => { setDetailGroup('general'); setDetailSub(sub.id); }}
                        className={`w-full text-left text-xs font-bold px-3 py-1.5 rounded-lg transition ${
                          detailGroup === 'general' && detailSub === sub.id
                            ? 'bg-brand-600 text-white shadow-sm'
                            : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>
            
            {/* Context Logo */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
              <span className="text-[9px] font-black tracking-widest text-slate-400">BIDCOOP INTEL</span>
            </div>
          </div>

          {/* COLUMN 2: CENTRAL CONTENT PANEL (DYNAMICAL ACCORDING TO NAVIGATION) */}
          <div className="flex-1 p-6 overflow-y-auto max-h-[700px] space-y-6">
            
            {/* SPECIAL GRANDES COMPRAS NOTICE BANNER */}
            {(selectedOpportunity.esInvitacionGrandesCompras || selectedOpportunity.modalidad === 'Grandes Compras') && (
              <div className="bg-gradient-to-r from-purple-950 via-indigo-900 to-slate-900 border border-purple-500/40 rounded-2xl p-4 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-in fade-in duration-200">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-purple-600 text-white shadow-xs">
                      🛍️ GRANDE COMPRA (CONVENIO MARCO &gt; 1.000 UTM)
                    </span>
                    <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${
                      selectedOpportunity.estado === 'Adjudicada' ? 'bg-emerald-600 text-white' : 'bg-amber-500 text-white animate-pulse'
                    }`}>
                      {selectedOpportunity.estado === 'Adjudicada' ? '🏆 Adjudicada' : '⏳ CERRADA - EN EVALUACIÓN (SIN OFERTA SELECCIONADA)'}
                    </span>
                  </div>
                  <h3 className="text-sm font-black text-white">
                    Intención de Compra emitida por {selectedOpportunity.organismo}
                  </h3>
                  <p className="text-[11px] text-purple-200 mt-0.5">
                    {selectedOpportunity.convenioMarcoNombre || 'Convenio Marco Mercado Público'} &bull; Empresa convocada: <strong className="text-white">{selectedOpportunity.empresaMatch}</strong>
                    {selectedOpportunity.fechaAdjudicacionEstimada && ` • Adjudicación estimada: ${selectedOpportunity.fechaAdjudicacionEstimada}`}
                  </p>
                </div>
                
                <div className="text-left md:text-right shrink-0">
                  <span className="text-[9px] uppercase font-bold text-purple-300 block">Monto Solicitado</span>
                  <span className="text-base font-black text-emerald-400">
                    ${selectedOpportunity.monto.toLocaleString('es-CL')} CLP {selectedOpportunity.montoUtm ? `(~${selectedOpportunity.montoUtm} UTM)` : ''}
                  </span>
                </div>
              </div>
            )}

            {/* SUB-VIEW 1: Resumen */}
            {detailGroup === 'general' && detailSub === 'resumen' && (
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">Resumen Ejecutivo por IA</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Análisis consolidado del pliego administrativo.
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-850 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs leading-relaxed space-y-3.5 text-slate-700 dark:text-slate-300">
                  <p>{selectedOpportunity.descripcion}</p>
                  {/* Desglose del match — construido SOLO desde matchScore/matchKeywords
                      ya guardados (el mismo cálculo que produjo el % mostrado en toda la
                      app). Nunca recalcular con otra lógica aquí: dos motores de matching
                      distintos mostrando dos porcentajes distintos para la misma
                      oportunidad fue exactamente el bug que esto reemplaza. */}
                  {(() => {
                    const empresa = selectedOpportunity.empresaMatch;
                    const keywords = selectedOpportunity.matchKeywords;
                    const explicacion = !empresa
                      ? 'Sin match real de catálogo — ningún producto/palabra clave coincide con Aminorte o V-MOCCS. Requiere clasificación manual.'
                      : keywords && keywords.length > 0
                        ? `Match del ${selectedOpportunity.matchScore}% por catálogo: ${keywords.length} palabra(s) clave del Convenio Marco de ${empresa} coinciden con el título/descripción de este proceso.`
                        : `Match asignado a ${empresa}, pero este registro fue sincronizado antes de guardar el desglose de palabras clave — no disponible para auditar retroactivamente.`;
                    return (
                      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-800/60 p-4 rounded-xl space-y-2.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-base">🎯</span>
                            <h4 className="font-black text-xs text-emerald-900 dark:text-emerald-300 uppercase tracking-wider">
                              Matching por Catálogo — {empresa || 'Sin match'}
                            </h4>
                          </div>
                          <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-emerald-600 text-white shadow-sm">
                            {selectedOpportunity.matchScore}% Match
                          </span>
                        </div>
                        <p className="text-[11px] text-emerald-800 dark:text-emerald-300/90 leading-normal">
                          {explicacion}
                        </p>
                        {keywords && keywords.length > 0 && (
                          <div className="pt-2 border-t border-emerald-200/80 dark:border-emerald-800/50">
                            <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase block mb-1.5">
                              Palabras clave coincidentes ({keywords.length}):
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {keywords.map((kw, pIdx) => (
                                <span key={pIdx} className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700/60 shadow-xs">
                                  ✓ {kw}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}

            {/* SUB-VIEW 2: Cronograma */}
            {detailGroup === 'general' && detailSub === 'cronograma' && (
              <div className="space-y-4">
                <h2 className="text-lg font-black text-slate-900 dark:text-white">Cronograma Oficial</h2>
                <div className="relative border-l-2 border-slate-100 dark:border-slate-800 ml-4 pl-6 space-y-6 py-2">
                  {selectedOpportunity.cronograma.map((c, i) => (
                    <div key={i} className="relative">
                      {/* Timeline dot */}
                      <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-blue-500 bg-white dark:bg-slate-900 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      </span>
                      <h4 className="text-xs font-black text-slate-900 dark:text-white">{c.hito}</h4>
                      <span className="text-[10px] text-slate-400 font-bold block mt-0.5">{c.fecha}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SUB-VIEW 3: Items */}
            {detailGroup === 'general' && detailSub === 'items' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                      <span>📦</span> Detalle de Ítems Solicitados y Valores Referenciales
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Desglose cuantitativo de artículos solicitados por el organismo comprador y análisis comparativo de precios de mercado.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => {
                        setEditableItems(JSON.parse(JSON.stringify(selectedOpportunity.items)));
                        setShowEditItemsModal(true);
                      }}
                      className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-black border border-slate-300 dark:border-slate-700 flex items-center gap-1.5 transition cursor-pointer shrink-0"
                    >
                      <span>Editar / Ajustar Ítems MP</span> ✏️
                    </button>

                    <button
                      onClick={() => {
                        setQuoteCompany(selectedOpportunity.empresaMatch === 'V-MOCCS' ? 'V-MOCCS' : 'Aminorte');
                        setShowQuoteModal(true);
                      }}
                      className="px-4 py-2.5 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 hover:from-blue-500 hover:to-sky-400 text-white rounded-xl text-xs font-black shadow-md shadow-sky-500/20 flex items-center gap-2 transition cursor-pointer shrink-0"
                    >
                      <span>Generar Cotización PDF Formal</span> 📄
                    </button>
                  </div>
                </div>

                {/* Market Summary Cards */}
                {selectedOpportunity.items.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                      <span className="text-[10px] font-black uppercase text-slate-400 block tracking-wider">Presupuesto Bases Organismo</span>
                      <span className="text-sm font-black text-slate-900 dark:text-white mt-1 block">
                        ${selectedOpportunity.items.reduce((sum, it) => sum + (it.cantidad * it.precioUnitario), 0).toLocaleString('es-CL')} CLP
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-sky-50/60 dark:bg-sky-950/20 border border-sky-100 dark:border-sky-900/40">
                      <span className="text-[10px] font-black uppercase text-sky-600 dark:text-sky-400 block tracking-wider">Valor Ref. Promedio Mercado Público</span>
                      <span className="text-sm font-black text-sky-700 dark:text-sky-300 mt-1 block">
                        ${selectedOpportunity.items.reduce((sum, it) => sum + (it.cantidad * (it.precioMercadoReferencial || Math.round(it.precioUnitario * 0.88))), 0).toLocaleString('es-CL')} CLP
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40">
                      <span className="text-[10px] font-black uppercase text-blue-600 dark:text-blue-400 block tracking-wider">Margen Ref. Competitivo en MP</span>
                      <span className="text-sm font-black text-blue-700 dark:text-blue-300 mt-1 block flex items-center gap-1">
                        <span>🏷️</span> ~12.5% Ahorro / Margen Estimado
                      </span>
                    </div>
                  </div>
                )}

                <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm bg-white dark:bg-slate-900">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-100/70 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
                      <tr>
                        <th className="p-3.5 font-black text-slate-500 dark:text-slate-400">SKU / Insumo Solicitado</th>
                        <th className="p-3.5 font-black text-slate-500 dark:text-slate-400 text-center">Cant.</th>
                        <th className="p-3.5 font-black text-slate-500 dark:text-slate-400 text-right">P. Unitario Bases</th>
                        <th className="p-3.5 font-black text-emerald-600 dark:text-emerald-400 text-right">Val. Ref. Venta MP</th>
                        <th className="p-3.5 font-black text-slate-500 dark:text-slate-400 text-right">Subtotal Bases</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {selectedOpportunity.items.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="p-6 text-center text-slate-400 italic">
                            Insumos globales no disgregados en la ficha original de Mercado Público.
                          </td>
                        </tr>
                      ) : (
                        selectedOpportunity.items.map((it, idx) => {
                          const precioRefMP = it.precioMercadoReferencial || Math.round(it.precioUnitario * 0.88);
                          const subtotalBases = it.cantidad * it.precioUnitario;
                          const subtotalRefMP = it.cantidad * precioRefMP;
                          const diffPct = Math.round(((it.precioUnitario - precioRefMP) / it.precioUnitario) * 100);

                          return (
                            <tr key={idx} className="hover:bg-slate-50/70 dark:hover:bg-slate-850/50 transition">
                              <td className="p-3.5 max-w-[280px]">
                                <span className="font-black text-slate-900 dark:text-white block text-xs">{it.producto}</span>
                                {it.especificacionTecnica && (
                                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                    {it.especificacionTecnica}
                                  </p>
                                )}
                                <div className="flex items-center gap-2 mt-1.5">
                                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold">{it.sku}</span>
                                  {it.unidadMedida && (
                                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                                      {it.unidadMedida}
                                    </span>
                                  )}
                                </div>
                              </td>
                              <td className="p-3.5 text-center font-black text-slate-800 dark:text-slate-200 text-sm">
                                {it.cantidad.toLocaleString('es-CL')}
                              </td>
                              <td className="p-3.5 text-right font-bold text-slate-700 dark:text-slate-300">
                                ${it.precioUnitario.toLocaleString('es-CL')}
                              </td>
                              <td className="p-3.5 text-right">
                                <span className="font-black text-emerald-600 dark:text-emerald-400 block">
                                  ${precioRefMP.toLocaleString('es-CL')}
                                </span>
                                {diffPct > 0 && (
                                  <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400">
                                    ~{diffPct}% val. mercado
                                  </span>
                                )}
                              </td>
                              <td className="p-3.5 text-right">
                                <span className="font-black text-slate-900 dark:text-white block text-sm">
                                  ${subtotalBases.toLocaleString('es-CL')}
                                </span>
                                <span className="text-[10px] text-slate-400 block font-semibold">
                                  Ref. MP: ${subtotalRefMP.toLocaleString('es-CL')}
                                </span>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* SUB-VIEW 4: Documentos */}
            {detailGroup === 'general' && detailSub === 'documentos' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">Documentos Oficiales</h2>
                  <p className="text-xs text-slate-550 dark:text-slate-400 mt-1">
                    Descarga los pliegos, bases y resoluciones del portal de ChileCompra.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="text-xs font-black text-blue-900 dark:text-blue-400 flex items-center gap-1.5">
                      <span>📄</span> Carpeta de Bases y Adjuntos Oficiales
                    </h4>
                    <p className="text-[10px] text-blue-700/80 dark:text-blue-400/80 font-bold leading-normal">
                      Accede directamente a la sección de archivos de Mercado Público para descargar las bases originales firmadas y anexos técnicos de este proceso.
                    </p>
                  </div>
                  <a
                    href={getFichaUrl(selectedOpportunity)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-650 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-black shadow-md shadow-blue-500/10 flex items-center gap-1.5 transition cursor-pointer"
                  >
                    Ver en Mercado Público 🌐
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedOpportunity.documentos.map((doc, idx) => {
                    return (
                      <div key={idx} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition flex items-center justify-between gap-4 bg-slate-50/50 dark:bg-slate-900/50 shadow-sm">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">
                            {doc.tipo === 'link' ? '🌐' : doc.tipo === 'pdf' ? '📕' : doc.tipo === 'xlsx' ? '📗' : '📘'}
                          </span>
                          <div>
                            <h4 className="text-xs font-black text-slate-900 dark:text-white truncate max-w-[180px]">{doc.nombre}</h4>
                            <span className="text-[10px] text-slate-400 font-bold block mt-0.5">
                              {doc.tipo === 'link' ? 'Bases Digitales (Mercado Público)' : `${doc.tamanho} • ${doc.tipo.toUpperCase()}`}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setPreviewDocModal({ doc, opportunity: selectedOpportunity })}
                            className="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 text-xs font-black flex items-center gap-1 transition cursor-pointer"
                          >
                            <span>Vista Previa</span> 👁️
                          </button>
                          <button
                            onClick={() => handleDownloadDoc(doc, selectedOpportunity)}
                            className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-600 dark:text-blue-400 text-xs font-black flex items-center gap-1 transition cursor-pointer"
                          >
                            <span>Descargar</span> ⬇️
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* SUB-VIEW 5: Preguntas */}
            {detailGroup === 'general' && detailSub === 'preguntas' && (
              <div className="space-y-4">
                <h2 className="text-lg font-black text-slate-900 dark:text-white">Preguntas y Aclaraciones Públicas</h2>
                <div className="space-y-4">
                  {selectedOpportunity.preguntas.length === 0 ? (
                    <div className="text-center py-6 text-slate-400 text-xs border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-xl">Sin consultas registradas en Mercado Público para esta ID.</div>
                  ) : (
                    selectedOpportunity.preguntas.map((p, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850/50 border border-slate-100 dark:border-slate-800 space-y-2 text-xs">
                        <div className="flex justify-between font-black text-slate-950 dark:text-slate-200">
                          <span>Consulta • {p.usuario}</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 italic">&quot;{p.pregunta}&quot;</p>
                        {p.respuesta && (
                          <div className="pl-4 border-l-2 border-blue-500 mt-2 space-y-1">
                            <span className="text-[9px] uppercase font-black text-blue-500">Respuesta Oficial</span>
                            <p className="text-slate-800 dark:text-slate-300 font-bold">&quot;{p.respuesta}&quot;</p>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* SUB-VIEW 6: Criterios */}
            {detailGroup === 'general' && detailSub === 'criterios' && (
              <div className="space-y-4">
                <h2 className="text-lg font-black text-slate-900 dark:text-white">Criterios de Evaluación</h2>
                {selectedOpportunity.criteriosEvaluacion.length > 0 ? (
                  <div className="space-y-3">
                    {selectedOpportunity.criteriosEvaluacion.map((crit, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-850 bg-white dark:bg-slate-900 flex justify-between items-center gap-4 shadow-sm">
                        <div className="flex-1">
                          <h4 className="text-xs font-black text-slate-900 dark:text-white">{crit.aspecto}</h4>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">{crit.descripcion}</p>
                        </div>
                        <div className="w-16 text-right font-black text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 p-2 rounded-lg">
                          {crit.ponderacion}%
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-5 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40 text-center">
                    <span className="text-2xl block mb-2">⚫</span>
                    <p className="text-xs font-black text-slate-600 dark:text-slate-300 uppercase">Información Insuficiente</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 max-w-md mx-auto leading-relaxed">
                      Mercado Público no expone las ponderaciones reales de evaluación a través de la API pública. No mostramos un porcentaje inventado — revisa las bases oficiales para conocer los criterios exactos de este proceso.
                    </p>
                    {selectedOpportunity.sourceUrl && (
                      <a
                        href={selectedOpportunity.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-black text-blue-600 dark:text-blue-400 hover:underline mt-3 inline-block"
                      >
                        Ver bases oficiales en Mercado Público →
                      </a>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* SUB-VIEW 7: Comentarios del equipo */}
            {detailGroup === 'general' && detailSub === 'comentarios' && (
              <div className="space-y-4">
                <h2 className="text-lg font-black text-slate-900 dark:text-white">Comentarios y Coordinación</h2>
                
                {/* Add comment Form */}
                <form onSubmit={handleAddCommentSubmit} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Añadir comentario técnico o logístico para el equipo..."
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    className="flex-1 text-xs p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-slate-100 focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition"
                  >
                    Comentar
                  </button>
                </form>

                <div className="space-y-3.5 mt-4">
                  {activeComments.length === 0 ? (
                    <div className="text-center py-6 text-slate-400 text-xs">Aún no hay comentarios técnicos sobre esta oportunidad.</div>
                  ) : (
                    activeComments.map((c) => (
                      <div key={c.id} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850/30 border border-slate-100 dark:border-slate-800/80 text-xs">
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className="font-extrabold text-slate-900 dark:text-white">{c.usuario}</span>
                            <span className="text-[9px] uppercase font-black bg-slate-100 dark:bg-slate-800 text-slate-400 px-1.5 py-0.2 rounded">{c.rol}</span>
                          </div>
                          <span className="text-[9px] text-slate-400">{c.fecha}</span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-350">{c.texto}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* AI LOADING PANEL */}
            {detailGroup === 'inteligencia' && !analyzedOps[selectedOpportunity.id] && (
              <div className="flex flex-col items-center justify-center py-16 px-6 text-center space-y-6 bg-slate-50/50 dark:bg-slate-900/40 rounded-3xl border border-slate-100 dark:border-slate-800/80 max-w-xl mx-auto shadow-sm animate-in fade-in zoom-in duration-350">
                <div className="relative">
                  {/* Glowing Pulse Orb */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-650 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 animate-pulse">
                    🤖
                  </div>
                  <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full animate-bounce" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">BidCoop AI Engine</h3>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">Analizando bases de licitación {selectedOpportunity.codigo}</p>
                </div>

                {/* Progress bar */}
                <div className="w-full max-w-xs bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden relative">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-650 h-full rounded-full transition-all duration-150 ease-out"
                    style={{ width: `${analysisProgress}%` }}
                  />
                </div>

                <div className="flex flex-col items-center gap-1.5 min-h-[45px]">
                  <span className="text-xs font-black text-blue-600 dark:text-blue-400">{analysisProgress}%</span>
                  <p className="text-[11px] font-black text-slate-605 dark:text-slate-400 transition-all duration-300">{analysisText}</p>
                </div>
              </div>
            )}

            {/* SUB-VIEW 8: Otras oportunidades del mismo rubro (real, sin histórico inventado) */}
            {detailGroup === 'inteligencia' && detailSub === 'convocatorias' && analyzedOps[selectedOpportunity.id] && (() => {
              const similares = oportunidades
                .filter(o => o.id !== selectedOpportunity.id && o.rubro === selectedOpportunity.rubro && o.estado === 'Publicada')
                .sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0))
                .slice(0, 6);
              return (
                <div className="space-y-4">
                  <div>
                    <h2 className="text-lg font-black text-slate-900 dark:text-white">Otras Oportunidades del Mismo Rubro</h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Procesos activos reales en la plataforma con rubro <strong>{selectedOpportunity.rubro}</strong>. Mercado Público no expone un histórico público de licitaciones cerradas comparables, así que esta vista se limita a lo actualmente publicado.
                    </p>
                  </div>
                  {similares.length === 0 ? (
                    <div className="text-center py-6 text-slate-400 text-xs">No hay otras oportunidades activas en este rubro en este momento.</div>
                  ) : (
                    <div className="space-y-3.5">
                      {similares.map(sim => (
                        <div
                          key={sim.id}
                          onClick={() => onSelectOpportunity(sim)}
                          className="p-4 rounded-xl border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm space-y-3 cursor-pointer hover:border-blue-300 dark:hover:border-blue-700 transition"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black text-blue-650 dark:text-blue-450">{sim.codigo}</span>
                            <span className="text-[9px] font-black px-1.5 py-0.2 rounded uppercase bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400">
                              {sim.estado}
                            </span>
                          </div>
                          <div>
                            <h4 className="text-xs font-black text-slate-900 dark:text-white line-clamp-1">{sim.titulo}</h4>
                            <span className="text-[10px] text-slate-400 mt-0.5 block">{sim.organismo}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs pt-1.5 border-t border-slate-100 dark:border-slate-800/80">
                            <div>
                              <span className="text-[9px] uppercase font-black text-slate-400 block">Monto</span>
                              <strong className="font-black text-slate-900 dark:text-white">
                                {sim.monto > 0 ? `$${sim.monto.toLocaleString('es-CL')}` : 'No informado'}
                              </strong>
                            </div>
                            <div className="text-right">
                              <span className="text-[9px] uppercase font-black text-slate-400 block">Match BidCoop</span>
                              <span className="font-black text-blue-600 dark:text-blue-400">{sim.matchScore}%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* SUB-VIEW 9: Competidores y Compradores — solo datos reales de Mercado Público */}
            {detailGroup === 'inteligencia' && detailSub === 'competidores' && analyzedOps[selectedOpportunity.id] && (
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">Competidores y Compradores</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Información de adjudicación oficial cuando Mercado Público la publica.</p>
                </div>

                {selectedOpportunity.proveedorAdjudicado ? (
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white border border-emerald-500/40 shadow-md space-y-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-500 text-white inline-block">
                      🏆 Proveedor Adjudicado — Dato Oficial Mercado Público
                    </span>
                    <h4 className="text-sm font-black text-white">{selectedOpportunity.proveedorAdjudicado}</h4>
                    <div className="text-[11px] text-slate-200 flex flex-wrap gap-4 pt-1">
                      {selectedOpportunity.rutProveedor && <span>RUT: <strong>{selectedOpportunity.rutProveedor}</strong></span>}
                      {selectedOpportunity.codigoOrdenCompra && <span>Orden de Compra: <strong>{selectedOpportunity.codigoOrdenCompra}</strong></span>}
                    </div>
                  </div>
                ) : (
                  <div className="p-5 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40 text-center">
                    <span className="text-2xl block mb-2">⚫</span>
                    <p className="text-xs font-black text-slate-600 dark:text-slate-300 uppercase">Información Insuficiente</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 max-w-md mx-auto leading-relaxed">
                      Mercado Público no expone públicamente qué otros proveedores participaron ni sus puntajes de evaluación. {selectedOpportunity.estado === 'Publicada'
                        ? 'Este dato solo se publica oficialmente una vez que el organismo adjudica el proceso — no lo inventamos mientras tanto.'
                        : 'Este proceso aún no registra un proveedor adjudicado en la ficha oficial que tenemos sincronizada.'}
                    </p>
                    {selectedOpportunity.sourceUrl && (
                      <a
                        href={selectedOpportunity.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-black text-blue-600 dark:text-blue-400 hover:underline mt-3 inline-block"
                      >
                        Ver ficha oficial en Mercado Público →
                      </a>
                    )}
                  </div>
                )}

                {/* Proveedores que efectivamente cotizaron/postularon — dato real vía API OCDS ChileCompra */}
                <div className="pt-2">
                  <h3 className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-2">Proveedores que Cotizaron (Dato Real OCDS)</h3>
                  {ocdsLoading[selectedOpportunity.codigo] ? (
                    <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center text-xs text-slate-500 dark:text-slate-400">
                      Consultando API OCDS de Datos Abiertos (ChileCompra)...
                    </div>
                  ) : ocdsData[selectedOpportunity.codigo]?.tenderers.length ? (
                    <div className="space-y-2">
                      {ocdsData[selectedOpportunity.codigo]!.tenderers.map((t, idx) => (
                        <div key={`${t.rut || t.nombre}-${idx}`} className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex flex-wrap items-center justify-between gap-2">
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-100">{t.nombre}</span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 flex gap-3">
                            {t.rut && <span>RUT: {t.rut}</span>}
                            {t.region && <span>{t.region}</span>}
                          </span>
                        </div>
                      ))}
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 pt-1">Fuente: API OCDS de Datos Abiertos, ChileCompra — lista de proveedores registrados como postulantes (&quot;tenderer&quot;) en el proceso.</p>
                    </div>
                  ) : (
                    <div className="p-4 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40 text-center">
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">La API OCDS de Datos Abiertos tampoco reporta postulantes para este proceso todavía.</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* SUB-VIEW 10: Historial de precios — sin tendencia inventada */}
            {detailGroup === 'inteligencia' && detailSub === 'precios' && analyzedOps[selectedOpportunity.id] && (
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">Historial de Precios de Adjudicación</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Variación de precio promedio adjudicado, cuando existen registros reales para este ítem.</p>
                </div>

                {selectedOpportunity.historialPrecios ? (
                  <div className="border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-50/50 dark:bg-slate-850/20 p-4">
                    <div className="space-y-3 text-xs">
                      {selectedOpportunity.historialPrecios.map((h, i) => (
                        <div key={i} className="flex justify-between items-center py-1.5 border-b border-slate-100 dark:border-slate-800/60 last:border-b-0">
                          <span className="font-bold text-slate-500 dark:text-slate-400">{h.fecha}</span>
                          <span className="font-black text-slate-900 dark:text-white">${h.precioUnitarioPromedio.toLocaleString('es-CL')} CLP (Neto)</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6 text-slate-400 text-xs">
                    Sin registros de variación de precios para este ítem — Mercado Público no publica un histórico de precios adjudicados consultable por SKU.
                  </div>
                )}
              </div>
            )}

            {/* SUB-VIEW 11: Evaluación Comprador — removida: sin fuente de datos real todavía */}
            {detailGroup === 'inteligencia' && detailSub === 'comprador' && analyzedOps[selectedOpportunity.id] && (
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">Evaluación y Comportamiento del Comprador</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Historial de pagos, reclamos y cumplimiento por organismo.</p>
                </div>
                <div className="p-5 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40 text-center">
                  <span className="text-2xl block mb-2">⚫</span>
                  <p className="text-xs font-black text-slate-600 dark:text-slate-300 uppercase">Información Insuficiente</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 max-w-md mx-auto leading-relaxed">
                    No tenemos una fuente de datos real de días de pago, reclamos vigentes en ChileCompra ni notas de proveedores por organismo. Mercado Público no publica esto de forma consultable, así que no vamos a mostrar un puntaje inventado.
                  </p>
                </div>
              </div>
            )}

            {/* SUB-VIEW 12: Datos de Contacto — sin generar personas/emails/teléfonos falsos */}
            {detailGroup === 'inteligencia' && detailSub === 'contacto' && analyzedOps[selectedOpportunity.id] && (
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">Datos de Contacto Comprador</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Solo mostramos lo que Mercado Público confirma oficialmente.</p>
                </div>

                <div className="p-5 rounded-2xl border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm space-y-4 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-white flex items-center justify-center font-black text-sm uppercase">
                      {selectedOpportunity.organismo.slice(0, 2)}
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-900 dark:text-white line-clamp-1">{selectedOpportunity.organismo}</h4>
                      <span className="text-[10px] text-slate-400 mt-0.5 block">RUT: {selectedOpportunity.organismoRut || 'No informado'}</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 dark:border-slate-800 pt-4">
                    <span className="text-2xl block mb-2 text-center">⚫</span>
                    <p className="text-xs font-black text-slate-600 dark:text-slate-300 uppercase text-center">Sin Contacto Directo Verificado</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 text-center leading-relaxed">
                      No tenemos un nombre, correo o teléfono de contacto real para esta unidad de compras. Para consultas, la vía oficial es el módulo de &quot;Preguntas Públicas&quot; dentro de la ficha del proceso en Mercado Público.
                    </p>
                    {selectedOpportunity.sourceUrl && (
                      <div className="text-center mt-3">
                        <a
                          href={selectedOpportunity.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-black text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          Ver ficha oficial en Mercado Público →
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* SUB-VIEW 11: Formulario de postulación */}
            {detailGroup === 'postulacion' && (() => {
              const postulacionActual = postulaciones.find(p => p.oportunidadId === selectedOpportunity.id);

              if (postulacionActual && postulacionActual.estado === 'Enviada') {
                return (
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-lg font-black text-slate-900 dark:text-white">Postulación Confirmada</h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Registro de confirmación manual — BidCoop no tiene integración de escritura con Mercado Público, esto es evidencia interna de que el equipo ya postuló en el portal oficial.</p>
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-2xl p-5 space-y-2">
                      <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-black text-sm">
                        <span>✓</span> Envío confirmado
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        Confirmado por <strong>{postulacionActual.confirmadoPor || 'No disponible'}</strong>
                        {postulacionActual.confirmadoEn && ` el ${new Date(postulacionActual.confirmadoEn).toLocaleString('es-CL', { timeZone: 'America/Santiago' })}`}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        Monto ofertado: ${postulacionActual.montoOferta.toLocaleString('es-CL')} CLP
                      </p>
                    </div>
                  </div>
                );
              }

              if (postulacionActual && postulacionActual.estado === 'Borrador') {
                return (
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-lg font-black text-slate-900 dark:text-white">Confirmar Envío Real</h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Ya guardaste una preparación de oferta por ${postulacionActual.montoOferta.toLocaleString('es-CL')} CLP. BidCoop no puede enviarla a Mercado Público — cuando la hayas postulado de verdad en el portal oficial, confírmalo aquí.
                      </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl p-5 space-y-3">
                      <h3 className="text-xs font-black text-slate-900 dark:text-white">Preparar en el Portal</h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        Copia el código de este proceso y ábrelo en Mercado Público para postular. Si tienes instalada la extensión de BidCoop, ella traerá los datos de esta cotización directamente en el formulario oficial — el envío siempre lo confirmas tú, ahí mismo.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard?.writeText(selectedOpportunity.codigo || '').catch(() => {});
                          window.open(getFichaUrl(selectedOpportunity), '_blank', 'noopener,noreferrer');
                          setCodigoCopiadoParaExtension(true);
                          setTimeout(() => setCodigoCopiadoParaExtension(false), 3000);
                        }}
                        className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-xl shadow-sm transition cursor-pointer"
                      >
                        {codigoCopiadoParaExtension ? '✓ Código copiado — abriendo ficha oficial…' : `Copiar Código (${selectedOpportunity.codigo}) y Abrir Ficha Oficial`}
                      </button>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-2xl p-5 space-y-4">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={confirmacionMarcada}
                          onChange={(e) => setConfirmacionMarcada(e.target.checked)}
                          className="mt-0.5 w-4 h-4 accent-emerald-600"
                        />
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                          Confirmo que esta postulación fue enviada realmente en el portal oficial de Mercado Público (fuera de BidCoop), a nombre de {currentUser.nombre || currentUser.email}.
                        </span>
                      </label>
                      <button
                        type="button"
                        disabled={!confirmacionMarcada}
                        onClick={() => {
                          onConfirmarEnvio(postulacionActual.id);
                          setConfirmacionMarcada(false);
                        }}
                        className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 disabled:cursor-not-allowed dark:disabled:bg-slate-700 text-white font-black text-xs rounded-xl shadow-lg shadow-emerald-500/20 transition cursor-pointer"
                      >
                        Confirmar Envío Real
                      </button>
                    </div>
                  </div>
                );
              }

              return (
              <form onSubmit={handlePostulationSubmit} className="space-y-6">
                <div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">Preparar Formulario de Oferta</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Complete los valores unitarios ofertados para cada producto requerido.</p>
                </div>

                {/* SIMULATOR TOGGLE BUTTON */}
                <div className="p-4 rounded-xl border border-blue-200/50 dark:border-blue-900/40 bg-gradient-to-r from-blue-50/50 to-indigo-50/30 dark:from-blue-950/10 dark:to-indigo-950/5 flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <span className="text-[9px] uppercase font-black text-blue-600 dark:text-blue-400 block">Herramienta B2B</span>
                    <strong className="text-slate-900 dark:text-white block font-black">Simulador de Margen y Oferta</strong>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-normal">
                      Calcula precios de venta simulando costos de compra, fletes y tu margen objetivo.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowSimulator(!showSimulator)}
                    className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs transition cursor-pointer shadow-md shadow-blue-550/10 whitespace-nowrap"
                  >
                    {showSimulator ? '✕ Cerrar Simulador' : '📊 Abrir Simulador'}
                  </button>
                </div>

                {/* THE MARGIN SIMULATOR PANEL */}
                {showSimulator && (
                  <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 space-y-4 animate-in fade-in slide-in-from-top-3 duration-200">
                    <h3 className="text-xs font-black text-slate-850 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                      <span>📊</span> Simulación de Costo y Margen por Ítem
                    </h3>
                    
                    <div className="space-y-3">
                      {selectedOpportunity.items.map((it) => {
                        const cost = simCostPrices[it.sku] ?? Math.round(it.precioUnitario * 0.55);
                        const margin = simMargins[it.sku] ?? 30;
                        // PV = cost / (1 - margin/100)
                        const pv = Math.round(cost / (1 - margin / 100));
                        const subtotal = pv * it.cantidad;

                        return (
                          <div key={it.sku} className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-850 bg-slate-50/40 dark:bg-slate-900/30 text-xs space-y-3.5">
                            <div className="flex justify-between items-start">
                              <div>
                                <span className="font-extrabold text-slate-850 dark:text-white block">{it.producto}</span>
                                <span className="text-[10px] text-slate-400 mt-0.5 block">Requeridos: {it.cantidad} • SKU: {it.sku}</span>
                              </div>
                              <div className="text-right shrink-0">
                                <span className="text-[9px] uppercase font-black text-slate-400">Total Simulado</span>
                                <strong className="block text-xs font-black text-blue-600 dark:text-blue-400">
                                  ${subtotal.toLocaleString('es-CL')}
                                </strong>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
                              {/* Cost Input */}
                              <div>
                                <label className="text-[9px] uppercase font-black text-slate-400 block mb-0.5">Costo Mayorista Unitario</label>
                                <div className="relative">
                                  <span className="absolute left-2.5 top-1.5 text-slate-400 text-[10px] font-black">$</span>
                                  <input
                                    type="number"
                                    value={cost}
                                    onChange={(e) => {
                                      const val = parseFloat(e.target.value) || 0;
                                      setSimCostPrices(prev => ({ ...prev, [it.sku]: val }));
                                    }}
                                    className="w-full text-xs font-black pl-6 pr-2.5 py-1 bg-white dark:bg-slate-850 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-750 rounded-lg outline-none focus:border-blue-500"
                                  />
                                </div>
                              </div>

                              {/* Margin Range Slider */}
                              <div className="col-span-1 sm:col-span-2 space-y-1">
                                <div className="flex justify-between text-[9px] font-black uppercase text-slate-400">
                                  <span>Margen Objetivo</span>
                                  <span className="text-blue-600 dark:text-blue-400">{margin}%</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <input
                                    type="range"
                                    min="0"
                                    max="85"
                                    value={margin}
                                    onChange={(e) => {
                                      const val = parseInt(e.target.value) || 0;
                                      setSimMargins(prev => ({ ...prev, [it.sku]: val }));
                                    }}
                                    className="flex-1 h-1 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Estimated Profit info badge */}
                            <div className="flex justify-between items-center text-[10px] text-slate-550 dark:text-slate-400 pt-1 border-t border-slate-100/50 dark:border-slate-800/40">
                              <span>Precio Venta Simulado: <strong className="font-extrabold text-slate-800 dark:text-slate-200">${pv.toLocaleString('es-CL')}</strong></span>
                              <span className="text-green-600 dark:text-green-400 font-extrabold">Ganancia Est. Neto: +${((pv - cost) * it.cantidad).toLocaleString('es-CL')}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Logistics and Totals inside simulator */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        {/* Shipping cost */}
                        <div className="flex items-center gap-2">
                          <label className="text-[10px] uppercase font-black text-slate-400 whitespace-nowrap">Flete / Logística:</label>
                          <div className="relative w-28">
                            <span className="absolute left-2.5 top-1 text-slate-400 text-[10px] font-black">$</span>
                            <input
                              type="number"
                              value={simFlete}
                              onChange={(e) => setSimFlete(parseFloat(e.target.value) || 0)}
                              className="w-full text-[11px] font-black pl-5 pr-2 py-0.5 bg-slate-50 dark:bg-slate-850 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:border-blue-500"
                            />
                          </div>
                        </div>

                        {/* Combined simulated sums */}
                        {(() => {
                          const netSum = selectedOpportunity.items.reduce((sum, it) => {
                            const cost = simCostPrices[it.sku] ?? Math.round(it.precioUnitario * 0.55);
                            const margin = simMargins[it.sku] ?? 30;
                            const pv = Math.round(cost / (1 - margin / 100));
                            return sum + (pv * it.cantidad);
                          }, 0);
                          const totalNet = netSum + simFlete;
                          const iva = Math.round(totalNet * 0.19);
                          const brute = totalNet + iva;
                          
                          // Check limits (Compra Ágil limit is 30 UTM = $1,920,000 CLP net approx)
                          const limitUtm = 1920000;
                          const isOverLimit = selectedOpportunity.modalidad === 'Compra Ágil' && totalNet > limitUtm;

                          return (
                            <div className="text-right space-y-1">
                              <div className="text-[10px] text-slate-500 dark:text-slate-400">
                                Subtotal Neto + Flete: <strong className="font-extrabold text-slate-800 dark:text-slate-200">${totalNet.toLocaleString('es-CL')} CLP</strong>
                              </div>
                              <div className="text-[10px] text-slate-500 dark:text-slate-400">
                                IVA (19%): <strong className="font-extrabold text-slate-800 dark:text-slate-200">${iva.toLocaleString('es-CL')} CLP</strong>
                              </div>
                              <div className="text-xs font-black text-slate-900 dark:text-white">
                                Total Bruto Simulado: <span className="text-sm font-black text-indigo-600 dark:text-indigo-400">${brute.toLocaleString('es-CL')} CLP</span>
                              </div>

                              {isOverLimit && (
                                <div className="mt-2 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[10px] font-black text-amber-700 dark:text-amber-450 text-left leading-normal flex gap-1.5 items-start">
                                  <span>⚠️</span>
                                  <span>Alerta Legal: El total neto simulado (${totalNet.toLocaleString('es-CL')} CLP) supera el límite de 30 UTM ($1.92M) establecido para Compras Ágiles en ChileCompra.</span>
                                </div>
                              )}
                            </div>
                          );
                        })()}
                      </div>

                      {/* Action buttons to apply simulator values */}
                      <button
                        type="button"
                        onClick={() => {
                          const appliedPrices: Record<string, number> = {};
                          selectedOpportunity.items.forEach(it => {
                            const cost = simCostPrices[it.sku] ?? Math.round(it.precioUnitario * 0.55);
                            const margin = simMargins[it.sku] ?? 30;
                            appliedPrices[it.sku] = Math.round(cost / (1 - margin / 100));
                          });
                          setOfferPrices(appliedPrices);
                          setShowSimulator(false);
                          alert('¡Precios del simulador aplicados al formulario con éxito!');
                        }}
                        className="w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-xs rounded-xl shadow-md transition cursor-pointer"
                      >
                        ⚡ Aplicar Valores Simulados al Formulario de Postulación
                      </button>
                    </div>
                  </div>
                )}

                {/* Items pricing input */}
                <div className="space-y-3">
                  <h4 className="text-[10px] uppercase font-black text-slate-400 block mb-1">Detalle de Costos Netos</h4>
                  {selectedOpportunity.items.map((it) => {
                    const price = offerPrices[it.sku] ?? it.precioUnitario;
                    return (
                      <div key={it.sku} className="p-4 rounded-xl border border-slate-150 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
                        <div className="flex-1">
                          <span className="font-extrabold text-slate-900 dark:text-white block">{it.producto}</span>
                          <span className="text-[10px] text-slate-400 block mt-0.5">Requeridos: {it.cantidad} • SKU: {it.sku}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-right shrink-0">
                            <span className="text-[9px] uppercase font-black text-slate-400 block">Unitario Ofertado</span>
                            <input
                              type="number"
                              value={price}
                              onChange={(e) => {
                                const val = parseFloat(e.target.value) || 0;
                                setOfferPrices(prev => ({ ...prev, [it.sku]: val }));
                              }}
                              className="w-24 text-xs font-black p-1 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded text-right outline-none focus:border-blue-500"
                            />
                          </div>
                          <div className="w-24 text-right">
                            <span className="text-[9px] uppercase font-black text-slate-400 block">Subtotal Neto</span>
                            <strong className="font-black text-slate-900 dark:text-white">
                              ${(price * it.cantidad).toLocaleString('es-CL')}
                            </strong>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Total box */}
                <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 flex justify-between items-center text-xs">
                  <div>
                    <h4 className="font-extrabold text-blue-950 dark:text-blue-300">Total Neto Ofertado</h4>
                    <span className="text-[10px] text-blue-800 dark:text-blue-400 mt-0.5 block">Suma calculada de ítems</span>
                  </div>
                  <strong className="text-xl font-black text-blue-700 dark:text-blue-400">
                    ${totalPostuladoMonto.toLocaleString('es-CL')} CLP
                  </strong>
                </div>

                {/* Logistics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Encargado de Postulación</label>
                    <select
                      value={formResponsable}
                      onChange={(e) => setFormResponsable(e.target.value)}
                      className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white"
                    >
                      {!usuariosDirectorio.some(u => u.nombre === currentUser.nombre) && (
                        <option value={currentUser.nombre}>{currentUser.nombre}</option>
                      )}
                      {usuariosDirectorio.map((u) => (
                        <option key={u.id} value={u.nombre}>{u.nombre}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Adjuntar Garantía / Anexos</label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setUploadedDocs(prev => [...prev, 'Garantia_Seriedad_Santiago_Firmada.pdf']);
                          alert('Garantía cargada desde Repositorio Documental.');
                        }}
                        className="flex-1 py-2 px-3 rounded-xl border border-dashed border-slate-200 dark:border-slate-700 text-[10px] font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 transition"
                      >
                        + Cargar Garantía Digital
                      </button>
                    </div>
                  </div>
                </div>

                {uploadedDocs.length > 0 && (
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase font-black text-slate-400">Documentos Cargados</span>
                    {uploadedDocs.map((doc, idx) => (
                      <div key={idx} className="text-[10px] font-bold text-green-600 dark:text-green-400 flex items-center gap-1.5">
                        <span>✓</span> {doc}
                      </div>
                    ))}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-xl shadow-lg shadow-blue-500/20 transition cursor-pointer"
                >
                  Guardar Preparación de Oferta
                </button>
              </form>
              );
            })()}

          </div>

          {/* COLUMN 3: PANEL LATERAL DERECHO CON ACCIONES Y METADATA CLAVE */}
          <div className="w-full lg:w-72 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-800 bg-slate-50/20 dark:bg-slate-900/10 p-5 flex flex-col justify-between shrink-0">
            <div className="space-y-6">
              
              {/* STATUS CARD */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-850 text-xs">
                <span className="text-[10px] uppercase font-black text-slate-400 block mb-1">Estado de Oportunidad</span>
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider inline-block ${
                  selectedOpportunity.estado === 'Publicada' ? 'bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400' :
                  selectedOpportunity.estado === 'Cerrada' ? 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-450' :
                  selectedOpportunity.estado === 'Proveedor seleccionado' ? 'bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400' :
                  selectedOpportunity.estado === 'Cancelada' ? 'bg-red-100 text-red-700 dark:bg-red-950/30 dark:text-red-400' :
                  selectedOpportunity.estado === 'Adjudicada' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-400' :
                  selectedOpportunity.estado === 'Desierta' ? 'bg-purple-100 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400' :
                  selectedOpportunity.estado === 'Vencida' ? 'bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-400' :
                  'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400'
                }`}>
                  {selectedOpportunity.estado}
                </span>
                <span className="text-[9px] text-slate-400 block mt-2 font-bold">
                  {selectedOpportunity.estado === 'Publicada' ? 'Recepción de ofertas disponible' :
                   selectedOpportunity.estado === 'Proveedor seleccionado' ? 'Proveedor asignado, en espera de orden de compra' :
                   selectedOpportunity.estado === 'Cancelada' ? 'Proceso cancelado por el comprador' :
                   selectedOpportunity.estado === 'Adjudicada' ? 'Proceso finalizado y contratado' :
                   selectedOpportunity.estado === 'Desierta' ? 'Sin ofertas válidas presentadas' :
                   selectedOpportunity.estado === 'Vencida' ? 'Cierre pasado — sin actualización oficial de resultado aún' :
                   'Recepción de ofertas finalizada'}
                </span>
              </div>

              {/* QUICK ACTIONS */}
              <div className="space-y-2">
                <button
                  onClick={() => onToggleFollow(selectedOpportunity.id)}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 border ${
                    followedOps[selectedOpportunity.id]
                      ? 'bg-amber-500/15 border-amber-400 text-amber-500'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-750'
                  }`}
                >
                  <svg className="w-4 h-4" fill={followedOps[selectedOpportunity.id] ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.246.577 1.882l-3.978 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.978-2.89a1 1 0 00-1.176 0l-3.978 2.89c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.978-2.89c-.783-.636-.382-1.882.577-1.882h4.906a1 1 0 00.95-.69l1.519-4.674z" />
                  </svg>
                  {followedOps[selectedOpportunity.id] ? 'Seguida' : 'Seguir Oportunidad'}
                </button>

                <button
                  onClick={() => { setDetailGroup('postulacion'); setDetailSub('formulario'); }}
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs transition shadow-md shadow-blue-600/10 cursor-pointer"
                >
                  Iniciar Postulación
                </button>
              </div>

              {/* KEY METADATA SUMMARY */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-850 space-y-4 text-xs">
                <h4 className="text-[10px] uppercase font-black text-slate-400">Resumen de Metadata</h4>

                <div>
                  <span className="text-[9px] uppercase font-black text-slate-400 block">Comprador</span>
                  <span className="font-bold text-slate-900 dark:text-slate-100 mt-0.5 block">{selectedOpportunity.organismo}</span>
                  <span className="text-[9px] text-slate-400 block mt-0.5">{selectedOpportunity.organismoRut}</span>
                </div>

                <div>
                  <span className="text-[9px] uppercase font-black text-slate-400 block">Monto Estimado</span>
                  <strong className="text-sm font-black text-slate-900 dark:text-white block mt-0.5">
                    ${selectedOpportunity.monto.toLocaleString('es-CL')} CLP
                  </strong>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-[9px] uppercase font-black text-slate-400 block">Ubicación</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200 mt-0.5 block">{selectedOpportunity.region}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-black text-slate-400 block">Nivel Riesgo</span>
                    <span className={`font-black mt-0.5 block ${
                      selectedOpportunity.riesgo === 'Bajo' ? 'text-green-500' :
                      selectedOpportunity.riesgo === 'Medio' ? 'text-amber-500' :
                      selectedOpportunity.riesgo === 'Alto' ? 'text-red-500' :
                      'text-slate-400'
                    }`} title={selectedOpportunity.riesgo === 'Sin evaluar' ? 'Mercado Público no publica este dato' : undefined}>
                      {selectedOpportunity.riesgo}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-[9px] uppercase font-black text-slate-400 block">Fecha Límite Cierre</span>
                  <span className="font-black text-red-500 block mt-0.5">{selectedOpportunity.fechaCierre}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="text-[9px] uppercase font-black text-slate-400 block">Modalidad</span>
                    <span className={`text-[10px] font-black mt-0.5 px-1.5 py-0.5 rounded uppercase block w-fit text-center ${
                      selectedOpportunity.modalidad === 'Grandes Compras' || selectedOpportunity.esInvitacionGrandesCompras
                        ? 'bg-purple-600 text-white font-black'
                        : selectedOpportunity.modalidad === 'Compra Ágil'
                        ? 'bg-orange-50 text-orange-700 dark:bg-orange-950/30 dark:text-orange-400'
                        : selectedOpportunity.modalidad === 'Convenio Marco'
                        ? 'bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400'
                        : 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-400'
                    }`}>
                      {selectedOpportunity.modalidad}
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-black text-slate-400 block">Empresa Match</span>
                    <span className={`text-[10px] font-black mt-0.5 px-1.5 py-0.5 rounded uppercase block w-fit text-center ${
                      selectedOpportunity.empresaMatch === 'Aminorte'
                        ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400'
                        : 'bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400'

                    }`}>
                      {selectedOpportunity.empresaMatch || 'General'}
                    </span>
                  </div>
                </div>
              </div>

            </div>
            
            {/* Owner Assignation */}
            <div className="pt-4 border-t border-slate-150 dark:border-slate-800 text-xs">
              <span className="text-[10px] uppercase font-black text-slate-400 block mb-2">Responsable del Negocio</span>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-slate-850 text-slate-600 dark:text-slate-300 font-bold text-xs flex items-center justify-center">
                  {formResponsable ? formResponsable.split(' ').map(n=>n[0]).join('') : 'JC'}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-none">{formResponsable || 'Jonathan Cooper'}</h4>
                  <span className="text-[9px] text-slate-400 block mt-1">Gestión activa</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      ) : (
        /* =======================================================================
           MODE 2: SEARCH ENGINE LIST & FILTERS
           ======================================================================= */
        <div className="flex-1 flex flex-col lg:flex-row gap-6">
          
          {/* SEARCH SIDEBAR FILTERS & SAVED VIEWS */}
          <aside className="w-full lg:w-64 space-y-6 shrink-0">
            
            {/* SAVED VIEWS BLOCK */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider">Vistas Guardadas</span>
                <button
                  onClick={() => setShowSaveViewModal(true)}
                  className="text-[10px] font-black text-blue-500 hover:text-blue-600"
                  title="Guardar filtros actuales"
                >
                  + Nueva
                </button>
              </div>

              {showSaveViewModal && (
                <form onSubmit={handleSaveViewSubmit} className="mb-3 p-2 bg-slate-50 dark:bg-slate-800 rounded-xl space-y-2">
                  <input
                    type="text"
                    placeholder="Nombre de la vista"
                    value={newViewName}
                    onChange={(e) => setNewViewName(e.target.value)}
                    className="w-full text-xs p-1.5 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white outline-none"
                    required
                  />
                  <div className="flex justify-end gap-1 text-[9px]">
                    <button type="button" onClick={() => setShowSaveViewModal(false)} className="px-2 py-1 bg-slate-200 rounded text-slate-700">Canc</button>
                    <button type="submit" className="px-2 py-1 bg-blue-600 rounded text-white font-bold">Grabar</button>
                  </div>
                </form>
              )}

              <div className="flex flex-col gap-1.5 max-h-48 overflow-y-auto pr-1">
                {vistasGuardadas.map((view) => (
                  <button
                    key={view.id}
                    onClick={() => handleApplySavedView(view)}
                    className="w-full text-left text-xs font-bold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition border border-transparent hover:border-slate-100 dark:hover:border-slate-800"
                  >
                    🔍 {view.nombre}
                  </button>
                ))}
              </div>
            </div>

            {/* ADVANCED FILTER FORM */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm space-y-4">
              <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider block border-b border-slate-100 dark:border-slate-800 pb-2">Filtros Facetados</span>

              <div>
                <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Rubro de Convenio</label>
                <select
                  value={filterRubro}
                  onChange={(e) => { setFilterRubro(e.target.value); setCurrentPage(1); }}
                  className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white"
                >
                  <option value="Todos">Todos los Rubros</option>
                  <option value="Aseo e Higiene">Aseo e Higiene</option>
                  <option value="Artículos de Escritorio y Oficina">Artículos de Escritorio</option>
                  <option value="Computadores y Periféricos">Computación y Hardware</option>
                  <option value="Licencias de Software">Licencias TI</option>
                  <option value="Servicios de Reclutamiento y Selección">Reclutamiento TI</option>
                  <option value="Mobiliario de Oficina y Clínico">Mobiliario</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Región</label>
                <select
                  value={filterRegion}
                  onChange={(e) => { setFilterRegion(e.target.value); setCurrentPage(1); }}
                  className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white cursor-pointer"
                >
                  <option value="Todos">Todas las Regiones</option>
                  <option value="Metropolitana">Metropolitana</option>
                  <option value="Arica y Parinacota">Arica y Parinacota</option>
                  <option value="Tarapacá">Tarapacá</option>
                  <option value="Antofagasta">Antofagasta</option>
                  <option value="Atacama">Atacama</option>
                  <option value="Coquimbo">Coquimbo</option>
                  <option value="Valparaíso">Valparaíso</option>
                  <option value="O'Higgins">O&apos;Higgins</option>
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
                <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Riesgo Comprador</label>
                <select
                  value={filterRiesgo}
                  onChange={(e) => { setFilterRiesgo(e.target.value); setCurrentPage(1); }}
                  className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white"
                >
                  <option value="Todos">Todos los niveles</option>
                  <option value="Bajo">Riesgo Bajo (Buen pagador)</option>
                  <option value="Medio">Riesgo Medio</option>
                  <option value="Alto">Riesgo Alto (Plazos extendidos)</option>
                  <option value="Sin evaluar">Sin evaluar (sin dato oficial)</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Modalidad de Compra</label>
                <select
                  value={filterModalidad}
                  onChange={(e) => { setFilterModalidad(e.target.value); setCurrentPage(1); }}
                  className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white cursor-pointer"
                >
                  <option value="Todos">Todas las Modalidades</option>
                  <option value="Grandes Compras">🛍️ Grandes Compras (Convenio Marco)</option>
                  <option value="Compra Ágil">Compra Ágil</option>
                  <option value="Licitación">Licitaciones Públicas</option>
                  <option value="Convenio Marco">Convenio Marco</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Estado de la Compra</label>
                <select
                  value={filterEstado}
                  onChange={(e) => { setFilterEstado(e.target.value); setCurrentPage(1); }}
                  className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white cursor-pointer"
                >
                  <option value="Todos">Todos los Estados</option>
                  <option value="Publicada">Publicada</option>
                  <option value="Cerrada">Cerrada</option>
                  <option value="Proveedor seleccionado">Proveedor Seleccionado</option>
                  <option value="Cancelada">Cancelada</option>
                  <option value="Adjudicada">Adjudicada</option>
                  <option value="Desierta">Desierta</option>
                  <option value="Vencida">Vencida (cierre pasado, sin resultado oficial)</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Rango de Monto (CLP)</label>
                <div className="space-y-2">
                  <input
                    type="number"
                    placeholder="Mínimo"
                    value={filterMontoMin || ''}
                    onChange={(e) => { setFilterMontoMin(parseFloat(e.target.value) || 0); setCurrentPage(1); }}
                    className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white text-right"
                  />
                  <input
                    type="number"
                    placeholder="Máximo"
                    value={filterMontoMax || ''}
                    onChange={(e) => { setFilterMontoMax(parseFloat(e.target.value) || 1000000000); setCurrentPage(1); }}
                    className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white text-right"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  setSearchText(''); setFilterRubro('Todos'); setFilterRegion('Todos');
                  setFilterRiesgo('Todos'); setFilterMontoMin(0); setFilterMontoMax(1000000000);
                  setCurrentPage(1);
                }}
                className="w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-500 dark:text-slate-300 font-bold text-[10px] uppercase transition"
              >
                Limpiar Filtros
              </button>
            </div>
          </aside>

          {/* MAIN RESULTS CONTAINER */}
          <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
            
            {/* Header controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4 mb-4">
              <div>
                <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Oportunidades de Negocio</h3>
                <span className="text-[10px] text-slate-400">Encontradas en base a filtros activos: {filteredOportunidades.length} registros</span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">

                {/* View mode toggle */}
                <div className="flex items-center gap-0.5 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl">
                  <button
                    onClick={() => setViewMode('cards')}
                    title="Vista de tarjetas"
                    className={`p-1.5 px-2.5 rounded-lg text-[10px] font-bold flex items-center gap-1.5 transition ${
                      viewMode === 'cards'
                        ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm'
                        : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'
                    }`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" /> Tarjetas
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    title="Vista de tabla"
                    className={`p-1.5 px-2.5 rounded-lg text-[10px] font-bold flex items-center gap-1.5 transition ${
                      viewMode === 'table'
                        ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm'
                        : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'
                    }`}
                  >
                    <List className="w-3.5 h-3.5" /> Tabla
                  </button>
                </div>

                {/* Column selector — solo aplica a la vista de tabla */}
                {viewMode === 'table' && (
                <div className="relative">
                  <button
                    onClick={() => setShowColumnSelector(!showColumnSelector)}
                    className="p-2 px-3 rounded-xl border border-slate-250 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-[10px] flex items-center gap-1.5 transition"
                  >
                    🎚 Columnas
                  </button>
                  {showColumnSelector && (
                    <div className="absolute right-0 top-10 w-44 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl z-50 p-2 text-xs flex flex-col gap-1.5">
                      {Object.keys(visibleColumns).map((col) => (
                        <label key={col} className="flex items-center gap-2 px-2 py-1 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-pointer">
                          <input
                            type="checkbox"
                            checked={(visibleColumns as Record<string, boolean>)[col]}
                            onChange={(e) => setVisibleColumns(prev => ({ ...prev, [col]: e.target.checked }))}
                            className="rounded text-blue-600"
                          />
                          <span className="font-bold capitalize">{col === 'cierre' ? 'Fecha Límite' : col === 'match' ? 'Match %' : col}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
                )}

                {/* Exports */}
                <button
                  onClick={() => handleExportData('csv')}
                  className="p-2 px-3 rounded-xl border border-slate-250 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-[10px] transition cursor-pointer"
                  title="Exportar como CSV"
                >
                  📥 Exportar CSV
                </button>

                <button
                  onClick={handleExportExcel}
                  className="p-2 px-3 rounded-xl border border-emerald-250 dark:border-emerald-800/80 bg-emerald-50/10 dark:bg-emerald-950/10 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 font-bold text-[10px] transition cursor-pointer flex items-center gap-1.5"
                  title="Exportar como Excel (XLSX)"
                >
                  📊 Exportar Excel
                </button>

                <button
                  onClick={() => setShowAuditModal(true)}
                  className="p-2 px-3 rounded-xl border border-blue-250 dark:border-blue-800/80 bg-blue-50/10 dark:bg-blue-950/10 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 text-blue-600 dark:text-blue-400 font-bold text-[10px] transition cursor-pointer flex items-center gap-1.5"
                  title="Ver Auditoría y Trazabilidad de Montos para Compras Ágiles"
                >
                  📋 Auditoría Compras Ágiles
                </button>

                {onSyncRealTime && (
                  <button
                    onClick={async () => {
                      setLocalSyncing(true);
                      try {
                        await onSyncRealTime();
                      } catch (err) {
                        console.error(err);
                      } finally {
                        setLocalSyncing(false);
                      }
                    }}
                    disabled={localSyncing}
                    className={`p-2 px-3 rounded-xl font-bold text-[10px] transition flex items-center gap-1 shadow-md shadow-blue-500/10 cursor-pointer text-white ${
                      localSyncing
                        ? 'bg-blue-400 cursor-not-allowed opacity-75'
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                    title="Ver el estado real de la última sincronización (BidCoop v7.5 / scripts/sync_mercadopublico.py)"
                  >
                    {localSyncing ? '🔄 Consultando...' : '✅ Validar Sincronización'}
                  </button>
                )}
              </div>
            </div>

            {/* FREE TEXT SEARCH BAR IN CORE */}
            <div className="mb-4 flex gap-2">
              <input
                type="text"
                placeholder="Filtrar por texto o ingresar código de licitación real (ej. 3047-10-L115)..."
                value={searchText}
                onChange={(e) => handleLocalSearchChange(e.target.value)}
                className="flex-1 text-xs p-2.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white focus:border-blue-500 transition-all"
              />
              {onImportFromApi && /^\d+-\d+-[a-zA-Z\d]+$/i.test(searchText.trim()) && (
                <button
                  type="button"
                  onClick={() => onImportFromApi(searchText.trim())}
                  className="px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-600/10 transition whitespace-nowrap cursor-pointer"
                >
                  🔍 Importar de API
                </button>
              )}
            </div>

            {/* RESULTS — CARD VIEW (default) */}
            {viewMode === 'cards' && (
              <div className="flex-1">
                {paginatedOportunidades.length === 0 ? (
                  <div className="py-12 text-center text-slate-400 text-xs">
                    No se encontraron oportunidades bajo este criterio de búsqueda.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {paginatedOportunidades.map((op) => {
                      const isFollowed = !!followedOps[op.id];
                      const restante = tiempoRestante(op);
                      return (
                        <Card
                          key={op.id}
                          padded={false}
                          className="p-4 flex flex-col gap-2.5 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-md transition cursor-pointer"
                        >
                          <div onClick={() => handleOpenDetail(op)} className="flex-1 flex flex-col gap-2.5">
                            {/* Header: código + estado de verificación + seguir */}
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-center gap-1.5 flex-wrap min-w-0">
                                <span className="text-[10px] font-black text-slate-900 dark:text-white">{op.officialCode || op.codigo}</span>
                                {op.validationStatus === 'confirmado' ? (
                                  <span className="text-[8px] font-extrabold px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800" title="Verificado con API oficial de Mercado Público">
                                    ✓ MP Verificado
                                  </span>
                                ) : (
                                  <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-900" title="En cola para verificación de detalle oficial">
                                    ⚠️ En Verificación
                                  </span>
                                )}
                              </div>
                              <button
                                onClick={(e) => { e.stopPropagation(); onToggleFollow(op.id); }}
                                title={isFollowed ? 'Dejar de seguir' : 'Seguir oportunidad'}
                                className={`shrink-0 p-1 rounded-lg transition ${isFollowed ? 'text-amber-500' : 'text-slate-300 dark:text-slate-600 hover:text-amber-400'}`}
                              >
                                <Star className="w-4 h-4" fill={isFollowed ? 'currentColor' : 'none'} />
                              </button>
                            </div>

                            {/* Título + organismo */}
                            <div>
                              <h4 className="text-xs font-black text-slate-800 dark:text-slate-100 line-clamp-2 group-hover:text-brand-600 transition-colors">
                                {op.titulo}
                              </h4>
                              <div className="flex items-center gap-1 mt-1 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                                <Building2 className="w-3 h-3 shrink-0" />
                                <span className="truncate">{op.organismo}</span>
                              </div>
                            </div>

                            {/* Chips: rubro / empresa / modalidad / estado */}
                            <div className="flex gap-1.5 items-center flex-wrap">
                              <span className="text-[8px] font-black px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">{op.rubro}</span>
                              {op.empresaMatch && (
                                <span className={`text-[8px] font-black px-1.5 py-0.5 rounded uppercase ${
                                  op.empresaMatch === 'Aminorte'
                                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400'
                                    : op.empresaMatch === 'V-MOCCS'
                                    ? 'bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400'
                                    : 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400'
                                }`}>
                                  {op.empresaMatch}
                                </span>
                              )}
                              {op.modalidad && (
                                <span className={`text-[8px] font-black px-1.5 py-0.5 rounded uppercase ${
                                  op.modalidad === 'Grandes Compras' || op.esInvitacionGrandesCompras
                                    ? 'bg-purple-600 text-white font-extrabold'
                                    : op.modalidad === 'Compra Ágil'
                                    ? 'bg-orange-50 text-orange-700 dark:bg-orange-950/30 dark:text-orange-400'
                                    : op.modalidad === 'Convenio Marco'
                                    ? 'bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400'
                                    : 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-400'
                                }`}>
                                  {op.modalidad === 'Grandes Compras' ? '🛍️ Grande Compra' : op.modalidad}
                                </span>
                              )}
                              {op.estado && (
                                <span className={`text-[8px] font-black px-1.5 py-0.5 rounded uppercase ${
                                  op.estado === 'Publicada'
                                    ? 'bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-400'
                                    : op.estado === 'Cerrada'
                                    ? 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-450'
                                    : op.estado === 'Proveedor seleccionado'
                                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400'
                                    : op.estado === 'Cancelada'
                                    ? 'bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-400'
                                    : op.estado === 'Adjudicada'
                                    ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-400'
                                    : op.estado === 'Vencida'
                                    ? 'bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-400'
                                    : 'bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-450'
                                }`}>
                                  {op.estado}
                                </span>
                              )}
                            </div>

                            {/* Monto + Match + Semáforo */}
                            <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                              <div className="min-w-0">
                                {op.amountType === 'no_informado' || op.amount === null || (!op.amount && op.monto === 0) ? (
                                  <span className="text-[10px] font-semibold italic text-slate-400 dark:text-slate-500">Monto no informado</span>
                                ) : (
                                  <span className="text-sm font-black text-slate-900 dark:text-white">
                                    ${(op.amount || op.monto).toLocaleString('es-CL')} <span className="text-[9px] text-slate-400 font-medium">{op.currency || 'CLP'}</span>
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-1.5 shrink-0">
                                <MatchBadge score={op.matchScore} />
                                <SemaforoBadge op={op} compact />
                              </div>
                            </div>

                            {/* Fecha cierre / tiempo restante */}
                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                              <Clock className="w-3 h-3 shrink-0" />
                              <span>{op.fechaCierre}</span>
                              {restante && <span className="text-brand-600 dark:text-brand-400">· cierra en {restante}</span>}
                            </div>
                          </div>

                          {/* Acciones rápidas */}
                          <div className="grid grid-cols-3 gap-1.5 pt-2.5 border-t border-slate-100 dark:border-slate-800">
                            <button
                              onClick={() => handleOpenDetail(op)}
                              className="flex items-center justify-center gap-1 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-bold text-[9px] uppercase transition"
                            >
                              <Eye className="w-3 h-3" /> Ver
                            </button>
                            <button
                              onClick={() => handleQuickAnalizar(op)}
                              className="flex items-center justify-center gap-1 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold text-[9px] uppercase transition"
                            >
                              <Sparkles className="w-3 h-3" /> Analizar
                            </button>
                            <button
                              onClick={() => handleQuickCotizar(op)}
                              className="flex items-center justify-center gap-1 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold text-[9px] uppercase transition"
                            >
                              <FileSpreadsheet className="w-3 h-3" /> Cotizar
                            </button>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* RESULTS TABLE */}
            {viewMode === 'table' && (
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    {visibleColumns.codigo && <th className="py-3 text-[9px] uppercase font-black text-slate-400">Código</th>}
                    {visibleColumns.organismo && <th className="py-3 text-[9px] uppercase font-black text-slate-400">Comprador</th>}
                    {visibleColumns.titulo && <th className="py-3 text-[9px] uppercase font-black text-slate-400">Oportunidad</th>}
                    {visibleColumns.monto && <th className="py-3 text-[9px] uppercase font-black text-slate-400 text-right">Monto</th>}
                    {visibleColumns.match && <th className="py-3 text-[9px] uppercase font-black text-slate-400 text-center">Match</th>}
                    {visibleColumns.semaforo && <th className="py-3 text-[9px] uppercase font-black text-slate-400 text-center">Semáforo</th>}
                    {visibleColumns.cierre && <th className="py-3 text-[9px] uppercase font-black text-slate-400">Fecha Límite</th>}
                    <th className="py-3 text-[9px] uppercase font-black text-slate-400 text-center">Detalle</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                  {paginatedOportunidades.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-12 text-center text-slate-400 text-xs">
                        No se encontraron oportunidades bajo este criterio de búsqueda.
                      </td>
                    </tr>
                  ) : (
                    paginatedOportunidades.map((op) => (
                      <tr
                        key={op.id}
                        className="hover:bg-slate-50/50 dark:hover:bg-slate-850/15 group cursor-pointer transition-colors duration-150"
                        onClick={() => handleOpenDetail(op)}
                      >
                        {visibleColumns.codigo && (
                          <td className="py-3.5">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] font-black text-slate-900 dark:text-white">{op.officialCode || op.codigo}</span>
                              {op.validationStatus === 'confirmado' ? (
                                <span className="text-[8px] font-extrabold px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 flex items-center gap-0.5" title="Verificado con API oficial de Mercado Público">
                                  ✓ MP Verificado
                                </span>
                              ) : (
                                <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-900" title="En cola para verificación de detalle oficial">
                                  ⚠️ En Verificación
                                </span>
                              )}
                            </div>
                            <div className="flex gap-1.5 items-center mt-1.5 flex-wrap">
                              <span className="text-[9px] font-black px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 block w-fit">{op.rubro}</span>
                              {op.empresaMatch && (
                                <span className={`text-[8px] font-black px-1.5 py-0.2 rounded uppercase ${
                                  op.empresaMatch === 'Aminorte'
                                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400'
                                    : op.empresaMatch === 'V-MOCCS'
                                    ? 'bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400'
                                    : 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400'
                                }`}>
                                  {op.empresaMatch}
                                </span>
                              )}
                              {op.modalidad && (
                                <span className={`text-[8px] font-black px-1.5 py-0.2 rounded uppercase ${
                                  op.modalidad === 'Grandes Compras' || op.esInvitacionGrandesCompras
                                    ? 'bg-purple-600 text-white font-extrabold shadow-xs'
                                    : op.modalidad === 'Compra Ágil'
                                    ? 'bg-orange-50 text-orange-700 dark:bg-orange-950/30 dark:text-orange-400'
                                    : op.modalidad === 'Convenio Marco'
                                    ? 'bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400'
                                    : 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-400'
                                }`}>
                                  {op.modalidad === 'Grandes Compras' ? '🛍️ Grande Compra' : op.modalidad}
                                </span>
                              )}
                              {op.estado && (
                                <span className={`text-[8px] font-black px-1.5 py-0.2 rounded uppercase ${
                                  op.estado === 'Publicada'
                                    ? 'bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-400'
                                    : op.estado === 'Cerrada'
                                    ? 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-450'
                                    : op.estado === 'Proveedor seleccionado'
                                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400'
                                    : op.estado === 'Cancelada'
                                    ? 'bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-400'
                                    : op.estado === 'Adjudicada'
                                    ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-400'
                                    : op.estado === 'Vencida'
                                    ? 'bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-400'
                                    : 'bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-450'
                                }`}>
                                  {op.estado}
                                </span>
                              )}
                            </div>
                          </td>
                        )}
                        {visibleColumns.organismo && (
                          <td className="py-3.5 max-w-[150px] truncate text-[11px] font-bold text-slate-600 dark:text-slate-400">
                            {op.organismo}
                          </td>
                        )}
                        {visibleColumns.titulo && (
                          <td className="py-3.5 max-w-[280px]">
                            <span className="text-xs font-black text-slate-800 dark:text-slate-200 line-clamp-1 group-hover:text-blue-500 transition-colors">
                              {op.titulo}
                            </span>
                            <span className="text-[9px] text-slate-400 block mt-0.5 line-clamp-1">{op.descripcion}</span>
                          </td>
                        )}
                        {visibleColumns.monto && (
                          <td className="py-3.5 text-right font-black text-xs text-slate-900 dark:text-white">
                            {op.amountType === 'no_informado' || op.amount === null || (!op.amount && op.monto === 0) ? (
                              <span className="text-[10px] font-semibold italic text-slate-400 dark:text-slate-500">Monto no informado</span>
                            ) : (
                              <span>${(op.amount || op.monto).toLocaleString('es-CL')} <span className="text-[9px] text-slate-400 font-medium">{op.currency || 'CLP'}</span></span>
                            )}
                          </td>
                        )}
                        {visibleColumns.match && (
                          <td className="py-3.5 text-center">
                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${getMatchScoreBadgeStyle(op.matchScore).badgeBg}`}>
                              {op.matchScore}%
                            </span>
                          </td>
                        )}
                        {visibleColumns.semaforo && (
                          <td className="py-3.5 text-center">
                            {(() => {
                              const semaforo = getSemaforoBidCoop(op);
                              return (
                                <span title={semaforo.reason} className="text-base cursor-help">
                                  {semaforo.emoji}
                                </span>
                              );
                            })()}
                          </td>
                        )}
                        {visibleColumns.cierre && (
                          <td className="py-3.5 text-[10px] font-bold text-slate-500">
                            {op.fechaCierre}
                          </td>
                        )}
                        <td className="py-3.5 text-center">
                          <button className="p-1 px-2 text-[10px] rounded-lg bg-slate-100 hover:bg-blue-600 dark:bg-slate-800 dark:hover:bg-blue-600 text-slate-600 dark:text-slate-300 hover:text-white font-extrabold transition">
                            Ver
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            )}

            {/* PAGINATION PANEL */}
            <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4 mt-4">
              <span className="text-[10px] font-bold text-slate-400">
                Mostrando {paginatedOportunidades.length} de {filteredOportunidades.length} registros
              </span>
              
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>

          </div>

        </div>
      )}

      {/* DOCUMENT PREVIEW MODAL */}
      {previewDocModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden">
            
            {/* Modal Topbar */}
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/90 dark:bg-slate-900/90">
              <div className="flex items-center gap-3">
                <span className="text-2xl">
                  {previewDocModal.doc.tipo === 'pdf' ? '📕' : previewDocModal.doc.tipo === 'xlsx' ? '📗' : '📄'}
                </span>
                <div>
                  <h3 className="text-sm font-black text-slate-900 dark:text-white truncate max-w-md">
                    {previewDocModal.doc.nombre}
                  </h3>
                  <span className="text-[11px] text-slate-400 font-bold">
                    {previewDocModal.opportunity.organismo} • Código: {previewDocModal.opportunity.codigo} • Modalidad: {previewDocModal.opportunity.modalidad}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDownloadDoc(previewDocModal.doc, previewDocModal.opportunity)}
                  className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black flex items-center gap-1.5 transition shadow-sm cursor-pointer"
                >
                  <span>Descargar</span> ⬇️
                </button>
                <button
                  onClick={() => setPreviewDocModal(null)}
                  className="p-1.5 px-3 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-300 font-black text-sm transition cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Document Sheet Viewer */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-100 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100">
              <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">

                {/* Honest Header — BidCoop, not government */}
                <div className="flex justify-between items-start border-b border-slate-200 dark:border-slate-800 pb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-black text-blue-600 dark:text-blue-400 block">
                      BIDCOOP • RESUMEN DE TRABAJO INTERNO
                    </span>
                    <h2 className="text-sm sm:text-base font-black text-slate-900 dark:text-white mt-1">
                      {previewDocModal.opportunity.organismo.toUpperCase()}
                    </h2>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono font-bold px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 block">
                      ID: {previewDocModal.opportunity.codigo}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-1">
                      Publicación: {previewDocModal.opportunity.fechaPublicacion}
                    </span>
                  </div>
                </div>

                {/* Document Title Banner */}
                <div className="text-center py-3 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-900/50">
                  <h1 className="text-sm sm:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">
                    {previewDocModal.doc.nombre}
                  </h1>
                  <span className="text-[11px] text-amber-700 dark:text-amber-400 block mt-1 font-black">
                    ⚠ No es un documento oficial — verifica siempre en Mercado Público
                  </span>
                </div>

                {/* Summary Metadata */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-blue-50/50 dark:bg-blue-950/20 rounded-xl border border-blue-100 dark:border-blue-900/30 text-xs">
                  <div>
                    <span className="text-slate-400 text-[10px] font-black uppercase block">Modalidad</span>
                    <span className="font-bold text-slate-900 dark:text-white">{previewDocModal.opportunity.modalidad}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] font-black uppercase block">Monto Estimado</span>
                    <span className="font-black text-emerald-600 dark:text-emerald-400">
                      {previewDocModal.opportunity.monto > 0 ? `$${previewDocModal.opportunity.monto.toLocaleString('es-CL')} CLP` : 'No informado'}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] font-black uppercase block">Fecha Cierre</span>
                    <span className="font-bold text-slate-900 dark:text-white">{previewDocModal.opportunity.fechaCierre}</span>
                  </div>
                </div>

                {/* Section 1: Description */}
                <div className="space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
                    1. Objeto de la Contratación
                  </h3>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                    <p className="italic">
                      &quot;{previewDocModal.opportunity.descripcion}&quot;
                    </p>
                  </div>
                </div>

                {/* Section 2: Items Table Detail */}
                <div className="space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
                    2. Detalle de Ítems Requeridos
                  </h3>

                  <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-black">
                        <tr>
                          <th className="p-2.5">ID / SKU</th>
                          <th className="p-2.5">Artículo / Producto Solicitado</th>
                          <th className="p-2.5 text-center">Cant.</th>
                          <th className="p-2.5 text-right">Unitario Ref.</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {previewDocModal.opportunity.items.map((it, idx) => (
                          <tr key={idx}>
                            <td className="p-2.5 font-mono text-[10px] text-slate-500 font-bold">{it.sku}</td>
                            <td className="p-2.5">
                              <span className="font-black text-slate-900 dark:text-white block">{it.producto}</span>
                              {it.especificacionTecnica && (
                                <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5 leading-normal">
                                  {it.especificacionTecnica}
                                </span>
                              )}
                            </td>
                            <td className="p-2.5 text-center font-black text-slate-800 dark:text-slate-200">
                              {it.cantidad} {it.unidadMedida || 'un'}
                            </td>
                            <td className="p-2.5 text-right font-black text-slate-900 dark:text-white">
                              {it.precioUnitario ? `$${it.precioUnitario.toLocaleString('es-CL')}` : 'No informado'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Footer — honest disclaimer, link to real official ficha */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-1.5 text-[10px] text-slate-400">
                  <span>Resumen generado por BidCoop a partir de los datos sincronizados de Mercado Público. No reemplaza las bases oficiales.</span>
                  <a
                    href={getFichaUrl(previewDocModal.opportunity)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-black text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Ver ficha oficial en Mercado Público →
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* OFFICIAL B2G QUOTE GENERATOR MODAL */}
      {showQuoteModal && selectedOpportunity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden">
            
            {/* Modal Header Bar */}
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/90 dark:bg-slate-900/90">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📄</span>
                <div>
                  <h3 className="text-sm font-black text-slate-900 dark:text-white">
                    Generador de Cotización Formal B2G — Mercado Público
                  </h3>
                  <span className="text-[11px] text-slate-400 font-bold">
                    Proceso ID: {selectedOpportunity.codigo} • Organismo: {selectedOpportunity.organismo}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Company Dropdown Select */}
                <div className="relative">
                  <select
                    value={quoteCompany}
                    onChange={(e) => setQuoteCompany(e.target.value === 'V-MOCCS' ? 'V-MOCCS' : 'Aminorte')}
                    className="appearance-none bg-slate-900 text-white font-extrabold text-xs pl-3.5 pr-8 py-1.5 rounded-xl border border-slate-700 hover:border-sky-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
                  >
                    <option value="Aminorte">📄 Aminorte SpA</option>
                    <option value="V-MOCCS">✏️ V-MOCCS SpA</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-sky-400 text-xs">
                    ▼
                  </div>
                </div>

                <button
                  onClick={() => window.print()}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-black flex items-center gap-1.5 transition shadow-sm cursor-pointer"
                >
                  <span>Imprimir / PDF</span> 🖨️
                </button>
                <button
                  onClick={() => setShowQuoteModal(false)}
                  className="p-1.5 px-3 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 font-black text-sm transition cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Printable Document Preview Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-100 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100">
              <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-xl space-y-6 text-slate-900 font-sans">
                
                {/* Company Header — datos reales desde utils/empresas.ts, nunca inventados */}
                <div className="flex justify-between items-start border-b-2 border-slate-900 pb-6">
                  <div>
                    <h1 className="text-xl font-black tracking-tight text-blue-900">
                      {EMPRESAS[quoteCompany].nombreCompleto}
                    </h1>
                    <p className="text-xs font-bold text-slate-600 mt-0.5">
                      {EMPRESAS[quoteCompany].rubros.join(' • ')}
                    </p>
                    <div className="text-[11px] text-slate-500 mt-2 space-y-0.5">
                      <p>RUT: {EMPRESAS[quoteCompany].rut}</p>
                      <p>Contacto Comercial: {EMPRESAS[quoteCompany].emailContacto}</p>
                    </div>
                  </div>

                  <div className="text-right border-l-2 border-slate-200 pl-6">
                    <span className="text-xs font-mono font-black text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200 block">
                      COTIZACIÓN N° COT-2026-{selectedOpportunity.codigo.replace(/[^0-9]/g, '').slice(-6) || '99201'}
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-2 font-bold">
                      Fecha: {new Date().toLocaleDateString('es-CL')}
                    </span>
                    <span className="text-[11px] text-emerald-600 block font-black mt-0.5">
                      Validez: 30 Días Corridos
                    </span>
                  </div>
                </div>

                {/* Recipient Details */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                  <h3 className="font-black text-slate-900 uppercase tracking-wider text-[11px] border-b border-slate-200 pb-1">
                    DATOS DEL COMPRADOR Y PROCESO MERCADO PÚBLICO
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-slate-700">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-black block">Organismo Demandante</span>
                      <strong className="text-slate-900 font-bold">{selectedOpportunity.organismo}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-black block">RUT Organismo</span>
                      <strong className="text-slate-900 font-bold">{selectedOpportunity.organismoRut}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-black block">Código de Proceso MP</span>
                      <strong className="text-blue-700 font-mono font-bold">{selectedOpportunity.codigo}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-black block">Modalidad de Compra</span>
                      <strong className="text-slate-900 font-bold">{selectedOpportunity.modalidad}</strong>
                    </div>
                  </div>
                </div>

                {/* Quote Table */}
                <div className="space-y-2">
                  <h3 className="font-black text-slate-900 uppercase tracking-wider text-xs border-b border-slate-200 pb-1">
                    DETALLE DE PRODUCTOS Y VALORES OFERTADOS
                  </h3>

                  <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-slate-100 text-slate-700 font-black border-b border-slate-200">
                      <tr>
                        <th className="p-3">SKU / Requerimiento</th>
                        <th className="p-3 text-center">Cant.</th>
                        <th className="p-3 text-right">P. Unitario Neto</th>
                        <th className="p-3 text-right">Total Neto</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {selectedOpportunity.items.map((it, idx) => {
                        const unitPrice = offerPrices[it.sku] || it.precioUnitario;
                        const netSubtotal = Math.round((unitPrice * it.cantidad) / 1.19);
                        return (
                          <tr key={idx}>
                            <td className="p-3">
                              <span className="font-black text-slate-900 block">{it.producto}</span>
                              {it.especificacionTecnica && (
                                <span className="text-[11px] text-slate-500 block mt-0.5">{it.especificacionTecnica}</span>
                              )}
                              <span className="text-[9px] font-mono text-slate-400 block mt-1">SKU: {it.sku}</span>
                            </td>
                            <td className="p-3 text-center font-bold">{it.cantidad} {it.unidadMedida || 'un'}</td>
                            <td className="p-3 text-right font-bold">${Math.round(unitPrice / 1.19).toLocaleString('es-CL')} CLP</td>
                            <td className="p-3 text-right font-black">${netSubtotal.toLocaleString('es-CL')} CLP</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Totals Summary */}
                <div className="flex justify-end pt-2">
                  <div className="w-64 space-y-2 text-xs border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <div className="flex justify-between text-slate-600">
                      <span>Subtotal Neto:</span>
                      <strong className="font-bold">
                        ${Math.round((totalPostuladoMonto || selectedOpportunity.monto) / 1.19).toLocaleString('es-CL')} CLP
                      </strong>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>IVA (19%):</span>
                      <strong className="font-bold">
                        ${((totalPostuladoMonto || selectedOpportunity.monto) - Math.round((totalPostuladoMonto || selectedOpportunity.monto) / 1.19)).toLocaleString('es-CL')} CLP
                      </strong>
                    </div>
                    <div className="flex justify-between border-t border-slate-300 pt-2 text-sm font-black text-slate-900">
                      <span>TOTAL FINAL CLP:</span>
                      <strong className="text-blue-700">
                        ${(totalPostuladoMonto || selectedOpportunity.monto).toLocaleString('es-CL')} CLP
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Conditions */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-[11px] space-y-1.5 text-slate-700">
                  <h4 className="font-black text-slate-900 uppercase">CLÁUSULAS COMERCIALES Y DE DESPACHO</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Plazo de Entrega:</strong> Máximo 3 a 5 días hábiles contados desde la recepción conforme de la Orden de Compra.</li>
                    <li><strong>Lugar de Despacho:</strong> Dependencias del organismo en la Región de {selectedOpportunity.region}.</li>
                    <li><strong>Condición de Pago Propuesta:</strong> 30 días vista factura, sujeto a lo que establezcan las bases oficiales del proceso.</li>
                    <li><strong>Garantía Comercial:</strong> 12 meses contra defectos de fábrica.</li>
                  </ul>
                </div>

                {/* Signature — sin afirmar una certificación digital ni validez ante Mercado
                    Público que este documento no tiene realmente. */}
                <div className="pt-8 flex justify-between items-end text-xs border-t border-slate-200">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">Cotización preparada por</span>
                    <span className="font-bold text-slate-800">Departamento Comercial — {EMPRESAS[quoteCompany].nombreCompleto}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400">Documento de trabajo BidCoop — revisa y firma según el procedimiento oficial de tu empresa antes de presentarlo.</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* =======================================================================
          MODAL: EDITAR / AJUSTAR ÍTEMS SOLICITADOS MERCADO PÚBLICO
          ======================================================================= */}
      {showEditItemsModal && selectedOpportunity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <span>✏️</span> Editar / Ajustar Ítems Solicitados (Mercado Público)
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Modifica los artículos, cantidades o precios de la orden/licitación <strong className="text-slate-900 dark:text-white">{selectedOpportunity.codigo}</strong>.
                </p>
              </div>
              <button
                onClick={() => setShowEditItemsModal(false)}
                className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-300 transition flex items-center justify-center text-sm"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4 flex-1">
              <div className="space-y-3">
                {editableItems.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-lg text-[10px] font-black font-mono">
                        Ítem #{idx + 1}
                      </span>
                      <button
                        onClick={() => {
                          const updated = editableItems.filter((_, i) => i !== idx);
                          setEditableItems(updated);
                        }}
                        className="text-xs text-red-500 font-bold hover:underline"
                      >
                        Eliminar Ítem 🗑️
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] font-black uppercase text-slate-400 block mb-1">Nombre / Descripción del Producto</label>
                        <input
                          type="text"
                          value={item.producto}
                          onChange={(e) => {
                            const updated = [...editableItems];
                            updated[idx].producto = e.target.value;
                            setEditableItems(updated);
                          }}
                          className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-bold"
                          placeholder="Ej: Papel Fotocopia Carta 75g"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-black uppercase text-slate-400 block mb-1">SKU / ID Producto</label>
                        <input
                          type="text"
                          value={item.sku}
                          onChange={(e) => {
                            const updated = [...editableItems];
                            updated[idx].sku = e.target.value;
                            setEditableItems(updated);
                          }}
                          className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-mono"
                          placeholder="Ej: 39985469"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="text-[10px] font-black uppercase text-slate-400 block mb-1">Cantidad</label>
                        <input
                          type="number"
                          value={item.cantidad}
                          onChange={(e) => {
                            const updated = [...editableItems];
                            updated[idx].cantidad = parseInt(e.target.value) || 1;
                            setEditableItems(updated);
                          }}
                          className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-black"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-black uppercase text-slate-400 block mb-1">Precio Unitario (Bases)</label>
                        <input
                          type="number"
                          value={item.precioUnitario}
                          onChange={(e) => {
                            const updated = [...editableItems];
                            updated[idx].precioUnitario = parseInt(e.target.value) || 0;
                            setEditableItems(updated);
                          }}
                          className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-black"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-black uppercase text-slate-400 block mb-1">Val. Ref. Mercado Público</label>
                        <input
                          type="number"
                          value={item.precioMercadoReferencial || item.precioUnitario}
                          onChange={(e) => {
                            const updated = [...editableItems];
                            updated[idx].precioMercadoReferencial = parseInt(e.target.value) || 0;
                            setEditableItems(updated);
                          }}
                          className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-black text-emerald-600"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setEditableItems([
                    ...editableItems,
                    {
                      sku: `ITEM-${Date.now().toString().slice(-4)}`,
                      producto: 'Nuevo Artículo Solicitado',
                      cantidad: 1,
                      precioUnitario: 10000,
                      precioMercadoReferencial: 9000
                    }
                  ]);
                }}
                className="w-full py-3 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-500 text-slate-600 dark:text-slate-400 hover:text-blue-600 text-xs font-black transition flex items-center justify-center gap-2"
              >
                <span>➕ Agregar Nuevo Ítem</span>
              </button>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowEditItemsModal(false)}
                className="px-4 py-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  selectedOpportunity.items = editableItems;
                  selectedOpportunity.monto = editableItems.reduce((acc, it) => acc + (it.cantidad * it.precioUnitario), 0);
                  if (onUpdateOpportunityItems) {
                    onUpdateOpportunityItems(selectedOpportunity.id, editableItems);
                  }
                  setShowEditItemsModal(false);
                }}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-black shadow-lg shadow-blue-500/20 transition"
              >
                Guardar e Inyectar en Mercado Público 💾
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL AUDITORÍA MONTOS COMPRAS ÁGILES (REGLA 17) */}
      {showAuditModal && (
        <div className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-6xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            
            {/* Header */}
            <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">📊</span>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">Auditoría y Reconciliación de Montos – Compras Ágiles</h2>
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                    REGLA 17 & 18 COMPLIANT
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Cruce de trazabilidad jerárquica: Orden de Compra &gt; Adjudicación &gt; Cotización Excel &gt; Presupuesto Estimado
                </p>
              </div>
              <button
                onClick={() => setShowAuditModal(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-200 transition"
              >
                ✕
              </button>
            </div>

            {/* KPI Cards */}
            <div className="p-4 bg-slate-100/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-white dark:bg-slate-850 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-[10px] font-bold text-slate-400 block uppercase">Total Compras Ágiles</span>
                <span className="text-xl font-black text-slate-900 dark:text-white">{auditKPIs.total}</span>
                <span className="text-[10px] text-slate-500 block mt-0.5">{auditKPIs.pctValid}% con monto validado</span>
              </div>
              <div className="bg-white dark:bg-slate-850 p-3 rounded-2xl border border-emerald-200 dark:border-emerald-900/50 shadow-sm">
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 block uppercase">Con Monto Válido (&gt; $0)</span>
                <span className="text-xl font-black text-emerald-600 dark:text-emerald-400">{auditKPIs.valid}</span>
                <span className="text-[10px] text-emerald-600/80 block mt-0.5">Recuperados por cruce</span>
              </div>
              <div className="bg-white dark:bg-slate-850 p-3 rounded-2xl border border-amber-200 dark:border-amber-900/50 shadow-sm">
                <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 block uppercase">Monto No Encontrado</span>
                <span className="text-xl font-black text-amber-600 dark:text-amber-400">{auditKPIs.noFound}</span>
                <span className="text-[10px] text-amber-600/80 block mt-0.5">Sin datos en ninguna fuente</span>
              </div>
              <div className="bg-white dark:bg-slate-850 p-3 rounded-2xl border border-blue-200 dark:border-blue-900/50 shadow-sm">
                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 block uppercase">Monto Total Recuperado</span>
                <span className="text-lg font-black text-blue-600 dark:text-blue-400">${auditKPIs.sumRec.toLocaleString('es-CL')} CLP</span>
                <span className="text-[10px] text-blue-600/80 block mt-0.5">Gracias al cruce jerárquico</span>
              </div>
            </div>

            {/* Filter bar inside modal */}
            <div className="p-3 px-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-3">
              <input
                type="text"
                value={auditSearchFilter}
                onChange={(e) => setAuditSearchFilter(e.target.value)}
                placeholder="🔍 Filtrar auditoría por ID, Organismo, Proveedor, Fuente o Estado..."
                className="flex-1 px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-xs text-slate-500 font-bold whitespace-nowrap">
                Mostrando {filteredCoAuditList.length} de {coAuditList.length}
              </span>
            </div>

            {/* Diagnostic Table (Regla 17 Columns) */}
            <div className="flex-1 overflow-auto p-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-[9px] uppercase font-black text-slate-400 bg-slate-50 dark:bg-slate-950">
                    <th className="py-2.5 px-2">ID Compra Ágil</th>
                    <th className="py-2.5 px-2">Organismo</th>
                    <th className="py-2.5 px-2">Proveedor Adjudicado</th>
                    <th className="py-2.5 px-2 text-right">Original</th>
                    <th className="py-2.5 px-2 text-right">Adjudicado</th>
                    <th className="py-2.5 px-2 text-right">Monto OC</th>
                    <th className="py-2.5 px-2 text-right">Monto Final</th>
                    <th className="py-2.5 px-2">Código OC</th>
                    <th className="py-2.5 px-2">Fuente Monto</th>
                    <th className="py-2.5 px-2">Estado OC</th>
                    <th className="py-2.5 px-2 text-center">Estado Validación</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                  {filteredCoAuditList.length === 0 ? (
                    <tr>
                      <td colSpan={11} className="py-8 text-center text-slate-400 italic">
                        No se encontraron Compras Ágiles que coincidan con la búsqueda.
                      </td>
                    </tr>
                  ) : (
                    filteredCoAuditList.map((op) => {
                      const mFinal = op.monto_final !== undefined ? op.monto_final : (op.monto || 0);
                      const st = op.estado_validacion_monto || (mFinal > 0 ? 'VALIDADO' : 'MONTO_NO_ENCONTRADO');
                      const stBadges: Record<string, string> = {
                        'RECUPERADO_DESDE_OC': 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border-purple-200',
                        'RECUPERADO_DESDE_ADJUDICACION': 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-200',
                        'RECUPERADO_DESDE_COTIZACION': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200',
                        'VALIDADO': 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 border-teal-200',
                        'MONTO_NO_ENCONTRADO': 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-200'
                      };

                      return (
                        <tr key={op.id} className="hover:bg-slate-50 dark:hover:bg-slate-850/50 transition">
                          <td className="py-2.5 px-2 font-mono font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">
                            {op.codigo}
                          </td>
                          <td className="py-2.5 px-2 font-bold max-w-[140px] truncate text-slate-700 dark:text-slate-300" title={op.organismo}>
                            {op.organismo}
                          </td>
                          <td className="py-2.5 px-2 max-w-[130px] truncate text-slate-600 dark:text-slate-400" title={op.proveedorAdjudicado || 'Sin adjudicar'}>
                            {op.proveedorAdjudicado || '—'}
                          </td>
                          <td className="py-2.5 px-2 text-right font-mono text-slate-400">
                            ${(op.monto_original || 0).toLocaleString('es-CL')}
                          </td>
                          <td className="py-2.5 px-2 text-right font-mono text-slate-500">
                            {op.monto_adjudicado ? `$${op.monto_adjudicado.toLocaleString('es-CL')}` : '—'}
                          </td>
                          <td className="py-2.5 px-2 text-right font-mono text-purple-600 dark:text-purple-400">
                            {op.monto_oc ? `$${op.monto_oc.toLocaleString('es-CL')}` : '—'}
                          </td>
                          <td className="py-2.5 px-2 text-right font-mono font-black text-slate-900 dark:text-white">
                            {mFinal > 0 ? `$${mFinal.toLocaleString('es-CL')}` : <span className="text-amber-500 font-normal italic">$0</span>}
                          </td>
                          <td className="py-2.5 px-2 font-mono text-[10px] text-slate-500">
                            {op.codigoOrdenCompra || '—'}
                          </td>
                          <td className="py-2.5 px-2 text-[10px] font-bold text-slate-600 dark:text-slate-400 max-w-[120px] truncate" title={op.fuente_monto || 'No Encontrado'}>
                            {op.fuente_monto || 'No Encontrado'}
                          </td>
                          <td className="py-2.5 px-2 text-[10px] text-slate-500">
                            {op.estadoOC || '—'}
                          </td>
                          <td className="py-2.5 px-2 text-center">
                            <span className={`text-[9px] font-black px-2 py-0.5 rounded-full border ${stBadges[st] || stBadges['MONTO_NO_ENCONTRADO']}`}>
                              {st}
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">
                BidCoop v7.5 &bull; Jerarquía: OC (P1) &gt; Adjudicación (P2) &gt; Cotización Excel (P4) &gt; API (P5)
              </span>
              <button
                onClick={() => setShowAuditModal(false)}
                className="px-5 py-2 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-white dark:text-slate-900 rounded-xl text-xs font-black transition"
              >
                Cerrar Auditoría
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
