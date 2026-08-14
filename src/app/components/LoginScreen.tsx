'use client';

import React, { useState } from 'react';

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

export default function LoginScreen({ onLoginSuccess }: LoginScreenProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setIsLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: username.trim(), password })
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || 'Usuario o contraseña incorrectos. Verifica tus credenciales.');
        setIsLoading(false);
        return;
      }

      onLoginSuccess();
    } catch {
      setErrorMsg('No se pudo conectar con el servidor. Intenta de nuevo.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden font-sans select-none">
      {/* Dynamic Ambient Glow Background */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Glassmorphism Card */}
      <div className="max-w-md w-full bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl shadow-cyan-950/40 relative z-10 space-y-8 animate-in fade-in zoom-in-95 duration-300">
        
        {/* Brand Header */}
        <div className="text-center space-y-3">
          <div className="mx-auto w-20 h-20 rounded-full bg-slate-900 border-2 border-cyan-400/50 p-1.5 shadow-xl shadow-cyan-500/20 flex items-center justify-center overflow-hidden">
            <img 
              src="/bidcoop-logo.png" 
              alt="BidCoop Logo" 
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <div>
            <span className="bg-cyan-500/20 text-cyan-400 font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-widest border border-cyan-500/30">
              ACCESO RESTRINGIDO
            </span>
            <h1 className="text-2xl font-black text-white mt-2 tracking-tight">
              BidCoop
            </h1>
            <p className="text-xs text-slate-400 mt-1 font-medium">
              Plataforma Avanzada de Abastecimiento & Mercado Público
            </p>
          </div>
        </div>

        {/* Error Alert Toast */}
        {errorMsg && (
          <div className="bg-red-500/15 border border-red-500/40 text-red-300 p-3.5 rounded-2xl text-xs flex items-center gap-3 animate-in fade-in duration-200">
            <span className="text-lg">⚠️</span>
            <span className="font-semibold">{errorMsg}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 block">
              Correo electrónico
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                👤
              </span>
              <input
                type="email"
                required
                placeholder="tu@empresa.cl"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-400 text-slate-100 text-sm font-semibold pl-10 pr-4 py-3 rounded-2xl outline-none transition-all placeholder:text-slate-600 focus:ring-2 focus:ring-cyan-500/20"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 block">
              Contraseña
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                🔒
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-400 text-slate-100 text-sm font-semibold pl-10 pr-11 py-3 rounded-2xl outline-none transition-all placeholder:text-slate-600 focus:ring-2 focus:ring-cyan-500/20 font-mono"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition text-xs font-bold p-1 cursor-pointer"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {/* Login Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black text-sm py-3.5 px-6 rounded-2xl transition-all shadow-lg shadow-cyan-500/25 active:scale-98 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 mt-2"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-slate-950" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Validando Credenciales...</span>
              </>
            ) : (
              <>
                <span>Iniciar Sesión</span>
                <span>➔</span>
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
}
