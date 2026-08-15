'use client';
import React, { useState, useEffect, useMemo } from 'react';

interface UsuarioBasico {
  id: string;
  nombre: string;
}

interface TareaResumen {
  id: string;
  titulo: string;
  descripcion: string | null;
  estado: 'PENDIENTE' | 'EN_PROGRESO' | 'COMPLETADA' | 'VENCIDA';
  fechaLimite: string | null;
  asignadoA: UsuarioBasico | null;
  oportunidad: { codigo: string; tituloOficial: string } | null;
  createdAt: string;
}

interface ChecklistItemData {
  id: string;
  descripcion: string;
  completado: boolean;
}

interface ChecklistData {
  id: string;
  nombre: string;
  items: ChecklistItemData[];
}

const ESTADO_ESTILO: Record<string, string> = {
  PENDIENTE: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
  EN_PROGRESO: 'bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400',
  COMPLETADA: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400',
  VENCIDA: 'bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400'
};

const ESTADO_LABEL: Record<string, string> = {
  PENDIENTE: 'Pendiente',
  EN_PROGRESO: 'En progreso',
  COMPLETADA: 'Completada',
  VENCIDA: 'Vencida'
};

export default function TasksModule() {
  const [tab, setTab] = useState<'tareas' | 'checklists'>('tareas');

  // --- TAREAS ---
  const [tareas, setTareas] = useState<TareaResumen[]>([]);
  const [usuarios, setUsuarios] = useState<UsuarioBasico[]>([]);
  const [loadingTareas, setLoadingTareas] = useState(true);
  const [errorTareas, setErrorTareas] = useState<string | null>(null);
  const [filtroEstado, setFiltroEstado] = useState<string>('Todas');
  const [showForm, setShowForm] = useState(false);
  const [nuevoTitulo, setNuevoTitulo] = useState('');
  const [nuevaDescripcion, setNuevaDescripcion] = useState('');
  const [nuevaFecha, setNuevaFecha] = useState('');
  const [nuevoAsignado, setNuevoAsignado] = useState('');
  const [nuevoCodigo, setNuevoCodigo] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [creando, setCreando] = useState(false);

  const cargarTareas = () => {
    setLoadingTareas(true);
    Promise.all([
      fetch('/api/tareas').then(res => res.json()),
      fetch('/api/usuarios/directorio-basico').then(res => res.json())
    ])
      .then(([tareasData, usuariosData]) => {
        if (tareasData.error) { setErrorTareas(tareasData.error); return; }
        setTareas(tareasData.tareas);
        setUsuarios(Array.isArray(usuariosData.usuarios) ? usuariosData.usuarios : []);
        setErrorTareas(null);
      })
      .catch(err => setErrorTareas(String(err)))
      .finally(() => setLoadingTareas(false));
  };

  useEffect(() => { cargarTareas(); }, []);

  const handleCrearTarea = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setCreando(true);
    try {
      const res = await fetch('/api/tareas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          titulo: nuevoTitulo,
          descripcion: nuevaDescripcion || undefined,
          fechaLimite: nuevaFecha || undefined,
          asignadoAId: nuevoAsignado || undefined,
          oportunidadCodigo: nuevoCodigo || undefined
        })
      });
      const data = await res.json();
      if (!res.ok) { setFormError(data.error || 'No se pudo crear la tarea.'); return; }
      setShowForm(false);
      setNuevoTitulo(''); setNuevaDescripcion(''); setNuevaFecha(''); setNuevoAsignado(''); setNuevoCodigo('');
      cargarTareas();
    } catch (err: unknown) {
      setFormError(err instanceof Error ? err.message : String(err));
    } finally {
      setCreando(false);
    }
  };

  const actualizarTarea = async (id: string, cambios: { estado?: string; asignadoAId?: string | null }) => {
    const res = await fetch(`/api/tareas/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cambios)
    });
    const data = await res.json();
    if (!res.ok) { alert(data.error || 'No se pudo actualizar la tarea.'); return; }
    cargarTareas();
  };

  const eliminarTarea = async (id: string) => {
    if (!confirm('¿Eliminar esta tarea?')) return;
    const res = await fetch(`/api/tareas/${id}`, { method: 'DELETE' });
    if (!res.ok) { const data = await res.json(); alert(data.error || 'No se pudo eliminar.'); return; }
    cargarTareas();
  };

  const tareasFiltradas = useMemo(() => {
    if (filtroEstado === 'Todas') return tareas;
    return tareas.filter(t => t.estado === filtroEstado);
  }, [tareas, filtroEstado]);

  // --- CHECKLISTS ---
  const [codigoBusqueda, setCodigoBusqueda] = useState('');
  const [oportunidadChecklist, setOportunidadChecklist] = useState<{ codigo: string; tituloOficial: string } | null>(null);
  const [checklists, setChecklists] = useState<ChecklistData[]>([]);
  const [loadingChecklists, setLoadingChecklists] = useState(false);
  const [errorChecklists, setErrorChecklists] = useState<string | null>(null);
  const [nuevoChecklistNombre, setNuevoChecklistNombre] = useState('');
  const [nuevoItemPorChecklist, setNuevoItemPorChecklist] = useState<Record<string, string>>({});

  const buscarChecklists = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!codigoBusqueda.trim()) return;
    setLoadingChecklists(true);
    setErrorChecklists(null);
    try {
      const res = await fetch(`/api/checklists?oportunidadCodigo=${encodeURIComponent(codigoBusqueda.trim())}`);
      const data = await res.json();
      if (!res.ok) { setErrorChecklists(data.error); setOportunidadChecklist(null); setChecklists([]); return; }
      setOportunidadChecklist(data.oportunidad);
      setChecklists(data.checklists);
    } catch (err: unknown) {
      setErrorChecklists(err instanceof Error ? err.message : String(err));
    } finally {
      setLoadingChecklists(false);
    }
  };

  const crearChecklist = async () => {
    if (!nuevoChecklistNombre.trim() || !oportunidadChecklist) return;
    const res = await fetch('/api/checklists', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre: nuevoChecklistNombre, oportunidadCodigo: oportunidadChecklist.codigo })
    });
    const data = await res.json();
    if (!res.ok) { alert(data.error || 'No se pudo crear el checklist.'); return; }
    setNuevoChecklistNombre('');
    setChecklists(prev => [...prev, { ...data.checklist }]);
  };

  const agregarItem = async (checklistId: string) => {
    const descripcion = nuevoItemPorChecklist[checklistId];
    if (!descripcion?.trim()) return;
    const res = await fetch(`/api/checklists/${checklistId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ accion: 'agregar_item', descripcion })
    });
    const data = await res.json();
    if (!res.ok) { alert(data.error || 'No se pudo agregar el item.'); return; }
    setChecklists(prev => prev.map(c => c.id === checklistId ? { ...c, items: [...c.items, data.item] } : c));
    setNuevoItemPorChecklist(prev => ({ ...prev, [checklistId]: '' }));
  };

  const toggleItem = async (checklistId: string, itemId: string) => {
    const res = await fetch(`/api/checklists/${checklistId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ accion: 'toggle_item', itemId })
    });
    const data = await res.json();
    if (!res.ok) { alert(data.error || 'No se pudo actualizar el item.'); return; }
    setChecklists(prev => prev.map(c => c.id === checklistId
      ? { ...c, items: c.items.map(i => i.id === itemId ? data.item : i) }
      : c));
  };

  const eliminarChecklist = async (checklistId: string) => {
    if (!confirm('¿Eliminar este checklist completo?')) return;
    const res = await fetch(`/api/checklists/${checklistId}`, { method: 'DELETE' });
    if (!res.ok) { const data = await res.json(); alert(data.error || 'No se pudo eliminar.'); return; }
    setChecklists(prev => prev.filter(c => c.id !== checklistId));
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-lg font-black text-slate-900 dark:text-white">Tareas y Checklists</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Seguimiento real de pendientes, vinculado opcionalmente a una oportunidad.</p>
        </div>
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit">
          {(['tareas', 'checklists'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${tab === t ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'}`}
            >
              {t === 'tareas' ? 'Tareas' : 'Checklists'}
            </button>
          ))}
        </div>
      </div>

      {tab === 'tareas' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-1.5 flex-wrap">
              {['Todas', 'PENDIENTE', 'EN_PROGRESO', 'COMPLETADA', 'VENCIDA'].map(f => (
                <button
                  key={f}
                  onClick={() => setFiltroEstado(f)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${filtroEstado === f ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
                >
                  {f === 'Todas' ? 'Todas' : ESTADO_LABEL[f]}
                </button>
              ))}
            </div>
            <button
              onClick={() => { setShowForm(v => !v); setFormError(null); }}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs transition"
            >
              {showForm ? 'Cancelar' : '+ Nueva Tarea'}
            </button>
          </div>

          {showForm && (
            <form onSubmit={handleCrearTarea} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4 text-xs">
              <div>
                <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Título</label>
                <input
                  type="text"
                  value={nuevoTitulo}
                  onChange={e => setNuevoTitulo(e.target.value)}
                  required
                  className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Descripción (opcional)</label>
                <textarea
                  value={nuevaDescripcion}
                  onChange={e => setNuevaDescripcion(e.target.value)}
                  rows={2}
                  className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white focus:border-blue-500"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Fecha límite</label>
                  <input
                    type="date"
                    value={nuevaFecha}
                    onChange={e => setNuevaFecha(e.target.value)}
                    className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Asignado a (opcional)</label>
                  <select
                    value={nuevoAsignado}
                    onChange={e => setNuevoAsignado(e.target.value)}
                    className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white"
                  >
                    <option value="">Sin asignar</option>
                    {usuarios.map(u => <option key={u.id} value={u.id}>{u.nombre}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Código de oportunidad (opcional)</label>
                  <input
                    type="text"
                    value={nuevoCodigo}
                    onChange={e => setNuevoCodigo(e.target.value)}
                    placeholder="ej. 1002772-77-LP26"
                    className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white font-mono"
                  />
                </div>
              </div>
              {formError && <p className="text-red-600 dark:text-red-400 font-bold">{formError}</p>}
              <button
                type="submit"
                disabled={creando}
                className="py-2.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-black text-xs transition"
              >
                {creando ? 'Creando…' : 'Crear Tarea'}
              </button>
            </form>
          )}

          {loadingTareas && <p className="text-sm text-slate-500 dark:text-slate-400">Cargando tareas…</p>}
          {errorTareas && <p className="text-sm text-red-600 dark:text-red-400">{errorTareas}</p>}

          {!loadingTareas && !errorTareas && (
            <div className="space-y-2">
              {tareasFiltradas.length === 0 && (
                <p className="text-sm text-slate-400 py-8 text-center">Sin tareas en este filtro.</p>
              )}
              {tareasFiltradas.map(t => (
                <div key={t.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${ESTADO_ESTILO[t.estado]}`}>{ESTADO_LABEL[t.estado]}</span>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.titulo}</h4>
                    </div>
                    {t.descripcion && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t.descripcion}</p>}
                    <div className="flex items-center gap-3 mt-2 text-[11px] text-slate-500 dark:text-slate-400 flex-wrap">
                      {t.fechaLimite && <span>Vence: {new Date(t.fechaLimite).toLocaleDateString('es-CL')}</span>}
                      {t.asignadoA && <span>Asignada a: {t.asignadoA.nombre}</span>}
                      {t.oportunidad && <span className="font-mono">{t.oportunidad.codigo}</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <select
                      value={t.estado === 'VENCIDA' ? 'PENDIENTE' : t.estado}
                      onChange={e => actualizarTarea(t.id, { estado: e.target.value })}
                      className="text-xs p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    >
                      <option value="PENDIENTE">Pendiente</option>
                      <option value="EN_PROGRESO">En progreso</option>
                      <option value="COMPLETADA">Completada</option>
                    </select>
                    <button onClick={() => eliminarTarea(t.id)} className="text-xs font-bold text-red-600 hover:text-red-700 dark:text-red-400">
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {tab === 'checklists' && (
        <div className="space-y-4">
          <form onSubmit={buscarChecklists} className="flex gap-2">
            <input
              type="text"
              value={codigoBusqueda}
              onChange={e => setCodigoBusqueda(e.target.value)}
              placeholder="Código de oportunidad, ej. 1002772-77-LP26"
              className="flex-1 text-sm p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-cyan-500/30 font-mono"
            />
            <button type="submit" className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs transition">
              Buscar
            </button>
          </form>

          {loadingChecklists && <p className="text-sm text-slate-500 dark:text-slate-400">Buscando…</p>}
          {errorChecklists && <p className="text-sm text-red-600 dark:text-red-400">{errorChecklists}</p>}

          {oportunidadChecklist && !loadingChecklists && (
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">{oportunidadChecklist.codigo}</p>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-100 mt-0.5">{oportunidadChecklist.tituloOficial}</p>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={nuevoChecklistNombre}
                  onChange={e => setNuevoChecklistNombre(e.target.value)}
                  placeholder="Nombre del nuevo checklist, ej. Documentos requeridos"
                  className="flex-1 text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white"
                />
                <button onClick={crearChecklist} className="px-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition">
                  + Checklist
                </button>
              </div>

              {checklists.length === 0 && <p className="text-sm text-slate-400 py-4">Sin checklists para esta oportunidad todavía.</p>}

              {checklists.map(c => (
                <div key={c.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{c.nombre}</h4>
                    <button onClick={() => eliminarChecklist(c.id)} className="text-xs font-bold text-red-600 hover:text-red-700 dark:text-red-400">
                      Eliminar checklist
                    </button>
                  </div>
                  <div className="space-y-1.5">
                    {c.items.map(item => (
                      <label key={item.id} className="flex items-center gap-2 text-xs cursor-pointer">
                        <input
                          type="checkbox"
                          checked={item.completado}
                          onChange={() => toggleItem(c.id, item.id)}
                          className="rounded text-blue-600"
                        />
                        <span className={item.completado ? 'line-through text-slate-400' : 'text-slate-700 dark:text-slate-300'}>{item.descripcion}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-1">
                    <input
                      type="text"
                      value={nuevoItemPorChecklist[c.id] || ''}
                      onChange={e => setNuevoItemPorChecklist(prev => ({ ...prev, [c.id]: e.target.value }))}
                      placeholder="Nuevo item…"
                      className="flex-1 text-xs p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white"
                    />
                    <button onClick={() => agregarItem(c.id)} className="px-2.5 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 text-white font-bold rounded-lg text-xs transition">
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
