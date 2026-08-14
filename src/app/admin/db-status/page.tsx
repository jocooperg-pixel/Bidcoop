'use client';

import React, { useEffect, useState } from 'react';
import LoginScreen from '../../components/LoginScreen';

interface DbStatus {
  fuente: string;
  total: number;
  totalCompradores: number;
  totalItems: number;
  totalEmpresas: number;
  porEstado: Record<string, number>;
  porModalidad: Record<string, number>;
  ultimaSincronizacion: string | null;
  ultimasOportunidades: Array<{
    codigo: string;
    tituloOficial: string;
    estado: string;
    estadoOficialMP: string;
    modalidad: string;
    fechaCierre: string | null;
    comprador: { nombre: string } | null;
  }>;
  timestampConsulta: string;
}

export default function DbStatusPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkedAuth, setCheckedAuth] = useState(false);
  const [data, setData] = useState<DbStatus | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sesión verificada en servidor (cookie firmada) — no un flag local.
    fetch('/api/auth/me')
      .then(res => res.json())
      .then(data => {
        if (data.autenticado) setIsAuthenticated(true);
      })
      .finally(() => setCheckedAuth(true));
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;
    fetch('/api/db-oportunidades')
      .then(res => res.json())
      .then(json => {
        if (json.error) setError(json.error);
        else setData(json);
      })
      .catch(err => setError(String(err)))
      .finally(() => setLoading(false));
  }, [isAuthenticated]);

  if (!checkedAuth) return null;
  if (!isAuthenticated) return <LoginScreen onLoginSuccess={() => setIsAuthenticated(true)} />;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <span className="bg-amber-500/20 text-amber-400 font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-widest border border-amber-500/30">
            Panel de verificación — no es la fuente activa de la app
          </span>
          <h1 className="text-2xl font-black mt-3">Estado de Postgres (Neon)</h1>
          <p className="text-sm text-slate-400 mt-1">
            La UI de BidCoop sigue leyendo de <code className="text-cyan-400">mockData.ts</code> / Vercel Blob.
            Esta página consulta directo la base de datos migrada para auditar consistencia mientras se planifica la conexión real.
          </p>
        </div>

        {loading && <p className="text-slate-400">Consultando Postgres...</p>}
        {error && (
          <div className="bg-red-500/15 border border-red-500/40 text-red-300 p-4 rounded-2xl text-sm">
            {error}
          </div>
        )}

        {data && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard label="Oportunidades" value={data.total} />
              <StatCard label="Compradores" value={data.totalCompradores} />
              <StatCard label="Ítems" value={data.totalItems} />
              <StatCard label="Empresas activas" value={data.totalEmpresas} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">Por estado (pipeline)</h2>
                {Object.entries(data.porEstado).map(([estado, count]) => (
                  <div key={estado} className="flex justify-between text-sm py-1 border-b border-slate-800 last:border-0">
                    <span>{estado}</span>
                    <span className="font-mono font-bold">{count}</span>
                  </div>
                ))}
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">Por modalidad</h2>
                {Object.entries(data.porModalidad).map(([modalidad, count]) => (
                  <div key={modalidad} className="flex justify-between text-sm py-1 border-b border-slate-800 last:border-0">
                    <span>{modalidad}</span>
                    <span className="font-mono font-bold">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">Últimas 10 oportunidades sincronizadas</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-left text-slate-500 border-b border-slate-800">
                      <th className="pb-2 pr-3">Código</th>
                      <th className="pb-2 pr-3">Título</th>
                      <th className="pb-2 pr-3">Comprador</th>
                      <th className="pb-2 pr-3">Estado pipeline</th>
                      <th className="pb-2 pr-3">Estado MP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.ultimasOportunidades.map(op => (
                      <tr key={op.codigo} className="border-b border-slate-800/50">
                        <td className="py-2 pr-3 font-mono">{op.codigo}</td>
                        <td className="py-2 pr-3 max-w-xs truncate">{op.tituloOficial}</td>
                        <td className="py-2 pr-3">{op.comprador?.nombre || 'Sin dato'}</td>
                        <td className="py-2 pr-3">{op.estado}</td>
                        <td className="py-2 pr-3">{op.estadoOficialMP}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              Última sincronización registrada en Postgres: {data.ultimaSincronizacion ? new Date(data.ultimaSincronizacion).toLocaleString('es-CL', { timeZone: 'America/Santiago' }) : 'Sin dato'}
              {' · '}Consulta ejecutada: {new Date(data.timestampConsulta).toLocaleString('es-CL', { timeZone: 'America/Santiago' })}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
      <p className="text-xs text-slate-400 uppercase tracking-wide font-bold">{label}</p>
      <p className="text-3xl font-black mt-1 font-mono">{value}</p>
    </div>
  );
}
