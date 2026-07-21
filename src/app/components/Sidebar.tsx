import React, { useState } from 'react';

interface SidebarProps {
  activeModule: string;
  activeSubSection: string;
  onChangeView: (module: string, subSection: string) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Sidebar({
  activeModule,
  activeSubSection,
  onChangeView,
  darkMode,
  setDarkMode
}: SidebarProps) {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);

  const modules = [
    {
      id: 'dashboard',
      label: 'Inicio',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      subSections: [
        { id: 'resumen', label: 'Resumen General' }
      ]
    },
    {
      id: 'search',
      label: 'Búsqueda',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      subSections: [
        { id: 'buscador', label: 'Buscador de Negocios' },
        { id: 'vistas', label: 'Vistas Guardadas' }
      ]
    },
    {
      id: 'business',
      label: 'Negocios',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      subSections: [
        { id: 'mis-negocios', label: 'Mis Negocios' },
        { id: 'calendario', label: 'Calendario de Fechas' },
        { id: 'catalogo', label: 'Catálogo de Productos' },
        { id: 'documentos', label: 'Repositorio Documental' }
      ]
    },
    {
      id: 'analytics',
      label: 'Analítica',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2zm9-10v10a2 2 0 002 2h2a2 2 0 002-2V9a2 2 0 00-2-2h-2a2 2 0 00-2 2z" />
        </svg>
      ),
      subSections: [
        { id: 'inteligencia-mercado', label: 'Inteligencia de Mercado' },
        { id: 'desempeno-equipo', label: 'Desempeño y Reportes' }
      ]
    },
    {
      id: 'providers',
      label: 'Proveedores',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      subSections: [
        { id: 'directorio', label: 'Directorio Pymes' }
      ]
    },
    {
      id: 'config',
      label: 'Ajustes',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      subSections: [
        { id: 'perfil', label: 'Mi Perfil' },
        { id: 'parametros', label: 'Espacio de Trabajo' },
        { id: 'ia-prompt', label: 'Plantillas de IA' },
        { id: 'suscripcion', label: 'Planes y Suscripción' }
      ]
    }
  ];

  return (
    <aside className="w-[72px] bg-slate-900 border-r border-slate-800 flex flex-col justify-between items-center py-6 shrink-0 relative z-50">
      <div className="flex flex-col items-center gap-10 w-full">
        {/* LOGO */}
        <div className="flex flex-col items-center gap-1 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-all">
            B
          </div>
          <span className="text-[9px] font-bold text-slate-500 tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity">COOP</span>
        </div>

        {/* NAVIGATION ITEMS */}
        <nav className="flex flex-col gap-4 w-full px-2">
          {modules.map((m) => {
            const isModuleActive = activeModule === m.id;
            const isHovered = hoveredModule === m.id;

            return (
              <div
                key={m.id}
                className="relative"
                onMouseEnter={() => setHoveredModule(m.id)}
                onMouseLeave={() => setHoveredModule(null)}
              >
                {/* Main Icon Button */}
                <button
                  onClick={() => onChangeView(m.id, m.subSections[0].id)}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 mx-auto relative group ${
                    isModuleActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                  aria-label={m.label}
                >
                  {m.icon}
                  {/* Active dot */}
                  {isModuleActive && (
                    <span className="absolute right-1 top-1 w-2.5 h-2.5 bg-green-400 border border-slate-900 rounded-full animate-pulse" />
                  )}
                  {/* Tooltip on hover (fallback if submenu disabled) */}
                  <div className="absolute left-[70px] bg-slate-950 text-white text-[10px] uppercase font-bold py-1 px-2.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg whitespace-nowrap hidden border border-slate-800">
                    {m.label}
                  </div>
                </button>

                {/* FLOATING SUBMENU (Hover state) */}
                {isHovered && (
                  <div className="absolute left-[56px] top-0 ml-1.5 w-60 bg-slate-950/95 backdrop-blur-md border border-slate-800 rounded-2xl shadow-2xl p-3 flex flex-col gap-1 transition-all duration-200 animate-in fade-in slide-in-from-left-2 duration-150">
                    <div className="px-3 py-1.5 border-b border-slate-800 mb-2">
                      <span className="text-[10px] uppercase font-black text-slate-500 tracking-wider">
                        {m.label}
                      </span>
                    </div>
                    {m.subSections.map((sub) => {
                      const isSubActive = activeModule === m.id && activeSubSection === sub.id;
                      return (
                        <button
                          key={sub.id}
                          onClick={() => {
                            onChangeView(m.id, sub.id);
                            setHoveredModule(null);
                          }}
                          className={`w-full text-left text-xs font-bold px-3 py-2 rounded-xl transition ${
                            isSubActive
                              ? 'bg-blue-600/20 text-blue-400 border-l-2 border-blue-500 pl-2.5'
                              : 'text-slate-400 hover:bg-slate-800/50 hover:text-white pl-3'
                          }`}
                        >
                          {sub.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* LOWER FOOTER ACTIONS */}
      <div className="flex flex-col items-center gap-5 w-full">
        {/* Dark/Light mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-10 h-10 rounded-xl bg-slate-800 text-slate-400 hover:text-amber-400 hover:bg-slate-700 transition flex items-center justify-center cursor-pointer shadow-inner"
          title="Cambiar Tema"
        >
          {darkMode ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

        {/* User initials bubble */}
        <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center font-bold text-slate-300 text-sm border border-slate-700 hover:border-slate-500 transition cursor-pointer">
          JC
        </div>
      </div>
    </aside>
  );
}
