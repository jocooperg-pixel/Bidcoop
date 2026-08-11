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
import ReportsNotificationsModule from './components/ReportsNotificationsModule';
import LoginScreen from './components/LoginScreen';

import { Oportunidad, Postulacion, MiembroEquipo, Notificacion, VistaGuardada, Empresa } from './types';
import { calculateSmartCatalogMatch } from './utils/smartMatchEngine';
import {
  mockOportunidades,
  mockMiembrosEquipo,
  mockNotificaciones,
  mockVistasGuardadas,
  mockOrdenesCompra,
  mockPostulaciones
} from './mockData';

export default function Home() {
  // --- AUTHENTICATION STATE ---
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAuthChecked, setIsAuthChecked] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem('bidcoop_authenticated') === 'true') {
        setIsAuthenticated(true);
      }
      setIsAuthChecked(true);
    }
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
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const todayStr = `${year}-${month}-${day}`;

    // Reconstruir qué oportunidades ya fueron postuladas (según la caché local,
    // de entrada — se corrige apenas llega la respuesta real del servidor),
    // ya que mockOportunidades siempre trae el estado real de Mercado Público,
    // no el marcador local "Postulada".
    const postuladasIds = new Set(loadStoredPostulaciones().map(p => p.oportunidadId));

    return mockOportunidades.map(o => {
      if (postuladasIds.has(o.id)) {
        return { ...o, estado: 'Postulada' };
      }
      if (o.estado === 'Publicada' && o.fechaCierre && o.fechaCierre < todayStr) {
        return { ...o, estado: 'Cerrada' };
      }
      return o;
    });
  });

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
  const [teamMembers, setTeamMembers] = useState<MiembroEquipo[]>(mockMiembrosEquipo);
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

  // Current User profile state
  const [currentUser, setCurrentUser] = useState({
    nombre: 'Jonathan Cooper',
    email: 'jocooper@antigravity.cl',
    avatar: 'JC',
    rol: 'Director de Licitaciones B2B'
  });

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
    handleCheckSyncStatus();
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

  const handleInviteMember = (nombre: string, email: string, rol: 'Admin' | 'Gestor' | 'Lector') => {
    const newMember: MiembroEquipo = {
      id: `usr-${Date.now()}`,
      nombre,
      rol,
      avatar: nombre.split(' ').map(n => n[0]).join('').toUpperCase(),
      estado: 'Invitado',
      email
    };
    setTeamMembers(prev => [...prev, newMember]);

    // Push system alert
    const alertId = `nt-${Date.now()}`;
    const newAlert: Notificacion = {
      id: alertId,
      leida: false,
      tipo: 'sistema',
      fecha: new Date().toISOString().replace('T', ' ').slice(0, 16),
      titulo: 'Colaborador Invitado',
      descripcion: `Se envió una invitación de acceso a ${nombre} con privilegios de ${rol}.`
    };
    setNotifications(prev => [newAlert, ...prev]);
  };

  const handleSaveVistaGuardada = (view: VistaGuardada) => {
    setVistasGuardadas(prev => [view, ...prev]);
  };

  const handlePostularOpportunity = (postulacion: Postulacion) => {
    // 1. Add postulation
    setPostulaciones(prev => [postulacion, ...prev]);

    // 2. Update Opportunity state in global state
    setOportunidades(prev =>
      prev.map(op =>
        op.id === postulacion.oportunidadId
          ? { ...op, estado: 'Postulada' }
          : op
      )
    );

    // 3. Clear selected opportunity after submitting postulation
    setSelectedOpportunity(null);

    // 4. Create system alert
    const newAlert: Notificacion = {
      id: `nt-${Date.now()}`,
      leida: false,
      tipo: 'sistema',
      fecha: new Date().toISOString().replace('T', ' ').slice(0, 16),
      titulo: 'Postulación Completada',
      descripcion: `La oferta por $${postulacion.montoOferta.toLocaleString('es-CL')} CLP para ${postulacion.oportunidadCodigo} fue transmitida con éxito.`,
      oportunidadId: postulacion.oportunidadId
    };
    setNotifications(prev => [newAlert, ...prev]);

    // 5. Navigate to Mis Negocios to see the postulation in pipeline
    setActiveModule('business');
    setActiveSubSection('mis-negocios');
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

  const handleUpdateRole = (id: string, newRol: 'Admin' | 'Gestor' | 'Lector') => {
    setTeamMembers(prev =>
      prev.map(m => (m.id === id ? { ...m, rol: newRol } : m))
    );
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
    } catch (err: any) {
      console.error(err);
      if (!silent) {
        alert('Error al consultar el estado de sincronización: ' + err.message);
      }
    }
  };

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
      let data: any = null;
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
            ? item.Items.Listado.map((it: any) => ({ producto: it.Descripcion || it.NombreProducto || '', especificacionTecnica: '' }))
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
          organismoPagoDias: 30,
          organismoRiesgo: 'Bajo',
          rubro: item.Rubro || smart.rubroRecomendado || 'Artículos de Escritorio y Oficina',
          region: item.Region || item.Comprador?.RegionUnidad || 'No informado',
          monto: montoReal,
          fechaPublicacion: item.FechaPublicacion ? item.FechaPublicacion.split('T')[0] : 'No informado',
          fechaCierre: item.FechaCierre ? item.FechaCierre.split('T')[0] : 'No informado',
          matchScore: smart.matchScore,
          riesgo: 'Bajo',
          empresaMatch: smart.companyMatch || undefined,
          modalidad: modality,
          descripcion: descripcionReal || 'Sin descripción informada por Mercado Público para este proceso.',
          estado: item.Estado || 'Publicada',
          cronograma: [
            { hito: 'Publicación de bases', fecha: item.FechaPublicacion?.replace('T', ' ').slice(0, 16) || 'No informado' },
            { hito: 'Cierre de ofertas', fecha: item.FechaCierre?.replace('T', ' ').slice(0, 16) || 'No informado' }
          ],
          documentos: [
            { nombre: `Ver Ficha Oficial en Mercado Público (${item.CodigoExterno || cleanCode})`, tipo: 'link', tamanho: `https://www.mercadopublico.cl/Procurement/Modules/RFB/DetailsAcquisition.aspx?qs=PD94lVIVFUe5Sth1FXBBAA==&IdLicitacion=${item.CodigoExterno || cleanCode}` }
          ],
          items: item.Items?.Listado?.length
            ? item.Items.Listado.map((it: any, idx: number) => ({
                sku: `ITEM-${it.Correlativo || idx + 1}`,
                producto: it.Descripcion || it.NombreProducto || title,
                cantidad: it.Cantidad || 1,
                precioUnitario: it.PrecioUnitario || 0
              }))
            : [{ sku: 'ITEM-1', producto: title, cantidad: 1, precioUnitario: montoReal }],
          criteriosEvaluacion: [
            { aspecto: 'Precio Ofertado', ponderacion: 100, descripcion: 'Menor costo' }
          ],
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
    } catch (err: any) {
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

      alert(`Error al buscar licitación: ${err.message || err}`);
    }
  };

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('bidcoop_authenticated');
    }
    setIsAuthenticated(false);
  };

  if (!isAuthChecked) {
    return <div className="min-h-screen bg-slate-950" />;
  }

  if (!isAuthenticated) {
    return <LoginScreen onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className={`min-h-screen flex bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300`}>
      
      {/* 1. SIDEBAR VERTICAL NAV */}
      <Sidebar
        activeModule={activeModule}
        activeSubSection={activeSubSection}
        onChangeView={handleNavigateView}
        darkMode={darkMode}
        setDarkMode={toggleDarkMode}
      />

      {/* 2. MAIN LAYOUT FLEX COLUMN */}
      <div className="flex-1 flex flex-col min-w-0">
        
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
              teamMembers={teamMembers}
              onInviteMember={handleInviteMember}
              onSelectOpportunity={handleSelectOpportunityFromGlobal}
              currentUser={currentUser}
              globalPrefs={globalPrefs}
              onChangePrefs={setGlobalPrefs}
            />
          )}

          {activeModule === 'search' && (
            <SearchModule
              oportunidades={filteredOportunidades}
              vistasGuardadas={vistasGuardadas}
              teamMembers={teamMembers}
              activeSubSection={activeSubSection}
              selectedOpportunity={selectedOpportunity}
              onSelectOpportunity={setSelectedOpportunity}
              onSaveVistaGuardada={handleSaveVistaGuardada}
              onPostular={handlePostularOpportunity}
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

          {activeModule === 'providers' && (
            <ProvidersModule />
          )}

          {activeModule === 'config' && (
            <ConfigModule
              activeSubSection={activeSubSection}
              teamMembers={teamMembers}
              onUpdateRole={handleUpdateRole}
              currentUser={currentUser}
              onUpdateProfile={handleUpdateProfile}
            />
          )}
        </main>
      </div>

    </div>
  );
}
