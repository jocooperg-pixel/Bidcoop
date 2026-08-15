'use client';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  LayoutDashboard,
  Search,
  Briefcase,
  BarChart3,
  Building2,
  Truck,
  ClipboardList,
  Settings,
  Users,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon
} from 'lucide-react';
import { inicialesDe } from '../utils/roles';
import { getSemaforoBidCoop } from '../utils/semaforoEngine';
import type { Oportunidad } from '../types';

interface SidebarProps {
  activeModule: string;
  activeSubSection: string;
  onChangeView: (module: string, subSection: string) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  currentUser: { nombre: string; rolRaw: string };
  oportunidades?: Oportunidad[];
}

const EXPANDED_STORAGE_KEY = 'bidcoop_sidebar_expanded';

export default function Sidebar({
  activeModule,
  activeSubSection,
  onChangeView,
  darkMode,
  setDarkMode,
  currentUser,
  oportunidades = []
}: SidebarProps) {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const stored = window.localStorage.getItem(EXPANDED_STORAGE_KEY);
    return stored !== null ? stored === 'true' : true;
  });
  const [tareasPendientes, setTareasPendientes] = useState<number | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sidebarRef = useRef<HTMLElement>(null);

  const toggleExpanded = () => {
    setExpanded(prev => {
      const next = !prev;
      window.localStorage.setItem(EXPANDED_STORAGE_KEY, String(next));
      return next;
    });
  };

  // Cierra el submenú flotante (modo contraído) al hacer click afuera.
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setHoveredModule(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (id: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoveredModule(id);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredModule(null);
    }, 350);
  };

  // Indicador real de tareas pendientes propias — mismo endpoint que TasksModule.
  useEffect(() => {
    fetch('/api/tareas')
      .then(res => (res.ok ? res.json() : { tareas: [] }))
      .then(data => {
        const tareas = Array.isArray(data.tareas) ? data.tareas : [];
        const pendientes = tareas.filter((t: { estado: string }) => t.estado === 'PENDIENTE' || t.estado === 'VENCIDA').length;
        setTareasPendientes(pendientes);
      })
      .catch(() => setTareasPendientes(null));
  }, []);

  // Indicador real de oportunidades con semáforo verde (match alto) — usa
  // getSemaforoBidCoop sin modificarlo, mismos datos ya cargados en la app.
  const matchAltoCount = useMemo(() => {
    return oportunidades.filter(o => {
      if (o.estado !== 'Publicada') return false;
      const s = getSemaforoBidCoop({ monto: o.monto, matchScore: o.matchScore, amount: o.amount, amountType: o.amountType });
      return s.color === 'verde';
    }).length;
  }, [oportunidades]);

  const modules: Array<{
    id: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    badge?: number;
    subSections: { id: string; label: string }[];
  }> = [
    {
      id: 'dashboard',
      label: 'Inicio',
      icon: LayoutDashboard,
      subSections: [{ id: 'resumen', label: 'Resumen General' }]
    },
    {
      id: 'search',
      label: 'Búsqueda',
      icon: Search,
      badge: matchAltoCount > 0 ? matchAltoCount : undefined,
      subSections: [
        { id: 'compra-agil', label: '⚡ Compra Ágil' },
        { id: 'grandes-compras', label: '🛍️ Grandes Compras' },
        { id: 'licitaciones', label: '🏛️ Licitaciones' },
        { id: 'vistas', label: '💾 Vistas Guardadas' }
      ]
    },
    {
      id: 'business',
      label: 'Negocios',
      icon: Briefcase,
      subSections: [
        { id: 'mis-negocios', label: 'Mis Negocios' },
        { id: 'adjudicaciones', label: 'Seguimiento de Adjudicaciones' },
        { id: 'calendario', label: 'Calendario de Fechas' },
        { id: 'catalogo', label: 'Catálogo de Productos' },
        { id: 'documentos', label: 'Repositorio Documental' }
      ]
    },
    {
      id: 'analytics',
      label: 'Analítica',
      icon: BarChart3,
      subSections: [
        { id: 'reportes-8am', label: 'Reportes y Alertas 8 AM' },
        { id: 'inteligencia-mercado', label: 'Inteligencia de Mercado' },
        { id: 'desempeno-equipo', label: 'Desempeño y Reportes' }
      ]
    },
    {
      id: 'buyers',
      label: 'Compradores',
      icon: Building2,
      subSections: [{ id: 'directorio', label: 'Directorio' }]
    },
    {
      id: 'providers',
      label: 'Proveedores',
      icon: Truck,
      subSections: [{ id: 'directorio', label: 'Directorio Pymes' }]
    },
    {
      id: 'tareas',
      label: 'Tareas',
      icon: ClipboardList,
      badge: tareasPendientes && tareasPendientes > 0 ? tareasPendientes : undefined,
      subSections: [
        { id: 'tareas', label: 'Tareas' },
        { id: 'checklists', label: 'Checklists' }
      ]
    },
    {
      id: 'config',
      label: 'Ajustes',
      icon: Settings,
      subSections: [
        { id: 'perfil', label: 'Mi Perfil' },
        { id: 'parametros', label: 'Espacio de Trabajo' },
        { id: 'ia-prompt', label: 'Plantillas de IA' },
        { id: 'suscripcion', label: 'Planes y Suscripción' }
      ]
    },
    // Solo visible para el administrador del holding — mismo criterio de
    // autorización que ya aplica /api/usuarios en el servidor (defensa en
    // profundidad: ocultar la opción no reemplaza el chequeo real del backend).
    ...(currentUser.rolRaw === 'ADMIN_HOLDING'
      ? [
          {
            id: 'usuarios',
            label: 'Usuarios',
            icon: Users,
            subSections: [{ id: 'directorio', label: 'Usuarios y Permisos' }]
          }
        ]
      : [])
  ];

  return (
    <aside
      ref={sidebarRef}
      className={`${
        expanded ? 'w-60' : 'w-[72px]'
      } h-screen sticky top-0 overflow-y-auto bg-brand-950 border-r border-brand-900/60 flex flex-col justify-between py-5 shrink-0 relative z-50 transition-all duration-200`}
    >
      <div className={`flex flex-col gap-8 w-full ${expanded ? 'px-3' : 'items-center'}`}>
        {/* LOGO */}
        <div className={`flex items-center gap-2.5 ${expanded ? 'px-1' : 'flex-col'}`} title="BidCoop - Tu Plataforma en Mercado Público">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-500 via-sky-500 to-cyan-400 p-0.5 shadow-lg shadow-brand-600/30 shrink-0 flex items-center justify-center border-2 border-white/90">
            <div className="w-full h-full rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
              <img src="/bidcoop-logo.png" alt="BidCoop Logo" className="w-full h-full object-contain rounded-full" />
            </div>
          </div>
          {expanded && <span className="text-sm font-black text-white tracking-wide">BidCoop</span>}
        </div>

        {/* NAVIGATION */}
        <nav className={`flex flex-col gap-1 w-full ${expanded ? '' : 'px-2'}`}>
          {modules.map(m => {
            const Icon = m.icon;
            const isModuleActive = activeModule === m.id;
            const isHovered = hoveredModule === m.id;

            return (
              <div
                key={m.id}
                className="relative"
                onMouseEnter={() => !expanded && handleMouseEnter(m.id)}
                onMouseLeave={() => !expanded && handleMouseLeave()}
              >
                <button
                  onClick={() => {
                    onChangeView(m.id, m.subSections[0].id);
                    setHoveredModule(m.id);
                  }}
                  className={`${expanded ? 'w-full justify-start gap-3 px-3' : 'w-12 h-12 justify-center mx-auto'} h-11 rounded-xl flex items-center transition-all duration-150 relative group cursor-pointer ${
                    isModuleActive
                      ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                      : 'text-brand-200/70 hover:text-white hover:bg-white/5'
                  }`}
                  aria-label={m.label}
                >
                  <Icon className="w-[18px] h-[18px] shrink-0" />
                  {expanded && <span className="text-xs font-bold truncate">{m.label}</span>}
                  {!!m.badge && (
                    <span
                      className={`${
                        expanded ? 'ml-auto' : 'absolute -right-1 -top-1'
                      } min-w-[18px] h-[18px] px-1 rounded-full bg-amber-400 text-brand-950 text-[9px] font-black flex items-center justify-center shadow-sm`}
                    >
                      {m.badge > 99 ? '99+' : m.badge}
                    </span>
                  )}
                </button>

                {/* Submenú: flotante en modo contraído (hover), inline en modo expandido (siempre visible si activo) */}
                {(!expanded && isHovered) && (
                  <div
                    onMouseEnter={() => handleMouseEnter(m.id)}
                    onMouseLeave={handleMouseLeave}
                    className="absolute left-[64px] top-0 pl-3 w-64 z-50 animate-in fade-in slide-in-from-left-2 duration-150"
                  >
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-3 flex flex-col gap-1">
                      <div className="px-3 py-1.5 border-b border-slate-100 dark:border-slate-800 mb-1">
                        <span className="text-[10px] uppercase font-black text-brand-600 dark:text-brand-400 tracking-wider">{m.label}</span>
                      </div>
                      {m.subSections.map(sub => {
                        const isSubActive = activeModule === m.id && activeSubSection === sub.id;
                        return (
                          <button
                            key={sub.id}
                            onClick={() => {
                              onChangeView(m.id, sub.id);
                              setHoveredModule(null);
                              if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                            }}
                            className={`w-full text-left text-xs font-bold px-3 py-2 rounded-xl transition cursor-pointer ${
                              isSubActive
                                ? 'bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300'
                                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/80'
                            }`}
                          >
                            {sub.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {expanded && isModuleActive && m.subSections.length > 1 && (
                  <div className="mt-1 mb-1 ml-4 pl-3 border-l border-white/10 flex flex-col gap-0.5">
                    {m.subSections.map(sub => {
                      const isSubActive = activeSubSection === sub.id;
                      return (
                        <button
                          key={sub.id}
                          onClick={() => onChangeView(m.id, sub.id)}
                          className={`w-full text-left text-[11px] font-bold px-2.5 py-1.5 rounded-lg transition cursor-pointer truncate ${
                            isSubActive ? 'bg-white/10 text-white' : 'text-brand-200/60 hover:text-white hover:bg-white/5'
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

      {/* FOOTER */}
      <div className={`flex flex-col gap-3 w-full ${expanded ? 'px-3' : 'items-center'}`}>
        <button
          onClick={toggleExpanded}
          className={`${
            expanded ? 'w-full justify-start gap-3 px-3' : 'w-10 h-10 justify-center mx-auto'
          } h-10 rounded-xl text-brand-200/70 hover:text-white hover:bg-white/5 transition flex items-center cursor-pointer`}
          title={expanded ? 'Contraer menú' : 'Expandir menú'}
        >
          {expanded ? <ChevronLeft className="w-[18px] h-[18px]" /> : <ChevronRight className="w-[18px] h-[18px]" />}
          {expanded && <span className="text-xs font-bold">Contraer</span>}
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`${
            expanded ? 'w-full justify-start gap-3 px-3' : 'w-10 h-10 justify-center mx-auto'
          } h-10 rounded-xl bg-white/5 text-brand-200/70 hover:text-amber-300 hover:bg-white/10 transition flex items-center cursor-pointer`}
          title="Cambiar Tema"
        >
          {darkMode ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
          {expanded && <span className="text-xs font-bold">{darkMode ? 'Modo claro' : 'Modo oscuro'}</span>}
        </button>

        <div className={`flex items-center gap-2.5 ${expanded ? 'px-1 pt-1' : ''}`} title={currentUser.nombre}>
          <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center font-black text-white text-xs border border-white/10 shrink-0">
            {currentUser.nombre ? inicialesDe(currentUser.nombre) : '?'}
          </div>
          {expanded && (
            <span className="text-[11px] font-bold text-brand-200/80 truncate">{currentUser.nombre || 'Usuario'}</span>
          )}
        </div>
      </div>
    </aside>
  );
}
