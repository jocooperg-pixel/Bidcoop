'use client';
import React, { useState, useMemo, useEffect } from 'react';

interface CompradorResumen {
  id: string;
  nombre: string;
  rut: string | null;
  riesgo: string;
  riesgoMetodologia: string | null;
  contactoEmail: string | null;
  contactoTelefono: string | null;
  totalOportunidades: number;
  oportunidadesActivas: number;
  montoTotalEstimado: number;
  ultimaActividad: string | null;
}

interface OportunidadHistorial {
  codigo: string;
  tituloOficial: string;
  modalidad: string;
  estado: string;
  estadoOficialMP: string;
  montoEstimado: number | null;
  fechaPublicacion: string | null;
  fechaCierre: string | null;
  empresas: { empresa: { nombre: string } }[];
}

const RIESGO_ESTILO: Record<string, string> = {
  'Sin evaluar': 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400',
  'Bajo': 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400',
  'Medio': 'bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400',
  'Alto': 'bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400'
};

export default function BuyersModule() {
  const [compradores, setCompradores] = useState<CompradorResumen[]>([]);
  const [vistaConsolidada, setVistaConsolidada] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [detalle, setDetalle] = useState<OportunidadHistorial[] | null>(null);
  const [detalleLoading, setDetalleLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    fetch('/api/db-compradores')
      .then(res => res.json())
      .then(data => {
        if (data.error) { setError(data.error); return; }
        setCompradores(data.compradores);
        setVistaConsolidada(data.vistaConsolidada);
      })
      .catch(err => setError(String(err)))
      .finally(() => setLoading(false));
  }, []);

  const filtrados = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return compradores;
    return compradores.filter(c =>
      c.nombre.toLowerCase().includes(q) || (c.rut ?? '').toLowerCase().includes(q)
    );
  }, [compradores, search]);

  const paginados = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filtrados.slice(start, start + itemsPerPage);
  }, [filtrados, currentPage]);
  const totalPages = Math.max(1, Math.ceil(filtrados.length / itemsPerPage));

  const abrirDetalle = (id: string) => {
    setSelectedId(id);
    setDetalle(null);
    setDetalleLoading(true);
    fetch(`/api/db-compradores/${id}`)
      .then(res => res.json())
      .then(data => setDetalle(data.comprador?.oportunidades ?? []))
      .finally(() => setDetalleLoading(false));
  };

  const compradorSeleccionado = compradores.find(c => c.id === selectedId);

  if (loading) return <div className="p-8 text-sm text-slate-500 dark:text-slate-400">Cargando compradores…</div>;
  if (error) return <div className="p-8 text-sm text-red-600 dark:text-red-400">{error}</div>;

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-lg font-black text-slate-900 dark:text-white">Compradores</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {compradores.length} organismos reales detectados en Mercado Público
            {!vistaConsolidada && ' — filtrado a tus empresas asignadas'}.
            Riesgo &quot;Sin evaluar&quot; hasta tener metodología real registrada.
          </p>
        </div>
        <input
          type="text"
          placeholder="Buscar por nombre o RUT…"
          value={search}
          onChange={e => { setSearch(e.target.value); setCurrentPage(1); }}
          className="w-72 px-3 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-cyan-500/30"
        />
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 dark:bg-slate-900 text-left text-xs text-slate-500 dark:text-slate-400">
            <tr>
              <th className="px-4 py-3 font-bold">Organismo</th>
              <th className="px-4 py-3 font-bold">RUT</th>
              <th className="px-4 py-3 font-bold">Riesgo</th>
              <th className="px-4 py-3 font-bold text-right">Oportunidades</th>
              <th className="px-4 py-3 font-bold text-right">Activas</th>
              <th className="px-4 py-3 font-bold text-right">Monto estimado total</th>
            </tr>
          </thead>
          <tbody>
            {paginados.map(c => (
              <tr
                key={c.id}
                onClick={() => abrirDetalle(c.id)}
                className="border-t border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/60 cursor-pointer"
              >
                <td className="px-4 py-3 font-semibold text-slate-800 dark:text-slate-100 max-w-sm truncate">{c.nombre}</td>
                <td className="px-4 py-3 text-slate-500 dark:text-slate-400 font-mono text-xs">{c.rut ?? 'No disponible'}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${RIESGO_ESTILO[c.riesgo] ?? RIESGO_ESTILO['Sin evaluar']}`}>
                    {c.riesgo}
                  </span>
                </td>
                <td className="px-4 py-3 text-right font-mono">{c.totalOportunidades}</td>
                <td className="px-4 py-3 text-right font-mono">{c.oportunidadesActivas}</td>
                <td className="px-4 py-3 text-right font-mono">
                  {c.montoTotalEstimado > 0 ? `$${c.montoTotalEstimado.toLocaleString('es-CL')} CLP` : 'No calculable'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 text-xs">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-40 text-slate-700 dark:text-slate-300"
          >
            Anterior
          </button>
          <span className="text-slate-500 dark:text-slate-400">Página {currentPage} de {totalPages}</span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-40 text-slate-700 dark:text-slate-300"
          >
            Siguiente
          </button>
        </div>
      )}

      {compradorSeleccionado && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-end z-50" onClick={() => setSelectedId(null)}>
          <div
            className="w-full max-w-lg h-full bg-white dark:bg-slate-950 overflow-y-auto p-6 space-y-4 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-black text-slate-900 dark:text-white">{compradorSeleccionado.nombre}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">{compradorSeleccionado.rut ?? 'RUT no disponible'}</p>
              </div>
              <button onClick={() => setSelectedId(null)} className="text-slate-400 hover:text-slate-700 dark:hover:text-white text-lg">✕</button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-3">
                <p className="text-slate-500 dark:text-slate-400 font-bold uppercase">Contacto</p>
                <p className="mt-1 text-slate-700 dark:text-slate-200">{compradorSeleccionado.contactoEmail ?? 'No disponible'}</p>
                <p className="text-slate-700 dark:text-slate-200">{compradorSeleccionado.contactoTelefono ?? 'No disponible'}</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-3">
                <p className="text-slate-500 dark:text-slate-400 font-bold uppercase">Riesgo</p>
                <p className="mt-1 text-slate-700 dark:text-slate-200">
                  {compradorSeleccionado.riesgo}
                  {compradorSeleccionado.riesgoMetodologia && ` — ${compradorSeleccionado.riesgoMetodologia}`}
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">Historial de oportunidades</p>
              {detalleLoading && <p className="text-xs text-slate-400">Cargando…</p>}
              {!detalleLoading && detalle && detalle.length === 0 && (
                <p className="text-xs text-slate-400">Sin oportunidades registradas.</p>
              )}
              <div className="space-y-2">
                {detalle?.map(o => (
                  <div key={o.codigo} className="border border-slate-100 dark:border-slate-800 rounded-xl p-3 text-xs">
                    <p className="font-semibold text-slate-800 dark:text-slate-100">{o.tituloOficial}</p>
                    <div className="flex items-center gap-2 mt-1 text-slate-500 dark:text-slate-400">
                      <span className="font-mono">{o.codigo}</span>
                      <span>·</span>
                      <span>{o.modalidad}</span>
                      <span>·</span>
                      <span>{o.estado}</span>
                    </div>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">
                      {o.montoEstimado ? `$${o.montoEstimado.toLocaleString('es-CL')} CLP` : 'Monto no calculable'}
                      {o.fechaCierre && ` · Cierre: ${new Date(o.fechaCierre).toLocaleDateString('es-CL')}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
