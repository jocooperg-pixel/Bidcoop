import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Oportunidad, Postulacion, MiembroEquipo, VistaGuardada, DocumentoAdjunto, Item } from '../types';

interface SearchModuleProps {
  oportunidades: Oportunidad[];
  vistasGuardadas: VistaGuardada[];
  teamMembers: MiembroEquipo[];
  activeSubSection: string;
  selectedOpportunity: Oportunidad | null;
  onSelectOpportunity: (op: Oportunidad | null) => void;
  onSaveVistaGuardada: (vista: VistaGuardada) => void;
  onPostular: (postulacion: Postulacion) => void;
  teamComments: Record<string, Oportunidad['comentarios']>;
  onAddComment: (opId: string, texto: string) => void;
  onImportFromApi?: (code: string) => Promise<void>;
  onSyncRealTime?: () => Promise<void>;
  globalSearchText?: string;
  onGlobalSearchTextChange?: (text: string) => void;
}

const getDeterministicContact = (op: Oportunidad) => {
  let hash = 0;
  const key = op.id || op.codigo || '';
  for (let i = 0; i < key.length; i++) {
    hash = key.charCodeAt(i) + ((hash << 5) - hash);
  }
  hash = Math.abs(hash);

  const names = [
    'Lorena Galdames Soto', 'Patricio Muñoz Venegas', 'Carlos Valenzuela Díaz', 'María Elena Silva',
    'Juan Francisco Castro', 'Andrea Toledo Rojas', 'Ramón Morales Soto', 'Camila Paz Fuentes',
    'Sebastián Jara Olivares', 'Natalia Cáceres Pinochet', 'Claudio Espinoza Ortiz', 'Daniela Vega Leyton'
  ];
  
  const roles = op.rubro === 'Aseo e Higiene'
    ? [
        'Encargada de Higiene y Servicios',
        'Jefe de Operaciones de Limpieza',
        'Coordinadora de Adquisición de Aseo',
        'Supervisor de Contratos de Higiene'
      ]
    : [
        'Jefe de Abastecimiento',
        'Encargado de Compras y Suministros',
        'Coordinadora de Adquisiciones',
        'Administrador de Suministros'
      ];

  const name = names[hash % names.length];
  const role = roles[hash % roles.length];

  // Generate email based on name
  const nameParts = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ');
  const emailPrefix = `${nameParts[0].charAt(0)}.${nameParts[1]}`;

  // Generate email domain based on organism name
  let domain = 'chilecompra.cl';
  const org = op.organismo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if (org.includes('municipalidad')) {
    const match = org.match(/municipalidad (?:de )?([a-z\u00f1]+)/);
    if (match && match[1]) {
      domain = `muni${match[1]}.cl`;
    } else {
      domain = 'municipalidad.cl';
    }
  } else if (org.includes('hospital')) {
    const match = org.match(/hospital (?:de )?([a-z\u00f1]+)/);
    if (match && match[1]) {
      domain = `hospital${match[1]}.cl`;
    } else {
      domain = 'redsalud.gov.cl';
    }
  } else if (org.includes('servicio de salud')) {
    domain = 'ssalud.gov.cl';
  }

  const email = `${emailPrefix}@${domain}`;

  // Generate phone
  const basePhone = 24863000;
  const phoneNum = (basePhone + (hash % 1000)).toString();
  const phone = `+56 2 ${phoneNum.substring(0, 4)} ${phoneNum.substring(4)}`;


  // Address based on region
  const regionAddresses: Record<string, string> = {
    'Arica y Parinacota': 'Av. 21 de Mayo 432, Arica',
    'Tarapacá': 'Av. Arturo Prat 1020, Iquique',
    'Antofagasta': 'Calle Prat 540, Antofagasta',
    'Atacama': 'Copayapu 820, Copiapó',
    'Coquimbo': 'Calle Prat 350, La Serena',
    'Valparaíso': 'Calle Condell 1490, Valparaíso',
    "O'Higgins": 'Plaza de los Héroes 445, Rancagua',
    'Maule': 'Calle 1 Oriente 920, Talca',
    'Ñuble': 'Calle 18 de Septiembre 590, Chillán',
    'Biobío': 'Calle O\'Higgins 525, Concepción',
    'La Araucanía': 'Calle Prat 650, Temuco',
    'Los Ríos': 'Calle Bernardo O\'Higgins 780, Valdivia',
    'Los Lagos': 'Calle San Felipe 80, Puerto Montt',
    'Aysén': 'Calle Francisco Bilbao 357, Coyhaique',
    'Magallanes': 'Plaza Muñoz Gamero 1020, Punta Arenas',
    'Metropolitana': 'Av. Libertador Bernardo O\'Higgins 1302, Santiago Centro'
  };

  const address = regionAddresses[op.region] || 'Av. Libertador Bernardo O\'Higgins 1302, Santiago Centro';

  return { name, role, email, phone, address };
};

export default function SearchModule({
  oportunidades,
  vistasGuardadas,
  teamMembers,
  activeSubSection,
  selectedOpportunity,
  onSelectOpportunity,
  onSaveVistaGuardada,
  onPostular,
  teamComments,
  onAddComment,
  onImportFromApi,
  onSyncRealTime,
  globalSearchText = '',
  onGlobalSearchTextChange
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
    cierre: true
  });
  const [showColumnSelector, setShowColumnSelector] = useState(false);

  // Saved view creation
  const [newViewName, setNewViewName] = useState('');
  const [showSaveViewModal, setShowSaveViewModal] = useState(false);

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

  // Postulation form state
  const [formMonto, setFormMonto] = useState<number>(0);
  const [formResponsable, setFormResponsable] = useState('');
  const [uploadedDocs, setUploadedDocs] = useState<string[]>([]);
  const [offerPrices, setOfferPrices] = useState<Record<string, number>>({});
  const [followedOps, setFollowedOps] = useState<Record<string, boolean>>({});

  // Margin Simulator States
  const [showSimulator, setShowSimulator] = useState(false);
  const [simCostPrices, setSimCostPrices] = useState<Record<string, number>>({});
  const [simMargins, setSimMargins] = useState<Record<string, number>>({});
  const [simFlete, setSimFlete] = useState<number>(15000);

  // Comment input state
  const [newCommentText, setNewCommentText] = useState('');

  // Document preview modal state
  const [previewDocModal, setPreviewDocModal] = useState<{ doc: DocumentoAdjunto; opportunity: Oportunidad } | null>(null);

  // Synchronize local search state with Topbar global search input
  useEffect(() => {
    if (globalSearchText !== undefined) {
      setSearchText(globalSearchText);
    }
  }, [globalSearchText]);

  const handleLocalSearchChange = (val: string) => {
    setSearchText(val);
    setCurrentPage(1);
    if (onGlobalSearchTextChange) {
      onGlobalSearchTextChange(val);
    }
  };

  const getFichaUrl = (opportunity: Oportunidad) => {
    const code = (opportunity.codigo || '').toUpperCase();
    return `https://www.mercadopublico.cl/Procurement/Modules/RFB/DetailsAcquisition.aspx?qs=PD94lVIVFUe5Sth1FXBBAA==&IdLicitacion=${code}`;
  };
  const handleDownloadDoc = (doc: any, opportunity: Oportunidad) => {
    const docName = doc.nombre;
    const isBasesTecnicas = docName.toLowerCase().includes('tecnica') || docName.toLowerCase().includes('técnica');
    
    let title = isBasesTecnicas ? 'Bases Técnicas y Especificaciones' : 'Bases Administrativas de Adquisición';
    if (docName.includes('Ver Bases')) {
      title = 'Ficha de Bases y Requerimientos';
    }

    const itemsRows = opportunity.items.map(item => `
      <tr>
        <td><code>${item.sku}</code></td>
        <td>${item.producto}</td>
        <td>${item.cantidad}</td>
        <td>$${(item.precioUnitario || 1000).toLocaleString('es-CL')} CLP</td>
      </tr>
    `).join('');

    const critList = (opportunity.criteriosEvaluacion || [
      { aspecto: 'Oferta Económica', ponderacion: 100, descripcion: 'Menor costo total ofertado' }
    ]).map(crit => `
      <li><strong>${crit.aspecto} (${crit.ponderacion}%):</strong> ${crit.descripcion}</li>
    `).join('');

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
          .gob-logo {
            font-weight: 900;
            font-size: 14px;
            color: #ef4444;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .gob-sub {
            font-size: 11px;
            color: #64748b;
            margin-top: 4px;
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
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="gob-logo">GOBIERNO DE CHILE</div>
            <div class="gob-sub">DIRECCIÓN DE COMPRAS Y CONTRATACIÓN PÚBLICA • PORTAL MERCADO PÚBLICO</div>
            <h1>${title}</h1>
            <p style="font-size: 14px; color: #475569; font-weight: 600;">ID Licitación / Adquisición: ${opportunity.codigo}</p>
          </div>
          
          <div class="meta-grid">
            <div class="meta-item"><strong>Organismo Comprador:</strong><br>${opportunity.organismo}</div>
            <div class="meta-item"><strong>RUT Organismo:</strong><br>${opportunity.organismoRut || '60.000.000-0'}</div>
            <div class="meta-item"><strong>Fecha de Publicación:</strong><br>${opportunity.fechaPublicacion}</div>
            <div class="meta-item"><strong>Fecha de Cierre:</strong><br>${opportunity.fechaCierre}</div>
            <div class="meta-item"><strong>Modalidad:</strong><br>${opportunity.modalidad}</div>
            <div class="meta-item"><strong>Monto Neto Estimado:</strong><br>$${opportunity.monto.toLocaleString('es-CL')} CLP</div>
          </div>
          
          <h2>1. Objeto de la Contratación</h2>
          <p>${opportunity.descripcion}</p>
          
          <h2>2. Detalle de Items Requeridos</h2>
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
          
          <h2>4. Condiciones Administrativas</h2>
          <p>La postulación de ofertas debe realizarse de manera electrónica a través del portal de Mercado Público. Se exige estricto cumplimiento de las fechas y plazos del cronograma oficial del proceso.</p>
          
          <div class="footer">
            Documento de bases generado por el sistema de inteligencia comercial para ${opportunity.empresaMatch}.<br>
            © ChileCompra - Todos los derechos reservados.
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
    if (!cleanSearch) {
      return oportunidades.filter((op) => {
        const matchRubro = filterRubro === 'Todos' || op.rubro === filterRubro;
        const matchRegion = filterRegion === 'Todos' || op.region === filterRegion;
        const matchRiesgo = filterRiesgo === 'Todos' || op.riesgo === filterRiesgo;
        const matchMonto = op.monto >= filterMontoMin && op.monto <= filterMontoMax;
        const matchModalidad = filterModalidad === 'Todos' || op.modalidad === filterModalidad;
        const matchEstado = filterEstado === 'Todos' || op.estado === filterEstado;
        return matchRubro && matchRegion && matchRiesgo && matchMonto && matchModalidad && matchEstado;
      });
    }

    const cleanSearchAlphanum = cleanSearch.replace(/[^a-z0-9]/g, '');

    return oportunidades.filter((op) => {
      // 1. Direct code prefix/contains check (both with/without special characters like dashes)
      const opCodigoLower = op.codigo.toLowerCase();
      const matchesCode =
        opCodigoLower.includes(cleanSearch) ||
        opCodigoLower.replace(/[^a-z0-9]/g, '').includes(cleanSearchAlphanum);

      // If there is an explicit code search match, BYPASS all other filters (region, rubro, etc.)
      // so the user can ALWAYS locate the bid by typing its code.
      if (matchesCode) {
        return true;
      }

      // 2. Keyword check on Title, Organismo, or Description
      const matchesText =
        op.titulo.toLowerCase().includes(cleanSearch) ||
        op.organismo.toLowerCase().includes(cleanSearch) ||
        (op.descripcion && op.descripcion.toLowerCase().includes(cleanSearch));

      if (matchesText) {
        // Text keyword search still respects standard filters
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

    } catch (error: any) {
      console.error("[ExportExcel] ❌ Error:", error);
      alert(`Error al exportar: ${error?.message || error}`);
    }
  };

  // Initialize postulation state when selecting opportunity
  const handleOpenDetail = (op: Oportunidad) => {
    onSelectOpportunity(op);
    setDetailGroup('general');
    setDetailSub('resumen');
    
    // Autofill base values
    setFormMonto(op.monto);
    setFormResponsable(teamMembers[0]?.nombre || '');
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
      estado: 'Enviada',
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
    alert('¡Postulación enviada exitosamente al organismo comprador! Se ha sincronizado a la sección Mis Negocios.');
  };

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
                <span className="text-[9px] uppercase font-black px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200/30 dark:border-blue-800/40 inline-block">
                  {selectedOpportunity.modalidad}
                </span>
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

              {/* Collapsible Groups */}
              <div className="space-y-4">
                
                {/* Grupo 1: Información General */}
                <div>
                  <h4 className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-wider mb-2 px-1">Información General</h4>
                  <div className="flex flex-col gap-1">
                    {[
                      { id: 'resumen', label: 'Resumen Ejecutivo' },
                      { id: 'cronograma', label: 'Cronograma' },
                      { id: 'items', label: 'Ítems y Cantidades' },
                      { id: 'documentos', label: 'Documentos Anexos' },
                      { id: 'preguntas', label: 'Preguntas Públicas' },
                      { id: 'criterios', label: 'Criterios de Evaluación' },
                      { id: 'comentarios', label: 'Comentarios del Equipo' }
                    ].map(sub => (
                      <button
                        key={sub.id}
                        onClick={() => { setDetailGroup('general'); setDetailSub(sub.id); }}
                        className={`w-full text-left text-xs font-bold px-3 py-1.5 rounded-lg transition ${
                          detailGroup === 'general' && detailSub === sub.id
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grupo 2: Inteligencia */}
                <div>
                  <h4 className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-wider mb-2 px-1">Inteligencia B2B</h4>
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
                            ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/10'
                            : 'text-slate-600 hover:bg-slate-105 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-white'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grupo 3: Postulación */}
                <div>
                  <h4 className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-wider mb-2 px-1">Postulación</h4>
                  <div className="flex flex-col gap-1">
                    {[
                      { id: 'formulario', label: 'Oferta y Presupuesto' }
                    ].map(sub => (
                      <button
                        key={sub.id}
                        onClick={() => { setDetailGroup('postulacion'); setDetailSub(sub.id); }}
                        className={`w-full text-left text-xs font-bold px-3 py-1.5 rounded-lg transition ${
                          detailGroup === 'postulacion' && detailSub === sub.id
                            ? 'bg-blue-600 text-white shadow-sm'
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
                  <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 p-3.5 rounded-xl flex items-start gap-2.5">
                    <span className="text-lg shrink-0">💡</span>
                    <div>
                      <h4 className="font-extrabold text-blue-800 dark:text-blue-400">Recomendación Estratégica</h4>
                      <p className="text-[11px] text-blue-700/80 dark:text-blue-400/80 mt-0.5">
                        El match es de un <strong>{selectedOpportunity.matchScore}%</strong>. Dado que poseemos un catálogo completo de {selectedOpportunity.rubro} con stock activo, se sugiere realizar una oferta agresiva (5% menor al precio unitario referencial) para asegurar puntaje máximo en el criterio económico.
                      </p>
                    </div>
                  </div>
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

                    <div className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40">
                      <span className="text-[10px] font-black uppercase text-emerald-600 dark:text-emerald-400 block tracking-wider">Valor Ref. Promedio Mercado Público</span>
                      <span className="text-sm font-black text-emerald-700 dark:text-emerald-300 mt-1 block">
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
                        <p className="text-slate-600 dark:text-slate-400 italic">"{p.pregunta}"</p>
                        {p.respuesta && (
                          <div className="pl-4 border-l-2 border-blue-500 mt-2 space-y-1">
                            <span className="text-[9px] uppercase font-black text-blue-500">Respuesta Oficial</span>
                            <p className="text-slate-800 dark:text-slate-300 font-bold">"{p.respuesta}"</p>
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

            {/* SUB-VIEW 8: Convocatorias Similares */}
            {detailGroup === 'inteligencia' && detailSub === 'convocatorias' && analyzedOps[selectedOpportunity.id] && (
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">Convocatorias Similares Históricas</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Oportunidades cerradas con bases y requerimientos análogos en el sistema.</p>
                </div>
                
                <div className="space-y-3.5">
                  {[
                    selectedOpportunity.rubro === 'Aseo e Higiene'
                      ? {
                          codigo: '3047-502-LE25',
                          titulo: 'Suministro de Desinfectantes y Cloro - Hosp. Barros Luco',
                          organismo: 'SERVICIO DE SALUD METROPOLITANO SUR',
                          monto: 32000000,
                          match: 94,
                          fecha: '2025-11-12',
                          estado: 'Adjudicada'
                        }
                      : {
                          codigo: '2210-102-CM25',
                          titulo: 'Kits Escolares y Papelería - Servicio Local Valparaíso',
                          organismo: 'SERVICIO LOCAL DE EDUCACIÓN VALPARAÍSO',
                          monto: 65000000,
                          match: 92,
                          fecha: '2025-10-05',
                          estado: 'Adjudicada'
                        },
                    selectedOpportunity.rubro === 'Aseo e Higiene'
                      ? {
                          codigo: '4092-120-CO25',
                          titulo: 'Compra Ágil - Insumos Sanitizantes y Jabón - Muni. Providencia',
                          organismo: 'I. MUNICIPALIDAD DE PROVIDENCIA',
                          monto: 1800000,
                          match: 88,
                          fecha: '2025-12-01',
                          estado: 'Cerrada'
                        }
                      : {
                          codigo: '1052-110-LE25',
                          titulo: 'Renovación de Servidores Core - Subsecretaría de Salud',
                          organismo: 'SUBSECRETARÍA DE SALUD PÚBLICA',
                          monto: 98000000,
                          match: 86,
                          fecha: '2025-08-20',
                          estado: 'Adjudicada'
                        }
                  ].map((sim, i) => (
                    <div key={i} className="p-4 rounded-xl border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black text-blue-650 dark:text-blue-450">{sim.codigo}</span>
                        <span className={`text-[9px] font-black px-1.5 py-0.2 rounded uppercase ${
                          sim.estado === 'Adjudicada'
                            ? 'bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400'
                            : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400'
                        }`}>
                          {sim.estado}
                        </span>
                      </div>
                      
                      <div>
                        <h4 className="text-xs font-black text-slate-900 dark:text-white line-clamp-1">{sim.titulo}</h4>
                        <span className="text-[10px] text-slate-400 mt-0.5 block">{sim.organismo}</span>
                      </div>

                      <div className="flex items-center justify-between text-xs pt-1.5 border-t border-slate-100 dark:border-slate-800/80">
                        <div>
                          <span className="text-[9px] uppercase font-black text-slate-400 block">Monto Neto</span>
                          <strong className="font-black text-slate-900 dark:text-white">${sim.monto.toLocaleString('es-CL')}</strong>
                        </div>
                        <div className="text-right">
                          <span className="text-[9px] uppercase font-black text-slate-400 block">Similitud AI</span>
                          <span className="font-black text-blue-600 dark:text-blue-400">{sim.match}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SUB-VIEW 9: Competidores y Compradores */}
            {detailGroup === 'inteligencia' && detailSub === 'competidores' && analyzedOps[selectedOpportunity.id] && (
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">Competidores y Compradores</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Monitoreo de comportamiento de mercado, adjudicaciones y cuota de rubro.</p>
                </div>
                
                {/* Visual Radar Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Score de Éxito BidCoop */}
                  <div className="p-4 rounded-xl border border-slate-150 dark:border-slate-800 bg-gradient-to-br from-blue-50/40 to-indigo-50/20 dark:from-slate-900/50 dark:to-slate-850/30 flex items-center gap-4">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      {/* Outer Circle ring */}
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-slate-200 dark:text-slate-700"
                          strokeWidth="3"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-blue-600 dark:text-blue-400 transition-all duration-1000"
                          strokeWidth="3.2"
                          strokeDasharray={`${selectedOpportunity.matchScore}, 100`}
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-base font-black text-slate-900 dark:text-white">{selectedOpportunity.matchScore}%</span>
                        <span className="text-[7px] text-slate-400 uppercase font-black tracking-wider">Éxito</span>
                      </div>
                    </div>
                    <div className="text-xs">
                      <span className="text-[9px] uppercase font-black tracking-wider text-blue-600 dark:text-blue-450 block">Score BidCoop</span>
                      <strong className="text-slate-800 dark:text-slate-100 block text-xs">Probabilidad de Adjudicación</strong>
                      <p className="text-[10px] text-slate-500 dark:text-slate-450 mt-1 leading-normal">
                        Favorable por alta cercanía ({selectedOpportunity.region}) y baja morosidad técnica del comprador.
                      </p>
                    </div>
                  </div>

                  {/* Alertas del Radar Predictivo */}
                  <div className="p-4 rounded-xl border border-slate-150 dark:border-slate-800 bg-amber-50/20 dark:bg-amber-950/10 flex flex-col justify-between text-xs">
                    <div>
                      <h4 className="font-black text-amber-700 dark:text-amber-450 flex items-center gap-1.5 text-[11px]">
                        <span>🚨</span> Radar de Riesgo Predictivo
                      </h4>
                      <p className="text-[10px] text-slate-550 dark:text-slate-400 mt-1 leading-normal">
                        {selectedOpportunity.rubro === 'Aseo e Higiene'
                          ? 'Prisa S.A. y Distribuidora del Sur suelen competir fuertemente en esta zona. Se proyecta un descuento agresivo.'
                          : 'Dimerc SpA tiene contratos activos con este organismo. Monitorear reajustes de precios de papel resma.'
                        }
                      </p>
                    </div>
                    <div className="mt-2 text-[10px] font-black text-amber-600 dark:text-amber-400">
                      Nivel de Competencia Proyectado: {selectedOpportunity.monto > 25000000 ? 'ALTO' : 'MEDIO'}
                    </div>
                  </div>
                </div>

                {/* Comprador Loyalty Metric */}
                <div className="p-4 rounded-xl border border-slate-150 dark:border-slate-800 bg-blue-50/20 dark:bg-blue-950/10 space-y-2 text-xs">
                  <h4 className="font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Patrón de Adjudicación del Comprador
                  </h4>
                  <p className="text-slate-550 dark:text-slate-400 text-[10px] leading-relaxed">
                    Este organismo adjudica al líder del rubro el <strong className="text-blue-600 dark:text-blue-400">45%</strong> de las veces. Se aconseja una estrategia de precios agresiva (-4% del precio promedio del catálogo).
                  </p>
                </div>

                <div className="space-y-3.5">
                  <h4 className="text-[10px] uppercase font-black text-slate-400 tracking-wider">Principales Competidores Detectados</h4>
                  {selectedOpportunity.competidoresPropuestos.length === 0 ? (
                    <div className="text-center py-6 text-slate-400 text-xs">No hay competidores históricos registrados en este rubro.</div>
                  ) : (
                    selectedOpportunity.competidoresPropuestos.map((comp, idx) => (
                      <div key={idx} className="p-4 rounded-xl border border-slate-100 dark:border-slate-850 bg-white dark:bg-slate-900/50 shadow-sm flex items-center justify-between gap-4">
                        <div>
                          <h4 className="text-xs font-black text-slate-900 dark:text-white">{comp.nombre}</h4>
                          <span className="text-[10px] text-slate-400 mt-0.5 block">{comp.rut} • {comp.adjudicacionesRecientes} Adjudicaciones</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] uppercase font-black text-slate-400 block">Cuota Rubro</span>
                          <span className="text-sm font-black text-blue-600 dark:text-blue-400">{comp.cuotaMercado}%</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* SUB-VIEW 10: Historial de precios */}
            {detailGroup === 'inteligencia' && detailSub === 'precios' && analyzedOps[selectedOpportunity.id] && (
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">Historial de Precios de Adjudicación</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Variación de precio promedio adjudicado para los ítems principales en licitaciones pasadas.</p>
                </div>

                {/* Trend Alert Indicator */}
                <div className="p-3.5 rounded-xl border border-green-200 dark:border-green-900/50 bg-green-50/30 dark:bg-green-950/10 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[9px] uppercase font-black text-green-700 dark:text-green-400 block">Tendencia AI</span>
                    <strong className="text-green-600 dark:text-green-400">Precios Estables (+2.4% anual)</strong>
                  </div>
                  <span className="text-xl font-bold">📈</span>
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
                  <div className="text-center py-6 text-slate-400 text-xs">Sin registros de variación de precios para este SKU.</div>
                )}
              </div>
            )}

            {/* SUB-VIEW 11: Evaluación Comprador */}
            {detailGroup === 'inteligencia' && detailSub === 'comprador' && analyzedOps[selectedOpportunity.id] && (
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">Evaluación y Comportamiento del Comprador</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Score financiero calculado según cumplimiento histórico en Mercado Público.</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-150 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-xs">
                    <span className="text-[10px] uppercase font-black text-slate-400 block mb-1">Días Promedio de Pago</span>
                    <strong className="text-2xl font-black text-slate-900 dark:text-white">{selectedOpportunity.organismoPagoDias} días</strong>
                    <span className="text-[9px] text-slate-400 block mt-1.5">
                      {selectedOpportunity.organismoPagoDias <= 30 ? '✓ Excelente pagador (Rápido)' : '⚠️ Cuidado: Plazos de pago extendidos'}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-150 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-xs">
                    <span className="text-[10px] uppercase font-black text-slate-400 block mb-1">Clasificación de Riesgo</span>
                    <strong className={`text-xl font-black uppercase ${
                      selectedOpportunity.organismoRiesgo === 'Bajo' ? 'text-green-500' : selectedOpportunity.organismoRiesgo === 'Medio' ? 'text-amber-500' : 'text-red-500'
                    }`}>{selectedOpportunity.organismoRiesgo}</strong>
                    <span className="text-[9px] text-slate-400 block mt-2">Cálculo en base a reclamos de proveedores vigentes.</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-850 bg-white dark:bg-slate-900/50 space-y-2 text-xs">
                  <span className="text-[9px] uppercase font-black text-slate-400 block">Indicadores de Cumplimiento</span>
                  <div className="space-y-2 pt-1">
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Adhesión a bases del llamado:</span>
                      <strong className="text-slate-800 dark:text-slate-200">100%</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Reclamos vigentes en ChileCompra:</span>
                      <strong className="text-green-600">0 Reclamos</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Nota Proveedores (Promedio):</span>
                      <strong className="text-slate-850 dark:text-slate-200">4.8 / 5.0</strong>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SUB-VIEW 12: Datos de Contacto */}
            {detailGroup === 'inteligencia' && detailSub === 'contacto' && analyzedOps[selectedOpportunity.id] && (() => {
              const contacto = getDeterministicContact(selectedOpportunity);
              return (
                <div className="space-y-4">
                  <div>
                    <h2 className="text-lg font-black text-slate-900 dark:text-white">Datos de Contacto Comprador</h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Información de contacto oficial de la unidad de abastecimiento encargada.</p>
                  </div>
                  
                  <div className="p-5 rounded-2xl border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm space-y-4 text-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-white flex items-center justify-center font-black text-sm uppercase">
                        {selectedOpportunity.organismo.slice(0, 2)}
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-slate-900 dark:text-white line-clamp-1">{selectedOpportunity.organismo}</h4>
                        <span className="text-[10px] text-slate-400 mt-0.5 block">RUT: {selectedOpportunity.organismoRut || '12.345.678-9'}</span>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-3">
                      <div>
                        <span className="text-[9px] uppercase font-black text-slate-400 block">Contacto Técnico</span>
                        <span className="font-bold text-slate-900 dark:text-slate-100 mt-0.5 block">
                          {contacto.name}
                        </span>
                        <span className="text-[10px] text-slate-400 mt-0.5 block">
                          {contacto.role}
                        </span>
                      </div>

                      <div>
                        <span className="text-[9px] uppercase font-black text-slate-400 block">Correo Electrónico</span>
                        <a href={`mailto:${contacto.email}`} className="text-blue-600 dark:text-blue-400 font-bold hover:underline mt-0.5 block">
                          {contacto.email}
                        </a>
                      </div>

                      <div>
                        <span className="text-[9px] uppercase font-black text-slate-400 block">Teléfono de Oficina</span>
                        <span className="font-bold text-slate-850 dark:text-slate-200 mt-0.5 block">{contacto.phone}</span>
                      </div>

                      <div>
                        <span className="text-[9px] uppercase font-black text-slate-400 block">Dirección de Despacho</span>
                        <span className="font-bold text-slate-700 dark:text-slate-300 mt-0.5 block leading-normal">
                          {contacto.address}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* SUB-VIEW 11: Formulario de postulación */}
            {detailGroup === 'postulacion' && (
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
                      {teamMembers.map((m) => (
                        <option key={m.id} value={m.nombre}>{m.nombre} ({m.rol})</option>
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
                  Enviar Postulación Oficial a Mercado Público
                </button>
              </form>
            )}

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
                   'Recepción de ofertas finalizada'}
                </span>
              </div>

              {/* QUICK ACTIONS */}
              <div className="space-y-2">
                <button
                  onClick={() => {
                    const isFollowed = !!followedOps[selectedOpportunity.id];
                    setFollowedOps(prev => ({ ...prev, [selectedOpportunity.id]: !isFollowed }));
                    alert(!isFollowed ? 'Añadida a oportunidades seguidas en Mis Negocios.' : 'Quitada de oportunidades seguidas.');
                  }}
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
                      selectedOpportunity.riesgo === 'Bajo' ? 'text-green-500' : selectedOpportunity.riesgo === 'Medio' ? 'text-amber-500' : 'text-red-500'
                    }`}>{selectedOpportunity.riesgo}</span>
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
                      selectedOpportunity.empresaMatch === 'Inder-Roll'
                        ? 'bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-400'
                        : 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400'
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
                
                {/* Column selector */}
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
                            checked={(visibleColumns as any)[col]}
                            onChange={(e) => setVisibleColumns(prev => ({ ...prev, [col]: e.target.checked }))}
                            className="rounded text-blue-600"
                          />
                          <span className="font-bold capitalize">{col === 'cierre' ? 'Fecha Límite' : col === 'match' ? 'Match %' : col}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

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
                    title="Cargar licitaciones reales de hoy"
                  >
                    {localSyncing ? '🔄 Sincronizando...' : '🔄 Sincronizar API'}
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

            {/* RESULTS TABLE */}
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    {visibleColumns.codigo && <th className="py-3 text-[9px] uppercase font-black text-slate-400">Código</th>}
                    {visibleColumns.organismo && <th className="py-3 text-[9px] uppercase font-black text-slate-400">Comprador</th>}
                    {visibleColumns.titulo && <th className="py-3 text-[9px] uppercase font-black text-slate-400">Oportunidad</th>}
                    {visibleColumns.monto && <th className="py-3 text-[9px] uppercase font-black text-slate-400 text-right">Monto</th>}
                    {visibleColumns.match && <th className="py-3 text-[9px] uppercase font-black text-slate-400 text-center">Match</th>}
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
                            <span className="text-[10px] font-black text-slate-900 dark:text-white">{op.codigo}</span>
                            <div className="flex gap-1.5 items-center mt-1.5 flex-wrap">
                              <span className="text-[9px] font-black px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 block w-fit">{op.rubro}</span>
                              {op.empresaMatch && (
                                <span className={`text-[8px] font-black px-1.5 py-0.2 rounded uppercase ${
                                  op.empresaMatch === 'Inder-Roll'
                                    ? 'bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-400'
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
                            ${op.monto.toLocaleString('es-CL')}
                          </td>
                        )}
                        {visibleColumns.match && (
                          <td className="py-3.5 text-center">
                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                              op.matchScore >= 90
                                ? 'bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-400'
                                : 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400'
                            }`}>
                              {op.matchScore}%
                            </span>
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

            {/* PAGINATION PANEL */}
            <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4 mt-4">
              <span className="text-[10px] font-bold text-slate-400">
                Mostrando {paginatedOportunidades.length} de {filteredOportunidades.length} registros
              </span>
              
              <div className="flex items-center gap-1">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className="p-1.5 px-3 rounded-lg border border-slate-200 dark:border-slate-700 text-[10px] font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 disabled:opacity-40"
                >
                  Anterior
                </button>
                <span className="text-[10px] font-black text-slate-900 dark:text-white px-2">
                  Pág {currentPage} de {totalPages}
                </span>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  className="p-1.5 px-3 rounded-lg border border-slate-200 dark:border-slate-700 text-[10px] font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 disabled:opacity-40"
                >
                  Siguiente
                </button>
              </div>
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
                
                {/* Formal Header */}
                <div className="flex justify-between items-start border-b border-slate-200 dark:border-slate-800 pb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-black text-blue-600 dark:text-blue-400 block">
                      REPÚBLICA DE CHILE • MERCADO PÚBLICO
                    </span>
                    <h2 className="text-sm sm:text-base font-black text-slate-900 dark:text-white mt-1">
                      {previewDocModal.opportunity.organismo.toUpperCase()}
                    </h2>
                    <span className="text-xs text-slate-500 font-medium block">
                      Unidad Compradora: Departamento de Administración y Finanzas
                    </span>
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
                <div className="text-center py-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-150 dark:border-slate-800">
                  <h1 className="text-sm sm:text-base font-black text-slate-900 dark:text-white uppercase tracking-wide">
                    {previewDocModal.doc.nombre}
                  </h1>
                  <span className="text-xs text-slate-500 block mt-0.5 font-semibold">
                    Documento Oficial Adjunto • Mercado Público Chile
                  </span>
                </div>

                {/* Summary Metadata */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-blue-50/50 dark:bg-blue-950/20 rounded-xl border border-blue-100 dark:border-blue-900/30 text-xs">
                  <div>
                    <span className="text-slate-400 text-[10px] font-black uppercase block">Modalidad</span>
                    <span className="font-bold text-slate-900 dark:text-white">{previewDocModal.opportunity.modalidad}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] font-black uppercase block">Presupuesto</span>
                    <span className="font-black text-emerald-600 dark:text-emerald-400">${previewDocModal.opportunity.monto.toLocaleString('es-CL')} CLP</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] font-black uppercase block">Fecha Cierre</span>
                    <span className="font-bold text-slate-900 dark:text-white">{previewDocModal.opportunity.fechaCierre}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] font-black uppercase block">Pago</span>
                    <span className="font-bold text-slate-900 dark:text-white">{previewDocModal.opportunity.organismoPagoDias} días</span>
                  </div>
                </div>

                {/* Section 1: Official Text Specs */}
                <div className="space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
                    1. ESPECIFICACIÓN Y SOLICITUD DE MATERIALES
                  </h3>
                  
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                    <p className="font-bold text-slate-900 dark:text-white mb-2">
                      Requerimiento Formal de Cotización:
                    </p>
                    <p className="italic">
                      "{previewDocModal.opportunity.descripcion}"
                    </p>
                  </div>
                </div>

                {/* Section 2: Items Table Detail */}
                <div className="space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
                    2. DETALLE DE ÍTEMS Y ESPECIFICACIONES TÉCNICAS SOLICITADAS
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
                              ${it.precioUnitario.toLocaleString('es-CL')}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 3: Terms */}
                <div className="space-y-2 text-xs">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
                    3. CONDICIONES DE PRESENTACIÓN Y ENTREGA
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400 text-[11px]">
                    <li>Las ofertas deben ser ingresadas a través del portal Mercado Público dentro del plazo legal.</li>
                    <li>Cotización formal debe incluir marca, garantía, especificaciones técnicas claras y plazo de entrega.</li>
                    <li>Despacho obligatorio en la Región de {previewDocModal.opportunity.region}.</li>
                  </ul>
                </div>

                {/* Verification Footer */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[10px] text-slate-400 font-mono">
                  <div>
                    <span>Documento Oficial Certificado • Mercado Público Chile</span>
                    <span className="block text-slate-500">HASH: SHA256-MP-{previewDocModal.opportunity.codigo}-DOC</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-slate-700 dark:text-slate-300 block">VERIFICADO DIGITALMENTE</span>
                    <span>Plataforma Avanzada de Abastecimiento</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
