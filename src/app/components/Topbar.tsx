'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, ChevronDown, Building2 } from 'lucide-react';
import { Notificacion, Oportunidad, Empresa } from '../types';
import { MatchBadge } from './ui/Badge';

interface TopbarProps {
  notifications: Notificacion[];
  oportunidades: Oportunidad[];
  onMarkNotificationRead: (id: string) => void;
  onSelectOpportunity: (op: Oportunidad) => void;
  onSearchQuery: (query: string) => void;
  currentUser: { nombre: string; email: string; avatar: string; rol: string };
  activeCompany: Empresa;
  onChangeCompany: (company: Empresa) => void;
  lastSyncTime?: string;
  onLogout?: () => void;
  onNavigateView?: (module: string, subSection: string) => void;
  onSelectAdjudicacionCode?: (codigo: string) => void;
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
  lastSyncTime = 'Pendiente',
  onLogout,
  onNavigateView,
  onSelectAdjudicacionCode
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
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 flex items-center gap-6 justify-between z-40 relative shadow-sm">

      {/* SYSTEM HEALTH — solo texto compacto, el logo ya vive en el Sidebar */}
      <div className="hidden lg:flex items-center gap-2 shrink-0">
        <span className="text-[10px] font-black tracking-widest uppercase text-brand-600 dark:text-brand-400">
          Mercado Público
        </span>
        <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500">
          Convenios Marco · Compras Ágiles · Licitaciones
        </span>
      </div>

      {/* GLOBAL SEARCH */}
      <div ref={searchRef} className="flex-1 max-w-xl relative">
        <form onSubmit={handleSearchSubmit}>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Buscar por código de licitación, organismo o palabra clave..."
              value={searchVal}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-100 focus:bg-white dark:bg-slate-800 dark:focus:bg-slate-850 text-slate-900 dark:text-slate-100 border border-transparent focus:border-brand-500 dark:focus:border-brand-500 focus:ring-1 focus:ring-brand-500/25 outline-none transition-all"
            />
          </div>
        </form>

        {searchVal.trim() !== '' && searchResults.length > 0 && (
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
                  <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
                    {op.rubro}
                  </span>
                  <MatchBadge score={op.matchScore} />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT METADATA & PROFILE */}
      <div className="flex items-center gap-3 shrink-0">

        {/* SYSTEM HEALTH MONITOR & LAST SYNC STATUS */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Mercado Público: Operativo" />
          <div className="flex flex-col text-left">
            <span className="text-[9px] font-black uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">
              Operativo
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold">
              Últ. sync: <strong className="font-black text-slate-700 dark:text-slate-200">{lastSyncTime}</strong>
            </span>
          </div>
        </div>

        {/* COMPANY PROFILE DROPDOWN SELECTOR */}
        <div className="relative" ref={companyMenuRef}>
          <button
            onClick={() => setShowCompanyMenu(!showCompanyMenu)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-805 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all border border-slate-200/40 dark:border-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer"
          >
            <Building2 className="w-3.5 h-3.5 text-slate-400" />
            <strong className="font-extrabold text-brand-600 dark:text-blue-450">{activeCompany}</strong>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showCompanyMenu ? 'rotate-180' : ''}`} />
          </button>

          {showCompanyMenu && (
            <div className="absolute right-0 top-9 w-52 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl z-50 p-1.5 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
              {(['Consolidado', 'Aminorte', 'V-MOCCS'] as const).map((company) => (
                <button
                  key={company}
                  onClick={() => {
                    onChangeCompany(company);
                    setShowCompanyMenu(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                    activeCompany === company
                      ? 'bg-brand-50 dark:bg-brand-950/20 text-brand-600 dark:text-blue-450'
                      : 'text-slate-650 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-850 dark:hover:text-white'
                  }`}
                >
                  <span>{company}</span>
                  {activeCompany === company && (
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
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
            <Bell className="w-[18px] h-[18px]" />
            {unreadCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-md">
                {unreadCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-12 w-96 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl z-50 p-3 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="flex items-center justify-between px-2 py-1.5 border-b border-slate-100 dark:border-slate-800 mb-2">
                <span className="text-[10px] uppercase font-black text-slate-500 tracking-wider">Centro de Notificaciones</span>
                {unreadCount > 0 && (
                  <span className="text-[10px] font-bold text-brand-500">{unreadCount} Pendientes</span>
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
                          : n.esGrandesCompras || n.tipo === 'invitacion'
                          ? 'bg-purple-50/80 border-purple-300 dark:bg-purple-950/30 dark:border-purple-800 shadow-sm shadow-purple-500/10'
                          : 'bg-slate-50 border-brand-100 dark:bg-slate-850/30 dark:border-blue-900/30'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className={`text-[10px] font-extrabold uppercase tracking-wide px-1.5 py-0.5 rounded ${
                          n.esGrandesCompras || n.tipo === 'invitacion' ? 'bg-purple-600 text-white' :
                          n.tipo === 'alerta' ? 'bg-red-100 text-red-700 dark:bg-red-950/30 dark:text-red-400' :
                          n.tipo === 'sistema' ? 'bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400' :
                          'bg-brand-100 text-brand-700 dark:bg-blue-950/30 dark:text-blue-400'
                        }`}>
                          {n.esGrandesCompras || n.tipo === 'invitacion' ? '🛍️ Grande Compra (CM)' : n.tipo}
                        </span>
                        <span className="text-[9px] text-slate-400 font-medium">{n.fecha}</span>
                      </div>
                      <h4 className="text-xs font-black text-slate-900 dark:text-slate-100">{n.titulo}</h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-350 leading-relaxed font-medium">{n.descripcion}</p>

                      <div className="flex items-center gap-2 mt-1.5 pt-1.5 border-t border-slate-100 dark:border-slate-800/80">
                        {!n.leida && (
                          <button
                            onClick={() => onMarkNotificationRead(n.id)}
                            className="text-[10px] font-black text-brand-600 hover:text-brand-700 dark:hover:text-brand-400 transition"
                          >
                            Marcar como leído
                          </button>
                        )}
                        {(n.tipo === 'adjudicacion' || n.codigoProceso) && (
                          <button
                            onClick={() => {
                              onMarkNotificationRead(n.id);
                              setShowNotifications(false);
                              if (n.codigoProceso && onSelectAdjudicacionCode) {
                                onSelectAdjudicacionCode(n.codigoProceso);
                              }
                              if (onNavigateView) {
                                onNavigateView('business', 'adjudicaciones');
                              }
                            }}
                            className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 hover:underline"
                          >
                            🏆 Ver Adjudicación y Participantes
                          </button>
                        )}
                        {n.oportunidadId && !n.codigoProceso && (
                          <button
                            onClick={() => {
                              const op = oportunidades.find(o => o.id === n.oportunidadId);
                              if (op) {
                                onSelectOpportunity(op);
                                onMarkNotificationRead(n.id);
                                setShowNotifications(false);
                              }
                            }}
                            className={`text-[10px] font-black transition ${
                              n.esGrandesCompras || n.tipo === 'invitacion'
                                ? 'text-purple-600 dark:text-purple-400 hover:text-purple-800 font-extrabold underline'
                                : 'text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400'
                            }`}
                          >
                            {n.esGrandesCompras || n.tipo === 'invitacion' ? '✨ Ver Invitación Grande Compra' : 'Ver Oportunidad'}
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
            <div className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold text-xs">
              {currentUser.avatar}
            </div>
            <div className="text-left hidden md:block">
              <h3 className="text-xs font-extrabold text-slate-900 dark:text-slate-100 leading-none">{currentUser.nombre}</h3>
              <span className="text-[9px] text-slate-400 font-bold tracking-tight block mt-0.5">{currentUser.rol}</span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {showProfile && (
            <div className="absolute right-0 top-12 w-52 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl z-50 p-2 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800 mb-1.5 text-slate-500 dark:text-slate-400">
                <span className="text-[10px] font-bold block">{currentUser.email}</span>
                <span className="text-[9px] text-slate-400 uppercase font-black tracking-wider mt-0.5">Espacio: BidCoop Holding</span>
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
                onClick={() => {
                  setShowProfile(false);
                  if (onLogout) onLogout();
                }}
                className="w-full text-left text-xs font-black px-3 py-2 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition cursor-pointer"
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
