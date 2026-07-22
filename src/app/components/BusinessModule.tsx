import React, { useState, useMemo } from 'react';
import { Oportunidad, Postulacion, OrdenCompra } from '../types';

// We import productCatalogRaw from catalog.ts to parse it
import { productCatalogRaw as rawData } from '../catalog';


interface BusinessModuleProps {
  activeSubSection: string;
  oportunidades: Oportunidad[];
  postulaciones: Postulacion[];
  ordenesCompra: OrdenCompra[];
  onSelectOpportunity: (op: Oportunidad) => void;
  onNavigateToTab: (module: string, subSection: string) => void;
  activeCompany?: 'Consolidado' | 'Inder-Roll' | 'Aminorte';
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
    return parsed.filter(p => p.proveedor === 'Aminorte').slice(0, 100);
  }, [activeCompany]);

  // Documents Repo State
  const [internalDocs, setInternalDocs] = useState([
    { nombre: 'Estatuto_Social_Inderquim_Firmado.pdf', categoria: 'Legal', fecha: '2026-01-10', tamanho: '4.5 MB' },
    { nombre: 'RUT_Efectivo_Inderquim.pdf', categoria: 'Tributario', fecha: '2026-02-15', tamanho: '850 KB' },
    { nombre: 'Certificado_Antecedentes_Laborales_F30_Julio.pdf', categoria: 'Laboral', fecha: '2026-07-01', tamanho: '340 KB' },
    { nombre: 'Balance_Financiero_Audita_2025.xlsx', categoria: 'Finanzas', fecha: '2026-04-20', tamanho: '1.2 MB' }
  ]);
  const [newDocFile, setNewDocFile] = useState<string>('');

  // Kanban Board Columns
  const kanbanColumns = useMemo(() => {
    // We categorize the opportunities depending on their states in memory
    const followed = oportunidades.filter(o => o.estado === 'Publicada' && o.matchScore >= 95);
    const inEvaluation = oportunidades.filter(o => o.estado === 'En Evaluación');
    const submitted = oportunidades.filter(o => o.estado === 'Postulada');
    const won = oportunidades.filter(o => o.estado === 'Adjudicada');

    return [
      { id: 'followed', label: 'Invitaciones Abiertas CM', items: followed, color: 'border-purple-500 bg-purple-500/5' },
      { id: 'inEvaluation', label: 'Cerrados (A Espera Adjudicación)', items: inEvaluation, color: 'border-amber-400 bg-amber-500/5' },
      { id: 'submitted', label: 'Postulaciones Enviadas', items: submitted, color: 'border-indigo-400 bg-indigo-500/5' },
      { id: 'won', label: 'Grandes Compras Adjudicadas', items: won, color: 'border-emerald-500 bg-emerald-500/5' }
    ];
  }, [oportunidades]);

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
          TAB 1: KANBAN BOARD
          ======================================================================= */}
      {currentSub === 'mis-negocios' && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-start">
          {kanbanColumns.map((col) => (
            <div key={col.id} className={`rounded-2xl border-t-4 p-4 shadow-sm space-y-4 border ${col.color}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">{col.label}</h3>
                <span className="text-[10px] font-black bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full">
                  {col.items.length}
                </span>
              </div>

              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                {col.items.length === 0 ? (
                  <div className="text-center py-8 text-slate-400 text-[10px] border border-dashed border-slate-200 dark:border-slate-800 rounded-xl">Sin negocios en esta etapa</div>
                ) : (
                  col.items.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => onSelectOpportunity(item)}
                      className="p-3.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 hover:border-blue-400 dark:hover:border-blue-500 rounded-xl shadow-sm cursor-pointer transition text-xs space-y-3"
                    >
                      <div>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-tight block">{item.codigo}</span>
                        <h4 className="font-extrabold text-slate-900 dark:text-slate-250 mt-1 line-clamp-2">{item.titulo}</h4>
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {item.organismo}
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-slate-50 dark:border-slate-800">
                        <span className="font-black text-slate-900 dark:text-white">
                          ${item.monto.toLocaleString('es-CL')}
                        </span>
                        <span className="text-[9px] font-black text-amber-500 bg-amber-50 dark:bg-amber-950/20 px-2 py-0.5 rounded">
                          {item.matchScore}% Match
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* =======================================================================
          TAB 2: POSTULACIONES
          ======================================================================= */}
      {currentSub === 'postulaciones' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
          <div>
            <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Historial de Ofertas Enviadas</h3>
            <p className="text-[10px] text-slate-400 mt-0.5">Listado de postulaciones oficiales vigentes ingresadas a Mercado Público.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-850">
                  <th className="py-2.5 font-black text-slate-400">Código / ID Oportunidad</th>
                  <th className="py-2.5 font-black text-slate-400">Título</th>
                  <th className="py-2.5 font-black text-slate-400">Responsable</th>
                  <th className="py-2.5 font-black text-slate-400 text-right">Monto Oferta</th>
                  <th className="py-2.5 font-black text-slate-400 text-center">Estado</th>
                  <th className="py-2.5 font-black text-slate-400 text-center">Detalles</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {postulaciones.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-slate-400">Ninguna postulación enviada aún. Utilice la búsqueda para iniciar una.</td>
                  </tr>
                ) : (
                  postulaciones.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-850/15">
                      <td className="py-3">
                        <span className="font-black text-slate-900 dark:text-white block">{p.oportunidadCodigo}</span>
                        <span className="text-[9px] text-slate-400 block mt-0.5">{p.fechaActualizacion}</span>
                      </td>
                      <td className="py-3 font-bold text-slate-700 dark:text-slate-350">{p.oportunidadTitulo}</td>
                      <td className="py-3 font-semibold text-slate-500">{p.responsable}</td>
                      <td className="py-3 text-right font-black text-slate-950 dark:text-white">
                        ${p.montoOferta.toLocaleString('es-CL')}
                      </td>
                      <td className="py-3 text-center">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                          {p.estado}
                        </span>
                      </td>
                      <td className="py-3 text-center">
                        <button
                          onClick={() => {
                            const op = oportunidades.find(o => o.id === p.oportunidadId);
                            if (op) onSelectOpportunity(op);
                          }}
                          className="px-2.5 py-1 bg-slate-100 hover:bg-blue-600 hover:text-white dark:bg-slate-800 dark:hover:bg-blue-600 rounded text-[10px] font-bold transition"
                        >
                          Inspeccionar
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
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
