import React, { useState, useRef, useEffect } from 'react';
import { Notificacion, Oportunidad } from '../types';

interface TopbarProps {
  notifications: Notificacion[];
  oportunidades: Oportunidad[];
  onMarkNotificationRead: (id: string) => void;
  onSelectOpportunity: (op: Oportunidad) => void;
  onSearchQuery: (query: string) => void;
  currentUser: { nombre: string; email: string; avatar: string; rol: string };
  activeCompany: 'Consolidado' | 'Inder-Roll' | 'Aminorte';
  onChangeCompany: (company: 'Consolidado' | 'Inder-Roll' | 'Aminorte') => void;
  lastSyncTime?: string;
}

export default function Topbar({
  notifications,
  oportunidades,
  onMarkNotificationRead,
  onSelectOpportunity,
  onSearchQuery,
  currentUser,
  activeCompany,
  onChangeCompany,
  lastSyncTime = 'Pendiente'
}: TopbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const [searchResults, setSearchResults] = useState<Oportunidad[]>([]);

  const [showCompanyMenu, setShowCompanyMenu] = useState(false);

  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const companyMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfile(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchResults([]);
      }
      if (companyMenuRef.current && !companyMenuRef.current.contains(event.target as Node)) {
        setShowCompanyMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter opportunities for autocomplete
  const handleSearchChange = (val: string) => {
    setSearchVal(val);
    if (!val.trim()) {
      setSearchResults([]);
      return;
    }
    const filtered = oportunidades.filter(op =>
      op.titulo.toLowerCase().includes(val.toLowerCase()) ||
      op.codigo.toLowerCase().includes(val.toLowerCase()) ||
      op.organismo.toLowerCase().includes(val.toLowerCase())
    ).slice(0, 5);
    setSearchResults(filtered);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchQuery(searchVal);
    setSearchResults([]);
  };

  const handleSelectResult = (op: Oportunidad) => {
    onSelectOpportunity(op);
    setSearchVal(op.titulo);
    setSearchResults([]);
  };

  const unreadCount = notifications.filter(n => !n.leida).length;

  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between z-40 relative">
      
      {/* GLOBAL SEARCH */}
      <div ref={searchRef} className="w-1/3 relative">
        <form onSubmit={handleSearchSubmit}>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Buscar por código de licitación, organismo o palabra clave..."
              value={searchVal}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-100 focus:bg-white dark:bg-slate-800 dark:focus:bg-slate-850 text-slate-900 dark:text-slate-100 border border-transparent focus:border-blue-500 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-500/25 outline-none transition-all"
            />
          </div>
        </form>

        {/* Search Results Dropdown */}
        {searchResults.length > 0 && (
          <div className="absolute top-12 left-0 right-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl z-50 p-2 flex flex-col gap-1">
            <div className="px-3 py-1 border-b border-slate-100 dark:border-slate-800 mb-1">
              <span className="text-[10px] uppercase font-black text-slate-400">Sugerencias de Búsqueda</span>
            </div>
            {searchResults.map((op) => (
              <button
                key={op.id}
                onClick={() => handleSelectResult(op)}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between gap-4 transition"
              >
                <div className="truncate">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">{op.titulo}</h4>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 truncate block mt-0.5">{op.organismo} • {op.codigo}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    {op.rubro}
                  </span>
                  <span className="text-[10px] font-bold text-green-600 dark:text-green-400">
                    {op.matchScore}% Match
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT METADATA & PROFILE */}
      <div className="flex items-center gap-5">
        
        {/* LAST SYNC TIME STATUS */}
        <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold">
            ChileCompra API • Sync: <strong className="font-black text-slate-700 dark:text-slate-200">{lastSyncTime}</strong> (cada 3h)
          </span>
        </div>

        {/* COMPANY PROFILE DROPDOWN SELECTOR */}
        <div className="relative" ref={companyMenuRef}>
          <button
            onClick={() => setShowCompanyMenu(!showCompanyMenu)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-805 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all border border-slate-200/40 dark:border-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer"
          >
            🏢 Empresa: <strong className="font-extrabold text-blue-600 dark:text-blue-450">{activeCompany}</strong>
            <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${showCompanyMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {showCompanyMenu && (
            <div className="absolute right-0 top-9 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl z-50 p-1.5 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
              {(['Consolidado', 'Inder-Roll', 'Aminorte'] as const).map((company) => (
                <button
                  key={company}
                  onClick={() => {
                    onChangeCompany(company);
                    setShowCompanyMenu(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                    activeCompany === company
                      ? 'bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-450'
                      : 'text-slate-650 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-850 dark:hover:text-white'
                  }`}
                >
                  <span>{company}</span>
                  {activeCompany === company && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-550" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* NOTIFICATIONS BELL */}
        <div ref={notifRef} className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition relative cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            {unreadCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white text-[10px] font-black rounded-full flex items-center justify-center animate-bounce shadow-md">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 top-12 w-96 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl z-50 p-3 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="flex items-center justify-between px-2 py-1.5 border-b border-slate-100 dark:border-slate-800 mb-2">
                <span className="text-[10px] uppercase font-black text-slate-500 tracking-wider">Centro de Notificaciones</span>
                {unreadCount > 0 && (
                  <span className="text-[10px] font-bold text-blue-500">{unreadCount} Pendientes</span>
                )}
              </div>
              <div className="max-h-[300px] overflow-y-auto space-y-1.5 pr-1">
                {notifications.length === 0 ? (
                  <div className="text-center py-6 text-slate-400 text-xs">Sin notificaciones pendientes</div>
                ) : (
                  notifications.map((n) => (
                    <div
                      key={n.id}
                      className={`p-2.5 rounded-xl border transition-all flex flex-col gap-1 relative ${
                        n.leida
                          ? 'bg-white border-slate-100 dark:bg-slate-900 dark:border-slate-800 opacity-60'
                          : 'bg-slate-50 border-blue-100 dark:bg-slate-850/30 dark:border-blue-900/30'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className={`text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded ${
                          n.tipo === 'alerta' ? 'bg-red-100 text-red-700 dark:bg-red-950/30 dark:text-red-400' :
                          n.tipo === 'sistema' ? 'bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400' :
                          'bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400'
                        }`}>
                          {n.tipo}
                        </span>
                        <span className="text-[9px] text-slate-400">{n.fecha}</span>
                      </div>
                      <h4 className="text-xs font-black text-slate-900 dark:text-slate-100">{n.titulo}</h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">{n.descripcion}</p>
                      
                      <div className="flex items-center gap-2 mt-1.5 pt-1.5 border-t border-slate-100 dark:border-slate-800/80">
                        {!n.leida && (
                          <button
                            onClick={() => onMarkNotificationRead(n.id)}
                            className="text-[10px] font-black text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition"
                          >
                            Marcar como leído
                          </button>
                        )}
                        {n.oportunidadId && (
                          <button
                            onClick={() => {
                              const op = oportunidades.find(o => o.id === n.oportunidadId);
                              if (op) {
                                onSelectOpportunity(op);
                                onMarkNotificationRead(n.id);
                                setShowNotifications(false);
                              }
                            }}
                            className="text-[10px] font-black text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                          >
                            Ver Oportunidad
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* PROFILE DROPDOWN */}
        <div ref={profileRef} className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2.5 p-1 px-2.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
              {currentUser.avatar}
            </div>
            <div className="text-left hidden md:block">
              <h3 className="text-xs font-extrabold text-slate-900 dark:text-slate-100 leading-none">{currentUser.nombre}</h3>
              <span className="text-[9px] text-slate-400 font-bold tracking-tight block mt-0.5">{currentUser.rol}</span>
            </div>
            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Profile Context Menu */}
          {showProfile && (
            <div className="absolute right-0 top-12 w-52 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl z-50 p-2 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800 mb-1.5 text-slate-500 dark:text-slate-400">
                <span className="text-[10px] font-bold block">{currentUser.email}</span>
                <span className="text-[9px] text-slate-400 uppercase font-black tracking-wider mt-0.5">Espacio: Inderquim S.A.</span>
              </div>
              <button
                onClick={() => { setShowProfile(false); }}
                className="w-full text-left text-xs font-bold px-3 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                Mi Perfil
              </button>
              <button
                onClick={() => { setShowProfile(false); }}
                className="w-full text-left text-xs font-bold px-3 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                Ajustes de Workspace
              </button>
              <div className="border-t border-slate-100 dark:border-slate-800 my-1" />
              <button
                className="w-full text-left text-xs font-black px-3 py-2 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition"
              >
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
