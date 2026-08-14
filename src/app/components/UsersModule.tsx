'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { rolLabel, inicialesDe } from '../utils/roles';

interface EmpresaResumen {
  id: string;
  nombre: string;
}

interface UsuarioResumen {
  id: string;
  nombre: string;
  email: string;
  rol: string;
  activo: boolean;
  debeCambiarPassword: boolean;
  ultimoLoginEn: string | null;
  createdAt: string;
  empresas: EmpresaResumen[];
}

const ROLES: { id: string; label: string }[] = [
  { id: 'ADMIN_HOLDING', label: rolLabel('ADMIN_HOLDING') },
  { id: 'ADMIN_EMPRESA', label: rolLabel('ADMIN_EMPRESA') },
  { id: 'DIRECTOR_LICITACIONES', label: rolLabel('DIRECTOR_LICITACIONES') },
  { id: 'GESTOR', label: rolLabel('GESTOR') },
  { id: 'APROBADOR_COMERCIAL', label: rolLabel('APROBADOR_COMERCIAL') },
  { id: 'LECTOR', label: rolLabel('LECTOR') }
];

interface UsersModuleProps {
  currentUser: { nombre: string; email: string; avatar: string; rol: string };
  currentUserId: string | null;
}

export default function UsersModule({ currentUserId }: UsersModuleProps) {
  const [usuarios, setUsuarios] = useState<UsuarioResumen[]>([]);
  const [empresasDisponibles, setEmpresasDisponibles] = useState<EmpresaResumen[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevoEmail, setNuevoEmail] = useState('');
  const [nuevoRol, setNuevoRol] = useState('LECTOR');
  const [nuevasEmpresaIds, setNuevasEmpresaIds] = useState<string[]>([]);
  const [creando, setCreando] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Contraseña temporal recién generada — se muestra UNA sola vez, nunca se
  // vuelve a poder recuperar después de cerrar este aviso.
  const [passwordRevelada, setPasswordRevelada] = useState<{ email: string; password: string } | null>(null);

  const cargarUsuarios = () => {
    setLoading(true);
    fetch('/api/usuarios')
      .then(res => res.json())
      .then(data => {
        if (data.error) { setError(data.error); return; }
        setUsuarios(data.usuarios);
        setEmpresasDisponibles(data.empresasDisponibles);
        setError(null);
      })
      .catch(err => setError(String(err)))
      .finally(() => setLoading(false));
  };

  useEffect(() => { cargarUsuarios(); }, []);

  const handleCrearUsuario = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    if (nuevoRol !== 'ADMIN_HOLDING' && nuevasEmpresaIds.length === 0) {
      setFormError('Debes asignar al menos una empresa (o elegir el rol Administrador del Holding, que ve todas).');
      return;
    }
    setCreando(true);
    try {
      const res = await fetch('/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre: nuevoNombre, email: nuevoEmail, rol: nuevoRol, empresaIds: nuevasEmpresaIds })
      });
      const data = await res.json();
      if (!res.ok) { setFormError(data.error || 'No se pudo crear el usuario.'); return; }

      setPasswordRevelada({ email: data.usuario.email, password: data.passwordTemporal });
      setShowCreateForm(false);
      setNuevoNombre('');
      setNuevoEmail('');
      setNuevoRol('LECTOR');
      setNuevasEmpresaIds([]);
      cargarUsuarios();
    } catch (err: unknown) {
      setFormError(err instanceof Error ? err.message : String(err));
    } finally {
      setCreando(false);
    }
  };

  const actualizarUsuario = async (id: string, cambios: { rol?: string; activo?: boolean; empresaIds?: string[] }) => {
    const res = await fetch(`/api/usuarios/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ accion: 'actualizar', ...cambios })
    });
    const data = await res.json();
    if (!res.ok) { alert(data.error || 'No se pudo actualizar el usuario.'); return; }
    cargarUsuarios();
  };

  const resetearPassword = async (usuario: UsuarioResumen) => {
    if (!confirm(`¿Generar una nueva contraseña temporal para ${usuario.email}? La contraseña actual dejará de funcionar de inmediato.`)) return;
    const res = await fetch(`/api/usuarios/${usuario.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ accion: 'resetear_password' })
    });
    const data = await res.json();
    if (!res.ok) { alert(data.error || 'No se pudo resetear la contraseña.'); return; }
    setPasswordRevelada({ email: usuario.email, password: data.passwordTemporal });
    cargarUsuarios();
  };

  const toggleEmpresaNueva = (id: string) => {
    setNuevasEmpresaIds(prev => prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]);
  };

  const totalActivos = useMemo(() => usuarios.filter(u => u.activo).length, [usuarios]);

  if (loading) return <div className="p-8 text-sm text-slate-500 dark:text-slate-400">Cargando usuarios…</div>;
  if (error) return <div className="p-8 text-sm text-red-600 dark:text-red-400">{error}</div>;

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-lg font-black text-slate-900 dark:text-white">Usuarios y Permisos</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {usuarios.length} usuarios reales del workspace — {totalActivos} activos. Separación por empresa aplicada según rol.
          </p>
        </div>
        <button
          onClick={() => { setShowCreateForm(v => !v); setFormError(null); }}
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs transition"
        >
          {showCreateForm ? 'Cancelar' : '+ Nuevo Usuario'}
        </button>
      </div>

      {showCreateForm && (
        <form onSubmit={handleCrearUsuario} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Nombre Completo</label>
              <input
                type="text"
                value={nuevoNombre}
                onChange={e => setNuevoNombre(e.target.value)}
                required
                className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Correo Electrónico</label>
              <input
                type="email"
                value={nuevoEmail}
                onChange={e => setNuevoEmail(e.target.value)}
                required
                className="w-full text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Rol</label>
            <select
              value={nuevoRol}
              onChange={e => setNuevoRol(e.target.value)}
              className="w-full sm:w-64 text-xs p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white focus:border-blue-500"
            >
              {ROLES.map(r => <option key={r.id} value={r.id}>{r.label}</option>)}
            </select>
          </div>

          {nuevoRol !== 'ADMIN_HOLDING' && (
            <div>
              <label className="text-[10px] uppercase font-black text-slate-400 block mb-1">Empresas Asignadas</label>
              <div className="flex flex-wrap gap-2">
                {empresasDisponibles.map(emp => (
                  <label key={emp.id} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 cursor-pointer font-bold text-slate-700 dark:text-slate-300">
                    <input
                      type="checkbox"
                      checked={nuevasEmpresaIds.includes(emp.id)}
                      onChange={() => toggleEmpresaNueva(emp.id)}
                      className="rounded text-blue-600"
                    />
                    {emp.nombre}
                  </label>
                ))}
              </div>
            </div>
          )}

          {formError && <p className="text-red-600 dark:text-red-400 font-bold">{formError}</p>}

          <button
            type="submit"
            disabled={creando}
            className="py-2.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-black text-xs transition"
          >
            {creando ? 'Creando…' : 'Crear Usuario'}
          </button>
          <p className="text-[10px] text-slate-400">
            Se generará una contraseña temporal aleatoria que deberás compartir manualmente — nunca se guarda en texto plano ni se envía por correo automáticamente.
          </p>
        </form>
      )}

      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 dark:bg-slate-900 text-left text-xs text-slate-500 dark:text-slate-400">
            <tr>
              <th className="px-4 py-3 font-bold">Usuario</th>
              <th className="px-4 py-3 font-bold">Rol</th>
              <th className="px-4 py-3 font-bold">Empresas</th>
              <th className="px-4 py-3 font-bold">Último acceso</th>
              <th className="px-4 py-3 font-bold">Estado</th>
              <th className="px-4 py-3 font-bold text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(u => (
              <tr key={u.id} className="border-t border-slate-100 dark:border-slate-800">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-black text-[10px] text-slate-600 dark:text-slate-300 shrink-0">
                      {inicialesDe(u.nombre)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-800 dark:text-slate-100 truncate">{u.nombre}{u.id === currentUserId && ' (tú)'}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs truncate">{u.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <select
                    value={u.rol}
                    onChange={e => actualizarUsuario(u.id, { rol: e.target.value })}
                    disabled={u.id === currentUserId}
                    className="text-xs p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white disabled:opacity-50"
                  >
                    {ROLES.map(r => <option key={r.id} value={r.id}>{r.label}</option>)}
                  </select>
                </td>
                <td className="px-4 py-3 text-xs text-slate-600 dark:text-slate-300">
                  {u.rol === 'ADMIN_HOLDING' ? 'Todas (consolidado)' : (u.empresas.length ? u.empresas.map(e => e.nombre).join(', ') : 'Sin asignar')}
                </td>
                <td className="px-4 py-3 text-xs text-slate-500 dark:text-slate-400">
                  {u.ultimoLoginEn ? new Date(u.ultimoLoginEn).toLocaleString('es-CL', { dateStyle: 'short', timeStyle: 'short' }) : 'Nunca'}
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${u.activo ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'}`}>
                    {u.activo ? 'Activo' : 'Inactivo'}
                  </span>
                </td>
                <td className="px-4 py-3 text-right space-x-2 whitespace-nowrap">
                  <button
                    onClick={() => resetearPassword(u)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400"
                  >
                    Resetear clave
                  </button>
                  <button
                    onClick={() => actualizarUsuario(u.id, { activo: !u.activo })}
                    disabled={u.id === currentUserId}
                    className="text-xs font-bold text-red-600 hover:text-red-700 dark:text-red-400 disabled:opacity-40"
                  >
                    {u.activo ? 'Desactivar' : 'Activar'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {passwordRevelada && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setPasswordRevelada(null)}>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-3" onClick={e => e.stopPropagation()}>
            <h3 className="text-sm font-black text-slate-900 dark:text-white">Contraseña temporal generada</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Para <strong className="text-slate-700 dark:text-slate-200">{passwordRevelada.email}</strong>. Cópiala y compártela ahora por un canal seguro — no se volverá a mostrar.
            </p>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 font-mono text-sm text-slate-900 dark:text-white text-center select-all break-all">
              {passwordRevelada.password}
            </div>
            <p className="text-[10px] text-slate-400">El usuario deberá cambiarla al iniciar sesión por primera vez.</p>
            <button
              onClick={() => setPasswordRevelada(null)}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs transition"
            >
              Ya la copié — cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
