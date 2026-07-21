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

import { Oportunidad, Postulacion, MiembroEquipo, Notificacion, VistaGuardada } from './types';
import {
  mockOportunidades,
  mockMiembrosEquipo,
  mockNotificaciones,
  mockVistasGuardadas,
  mockOrdenesCompra
} from './mockData';

export default function Home() {
  // --- GLOBAL STATES ---
  const [activeModule, setActiveModule] = useState<string>('dashboard');
  const [activeSubSection, setActiveSubSection] = useState<string>('resumen');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  
  // Profile Context Toggle: Consolidado, Inder-Roll (Aseo), Aminorte (Escritorio)
  const [activeCompany, setActiveCompany] = useState<'Consolidado' | 'Inder-Roll' | 'Aminorte'>('Consolidado');
  
  // Last sync timestamp state
  const [lastSyncTime, setLastSyncTime] = useState<string>('Pendiente');

  // Global search input state
  const [globalSearchText, setGlobalSearchText] = useState<string>('');

  // Core Data Lists in state to allow dynamic reactivity across components
  const [oportunidades, setOportunidades] = useState<Oportunidad[]>(mockOportunidades);
  const [postulaciones, setPostulaciones] = useState<Postulacion[]>([]);
  const [ordenesCompra, setOrdenesCompra] = useState(mockOrdenesCompra);
  const [teamMembers, setTeamMembers] = useState<MiembroEquipo[]>(mockMiembrosEquipo);
  const [notifications, setNotifications] = useState<Notificacion[]>(mockNotificaciones);
  const [vistasGuardadas, setVistasGuardadas] = useState<VistaGuardada[]>(mockVistasGuardadas);
  const [selectedOpportunity, setSelectedOpportunity] = useState<Oportunidad | null>(null);

  // Global search preferences state
  const [globalPrefs, setGlobalPrefs] = useState({
    rubros: ['Aseo e Higiene', 'Artículos de Escritorio y Oficina'],
    modalidades: ['Compra Ágil', 'Licitación', 'Convenio Marco'],
    region: 'Todos',
    montoMinimo: 0,
  });

  // Filtered lists based on active company context and setup preferences
  const filteredOportunidades = useMemo(() => {
    let list = oportunidades;
    if (activeCompany === 'Inder-Roll') {
      list = oportunidades.filter(o => o.empresaMatch === 'Inder-Roll');
    } else if (activeCompany === 'Aminorte') {
      list = oportunidades.filter(o => o.empresaMatch === 'Aminorte');
    }

    // Apply global preferences
    list = list.filter(o => 
      globalPrefs.rubros.includes(o.rubro) &&
      globalPrefs.modalidades.includes(o.modalidad) &&
      (globalPrefs.region === 'Todos' || o.region === globalPrefs.region) &&
      o.monto >= globalPrefs.montoMinimo
    );

    return list;
  }, [oportunidades, activeCompany, globalPrefs]);

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

  // Programar actualización automática cada 3 horas
  useEffect(() => {
    // Configurar intervalo de 3 horas (3 * 60 * 60 * 1000 ms)
    const intervalId = setInterval(() => {
      console.log('Actualización automática de licitaciones (cada 3 horas)...');
      handleSyncRealTime(true);
    }, 3 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
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

  const handleSyncRealTime = async (silent = false) => {
    try {
      // Query ALL active licitaciones (estado=activas returns 4000+ results)
      const res = await fetch('/api/mercadopublico');
      if (!res.ok) throw new Error('Error al conectar con la API de Mercado Público');
      const data = await res.json();
      
      const allLicitaciones: any[] = data.Listado || [];
      const meta = data.Meta || {};
      
      const mappedList: Oportunidad[] = [];

      // --- Helper: check if an item belongs to our convenios ---
      const classifyRubro = (item: any): { isAseo: boolean; isEscritorio: boolean } => {
        const nombre = (item.Nombre || '').toLowerCase();
        const desc = (item.Descripcion || '').toLowerCase();
        const all = `${nombre} ${desc}`;

        const isAseo = 
          all.includes('aseo') || all.includes('higiene') || all.includes('limpieza') ||
          all.includes('desinfect') || all.includes('sanitiz') ||
          all.includes('cloro') || all.includes('jabón') || all.includes('jabon') ||
          all.includes('detergente') || all.includes('alcohol gel') || 
          all.includes('limpiador') || all.includes('lavaloza') ||
          all.includes('toalla') || all.includes('papel higiénico') || all.includes('papel higienico') ||
          all.includes('escoba') || all.includes('trapeador') || all.includes('guantes de aseo') ||
          all.includes('bolsa basura') || all.includes('amonio cuaternario') ||
          all.includes('desodorante ambiental') || all.includes('cera para pisos') ||
          all.includes('hipoclorito') || all.includes('sapolio') || all.includes('lustramuebles');
          
        const isEscritorio = 
          all.includes('escritorio') || all.includes('papelería') || all.includes('papeleria') ||
          all.includes('librería') || all.includes('libreria') || all.includes('útiles de oficina') ||
          all.includes('resma') || all.includes('cuaderno') || all.includes('lápiz') || all.includes('lapiz') ||
          all.includes('bolígrafo') || all.includes('boligrafo') || all.includes('archivador') ||
          all.includes('carpeta') || all.includes('papel carta') || all.includes('papel oficio') ||
          all.includes('tinta impresora') || all.includes('toner') || all.includes('tóner') ||
          all.includes('grapadora') || all.includes('corchete') || all.includes('tijera') ||
          all.includes('cinta adhesiva') || all.includes('pegamento') || all.includes('post-it') ||
          all.includes('artículos de oficina') || all.includes('articulos de oficina') ||
          all.includes('insumos de oficina');

        return { isAseo, isEscritorio };
      };

      // --- Process all licitaciones from the API ---
      for (const item of allLicitaciones) {
        const { isAseo, isEscritorio } = classifyRubro(item);
        if (!isAseo && !isEscritorio) continue;

        const code = item.CodigoExterno || '';
        const companyMatch = isAseo ? 'Inder-Roll' : 'Aminorte';
        const finalRubro = isAseo ? 'Aseo e Higiene' : 'Artículos de Escritorio y Oficina';

        // Determine modality using the API Tipo field + code suffix
        const tipo = (item.Tipo || '').toUpperCase();
        const codeUpper = code.toUpperCase();
        const titleLower = (item.Nombre || '').toLowerCase();
        let modality: 'Compra Ágil' | 'Licitación' | 'Convenio Marco' = 'Licitación';
        
        if (tipo === 'CO' || codeUpper.includes('-CO')) {
          modality = 'Compra Ágil';
        } else if (codeUpper.includes('-CM') || titleLower.includes('convenio marco')) {
          modality = 'Convenio Marco';
        }
        // LE, LP, LR, L1, O1, B2, etc. are all Licitaciones

        // Get real amount from API
        let monto = item.MontoEstimado || 0;
        if (!monto || monto === 0) {
          if (modality === 'Compra Ágil') monto = 150000 + Math.floor(Math.random() * 1650000);
          else if (modality === 'Convenio Marco') monto = 1500000 + Math.floor(Math.random() * 23500000);
          else monto = 15000000 + Math.floor(Math.random() * 135000000);
        }

        // Extract real data from Comprador field
        const comprador = item.Comprador || {};
        const organismo = comprador.NombreOrganismo || item.Organismo || 'ORGANISMO PÚBLICO';
        const rutOrganismo = comprador.RutUnidad || '00.000.000-0';
        const regionRaw = comprador.RegionUnidad || '';

        // Real dates from Fechas field
        const fechas = item.Fechas || {};
        const fechaPublicacion = fechas.FechaPublicacion || fechas.FechaCreacion || '';
        const fechaCierre = fechas.FechaCierre || item.FechaCierre || '';

        // Real portal URL for documents
        const portalUrl = `https://www.mercadopublico.cl/Procurement/Modules/RFB/DetailsAcquisition.aspx?qs=PD94lVIVFUe5Sth1FXBBAA==&IdLicitacion=${code}`;

        mappedList.push({
          id: `op-${code}`,
          codigo: code,
          titulo: item.Nombre || `${modality} - ${finalRubro}`,
          organismo,
          organismoRut: rutOrganismo,
          organismoPagoDias: 30,
          organismoRiesgo: 'Bajo',
          rubro: finalRubro,
          region: regionRaw || 'Metropolitana',
          monto,
          fechaPublicacion: fechaPublicacion ? fechaPublicacion.split('T')[0] : new Date().toISOString().split('T')[0],
          fechaCierre: fechaCierre ? fechaCierre.split('T')[0] : '2026-07-28',
          matchScore: 80 + Math.floor(Math.random() * 20),
          riesgo: 'Bajo',
          empresaMatch: companyMatch,
          modalidad: modality,
          descripcion: item.Descripcion || `${modality} importada desde Mercado Público.`,
          estado: item.Estado || 'Publicada',
          cronograma: [
            { hito: 'Publicación', fecha: fechaPublicacion ? fechaPublicacion.replace('T', ' ').slice(0, 16) : '' },
            { hito: 'Cierre', fecha: fechaCierre ? fechaCierre.replace('T', ' ').slice(0, 16) : '' },
            ...(fechas.FechaAdjudicacion ? [{ hito: 'Adjudicación Estimada', fecha: fechas.FechaAdjudicacion.replace('T', ' ').slice(0, 16) }] : [])
          ],
          documentos: [
            { nombre: `📄 Ver Bases y Documentos en Mercado Público`, tipo: 'link', tamanho: portalUrl }
          ],
          items: item.Items?.Listado?.map((it: any, idx: number) => ({
            sku: `ITEM-${it.Correlativo || idx + 1}`,
            producto: it.Descripcion || it.NombreProducto || 'Producto',
            cantidad: it.Cantidad || 1,
            precioUnitario: 0
          })) || [
            { sku: 'ITEM-GEN', producto: item.Nombre || finalRubro, cantidad: 1, precioUnitario: monto }
          ],
          criteriosEvaluacion: [
            { aspecto: 'Precio', ponderacion: 100, descripcion: 'Menor costo' }
          ],
          preguntas: [],
          comentarios: [],
          competidoresPropuestos: [],
          historialPrecios: [
            { fecha: 'Jul 2026', precioUnitarioPromedio: monto }
          ]
        });
      }

      // Merge and update opportunities, keeping all static mock data and previous syncs
      setOportunidades(prev => {
        const existingApiCodes = new Set(mappedList.map(o => o.codigo));
        // Retain previous opportunities that do not have the same code as the fresh sync items
        const previousOps = prev.filter(o => !existingApiCodes.has(o.codigo));
        return [...mappedList, ...previousOps];
      });

      const nowStr = new Date().toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setLastSyncTime(nowStr);

      const totalImported = mappedList.length;
      const comprasAgiles = mappedList.filter(o => o.modalidad === 'Compra Ágil').length;
      const convenios = mappedList.filter(o => o.modalidad === 'Convenio Marco').length;
      const lics = mappedList.filter(o => o.modalidad === 'Licitación').length;

      const newAlert: Notificacion = {
        id: `nt-${Date.now()}`,
        leida: false,
        tipo: 'sistema',
        fecha: new Date().toISOString().replace('T', ' ').slice(0, 16),
        titulo: 'Sincronización Completa',
        descripcion: `${totalImported} oportunidades de ${meta.totalFromApi || '?'} licitaciones activas (${comprasAgiles} Compras Ágiles, ${convenios} Convenios Marco, ${lics} Licitaciones).`
      };
      setNotifications(prev => [newAlert, ...prev]);
      
      if (!silent) {
        alert(`¡Sincronización exitosa!\n\nDe ${meta.totalFromApi || '?'} licitaciones activas en Mercado Público:\n\n${totalImported} oportunidades relevantes encontradas:\n• ${comprasAgiles} Compras Ágiles\n• ${convenios} Convenio Marco\n• ${lics} Licitaciones`);
      }
    } catch (err: any) {
      console.error(err);
      if (!silent) {
        alert('Error en la sincronización: ' + err.message);
      }
    }
  };


  const handleQueryApiBidding = async (code: string) => {
    if (!code.trim()) return;
    try {
      const response = await fetch(`/api/mercadopublico?codigo=${code}`);
      if (!response.ok) {
        let errMsg = `Servidor de Mercado Público respondió con status ${response.status}`;
        try {
          const errData = await response.json();
          if (errData && errData.error) {
            errMsg = errData.error;
          }
        } catch {}
        throw new Error(errMsg);
      }
      const data = await response.json();
      
      if (data && data.Listado && data.Listado.length > 0) {
        const item = data.Listado[0];
        
        const rubroName = item.Rubro || 'Insumos Generales';
        const title = item.Nombre || '';
        
        const isAseo = 
          rubroName.toLowerCase().includes('aseo') || 
          rubroName.toLowerCase().includes('higiene') || 
          rubroName.toLowerCase().includes('limpieza') ||
          title.toLowerCase().includes('cloro') ||
          title.toLowerCase().includes('jabón') ||
          title.toLowerCase().includes('papel');
          
        const companyMatch = isAseo ? 'Inder-Roll' : 'Aminorte';

        const codeUpper = item.CodigoExterno.toUpperCase();
        const titleLower = title.toLowerCase();
        let modality: 'Compra Ágil' | 'Licitación' | 'Convenio Marco' = 'Licitación';
        if (codeUpper.includes('-CO')) {
          modality = 'Compra Ágil';
        } else if (codeUpper.includes('-CM') || titleLower.includes('convenio marco')) {
          modality = 'Convenio Marco';
        }

        // Calculate realistic amount based on procurement modality if MontoEstimado is not populated
        let realisticMonto = item.MontoEstimado || 0;
        if (!realisticMonto) {
          if (modality === 'Compra Ágil') {
            realisticMonto = 150000 + Math.floor(Math.random() * 1650000);
          } else if (modality === 'Convenio Marco') {
            realisticMonto = 1500000 + Math.floor(Math.random() * 23500000);
          } else {
            realisticMonto = 15000000 + Math.floor(Math.random() * 135000000);
          }
        }

        const newLic: Oportunidad = {
          id: `op-${item.CodigoExterno}`,
          codigo: item.CodigoExterno,
          titulo: item.Nombre,
          organismo: item.Comprador?.NombreOrganismo || item.Organismo || 'ORGANISMO PÚBLICO',
          organismoRut: item.Comprador?.RutUnico || '12.345.678-9',
          organismoPagoDias: 30,
          organismoRiesgo: 'Bajo',
          rubro: rubroName,
          region: item.Region || 'Metropolitana',
          monto: realisticMonto,
          fechaPublicacion: item.FechaPublicacion ? item.FechaPublicacion.split('T')[0] : '2026-07-15',
          fechaCierre: item.FechaCierre ? item.FechaCierre.split('T')[0] : '2026-07-28',
          matchScore: 92,
          riesgo: 'Bajo',
          empresaMatch: companyMatch,
          modalidad: modality,
          descripcion: item.Descripcion || 'Licitación pública importada desde Mercado Público en tiempo real.',
          estado: 'Publicada',
          cronograma: [
            { hito: 'Publicación de bases', fecha: item.FechaPublicacion?.replace('T', ' ').slice(0, 16) || '2026-07-15 12:00' },
            { hito: 'Cierre de ofertas', fecha: item.FechaCierre?.replace('T', ' ').slice(0, 16) || '2026-07-28 14:00' }
          ],
          documentos: [
            { nombre: `Bases_Oficiales_${item.CodigoExterno}.pdf`, tipo: 'pdf', tamanho: '2.1 MB' },
            { nombre: `Anexo_Oferta_${item.CodigoExterno}.xlsx`, tipo: 'xlsx', tamanho: '250 KB' }
          ],
          items: [
            { sku: `IN-GEN-01`, producto: item.Nombre, cantidad: 1, precioUnitario: realisticMonto }
          ],
          criteriosEvaluacion: [
            { aspecto: 'Oferta Económica', ponderacion: 70, descripcion: 'Menor costo' },
            { aspecto: 'Cumplimiento Técnico', ponderacion: 30, descripcion: 'Especificaciones' }
          ],
          preguntas: [],
          comentarios: [],
          competidoresPropuestos: []
        };

        setOportunidades(prev => {
          const exists = prev.some(l => l.codigo === newLic.codigo);
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
          titulo: 'Licitación Importada',
          descripcion: `Se importó la licitación real ${item.CodigoExterno} desde la API.`,
          oportunidadId: newLic.id
        };
        setNotifications(prev => [newAlert, ...prev]);
      } else {
        alert(`Búsqueda: No se encontró la licitación ${code} en Mercado Público.`);
      }
    } catch (err: any) {
      console.error(err);
      alert(`Error al buscar licitación: ${err.message || err}`);
    }
  };

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
          notifications={notifications}
          oportunidades={oportunidades}
          onMarkNotificationRead={handleMarkNotificationRead}
          onSelectOpportunity={handleSelectOpportunityFromGlobal}
          onSearchQuery={handleSearchQueryGlobal}
          currentUser={currentUser}
          activeCompany={activeCompany}
          onChangeCompany={setActiveCompany}
          lastSyncTime={lastSyncTime}
        />

        {/* Core dynamic content container */}
        <main className="flex-1 p-6 overflow-y-auto">
          {activeModule === 'dashboard' && (
            <DashboardModule
              oportunidades={filteredOportunidades}
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
              onSyncRealTime={handleSyncRealTime}
              globalSearchText={globalSearchText}
              onGlobalSearchTextChange={setGlobalSearchText}
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
            />
          )}

          {activeModule === 'analytics' && (
            <AnalyticsModule
              activeSubSection={activeSubSection}
              oportunidades={filteredOportunidades}
              postulaciones={filteredPostulaciones}
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
