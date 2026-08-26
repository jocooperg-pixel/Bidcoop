'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import DashboardModule from './components/DashboardModule';
import SearchModule from './components/SearchModule';
import BusinessModule from './components/BusinessModule';
import AnalyticsModule from './components/AnalyticsModule';
import ConfigModule from './components/ConfigModule';
import ProvidersModule from './components/ProvidersModule';
import BuyersModule from './components/BuyersModule';
import AssistantWidget from './components/AssistantWidget';
import ReportsNotificationsModule from './components/ReportsNotificationsModule';
import UsersModule from './components/UsersModule';
import TasksModule from './components/TasksModule';
import LoginScreen from './components/LoginScreen';

import { Oportunidad, Postulacion, Notificacion, VistaGuardada, Empresa } from './types';
import { calculateSmartCatalogMatch } from './utils/smartMatchEngine';
import { isVencida } from './utils/chileTime';
import { rolLabel, inicialesDe } from './utils/roles';
import {
  mockOportunidades,
  mockNotificaciones,
  mockVistasGuardadas,
  mockOrdenesCompra,
  mockPostulaciones
} from './mockData';

export default function Home() {
  // --- AUTHENTICATION STATE ---
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAuthChecked, setIsAuthChecked] = useState<boolean>(false);

  // Current User profile — SIEMPRE viene de la sesión real verificada en
  // servidor (/api/auth/me), nunca un valor de ejemplo. Antes esto estaba
  // hardcodeado a un usuario falso ("Jonathan Cooper" / jocooper@antigravity.cl)
  // y cualquier comentario, postulación o acción quedaba atribuida a esa
  // persona inexistente en vez de a quien realmente estaba logueado —
  // hacía imposible una auditoría real de quién hizo qué.
  const [currentUser, setCurrentUser] = useState({
    nombre: '',
    email: '',
    avatar: '',
    rol: '',
    rolRaw: '',
    id: null as string | null
  });

  useEffect(() => {
    // La sesión se verifica en el servidor (cookie firmada, no un flag
    // local) — sessionStorage ya no decide si el usuario está autenticado.
    fetch('/api/auth/me')
      .then(res => res.json())
      .then(data => {
        if (data.autenticado && data.usuario) {
          setIsAuthenticated(true);
          setCurrentUser({
            nombre: data.usuario.nombre,
            email: data.usuario.email,
            avatar: inicialesDe(data.usuario.nombre),
            rol: rolLabel(data.usuario.rol),
            rolRaw: data.usuario.rol,
            id: data.usuario.id
          });
        }
      })
      .finally(() => setIsAuthChecked(true));
  }, []);

  // --- GLOBAL STATES ---
  const [activeModule, setActiveModule] = useState<string>('dashboard');
  const [activeSubSection, setActiveSubSection] = useState<string>('resumen');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  
  // Profile Context Toggle: Consolidado, Aminorte (Escritorio), V-MOCCS (Escritorio / Convenio Marco)
  const [activeCompany, setActiveCompany] = useState<Empresa>('Consolidado');

  
  // Last sync timestamp state
  const [lastSyncTime, setLastSyncTime] = useState<string>('Pendiente');

  // Global search input state
  const [globalSearchText, setGlobalSearchText] = useState<string>('');

  // Selected Adjudicacion process code
  const [selectedAdjudicacionCodigo, setSelectedAdjudicacionCodigo] = useState<string | null>(null);

  // --- POSTULACIONES PERSISTENCE ---
  // La plataforma no tiene backend/base de datos: mockOportunidades siempre viene
  // "fresco" del último sync real (se sobreescribe en cada deploy), pero las
  // postulaciones que el usuario crea son trabajo suyo — deben sobrevivir a un
  // refresh, un redeploy, O DESDE OTRO COMPUTADOR: se guardan en Vercel Blob
  // (/api/postulaciones, store "bidcoop-data") — esa es la fuente de verdad
  // compartida. localStorage solo se usa como caché instantánea local mientras
  // se completa la primera carga desde el servidor (evita pantalla vacía un
  // instante), nunca como reemplazo del servidor.
  const POSTULACIONES_STORAGE_KEY = 'bidcoop_postulaciones_v1';

  const loadStoredPostulaciones = (): Postulacion[] => {
    if (typeof window === 'undefined') return mockPostulaciones;
    try {
      const raw = window.localStorage.getItem(POSTULACIONES_STORAGE_KEY);
      if (!raw) return mockPostulaciones;
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : mockPostulaciones;
    } catch {
      return mockPostulaciones;
    }
  };

  // Core Data Lists in state to allow dynamic reactivity across components
  const [postulaciones, setPostulaciones] = useState<Postulacion[]>(loadStoredPostulaciones);
  // No persistir al servidor hasta que la carga inicial desde /api/postulaciones
  // haya terminado — si no, el primer render (con la caché local, potencialmente
  // vieja o vacía) alcanzaría a sobreescribir datos reales ya guardados por otro
  // computador.
  const [postulacionesHidratadas, setPostulacionesHidratadas] = useState(false);

  const aplicarMarcadorPostulada = (ops: Oportunidad[], postuladasIds: Set<string>) =>
    ops.map(op => {
      if (postuladasIds.has(op.id)) {
        return op.estado === 'Postulada' ? op : { ...op, estado: 'Postulada' as const };
      }
      // Si tenía el marcador local pero el servidor ya no lo confirma, revertir
      // (evita quedar "atascado" en Postulada por una postulación borrada en otro computador).
      if (op.estado === 'Postulada') {
        return { ...op, estado: 'Publicada' as const };
      }
      return op;
    });

  const [oportunidades, setOportunidades] = useState<Oportunidad[]>(() => {
    // Reconstruir qué oportunidades ya fueron postuladas (según la caché local,
    // de entrada — se corrige apenas llega la respuesta real del servidor),
    // ya que mockOportunidades siempre trae el estado real de Mercado Público,
    // no el marcador local "Postulada".
    const postuladasIds = new Set(loadStoredPostulaciones().map(p => p.oportunidadId));

    return mockOportunidades.map(o => {
      if (postuladasIds.has(o.id)) {
        return { ...o, estado: 'Postulada' };
      }
      if (o.estado === 'Publicada' && isVencida(o.fechaCierre)) {
        return { ...o, estado: 'Vencida' };
      }
      return o;
    });
  });

  // El vencimiento no puede depender solo del cálculo al montar: una pestaña
  // abierta durante horas debe reflejar "Vencida" apenas pasa la hora de
  // cierre real (America/Santiago), no recién al recargar la página. Se
  // revisa cada minuto — barato, y evita mostrar como activa una oportunidad
  // que ya cerró (queja explícita del usuario: "vencidas que aparecen
  // activas").
  useEffect(() => {
    const marcarVencidas = () => {
      setOportunidades(prev => {
        let changed = false;
        const next = prev.map(o => {
          if (o.estado === 'Publicada' && isVencida(o.fechaCierre)) {
            changed = true;
            return { ...o, estado: 'Vencida' as const };
          }
          return o;
        });
        return changed ? next : prev;
      });
    };
    marcarVencidas();
    const interval = setInterval(marcarVencidas, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Cargar la fuente de verdad real (servidor) apenas monta — sobrescribe la
  // caché local con lo que realmente hay guardado, sin importar desde qué
  // computador se abra la plataforma.
  useEffect(() => {
    let cancelado = false;
    fetch('/api/postulaciones', { cache: 'no-store' })
      .then(res => (res.ok ? res.json() : []))
      .then((data: unknown) => {
        if (cancelado) return;
        const lista = Array.isArray(data) ? (data as Postulacion[]) : [];
        setPostulaciones(lista);
        const postuladasIds = new Set(lista.map(p => p.oportunidadId));
        setOportunidades(prev => aplicarMarcadorPostulada(prev, postuladasIds));
      })
      .catch(err => console.warn('No se pudo cargar postulaciones desde el servidor:', err))
      .finally(() => {
        if (!cancelado) setPostulacionesHidratadas(true);
      });
    return () => {
      cancelado = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persistir cada cambio real de postulaciones: caché local instantánea +
  // guardado real en el servidor (Vercel Blob) para que se vea en cualquier
  // computador.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(POSTULACIONES_STORAGE_KEY, JSON.stringify(postulaciones));
    } catch (err) {
      console.warn('No se pudo guardar postulaciones en localStorage:', err);
    }

    if (!postulacionesHidratadas) return;

    fetch('/api/postulaciones', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postulaciones)
    }).catch(err => console.warn('No se pudo guardar postulaciones en el servidor:', err));
  }, [postulaciones, postulacionesHidratadas]);

  // --- WATCHLIST PERSISTENCE ("Seguir Oportunidad") ---
  // Mismo patrón que postulaciones: Vercel Blob (/api/watchlist) como fuente
  // de verdad compartida entre computadores, localStorage solo como caché
  // instantánea mientras se completa la primera carga desde el servidor.
  const WATCHLIST_STORAGE_KEY = 'bidcoop_watchlist_v1';

  const loadStoredWatchlist = (): { oportunidadId: string; fechaAgregada: string }[] => {
    if (typeof window === 'undefined') return [];
    try {
      const raw = window.localStorage.getItem(WATCHLIST_STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  const [watchlist, setWatchlist] = useState<{ oportunidadId: string; fechaAgregada: string }[]>(loadStoredWatchlist);
  const [watchlistHidratada, setWatchlistHidratada] = useState(false);

  useEffect(() => {
    let cancelado = false;
    fetch('/api/watchlist', { cache: 'no-store' })
      .then(res => (res.ok ? res.json() : []))
      .then((data: unknown) => {
        if (cancelado) return;
        setWatchlist(Array.isArray(data) ? data : []);
      })
      .catch(err => console.warn('No se pudo cargar watchlist desde el servidor:', err))
      .finally(() => {
        if (!cancelado) setWatchlistHidratada(true);
      });
    return () => {
      cancelado = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(WATCHLIST_STORAGE_KEY, JSON.stringify(watchlist));
    } catch (err) {
      console.warn('No se pudo guardar watchlist en localStorage:', err);
    }

    if (!watchlistHidratada) return;

    fetch('/api/watchlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(watchlist)
    }).catch(err => console.warn('No se pudo guardar watchlist en el servidor:', err));
  }, [watchlist, watchlistHidratada]);

  const followedOps = useMemo(() => {
    const map: Record<string, boolean> = {};
    watchlist.forEach(w => { map[w.oportunidadId] = true; });
    return map;
  }, [watchlist]);

  const handleToggleFollow = (opId: string) => {
    setWatchlist(prev => {
      const isFollowed = prev.some(w => w.oportunidadId === opId);
      if (isFollowed) return prev.filter(w => w.oportunidadId !== opId);
      return [...prev, { oportunidadId: opId, fechaAgregada: new Date().toISOString() }];
    });
  };

  const [ordenesCompra, setOrdenesCompra] = useState(mockOrdenesCompra);
  const [notifications, setNotifications] = useState<Notificacion[]>(mockNotificaciones);
  const [vistasGuardadas, setVistasGuardadas] = useState<VistaGuardada[]>(mockVistasGuardadas);
  const [selectedOpportunity, setSelectedOpportunity] = useState<Oportunidad | null>(null);

  // Global search preferences state
  const [globalPrefs, setGlobalPrefs] = useState({
    rubros: [
      'Aseo e Higiene',
      'Artículos de Escritorio y Oficina',
      'Tecnología y Hardware',
      'Insumos Médicos y Salud',
      'Ferretería y Materiales',
      'Alimentos y Catering',
      'Servicios Generales',
      'Todos'
    ],
    modalidades: ['Compra Ágil', 'Licitación', 'Convenio Marco', 'Grandes Compras'],
    region: 'Todos',
    montoMinimo: 0,
  });

  // Filtered lists based on active company context and setup preferences
  const filteredOportunidades = useMemo(() => {
    let list = oportunidades;
    if (activeCompany === 'Aminorte') {
      list = oportunidades.filter(o => o.empresaMatch === 'Aminorte');
    } else if (activeCompany === 'V-MOCCS') {
      list = oportunidades.filter(o => o.empresaMatch === 'V-MOCCS' || o.empresaMatch === 'Aminorte');
    }

    // Apply global preferences
    list = list.filter(o => 
      (globalPrefs.rubros.includes('Todos') || globalPrefs.rubros.includes(o.rubro)) &&
      globalPrefs.modalidades.includes(o.modalidad) &&
      (globalPrefs.region === 'Todos' || o.region === globalPrefs.region) &&
      o.monto >= globalPrefs.montoMinimo
    );

    // Sort newest processes first (by publication or closing date descending)
    return [...list].sort((a, b) => {
      const dateA = a.fechaPublicacion || a.fechaCierre || '';
      const dateB = b.fechaPublicacion || b.fechaCierre || '';
      return dateB.localeCompare(dateA);
    });

  }, [oportunidades, activeCompany, globalPrefs]);

  const filteredNotifications = useMemo(() => {
    if (activeCompany === 'Aminorte') {
      return notifications.filter(n => !n.empresaMatch || n.empresaMatch === 'Aminorte');
    }

    if (activeCompany === 'V-MOCCS') {
      return notifications.filter(n => !n.empresaMatch || n.empresaMatch === 'V-MOCCS' || n.empresaMatch === 'Aminorte');
    }
    return notifications;
  }, [notifications, activeCompany]);

  const filteredPostulaciones = useMemo(() => {
    return postulaciones.filter(p => {
      const op = filteredOportunidades.find(o => o.id === p.oportunidadId);
      return !!op;
    });
  }, [postulaciones, filteredOportunidades]);

  const filteredOrdenesCompra = useMemo(() => {
    return ordenesCompra.filter(oc => {
      const op = filteredOportunidades.find(o => o.id === oc.oportunidadId);
      return !!op;
    });
  }, [ordenesCompra, filteredOportunidades]);

  // Dictionary to store technical comments by bid ID
  const [teamComments, setTeamComments] = useState<Record<string, Oportunidad['comentarios']>>({});

  // Sync dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Sincronizar localStorage si el usuario quiere que se guarde el estado
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  // Los datos de oportunidades vienen ÚNICAMENTE del motor de sync Python
  // (scripts/sync_mercadopublico.py -> mockData.ts). Aquí solo se consulta el estado
  // real de esa sincronización para mostrarlo en pantalla — no se vuelve a construir
  // ni a inventar ninguna oportunidad en el navegador.
  useEffect(() => {
    handleCheckSyncStatus(true);
  }, []);

  const toggleDarkMode = (dark: boolean) => {
    setDarkMode(dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  };

  // --- ACTIONS HANDLERS ---
  const handleNavigateView = (module: string, subSection: string) => {
    setActiveModule(module);
    setActiveSubSection(subSection);
    // If navigating away from search, keep or clear the selected item depending on destination
    if (module !== 'search') {
      setSelectedOpportunity(null);
    }
  };

  const handleMarkNotificationRead = (id: string) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, leida: true } : n))
    );
  };

  const handleSelectOpportunityFromGlobal = (op: Oportunidad | null) => {
    setSelectedOpportunity(op);
    setActiveModule('search');
    setActiveSubSection('buscador');
  };

  const handleSearchQueryGlobal = (query: string) => {
    setGlobalSearchText(query);
    setActiveModule('search');
    setActiveSubSection('buscador');
    setSelectedOpportunity(null);
  };

  const handleSaveVistaGuardada = (view: VistaGuardada) => {
    setVistasGuardadas(prev => [view, ...prev]);
  };

  // BidCoop no tiene integración de escritura con Mercado Público — esto
  // SOLO guarda la preparación interna de la oferta (Borrador). Nunca se
  // debe afirmar que algo fue "transmitido" u "enviado al organismo", eso
  // pasa fuera de la plataforma y requiere confirmación manual explícita
  // (ver handleConfirmarEnvioPostulacion).
  const handlePostularOpportunity = (postulacion: Postulacion) => {
    setPostulaciones(prev => [postulacion, ...prev]);

    setOportunidades(prev =>
      prev.map(op =>
        op.id === postulacion.oportunidadId
          ? { ...op, estado: 'Postulada' }
          : op
      )
    );

    setSelectedOpportunity(null);

    const newAlert: Notificacion = {
      id: `nt-${Date.now()}`,
      leida: false,
      tipo: 'sistema',
      fecha: new Date().toISOString().replace('T', ' ').slice(0, 16),
      titulo: 'Preparación de oferta guardada',
      descripcion: `Oferta por $${postulacion.montoOferta.toLocaleString('es-CL')} CLP para ${postulacion.oportunidadCodigo} guardada como borrador. Confirma el envío real cuando la hayas postulado en el portal oficial de Mercado Público.`,
      oportunidadId: postulacion.oportunidadId
    };
    setNotifications(prev => [newAlert, ...prev]);

    setActiveModule('business');
    setActiveSubSection('mis-negocios');
  };

  // Único punto donde una postulación pasa de Borrador a Enviada — requiere
  // confirmación manual explícita del usuario (checkbox), nunca automática.
  // Queda registrado quién y cuándo confirmó, como evidencia de auditoría.
  const handleConfirmarEnvioPostulacion = (postulacionId: string) => {
    const ahora = new Date().toISOString();
    setPostulaciones(prev =>
      prev.map(p =>
        p.id === postulacionId
          ? { ...p, estado: 'Enviada', confirmadoPor: currentUser.email, confirmadoEn: ahora, fechaActualizacion: ahora.split('T')[0] }
          : p
      )
    );
  };

  const handleUpdatePostulacion = (
    postulacionId: string,
    changes: Pick<Postulacion, 'responsable' | 'proximaAccion' | 'fechaProximaAccion'>
  ) => {
    const ahora = new Date().toISOString();
    setPostulaciones(prev =>
      prev.map(p => {
        if (p.id !== postulacionId) return p;

        const cambios: string[] = [];
        if (p.responsable !== changes.responsable) cambios.push(`Responsable: ${changes.responsable || 'Sin asignar'}`);
        if (p.proximaAccion !== changes.proximaAccion) cambios.push(`Próxima acción: ${changes.proximaAccion || 'Sin definir'}`);
        if (p.fechaProximaAccion !== changes.fechaProximaAccion) cambios.push(`Fecha próxima acción: ${changes.fechaProximaAccion || 'Sin definir'}`);

        return {
          ...p,
          ...changes,
          fechaActualizacion: ahora.split('T')[0],
          historialSeguimiento: cambios.length > 0
            ? [
                ...(p.historialSeguimiento || []),
                {
                  fecha: ahora,
                  usuario: currentUser.email || currentUser.nombre || 'Usuario autenticado',
                  cambios
                }
              ]
            : p.historialSeguimiento
        };
      })
    );
  };

  const handleAddComment = (opId: string, texto: string) => {
    const newComment = {
      id: `comm-${Date.now()}`,
      usuario: currentUser.nombre,
      rol: 'Admin',
      fecha: new Date().toISOString().replace('T', ' ').slice(0, 16),
      texto
    };

    setTeamComments(prev => {
      const existingComments = prev[opId] || oportunidades.find(o => o.id === opId)?.comentarios || [];
      return {
        ...prev,
        [opId]: [...existingComments, newComment]
      };
    });
  };

  const handleUpdateProfile = (name: string, email: string) => {
    setCurrentUser(prev => ({
      ...prev,
      nombre: name,
      email: email,
      avatar: name.split(' ').map(n => n[0]).join('').toUpperCase()
    }));
  };

  // Único motor de datos: scripts/sync_mercadopublico.py -> mockData.ts.
  // Esta función NO reconstruye ni reclasifica oportunidades — solo lee y muestra
  // el estado REAL de esa sincronización (data/sync_meta.json vía /api/sync-status)
  // para que el usuario pueda validar la información (última corrida, cobertura,
  // % de montos validados, exclusiones por falta de datos reales).
  const handleCheckSyncStatus = async (silent = false) => {
    try {
      const res = await fetch('/api/sync-status');
      if (!res.ok) throw new Error('No se pudo leer el estado de sincronización.');
      const meta = await res.json();

      if (meta.ultimaSincronizacionExitosa) {
        const d = new Date(meta.ultimaSincronizacionExitosa);
        setLastSyncTime(d.toLocaleString('es-CL', { dateStyle: 'short', timeStyle: 'short' }));
      }

      if (!silent) {
        const audit = meta.comprasAgilesAudit || {};
        alert(
          `Estado real de sincronización (motor único: BidCoop v${meta.syncVersion || '?'})\n\n` +
          `Última corrida: ${meta.ultimaSincronizacionExitosa ? new Date(meta.ultimaSincronizacionExitosa).toLocaleString('es-CL') : 'N/D'}\n` +
          `Oportunidades en plataforma: ${meta.registrosEnPlataforma ?? '?'}\n` +
          `Confirmadas con dato real: ${meta.registrosConfirmados ?? '?'}\n` +
          `Compras Ágiles con monto validado: ${audit.conMontoValido ?? '?'} / ${audit.total ?? '?'} (${audit.pctValidado ?? '?'}%)\n` +
          `Excluidas por falta de datos reales: ${meta.excluidosSinDatosReales ?? '?'}\n` +
          `Excluidas por no calzar con ninguna empresa activa: ${meta.excluidosSinMatchEmpresa ?? '?'}\n\n` +
          `Para traer datos nuevos de Mercado Público, corre scripts/sync_mercadopublico.py y sube el resultado — la plataforma nunca genera datos por su cuenta.`
        );
      }
    } catch (err: unknown) {
      console.error(err);
      if (!silent) {
        const msg = err instanceof Error ? err.message : String(err);
        alert('Error al consultar el estado de sincronización: ' + msg);
      }
    }
  };

  // Forma parcial y real del JSON crudo que devuelve la API pública de
  // Mercado Público para un código consultado manualmente — solo los campos
  // que este handler realmente lee. La API es externa y no tenemos un
  // contrato de tipos oficial, por eso los campos son opcionales.
  interface MPApiItemDetalle {
    Descripcion?: string;
    NombreProducto?: string;
    Correlativo?: number;
    Cantidad?: number;
    PrecioUnitario?: number;
  }
  interface MPApiItem {
    Nombre?: string;
    Descripcion?: string;
    CodigoExterno?: string;
    Rubro?: string;
    Region?: string;
    Estado?: string;
    Organismo?: string;
    MontoEstimado?: number;
    FechaPublicacion?: string;
    FechaCierre?: string;
    Comprador?: { NombreOrganismo?: string; RutUnico?: string; RutUnidad?: string; RegionUnidad?: string };
    Items?: { Listado?: MPApiItemDetalle[] };
  }
  const VALID_OPPORTUNITY_STATES = ['Publicada', 'Cerrada', 'Proveedor seleccionado', 'Cancelada', 'Adjudicada', 'Desierta', 'En Evaluación', 'Postulada'] as const;

  const handleQueryApiBidding = async (code: string) => {
    if (!code.trim()) return;
    const cleanCode = code.trim();
    
    // Check if code exists in local opportunities first
    const existingLocal = oportunidades.find(
      o => o.codigo.toLowerCase() === cleanCode.toLowerCase() || o.id.toLowerCase() === cleanCode.toLowerCase()
    );

    if (existingLocal) {
      setSelectedOpportunity(existingLocal);
      setActiveModule('search');
      setActiveSubSection('buscador');
      return;
    }

    try {
      const response = await fetch(`/api/mercadopublico?codigo=${encodeURIComponent(cleanCode)}`);
      let data: { Listado?: MPApiItem[] } | null = null;
      if (response.ok) {
        data = await response.json();
      }

      if (data && data.Listado && data.Listado.length > 0) {
        const item = data.Listado[0];

        const title = item.Nombre || item.Descripcion || `Proceso ${item.CodigoExterno}`;
        const descripcionReal: string = item.Descripcion || '';

        // Match real por catálogo — si no hay keyword real, queda sin asignar
        // (nunca se fuerza a Aminorte/V-MOCCS por defecto).
        const smart = calculateSmartCatalogMatch({
          titulo: title,
          descripcion: descripcionReal,
          rubro: item.Rubro,
          items: item.Items?.Listado
            ? item.Items.Listado.map((it: MPApiItemDetalle) => ({ producto: it.Descripcion || it.NombreProducto || '', especificacionTecnica: '' }))
            : []
        });

        const codeUpper = (item.CodigoExterno || cleanCode).toUpperCase();
        const titleLower = title.toLowerCase();
        let modality: 'Compra Ágil' | 'Licitación' | 'Convenio Marco' = 'Licitación';
        if (codeUpper.includes('-CO') || codeUpper.includes('COT')) {
          modality = 'Compra Ágil';
        } else if (codeUpper.includes('-CM') || titleLower.includes('convenio marco')) {
          modality = 'Convenio Marco';
        }

        // Monto: solo el valor real informado por la API. Si no viene, se muestra
        // 0 / "No informado" en la UI — nunca se inventa un número al azar.
        const montoReal = (typeof item.MontoEstimado === 'number' && item.MontoEstimado > 0) ? item.MontoEstimado : 0;

        const newLic: Oportunidad = {
          id: `op-${item.CodigoExterno || cleanCode}`,
          codigo: item.CodigoExterno || cleanCode,
          titulo: title,
          organismo: item.Comprador?.NombreOrganismo || item.Organismo || 'No informado',
          organismoRut: item.Comprador?.RutUnico || item.Comprador?.RutUnidad || 'No informado',
          // Mercado Público no expone días de pago ni riesgo del organismo vía
          // API — 'Sin evaluar'/null es el único valor honesto sin fuente real.
          organismoPagoDias: null,
          organismoRiesgo: 'Sin evaluar',
          rubro: item.Rubro || smart.rubroRecomendado || 'Artículos de Escritorio y Oficina',
          region: item.Region || item.Comprador?.RegionUnidad || 'No informado',
          monto: montoReal,
          fechaPublicacion: item.FechaPublicacion ? item.FechaPublicacion.split('T')[0] : 'No informado',
          fechaCierre: item.FechaCierre ? item.FechaCierre.split('T')[0] : 'No informado',
          matchScore: smart.matchScore,
          riesgo: 'Sin evaluar',
          empresaMatch: smart.companyMatch || undefined,
          modalidad: modality,
          descripcion: descripcionReal || 'Sin descripción informada por Mercado Público para este proceso.',
          estado: (VALID_OPPORTUNITY_STATES as readonly string[]).includes(item.Estado || '')
            ? (item.Estado as Oportunidad['estado'])
            : 'Publicada',
          cronograma: [
            { hito: 'Publicación de bases', fecha: item.FechaPublicacion?.replace('T', ' ').slice(0, 16) || 'No informado' },
            { hito: 'Cierre de ofertas', fecha: item.FechaCierre?.replace('T', ' ').slice(0, 16) || 'No informado' }
          ],
          documentos: [
            { nombre: `Ver Ficha Oficial en Mercado Público (${item.CodigoExterno || cleanCode})`, tipo: 'link', tamanho: `https://www.mercadopublico.cl/Procurement/Modules/RFB/DetailsAcquisition.aspx?qs=PD94lVIVFUe5Sth1FXBBAA==&IdLicitacion=${item.CodigoExterno || cleanCode}` }
          ],
          items: item.Items?.Listado?.length
            ? item.Items.Listado.map((it: MPApiItemDetalle, idx: number) => ({
                sku: `ITEM-${it.Correlativo || idx + 1}`,
                producto: it.Descripcion || it.NombreProducto || title,
                cantidad: it.Cantidad || 1,
                precioUnitario: it.PrecioUnitario || 0
              }))
            : [{ sku: 'ITEM-1', producto: title, cantidad: 1, precioUnitario: montoReal }],
          // Mercado Público no expone las ponderaciones reales de evaluación vía
          // API — dejar vacío en vez de inventar un criterio (misma regla ya
          // aplicada en scripts/sync_mercadopublico.py).
          criteriosEvaluacion: [],
          preguntas: [],
          comentarios: [],
          competidoresPropuestos: []
        };

        setOportunidades(prev => {
          const exists = prev.some(l => l.codigo.toLowerCase() === newLic.codigo.toLowerCase());
          return exists ? prev : [newLic, ...prev];
        });

        setSelectedOpportunity(newLic);
        setActiveModule('search');
        setActiveSubSection('buscador');

        const newAlert: Notificacion = {
          id: `nt-${Date.now()}`,
          leida: false,
          tipo: 'sistema',
          fecha: new Date().toISOString().replace('T', ' ').slice(0, 16),
          titulo: 'Licitación Consultada',
          descripcion: `Se consultó el proceso ${newLic.codigo} directamente en Mercado Público.`,
          oportunidadId: newLic.id
        };
        setNotifications(prev => [newAlert, ...prev]);
        return;
      }

      // Check in mockOportunidades if not returned by API
      const fallbackMock = mockOportunidades.find(
        o => o.codigo.toLowerCase() === cleanCode.toLowerCase() || o.id.toLowerCase() === cleanCode.toLowerCase()
      );

      if (fallbackMock) {
        setOportunidades(prev => {
          const exists = prev.some(l => l.codigo.toLowerCase() === fallbackMock.codigo.toLowerCase());
          return exists ? prev : [fallbackMock, ...prev];
        });
        setSelectedOpportunity(fallbackMock);
        setActiveModule('search');
        setActiveSubSection('buscador');
        return;
      }

      alert(`No se encontró la licitación o compra ágil ${cleanCode} en Mercado Público.`);
    } catch (err: unknown) {
      console.error(err);
      // Try local fallback as last resort before alerting error
      const fallbackMock = mockOportunidades.find(
        o => o.codigo.toLowerCase() === cleanCode.toLowerCase() || o.id.toLowerCase() === cleanCode.toLowerCase()
      );

      if (fallbackMock) {
        setOportunidades(prev => {
          const exists = prev.some(l => l.codigo.toLowerCase() === fallbackMock.codigo.toLowerCase());
          return exists ? prev : [fallbackMock, ...prev];
        });
        setSelectedOpportunity(fallbackMock);
        setActiveModule('search');
        setActiveSubSection('buscador');
        return;
      }

      const msg = err instanceof Error ? err.message : String(err);
      alert(`Error al buscar licitación: ${msg}`);
    }
  };

  const handleLogout = () => {
    fetch('/api/auth/logout', { method: 'POST' }).finally(() => setIsAuthenticated(false));
  };

  if (!isAuthChecked) {
    return <div className="min-h-screen bg-slate-950" />;
  }

  if (!isAuthenticated) {
    // Reload completo (no solo setIsAuthenticated) para que todos los
    // efectos que hacen fetch a APIs protegidas (sync-status, postulaciones,
    // watchlist, etc.) se ejecuten de nuevo con la cookie de sesión ya
    // presente — esos efectos corren una sola vez al montar el componente.
    return <LoginScreen onLoginSuccess={() => window.location.reload()} />;
  }

  return (
    <div className={`h-screen flex bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-hidden`}>
      
      {/* 1. SIDEBAR VERTICAL NAV */}
      <Sidebar
        activeModule={activeModule}
        activeSubSection={activeSubSection}
        onChangeView={handleNavigateView}
        darkMode={darkMode}
        setDarkMode={toggleDarkMode}
        currentUser={currentUser}
        oportunidades={oportunidades}
      />

      {/* 2. MAIN LAYOUT FLEX COLUMN — Topbar fijo, solo <main> hace scroll */}
      <div className="flex-1 flex flex-col min-w-0 h-full min-h-0">

        {/* Top bar header */}
        <Topbar
          notifications={filteredNotifications}
          oportunidades={oportunidades}
          onMarkNotificationRead={handleMarkNotificationRead}
          onSelectOpportunity={handleSelectOpportunityFromGlobal}
          onSearchQuery={handleSearchQueryGlobal}
          currentUser={currentUser}
          activeCompany={activeCompany}
          onChangeCompany={setActiveCompany}
          lastSyncTime={lastSyncTime}
          onLogout={handleLogout}
          onNavigateView={handleNavigateView}
          onSelectAdjudicacionCode={setSelectedAdjudicacionCodigo}
        />

        {/* Core dynamic content container */}
        <main className="flex-1 p-6 overflow-y-auto">
          {activeModule === 'dashboard' && (
            <DashboardModule
              oportunidades={oportunidades}
              postulaciones={postulaciones}
              onSelectOpportunity={handleSelectOpportunityFromGlobal}
              onNavigateView={handleNavigateView}
              currentUser={currentUser}
              globalPrefs={globalPrefs}
              onChangePrefs={setGlobalPrefs}
              followedOps={followedOps}
            />
          )}

          {activeModule === 'search' && (
            <SearchModule
              oportunidades={filteredOportunidades}
              vistasGuardadas={vistasGuardadas}
              activeSubSection={activeSubSection}
              selectedOpportunity={selectedOpportunity}
              onSelectOpportunity={setSelectedOpportunity}
              onSaveVistaGuardada={handleSaveVistaGuardada}
              onPostular={handlePostularOpportunity}
              postulaciones={postulaciones}
              currentUser={currentUser}
              onConfirmarEnvio={handleConfirmarEnvioPostulacion}
              teamComments={teamComments}
              onAddComment={handleAddComment}
              onImportFromApi={handleQueryApiBidding}
              onSyncRealTime={handleCheckSyncStatus}
              onUpdateOpportunityItems={(opId, newItems) => {
                setOportunidades(prev => prev.map(op => {
                  if (op.id === opId || op.codigo === opId) {
                    const total = newItems.reduce((sum, it) => sum + (it.cantidad * it.precioUnitario), 0);
                    return {
                      ...op,
                      items: newItems,
                      monto: total
                    };
                  }
                  return op;
                }));
              }}
              globalSearchText={globalSearchText}
              onGlobalSearchTextChange={setGlobalSearchText}
              followedOps={followedOps}
              onToggleFollow={handleToggleFollow}
            />
          )}

          {activeModule === 'business' && (
            <BusinessModule
              activeSubSection={activeSubSection}
              oportunidades={filteredOportunidades}
              postulaciones={filteredPostulaciones}
              ordenesCompra={filteredOrdenesCompra}
              onSelectOpportunity={handleSelectOpportunityFromGlobal}
              onNavigateToTab={handleNavigateView}
              activeCompany={activeCompany}
              selectedAdjudicacionCodigo={selectedAdjudicacionCodigo}
              onUpdatePostulacion={handleUpdatePostulacion}
            />
          )}

          {activeModule === 'analytics' && activeSubSection === 'reportes-8am' && (
            <ReportsNotificationsModule
              oportunidades={oportunidades}
              empresaActiva={activeCompany}
              darkMode={darkMode}
            />
          )}

          {activeModule === 'analytics' && activeSubSection !== 'reportes-8am' && (
            <AnalyticsModule
              activeSubSection={activeSubSection}
              oportunidades={filteredOportunidades}
              postulaciones={filteredPostulaciones}
              onNavigateView={handleNavigateView}
            />
          )}

          {activeModule === 'buyers' && (
            <BuyersModule />
          )}

          {activeModule === 'providers' && (
            <ProvidersModule />
          )}

          {activeModule === 'config' && (
            <ConfigModule
              activeSubSection={activeSubSection}
              currentUser={currentUser}
              onUpdateProfile={handleUpdateProfile}
            />
          )}

          {activeModule === 'usuarios' && (
            <UsersModule currentUser={currentUser} currentUserId={currentUser.id} />
          )}

          {activeModule === 'tareas' && (
            <TasksModule />
          )}
        </main>
      </div>

      <AssistantWidget />
    </div>
  );
}
