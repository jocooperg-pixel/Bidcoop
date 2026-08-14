import React, { useState, useMemo, useEffect } from 'react';
import { Oportunidad, Postulacion, OrdenCompra, Empresa, AdjudicacionDetalle } from '../types';
import { EMPRESAS } from '../utils/empresas';

interface AdjudicacionesModuleProps {
  oportunidades: Oportunidad[];
  postulaciones?: Postulacion[];
  ordenesCompra?: OrdenCompra[];
  activeCompany?: Empresa;
  selectedCodigoInitial?: string | null;
}

// RUTs reales conocidos del holding — único criterio para marcar
// "esNuestraEmpresa": nunca por coincidencia aproximada de nombre.
const RUTS_PROPIOS = new Set(Object.values(EMPRESAS).map(e => e.rut));

export default function AdjudicacionesModule({
  oportunidades,
  postulaciones = [],
  ordenesCompra = [],
  activeCompany = 'Consolidado',
  selectedCodigoInitial = null
}: AdjudicacionesModuleProps) {
  const [selectedCodigo, setSelectedCodigo] = useState<string>(selectedCodigoInitial || '');
  const [filterModalidad, setFilterModalidad] = useState<string>('Todas');

  // Deriva adjudicaciones SOLO de datos reales — nunca un competidor, monto
  // o ganador inventado. Si Mercado Público no expone quién ganó, el
  // registro se muestra igual (para no ocultar que el proceso ya cerró)
  // pero con participantes: [] y una nota honesta, en vez de rellenar con
  // nombres de empresas que no existen.
  const allAvailableAdjudicaciones = useMemo(() => {
    const map = new Map<string, AdjudicacionDetalle>();

    // 1. Oportunidades reales marcadas Adjudicada por Mercado Público
    oportunidades.forEach(op => {
      if (op.estado !== 'Adjudicada') return;
      const tieneGanadorReal = !!op.proveedorAdjudicado && op.proveedorAdjudicado.trim() !== '';
      const esNuestra = tieneGanadorReal && !!op.rutProveedor && RUTS_PROPIOS.has(op.rutProveedor);

      map.set(op.codigo, {
        id: `adj-op-${op.id}`,
        codigo: op.codigo,
        modalidad: op.modalidad,
        titulo: op.titulo,
        institucion: op.organismo,
        institucionRut: op.organismoRut || 'No disponible',
        presupuestoEstimado: op.monto,
        fechaInicioPostulaciones: op.fechaPublicacion || 'No disponible',
        fechaCierrePostulaciones: op.fechaCierre || 'No disponible',
        fechaResultado: op.fechaCierre || 'No disponible',
        direccionEntrega: 'No disponible',
        region: op.region || 'No disponible',
        plazoEntrega: 'No disponible',
        observaciones: tieneGanadorReal
          ? `Adjudicada oficialmente en Mercado Público a ${op.proveedorAdjudicado}.`
          : 'Adjudicada oficialmente en Mercado Público — el proveedor ganador no está expuesto vía API pública para este proceso.',
        postuladoPor: 'No disponible',
        empresaMatch: op.empresaMatch,
        participantes: tieneGanadorReal
          ? [{
              posicion: 1,
              nombre: op.proveedorAdjudicado as string,
              rut: op.rutProveedor || 'No disponible',
              montoNeto: null,
              montoIvaInc: op.monto > 0 ? op.monto : null,
              resultado: 'ADJUDICADO',
              esNuestraEmpresa: esNuestra
            }]
          : []
      });
    });

    // 2. Postulaciones propias reales ya resueltas (Adjudicada/Rechazada) —
    // solo nuestra empresa real, nunca un competidor inventado.
    postulaciones.forEach(p => {
      if (!p.oportunidadCodigo) return;
      if (p.estado !== 'Adjudicada' && p.estado !== 'Rechazada') return;
      if (map.has(p.oportunidadCodigo)) return; // ya cubierto por datos oficiales de Mercado Público

      const op = oportunidades.find(o => o.codigo === p.oportunidadCodigo || o.id === p.oportunidadId);
      const company = p.empresaMatch || op?.empresaMatch;
      const companyInfo = company ? EMPRESAS[company] : undefined;
      const isWinner = p.estado === 'Adjudicada';

      map.set(p.oportunidadCodigo, {
        id: `adj-post-${p.id}`,
        codigo: p.oportunidadCodigo,
        modalidad: p.modalidad || op?.modalidad || 'Compra Ágil',
        titulo: p.oportunidadTitulo || op?.titulo || `Proceso ${p.oportunidadCodigo}`,
        institucion: p.organismo || op?.organismo || 'No disponible',
        institucionRut: op?.organismoRut || 'No disponible',
        presupuestoEstimado: op?.monto || p.montoOferta,
        fechaInicioPostulaciones: op?.fechaPublicacion || 'No disponible',
        fechaCierrePostulaciones: op?.fechaCierre || 'No disponible',
        fechaResultado: p.fechaActualizacion || 'No disponible',
        direccionEntrega: 'No disponible',
        region: op?.region || 'No disponible',
        plazoEntrega: 'No disponible',
        observaciones: `Postulación propia — resultado real: ${p.estado}.${p.confirmadoPor ? ` Confirmada por ${p.confirmadoPor}.` : ''}`,
        postuladoPor: p.responsable || 'No disponible',
        empresaMatch: company,
        participantes: [{
          posicion: 1,
          nombre: companyInfo?.nombreCompleto || company || 'Nuestra empresa',
          rut: companyInfo?.rut || 'No disponible',
          montoNeto: Math.round(p.montoOferta / 1.19),
          montoIvaInc: p.montoOferta,
          resultado: isWinner ? 'ADJUDICADO' : 'No adjudicado',
          esNuestraEmpresa: true
        }]
      });
    });

    // 3. Órdenes de compra reales recibidas por Convenio Marco — recibir una
    // OC es en sí evidencia real de adjudicación a nuestra empresa; no se
    // inventa un segundo proveedor "competidor".
    ordenesCompra.forEach(oc => {
      if (!oc.codigoOC) return;
      if (map.has(oc.codigoOC)) return;

      const op = oportunidades.find(o => o.id === oc.oportunidadId || o.codigo === oc.oportunidadId);
      const company = op?.empresaMatch;
      const companyInfo = company ? EMPRESAS[company] : undefined;

      map.set(oc.codigoOC, {
        id: `adj-oc-${oc.id}`,
        codigo: oc.codigoOC,
        codigoOC: oc.codigoOC,
        modalidad: 'Orden de Compra CM',
        titulo: `Orden de Compra Convenio Marco: ${op?.titulo || oc.organismo}`,
        institucion: oc.organismo,
        institucionRut: op?.organismoRut || 'No disponible',
        presupuestoEstimado: oc.monto,
        fechaInicioPostulaciones: oc.fechaEmision,
        fechaCierrePostulaciones: oc.fechaEmision,
        fechaResultado: oc.fechaEmision,
        direccionEntrega: 'No disponible',
        region: op?.region || 'No disponible',
        plazoEntrega: 'No disponible',
        observaciones: `Orden de Compra real recibida por Convenio Marco (${oc.codigoOC}). Estado: ${oc.estado}.`,
        postuladoPor: 'No disponible',
        empresaMatch: company,
        participantes: [{
          posicion: 1,
          nombre: companyInfo?.nombreCompleto || company || 'Nuestra empresa',
          rut: companyInfo?.rut || 'No disponible',
          montoNeto: Math.round(oc.monto / 1.19),
          montoIvaInc: oc.monto,
          resultado: 'ADJUDICADO',
          esNuestraEmpresa: true
        }]
      });
    });

    return Array.from(map.values());
  }, [postulaciones, ordenesCompra, oportunidades]);

  // Filter list by modality and activeCompany context
  const filteredList = useMemo(() => {
    return allAvailableAdjudicaciones.filter(item => {
      if (filterModalidad !== 'Todas') {
        if (filterModalidad === 'Órdenes de Compra CM' && item.modalidad !== 'Orden de Compra CM') return false;
        if (filterModalidad !== 'Órdenes de Compra CM' && item.modalidad !== filterModalidad) return false;
      }
      if (activeCompany !== 'Consolidado' && item.empresaMatch && item.empresaMatch !== activeCompany) {
        return false;
      }
      return true;
    });
  }, [allAvailableAdjudicaciones, filterModalidad, activeCompany]);

  // Auto-seleccionar el primer resultado real disponible cuando cambia la
  // lista filtrada — nunca un código de ejemplo fijo.
  useEffect(() => {
    if (filteredList.length === 0) {
      if (selectedCodigo !== '') setSelectedCodigo('');
      return;
    }
    if (!filteredList.some(a => a.codigo === selectedCodigo)) {
      setSelectedCodigo(filteredList[0].codigo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredList]);

  // Current active adjudication item — null si no hay ningún resultado real
  // disponible. Nunca se fabrica un objeto sintético como fallback.
  const currentAdjudicacion = useMemo(() => {
    return allAvailableAdjudicaciones.find(a => a.codigo === selectedCodigo || a.id === selectedCodigo || a.codigoOC === selectedCodigo) || null;
  }, [allAvailableAdjudicaciones, selectedCodigo]);

  const handlePrintReport = () => {
    window.print();
  };

  const activePortalName = activeCompany === 'Consolidado' ? 'AMINORTE / V-MOCCS / BIDCOOP' : activeCompany;
  const activeDomain = activeCompany === 'Consolidado' ? 'WWW.BIDCOOP.CL' : `WWW.${activeCompany.toLowerCase()}.CL`;

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">

      {/* TOP CONTROL BAR & SUMMARY COUNTERS */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
              Seguimiento y Adjudicaciones BidCoop ({filteredList.length} Registros)
            </h1>
            <span className="bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border border-blue-300 dark:border-blue-800">
              {activeCompany === 'Consolidado' ? 'Todas las Empresas' : activeCompany}
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Visualiza los participantes, montos postulados y resultados de Compras Ágiles, Licitaciones, Grandes Compras y Órdenes de Compra por Convenio Marco.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
          {/* Export / Print */}
          <button
            onClick={handlePrintReport}
            className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs px-4 py-2.5 rounded-2xl border border-slate-300 dark:border-slate-700 flex items-center gap-2 transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            <span>Imprimir</span>
          </button>
        </div>
      </div>

      {/* FILTER TABS AND PROCESS SELECTOR */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* Modality Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
          {[
            { id: 'Todas', label: 'Todas' },
            { id: 'Compra Ágil', label: '⚡ Compras Ágiles' },
            { id: 'Licitación', label: '🏛️ Licitaciones' },
            { id: 'Grandes Compras', label: '🛍️ Grandes Compras' },
            { id: 'Órdenes de Compra CM', label: '📦 Órdenes de Compra CM' }
          ].map(mod => (
            <button
              key={mod.id}
              onClick={() => setFilterModalidad(mod.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                filterModalidad === mod.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {mod.label}
            </button>
          ))}
        </div>

        {/* Process Selector */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label className="text-xs font-bold text-slate-500 dark:text-slate-400 shrink-0">
            Seleccionar Proceso / OC:
          </label>
          <select
            value={selectedCodigo}
            onChange={(e) => setSelectedCodigo(e.target.value)}
            className="w-full sm:w-80 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-xs font-bold rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            {filteredList.map(a => (
              <option key={a.id} value={a.codigo}>
                [{a.modalidad}] {a.codigo} - {a.institucion.slice(0, 25)}...
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SEGUIMIENTO POSTULACION / OC REPORT CARD */}
      {/* ========================================================================= */}
      {!currentAdjudicacion && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center space-y-2">
          <span className="text-3xl block mb-2">📭</span>
          <p className="text-sm font-black text-slate-700 dark:text-slate-200">Sin resultados de adjudicación disponibles</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Ninguno de tus procesos tiene un resultado oficial de Mercado Público, una postulación resuelta o una Orden de Compra real registrada todavía. En cuanto exista un dato real, aparecerá aquí — nunca se muestra un ganador o competidor inventado.
          </p>
        </div>
      )}
      {currentAdjudicacion && (
      <div className="bg-white text-slate-900 rounded-3xl border-2 border-slate-200 shadow-2xl overflow-hidden print:border-none print:shadow-none print:m-0 print:p-0">

        {/* GREEN LEFT MARGIN ACCENT BAR (Matches image green bar on left) */}
        <div className="flex border-l-[12px] border-emerald-500 min-h-[700px] flex-col">

          {/* 1. TOP HEADER BANNER */}
          <div className="bg-slate-100/80 border-b border-slate-300 py-8 px-6 text-center">
            <h1 className="text-3xl font-black text-slate-900 tracking-wider uppercase font-sans">
              {currentAdjudicacion.modalidad === 'Orden de Compra CM' ? 'SEGUIMIENTO ORDEN DE COMPRA CONVENIO MARCO' : 'SEGUIMIENTO POSTULACION'}
            </h1>
            <p className="text-sm font-semibold text-slate-600 mt-1">
              {currentAdjudicacion.modalidad.toUpperCase()} {currentAdjudicacion.codigo}
            </p>
          </div>

          {/* 2. GREETING NOTIFICATION MESSAGE */}
          <div className="p-8 border-b border-slate-200 bg-white">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Buen dia estimados,
            </h3>
            <p className="text-base text-slate-700 leading-relaxed">
              {currentAdjudicacion.modalidad === 'Orden de Compra CM' ? (
                <>Se informa que la siguiente <span className="font-bold">Orden de Compra por Convenio Marco</span> enviada con fecha <span className="font-bold">{currentAdjudicacion.fechaResultado}</span>, registra el siguiente detalle oficial:</>
              ) : (
                <>Se informa que la siguiente postulacion de <span className="font-bold">{currentAdjudicacion.modalidad}</span> ha obtenido con fecha <span className="font-bold">{currentAdjudicacion.fechaResultado}</span>, el siguiente resultado:</>
              )}
            </p>
          </div>

          {/* 3. CARD: ANTECEDENTES GENERALES */}
          <div className="p-6 md:p-8 space-y-8 bg-white">
            
            <div className="bg-white border border-slate-300 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-center text-slate-900 mb-6 font-sans">
                Antecedentes Generales (<a href={`https://www.mercadopublico.cl/Procurement/Modules/RFB/DetailsAcquisition.aspx?qs=PD94lVIVFUe5Sth1FXBBAA==&IdLicitacion=${currentAdjudicacion.codigo}`} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">{currentAdjudicacion.codigo}</a>)
              </h2>

              <div className="flex flex-col md:flex-row items-start gap-6">
                
                {/* Mercado Público Logo Graphic */}
                <div className="w-32 h-36 border border-slate-300 rounded-xl p-3 flex flex-col items-center justify-center bg-slate-50 shrink-0 mx-auto md:mx-0 shadow-inner">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-sky-400 p-2 flex items-center justify-center text-white font-black text-center text-xs leading-tight shadow-md">
                    ChileCompra Mercado Público
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 mt-2 text-center">Mercado Público</span>
                </div>

                {/* Antecedentes Generales Key-Value Grid */}
                <div className="flex-1 space-y-2 text-sm text-slate-800">
                  <p>
                    <span className="font-bold text-slate-900">Institución:</span>{' '}
                    <span className="text-blue-700 font-bold underline cursor-pointer">{currentAdjudicacion.institucion}</span>{' '}
                    <span>({currentAdjudicacion.institucionRut})</span>
                  </p>
                  
                  <p>
                    <span className="font-bold text-slate-900">Presupuesto Estimado / Monto Aceptado:</span>{' '}
                    <span>${currentAdjudicacion.presupuestoEstimado.toLocaleString('es-CL')} [CLP] IVA Inc</span>
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">Inicio de Postulaciones / Emisión:</span>{' '}
                    <span>{currentAdjudicacion.fechaInicioPostulaciones}</span>
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">Cierre / Aceptación de Oferta:</span>{' '}
                    <span>{currentAdjudicacion.fechaCierrePostulaciones}</span>
                  </p>

                  <p className="leading-snug">
                    <span className="font-bold text-slate-900">Nombre del Proceso / OC:</span>{' '}
                    <span className="uppercase font-semibold">{currentAdjudicacion.titulo}</span>
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">Direccion de Entrega:</span>{' '}
                    <span className="uppercase">{currentAdjudicacion.direccionEntrega}</span>
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">Region:</span>{' '}
                    <span>{currentAdjudicacion.region}</span>
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">Plazo de Entrega:</span>{' '}
                    <span>{currentAdjudicacion.plazoEntrega}</span>
                  </p>

                  <p className="text-xs text-slate-700 leading-normal pt-1">
                    <span className="font-bold text-slate-900">Obs:</span>{' '}
                    <span>{currentAdjudicacion.observaciones}</span>
                  </p>

                  <p className="pt-2 font-bold text-slate-900">
                    Postulado / Gestionado por: <span className="font-semibold">{currentAdjudicacion.postuladoPor}</span>
                  </p>
                </div>

              </div>
            </div>

            {/* 4. CARD: PARTICIPANTES TABLE (Image 2) */}
            <div className="bg-white border border-slate-300 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-center text-slate-900 mb-6 font-sans">
                {currentAdjudicacion.modalidad === 'Orden de Compra CM' ? 'Proveedores y Asignación Convenio Marco' : 'Participantes'}
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse border border-slate-300">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-300">
                      <th className="py-3 px-4 border-r border-slate-300 w-12 text-center">#</th>
                      <th className="py-3 px-4 border-r border-slate-300">Nombre del Postulante / Proveedor CM</th>
                      <th className="py-3 px-4 border-r border-slate-300 text-right">Valor Postulado / Adjudicado</th>
                      <th className="py-3 px-4 text-center w-36">Resultado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentAdjudicacion.participantes.length === 0 && (
                      <tr>
                        <td colSpan={4} className="py-6 px-4 text-center text-slate-500 italic">
                          Mercado Público no expone el proveedor adjudicado para este proceso vía API pública.
                        </td>
                      </tr>
                    )}
                    {currentAdjudicacion.participantes.map((p) => {
                      const isWinner = p.resultado === 'ADJUDICADO';
                      return (
                        <tr 
                          key={p.posicion} 
                          className={`border-b border-slate-200 transition ${
                            p.esNuestraEmpresa 
                              ? 'bg-blue-50/80 font-medium' 
                              : p.posicion % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'
                          }`}
                        >
                          {/* Position # */}
                          <td className="py-3 px-4 border-r border-slate-300 text-center font-bold text-slate-700">
                            {p.posicion}
                          </td>

                          {/* Company Name & RUT */}
                          <td className="py-3 px-4 border-r border-slate-300">
                            <span className="font-bold text-blue-700 hover:underline cursor-pointer">
                              {p.nombre}
                            </span>{' '}
                            <span className="text-slate-600 font-medium">({p.rut})</span>
                            {p.esNuestraEmpresa && (
                              <span className="ml-2 text-[10px] font-black uppercase bg-blue-600 text-white px-2 py-0.5 rounded-full inline-block">
                                Tu Empresa
                              </span>
                            )}
                          </td>

                          {/* Postulated Amount */}
                          <td className="py-3 px-4 border-r border-slate-300 text-right">
                            <div className="font-bold text-slate-900">
                              {p.montoNeto !== null ? `$${p.montoNeto.toLocaleString('es-CL')}` : 'No disponible'}
                            </div>
                            <div className="text-xs text-slate-500">
                              {p.montoIvaInc !== null ? `($${p.montoIvaInc.toLocaleString('es-CL')} iva inc)` : ''}
                            </div>
                          </td>

                          {/* Result */}
                          <td className="py-3 px-4 text-center font-bold">
                            {isWinner ? (
                              <span className="text-emerald-600 font-extrabold uppercase tracking-wide text-base">
                                ADJUDICADO
                              </span>
                            ) : (
                              <span className="text-red-600 font-bold text-sm">
                                No adjudicado
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* 5. FOOTER NOTICE */}
          <div className="mt-auto border-t border-slate-300 bg-white p-6 text-center text-xs text-slate-600 space-y-4">
            <p className="italic">
              *Registro generado por BidCoop a partir de datos reales de Mercado Público y de tu propio seguimiento.
            </p>
            <div className="bg-slate-200 text-slate-800 font-black py-2 px-4 uppercase tracking-widest text-sm rounded-lg">
              Portal {activePortalName} 2026 - <a href="#" className="hover:underline">{activeDomain}</a>
            </div>
          </div>

        </div>

      </div>
      )}

    </div>
  );
}
