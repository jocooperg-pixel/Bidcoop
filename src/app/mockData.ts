'use client';
import { Oportunidad, MiembroEquipo, Notificacion, VistaGuardada, OrdenCompra, Postulacion } from './types';

export const mockMiembrosEquipo: MiembroEquipo[] = [
  { id: 'usr-1', nombre: 'Jonathan Cooper', rol: 'Admin', avatar: 'JC', estado: 'Activo', email: 'jocooper@antigravity.cl' }
];

export const mockVistasGuardadas: VistaGuardada[] = [
  { id: 'v-1', nombre: 'No leídas (Alta prioridad)', filters: { search: '', rubro: 'Todos', region: 'Todos', riesgo: 'Todos', montoMin: 10000000, montoMax: 1000000000 } },
  { id: 'v-2', nombre: 'Descartadas / Alto Riesgo', filters: { search: '', rubro: 'Todos', region: 'Todos', riesgo: 'Alto', montoMin: 0, montoMax: 1000000000 } }
];

export const mockPostulaciones: Postulacion[] = [
  // --- INDER-ROLL (ASEO E HIGIENE - GRANDES COMPRAS) ---
  {
    id: 'post-gc-101',
    oportunidadId: 'GC-3047-901-CM26',
    oportunidadCodigo: 'GC-3047-901-CM26',
    oportunidadTitulo: 'Grande Compra: Suministro de Insumos de Aseo Químico y Desinfectantes Hospitalarios',
    estado: 'Adjudicada',
    responsable: 'Jonathan Cooper',
    montoOferta: 91800000,
    empresaMatch: 'Inder-Roll',
    modalidad: 'Grandes Compras',
    organismo: 'HOSPITAL CLÍNICO SAN BORJA ARRIARÁN',
    documentosAdjuntos: ['Oferta_Tecnica_Inderquim_SanBorja.pdf', 'Catalogo_Aseo_InderRoll_2026.pdf'],
    itemsOfertados: [
      { sku: 'PAP001-001', precioOferta: 4200, cantidad: 5000 },
      { sku: 'PAP001-008', precioOferta: 10500, cantidad: 6000 }
    ],
    fechaActualizacion: '2026-06-18'
  },
  {
    id: 'post-gc-102',
    oportunidadId: 'GC-2241-411-CM26',
    oportunidadCodigo: 'GC-2241-411-CM26',
    oportunidadTitulo: 'Grande Compra: Toallas de Papel Interfoliadas y Jabón para Red Salud Biobío',
    estado: 'Adjudicada',
    responsable: 'Jonathan Cooper',
    montoOferta: 67500000,
    empresaMatch: 'Inder-Roll',
    modalidad: 'Grandes Compras',
    organismo: 'SERVICIO DE SALUD BIOBÍO',
    documentosAdjuntos: ['Oferta_Economica_BioBio_InderRoll.pdf'],
    itemsOfertados: [
      { sku: 'PAP001-010', precioOferta: 17000, cantidad: 3500 }
    ],
    fechaActualizacion: '2026-06-25'
  },
  {
    id: 'post-gc-103',
    oportunidadId: 'GC-1088-720-CM26',
    oportunidadCodigo: 'GC-1088-720-CM26',
    oportunidadTitulo: 'Grande Compra: Abastecimiento Papel Higiénico Inder-Roll e Higiene Municipal',
    estado: 'Adjudicada',
    responsable: 'Jonathan Cooper',
    montoOferta: 114200000,
    empresaMatch: 'Inder-Roll',
    modalidad: 'Grandes Compras',
    organismo: 'ILUSTRE MUNICIPALIDAD DE VALPARAÍSO',
    documentosAdjuntos: ['Postulacion_MuniValparaiso_InderRoll.pdf'],
    itemsOfertados: [
      { sku: 'PAP001-003', precioOferta: 10500, cantidad: 10000 }
    ],
    fechaActualizacion: '2026-07-02'
  },
  {
    id: 'post-gc-104',
    oportunidadId: 'GC-3047-812-CM26',
    oportunidadCodigo: 'GC-3047-812-CM26',
    oportunidadTitulo: 'Grande Compra: Suministro de Detergentes Químicos e Insumos Sanitarios',
    estado: 'Enviada',
    responsable: 'Jonathan Cooper',
    montoOferta: 77900000,
    empresaMatch: 'Inder-Roll',
    modalidad: 'Grandes Compras',
    organismo: 'HOSPITAL DR. LUIS TISNÉ BROUSSE',
    documentosAdjuntos: ['Cotizacion_CM_Tisne_InderRoll.pdf'],
    itemsOfertados: [
      { sku: 'PAP001-002', precioOferta: 12000, cantidad: 4500 }
    ],
    fechaActualizacion: '2026-07-16'
  },

  // --- AMINORTE (ESCRITORIO Y OFICINA - GRANDES COMPRAS) ---
  {
    id: 'post-gc-201',
    oportunidadId: 'GC-6012-280-CM26',
    oportunidadCodigo: 'GC-6012-280-CM26',
    oportunidadTitulo: 'Grande Compra: Dotación Anual de Papelería y Resmas para Seremi de Salud RM',
    estado: 'Adjudicada',
    responsable: 'Jonathan Cooper',
    montoOferta: 83400000,
    empresaMatch: 'Aminorte',
    modalidad: 'Grandes Compras',
    organismo: 'SEREMI DE SALUD REGIÓN METROPOLITANA',
    documentosAdjuntos: ['Oferta_Aminorte_SeremiSalud.pdf'],
    itemsOfertados: [
      { sku: 'ESC-RES-01', precioOferta: 3800, cantidad: 15000 }
    ],
    fechaActualizacion: '2026-06-28'
  },
  {
    id: 'post-gc-202',
    oportunidadId: 'GC-6012-195-CM26',
    oportunidadCodigo: 'GC-6012-195-CM26',
    oportunidadTitulo: 'Grande Compra: Insumos de Escritorio y Archivadores para Dirección de Obras Públicas',
    estado: 'Adjudicada',
    responsable: 'Jonathan Cooper',
    montoOferta: 130800000,
    empresaMatch: 'Aminorte',
    modalidad: 'Grandes Compras',
    organismo: 'DIRECCIÓN GENERAL DE OBRAS PÚBLICAS (MOP)',
    documentosAdjuntos: ['Propuesta_TecnicoEconomica_MOP_Aminorte.pdf'],
    itemsOfertados: [
      { sku: 'ESC-ARC-02', precioOferta: 2900, cantidad: 20000 }
    ],
    fechaActualizacion: '2026-07-05'
  },
  {
    id: 'post-gc-203',
    oportunidadId: 'GC-1105-650-CM26',
    oportunidadCodigo: 'GC-1105-650-CM26',
    oportunidadTitulo: 'Grande Compra: Suministro de Resmas Carta/Oficio y Papelería Institucional',
    estado: 'Enviada',
    responsable: 'Jonathan Cooper',
    montoOferta: 104500000,
    empresaMatch: 'Aminorte',
    modalidad: 'Grandes Compras',
    organismo: 'SERVICIO DE IMPUESTOS INTERNOS (SII)',
    documentosAdjuntos: ['Cotizacion_SII_Papeleria_Aminorte.pdf'],
    itemsOfertados: [
      { sku: 'ESC-RES-02', precioOferta: 4600, cantidad: 18000 }
    ],
    fechaActualizacion: '2026-07-15'
  },

  // --- AMINORTE (ESCRITORIO Y OFICINA - COMPRAS ÁGILES POSTULADAS) ---
  {
    id: 'post-ca-201',
    oportunidadId: 'COT-6012-401-COT26',
    oportunidadCodigo: 'COT-6012-401-COT26',
    oportunidadTitulo: 'Compra Ágil: Adquisición Urgente de Resmas Carta/Oficio y Tintas de Impresión',
    estado: 'Adjudicada',
    responsable: 'Jonathan Cooper',
    montoOferta: 2450000,
    empresaMatch: 'Aminorte',
    modalidad: 'Compra Ágil',
    organismo: 'SUBSECRETARÍA DE EDUCACIÓN (MINEDUC)',
    documentosAdjuntos: ['Cotizacion_Agil_Resmas_MINEDUC_Aminorte.pdf'],
    itemsOfertados: [
      { sku: 'ESC-RES-01', precioOferta: 3900, cantidad: 500 },
      { sku: 'ESC-TIN-03', precioOferta: 12500, cantidad: 40 }
    ],
    fechaActualizacion: '2026-07-10'
  },
  {
    id: 'post-ca-202',
    oportunidadId: 'COT-4080-105-COT26',
    oportunidadCodigo: 'COT-4080-105-COT26',
    oportunidadTitulo: 'Compra Ágil: Suministro Urgencia Archivadores y Carpetas Colgantes',
    estado: 'Adjudicada',
    responsable: 'Jonathan Cooper',
    montoOferta: 1890000,
    empresaMatch: 'Aminorte',
    modalidad: 'Compra Ágil',
    organismo: 'GOBIERNO REGIONAL DE ANTOFAGASTA',
    documentosAdjuntos: ['Cotizacion_Agil_Archivadores_GORE.pdf'],
    itemsOfertados: [
      { sku: 'ESC-ARC-02', precioOferta: 3150, cantidad: 600 }
    ],
    fechaActualizacion: '2026-07-14'
  },
  {
    id: 'post-ca-203',
    oportunidadId: 'COT-1105-330-COT26',
    oportunidadCodigo: 'COT-1105-330-COT26',
    oportunidadTitulo: 'Compra Ágil: Artículos de Escritorio, Lápices y Tijeras Institucionales',
    estado: 'Enviada',
    responsable: 'Jonathan Cooper',
    montoOferta: 3200000,
    empresaMatch: 'Aminorte',
    modalidad: 'Compra Ágil',
    organismo: 'CORPORACIÓN ADMINISTRATIVA DEL PODER JUDICIAL (CAPJ)',
    documentosAdjuntos: ['Cotizacion_Agil_PoderJudicial_Aminorte.pdf'],
    itemsOfertados: [
      { sku: 'ESC-UTI-05', precioOferta: 8000, cantidad: 400 }
    ],
    fechaActualizacion: '2026-07-18'
  },
  {
    id: 'post-ca-204',
    oportunidadId: 'COT-6050-210-COT26',
    oportunidadCodigo: 'COT-6050-210-COT26',
    oportunidadTitulo: 'Compra Ágil: Papelería, Plumones y Cuadernos de Registro Operativo',
    estado: 'Adjudicada',
    responsable: 'Jonathan Cooper',
    montoOferta: 2150000,
    empresaMatch: 'Aminorte',
    modalidad: 'Compra Ágil',
    organismo: 'SEREMI DE SALUD REGIÓN DE ANTOFAGASTA',
    documentosAdjuntos: ['Oferta_Agil_SeremiSaludAntofagasta.pdf'],
    itemsOfertados: [
      { sku: 'ESC-PAP-08', precioOferta: 4300, cantidad: 500 }
    ],
    fechaActualizacion: '2026-07-02'
  },
  {
    id: 'post-ca-205',
    oportunidadId: 'COT-1088-912-COT26',
    oportunidadCodigo: 'COT-1088-912-COT26',
    oportunidadTitulo: 'Compra Ágil: Suministro de Bloques de Notas y Carpetas Institucionales',
    estado: 'Enviada',
    responsable: 'Jonathan Cooper',
    montoOferta: 1650000,
    empresaMatch: 'Aminorte',
    modalidad: 'Compra Ágil',
    organismo: 'ILUSTRE MUNICIPALIDAD DE CALAMA',
    documentosAdjuntos: ['Cotizacion_MuniCalama_Aminorte.pdf'],
    itemsOfertados: [
      { sku: 'ESC-CAR-04', precioOferta: 3300, cantidad: 500 }
    ],
    fechaActualizacion: '2026-07-19'
  },
  {
    id: 'post-ca-206',
    oportunidadId: 'COT-6012-512-COT26',
    oportunidadCodigo: 'COT-6012-512-COT26',
    oportunidadTitulo: 'Compra Ágil: Tóners de Impresión y Papelería de Oficina',
    estado: 'Adjudicada',
    responsable: 'Jonathan Cooper',
    montoOferta: 4120000,
    empresaMatch: 'Aminorte',
    modalidad: 'Compra Ágil',
    organismo: 'DIRECCIÓN REGIONAL DE VIALIDAD ANTOFAGASTA',
    documentosAdjuntos: ['Oferta_Agil_Vialidad_MOP_Aminorte.pdf'],
    itemsOfertados: [
      { sku: 'ESC-TON-01', precioOferta: 41200, cantidad: 100 }
    ],
    fechaActualizacion: '2026-06-25'
  }
];

export const mockNotificaciones: Notificacion[] = [
  {
    id: 'nt-gc-1',
    leida: false,
    tipo: 'alerta',
    fecha: '2026-07-22 08:15',
    titulo: '⏳ GRANDE COMPRA CERRADA (INDER-ROLL)',
    descripcion: 'El Servicio de Salud Metropolitano Central cerró recepción de ofertas para Grande Compra ID GC-3047-881-CM26 ($88.5M). Estado: En Evaluación (Sin oferta seleccionada aún).',
    oportunidadId: 'GC-3047-881-CM26',
    empresaMatch: 'Inder-Roll',
    esGrandesCompras: true,
    montoUtm: 1350
  },
  {
    id: 'nt-gc-2',
    leida: false,
    tipo: 'alerta',
    fecha: '2026-07-22 08:20',
    titulo: '⏳ GRANDE COMPRA CERRADA (AMINORTE)',
    descripcion: 'MINEDUC cerró la recepción de ofertas para Grande Compra ID GC-6012-310-CM26 ($74.2M). Estado: En Evaluación (Sin oferta seleccionada aún).',
    oportunidadId: 'GC-6012-310-CM26',
    empresaMatch: 'Aminorte',
    esGrandesCompras: true,
    montoUtm: 1135
  },
  {
    id: 'nt-gc-3',
    leida: false,
    tipo: 'alerta',
    fecha: '2026-07-21 16:45',
    titulo: '⏳ GRANDE COMPRA CERRADA (INDER-ROLL)',
    descripcion: 'JUNJI cerró la recepción de ofertas para Grande Compra ID GC-2241-502-CM26 ($125M). Estado: En Evaluación por comisión técnica.',
    oportunidadId: 'GC-2241-502-CM26',
    empresaMatch: 'Inder-Roll',
    esGrandesCompras: true,
    montoUtm: 1910
  },
  {
    id: 'nt-gc-4',
    leida: false,
    tipo: 'alerta',
    fecha: '2026-07-22 07:50',
    titulo: '⏳ GRANDE COMPRA CERRADA (AMINORTE)',
    descripcion: 'La Corporación Administrativa del Poder Judicial cerró ofertas en Grande Compra ID GC-1105-774-CM26 ($148M). Estado: Sin oferta seleccionada aún.',
    oportunidadId: 'GC-1105-774-CM26',
    empresaMatch: 'Aminorte',
    esGrandesCompras: true,
    montoUtm: 2260
  },
  {
    id: 'nt-gc-5',
    leida: false,
    tipo: 'alerta',
    fecha: '2026-07-22 09:10',
    titulo: '⏳ GRANDE COMPRA CERRADA (INDER-ROLL)',
    descripcion: 'SEREMI Educación Valparaíso cerró recepción de cotizaciones en GC-5510-330-CM26 ($94M). Estado: En Evaluación.',
    oportunidadId: 'GC-5510-330-CM26',
    empresaMatch: 'Inder-Roll',
    esGrandesCompras: true,
    montoUtm: 1445
  },
  {
    id: 'nt-gc-6',
    leida: false,
    tipo: 'alerta',
    fecha: '2026-07-22 09:30',
    titulo: '⏳ GRANDE COMPRA CERRADA (AMINORTE)',
    descripcion: 'GORE Antofagasta cerró ofertas para Grande Compra ID GC-4080-112-CM26 ($81.5M). Estado: Sin oferta seleccionada aún.',
    oportunidadId: 'GC-4080-112-CM26',
    empresaMatch: 'Aminorte',
    esGrandesCompras: true,
    montoUtm: 1250
  },
  { id: 'nt-1', leida: false, tipo: 'alerta', fecha: '2026-07-15 08:30', titulo: 'Nueva Oportunidad Detectada', descripcion: 'Suministro de alcohol gel y desinfectantes para la I. Municipalidad de Santiago (Match: 96%)', oportunidadId: '3047-1042-LE26', empresaMatch: 'Inder-Roll' }
];

export const mockOrdenesCompra: OrdenCompra[] = [
  { id: 'oc-1', oportunidadId: '3047-1042-LE26', codigoOC: 'OC-61601500-112', organismo: 'ILUSTRE MUNICIPALIDAD DE SANTIAGO', monto: 18500000, fechaEmision: '2026-06-25', estado: 'Completada' }
];

export const mockOportunidades: Oportunidad[] = [
  // --- 7 GRANDES COMPRAS PARTICIPADAS ---
  {
    "id": "GC-3047-901-CM26",
    "codigo": "GC-3047-901-CM26",
    "titulo": "Grande Compra: Suministro de Insumos de Aseo Químico y Desinfectantes Hospitalarios",
    "organismo": "HOSPITAL CLÍNICO SAN BORJA ARRIARÁN",
    "organismoRut": "61.602.001-2",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 48500000,
    "montoUtm": 1420,
    "convenioMarcoNombre": "Convenio Marco de Insumos de Aseo e Higiene Hospitalaria",
    "fechaPublicacion": "2026-06-05",
    "fechaCierre": "2026-06-18",
    "matchScore": 99,
    "riesgo": "Bajo",
    "empresaMatch": "Inder-Roll",
    "modalidad": "Grandes Compras",
    "esInvitacionGrandesCompras": true,
    "descripcion": "Grande Compra adjudicada para la dotación de insumos de desinfección y papel higiénico Inder-Roll para el Hospital San Borja Arriarán.",
    "estado": "Adjudicada",
    "cronograma": [
      { "hito": "Publicación", "fecha": "2026-06-05 09:00" },
      { "hito": "Oferta Enviada", "fecha": "2026-06-18 14:00" },
      { "hito": "Adjudicación Confirmada", "fecha": "2026-07-01 12:00" }
    ],
    "documentos": [],
    "items": [{ "sku": "PAP001-001", "producto": "Cloro Concentrado Químico 5L", "cantidad": 5000, "precioUnitario": 4200 }],
    "criteriosEvaluacion": [{ "aspecto": "Precio", "ponderacion": 100, "descripcion": "Evaluación económica CM" }],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": []
  },
  {
    "id": "GC-2241-411-CM26",
    "codigo": "GC-2241-411-CM26",
    "titulo": "Grande Compra: Toallas de Papel Interfoliadas y Jabón para Red Salud Biobío",
    "organismo": "SERVICIO DE SALUD BIOBÍO",
    "organismoRut": "61.602.200-7",
    "organismoPagoDias": 25,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Biobío",
    "monto": 68000000,
    "montoUtm": 1045,
    "convenioMarcoNombre": "Convenio Marco de Artículos de Aseo e Higiene Institucional",
    "fechaPublicacion": "2026-06-10",
    "fechaCierre": "2026-06-25",
    "matchScore": 97,
    "riesgo": "Bajo",
    "empresaMatch": "Inder-Roll",
    "modalidad": "Grandes Compras",
    "esInvitacionGrandesCompras": true,
    "descripcion": "Grande Compra adjudicada para despacho centralizado en la Región del Biobío.",
    "estado": "Adjudicada",
    "cronograma": [{ "hito": "Adjudicado", "fecha": "2026-07-05 10:00" }],
    "documentos": [],
    "items": [],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": []
  },
  {
    "id": "GC-1088-720-CM26",
    "codigo": "GC-1088-720-CM26",
    "titulo": "Grande Compra: Abastecimiento Papel Higiénico Inder-Roll e Higiene Municipal",
    "organismo": "ILUSTRE MUNICIPALIDAD DE VALPARAÍSO",
    "organismoRut": "69.060.100-9",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Valparaíso",
    "monto": 115000000,
    "montoUtm": 1765,
    "convenioMarcoNombre": "Convenio Marco de Aseo Institucional",
    "fechaPublicacion": "2026-06-15",
    "fechaCierre": "2026-07-02",
    "matchScore": 98,
    "riesgo": "Bajo",
    "empresaMatch": "Inder-Roll",
    "modalidad": "Grandes Compras",
    "esInvitacionGrandesCompras": true,
    "descripcion": "Grande Compra adjudicada para provisión de papel higiénico y toallas en Valparaíso.",
    "estado": "Adjudicada",
    "cronograma": [{ "hito": "Adjudicado", "fecha": "2026-07-12 11:00" }],
    "documentos": [],
    "items": [],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": []
  },
  {
    "id": "GC-3047-812-CM26",
    "codigo": "GC-3047-812-CM26",
    "titulo": "Grande Compra: Suministro de Detergentes Químicos e Insumos Sanitarios",
    "organismo": "HOSPITAL DR. LUIS TISNÉ BROUSSE",
    "organismoRut": "61.602.300-3",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 78400000,
    "montoUtm": 1205,
    "convenioMarcoNombre": "Convenio Marco de Aseo Hospitalario",
    "fechaPublicacion": "2026-07-01",
    "fechaCierre": "2026-07-21",
    "matchScore": 96,
    "riesgo": "Bajo",
    "empresaMatch": "Inder-Roll",
    "modalidad": "Grandes Compras",
    "esInvitacionGrandesCompras": true,
    "descripcion": "Proceso cerrado en recepción de ofertas. Actualmente EN EVALUACIÓN A ESPERA DE ADJUDICACIÓN.",
    "estado": "En Evaluación",
    "cronograma": [
      { "hito": "Cierre Recepción Ofertas", "fecha": "2026-07-21 15:00" },
      { "hito": "Evaluación Técnica en Curso", "fecha": "2026-07-22 09:00" }
    ],
    "documentos": [],
    "items": [],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": []
  },
  {
    "id": "GC-6012-280-CM26",
    "codigo": "GC-6012-280-CM26",
    "titulo": "Grande Compra: Dotación Anual de Papelería y Resmas para Seremi de Salud RM",
    "organismo": "SEREMI DE SALUD REGIÓN METROPOLITANA",
    "organismoRut": "60.502.000-1",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 84000000,
    "montoUtm": 1290,
    "convenioMarcoNombre": "Convenio Marco de Escritorio y Oficina",
    "fechaPublicacion": "2026-06-12",
    "fechaCierre": "2026-06-28",
    "matchScore": 99,
    "riesgo": "Bajo",
    "empresaMatch": "Aminorte",
    "modalidad": "Grandes Compras",
    "esInvitacionGrandesCompras": true,
    "descripcion": "Grande Compra adjudicada a Aminorte para provisión de resmas y papelería SEREMI.",
    "estado": "Adjudicada",
    "cronograma": [{ "hito": "Adjudicado", "fecha": "2026-07-08 14:00" }],
    "documentos": [],
    "items": [],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": []
  },
  {
    "id": "GC-6012-195-CM26",
    "codigo": "GC-6012-195-CM26",
    "titulo": "Grande Compra: Insumos de Escritorio y Archivadores para Dirección de Obras Públicas",
    "organismo": "DIRECCIÓN GENERAL DE OBRAS PÚBLICAS (MOP)",
    "organismoRut": "61.201.000-5",
    "organismoPagoDias": 20,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 132000000,
    "montoUtm": 2030,
    "convenioMarcoNombre": "Convenio Marco de Escritorio y Oficina",
    "fechaPublicacion": "2026-06-20",
    "fechaCierre": "2026-07-05",
    "matchScore": 97,
    "riesgo": "Bajo",
    "empresaMatch": "Aminorte",
    "modalidad": "Grandes Compras",
    "esInvitacionGrandesCompras": true,
    "descripcion": "Grande Compra adjudicada a Aminorte para insumos MOP nivel central.",
    "estado": "Adjudicada",
    "cronograma": [{ "hito": "Adjudicado", "fecha": "2026-07-15 16:00" }],
    "documentos": [],
    "items": [],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": []
  },
  {
    "id": "GC-1105-650-CM26",
    "codigo": "GC-1105-650-CM26",
    "titulo": "Grande Compra: Suministro de Resmas Carta/Oficio y Papelería Institucional",
    "organismo": "SERVICIO DE IMPUESTOS INTERNOS (SII)",
    "organismoRut": "60.801.000-0",
    "organismoPagoDias": 15,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 104500000,
    "montoUtm": 1615,
    "convenioMarcoNombre": "Convenio Marco de Escritorio y Oficina",
    "fechaPublicacion": "2026-07-02",
    "fechaCierre": "2026-07-20",
    "matchScore": 98,
    "riesgo": "Bajo",
    "empresaMatch": "Aminorte",
    "modalidad": "Grandes Compras",
    "esInvitacionGrandesCompras": true,
    "descripcion": "Proceso cerrado en recepción de ofertas. Actualmente EN EVALUACIÓN A ESPERA DE ADJUDICACIÓN.",
    "estado": "En Evaluación",
    "cronograma": [
      { "hito": "Cierre Recepción Ofertas", "fecha": "2026-07-20 17:00" },
      { "hito": "Evaluación de Ofertas SII", "fecha": "2026-07-22 10:00" }
    ],
    "documentos": [],
    "items": [],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": []
  },

  // --- GRANDES COMPRAS CERRADAS (EN EVALUACIÓN / SIN OFERTA SELECCIONADA) ---
  {
    "id": "GC-3047-881-CM26",
    "codigo": "GC-3047-881-CM26",
    "titulo": "Grande Compra: Suministro Masivo Insumos de Aseo e Higiene Hospitalaria",
    "organismo": "SERVICIO DE SALUD METROPOLITANO CENTRAL",
    "organismoRut": "61.602.100-0",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 88500000,
    "montoUtm": 1350,
    "convenioMarcoNombre": "Convenio Marco de Insumos de Aseo, Limpieza e Higiene Hospitalaria",
    "fechaPublicacion": "2026-07-05",
    "fechaCierre": "2026-07-21",
    "matchScore": 98,
    "riesgo": "Bajo",
    "empresaMatch": "Inder-Roll",
    "modalidad": "Grandes Compras",
    "esInvitacionGrandesCompras": true,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "fechaAdjudicacionEstimada": "2026-08-04",
    "descripcion": "Intención de Compra en Convenio Marco (>1.000 UTM). Recepción de ofertas cerrada. Actualmente EN EVALUACIÓN por la comisión técnica (sin oferta seleccionada aún).",
    "estado": "En Evaluación",
    "cronograma": [
      { "hito": "Emisión Intención de Compra CM", "fecha": "2026-07-05 09:00" },
      { "hito": "Cierre Recepción Ofertas", "fecha": "2026-07-21 15:00" },
      { "hito": "Adjudicación Estimada", "fecha": "2026-08-04 17:00" }
    ],
    "documentos": [
      { "nombre": "📄 Términos de Referencia Grande Compra SSMC.pdf", "tipo": "pdf", "tamanho": "2.1 MB" }
    ],
    "items": [
      { "sku": "PAP001-001", "producto": "Cloro Concentrado Químico 5L", "cantidad": 3500, "precioUnitario": 4200 }
    ],
    "criteriosEvaluacion": [{ "aspecto": "Precio", "ponderacion": 100, "descripcion": "Catálogo CM" }],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": []
  },
  {
    "id": "GC-6012-310-CM26",
    "codigo": "GC-6012-310-CM26",
    "titulo": "Grande Compra: Adquisición Semestral de Artículos de Escritorio y Papelería de Oficina",
    "organismo": "SUBSECRETARÍA DE EDUCACIÓN",
    "organismoRut": "60.501.000-6",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 74200000,
    "montoUtm": 1135,
    "convenioMarcoNombre": "Convenio Marco de Escritorio, Papelería y Utiles de Oficina",
    "fechaPublicacion": "2026-07-04",
    "fechaCierre": "2026-07-20",
    "matchScore": 99,
    "riesgo": "Bajo",
    "empresaMatch": "Aminorte",
    "modalidad": "Grandes Compras",
    "esInvitacionGrandesCompras": true,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "fechaAdjudicacionEstimada": "2026-08-02",
    "descripcion": "Intención de Compra en Convenio Marco (>1.000 UTM). Recepción de ofertas cerrada. Actualmente EN EVALUACIÓN por comisión del MINEDUC (sin oferta seleccionada aún).",
    "estado": "En Evaluación",
    "cronograma": [
      { "hito": "Publicación Intención de Compra CM", "fecha": "2026-07-04 10:00" },
      { "hito": "Cierre Recepción Ofertas", "fecha": "2026-07-20 14:00" }
    ],
    "documentos": [],
    "items": [],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": []
  },
  {
    "id": "GC-2241-502-CM26",
    "codigo": "GC-2241-502-CM26",
    "titulo": "Grande Compra: Suministro Anual Papel Higiénico Inder-Roll y Toallas Interfoliadas",
    "organismo": "JUNTA NACIONAL DE JARDINES INFANTILES (JUNJI)",
    "organismoRut": "60.908.000-9",
    "organismoPagoDias": 20,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 125000000,
    "montoUtm": 1910,
    "convenioMarcoNombre": "Convenio Marco de Artículos de Aseo y Papelería Institucional",
    "fechaPublicacion": "2026-07-06",
    "fechaCierre": "2026-07-21",
    "matchScore": 97,
    "riesgo": "Bajo",
    "empresaMatch": "Inder-Roll",
    "modalidad": "Grandes Compras",
    "esInvitacionGrandesCompras": true,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "fechaAdjudicacionEstimada": "2026-08-10",
    "descripcion": "Intención de Compra en Convenio Marco (>1.000 UTM). Proceso CERRADO en evaluación (sin oferta seleccionada aún).",
    "estado": "En Evaluación",
    "cronograma": [],
    "documentos": [],
    "items": [],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": []
  },
  {
    "id": "GC-1105-774-CM26",
    "codigo": "GC-1105-774-CM26",
    "titulo": "Grande Compra: Dotación Nacional de Resmas, Carpetas y Suministros para Red Judicial",
    "organismo": "CORPORACIÓN ADMINISTRATIVA DEL PODER JUDICIAL (CAPJ)",
    "organismoRut": "60.301.000-0",
    "organismoPagoDias": 15,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 148000000,
    "montoUtm": 2260,
    "convenioMarcoNombre": "Convenio Marco de Escritorio, Papelería y Utiles de Oficina",
    "fechaPublicacion": "2026-07-07",
    "fechaCierre": "2026-07-21",
    "matchScore": 96,
    "riesgo": "Bajo",
    "empresaMatch": "Aminorte",
    "modalidad": "Grandes Compras",
    "esInvitacionGrandesCompras": true,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "fechaAdjudicacionEstimada": "2026-08-15",
    "descripcion": "Intención de Compra en Convenio Marco (>1.000 UTM). Proceso CERRADO en evaluación (sin oferta seleccionada aún).",
    "estado": "En Evaluación",
    "cronograma": [],
    "documentos": [],
    "items": [],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": []
  },
  {
    "id": "GC-6012-310-CM26",
    "codigo": "GC-6012-310-CM26",
    "titulo": "Invitación a Grande Compra: Adquisición Semestral de Artículos de Escritorio y Papelería de Oficina",
    "organismo": "SUBSECRETARÍA DE EDUCACIÓN",
    "organismoRut": "60.501.000-6",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 74200000,
    "montoUtm": 1135,
    "convenioMarcoNombre": "Convenio Marco de Escritorio, Papelería y Utiles de Oficina",
    "fechaPublicacion": "2026-07-19",
    "fechaCierre": "2026-07-30",
    "matchScore": 99,
    "riesgo": "Bajo",
    "empresaMatch": "Aminorte",
    "modalidad": "Grandes Compras",
    "esInvitacionGrandesCompras": true,
    "descripcion": "Intención de Compra en Convenio Marco (Grande Compra > 1.000 UTM). Adquisición centralizada de resmas de papel Carta y Oficio 75g, archivadores tamaño oficio, bolígrafos, corcheteras y carpetas corporativas para oficinas nivel central MINEDUC.",
    "estado": "Publicada",
    "cronograma": [
      { "hito": "Publicación Intención de Compra CM", "fecha": "2026-07-19 10:00" },
      { "hito": "Cierre Recepción Ofertas", "fecha": "2026-07-30 14:00" }
    ],
    "documentos": [
      { "nombre": "📄 Especificaciones Técnicas Papelería MINEDUC.pdf", "tipo": "pdf", "tamanho": "1.8 MB" }
    ],
    "items": [
      { "sku": "ESC-RES-01", "producto": "Resma Papel Carta 75g Alcalino", "cantidad": 12000, "precioUnitario": 3800 },
      { "sku": "ESC-ARC-02", "producto": "Archivador Lomo Ancho Oficio", "cantidad": 4500, "precioUnitario": 2900 },
      { "sku": "ESC-BOL-03", "producto": "Bolígrafo Azul Ciento por Caja", "cantidad": 800, "precioUnitario": 19500 }
    ],
    "criteriosEvaluacion": [
      { "aspecto": "Precio Convenio", "ponderacion": 80, "descripcion": "Oferta más económica dentro de catálogo CM" },
      { "aspecto": "Disponibilidad Stock", "ponderacion": 20, "descripcion": "Entrega total inmediata" }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "historialPrecios": [
      { "fecha": "Jul 2026", "precioUnitarioPromedio": 74200000 }
    ]
  },
  {
    "id": "GC-2241-502-CM26",
    "codigo": "GC-2241-502-CM26",
    "titulo": "Invitación a Grande Compra: Suministro Anual Papel Higiénico Inder-Roll y Toallas Interfoliadas",
    "organismo": "JUNTA NACIONAL DE JARDINES INFANTILES (JUNJI)",
    "organismoRut": "60.908.000-9",
    "organismoPagoDias": 20,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 125000000,
    "montoUtm": 1910,
    "convenioMarcoNombre": "Convenio Marco de Artículos de Aseo y Papelería Institucional",
    "fechaPublicacion": "2026-07-21",
    "fechaCierre": "2026-08-05",
    "matchScore": 97,
    "riesgo": "Bajo",
    "empresaMatch": "Inder-Roll",
    "modalidad": "Grandes Compras",
    "esInvitacionGrandesCompras": true,
    "descripcion": "Intención de Compra en Convenio Marco (>1.000 UTM) para abastecimiento de más de 450 salas cuna y jardines infantiles de la Región Metropolitana con toallas interfoliadas de celulosa pura y papel higiénico Inder-Roll.",
    "estado": "Publicada",
    "cronograma": [
      { "hito": "Convocatoria Intención de Compra", "fecha": "2026-07-21 11:30" },
      { "hito": "Cierre de Cotizaciones CM", "fecha": "2026-08-05 16:00" }
    ],
    "documentos": [
      { "nombre": "📄 Requerimientos Técnicos JUNJI.pdf", "tipo": "pdf", "tamanho": "3.4 MB" }
    ],
    "items": [
      { "sku": "PAP001-010", "producto": "Toalla de Papel Inder-Roll 250 HJ C/20", "cantidad": 5500, "precioUnitario": 17000 },
      { "sku": "PAP001-007", "producto": "Papel Higiénico Inder-Roll DH 450x6", "cantidad": 2000, "precioUnitario": 16000 }
    ],
    "criteriosEvaluacion": [
      { "aspecto": "Precio", "ponderacion": 100, "descripcion": "Menor precio según catálogo CM" }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "historialPrecios": [
      { "fecha": "Jul 2026", "precioUnitarioPromedio": 125000000 }
    ]
  },
  {
    "id": "GC-1105-774-CM26",
    "codigo": "GC-1105-774-CM26",
    "titulo": "Invitación a Grande Compra: Dotación Nacional de Resmas, Carpetas y Suministros para Red Judicial",
    "organismo": "CORPORACIÓN ADMINISTRATIVA DEL PODER JUDICIAL (CAPJ)",
    "organismoRut": "60.301.000-0",
    "organismoPagoDias": 15,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 148000000,
    "montoUtm": 2260,
    "convenioMarcoNombre": "Convenio Marco de Escritorio, Papelería y Utiles de Oficina",
    "fechaPublicacion": "2026-07-22",
    "fechaCierre": "2026-08-08",
    "matchScore": 96,
    "riesgo": "Bajo",
    "empresaMatch": "Aminorte",
    "modalidad": "Grandes Compras",
    "esInvitacionGrandesCompras": true,
    "descripcion": "Intención de Compra en Convenio Marco (>1.000 UTM) solicitada por el Poder Judicial para la distribución nacional de suministros de escritorio, resmas, tinta y papelería legal a Tribunales y Cortes de Apelaciones.",
    "estado": "Publicada",
    "cronograma": [
      { "hito": "Publicación Grande Compra CAPJ", "fecha": "2026-07-22 07:30" },
      { "hito": "Cierre de Respuesta", "fecha": "2026-08-08 17:00" }
    ],
    "documentos": [
      { "nombre": "📄 Bases Grande Compra Poder Judicial.pdf", "tipo": "pdf", "tamanho": "4.2 MB" }
    ],
    "items": [
      { "sku": "ESC-RES-02", "producto": "Resma Papel Oficio 75g Alcalino", "cantidad": 25000, "precioUnitario": 4600 },
      { "sku": "ESC-CAR-01", "producto": "Carpetas Colgantes Legajadoras C/100", "cantidad": 1200, "precioUnitario": 27500 }
    ],
    "criteriosEvaluacion": [
      { "aspecto": "Precio Convenio", "ponderacion": 90, "descripcion": "Evaluación económica" },
      { "aspecto": "Garantía", "ponderacion": 10, "descripcion": "Calidad certificada" }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "historialPrecios": [
      { "fecha": "Jul 2026", "precioUnitarioPromedio": 148000000 }
    ]
  },
  {
    "id": "3047-1042-LE26",
    "codigo": "3047-1042-LE26",
    "titulo": "Suministro de Material y Desinfectantes Químicos de Aseo",
    "organismo": "ILUSTRE MUNICIPALIDAD DE SANTIAGO",
    "organismoRut": "61.601.500-0",
    "organismoPagoDias": 25,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 45000000,
    "fechaPublicacion": "2026-07-10",
    "fechaCierre": "2026-07-28",
    "matchScore": 96,
    "riesgo": "Bajo",
    "empresaMatch": "Inder-Roll",
    "modalidad": "Licitación",
    "descripcion": "Contratación del servicio de suministro permanente de cloro, alcohol gel, desinfectantes y papel secante para dependencias municipales, recintos deportivos y colegios administrados por la Ilustre Municipalidad de Santiago. Se requiere despacho centralizado quincenal.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación de bases",
        "fecha": "2026-07-10 12:00"
      },
      {
        "hito": "Preguntas y Aclaraciones",
        "fecha": "2026-07-18 18:00"
      },
      {
        "hito": "Respuestas de la Municipalidad",
        "fecha": "2026-07-22 18:00"
      },
      {
        "hito": "Cierre de postulaciones (Apertura técnica)",
        "fecha": "2026-07-28 14:00"
      },
      {
        "hito": "Adjudicación estimada",
        "fecha": "2026-08-10 17:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Administrativas_Santiago_Aseo.pdf",
        "tipo": "pdf",
        "tamanho": "2.4 MB"
      },
      {
        "nombre": "Bases_Tecnicas_Especificaciones.pdf",
        "tipo": "pdf",
        "tamanho": "1.8 MB"
      }
    ],
    "items": [
      {
        "sku": "CLO-CLO4",
        "producto": "Cloro Concentrado al 10% - Envase 5 Litros",
        "cantidad": 500,
        "precioUnitario": 4080
      },
      {
        "sku": "ANQ-G004",
        "producto": "Alcohol Gel al 70% - Bidón 5 Litros",
        "cantidad": 400,
        "precioUnitario": 17250
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Oferta Económica",
        "ponderacion": 50,
        "descripcion": "Menor costo total ofertado neto"
      },
      {
        "aspecto": "Calidad Técnica de Insumos",
        "ponderacion": 50,
        "descripcion": "Certificación de biodegradabilidad y registro ISP"
      }
    ],
    "preguntas": [],
    "comentarios": [
      {
        "id": "c-1",
        "usuario": "Jonathan Cooper",
        "rol": "Admin",
        "fecha": "2026-07-12 14:00",
        "texto": "Tenemos excelente margen con el Cloro Concentrado. Sugiero iniciar postulación inmediata."
      }
    ],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 38,
        "adjudicacionesRecientes": 12
      },
      {
        "nombre": "Distribuidora del Sur SpA",
        "rut": "88.441.220-4",
        "cuotaMercado": 15,
        "adjudicacionesRecientes": 4
      }
    ],
    "historialPrecios": [
      {
        "fecha": "Ene 2026",
        "precioUnitarioPromedio": 3950
      },
      {
        "fecha": "Jul 2026",
        "precioUnitarioPromedio": 4080
      }
    ]
  },
  {
    "id": "2210-441-LR26",
    "codigo": "2210-441-LR26",
    "titulo": "Suministro Escolar y Papelería Parvularia 2026",
    "organismo": "JUNTA NACIONAL DE JARDINES INFANTILES (JUNJI)",
    "organismoRut": "70.012.300-4",
    "organismoPagoDias": 45,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Valparaíso",
    "monto": 85000000,
    "fechaPublicacion": "2026-07-11",
    "fechaCierre": "2026-07-30",
    "matchScore": 89,
    "riesgo": "Medio",
    "empresaMatch": "Aminorte",
    "modalidad": "Convenio Marco",
    "descripcion": "Adquisición de kits de papelería, cartulinas, cuadernos, lápices de colores y resmas de papel tamaño carta/oficio para distribución en jardines infantiles de la Región de Valparaíso para el segundo semestre.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación de bases",
        "fecha": "2026-07-11 09:00"
      },
      {
        "hito": "Cierre",
        "fecha": "2026-07-30 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Suministro_Escolar_JUNJI.pdf",
        "tipo": "pdf",
        "tamanho": "3.1 MB"
      }
    ],
    "items": [
      {
        "sku": "ESC-001",
        "producto": "CUADERNO UNIVERSITARIO 100 HOJAS MATEMÁTICA",
        "cantidad": 5000,
        "precioUnitario": 1500
      },
      {
        "sku": "ESC-003",
        "producto": "RESMA DE PAPEL CARTA CHAMECO 75G",
        "cantidad": 1200,
        "precioUnitario": 4900
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Evaluación lineal matemática del menor valor"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 45,
        "adjudicacionesRecientes": 18
      }
    ],
    "historialPrecios": [
      {
        "fecha": "Jul 2026",
        "precioUnitarioPromedio": 12000
      }
    ]
  },
  {
    "id": "1052-88-LE26",
    "codigo": "1052-88-LE26",
    "titulo": "Adquisición de Archivadores y Resmas de Papel",
    "organismo": "SERVICIO DE SALUD METROPOLITANO SUR ORIENTE",
    "organismoRut": "60.901.000-7",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 34000000,
    "fechaPublicacion": "2026-07-14",
    "fechaCierre": "2026-08-15",
    "matchScore": 91,
    "riesgo": "Bajo",
    "empresaMatch": "Aminorte",
    "modalidad": "Licitación",
    "descripcion": "Adquisición de papelería, archivadores tamaño oficio de lomo ancho y resmas de papel para abastecer los centros hospitalarios de la red sur oriente.",
    "estado": "Cancelada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-07-14 10:00"
      },
      {
        "hito": "Cierre",
        "fecha": "2026-08-15 13:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Administrativas_SSMSO.pdf",
        "tipo": "pdf",
        "tamanho": "1.8 MB"
      }
    ],
    "items": [
      {
        "sku": "ESC-003",
        "producto": "RESMA DE PAPEL CARTA CHAMECO 75G",
        "cantidad": 4000,
        "precioUnitario": 4900
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo neto total"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Dimeiggs Distribuidora",
        "rut": "93.123.500-1",
        "cuotaMercado": 25,
        "adjudicacionesRecientes": 3
      }
    ]
  },
  {
    "id": "1057472-307-COT26",
    "codigo": "1057472-307-COT26",
    "titulo": "CUBRE CABEZA DESECHABLE TIPO ESCAFRANDA",
    "organismo": "HOSPITAL CLINICO METROPOLITANO EL CARMEN DOCTOR LUIS VALENTIN FERRADA",
    "organismoRut": "49.647.717-9",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 100000,
    "fechaPublicacion": "2026-07-22",
    "fechaCierre": "2026-07-25",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: CUBRE CABEZA DESECHABLE TIPO ESCAFRANDA. Organismo demandante: HOSPITAL CLINICO METROPOLITANO EL CARMEN DOCTOR LUIS VALENTIN FERRADA. Unidad de compra: Bienes y Servicios.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "22/07/2026 09:00"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "25/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1057472-307-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1057472-307-COT26",
        "producto": "CUBRE CABEZA DESECHABLE TIPO ESCAFRANDA",
        "cantidad": 1,
        "precioUnitario": 100000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2724-546-COT26",
    "codigo": "2724-546-COT26",
    "titulo": "MATERIALES DE ENSEÑANZA PROGRAMA 4 A 7 SAN CARLOS",
    "organismo": "ILUSTRE MUNICIPALIDAD DE SAN CARLOS",
    "organismoRut": "72.126.161-4",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Ñuble",
    "monto": 350000,
    "fechaPublicacion": "2026-07-22",
    "fechaCierre": "2026-07-26",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: MATERIALES DE ENSEÑANZA PROGRAMA 4 A 7 SAN CARLOS. Organismo demandante: ILUSTRE MUNICIPALIDAD DE SAN CARLOS. Unidad de compra: COMPRAS Y CONTRATACIONES MUNICIPALES.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "22/07/2026 10:00"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "26/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2724-546-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2724-546-COT26",
        "producto": "MATERIALES DE ENSEÑANZA PROGRAMA 4 A 7 SAN CARLOS",
        "cantidad": 1,
        "precioUnitario": 350000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1480133-85-COT26",
    "codigo": "1480133-85-COT26",
    "titulo": "PTR N°SN/1480133-84-COT26/SUMINISTRO/ESTACIONES DE ENERGIA PORTATIL DE CARGA. CON ENTREGA INMEDIATA",
    "organismo": "MUNICIPALIDAD DE VITACURA",
    "organismoRut": "94.729.072-3",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 3500000,
    "fechaPublicacion": "2026-07-22",
    "fechaCierre": "2026-07-27",
    "matchScore": 79,
    "riesgo": "Medio",
    "descripcion": "Proceso: PTR N°SN/1480133-84-COT26/SUMINISTRO/ESTACIONES DE ENERGIA PORTATIL DE CARGA. CON ENTREGA INMEDIATA. Organismo demandante: MUNICIPALIDAD DE VITACURA. Unidad de compra: DIRECCION DE DESARROLLO COMUNITARIO 133.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "22/07/2026 11:00"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "27/07/2026 17:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1480133-85-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1480133-85-COT26",
        "producto": "PTR N°SN/1480133-84-COT26/SUMINISTRO/ESTACIONES DE ENERGIA PORTATIL DE CARGA. CON ENTREGA INMEDIATA",
        "cantidad": 1,
        "precioUnitario": 3500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "567266-33-COT26",
    "codigo": "567266-33-COT26",
    "titulo": "COMPRA PROYECTO JARDIN SENSORIAL BIENESTAR",
    "organismo": "SSVQ / Servicio de Bienestar",
    "organismoRut": "16.959.428-8",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 500000,
    "fechaPublicacion": "2026-07-22",
    "fechaCierre": "2026-07-27",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: COMPRA PROYECTO JARDIN SENSORIAL BIENESTAR. Organismo demandante: SSVQ / Servicio de Bienestar. Unidad de compra: Servicio de Bienestar.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "22/07/2026 11:30"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "27/07/2026 14:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_567266-33-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-567266-33-COT26",
        "producto": "COMPRA PROYECTO JARDIN SENSORIAL BIENESTAR",
        "cantidad": 1,
        "precioUnitario": 500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2724-540-COT26",
    "codigo": "2724-540-COT26",
    "titulo": "SEÑALETICA PISO HUMEDO (DAF)",
    "organismo": "ILUSTRE MUNICIPALIDAD DE SAN CARLOS",
    "organismoRut": "72.126.161-4",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Ñuble",
    "monto": 140000,
    "fechaPublicacion": "2026-07-16",
    "fechaCierre": "2026-07-20",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: SEÑALETICA PISO HUMEDO (DAF). Organismo demandante: ILUSTRE MUNICIPALIDAD DE SAN CARLOS. Unidad de compra: COMPRAS Y CONTRATACIONES MUNICIPALES.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "16/07/2026 16:07"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2724-540-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2724-540-COT26",
        "producto": "SEÑALETICA PISO HUMEDO (DAF)",
        "cantidad": 1,
        "precioUnitario": 140000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3373-72-COT26",
    "codigo": "3373-72-COT26",
    "titulo": "ADQUISICION DE ELEMENTOS DE CONSTRUCCION PARA CURSO DOCENTE",
    "organismo": "Ejercito de Chile",
    "organismoRut": "90.520.203-8",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2394911,
    "fechaPublicacion": "2026-07-16",
    "fechaCierre": "2026-07-20",
    "matchScore": 80,
    "riesgo": "Medio",
    "descripcion": "Proceso: ADQUISICION DE ELEMENTOS DE CONSTRUCCION PARA CURSO DOCENTE. Organismo demandante: Ejercito de Chile. Unidad de compra: Escuela de Paracaidistas y Fuerzas Especiales - ESCPARACFFEE.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "16/07/2026 16:04"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3373-72-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3373-72-COT26",
        "producto": "ADQUISICION DE ELEMENTOS DE CONSTRUCCION PARA CURSO DOCENTE",
        "cantidad": 1,
        "precioUnitario": 2394911
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2724-533-COT26",
    "codigo": "2724-533-COT26",
    "titulo": "PENDONES Y MANTELES SPANDEX (SENDA)",
    "organismo": "ILUSTRE MUNICIPALIDAD DE SAN CARLOS",
    "organismoRut": "72.126.161-4",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Ñuble",
    "monto": 100000,
    "fechaPublicacion": "2026-07-16",
    "fechaCierre": "2026-07-20",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: PENDONES Y MANTELES SPANDEX (SENDA). Organismo demandante: ILUSTRE MUNICIPALIDAD DE SAN CARLOS. Unidad de compra: COMPRAS Y CONTRATACIONES MUNICIPALES.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "16/07/2026 15:32"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2724-533-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2724-533-COT26",
        "producto": "PENDONES Y MANTELES SPANDEX (SENDA)",
        "cantidad": 1,
        "precioUnitario": 100000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "5907-153-COT26",
    "codigo": "5907-153-COT26",
    "titulo": "Adquisición de bidones de agua + recarga agua purificada",
    "organismo": "ILUSTRE MUNICIPALIDAD DE HUARA",
    "organismoRut": "96.827.794-8",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 300000,
    "fechaPublicacion": "2026-07-16",
    "fechaCierre": "2026-07-20",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de bidones de agua + recarga agua purificada. Organismo demandante: ILUSTRE MUNICIPALIDAD DE HUARA. Unidad de compra: AREA FINANZAS.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "16/07/2026 14:48"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 15:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_5907-153-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-5907-153-COT26",
        "producto": "Adquisición de bidones de agua + recarga agua purificada",
        "cantidad": 1,
        "precioUnitario": 300000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "5907-152-COT26",
    "codigo": "5907-152-COT26",
    "titulo": "Servicio de impresión de dípticos informativo y credencias de identificación",
    "organismo": "ILUSTRE MUNICIPALIDAD DE HUARA",
    "organismoRut": "96.827.794-8",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 640000,
    "fechaPublicacion": "2026-07-16",
    "fechaCierre": "2026-07-20",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Servicio de impresión de dípticos informativo y credencias de identificación. Organismo demandante: ILUSTRE MUNICIPALIDAD DE HUARA. Unidad de compra: AREA FINANZAS.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "16/07/2026 13:25"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_5907-152-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-5907-152-COT26",
        "producto": "Servicio de impresión de dípticos informativo y credencias de identificación",
        "cantidad": 1,
        "precioUnitario": 640000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1953-279-COT26",
    "codigo": "1953-279-COT26",
    "titulo": "502/ADQUISICION DE MATERIALES DE USO Y CONSUMO PARA LA SECCION JUVENIL DEL CPV//E1ORT8",
    "organismo": "Dirección Regional de Gendarmeria - Valparaiso",
    "organismoRut": "79.136.292-3",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Valparaíso",
    "monto": 410000,
    "fechaPublicacion": "2026-07-16",
    "fechaCierre": "2026-07-17",
    "matchScore": 97,
    "riesgo": "Bajo",
    "descripcion": "Proceso: 502/ADQUISICION DE MATERIALES DE USO Y CONSUMO PARA LA SECCION JUVENIL DEL CPV//E1ORT8. Organismo demandante: Dirección Regional de Gendarmeria - Valparaiso. Unidad de compra: Región de Valparaíso.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "16/07/2026 13:18"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1953-279-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1953-279-COT26",
        "producto": "502/ADQUISICION DE MATERIALES DE USO Y CONSUMO PARA LA SECCION JUVENIL DEL CPV//E1ORT8",
        "cantidad": 1,
        "precioUnitario": 410000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1057494-420-COT26",
    "codigo": "1057494-420-COT26",
    "titulo": "Art. de escritorio mes julio 2026",
    "organismo": "SERVICIO DE SALUD SUR HOSPITAL EXEQUIEL",
    "organismoRut": "78.624.616-2",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 586000,
    "fechaPublicacion": "2026-07-16",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Art. de escritorio mes julio 2026. Organismo demandante: SERVICIO DE SALUD SUR HOSPITAL EXEQUIEL. Unidad de compra: Bienes y Servicios.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "16/07/2026 13:02"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1057494-420-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1057494-420-COT26",
        "producto": "Art. de escritorio mes julio 2026",
        "cantidad": 1,
        "precioUnitario": 586000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4030-119-COT26",
    "codigo": "4030-119-COT26",
    "titulo": "implementos para el programa Chile crece contigo 2026",
    "organismo": "ILUSTRE MUNICIPALIDAD DE CAMINA",
    "organismoRut": "16.221.218-K",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 180000,
    "fechaPublicacion": "2026-07-16",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: implementos para el programa Chile crece contigo 2026. Organismo demandante: ILUSTRE MUNICIPALIDAD DE CAMINA. Unidad de compra: Depto. De Salud.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "16/07/2026 12:46"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 14:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4030-119-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4030-119-COT26",
        "producto": "implementos para el programa Chile crece contigo 2026",
        "cantidad": 1,
        "precioUnitario": 20000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1250561-16-COT26",
    "codigo": "1250561-16-COT26",
    "titulo": "ESTADO VERDE.ESPECIFICACIONES TECNICAS PARA LA ADJUDICACIÓN DE CONFECCIÓN DE ORDEN DE TRABAJO PARA EL CET CERRADO DEL C.D.P CALAMA.",
    "organismo": "Centro de Educación y Trabajo CET Calama",
    "organismoRut": "97.800.868-K",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Antofagasta",
    "monto": 600000,
    "fechaPublicacion": "2026-07-16",
    "fechaCierre": "2026-07-21",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ESTADO VERDE.ESPECIFICACIONES TECNICAS PARA LA ADJUDICACIÓN DE CONFECCIÓN DE ORDEN DE TRABAJO PARA EL CET CERRADO DEL C.D.P CALAMA.. Organismo demandante: Centro de Educación y Trabajo CET Calama. Unidad de compra: Extrapresupuestaria - CET Cerrado CDP Calama.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "16/07/2026 12:45"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "21/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1250561-16-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1250561-16-COT26",
        "producto": "ESTADO VERDE.ESPECIFICACIONES TECNICAS PARA LA ADJUDICACIÓN DE CONFECCIÓN DE ORDEN DE TRABAJO PARA EL CET CERRADO DEL C.D.P CALAMA.",
        "cantidad": 1,
        "precioUnitario": 600000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4030-118-COT26",
    "codigo": "4030-118-COT26",
    "titulo": "implementos para el programa Chile crece contigo 2026",
    "organismo": "ILUSTRE MUNICIPALIDAD DE CAMINA",
    "organismoRut": "16.221.218-K",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 250000,
    "fechaPublicacion": "2026-07-16",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: implementos para el programa Chile crece contigo 2026. Organismo demandante: ILUSTRE MUNICIPALIDAD DE CAMINA. Unidad de compra: Depto. De Salud.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "16/07/2026 12:42"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 14:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4030-118-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4030-118-COT26",
        "producto": "implementos para el programa Chile crece contigo 2026",
        "cantidad": 1,
        "precioUnitario": 250000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2731-764-COT26",
    "codigo": "2731-764-COT26",
    "titulo": "DIDECO_Adquisicion de kit de higiene",
    "organismo": "I MUNICIPALIDAD DE PENAFLOR",
    "organismoRut": "22.861.591-7",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Medio",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 2850000,
    "fechaPublicacion": "2026-07-16",
    "fechaCierre": "2026-07-17",
    "matchScore": 79,
    "riesgo": "Medio",
    "descripcion": "Proceso: DIDECO_Adquisicion de kit de higiene. Organismo demandante: I MUNICIPALIDAD DE PENAFLOR. Unidad de compra: DEPARTAMENTO DE ADQUISICIONES MUNICIPALES.-.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "16/07/2026 12:06"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:20"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2731-764-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2731-764-COT26",
        "producto": "DIDECO_Adquisicion de kit de higiene",
        "cantidad": 1,
        "precioUnitario": 5000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1057494-419-COT26",
    "codigo": "1057494-419-COT26",
    "titulo": "Art. varios julio 2026",
    "organismo": "SERVICIO DE SALUD SUR HOSPITAL EXEQUIEL",
    "organismoRut": "78.624.616-2",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 271000,
    "fechaPublicacion": "2026-07-16",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Art. varios julio 2026. Organismo demandante: SERVICIO DE SALUD SUR HOSPITAL EXEQUIEL. Unidad de compra: Bienes y Servicios.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "16/07/2026 12:01"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 14:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1057494-419-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1057494-419-COT26",
        "producto": "Art. varios julio 2026",
        "cantidad": 1,
        "precioUnitario": 271000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3428-176-COT26",
    "codigo": "3428-176-COT26",
    "titulo": "Compra insumos computacionales para la JDN La Araucanía",
    "organismo": "Ejercito de Chile",
    "organismoRut": "90.520.203-8",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 400000,
    "fechaPublicacion": "2026-07-16",
    "fechaCierre": "2026-07-20",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Compra insumos computacionales para la JDN La Araucanía. Organismo demandante: Ejercito de Chile. Unidad de compra: Destacamento de Montaña N° 8 \"Tucapel\" DESMÑA N° 8.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "16/07/2026 11:17"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3428-176-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3428-176-COT26",
        "producto": "Compra insumos computacionales para la JDN La Araucanía",
        "cantidad": 1,
        "precioUnitario": 400000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "617807-1738-COT26",
    "codigo": "617807-1738-COT26",
    "titulo": "HAAV TARJETAS DE CARTON PARA ALIMENTACION",
    "organismo": "SERV NAC SALUD HOSPITAL DE LOS ANDES",
    "organismoRut": "17.954.257-3",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Valparaíso",
    "monto": 440000,
    "fechaPublicacion": "2026-07-16",
    "fechaCierre": "2026-07-17",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: HAAV TARJETAS DE CARTON PARA ALIMENTACION. Organismo demandante: SERV NAC SALUD HOSPITAL DE LOS ANDES. Unidad de compra: Hospital San Juan de Dios de Los Andes.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "16/07/2026 10:35"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_617807-1738-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-617807-1738-COT26",
        "producto": "HAAV TARJETAS DE CARTON PARA ALIMENTACION",
        "cantidad": 1,
        "precioUnitario": 440000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "617807-1733-COT26",
    "codigo": "617807-1733-COT26",
    "titulo": "HAAV COMPRA DE TONER",
    "organismo": "SERV NAC SALUD HOSPITAL DE LOS ANDES",
    "organismoRut": "17.954.257-3",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Valparaíso",
    "monto": 210000,
    "fechaPublicacion": "2026-07-16",
    "fechaCierre": "2026-07-17",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: HAAV COMPRA DE TONER. Organismo demandante: SERV NAC SALUD HOSPITAL DE LOS ANDES. Unidad de compra: Hospital San Juan de Dios de Los Andes.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "16/07/2026 10:10"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:15"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_617807-1733-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-617807-1733-COT26",
        "producto": "HAAV COMPRA DE TONER",
        "cantidad": 1,
        "precioUnitario": 210000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3438-134-COT26",
    "codigo": "3438-134-COT26",
    "titulo": "Adquisición de materiales para reparación del baño femenino 1er piso de la Subdirección de la Escuela de Infantería",
    "organismo": "Ejercito de Chile",
    "organismoRut": "90.520.203-8",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2000000,
    "fechaPublicacion": "2026-07-16",
    "fechaCierre": "2026-07-20",
    "matchScore": 98,
    "riesgo": "Medio",
    "descripcion": "Proceso: Adquisición de materiales para reparación del baño femenino 1er piso de la Subdirección de la Escuela de Infantería. Organismo demandante: Ejercito de Chile. Unidad de compra: Escuela de Infantería - ESCINF.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "16/07/2026 09:28"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3438-134-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3438-134-COT26",
        "producto": "Adquisición de materiales para reparación del baño femenino 1er piso de la Subdirección de la Escuela de Infantería",
        "cantidad": 1,
        "precioUnitario": 2000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1350296-336-COT26",
    "codigo": "1350296-336-COT26",
    "titulo": "ADQ/\"ADQUISICIÓN DE MATERIALES DE MERCERÍA PARA UHCIP EN LA UNIDAD DE BODEGA GENERAL DEL HOPITAL DE ALTO HOSPICIO; FR 2026-675\"",
    "organismo": "HOSPITAL DE ALTO HOSPICIO",
    "organismoRut": "82.561.957-9",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 288142,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQ/\"ADQUISICIÓN DE MATERIALES DE MERCERÍA PARA UHCIP EN LA UNIDAD DE BODEGA GENERAL DEL HOPITAL DE ALTO HOSPICIO; FR 2026-675\". Organismo demandante: HOSPITAL DE ALTO HOSPICIO. Unidad de compra: ABASTECIMIENTO HAH.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 20:34"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1350296-336-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1350296-336-COT26",
        "producto": "ADQ/\"ADQUISICIÓN DE MATERIALES DE MERCERÍA PARA UHCIP EN LA UNIDAD DE BODEGA GENERAL DEL HOPITAL DE ALTO HOSPICIO; FR 2026-675\"",
        "cantidad": 1,
        "precioUnitario": 288142
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4819-61-COT26",
    "codigo": "4819-61-COT26",
    "titulo": "SOLICITUD DE COMPRA MATERIAL DE ASEO, SENADO SANTIAGO.",
    "organismo": "SENADO DE LA REPUBLICA",
    "organismoRut": "96.894.999-1",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 650000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso: SOLICITUD DE COMPRA MATERIAL DE ASEO, SENADO SANTIAGO.. Organismo demandante: SENADO DE LA REPUBLICA. Unidad de compra: MATERIALES Y SUMINISTROS.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 19:14"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4819-61-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4819-61-COT26",
        "producto": "SOLICITUD DE COMPRA MATERIAL DE ASEO, SENADO SANTIAGO.",
        "cantidad": 1,
        "precioUnitario": 650000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "559322-197-COT26",
    "codigo": "559322-197-COT26",
    "titulo": "Compra de filamentos",
    "organismo": "UNIVERSIDAD DE CHILE",
    "organismoRut": "89.728.640-K",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 350000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-19",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Compra de filamentos. Organismo demandante: UNIVERSIDAD DE CHILE. Unidad de compra: FCFM Centro AMTC.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 19:03"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "19/07/2026 23:59"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_559322-197-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-559322-197-COT26",
        "producto": "Compra de filamentos",
        "cantidad": 1,
        "precioUnitario": 350000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4030-112-COT26",
    "codigo": "4030-112-COT26",
    "titulo": "INCENTIVOS DEPORTIVOS PARA ACTIVIDAD DE PROMOCION",
    "organismo": "ILUSTRE MUNICIPALIDAD DE CAMINA",
    "organismoRut": "16.221.218-K",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 150000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: INCENTIVOS DEPORTIVOS PARA ACTIVIDAD DE PROMOCION. Organismo demandante: ILUSTRE MUNICIPALIDAD DE CAMINA. Unidad de compra: Depto. De Salud.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 18:56"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 13:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4030-112-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4030-112-COT26",
        "producto": "INCENTIVOS DEPORTIVOS PARA ACTIVIDAD DE PROMOCION",
        "cantidad": 1,
        "precioUnitario": 150000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3438-133-COT26",
    "codigo": "3438-133-COT26",
    "titulo": "Adquisición de elementos de construcción para dependencias del BTN INF MOT del Instituto",
    "organismo": "Ejercito de Chile",
    "organismoRut": "90.520.203-8",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1520000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 98,
    "riesgo": "Medio",
    "descripcion": "Proceso: Adquisición de elementos de construcción para dependencias del BTN INF MOT del Instituto. Organismo demandante: Ejercito de Chile. Unidad de compra: Escuela de Infantería - ESCINF.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 18:46"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 17:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3438-133-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3438-133-COT26",
        "producto": "Adquisición de elementos de construcción para dependencias del BTN INF MOT del Instituto",
        "cantidad": 1,
        "precioUnitario": 1520000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "960854-12-COT26",
    "codigo": "960854-12-COT26",
    "titulo": "MATERIALES DE FERRETERIA PARA ESTABLECIMIENTOS EDUCACIONALES E-103, E-120, F-94, F-115, G-112 Y G-131 DE COLLIPULLI",
    "organismo": "I MUNICIPALIDAD DE COLLIPULLI",
    "organismoRut": "50.732.865-6",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2014900,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 80,
    "riesgo": "Medio",
    "descripcion": "Proceso: MATERIALES DE FERRETERIA PARA ESTABLECIMIENTOS EDUCACIONALES E-103, E-120, F-94, F-115, G-112 Y G-131 DE COLLIPULLI. Organismo demandante: I MUNICIPALIDAD DE COLLIPULLI. Unidad de compra: VICTOR DURAN PEREZ.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 18:38"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 12:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_960854-12-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-960854-12-COT26",
        "producto": "MATERIALES DE FERRETERIA PARA ESTABLECIMIENTOS EDUCACIONALES E-103, E-120, F-94, F-115, G-112 Y G-131 DE COLLIPULLI",
        "cantidad": 1,
        "precioUnitario": 7164900
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1376-135-COT26",
    "codigo": "1376-135-COT26",
    "titulo": "COMPRA DE MATERIALES CCP DE CHAÑARAL",
    "organismo": "Dirección Regional de Gendarmeria - Copiapo",
    "organismoRut": "50.377.821-5",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Atacama",
    "monto": 3000000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Medio",
    "descripcion": "Proceso: COMPRA DE MATERIALES CCP DE CHAÑARAL. Organismo demandante: Dirección Regional de Gendarmeria - Copiapo. Unidad de compra: Región de Atacama.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 18:37"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1376-135-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1376-135-COT26",
        "producto": "COMPRA DE MATERIALES CCP DE CHAÑARAL",
        "cantidad": 1,
        "precioUnitario": 3000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "856-34-COT26",
    "codigo": "856-34-COT26",
    "titulo": "Cinta antideslizante y cinta de peligro",
    "organismo": "JUNTA NACIONAL DE JARDINES         INFANTILES",
    "organismoRut": "57.251.401-6",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 380000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 81,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Cinta antideslizante y cinta de peligro. Organismo demandante: JUNTA NACIONAL DE JARDINES         INFANTILES. Unidad de compra: Junji - Región Metropolitana.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 18:37"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 16:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_856-34-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-856-34-COT26",
        "producto": "Cinta antideslizante y cinta de peligro",
        "cantidad": 1,
        "precioUnitario": 63000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1220190-1-COT26",
    "codigo": "1220190-1-COT26",
    "titulo": "IMPLEMENTOS PARA MATERIALIZACION DE EXPULSADOS",
    "organismo": "SERVICIO NACIONAL DE MIGRACIONES",
    "organismoRut": "10.653.953-7",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2800000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-21",
    "matchScore": 96,
    "riesgo": "Medio",
    "descripcion": "Proceso: IMPLEMENTOS PARA MATERIALIZACION DE EXPULSADOS. Organismo demandante: SERVICIO NACIONAL DE MIGRACIONES. Unidad de compra: SECCIÓN EXPULSADOS.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 18:24"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "21/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1220190-1-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1220190-1-COT26",
        "producto": "IMPLEMENTOS PARA MATERIALIZACION DE EXPULSADOS",
        "cantidad": 1,
        "precioUnitario": 2800000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4469-194-COT26",
    "codigo": "4469-194-COT26",
    "titulo": "SC 39815 (CS) OTROS SERVICIOS NO CONSIDERADOS, SOLICITADOS POR E.E. ACOMPAÑADOS EN PROYECTO MINEDUC-SLEP",
    "organismo": "UNIVERSIDAD DE PLAYA ANCHA DE CIENCIAS DE LA EDUCACION",
    "organismoRut": "33.395.666-K",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 713440,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-21",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: SC 39815 (CS) OTROS SERVICIOS NO CONSIDERADOS, SOLICITADOS POR E.E. ACOMPAÑADOS EN PROYECTO MINEDUC-SLEP. Organismo demandante: UNIVERSIDAD DE PLAYA ANCHA DE CIENCIAS DE LA EDUCACION. Unidad de compra: ADQUISICIONES.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 18:22"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "21/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4469-194-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4469-194-COT26",
        "producto": "SC 39815 (CS) OTROS SERVICIOS NO CONSIDERADOS, SOLICITADOS POR E.E. ACOMPAÑADOS EN PROYECTO MINEDUC-SLEP",
        "cantidad": 1,
        "precioUnitario": 713440
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1738-253-COT26",
    "codigo": "1738-253-COT26",
    "titulo": "ADQUISICION DE MATERIALES, HERRAMIENTAS Y EQUIPAMIENTO PARA OBRAS DE TABIQUERIA, AISLACION, REVESTIMIENTO Y PINTURA DE SALA DE MUSCULACION",
    "organismo": "I MUNICIPALIDAD DE VILLA ALEGRE",
    "organismoRut": "44.364.022-8",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1965000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 97,
    "riesgo": "Medio",
    "descripcion": "Proceso: ADQUISICION DE MATERIALES, HERRAMIENTAS Y EQUIPAMIENTO PARA OBRAS DE TABIQUERIA, AISLACION, REVESTIMIENTO Y PINTURA DE SALA DE MUSCULACION. Organismo demandante: I MUNICIPALIDAD DE VILLA ALEGRE. Unidad de compra: Ilustre Municipalidad de Villa Alegre.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 18:14"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 18:45"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1738-253-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1738-253-COT26",
        "producto": "ADQUISICION DE MATERIALES, HERRAMIENTAS Y EQUIPAMIENTO PARA OBRAS DE TABIQUERIA, AISLACION, REVESTIMIENTO Y PINTURA DE SALA DE MUSCULACION",
        "cantidad": 1,
        "precioUnitario": 7115000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1057489-296-COT26",
    "codigo": "1057489-296-COT26",
    "titulo": "ADQUISICIÓN DE CAJAS PLASTICAS PARA UNIDADES DEL HDS.",
    "organismo": "SERVICIO DE SALUD ORIENTE HOSPITAL DEL SALVADOR",
    "organismoRut": "60.846.385-4",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1839237,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 97,
    "riesgo": "Medio",
    "descripcion": "Proceso: ADQUISICIÓN DE CAJAS PLASTICAS PARA UNIDADES DEL HDS.. Organismo demandante: SERVICIO DE SALUD ORIENTE HOSPITAL DEL SALVADOR. Unidad de compra: Bienes y Servicios.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 18:13"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 14:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1057489-296-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1057489-296-COT26",
        "producto": "ADQUISICIÓN DE CAJAS PLASTICAS PARA UNIDADES DEL HDS.",
        "cantidad": 1,
        "precioUnitario": 3989237
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2460-699-COT26",
    "codigo": "2460-699-COT26",
    "titulo": "Adquisición de toner para impresoras municipales.-",
    "organismo": "I MUNICIPALIDAD DE PROVIDENCIA",
    "organismoRut": "18.758.582-3",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 480000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de toner para impresoras municipales.-. Organismo demandante: I MUNICIPALIDAD DE PROVIDENCIA. Unidad de compra: Dirección de Administración y Finanzas.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 18:10"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2460-699-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2460-699-COT26",
        "producto": "Adquisición de toner para impresoras municipales.-",
        "cantidad": 1,
        "precioUnitario": 480000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3921-233-COT26",
    "codigo": "3921-233-COT26",
    "titulo": "COMPRA DE TINTAS",
    "organismo": "I MUNICIPALIDAD DE VILLARRICA",
    "organismoRut": "46.975.983-3",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2010000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 75,
    "riesgo": "Medio",
    "descripcion": "Proceso: COMPRA DE TINTAS. Organismo demandante: I MUNICIPALIDAD DE VILLARRICA. Unidad de compra: salud.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 18:06"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3921-233-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3921-233-COT26",
        "producto": "COMPRA DE TINTAS",
        "cantidad": 1,
        "precioUnitario": 7160000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2297-985-COT26",
    "codigo": "2297-985-COT26",
    "titulo": "ADQUISICION ELEMENTOS DE SEGURIDAD PUESTOS DE TRABAJO",
    "organismo": "I MUNICIPALIDAD DE OSORNO",
    "organismoRut": "31.620.320-1",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Los Lagos",
    "monto": 100000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 81,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICION ELEMENTOS DE SEGURIDAD PUESTOS DE TRABAJO. Organismo demandante: I MUNICIPALIDAD DE OSORNO. Unidad de compra: IMUNI_OSORNO DIRECCION DE ADM Y FINANZAS.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 18:04"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 18:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2297-985-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2297-985-COT26",
        "producto": "ADQUISICION ELEMENTOS DE SEGURIDAD PUESTOS DE TRABAJO",
        "cantidad": 1,
        "precioUnitario": 100000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2281-1312-COT26",
    "codigo": "2281-1312-COT26",
    "titulo": "IMPRESIÓN DE PRODUCTOS PARA DIFUSION Y PUBLICIDAD",
    "organismo": "I MUNICIPALIDAD VALDIVIA",
    "organismoRut": "14.295.151-5",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Los Ríos",
    "monto": 2850000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 97,
    "riesgo": "Medio",
    "descripcion": "Proceso: IMPRESIÓN DE PRODUCTOS PARA DIFUSION Y PUBLICIDAD. Organismo demandante: I MUNICIPALIDAD VALDIVIA. Unidad de compra: UNIDAD ADQUISICIONES MUNICIPAL VALDIVIA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:59"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2281-1312-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2281-1312-COT26",
        "producto": "IMPRESIÓN DE PRODUCTOS PARA DIFUSION Y PUBLICIDAD",
        "cantidad": 1,
        "precioUnitario": 5000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1386073-88-COT26",
    "codigo": "1386073-88-COT26",
    "titulo": "SERVICIO DE IMPRESIÓN GRÁFICA DE SEÑALÉTICAS PARA MUSEO INTERACTIVO LAS CONDES",
    "organismo": "CORP CULTURAL DE LAS CONDES",
    "organismoRut": "51.639.863-9",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 750000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: SERVICIO DE IMPRESIÓN GRÁFICA DE SEÑALÉTICAS PARA MUSEO INTERACTIVO LAS CONDES. Organismo demandante: CORP CULTURAL DE LAS CONDES. Unidad de compra: CORP CULTURAL DE LAS CONDES.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:59"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1386073-88-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1386073-88-COT26",
        "producto": "SERVICIO DE IMPRESIÓN GRÁFICA DE SEÑALÉTICAS PARA MUSEO INTERACTIVO LAS CONDES",
        "cantidad": 1,
        "precioUnitario": 750000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4882-30-COT26",
    "codigo": "4882-30-COT26",
    "titulo": "Compra de materiales de oficina área fondos",
    "organismo": "Subsecretaria de las Culturas y las Artes Región de Coquimbo",
    "organismoRut": "33.841.659-0",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Coquimbo",
    "monto": 200000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-22",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Compra de materiales de oficina área fondos. Organismo demandante: Subsecretaria de las Culturas y las Artes Región de Coquimbo. Unidad de compra: Consejo Regional de la Cultura y las ArtesCoquimbo.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:56"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "22/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4882-30-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4882-30-COT26",
        "producto": "Compra de materiales de oficina área fondos",
        "cantidad": 1,
        "precioUnitario": 200000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "681016-31-COT26",
    "codigo": "681016-31-COT26",
    "titulo": "COMPRA DE INSUMOS PARA MULTICOPIADORA LEXMARK MX 711 DEL JUZGADO DE FAMILIA DE VALLENAR",
    "organismo": "JUZGADO DE FAMILIA DE VALLENAR",
    "organismoRut": "89.076.926-9",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Atacama",
    "monto": 181000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-21",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: COMPRA DE INSUMOS PARA MULTICOPIADORA LEXMARK MX 711 DEL JUZGADO DE FAMILIA DE VALLENAR. Organismo demandante: JUZGADO DE FAMILIA DE VALLENAR. Unidad de compra: Jdo de Familia de Vallenar.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:55"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "21/07/2026 18:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_681016-31-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-681016-31-COT26",
        "producto": "COMPRA DE INSUMOS PARA MULTICOPIADORA LEXMARK MX 711 DEL JUZGADO DE FAMILIA DE VALLENAR",
        "cantidad": 1,
        "precioUnitario": 1
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1079969-98-COT26",
    "codigo": "1079969-98-COT26",
    "titulo": "ADQUISICIÓN DE TONER DE IMPRESORAS HP, BROTHER Y PLOTTER HP PARA LA ZOSEPCAR",
    "organismo": "SECCIÓN COMPRAS ZONA SEG PRIV CONTROL ARMAS Y EXPL",
    "organismoRut": "48.198.866-K",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1747411,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 80,
    "riesgo": "Medio",
    "descripcion": "Proceso: ADQUISICIÓN DE TONER DE IMPRESORAS HP, BROTHER Y PLOTTER HP PARA LA ZOSEPCAR. Organismo demandante: SECCIÓN COMPRAS ZONA SEG PRIV CONTROL ARMAS Y EXPL. Unidad de compra: SECCIÓN COMPRAS ZONA SEG PRIV CONTROL ARMAS Y EXPL.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:55"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1079969-98-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1079969-98-COT26",
        "producto": "ADQUISICIÓN DE TONER DE IMPRESORAS HP, BROTHER Y PLOTTER HP PARA LA ZOSEPCAR",
        "cantidad": 1,
        "precioUnitario": 6897411
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1183926-159-COT26",
    "codigo": "1183926-159-COT26",
    "titulo": "Art de librería SENCE",
    "organismo": "CENTRO DE FORMACIÓN TÉCNICA ESTATAL DE LA REGIÓN D",
    "organismoRut": "31.565.819-5",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 195866,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Art de librería SENCE. Organismo demandante: CENTRO DE FORMACIÓN TÉCNICA ESTATAL DE LA REGIÓN D. Unidad de compra: Casa Central.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:55"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 17:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1183926-159-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1183926-159-COT26",
        "producto": "Art de librería SENCE",
        "cantidad": 1,
        "precioUnitario": 195866
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1410-258-COT26",
    "codigo": "1410-258-COT26",
    "titulo": "C.D.P CALAMA, REQUIERE LA COMPRA DE INSUMOS DE ASEO PARA AREA ALIMENTACIÓN",
    "organismo": "Dirección Regional de Gendarmeria - Antofagasta",
    "organismoRut": "51.692.363-8",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Medio",
    "rubro": "Aseo e Higiene",
    "region": "Antofagasta",
    "monto": 2000000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 97,
    "riesgo": "Medio",
    "descripcion": "Proceso: C.D.P CALAMA, REQUIERE LA COMPRA DE INSUMOS DE ASEO PARA AREA ALIMENTACIÓN. Organismo demandante: Dirección Regional de Gendarmeria - Antofagasta. Unidad de compra: Región de Antofagasta.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:54"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 16:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1410-258-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1410-258-COT26",
        "producto": "C.D.P CALAMA, REQUIERE LA COMPRA DE INSUMOS DE ASEO PARA AREA ALIMENTACIÓN",
        "cantidad": 1,
        "precioUnitario": 2000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3621-219-COT26",
    "codigo": "3621-219-COT26",
    "titulo": "COMPRA DE INSUMOS PARA ACTIVIDADES TALLERES PROGRAMA HABILIDADES PARA LA VIDA II",
    "organismo": "I MUNICIPALIDAD DE CABILDO",
    "organismoRut": "90.424.506-8",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2620000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Medio",
    "descripcion": "Proceso: COMPRA DE INSUMOS PARA ACTIVIDADES TALLERES PROGRAMA HABILIDADES PARA LA VIDA II. Organismo demandante: I MUNICIPALIDAD DE CABILDO. Unidad de compra: I MUNICIPALIDAD DE CABILDO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:53"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3621-219-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3621-219-COT26",
        "producto": "COMPRA DE INSUMOS PARA ACTIVIDADES TALLERES PROGRAMA HABILIDADES PARA LA VIDA II",
        "cantidad": 1,
        "precioUnitario": 4770000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4477-167-COT26",
    "codigo": "4477-167-COT26",
    "titulo": "ARTICULOS LIBRERIA ESC. H. BAJO",
    "organismo": "Ilustre Municipalidad de Contulmo - Educación",
    "organismoRut": "66.154.210-2",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 250000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-27",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ARTICULOS LIBRERIA ESC. H. BAJO. Organismo demandante: Ilustre Municipalidad de Contulmo - Educación. Unidad de compra: Educación.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:52"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "27/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4477-167-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4477-167-COT26",
        "producto": "ARTICULOS LIBRERIA ESC. H. BAJO",
        "cantidad": 1,
        "precioUnitario": 250000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1411-779-COT26",
    "codigo": "1411-779-COT26",
    "titulo": "cdp stgo sur",
    "organismo": "Dirección Regional de Gendarmeria - Metropolitana",
    "organismoRut": "29.021.123-9",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1850000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Medio",
    "descripcion": "Proceso: cdp stgo sur. Organismo demandante: Dirección Regional de Gendarmeria - Metropolitana. Unidad de compra: Región Metropolitana.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:50"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1411-779-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1411-779-COT26",
        "producto": "cdp stgo sur",
        "cantidad": 1,
        "precioUnitario": 4000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3751-90-COT26",
    "codigo": "3751-90-COT26",
    "titulo": "Materiales electricos para escuela Susana Ortiz",
    "organismo": "I MUNICIPALIDAD DE PITRUFQUEN",
    "organismoRut": "38.711.379-3",
    "organismoPagoDias": 40,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2025240,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 82,
    "riesgo": "Medio",
    "descripcion": "Proceso: Materiales electricos para escuela Susana Ortiz. Organismo demandante: I MUNICIPALIDAD DE PITRUFQUEN. Unidad de compra: Dpto.Educación Municipal.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:50"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3751-90-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3751-90-COT26",
        "producto": "Materiales electricos para escuela Susana Ortiz",
        "cantidad": 1,
        "precioUnitario": 2025240
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1436733-65-COT26",
    "codigo": "1436733-65-COT26",
    "titulo": "ADQUISICIÓN DE ARTICULOS DE ESCRITORIO (Equipos y accesorios) PARA LOS ESTABLECIMIENTO EDUCACIONAL DEL SERVICIO LOCAL DE EDUCACIÓN PÚBLICA DE LOS LIBERTADORES",
    "organismo": "Servicio Local de Educación Pública de Los Liberta",
    "organismoRut": "16.458.344-9",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1850000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 77,
    "riesgo": "Medio",
    "descripcion": "Proceso: ADQUISICIÓN DE ARTICULOS DE ESCRITORIO (Equipos y accesorios) PARA LOS ESTABLECIMIENTO EDUCACIONAL DEL SERVICIO LOCAL DE EDUCACIÓN PÚBLICA DE LOS LIBERTADORES. Organismo demandante: Servicio Local de Educación Pública de Los Liberta. Unidad de compra: Compras y licitaciones P02.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:50"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1436733-65-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1436733-65-COT26",
        "producto": "ADQUISICIÓN DE ARTICULOS DE ESCRITORIO (Equipos y accesorios) PARA LOS ESTABLECIMIENTO EDUCACIONAL DEL SERVICIO LOCAL DE EDUCACIÓN PÚBLICA DE LOS LIBERTADORES",
        "cantidad": 1,
        "precioUnitario": 4000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4314-193-COT26",
    "codigo": "4314-193-COT26",
    "titulo": "Insumos de higiene personal para estudiantes Programa Residencia Familiar Estudiantil (PRFE)",
    "organismo": "ILUSTRE MUNICIPALIDAD DE CUREPTO",
    "organismoRut": "64.371.407-0",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 250000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Insumos de higiene personal para estudiantes Programa Residencia Familiar Estudiantil (PRFE). Organismo demandante: ILUSTRE MUNICIPALIDAD DE CUREPTO. Unidad de compra: DEPTO. ADM. Y FINANZAS.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:50"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 08:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4314-193-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4314-193-COT26",
        "producto": "Insumos de higiene personal para estudiantes Programa Residencia Familiar Estudiantil (PRFE)",
        "cantidad": 1,
        "precioUnitario": 250000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1436733-64-COT26",
    "codigo": "1436733-64-COT26",
    "titulo": "ADQUISICIÓN DE ARTICULOS DE ESCRITORIO (Papelería y Útiles) PARA LOS ESTABLECIMIENTO EDUCACIONAL DEL SERVICIO LOCAL DE EDUCACIÓN PÚBLICA DE LOS LIBERTADORES",
    "organismo": "Servicio Local de Educación Pública de Los Liberta",
    "organismoRut": "16.458.344-9",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1850000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 77,
    "riesgo": "Medio",
    "descripcion": "Proceso: ADQUISICIÓN DE ARTICULOS DE ESCRITORIO (Papelería y Útiles) PARA LOS ESTABLECIMIENTO EDUCACIONAL DEL SERVICIO LOCAL DE EDUCACIÓN PÚBLICA DE LOS LIBERTADORES. Organismo demandante: Servicio Local de Educación Pública de Los Liberta. Unidad de compra: Compras y licitaciones P02.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:45"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1436733-64-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1436733-64-COT26",
        "producto": "ADQUISICIÓN DE ARTICULOS DE ESCRITORIO (Papelería y Útiles) PARA LOS ESTABLECIMIENTO EDUCACIONAL DEL SERVICIO LOCAL DE EDUCACIÓN PÚBLICA DE LOS LIBERTADORES",
        "cantidad": 1,
        "precioUnitario": 4000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1183926-156-COT26",
    "codigo": "1183926-156-COT26",
    "titulo": "Calculadoras SENCE",
    "organismo": "CENTRO DE FORMACIÓN TÉCNICA ESTATAL DE LA REGIÓN D",
    "organismoRut": "31.565.819-5",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 600000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Calculadoras SENCE. Organismo demandante: CENTRO DE FORMACIÓN TÉCNICA ESTATAL DE LA REGIÓN D. Unidad de compra: Casa Central.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:44"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1183926-156-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1183926-156-COT26",
        "producto": "Calculadoras SENCE",
        "cantidad": 1,
        "precioUnitario": 600000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3335-816-COT26",
    "codigo": "3335-816-COT26",
    "titulo": "INSUMO DE IMPRESIÓN PARA UNIDAD DE CONTABILIDAD Y FINANZAS DAEM LA UNIÓN ORD. INT. N°487 FONDOS 10% ADMINISTRACIÓN CENTRAL SEP",
    "organismo": "I MUNICIPALIDAD DE LA UNION",
    "organismoRut": "12.418.148-3",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Los Ríos",
    "monto": 166481,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 81,
    "riesgo": "Bajo",
    "descripcion": "Proceso: INSUMO DE IMPRESIÓN PARA UNIDAD DE CONTABILIDAD Y FINANZAS DAEM LA UNIÓN ORD. INT. N°487 FONDOS 10% ADMINISTRACIÓN CENTRAL SEP. Organismo demandante: I MUNICIPALIDAD DE LA UNION. Unidad de compra: Departamento de Educación.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:43"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3335-816-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3335-816-COT26",
        "producto": "INSUMO DE IMPRESIÓN PARA UNIDAD DE CONTABILIDAD Y FINANZAS DAEM LA UNIÓN ORD. INT. N°487 FONDOS 10% ADMINISTRACIÓN CENTRAL SEP",
        "cantidad": 1,
        "precioUnitario": 166481
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4887-32-COT26",
    "codigo": "4887-32-COT26",
    "titulo": "Adquisición de insumos de aseo e higiene para el Centro de Creación, Temuco",
    "organismo": "Subsecretaria de las Culturas y las Artes Region de la Araucania",
    "organismoRut": "80.513.856-4",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "La Araucanía",
    "monto": 500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-21",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de insumos de aseo e higiene para el Centro de Creación, Temuco. Organismo demandante: Subsecretaria de las Culturas y las Artes Region de la Araucania. Unidad de compra: Consejo Regional de la Cultura y las Artes de la Araucanía.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:39"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "21/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4887-32-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4887-32-COT26",
        "producto": "Adquisición de insumos de aseo e higiene para el Centro de Creación, Temuco",
        "cantidad": 1,
        "precioUnitario": 500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4075-80-COT26",
    "codigo": "4075-80-COT26",
    "titulo": "COMPRA DE PENDON PARA COMITÉ DE LACTANCIA DE CESFAM",
    "organismo": "Ilustre Municipalidad de Yumbel - Depto. Salud",
    "organismoRut": "89.952.983-0",
    "organismoPagoDias": 40,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 100000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 82,
    "riesgo": "Bajo",
    "descripcion": "Proceso: COMPRA DE PENDON PARA COMITÉ DE LACTANCIA DE CESFAM. Organismo demandante: Ilustre Municipalidad de Yumbel - Depto. Salud. Unidad de compra: DEPTO SALUD.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:34"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4075-80-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4075-80-COT26",
        "producto": "COMPRA DE PENDON PARA COMITÉ DE LACTANCIA DE CESFAM",
        "cantidad": 1,
        "precioUnitario": 100000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1057414-72-COT26",
    "codigo": "1057414-72-COT26",
    "titulo": "ADQUISICIÓN DE INSUMOS DE ASEO PARA EL CENTRO DE DEMENCIA",
    "organismo": "SERVICIO DE SALUD BIO BIO",
    "organismoRut": "85.444.488-5",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Medio",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 2000000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 78,
    "riesgo": "Medio",
    "descripcion": "Proceso: ADQUISICIÓN DE INSUMOS DE ASEO PARA EL CENTRO DE DEMENCIA. Organismo demandante: SERVICIO DE SALUD BIO BIO. Unidad de compra: Bienes y Servicios.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:32"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1057414-72-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1057414-72-COT26",
        "producto": "ADQUISICIÓN DE INSUMOS DE ASEO PARA EL CENTRO DE DEMENCIA",
        "cantidad": 1,
        "precioUnitario": 2000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1028897-351-COT26",
    "codigo": "1028897-351-COT26",
    "titulo": "ADQUISICION DE INSUMOS Y MATERIALES DE GASTRONOMIA PARA ACTIVIDAD ESCOLAR EL 22 DE JULIO DE 2026, EE. LICEO TP DE HUALPIN, RBD 20053, DE LA COMUNA DE TEODORO SCHMIDT",
    "organismo": "SERVICIO LOCAL DE EDUCACION COSTA ARAUCANIA",
    "organismoRut": "48.725.936-0",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "La Araucanía",
    "monto": 848080,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICION DE INSUMOS Y MATERIALES DE GASTRONOMIA PARA ACTIVIDAD ESCOLAR EL 22 DE JULIO DE 2026, EE. LICEO TP DE HUALPIN, RBD 20053, DE LA COMUNA DE TEODORO SCHMIDT. Organismo demandante: SERVICIO LOCAL DE EDUCACION COSTA ARAUCANIA. Unidad de compra: Subdirección de administración y finanzas.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:32"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1028897-351-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1028897-351-COT26",
        "producto": "ADQUISICION DE INSUMOS Y MATERIALES DE GASTRONOMIA PARA ACTIVIDAD ESCOLAR EL 22 DE JULIO DE 2026, EE. LICEO TP DE HUALPIN, RBD 20053, DE LA COMUNA DE TEODORO SCHMIDT",
        "cantidad": 1,
        "precioUnitario": 848080
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1876-26-COT26",
    "codigo": "1876-26-COT26",
    "titulo": "ADQUISICIÓN ARTICULOS DE ESCRITORIO",
    "organismo": "DEFENSORIA PENAL PUBLICA",
    "organismoRut": "21.124.764-3",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 950000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-21",
    "matchScore": 97,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICIÓN ARTICULOS DE ESCRITORIO. Organismo demandante: DEFENSORIA PENAL PUBLICA. Unidad de compra: Defensoría Nacional.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:30"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "21/07/2026 13:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1876-26-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1876-26-COT26",
        "producto": "ADQUISICIÓN ARTICULOS DE ESCRITORIO",
        "cantidad": 1,
        "precioUnitario": 950000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2296-415-COT26",
    "codigo": "2296-415-COT26",
    "titulo": "Adquisición de Carpetas cartulina Duplex, Guía de Pedido N°27124 Licencias de Conducir",
    "organismo": "I MUNICIPALIDAD DE CONCHALI",
    "organismoRut": "17.561.297-6",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1600000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 76,
    "riesgo": "Medio",
    "descripcion": "Proceso: Adquisición de Carpetas cartulina Duplex, Guía de Pedido N°27124 Licencias de Conducir. Organismo demandante: I MUNICIPALIDAD DE CONCHALI. Unidad de compra: Depto. Abastecimiento.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:30"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2296-415-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2296-415-COT26",
        "producto": "Adquisición de Carpetas cartulina Duplex, Guía de Pedido N°27124 Licencias de Conducir",
        "cantidad": 1,
        "precioUnitario": 1600000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2766-149-COT26",
    "codigo": "2766-149-COT26",
    "titulo": "PRODUCTOS ELECTRICOS PARA RESPALDO DE CORTES DE LUZ",
    "organismo": "I MUNICIPALIDAD DE LA CISTERNA",
    "organismoRut": "62.718.682-0",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1200000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-23",
    "matchScore": 97,
    "riesgo": "Bajo",
    "descripcion": "Proceso: PRODUCTOS ELECTRICOS PARA RESPALDO DE CORTES DE LUZ. Organismo demandante: I MUNICIPALIDAD DE LA CISTERNA. Unidad de compra: SALUD.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:29"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "23/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2766-149-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2766-149-COT26",
        "producto": "PRODUCTOS ELECTRICOS PARA RESPALDO DE CORTES DE LUZ",
        "cantidad": 1,
        "precioUnitario": 1200000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1460278-299-COT26",
    "codigo": "1460278-299-COT26",
    "titulo": "Compra de Accesorios Computacionales",
    "organismo": "UNIVERSIDAD DE SANTIAGO DE CHILE",
    "organismoRut": "83.678.765-6",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1390000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 97,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Compra de Accesorios Computacionales. Organismo demandante: UNIVERSIDAD DE SANTIAGO DE CHILE. Unidad de compra: DPTO DE COORDINACION INSTITUCIONAL - PRORRECTORIA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:29"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 17:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1460278-299-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1460278-299-COT26",
        "producto": "Compra de Accesorios Computacionales",
        "cantidad": 1,
        "precioUnitario": 1390000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1183926-154-COT26",
    "codigo": "1183926-154-COT26",
    "titulo": "Tablets SENCE",
    "organismo": "CENTRO DE FORMACIÓN TÉCNICA ESTATAL DE LA REGIÓN D",
    "organismoRut": "31.565.819-5",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1040000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Tablets SENCE. Organismo demandante: CENTRO DE FORMACIÓN TÉCNICA ESTATAL DE LA REGIÓN D. Unidad de compra: Casa Central.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:28"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1183926-154-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1183926-154-COT26",
        "producto": "Tablets SENCE",
        "cantidad": 1,
        "precioUnitario": 1040000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1483331-33-COT26",
    "codigo": "1483331-33-COT26",
    "titulo": "CINTA DE REPARACIÓN DE DOCUMENTOS PARA DEPOSITOS DE COLECCIONES DEL MUSEO RAÚL MAVRAKIS MORALES.",
    "organismo": "FUNDACION DE CULTURA Y TURISMO DE LA MUNICIPALIDAD DE MEJILLONES O FUN",
    "organismoRut": "21.310.421-6",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 230000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: CINTA DE REPARACIÓN DE DOCUMENTOS PARA DEPOSITOS DE COLECCIONES DEL MUSEO RAÚL MAVRAKIS MORALES.. Organismo demandante: FUNDACION DE CULTURA Y TURISMO DE LA MUNICIPALIDAD DE MEJILLONES O FUN. Unidad de compra: FUNDACION DE CULTURA Y TURISMO DE LA MUNICIPALIDAD DE MEJILLONES O FUN.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:28"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1483331-33-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1483331-33-COT26",
        "producto": "CINTA DE REPARACIÓN DE DOCUMENTOS PARA DEPOSITOS DE COLECCIONES DEL MUSEO RAÚL MAVRAKIS MORALES.",
        "cantidad": 1,
        "precioUnitario": 230000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4323-113-COT26",
    "codigo": "4323-113-COT26",
    "titulo": "SOLICITUD DE COTIZACIÓN POR INSUMOS Y PRODUCTOS TECNOLÓGICOS",
    "organismo": "I MUNICIPALIDAD DE PERQUENCO",
    "organismoRut": "26.477.662-6",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1700000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Medio",
    "descripcion": "Proceso: SOLICITUD DE COTIZACIÓN POR INSUMOS Y PRODUCTOS TECNOLÓGICOS. Organismo demandante: I MUNICIPALIDAD DE PERQUENCO. Unidad de compra: Educación.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:26"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4323-113-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4323-113-COT26",
        "producto": "SOLICITUD DE COTIZACIÓN POR INSUMOS Y PRODUCTOS TECNOLÓGICOS",
        "cantidad": 1,
        "precioUnitario": 1700000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4477-166-COT26",
    "codigo": "4477-166-COT26",
    "titulo": "ARTICULOS FERRETEIA ESC. H. BAJO",
    "organismo": "Ilustre Municipalidad de Contulmo - Educación",
    "organismoRut": "66.154.210-2",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 420000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-27",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ARTICULOS FERRETEIA ESC. H. BAJO. Organismo demandante: Ilustre Municipalidad de Contulmo - Educación. Unidad de compra: Educación.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:25"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "27/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4477-166-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4477-166-COT26",
        "producto": "ARTICULOS FERRETEIA ESC. H. BAJO",
        "cantidad": 1,
        "precioUnitario": 420000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "643-153-COT26",
    "codigo": "643-153-COT26",
    "titulo": "COTIZACIÓN TIMBRE INSTITUCIONAL",
    "organismo": "SERVICIO DE VIVIENDA Y URBANIZACION V REGION",
    "organismoRut": "92.940.331-K",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 380000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: COTIZACIÓN TIMBRE INSTITUCIONAL. Organismo demandante: SERVICIO DE VIVIENDA Y URBANIZACION V REGION. Unidad de compra: SERVIU V Región.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:23"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_643-153-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-643-153-COT26",
        "producto": "COTIZACIÓN TIMBRE INSTITUCIONAL",
        "cantidad": 1,
        "precioUnitario": 25000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1666-189-COT26",
    "codigo": "1666-189-COT26",
    "titulo": "6 baterías para cama clínica Hill Room",
    "organismo": "Servicio de Salud del Reloncaví",
    "organismoRut": "72.767.856-9",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 100000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: 6 baterías para cama clínica Hill Room. Organismo demandante: Servicio de Salud del Reloncaví. Unidad de compra: HOSPITAL DE MAULLÍN.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:23"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 16:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1666-189-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1666-189-COT26",
        "producto": "6 baterías para cama clínica Hill Room",
        "cantidad": 1,
        "precioUnitario": 100000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4703-196-COT26",
    "codigo": "4703-196-COT26",
    "titulo": "compra de impresora, toner, tinta y proyector/escuela ecuador/ley sep",
    "organismo": "I MUNICIPALIDAD DE EL MONTE",
    "organismoRut": "51.936.132-5",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1850000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Medio",
    "descripcion": "Proceso: compra de impresora, toner, tinta y proyector/escuela ecuador/ley sep. Organismo demandante: I MUNICIPALIDAD DE EL MONTE. Unidad de compra: EDUCACION.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:21"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 18:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4703-196-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4703-196-COT26",
        "producto": "compra de impresora, toner, tinta y proyector/escuela ecuador/ley sep",
        "cantidad": 1,
        "precioUnitario": 4000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2281-1310-COT26",
    "codigo": "2281-1310-COT26",
    "titulo": "Confección de letreros informativos destinados a parques municipales y vía pública.",
    "organismo": "I MUNICIPALIDAD VALDIVIA",
    "organismoRut": "14.295.151-5",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Los Ríos",
    "monto": 1000000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 97,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Confección de letreros informativos destinados a parques municipales y vía pública.. Organismo demandante: I MUNICIPALIDAD VALDIVIA. Unidad de compra: UNIDAD ADQUISICIONES MUNICIPAL VALDIVIA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:19"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 13:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2281-1310-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2281-1310-COT26",
        "producto": "Confección de letreros informativos destinados a parques municipales y vía pública.",
        "cantidad": 1,
        "precioUnitario": 1000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1432083-961-COT26",
    "codigo": "1432083-961-COT26",
    "titulo": "YM, RBD 36162 - JARDÍN INFANTIL MIS PRIMEROS PASOS DE LOS LAGOS, SOL 2694, ADQ. GOMA EVA, FAEP,2204002001",
    "organismo": "Servicio local de educación pública de Valdivia",
    "organismoRut": "34.217.425-8",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Los Ríos",
    "monto": 180000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso: YM, RBD 36162 - JARDÍN INFANTIL MIS PRIMEROS PASOS DE LOS LAGOS, SOL 2694, ADQ. GOMA EVA, FAEP,2204002001. Organismo demandante: Servicio local de educación pública de Valdivia. Unidad de compra: P02 Establecimientos Educacionales.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:17"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:05"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1432083-961-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1432083-961-COT26",
        "producto": "YM, RBD 36162 - JARDÍN INFANTIL MIS PRIMEROS PASOS DE LOS LAGOS, SOL 2694, ADQ. GOMA EVA, FAEP,2204002001",
        "cantidad": 1,
        "precioUnitario": 70000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "629373-208-COT26",
    "codigo": "629373-208-COT26",
    "titulo": "Adquisición de materiales administrativos",
    "organismo": "CORP MUNICIPAL DE SAN MIGUEL",
    "organismoRut": "55.900.236-5",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1850000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Medio",
    "descripcion": "Proceso: Adquisición de materiales administrativos. Organismo demandante: CORP MUNICIPAL DE SAN MIGUEL. Unidad de compra: Corporación Municipal de San Miguel.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:15"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_629373-208-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-629373-208-COT26",
        "producto": "Adquisición de materiales administrativos",
        "cantidad": 1,
        "precioUnitario": 7000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4329-162-COT26",
    "codigo": "4329-162-COT26",
    "titulo": "FABRICACION DE 10 PERSONAJES DE TITERES SOL3926.",
    "organismo": "I MUNICIPALIDAD DE NIQUEN",
    "organismoRut": "69.422.496-6",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 480000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: FABRICACION DE 10 PERSONAJES DE TITERES SOL3926.. Organismo demandante: I MUNICIPALIDAD DE NIQUEN. Unidad de compra: Departamento de Salud.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:14"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4329-162-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4329-162-COT26",
        "producto": "FABRICACION DE 10 PERSONAJES DE TITERES SOL3926.",
        "cantidad": 1,
        "precioUnitario": 480000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2215-604-COT26",
    "codigo": "2215-604-COT26",
    "titulo": "INSUMOS COMPUTACIONALES",
    "organismo": "SERVICIO DE SALUD ANTOFAGASTA HOSP C CIS",
    "organismoRut": "45.117.081-5",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Antofagasta",
    "monto": 1850000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Medio",
    "descripcion": "Proceso: INSUMOS COMPUTACIONALES. Organismo demandante: SERVICIO DE SALUD ANTOFAGASTA HOSP C CIS. Unidad de compra: Hospital Carlos Cisternas de Calama.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:12"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 17:20"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2215-604-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2215-604-COT26",
        "producto": "INSUMOS COMPUTACIONALES",
        "cantidad": 1,
        "precioUnitario": 7000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1383364-8-COT26",
    "codigo": "1383364-8-COT26",
    "titulo": "SERVICIO DE ENTRETENIMIENTOS PROYECTO BIENESTAR",
    "organismo": "Servicio de Bienestar del Servicio Salud Antof",
    "organismoRut": "83.866.500-2",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1000000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: SERVICIO DE ENTRETENIMIENTOS PROYECTO BIENESTAR. Organismo demandante: Servicio de Bienestar del Servicio Salud Antof. Unidad de compra: Servicio de Bienestar del Servicio Salud Antof.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:12"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1383364-8-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1383364-8-COT26",
        "producto": "SERVICIO DE ENTRETENIMIENTOS PROYECTO BIENESTAR",
        "cantidad": 1,
        "precioUnitario": 1000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1216090-40-COT26",
    "codigo": "1216090-40-COT26",
    "titulo": "Papeleria (diplomas, invitaciones, entradas otros)",
    "organismo": "CORP CULTURAL DE LA MUNICIPALIDAD DE CURICO",
    "organismoRut": "92.421.488-1",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Maule",
    "monto": 450000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Papeleria (diplomas, invitaciones, entradas otros). Organismo demandante: CORP CULTURAL DE LA MUNICIPALIDAD DE CURICO. Unidad de compra: Unidad de compra Finanzas.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:08"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1216090-40-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1216090-40-COT26",
        "producto": "Papeleria (diplomas, invitaciones, entradas otros)",
        "cantidad": 1,
        "precioUnitario": 450000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3460-160-COT26",
    "codigo": "3460-160-COT26",
    "titulo": "ADQUISICIÓN DE ÚTILES DE ESCRITORIO PARA LA RESERVA MILITAR",
    "organismo": "Ejercito de Chile",
    "organismoRut": "90.520.203-8",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 207000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICIÓN DE ÚTILES DE ESCRITORIO PARA LA RESERVA MILITAR. Organismo demandante: Ejercito de Chile. Unidad de compra: Regimiento Logístico N° 3 \"Victoria\".",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:05"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 17:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3460-160-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3460-160-COT26",
        "producto": "ADQUISICIÓN DE ÚTILES DE ESCRITORIO PARA LA RESERVA MILITAR",
        "cantidad": 1,
        "precioUnitario": 55227
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "5702-222-COT26",
    "codigo": "5702-222-COT26",
    "titulo": "CPF ARICA, COMPRA DE UTILES DE ASEO; AREA INVENTARIO.",
    "organismo": "Direc.Reg.Arica y Parinacota",
    "organismoRut": "60.018.782-K",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Arica y Parinacota",
    "monto": 700000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: CPF ARICA, COMPRA DE UTILES DE ASEO; AREA INVENTARIO.. Organismo demandante: Direc.Reg.Arica y Parinacota. Unidad de compra: Región de Arica y Parinacota.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:00"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_5702-222-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-5702-222-COT26",
        "producto": "CPF ARICA, COMPRA DE UTILES DE ASEO; AREA INVENTARIO.",
        "cantidad": 1,
        "precioUnitario": 700000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3593-280-COT26",
    "codigo": "3593-280-COT26",
    "titulo": "REPUESTOS PARA CAMION RECOLECTOR DE BASURA",
    "organismo": "ILUSTRE MINICIPALIDAD DE COMBARBALA",
    "organismoRut": "44.890.777-3",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 530188,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: REPUESTOS PARA CAMION RECOLECTOR DE BASURA. Organismo demandante: ILUSTRE MINICIPALIDAD DE COMBARBALA. Unidad de compra: ILUSTRE MINICIPALIDAD DE COMBARBALA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 17:00"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3593-280-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3593-280-COT26",
        "producto": "REPUESTOS PARA CAMION RECOLECTOR DE BASURA",
        "cantidad": 1,
        "precioUnitario": 530188
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2297-984-COT26",
    "codigo": "2297-984-COT26",
    "titulo": "ADQUISICION DE ROLLOS DE CINTA ANTIDESLIZANTE AMARILLO/NEGRO ROLLO 15MTS.",
    "organismo": "I MUNICIPALIDAD DE OSORNO",
    "organismoRut": "31.620.320-1",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Los Lagos",
    "monto": 180000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 81,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICION DE ROLLOS DE CINTA ANTIDESLIZANTE AMARILLO/NEGRO ROLLO 15MTS.. Organismo demandante: I MUNICIPALIDAD DE OSORNO. Unidad de compra: IMUNI_OSORNO DIRECCION DE ADM Y FINANZAS.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:59"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2297-984-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2297-984-COT26",
        "producto": "ADQUISICION DE ROLLOS DE CINTA ANTIDESLIZANTE AMARILLO/NEGRO ROLLO 15MTS.",
        "cantidad": 1,
        "precioUnitario": 30000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3153-125-COT26",
    "codigo": "3153-125-COT26",
    "titulo": "ADQUISICION BATERIA PARA AUTOMOVIL",
    "organismo": "I MUNICIPALIDAD DE COLLIPULLI",
    "organismoRut": "50.732.865-6",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 150000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICION BATERIA PARA AUTOMOVIL. Organismo demandante: I MUNICIPALIDAD DE COLLIPULLI. Unidad de compra: Departamento Adquisiciones.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:59"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3153-125-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3153-125-COT26",
        "producto": "ADQUISICION BATERIA PARA AUTOMOVIL",
        "cantidad": 1,
        "precioUnitario": 150000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "5251-635-COT26",
    "codigo": "5251-635-COT26",
    "titulo": "Filamentos y repuestos para impresora 3D",
    "organismo": "UNIVERSIDAD TECNOLOGICA METROPOLITANA",
    "organismoRut": "37.215.607-1",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 983000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 81,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Filamentos y repuestos para impresora 3D. Organismo demandante: UNIVERSIDAD TECNOLOGICA METROPOLITANA. Unidad de compra: DEPARTAMENTO DE ABASTECIMIENTO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:59"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 20:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_5251-635-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-5251-635-COT26",
        "producto": "Filamentos y repuestos para impresora 3D",
        "cantidad": 1,
        "precioUnitario": 983000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1391-379-COT26",
    "codigo": "1391-379-COT26",
    "titulo": "CCP CURICÓ // ADQUISICIÓN DE ARTÍCULOS DE OFICINA PARA EL ÁREA TÉCNICA.",
    "organismo": "Dirección Regional de Gendarmeria - Talca",
    "organismoRut": "57.435.451-6",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Maule",
    "monto": 110000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: CCP CURICÓ // ADQUISICIÓN DE ARTÍCULOS DE OFICINA PARA EL ÁREA TÉCNICA.. Organismo demandante: Dirección Regional de Gendarmeria - Talca. Unidad de compra: Región del Maule.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:58"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 18:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1391-379-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1391-379-COT26",
        "producto": "CCP CURICÓ // ADQUISICIÓN DE ARTÍCULOS DE OFICINA PARA EL ÁREA TÉCNICA.",
        "cantidad": 1,
        "precioUnitario": 110000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "5021-17-COT26",
    "codigo": "5021-17-COT26",
    "titulo": "MATERIALES DE OFICINA, ENSEÑANZA PARA EL CRIE",
    "organismo": "Ejercito de Chile",
    "organismoRut": "90.520.203-8",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 700000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: MATERIALES DE OFICINA, ENSEÑANZA PARA EL CRIE. Organismo demandante: Ejercito de Chile. Unidad de compra: Centro Rehabilitación Infantil - CRIE.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:57"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_5021-17-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-5021-17-COT26",
        "producto": "MATERIALES DE OFICINA, ENSEÑANZA PARA EL CRIE",
        "cantidad": 1,
        "precioUnitario": 700000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1347870-130-COT26",
    "codigo": "1347870-130-COT26",
    "titulo": "MATERIAL ESCRITORIO POR CONVENIO CECOSF RENE GARCIA VALENZUELA CON RES. EX 1678, MEMO 479",
    "organismo": "I MUNICIPALIDAD DE ARICA",
    "organismoRut": "96.297.150-5",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Arica y Parinacota",
    "monto": 385700,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-19",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: MATERIAL ESCRITORIO POR CONVENIO CECOSF RENE GARCIA VALENZUELA CON RES. EX 1678, MEMO 479. Organismo demandante: I MUNICIPALIDAD DE ARICA. Unidad de compra: Servicio Municipal de Salud - Convenios.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:57"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "19/07/2026 20:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1347870-130-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1347870-130-COT26",
        "producto": "MATERIAL ESCRITORIO POR CONVENIO CECOSF RENE GARCIA VALENZUELA CON RES. EX 1678, MEMO 479",
        "cantidad": 1,
        "precioUnitario": 385700
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4931-68-COT26",
    "codigo": "4931-68-COT26",
    "titulo": "Artículos de Escritorio",
    "organismo": "COMISION ADMINISTRADORA DEL SISTEMA DE CREDITOS P. ESTUDIOS SUPERIORES",
    "organismoRut": "44.246.613-2",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 175000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Artículos de Escritorio. Organismo demandante: COMISION ADMINISTRADORA DEL SISTEMA DE CREDITOS P. ESTUDIOS SUPERIORES. Unidad de compra: Comisión Administradora del Sistema de Créditos pa.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:54"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4931-68-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4931-68-COT26",
        "producto": "Artículos de Escritorio",
        "cantidad": 1,
        "precioUnitario": 175000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "324-392-COT26",
    "codigo": "324-392-COT26",
    "titulo": "Multas tag / etiquetas adhesivas",
    "organismo": "I MUNICIPALIDAD DE CERRILLOS",
    "organismoRut": "21.335.795-6",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 873936,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Multas tag / etiquetas adhesivas. Organismo demandante: I MUNICIPALIDAD DE CERRILLOS. Unidad de compra: Administración y Finanzas - Abastecimiento.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:54"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_324-392-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-324-392-COT26",
        "producto": "Multas tag / etiquetas adhesivas",
        "cantidad": 1,
        "precioUnitario": 873936
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2297-983-COT26",
    "codigo": "2297-983-COT26",
    "titulo": "ADQUISICION MATERIALES DE LIBRERIA",
    "organismo": "I MUNICIPALIDAD DE OSORNO",
    "organismoRut": "31.620.320-1",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Los Lagos",
    "monto": 170000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 81,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICION MATERIALES DE LIBRERIA. Organismo demandante: I MUNICIPALIDAD DE OSORNO. Unidad de compra: IMUNI_OSORNO DIRECCION DE ADM Y FINANZAS.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:53"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2297-983-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2297-983-COT26",
        "producto": "ADQUISICION MATERIALES DE LIBRERIA",
        "cantidad": 1,
        "precioUnitario": 170000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3807-330-COT26",
    "codigo": "3807-330-COT26",
    "titulo": "COMPRA DE EMPAÑADAS DE HORNO PARA CONMEMORACIÓN SAN IGNACIO DE LOYOLA",
    "organismo": "I MUNICIPALIDAD DE EMPEDRADO",
    "organismoRut": "32.306.153-7",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 530000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: COMPRA DE EMPAÑADAS DE HORNO PARA CONMEMORACIÓN SAN IGNACIO DE LOYOLA. Organismo demandante: I MUNICIPALIDAD DE EMPEDRADO. Unidad de compra: I MUNICIPALIDAD DE EMPEDRADO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:52"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3807-330-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3807-330-COT26",
        "producto": "COMPRA DE EMPAÑADAS DE HORNO PARA CONMEMORACIÓN SAN IGNACIO DE LOYOLA",
        "cantidad": 1,
        "precioUnitario": 530000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1260057-180-COT26",
    "codigo": "1260057-180-COT26",
    "titulo": "CREMA CON UREA",
    "organismo": "Hospital de Peñaflor",
    "organismoRut": "72.415.865-8",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2000000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Medio",
    "descripcion": "Proceso: CREMA CON UREA. Organismo demandante: Hospital de Peñaflor. Unidad de compra: Bienes y Servicios.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:52"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1260057-180-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1260057-180-COT26",
        "producto": "CREMA CON UREA",
        "cantidad": 1,
        "precioUnitario": 2000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2270-203-COT26",
    "codigo": "2270-203-COT26",
    "titulo": "Exp N°50211 - Compra de Cajas Plumavit - Prog. Marea Roja - Dpto. Accion Sanitaria.",
    "organismo": "SUBSECRETARIA DE SALUD PUBLICA",
    "organismoRut": "58.512.045-9",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 600000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Exp N°50211 - Compra de Cajas Plumavit - Prog. Marea Roja - Dpto. Accion Sanitaria.. Organismo demandante: SUBSECRETARIA DE SALUD PUBLICA. Unidad de compra: Seremi de Salud I Región.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:51"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 17:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2270-203-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2270-203-COT26",
        "producto": "Exp N°50211 - Compra de Cajas Plumavit - Prog. Marea Roja - Dpto. Accion Sanitaria.",
        "cantidad": 1,
        "precioUnitario": 600000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "777304-2650-COT26",
    "codigo": "777304-2650-COT26",
    "titulo": "MATERIALES DE OFICINA",
    "organismo": "HOSPITAL CLINICO METROPOLITANO DE LA FLORIDA DOCTORA ELOISA DIAZ",
    "organismoRut": "88.020.058-9",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1000000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: MATERIALES DE OFICINA. Organismo demandante: HOSPITAL CLINICO METROPOLITANO DE LA FLORIDA DOCTORA ELOISA DIAZ. Unidad de compra: UNIDAD DE COMPRA INSUMOS  Y OTROS.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:50"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_777304-2650-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-777304-2650-COT26",
        "producto": "MATERIALES DE OFICINA",
        "cantidad": 1,
        "precioUnitario": 1000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2324-678-COT26",
    "codigo": "2324-678-COT26",
    "titulo": "ADQUISICION ARTICULOS DE ASEO PARA PROGRAMA NOCHE DIGNA, CENTROS TEMPORALES PARA LA SUPERACION CENTRO DIA 2023 / DIDECO - MIDESO",
    "organismo": "I MUNICIPALIDAD DE PUERTO MONTT",
    "organismoRut": "18.546.223-K",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Medio",
    "rubro": "Aseo e Higiene",
    "region": "Los Lagos",
    "monto": 1486961,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICION ARTICULOS DE ASEO PARA PROGRAMA NOCHE DIGNA, CENTROS TEMPORALES PARA LA SUPERACION CENTRO DIA 2023 / DIDECO - MIDESO. Organismo demandante: I MUNICIPALIDAD DE PUERTO MONTT. Unidad de compra: Departamento de Licitaciones y gestión de Abastecimiento.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:49"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2324-678-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2324-678-COT26",
        "producto": "ADQUISICION ARTICULOS DE ASEO PARA PROGRAMA NOCHE DIGNA, CENTROS TEMPORALES PARA LA SUPERACION CENTRO DIA 2023 / DIDECO - MIDESO",
        "cantidad": 1,
        "precioUnitario": 1486961
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "564953-491-COT26",
    "codigo": "564953-491-COT26",
    "titulo": "INSUMOS DE ASEO - RAM",
    "organismo": "CORP DE EDUCACION Y SALUD DE LAS CONDES",
    "organismoRut": "43.237.817-8",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 600000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: INSUMOS DE ASEO - RAM. Organismo demandante: CORP DE EDUCACION Y SALUD DE LAS CONDES. Unidad de compra: Corporación de Educación y Salud de Las Condes.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:49"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_564953-491-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-564953-491-COT26",
        "producto": "INSUMOS DE ASEO - RAM",
        "cantidad": 1,
        "precioUnitario": 600000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "557974-301-COT26",
    "codigo": "557974-301-COT26",
    "titulo": "anilladoras, micas y espirales para prog. adultos mayores pedidos 11383/11384/11385/11386/11387",
    "organismo": "CORPORACION MUNICIPAL DE EDUCACION,SALUD,CULTURA Y ATENCION AL MENOR,",
    "organismoRut": "64.810.178-1",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1100000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: anilladoras, micas y espirales para prog. adultos mayores pedidos 11383/11384/11385/11386/11387. Organismo demandante: CORPORACION MUNICIPAL DE EDUCACION,SALUD,CULTURA Y ATENCION AL MENOR,. Unidad de compra: ÁREA DE SALUD.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:48"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_557974-301-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-557974-301-COT26",
        "producto": "anilladoras, micas y espirales para prog. adultos mayores pedidos 11383/11384/11385/11386/11387",
        "cantidad": 1,
        "precioUnitario": 1100000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "630424-375-COT26",
    "codigo": "630424-375-COT26",
    "titulo": "COTIZACION MATERIALES DE LIBRERÍA ESC. RURAL RIÑINAHUE",
    "organismo": "I MUNICIPALIDAD DE LAGO RANCO",
    "organismoRut": "83.911.360-8",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 600000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: COTIZACION MATERIALES DE LIBRERÍA ESC. RURAL RIÑINAHUE. Organismo demandante: I MUNICIPALIDAD DE LAGO RANCO. Unidad de compra: adquisiciones daem II.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:45"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_630424-375-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-630424-375-COT26",
        "producto": "COTIZACION MATERIALES DE LIBRERÍA ESC. RURAL RIÑINAHUE",
        "cantidad": 1,
        "precioUnitario": 600000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4034-332-COT26",
    "codigo": "4034-332-COT26",
    "titulo": "PREMIOS PARA ACTIVIDADES EXTRAESCOLARES SEGUNDO SEMESTRE, SP 23 – FONDOS EXTRAESCOLAR",
    "organismo": "Ilustre Municipalidad de Cañete - Educación",
    "organismoRut": "66.926.810-7",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2350000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 77,
    "riesgo": "Medio",
    "descripcion": "Proceso: PREMIOS PARA ACTIVIDADES EXTRAESCOLARES SEGUNDO SEMESTRE, SP 23 – FONDOS EXTRAESCOLAR. Organismo demandante: Ilustre Municipalidad de Cañete - Educación. Unidad de compra: Daem.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:44"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 11:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4034-332-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4034-332-COT26",
        "producto": "PREMIOS PARA ACTIVIDADES EXTRAESCOLARES SEGUNDO SEMESTRE, SP 23 – FONDOS EXTRAESCOLAR",
        "cantidad": 1,
        "precioUnitario": 4500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3428-175-COT26",
    "codigo": "3428-175-COT26",
    "titulo": "Compra Gif Card para adquisición de menaje para el casino de oficiales",
    "organismo": "Ejercito de Chile",
    "organismoRut": "90.520.203-8",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Compra Gif Card para adquisición de menaje para el casino de oficiales. Organismo demandante: Ejercito de Chile. Unidad de compra: Destacamento de Montaña N° 8 \"Tucapel\" DESMÑA N° 8.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:43"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3428-175-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3428-175-COT26",
        "producto": "Compra Gif Card para adquisición de menaje para el casino de oficiales",
        "cantidad": 1,
        "precioUnitario": 500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2296-413-COT26",
    "codigo": "2296-413-COT26",
    "titulo": "ADQUISICIONES DE MATERIALES PARA ACTIVIDADES - PROGRAMA SOMOS BARRIO",
    "organismo": "I MUNICIPALIDAD DE CONCHALI",
    "organismoRut": "17.561.297-6",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 413310,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICIONES DE MATERIALES PARA ACTIVIDADES - PROGRAMA SOMOS BARRIO. Organismo demandante: I MUNICIPALIDAD DE CONCHALI. Unidad de compra: Depto. Abastecimiento.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:42"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 08:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2296-413-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2296-413-COT26",
        "producto": "ADQUISICIONES DE MATERIALES PARA ACTIVIDADES - PROGRAMA SOMOS BARRIO",
        "cantidad": 1,
        "precioUnitario": 413310
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2427-772-COT26",
    "codigo": "2427-772-COT26",
    "titulo": "ADQUISICIÓN DE INSUMOS PARA HABILITACIÓN DE ALBERQUES EN LA COMUNA DE VALPARAÍSO, DIDECO, SERVICIO SOCIAL",
    "organismo": "I MUNICIPALIDAD DE VALPARAISO",
    "organismoRut": "27.700.676-0",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Valparaíso",
    "monto": 250000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICIÓN DE INSUMOS PARA HABILITACIÓN DE ALBERQUES EN LA COMUNA DE VALPARAÍSO, DIDECO, SERVICIO SOCIAL. Organismo demandante: I MUNICIPALIDAD DE VALPARAISO. Unidad de compra: ABASTECIMIENTO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:41"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2427-772-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2427-772-COT26",
        "producto": "ADQUISICIÓN DE INSUMOS PARA HABILITACIÓN DE ALBERQUES EN LA COMUNA DE VALPARAÍSO, DIDECO, SERVICIO SOCIAL",
        "cantidad": 1,
        "precioUnitario": 250000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2335-256-COT26",
    "codigo": "2335-256-COT26",
    "titulo": "TINTAS OP.382",
    "organismo": "ILUSTRE MUNICIPALIDAD DE LINARES",
    "organismoRut": "24.134.469-6",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Maule",
    "monto": 196290,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: TINTAS OP.382. Organismo demandante: ILUSTRE MUNICIPALIDAD DE LINARES. Unidad de compra: ADQUISICIONES SALUD.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:40"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2335-256-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2335-256-COT26",
        "producto": "TINTAS OP.382",
        "cantidad": 1,
        "precioUnitario": 196290
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3479-899-COT26",
    "codigo": "3479-899-COT26",
    "titulo": "Artículos de Aseo, Cementerio Municipal",
    "organismo": "I MUNICIPALIDAD DE CALBUCO",
    "organismoRut": "99.459.797-9",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 700000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 81,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Artículos de Aseo, Cementerio Municipal. Organismo demandante: I MUNICIPALIDAD DE CALBUCO. Unidad de compra: Municipalidad De Calbuco.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:40"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3479-899-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3479-899-COT26",
        "producto": "Artículos de Aseo, Cementerio Municipal",
        "cantidad": 1,
        "precioUnitario": 700000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1221016-138-COT26",
    "codigo": "1221016-138-COT26",
    "titulo": "Poleras promocionales estampadas",
    "organismo": "Corporación de Desarrollo de La Reina",
    "organismoRut": "57.758.976-7",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2130000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 96,
    "riesgo": "Medio",
    "descripcion": "Proceso: Poleras promocionales estampadas. Organismo demandante: Corporación de Desarrollo de La Reina. Unidad de compra: Corporación de Desarrollo de La Reina.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:39"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 17:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1221016-138-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1221016-138-COT26",
        "producto": "Poleras promocionales estampadas",
        "cantidad": 1,
        "precioUnitario": 2130000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1554-406-COT26",
    "codigo": "1554-406-COT26",
    "titulo": "REQUERIMIENTO PAPEL CALCO- TINTA / RECAUDACION DE URGENCIA",
    "organismo": "SERVICIO DE SALUD ATACAMA HOSPITAL COPIA",
    "organismoRut": "82.221.826-5",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Atacama",
    "monto": 180000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: REQUERIMIENTO PAPEL CALCO- TINTA / RECAUDACION DE URGENCIA. Organismo demandante: SERVICIO DE SALUD ATACAMA HOSPITAL COPIA. Unidad de compra: Abastecimiento Hospital de Copiapó.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:37"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1554-406-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1554-406-COT26",
        "producto": "REQUERIMIENTO PAPEL CALCO- TINTA / RECAUDACION DE URGENCIA",
        "cantidad": 1,
        "precioUnitario": 60000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1447928-20-COT26",
    "codigo": "1447928-20-COT26",
    "titulo": "Adquisicion de impresora multiuso para fundacion",
    "organismo": "FUNDACION MUNICIPAL DE CULTURA DE ZAPALLAR",
    "organismoRut": "17.785.472-9",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 700000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 97,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisicion de impresora multiuso para fundacion. Organismo demandante: FUNDACION MUNICIPAL DE CULTURA DE ZAPALLAR. Unidad de compra: FUNDACION MUNICIPAL DE CULTURA DE ZAPALLAR.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:36"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1447928-20-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1447928-20-COT26",
        "producto": "Adquisicion de impresora multiuso para fundacion",
        "cantidad": 1,
        "precioUnitario": 700000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1550-12-COT26",
    "codigo": "1550-12-COT26",
    "titulo": "Compra de Articulos de Informatica",
    "organismo": "SERVICIO DE IMPUESTOS INTERNOS DIRECCION",
    "organismoRut": "92.117.862-2",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 300000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Compra de Articulos de Informatica. Organismo demandante: SERVICIO DE IMPUESTOS INTERNOS DIRECCION. Unidad de compra: SII DR08 Dirección Regional Concepción.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:36"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1550-12-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1550-12-COT26",
        "producto": "Compra de Articulos de Informatica",
        "cantidad": 1,
        "precioUnitario": 300000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1432083-959-COT26",
    "codigo": "1432083-959-COT26",
    "titulo": "YM, RBD 7202 - ESCUELA PROYECTO DE FUTURO DE PAILLACO, SOL 2685, SEP, 2204002001",
    "organismo": "Servicio local de educación pública de Valdivia",
    "organismoRut": "34.217.425-8",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Los Ríos",
    "monto": 1024996,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso: YM, RBD 7202 - ESCUELA PROYECTO DE FUTURO DE PAILLACO, SOL 2685, SEP, 2204002001. Organismo demandante: Servicio local de educación pública de Valdivia. Unidad de compra: P02 Establecimientos Educacionales.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:34"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1432083-959-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1432083-959-COT26",
        "producto": "YM, RBD 7202 - ESCUELA PROYECTO DE FUTURO DE PAILLACO, SOL 2685, SEP, 2204002001",
        "cantidad": 1,
        "precioUnitario": 1024996
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2393-991-COT26",
    "codigo": "2393-991-COT26",
    "titulo": "ADQ. DE INSUMOS PARA EJERCICIOS DE ESTIMULACIÓN COGNITIVA, SEGÚN NÓMINA, SP. 150 - PRLAC",
    "organismo": "I MUNICIPALIDAD PEDRO AGUIRRE CERDA",
    "organismoRut": "28.773.827-8",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 462183,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 81,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQ. DE INSUMOS PARA EJERCICIOS DE ESTIMULACIÓN COGNITIVA, SEGÚN NÓMINA, SP. 150 - PRLAC. Organismo demandante: I MUNICIPALIDAD PEDRO AGUIRRE CERDA. Unidad de compra: DEPARTAMENTO DE ADQUISICIONES.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:33"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 08:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2393-991-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2393-991-COT26",
        "producto": "ADQ. DE INSUMOS PARA EJERCICIOS DE ESTIMULACIÓN COGNITIVA, SEGÚN NÓMINA, SP. 150 - PRLAC",
        "cantidad": 1,
        "precioUnitario": 462183
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1160-135-COT26",
    "codigo": "1160-135-COT26",
    "titulo": "8110-COMPRA DE TONER Y TINTAS PARA OF.TALCAHUANO",
    "organismo": "SERVICIO AGRICOLA Y GANADERO",
    "organismoRut": "94.604.106-6",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 300000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: 8110-COMPRA DE TONER Y TINTAS PARA OF.TALCAHUANO. Organismo demandante: SERVICIO AGRICOLA Y GANADERO. Unidad de compra: SAG - Bio Bio.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:32"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 16:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1160-135-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1160-135-COT26",
        "producto": "8110-COMPRA DE TONER Y TINTAS PARA OF.TALCAHUANO",
        "cantidad": 1,
        "precioUnitario": 300000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1298354-284-COT26",
    "codigo": "1298354-284-COT26",
    "titulo": "ARTICULOS ESCOLARES",
    "organismo": "DIRECCION DE EDUCACION",
    "organismoRut": "55.537.942-3",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 999600,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 97,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ARTICULOS ESCOLARES. Organismo demandante: DIRECCION DE EDUCACION. Unidad de compra: EDUCACION.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:30"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1298354-284-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1298354-284-COT26",
        "producto": "ARTICULOS ESCOLARES",
        "cantidad": 1,
        "precioUnitario": 999600
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4968-480-COT26",
    "codigo": "4968-480-COT26",
    "titulo": "ARTICULOS DE ASEO",
    "organismo": "HOSPITAL DE QUILPUE",
    "organismoRut": "65.387.840-4",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 350000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ARTICULOS DE ASEO. Organismo demandante: HOSPITAL DE QUILPUE. Unidad de compra: HOSPITAL DE QUILPUE.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:30"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:10"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4968-480-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4968-480-COT26",
        "producto": "ARTICULOS DE ASEO",
        "cantidad": 1,
        "precioUnitario": 350000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1161-205-COT26",
    "codigo": "1161-205-COT26",
    "titulo": "OSO-Materiales de oficina",
    "organismo": "SERVICIO AGRICOLA Y GANADERO",
    "organismoRut": "94.604.106-6",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1600000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 97,
    "riesgo": "Medio",
    "descripcion": "Proceso: OSO-Materiales de oficina. Organismo demandante: SERVICIO AGRICOLA Y GANADERO. Unidad de compra: SAG - Los Lagos.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:29"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1161-205-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1161-205-COT26",
        "producto": "OSO-Materiales de oficina",
        "cantidad": 1,
        "precioUnitario": 1600000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2721-317-COT26",
    "codigo": "2721-317-COT26",
    "titulo": "Adquisición de Talonarios -Tesorería Municipal",
    "organismo": "I MUNICIPALIDAD DE BUIN",
    "organismoRut": "37.946.736-5",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 600000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de Talonarios -Tesorería Municipal. Organismo demandante: I MUNICIPALIDAD DE BUIN. Unidad de compra: MUNICIPALIDAD DE BUIN- ADQUISICIONES.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:29"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2721-317-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2721-317-COT26",
        "producto": "Adquisición de Talonarios -Tesorería Municipal",
        "cantidad": 1,
        "precioUnitario": 600000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1079694-242-COT26",
    "codigo": "1079694-242-COT26",
    "titulo": "Adquisición de baterías para motos de cargo de las diferentes unidades y destacamentos policiales dependientes de la Zona de Carabineros de Los Ríos.",
    "organismo": "SECCIÓN COMPRAS XIV ZONA",
    "organismoRut": "48.379.140-2",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2340000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 97,
    "riesgo": "Medio",
    "descripcion": "Proceso: Adquisición de baterías para motos de cargo de las diferentes unidades y destacamentos policiales dependientes de la Zona de Carabineros de Los Ríos.. Organismo demandante: SECCIÓN COMPRAS XIV ZONA. Unidad de compra: SECCIÓN COMPRAS ZONA DE CARABINEROS DE LOS RIOS.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:27"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1079694-242-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1079694-242-COT26",
        "producto": "Adquisición de baterías para motos de cargo de las diferentes unidades y destacamentos policiales dependientes de la Zona de Carabineros de Los Ríos.",
        "cantidad": 1,
        "precioUnitario": 4490000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4190-143-COT26",
    "codigo": "4190-143-COT26",
    "titulo": "Banderas y Escarapelas Chilenas",
    "organismo": "I MUNICIPALIDAD DE CALDERA",
    "organismoRut": "99.504.454-6",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1000000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Banderas y Escarapelas Chilenas. Organismo demandante: I MUNICIPALIDAD DE CALDERA. Unidad de compra: Adquisiciones.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:25"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4190-143-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4190-143-COT26",
        "producto": "Banderas y Escarapelas Chilenas",
        "cantidad": 1,
        "precioUnitario": 1000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "568658-1122-COT26",
    "codigo": "568658-1122-COT26",
    "titulo": "RECETARIOS, FUC 2-591-1120-26, PER CAPITA, (22-04-001) MATERIALES DE OFICINA, DROGUERÍA, CC: 581-9 (COF)",
    "organismo": "CORPORACION MUNICIPAL VINA DEL MAR PARA EL DESARROLLO SOCIAL",
    "organismoRut": "71.134.825-8",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1917420,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 76,
    "riesgo": "Medio",
    "descripcion": "Proceso: RECETARIOS, FUC 2-591-1120-26, PER CAPITA, (22-04-001) MATERIALES DE OFICINA, DROGUERÍA, CC: 581-9 (COF). Organismo demandante: CORPORACION MUNICIPAL VINA DEL MAR PARA EL DESARROLLO SOCIAL. Unidad de compra: CORPORACION MUNICIPAL VINA DEL MAR PARA EL DESARRO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:25"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_568658-1122-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-568658-1122-COT26",
        "producto": "RECETARIOS, FUC 2-591-1120-26, PER CAPITA, (22-04-001) MATERIALES DE OFICINA, DROGUERÍA, CC: 581-9 (COF)",
        "cantidad": 1,
        "precioUnitario": 4067420
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3597-592-COT26",
    "codigo": "3597-592-COT26",
    "titulo": "ADQUISICION DE MATERIALES PARA SANITIZAR Y DESINFECTAR.",
    "organismo": "I MUNICIPALIDAD DE VICUNA",
    "organismoRut": "20.806.096-5",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICION DE MATERIALES PARA SANITIZAR Y DESINFECTAR.. Organismo demandante: I MUNICIPALIDAD DE VICUNA. Unidad de compra: Ilustre Municipalidad de Vicuña.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:24"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3597-592-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3597-592-COT26",
        "producto": "ADQUISICION DE MATERIALES PARA SANITIZAR Y DESINFECTAR.",
        "cantidad": 1,
        "precioUnitario": 500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1077908-70-COT26",
    "codigo": "1077908-70-COT26",
    "titulo": "COMPRA DE ARTICULOS DE ASEO PARA EL C.O.N NO DISPONIBLE EN CM",
    "organismo": "CENTRO ONCOLOGICO DEL NORTE",
    "organismoRut": "43.425.852-8",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 300000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: COMPRA DE ARTICULOS DE ASEO PARA EL C.O.N NO DISPONIBLE EN CM. Organismo demandante: CENTRO ONCOLOGICO DEL NORTE. Unidad de compra: Bienes y Servicios.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:23"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1077908-70-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1077908-70-COT26",
        "producto": "COMPRA DE ARTICULOS DE ASEO PARA EL C.O.N NO DISPONIBLE EN CM",
        "cantidad": 1,
        "precioUnitario": 300000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4984-26-COT26",
    "codigo": "4984-26-COT26",
    "titulo": "ADQUISICIÓN DE MATERIALES HORTÍCOLAS EN EL MARCO DEL PROGRAMA \"PRODUCCIÓN Y USO DE FERTILIZANTES ORGÁNICOS\" PRODESAL",
    "organismo": "I MUNICIPALIDAD DE PANGUIPULLI",
    "organismoRut": "13.255.438-K",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 600000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICIÓN DE MATERIALES HORTÍCOLAS EN EL MARCO DEL PROGRAMA \"PRODUCCIÓN Y USO DE FERTILIZANTES ORGÁNICOS\" PRODESAL. Organismo demandante: I MUNICIPALIDAD DE PANGUIPULLI. Unidad de compra: prodesal.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:23"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4984-26-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4984-26-COT26",
        "producto": "ADQUISICIÓN DE MATERIALES HORTÍCOLAS EN EL MARCO DEL PROGRAMA \"PRODUCCIÓN Y USO DE FERTILIZANTES ORGÁNICOS\" PRODESAL",
        "cantidad": 1,
        "precioUnitario": 600000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1251183-118-COT26",
    "codigo": "1251183-118-COT26",
    "titulo": "EQUIPO ASPIRADOR PODOLOGIA",
    "organismo": "Corporación Municipal de Des.Social C de Tango",
    "organismoRut": "27.795.560-K",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 360000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: EQUIPO ASPIRADOR PODOLOGIA. Organismo demandante: Corporación Municipal de Des.Social C de Tango. Unidad de compra: Adquisiciones Salud.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:22"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1251183-118-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1251183-118-COT26",
        "producto": "EQUIPO ASPIRADOR PODOLOGIA",
        "cantidad": 1,
        "precioUnitario": 360000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2211-839-COT26",
    "codigo": "2211-839-COT26",
    "titulo": "Sol. 54 Pendón  roller MEDIO AMBIENTE, ASEO Y ORNATO",
    "organismo": "I MUNICIPALIDAD DE LIMACHE",
    "organismoRut": "86.968.119-0",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 180000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Sol. 54 Pendón  roller MEDIO AMBIENTE, ASEO Y ORNATO. Organismo demandante: I MUNICIPALIDAD DE LIMACHE. Unidad de compra: MUNICIPALIDAD LIMACHE - Adquisiciones.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:21"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2211-839-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2211-839-COT26",
        "producto": "Sol. 54 Pendón  roller MEDIO AMBIENTE, ASEO Y ORNATO",
        "cantidad": 1,
        "precioUnitario": 70000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4190-142-COT26",
    "codigo": "4190-142-COT26",
    "titulo": "Baterias para Flota DIMAO",
    "organismo": "I MUNICIPALIDAD DE CALDERA",
    "organismoRut": "99.504.454-6",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 3000000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Medio",
    "descripcion": "Proceso: Baterias para Flota DIMAO. Organismo demandante: I MUNICIPALIDAD DE CALDERA. Unidad de compra: Adquisiciones.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:21"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4190-142-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4190-142-COT26",
        "producto": "Baterias para Flota DIMAO",
        "cantidad": 1,
        "precioUnitario": 3000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "722640-80-COT26",
    "codigo": "722640-80-COT26",
    "titulo": "Adquisición de insumos y materiales didacticos financiado por el programa Biopsicosocial año 2026",
    "organismo": "I MUNICIPALIDAD DE COLCHANE",
    "organismoRut": "74.819.541-5",
    "organismoPagoDias": 43,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 900000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 85,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de insumos y materiales didacticos financiado por el programa Biopsicosocial año 2026. Organismo demandante: I MUNICIPALIDAD DE COLCHANE. Unidad de compra: DEPTO SALUD.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:21"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 13:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_722640-80-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-722640-80-COT26",
        "producto": "Adquisición de insumos y materiales didacticos financiado por el programa Biopsicosocial año 2026",
        "cantidad": 1,
        "precioUnitario": 900000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "5959-106-COT26",
    "codigo": "5959-106-COT26",
    "titulo": "Adquisición funda protector monitor PC",
    "organismo": "UNIVERSIDAD DE ATACAMA",
    "organismoRut": "23.424.035-2",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Atacama",
    "monto": 135000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-21",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición funda protector monitor PC. Organismo demandante: UNIVERSIDAD DE ATACAMA. Unidad de compra: INSTITUTO TECNOLOGICO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:19"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "21/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_5959-106-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-5959-106-COT26",
        "producto": "Adquisición funda protector monitor PC",
        "cantidad": 1,
        "precioUnitario": 135000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "5455-89-COT26",
    "codigo": "5455-89-COT26",
    "titulo": "TOTEM MODULAR Y APILABLE",
    "organismo": "UNIVERSIDAD DE CHILE",
    "organismoRut": "89.728.640-K",
    "organismoPagoDias": 41,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 900000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 83,
    "riesgo": "Bajo",
    "descripcion": "Proceso: TOTEM MODULAR Y APILABLE. Organismo demandante: UNIVERSIDAD DE CHILE. Unidad de compra: UCHILE Vicerrectoría de Extensión.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:16"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_5455-89-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-5455-89-COT26",
        "producto": "TOTEM MODULAR Y APILABLE",
        "cantidad": 1,
        "precioUnitario": 900000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "867990-358-COT26",
    "codigo": "867990-358-COT26",
    "titulo": "Adquisición de Material de enseñanza para escenarios",
    "organismo": "UNIVERSIDAD DE SANTIAGO DE CHILE",
    "organismoRut": "83.678.765-6",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 260610,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 81,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de Material de enseñanza para escenarios. Organismo demandante: UNIVERSIDAD DE SANTIAGO DE CHILE. Unidad de compra: DEPARTAMENTO DE COORDINACIÓN INSTITUCIONAL - DCI.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:16"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_867990-358-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-867990-358-COT26",
        "producto": "Adquisición de Material de enseñanza para escenarios",
        "cantidad": 1,
        "precioUnitario": 260610
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1432083-956-COT26",
    "codigo": "1432083-956-COT26",
    "titulo": "YM, RBD 6932 - ESCUELA NEVADA DE LOS LAGOS, SOL 2379, ADQ. MATERIAL DIDACTICO, FAEP, 2204002",
    "organismo": "Servicio local de educación pública de Valdivia",
    "organismoRut": "34.217.425-8",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Los Ríos",
    "monto": 731000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso: YM, RBD 6932 - ESCUELA NEVADA DE LOS LAGOS, SOL 2379, ADQ. MATERIAL DIDACTICO, FAEP, 2204002. Organismo demandante: Servicio local de educación pública de Valdivia. Unidad de compra: P02 Establecimientos Educacionales.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:15"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1432083-956-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1432083-956-COT26",
        "producto": "YM, RBD 6932 - ESCUELA NEVADA DE LOS LAGOS, SOL 2379, ADQ. MATERIAL DIDACTICO, FAEP, 2204002",
        "cantidad": 1,
        "precioUnitario": 731000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2273-577-COT26",
    "codigo": "2273-577-COT26",
    "titulo": "HERRAMIENTAS DEPARTAMENTO DE TRANSPORTE, Memo 19020 mms",
    "organismo": "I MUNICIPALIDAD DE LA PINTANA",
    "organismoRut": "65.879.038-1",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 687000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-21",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: HERRAMIENTAS DEPARTAMENTO DE TRANSPORTE, Memo 19020 mms. Organismo demandante: I MUNICIPALIDAD DE LA PINTANA. Unidad de compra: DEPARTAMENTO ADQUISICIONES MUNICIPAL.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:14"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "21/07/2026 10:01"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2273-577-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2273-577-COT26",
        "producto": "HERRAMIENTAS DEPARTAMENTO DE TRANSPORTE, Memo 19020 mms",
        "cantidad": 1,
        "precioUnitario": 687000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1233615-480-COT26",
    "codigo": "1233615-480-COT26",
    "titulo": "PHA/SOL 157/INSUMOS PAPELERIA/UNIDAD COMUNICACIONES SLEP AYSÉN",
    "organismo": "Servicio Local de Educación Pública Aysén",
    "organismoRut": "99.550.904-1",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Aysén",
    "monto": 400000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-22",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: PHA/SOL 157/INSUMOS PAPELERIA/UNIDAD COMUNICACIONES SLEP AYSÉN. Organismo demandante: Servicio Local de Educación Pública Aysén. Unidad de compra: Servicio Local de Educación Pública Aysén.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:13"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "22/07/2026 16:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1233615-480-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1233615-480-COT26",
        "producto": "PHA/SOL 157/INSUMOS PAPELERIA/UNIDAD COMUNICACIONES SLEP AYSÉN",
        "cantidad": 1,
        "precioUnitario": 400000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "5959-105-COT26",
    "codigo": "5959-105-COT26",
    "titulo": "Adquisición materiales de oficina",
    "organismo": "UNIVERSIDAD DE ATACAMA",
    "organismoRut": "23.424.035-2",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Atacama",
    "monto": 586000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-21",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición materiales de oficina. Organismo demandante: UNIVERSIDAD DE ATACAMA. Unidad de compra: INSTITUTO TECNOLOGICO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:13"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "21/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_5959-105-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-5959-105-COT26",
        "producto": "Adquisición materiales de oficina",
        "cantidad": 1,
        "precioUnitario": 586000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3381-144-COT26",
    "codigo": "3381-144-COT26",
    "titulo": "ADQ DE BANDERAS PARA SER EMPLEDADAS EN ESTA UR",
    "organismo": "Ejercito de Chile",
    "organismoRut": "90.520.203-8",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 161690,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQ DE BANDERAS PARA SER EMPLEDADAS EN ESTA UR. Organismo demandante: Ejercito de Chile. Unidad de compra: Regimiento Escolta Presidencial N° 1 Granaderos.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:12"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:45"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3381-144-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3381-144-COT26",
        "producto": "ADQ DE BANDERAS PARA SER EMPLEDADAS EN ESTA UR",
        "cantidad": 1,
        "precioUnitario": 161690
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3597-587-COT26",
    "codigo": "3597-587-COT26",
    "titulo": "ADQUISICION DE MATERIALES PARA IMPLEMENTAR TALLERES, PROGRAMA 4 a 7",
    "organismo": "I MUNICIPALIDAD DE VICUNA",
    "organismoRut": "20.806.096-5",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1000000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICION DE MATERIALES PARA IMPLEMENTAR TALLERES, PROGRAMA 4 a 7. Organismo demandante: I MUNICIPALIDAD DE VICUNA. Unidad de compra: Ilustre Municipalidad de Vicuña.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:10"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 14:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3597-587-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3597-587-COT26",
        "producto": "ADQUISICION DE MATERIALES PARA IMPLEMENTAR TALLERES, PROGRAMA 4 a 7",
        "cantidad": 1,
        "precioUnitario": 1000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1392-47-COT26",
    "codigo": "1392-47-COT26",
    "titulo": "ADQUISICION DE ACCESORIOS COMPUTACIONALES PARA PRONOSTICOS ( REQ N° 101)",
    "organismo": "DIRECCION GENERAL DE AERONAUTICA CIVIL",
    "organismoRut": "73.986.864-7",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 3461440,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 75,
    "riesgo": "Medio",
    "descripcion": "Proceso: ADQUISICION DE ACCESORIOS COMPUTACIONALES PARA PRONOSTICOS ( REQ N° 101). Organismo demandante: DIRECCION GENERAL DE AERONAUTICA CIVIL. Unidad de compra: UNIDAD DE COMPRA DMC.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:10"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1392-47-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1392-47-COT26",
        "producto": "ADQUISICION DE ACCESORIOS COMPUTACIONALES PARA PRONOSTICOS ( REQ N° 101)",
        "cantidad": 1,
        "precioUnitario": 3461440
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "5484-86-COT26",
    "codigo": "5484-86-COT26",
    "titulo": "ADQUISICIÓN DE INSUMOS COMPUTACIONALES, IAI-UTA",
    "organismo": "UNIVERSIDAD DE TARAPACA",
    "organismoRut": "82.319.352-3",
    "organismoPagoDias": 41,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Tarapacá",
    "monto": 2350000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 83,
    "riesgo": "Medio",
    "descripcion": "Proceso: ADQUISICIÓN DE INSUMOS COMPUTACIONALES, IAI-UTA. Organismo demandante: UNIVERSIDAD DE TARAPACA. Unidad de compra: Instituto Alta Investigacion.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:09"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_5484-86-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-5484-86-COT26",
        "producto": "ADQUISICIÓN DE INSUMOS COMPUTACIONALES, IAI-UTA",
        "cantidad": 1,
        "precioUnitario": 4500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3714-223-COT26",
    "codigo": "3714-223-COT26",
    "titulo": "Adquisición de timbre de agua para Liceo Nicolas Federico Lohse Vargas.",
    "organismo": "I MUNICIPALIDAD DE LOS VILOS",
    "organismoRut": "20.311.509-K",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 200000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de timbre de agua para Liceo Nicolas Federico Lohse Vargas.. Organismo demandante: I MUNICIPALIDAD DE LOS VILOS. Unidad de compra: Educacion.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:08"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3714-223-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3714-223-COT26",
        "producto": "Adquisición de timbre de agua para Liceo Nicolas Federico Lohse Vargas.",
        "cantidad": 1,
        "precioUnitario": 200000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1510-136-COT26",
    "codigo": "1510-136-COT26",
    "titulo": "Adquisición de artículos promocionales e institucionales para actividades del Programa GET de la DPP Malleco",
    "organismo": "DELEGACIÓN PRESIDENCIAL PROVINCIAL DE MALLECO",
    "organismoRut": "11.583.663-4",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1099360,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-21",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de artículos promocionales e institucionales para actividades del Programa GET de la DPP Malleco. Organismo demandante: DELEGACIÓN PRESIDENCIAL PROVINCIAL DE MALLECO. Unidad de compra: DELEGACIÓN PRESIDENCIAL PROVINCIAL DE MALLECO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:08"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "21/07/2026 15:01"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1510-136-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1510-136-COT26",
        "producto": "Adquisición de artículos promocionales e institucionales para actividades del Programa GET de la DPP Malleco",
        "cantidad": 1,
        "precioUnitario": 1099360
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3284-349-COT26",
    "codigo": "3284-349-COT26",
    "titulo": "ARTICULOS DE ASEO/RED LOCAL DE APOYOS Y CUIDADOS",
    "organismo": "I MUNICIPALIDAD DE CHAITEN",
    "organismoRut": "19.912.760-6",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 100000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ARTICULOS DE ASEO/RED LOCAL DE APOYOS Y CUIDADOS. Organismo demandante: I MUNICIPALIDAD DE CHAITEN. Unidad de compra: I MUNICIPALIDAD DE CHAITEN.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:07"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3284-349-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3284-349-COT26",
        "producto": "ARTICULOS DE ASEO/RED LOCAL DE APOYOS Y CUIDADOS",
        "cantidad": 1,
        "precioUnitario": 100000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1422824-1395-COT26",
    "codigo": "1422824-1395-COT26",
    "titulo": "SOLUCION ESPUMANTE DE POVIDONA YODADA 10% DE 1 LITRO",
    "organismo": "SERVICIO NACIONAL DE SALUD HOSPITAL CARLOS VAN BUR",
    "organismoRut": "55.174.107-2",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 3500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Medio",
    "descripcion": "Proceso: SOLUCION ESPUMANTE DE POVIDONA YODADA 10% DE 1 LITRO. Organismo demandante: SERVICIO NACIONAL DE SALUD HOSPITAL CARLOS VAN BUR. Unidad de compra: Insumos y Reactivos.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:06"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 16:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1422824-1395-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1422824-1395-COT26",
        "producto": "SOLUCION ESPUMANTE DE POVIDONA YODADA 10% DE 1 LITRO",
        "cantidad": 1,
        "precioUnitario": 3500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "5956-75-COT26",
    "codigo": "5956-75-COT26",
    "titulo": "ADQUISICIÓN MERCHANDISING FACULTAD DE HUMANIDADES Y EDUCACIÓN",
    "organismo": "UNIVERSIDAD DE ATACAMA",
    "organismoRut": "23.424.035-2",
    "organismoPagoDias": 40,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Atacama",
    "monto": 1060000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 82,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICIÓN MERCHANDISING FACULTAD DE HUMANIDADES Y EDUCACIÓN. Organismo demandante: UNIVERSIDAD DE ATACAMA. Unidad de compra: FACULTAD DE HUMANIDADES Y EDUCACION.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:06"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_5956-75-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-5956-75-COT26",
        "producto": "ADQUISICIÓN MERCHANDISING FACULTAD DE HUMANIDADES Y EDUCACIÓN",
        "cantidad": 1,
        "precioUnitario": 1060000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2961-669-COT26",
    "codigo": "2961-669-COT26",
    "titulo": "ESCRITORIOS Y REPISAS",
    "organismo": "I MUNICIPALIDAD DE LA GRANJA",
    "organismoRut": "50.296.642-8",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 350000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ESCRITORIOS Y REPISAS. Organismo demandante: I MUNICIPALIDAD DE LA GRANJA. Unidad de compra: Adquisicion Municipal.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:04"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2961-669-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2961-669-COT26",
        "producto": "ESCRITORIOS Y REPISAS",
        "cantidad": 1,
        "precioUnitario": 350000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3608-394-COT26",
    "codigo": "3608-394-COT26",
    "titulo": "Adq.de folletería y gigantografía/Secplan-PPL",
    "organismo": "I MUNICIPALIDAD DE SAAVEDRA",
    "organismoRut": "47.267.735-3",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 950000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adq.de folletería y gigantografía/Secplan-PPL. Organismo demandante: I MUNICIPALIDAD DE SAAVEDRA. Unidad de compra: I MUNICIPALIDAD DE SAAVEDRA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:03"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 16:15"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3608-394-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3608-394-COT26",
        "producto": "Adq.de folletería y gigantografía/Secplan-PPL",
        "cantidad": 1,
        "precioUnitario": 950000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2273-576-COT26",
    "codigo": "2273-576-COT26",
    "titulo": "ADQUISICION MOBILIARIO OLN; Memo 19018 mms",
    "organismo": "I MUNICIPALIDAD DE LA PINTANA",
    "organismoRut": "65.879.038-1",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1724313,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 77,
    "riesgo": "Medio",
    "descripcion": "Proceso: ADQUISICION MOBILIARIO OLN; Memo 19018 mms. Organismo demandante: I MUNICIPALIDAD DE LA PINTANA. Unidad de compra: DEPARTAMENTO ADQUISICIONES MUNICIPAL.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:03"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 12:02"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2273-576-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2273-576-COT26",
        "producto": "ADQUISICION MOBILIARIO OLN; Memo 19018 mms",
        "cantidad": 1,
        "precioUnitario": 1724313
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4329-160-COT26",
    "codigo": "4329-160-COT26",
    "titulo": "COMPRA DE CAJAS DE BAUL ORGANIZADORAS SOL3929.",
    "organismo": "I MUNICIPALIDAD DE NIQUEN",
    "organismoRut": "69.422.496-6",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 350000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: COMPRA DE CAJAS DE BAUL ORGANIZADORAS SOL3929.. Organismo demandante: I MUNICIPALIDAD DE NIQUEN. Unidad de compra: Departamento de Salud.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:03"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4329-160-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4329-160-COT26",
        "producto": "COMPRA DE CAJAS DE BAUL ORGANIZADORAS SOL3929.",
        "cantidad": 1,
        "precioUnitario": 350000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "732434-49-COT26",
    "codigo": "732434-49-COT26",
    "titulo": "Compra de espejo y sets de cubiertos por proyecto MEL",
    "organismo": "Centro de Sangre y Tejidos de Concepcion",
    "organismoRut": "60.607.295-0",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Biobío",
    "monto": 80000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 81,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Compra de espejo y sets de cubiertos por proyecto MEL. Organismo demandante: Centro de Sangre y Tejidos de Concepcion. Unidad de compra: Centro de Sangre.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:02"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_732434-49-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-732434-49-COT26",
        "producto": "Compra de espejo y sets de cubiertos por proyecto MEL",
        "cantidad": 1,
        "precioUnitario": 80000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2440-1046-COT26",
    "codigo": "2440-1046-COT26",
    "titulo": "Marcadores de pizarra y recargas para Colegio El Boldo de Curicó",
    "organismo": "I MUNICIPALIDAD DE CURICO",
    "organismoRut": "13.242.707-8",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Maule",
    "monto": 3050000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-18",
    "matchScore": 97,
    "riesgo": "Medio",
    "descripcion": "Proceso: Marcadores de pizarra y recargas para Colegio El Boldo de Curicó. Organismo demandante: I MUNICIPALIDAD DE CURICO. Unidad de compra: Municipalidad de Curicó - Educación - Adquisiciones.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:02"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "18/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2440-1046-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2440-1046-COT26",
        "producto": "Marcadores de pizarra y recargas para Colegio El Boldo de Curicó",
        "cantidad": 1,
        "precioUnitario": 5200000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2284-462-COT26",
    "codigo": "2284-462-COT26",
    "titulo": "INSUMOS DE ASEO PARA EL AREA DE SALUD — SOLICITUD Nº 6214",
    "organismo": "I MUNICIPALIDAD VALDIVIA",
    "organismoRut": "14.295.151-5",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Medio",
    "rubro": "Aseo e Higiene",
    "region": "Los Ríos",
    "monto": 2000000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 76,
    "riesgo": "Medio",
    "descripcion": "Proceso: INSUMOS DE ASEO PARA EL AREA DE SALUD — SOLICITUD Nº 6214. Organismo demandante: I MUNICIPALIDAD VALDIVIA. Unidad de compra: DPTO. DE SALUD MUNICIPAL DE VALDIVIA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:02"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2284-462-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2284-462-COT26",
        "producto": "INSUMOS DE ASEO PARA EL AREA DE SALUD — SOLICITUD Nº 6214",
        "cantidad": 1,
        "precioUnitario": 2000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3615-89-COT26",
    "codigo": "3615-89-COT26",
    "titulo": "INSUMOS PARA MEDICIÓN DE CLORO RESIDUAL EN AGUA POTABLE DE EE.EE. DE LA COMUNA DE COMBARBALÁ.",
    "organismo": "ILUSTRE MINICIPALIDAD DE COMBARBALA",
    "organismoRut": "44.890.777-3",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Medio",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 1200000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 81,
    "riesgo": "Bajo",
    "descripcion": "Proceso: INSUMOS PARA MEDICIÓN DE CLORO RESIDUAL EN AGUA POTABLE DE EE.EE. DE LA COMUNA DE COMBARBALÁ.. Organismo demandante: ILUSTRE MINICIPALIDAD DE COMBARBALA. Unidad de compra: Departamento de Educación.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:02"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3615-89-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3615-89-COT26",
        "producto": "INSUMOS PARA MEDICIÓN DE CLORO RESIDUAL EN AGUA POTABLE DE EE.EE. DE LA COMUNA DE COMBARBALÁ.",
        "cantidad": 1,
        "precioUnitario": 1200000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1250349-18-COT26",
    "codigo": "1250349-18-COT26",
    "titulo": "C.C.P. NUEVA IMPERIAL, “ADQUISICION DE UTILES DE ASEO PARA EL ECONOMATO DE LA UNIDAD”. (E102RT9)",
    "organismo": "Dirección Regional de Gendarmeria - Temuco",
    "organismoRut": "78.013.437-0",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "La Araucanía",
    "monto": 180000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: C.C.P. NUEVA IMPERIAL, “ADQUISICION DE UTILES DE ASEO PARA EL ECONOMATO DE LA UNIDAD”. (E102RT9). Organismo demandante: Dirección Regional de Gendarmeria - Temuco. Unidad de compra: Economatos-Región de la Araucanía.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:02"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1250349-18-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1250349-18-COT26",
        "producto": "C.C.P. NUEVA IMPERIAL, “ADQUISICION DE UTILES DE ASEO PARA EL ECONOMATO DE LA UNIDAD”. (E102RT9)",
        "cantidad": 1,
        "precioUnitario": 180000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1057385-85-COT26",
    "codigo": "1057385-85-COT26",
    "titulo": "COMPRA DE INSUMOS( PMG ATENCION INTEGRAL DEMENCIA)",
    "organismo": "SERVICIO DE SALUD ANTOFAGASTA HOSPITAL 21 DE MAYO TALTAL",
    "organismoRut": "43.846.423-8",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Antofagasta",
    "monto": 750000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: COMPRA DE INSUMOS( PMG ATENCION INTEGRAL DEMENCIA). Organismo demandante: SERVICIO DE SALUD ANTOFAGASTA HOSPITAL 21 DE MAYO TALTAL. Unidad de compra: Bienes y Servicios.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:01"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1057385-85-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1057385-85-COT26",
        "producto": "COMPRA DE INSUMOS( PMG ATENCION INTEGRAL DEMENCIA)",
        "cantidad": 1,
        "precioUnitario": 750000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "5959-104-COT26",
    "codigo": "5959-104-COT26",
    "titulo": "Adquisición materiales de oficina",
    "organismo": "UNIVERSIDAD DE ATACAMA",
    "organismoRut": "23.424.035-2",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Atacama",
    "monto": 1000000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-21",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición materiales de oficina. Organismo demandante: UNIVERSIDAD DE ATACAMA. Unidad de compra: INSTITUTO TECNOLOGICO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:01"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "21/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_5959-104-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-5959-104-COT26",
        "producto": "Adquisición materiales de oficina",
        "cantidad": 1,
        "precioUnitario": 1000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "564953-490-COT26",
    "codigo": "564953-490-COT26",
    "titulo": "AMPOLLETAS REPUESTOS VEHICULOS CORPORATIVOS CESFAM APOQUINDO",
    "organismo": "CORP DE EDUCACION Y SALUD DE LAS CONDES",
    "organismoRut": "43.237.817-8",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1350000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: AMPOLLETAS REPUESTOS VEHICULOS CORPORATIVOS CESFAM APOQUINDO. Organismo demandante: CORP DE EDUCACION Y SALUD DE LAS CONDES. Unidad de compra: Corporación de Educación y Salud de Las Condes.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 16:00"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_564953-490-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-564953-490-COT26",
        "producto": "AMPOLLETAS REPUESTOS VEHICULOS CORPORATIVOS CESFAM APOQUINDO",
        "cantidad": 1,
        "precioUnitario": 1350000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "953-45-COT26",
    "codigo": "953-45-COT26",
    "titulo": "Adquisición de Elementos Computacionales DPR",
    "organismo": "DELEGACIÓN PRESIDENCIAL REGIONAL DE COQUIMBO",
    "organismoRut": "68.507.439-0",
    "organismoPagoDias": 41,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Coquimbo",
    "monto": 900000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 83,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de Elementos Computacionales DPR. Organismo demandante: DELEGACIÓN PRESIDENCIAL REGIONAL DE COQUIMBO. Unidad de compra: Ministerio del Interior - Delegación Reg  Coquimbo.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:59"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_953-45-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-953-45-COT26",
        "producto": "Adquisición de Elementos Computacionales DPR",
        "cantidad": 1,
        "precioUnitario": 900000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3597-598-COT26",
    "codigo": "3597-598-COT26",
    "titulo": "ADQUISICION DE MATERIAL DE APOYO PARA LA UNIDAD DE FISCALIZACION.",
    "organismo": "I MUNICIPALIDAD DE VICUNA",
    "organismoRut": "20.806.096-5",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 950000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICION DE MATERIAL DE APOYO PARA LA UNIDAD DE FISCALIZACION.. Organismo demandante: I MUNICIPALIDAD DE VICUNA. Unidad de compra: Ilustre Municipalidad de Vicuña.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:58"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3597-598-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3597-598-COT26",
        "producto": "ADQUISICION DE MATERIAL DE APOYO PARA LA UNIDAD DE FISCALIZACION.",
        "cantidad": 1,
        "precioUnitario": 950000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1389584-94-COT26",
    "codigo": "1389584-94-COT26",
    "titulo": "Insumos Educativos y Material Didáctico para Programa PIE – Liceo Municipal Polivalente",
    "organismo": "DIRECCION COMUNAL DE EDUCACION - CORP MARIA PINTO",
    "organismoRut": "36.305.246-2",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 750251,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Insumos Educativos y Material Didáctico para Programa PIE – Liceo Municipal Polivalente. Organismo demandante: DIRECCION COMUNAL DE EDUCACION - CORP MARIA PINTO. Unidad de compra: DIRECCION COMUNAL DE EDUCACION - CORP MARIA PINTO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:57"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 18:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1389584-94-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1389584-94-COT26",
        "producto": "Insumos Educativos y Material Didáctico para Programa PIE – Liceo Municipal Polivalente",
        "cantidad": 1,
        "precioUnitario": 750251
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3428-172-COT26",
    "codigo": "3428-172-COT26",
    "titulo": "Compra útiles de aseo para la JDN La Araucanía",
    "organismo": "Ejercito de Chile",
    "organismoRut": "90.520.203-8",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 800000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Compra útiles de aseo para la JDN La Araucanía. Organismo demandante: Ejercito de Chile. Unidad de compra: Destacamento de Montaña N° 8 \"Tucapel\" DESMÑA N° 8.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:55"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3428-172-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3428-172-COT26",
        "producto": "Compra útiles de aseo para la JDN La Araucanía",
        "cantidad": 1,
        "precioUnitario": 800000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1509-110-COT26",
    "codigo": "1509-110-COT26",
    "titulo": "“COMPRA SE SUMINISTROS PARA IMPRESORAS Y PERIFERICOS COMPUTACIONALES”",
    "organismo": "SERVICIO DE SALUD METROPOLITANO NORTE HOSPITAL DE TIL TIL",
    "organismoRut": "55.930.930-1",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: “COMPRA SE SUMINISTROS PARA IMPRESORAS Y PERIFERICOS COMPUTACIONALES”. Organismo demandante: SERVICIO DE SALUD METROPOLITANO NORTE HOSPITAL DE TIL TIL. Unidad de compra: Hospital Til - Til.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:53"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1509-110-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1509-110-COT26",
        "producto": "“COMPRA SE SUMINISTROS PARA IMPRESORAS Y PERIFERICOS COMPUTACIONALES”",
        "cantidad": 1,
        "precioUnitario": 500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "568658-1120-COT26",
    "codigo": "568658-1120-COT26",
    "titulo": "ADQUISICION DE INSUMOS ELECTRICOS",
    "organismo": "CORPORACION MUNICIPAL VINA DEL MAR PARA EL DESARROLLO SOCIAL",
    "organismoRut": "71.134.825-8",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 180000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICION DE INSUMOS ELECTRICOS. Organismo demandante: CORPORACION MUNICIPAL VINA DEL MAR PARA EL DESARROLLO SOCIAL. Unidad de compra: CORPORACION MUNICIPAL VINA DEL MAR PARA EL DESARRO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:52"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 13:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_568658-1120-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-568658-1120-COT26",
        "producto": "ADQUISICION DE INSUMOS ELECTRICOS",
        "cantidad": 1,
        "precioUnitario": 180000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3593-279-COT26",
    "codigo": "3593-279-COT26",
    "titulo": "MANTENIMIENTO  PREVENTIVO  PLOTTER",
    "organismo": "ILUSTRE MINICIPALIDAD DE COMBARBALA",
    "organismoRut": "44.890.777-3",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1071000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: MANTENIMIENTO  PREVENTIVO  PLOTTER. Organismo demandante: ILUSTRE MINICIPALIDAD DE COMBARBALA. Unidad de compra: ILUSTRE MINICIPALIDAD DE COMBARBALA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:52"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3593-279-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3593-279-COT26",
        "producto": "MANTENIMIENTO  PREVENTIVO  PLOTTER",
        "cantidad": 1,
        "precioUnitario": 1071000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1497-127-COT26",
    "codigo": "1497-127-COT26",
    "titulo": "DISEÑO E IMPRESIÓN LIBROS PARA COLOREAR, PROGRAMA NACIONAL DE INMUNIZACIONES",
    "organismo": "SUBSECRETARIA DE SALUD PUBLICA",
    "organismoRut": "58.512.045-9",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 400000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-18",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: DISEÑO E IMPRESIÓN LIBROS PARA COLOREAR, PROGRAMA NACIONAL DE INMUNIZACIONES. Organismo demandante: SUBSECRETARIA DE SALUD PUBLICA. Unidad de compra: SEREMI SALUD REGION DE LOS RIOS.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:52"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "18/07/2026 13:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1497-127-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1497-127-COT26",
        "producto": "DISEÑO E IMPRESIÓN LIBROS PARA COLOREAR, PROGRAMA NACIONAL DE INMUNIZACIONES",
        "cantidad": 1,
        "precioUnitario": 400000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4703-195-COT26",
    "codigo": "4703-195-COT26",
    "titulo": "compra de impresoras/liceo luis acosta/ley sep",
    "organismo": "I MUNICIPALIDAD DE EL MONTE",
    "organismoRut": "51.936.132-5",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2850000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Medio",
    "descripcion": "Proceso: compra de impresoras/liceo luis acosta/ley sep. Organismo demandante: I MUNICIPALIDAD DE EL MONTE. Unidad de compra: EDUCACION.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:52"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4703-195-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4703-195-COT26",
        "producto": "compra de impresoras/liceo luis acosta/ley sep",
        "cantidad": 1,
        "precioUnitario": 5000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "557974-300-COT26",
    "codigo": "557974-300-COT26",
    "titulo": "insumos para oficina para S-505 pedido 11378",
    "organismo": "CORPORACION MUNICIPAL DE EDUCACION,SALUD,CULTURA Y ATENCION AL MENOR,",
    "organismoRut": "64.810.178-1",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 467300,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: insumos para oficina para S-505 pedido 11378. Organismo demandante: CORPORACION MUNICIPAL DE EDUCACION,SALUD,CULTURA Y ATENCION AL MENOR,. Unidad de compra: ÁREA DE SALUD.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:51"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_557974-300-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-557974-300-COT26",
        "producto": "insumos para oficina para S-505 pedido 11378",
        "cantidad": 1,
        "precioUnitario": 467300
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1237725-35-COT26",
    "codigo": "1237725-35-COT26",
    "titulo": "Adquisición de artículos publicitarios de gran tamaño",
    "organismo": "CORPORACION MUNICIPAL DE DEPORTES Y RECREACION SAN JAVIER DE LONCOMILLA",
    "organismoRut": "20.248.652-7",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1300000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de artículos publicitarios de gran tamaño. Organismo demandante: CORPORACION MUNICIPAL DE DEPORTES Y RECREACION SAN JAVIER DE LONCOMILLA. Unidad de compra: CORPORACION MUNICIPAL DE DEPORTES Y RECREACION SAN JAVIER DE LONCOMILLA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:50"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1237725-35-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1237725-35-COT26",
        "producto": "Adquisición de artículos publicitarios de gran tamaño",
        "cantidad": 1,
        "precioUnitario": 1300000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4476-70-COT26",
    "codigo": "4476-70-COT26",
    "titulo": "ARTICULOS DE OFICINA PROG. MAS SALUD EN COMUNIDAD DEL CESFAM DE ROMERAL",
    "organismo": "I.MUNICIPALIDAD DE ROMERAL",
    "organismoRut": "77.097.730-4",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 81,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ARTICULOS DE OFICINA PROG. MAS SALUD EN COMUNIDAD DEL CESFAM DE ROMERAL. Organismo demandante: I.MUNICIPALIDAD DE ROMERAL. Unidad de compra: Salud.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:50"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4476-70-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4476-70-COT26",
        "producto": "ARTICULOS DE OFICINA PROG. MAS SALUD EN COMUNIDAD DEL CESFAM DE ROMERAL",
        "cantidad": 1,
        "precioUnitario": 500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "578459-559-COT26",
    "codigo": "578459-559-COT26",
    "titulo": "INSUMOS DE OFICINA- MEMO 392-15/26-PROGRAMA CECOSF- JOSE IGNACIO FUENTES- CECOSF SAN VICENTE DE NALTAGUA",
    "organismo": "CORP MUNICIPAL DE ISLA DE MAIPO PARA L",
    "organismoRut": "92.604.017-2",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 180000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-22",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso: INSUMOS DE OFICINA- MEMO 392-15/26-PROGRAMA CECOSF- JOSE IGNACIO FUENTES- CECOSF SAN VICENTE DE NALTAGUA. Organismo demandante: CORP MUNICIPAL DE ISLA DE MAIPO PARA L. Unidad de compra: Corporación Municipal Isla de Maipo.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:50"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "22/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_578459-559-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-578459-559-COT26",
        "producto": "INSUMOS DE OFICINA- MEMO 392-15/26-PROGRAMA CECOSF- JOSE IGNACIO FUENTES- CECOSF SAN VICENTE DE NALTAGUA",
        "cantidad": 1,
        "precioUnitario": 60000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4449-14-COT26",
    "codigo": "4449-14-COT26",
    "titulo": "Adquisición de cajas de cartón y cintas de embalaje ultra resistentes",
    "organismo": "SERVICIO NACIONAL DEL PATRIMONIO CULTURAL",
    "organismoRut": "28.885.794-0",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1850000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-24",
    "matchScore": 75,
    "riesgo": "Medio",
    "descripcion": "Proceso: Adquisición de cajas de cartón y cintas de embalaje ultra resistentes. Organismo demandante: SERVICIO NACIONAL DEL PATRIMONIO CULTURAL. Unidad de compra: SUBDIRECCIÓN DE BIBLIOTECAS PÚBLICAS.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:49"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "24/07/2026 17:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4449-14-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4449-14-COT26",
        "producto": "Adquisición de cajas de cartón y cintas de embalaje ultra resistentes",
        "cantidad": 1,
        "precioUnitario": 4000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "806208-65-COT26",
    "codigo": "806208-65-COT26",
    "titulo": "Adquisición de pizarra magnética para FACMED UTA",
    "organismo": "UNIVERSIDAD DE TARAPACA",
    "organismoRut": "82.319.352-3",
    "organismoPagoDias": 42,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Tarapacá",
    "monto": 180000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 84,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de pizarra magnética para FACMED UTA. Organismo demandante: UNIVERSIDAD DE TARAPACA. Unidad de compra: Facultad de Medicina.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:49"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_806208-65-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-806208-65-COT26",
        "producto": "Adquisición de pizarra magnética para FACMED UTA",
        "cantidad": 1,
        "precioUnitario": 60000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "5067-1724-COT26",
    "codigo": "5067-1724-COT26",
    "titulo": "Servicio de Publicidad - Pin Metálico SIMIN 2027",
    "organismo": "UNIVERSIDAD DE SANTIAGO DE CHILE",
    "organismoRut": "83.678.765-6",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 550000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Servicio de Publicidad - Pin Metálico SIMIN 2027. Organismo demandante: UNIVERSIDAD DE SANTIAGO DE CHILE. Unidad de compra: Universidad de Santiago de Chile.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:49"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_5067-1724-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-5067-1724-COT26",
        "producto": "Servicio de Publicidad - Pin Metálico SIMIN 2027",
        "cantidad": 1,
        "precioUnitario": 550000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1208066-312-COT26",
    "codigo": "1208066-312-COT26",
    "titulo": "PROVISIÓN DE MUEBLES PARA EQUIPAR SALA DE IMPRESIONES, CAMPUS PEHUENCHE, UNIVERSIDAD DE TALCA",
    "organismo": "UNIVERSIDAD DE TALCA",
    "organismoRut": "74.234.720-8",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Maule",
    "monto": 1750000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 98,
    "riesgo": "Medio",
    "descripcion": "Proceso: PROVISIÓN DE MUEBLES PARA EQUIPAR SALA DE IMPRESIONES, CAMPUS PEHUENCHE, UNIVERSIDAD DE TALCA. Organismo demandante: UNIVERSIDAD DE TALCA. Unidad de compra: ADMINISTRACIÓN DE CAMPUS.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:49"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1208066-312-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1208066-312-COT26",
        "producto": "PROVISIÓN DE MUEBLES PARA EQUIPAR SALA DE IMPRESIONES, CAMPUS PEHUENCHE, UNIVERSIDAD DE TALCA",
        "cantidad": 1,
        "precioUnitario": 1750000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2211-826-COT26",
    "codigo": "2211-826-COT26",
    "titulo": "Sol. 272 Materiales Varios DESARROLLO COMUNITARIO OLN",
    "organismo": "I MUNICIPALIDAD DE LIMACHE",
    "organismoRut": "86.968.119-0",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Sol. 272 Materiales Varios DESARROLLO COMUNITARIO OLN. Organismo demandante: I MUNICIPALIDAD DE LIMACHE. Unidad de compra: MUNICIPALIDAD LIMACHE - Adquisiciones.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:48"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2211-826-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2211-826-COT26",
        "producto": "Sol. 272 Materiales Varios DESARROLLO COMUNITARIO OLN",
        "cantidad": 1,
        "precioUnitario": 500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1391-377-COT26",
    "codigo": "1391-377-COT26",
    "titulo": "CCP CURICÓ // ADQUISICIÓN DE ARTÍCULOS DE OFICINA PARA EL ÁREA TÉCNICA.",
    "organismo": "Dirección Regional de Gendarmeria - Talca",
    "organismoRut": "57.435.451-6",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Maule",
    "monto": 175000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: CCP CURICÓ // ADQUISICIÓN DE ARTÍCULOS DE OFICINA PARA EL ÁREA TÉCNICA.. Organismo demandante: Dirección Regional de Gendarmeria - Talca. Unidad de compra: Región del Maule.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:48"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 18:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1391-377-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1391-377-COT26",
        "producto": "CCP CURICÓ // ADQUISICIÓN DE ARTÍCULOS DE OFICINA PARA EL ÁREA TÉCNICA.",
        "cantidad": 1,
        "precioUnitario": 175000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1459412-2-COT26",
    "codigo": "1459412-2-COT26",
    "titulo": "Adquisición elementos baja estimulación sensorial",
    "organismo": "Svc de Registro Civil e Identificación - SENADIS",
    "organismoRut": "95.511.129-0",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1900000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 97,
    "riesgo": "Medio",
    "descripcion": "Proceso: Adquisición elementos baja estimulación sensorial. Organismo demandante: Svc de Registro Civil e Identificación - SENADIS. Unidad de compra: Registro Civil Maule-Senadis.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:47"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 11:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1459412-2-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1459412-2-COT26",
        "producto": "Adquisición elementos baja estimulación sensorial",
        "cantidad": 1,
        "precioUnitario": 4050000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1132470-31-COT26",
    "codigo": "1132470-31-COT26",
    "titulo": "ADQUISICION DE INSUMOS DE OFICINA PARA SLEP VALPARAISO",
    "organismo": "SERVICIO LOCAL DE EDUCACION PUBLICA DE VALPARAISO",
    "organismoRut": "52.453.364-4",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Valparaíso",
    "monto": 3000000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 98,
    "riesgo": "Medio",
    "descripcion": "Proceso: ADQUISICION DE INSUMOS DE OFICINA PARA SLEP VALPARAISO. Organismo demandante: SERVICIO LOCAL DE EDUCACION PUBLICA DE VALPARAISO. Unidad de compra: PROGRAMA 01.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:46"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1132470-31-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1132470-31-COT26",
        "producto": "ADQUISICION DE INSUMOS DE OFICINA PARA SLEP VALPARAISO",
        "cantidad": 1,
        "precioUnitario": 3000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1383-122-COT26",
    "codigo": "1383-122-COT26",
    "titulo": "AFICHES LEY IVE Y CUIDADOS PALIATIVOS",
    "organismo": "HOSPITAL VILCUN",
    "organismoRut": "24.809.129-2",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 800000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: AFICHES LEY IVE Y CUIDADOS PALIATIVOS. Organismo demandante: HOSPITAL VILCUN. Unidad de compra: Hospital Vilcún.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:46"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1383-122-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1383-122-COT26",
        "producto": "AFICHES LEY IVE Y CUIDADOS PALIATIVOS",
        "cantidad": 1,
        "precioUnitario": 800000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1057514-92-COT26",
    "codigo": "1057514-92-COT26",
    "titulo": "TAMBOR BROTHER DR-1060",
    "organismo": "SERVICIO DE SALUD NUBLE HOSPITAL DE EL C",
    "organismoRut": "34.010.857-1",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Ñuble",
    "monto": 300000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso: TAMBOR BROTHER DR-1060. Organismo demandante: SERVICIO DE SALUD NUBLE HOSPITAL DE EL C. Unidad de compra: Bienes y Servicios.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:44"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1057514-92-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1057514-92-COT26",
        "producto": "TAMBOR BROTHER DR-1060",
        "cantidad": 1,
        "precioUnitario": 300000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3962-244-COT26",
    "codigo": "3962-244-COT26",
    "titulo": "CAMARAS DE VIGILANCIA,  ACCESORIOS Y MANO DE OBRA INSTALACION EN RECINTO BODEGA MUNICIPAL",
    "organismo": "I MUNICIPALIDAD DE SANTA BARBARA",
    "organismoRut": "24.334.934-3",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1950000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 75,
    "riesgo": "Medio",
    "descripcion": "Proceso: CAMARAS DE VIGILANCIA,  ACCESORIOS Y MANO DE OBRA INSTALACION EN RECINTO BODEGA MUNICIPAL. Organismo demandante: I MUNICIPALIDAD DE SANTA BARBARA. Unidad de compra: Municipalidad de Santa Barbara.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:44"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3962-244-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3962-244-COT26",
        "producto": "CAMARAS DE VIGILANCIA,  ACCESORIOS Y MANO DE OBRA INSTALACION EN RECINTO BODEGA MUNICIPAL",
        "cantidad": 1,
        "precioUnitario": 1950000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3714-222-COT26",
    "codigo": "3714-222-COT26",
    "titulo": "Adquisición de implementos deportivos para la Escuela Pablo Baroilhet.",
    "organismo": "I MUNICIPALIDAD DE LOS VILOS",
    "organismoRut": "20.311.509-K",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1150000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de implementos deportivos para la Escuela Pablo Baroilhet.. Organismo demandante: I MUNICIPALIDAD DE LOS VILOS. Unidad de compra: Educacion.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:43"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3714-222-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3714-222-COT26",
        "producto": "Adquisición de implementos deportivos para la Escuela Pablo Baroilhet.",
        "cantidad": 1,
        "precioUnitario": 1150000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1087-120-COT26",
    "codigo": "1087-120-COT26",
    "titulo": "Adquisición de materiales y artículos de escritorio para la Oficina Regional de Arica y Parinacota",
    "organismo": "CORP NACIONAL FORESTAL",
    "organismoRut": "50.399.889-8",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 351600,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-18",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de materiales y artículos de escritorio para la Oficina Regional de Arica y Parinacota. Organismo demandante: CORP NACIONAL FORESTAL. Unidad de compra: XV Región - Oficina Regional Arica y Parinacota.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:43"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "18/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1087-120-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1087-120-COT26",
        "producto": "Adquisición de materiales y artículos de escritorio para la Oficina Regional de Arica y Parinacota",
        "cantidad": 1,
        "precioUnitario": 351600
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2921-40-COT26",
    "codigo": "2921-40-COT26",
    "titulo": "Adquisición de artículos de escritorio",
    "organismo": "I MUNICIPALIDAD DE JUAN FERNANDEZ",
    "organismoRut": "76.301.247-1",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 600000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-23",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de artículos de escritorio. Organismo demandante: I MUNICIPALIDAD DE JUAN FERNANDEZ. Unidad de compra: Salud.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:43"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "23/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2921-40-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2921-40-COT26",
        "producto": "Adquisición de artículos de escritorio",
        "cantidad": 1,
        "precioUnitario": 600000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1344159-18-COT26",
    "codigo": "1344159-18-COT26",
    "titulo": "ARTICULOS DE HIGENE PERSONAL PARA ALUMNOS - PRFE",
    "organismo": "PRFE",
    "organismoRut": "12.464.321-2",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2730720,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Medio",
    "descripcion": "Proceso: ARTICULOS DE HIGENE PERSONAL PARA ALUMNOS - PRFE. Organismo demandante: PRFE. Unidad de compra: Programa Residencia Familiar Estudiantil.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:43"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 17:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1344159-18-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1344159-18-COT26",
        "producto": "ARTICULOS DE HIGENE PERSONAL PARA ALUMNOS - PRFE",
        "cantidad": 1,
        "precioUnitario": 2730720
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "418-1039-COT26",
    "codigo": "418-1039-COT26",
    "titulo": "CRA-ESCRITORIO- TONER BROTHER TN 1060 NEGRO",
    "organismo": "SERVICIO NACIONAL DE SALUD HOSPITAL DE PUERTO AYSEN",
    "organismoRut": "86.186.665-0",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Aysén",
    "monto": 1850000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-21",
    "matchScore": 75,
    "riesgo": "Medio",
    "descripcion": "Proceso: CRA-ESCRITORIO- TONER BROTHER TN 1060 NEGRO. Organismo demandante: SERVICIO NACIONAL DE SALUD HOSPITAL DE PUERTO AYSEN. Unidad de compra: H Puerto Aysén.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:42"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "21/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_418-1039-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-418-1039-COT26",
        "producto": "CRA-ESCRITORIO- TONER BROTHER TN 1060 NEGRO",
        "cantidad": 1,
        "precioUnitario": 4000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "522-108-COT26",
    "codigo": "522-108-COT26",
    "titulo": "COMPRA ARTICULOS DE ESCRITORIO Y PAPELERIA PARA UNIDAD EDUCATIVA",
    "organismo": "HOSPITAL DE LITUECHE",
    "organismoRut": "48.825.550-2",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 400000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: COMPRA ARTICULOS DE ESCRITORIO Y PAPELERIA PARA UNIDAD EDUCATIVA. Organismo demandante: HOSPITAL DE LITUECHE. Unidad de compra: Hosp. de Litueche.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:41"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_522-108-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-522-108-COT26",
        "producto": "COMPRA ARTICULOS DE ESCRITORIO Y PAPELERIA PARA UNIDAD EDUCATIVA",
        "cantidad": 1,
        "precioUnitario": 400000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1173430-109-COT26",
    "codigo": "1173430-109-COT26",
    "titulo": "CET OSORNO REQUIERE MATERIALES DE OFICINA PARA UNIDAD",
    "organismo": "Centro de Educación y Trabajo de Osorno",
    "organismoRut": "38.465.192-8",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Los Lagos",
    "monto": 339500,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: CET OSORNO REQUIERE MATERIALES DE OFICINA PARA UNIDAD. Organismo demandante: Centro de Educación y Trabajo de Osorno. Unidad de compra: CET Osorno.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:40"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 14:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1173430-109-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1173430-109-COT26",
        "producto": "CET OSORNO REQUIERE MATERIALES DE OFICINA PARA UNIDAD",
        "cantidad": 1,
        "precioUnitario": 339500
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1143-96-COT26",
    "codigo": "1143-96-COT26",
    "titulo": "CARPETA INSTITUCIONAL - DPR BIOBIO",
    "organismo": "DELEGACIÓN PRESIDENCIAL REGIONAL DEL BIOBÍO",
    "organismoRut": "95.192.702-K",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Biobío",
    "monto": 300000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso: CARPETA INSTITUCIONAL - DPR BIOBIO. Organismo demandante: DELEGACIÓN PRESIDENCIAL REGIONAL DEL BIOBÍO. Unidad de compra: Delegación Presidencial Regional del Biobio.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:40"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1143-96-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1143-96-COT26",
        "producto": "CARPETA INSTITUCIONAL - DPR BIOBIO",
        "cantidad": 1,
        "precioUnitario": 300000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1216088-155-COT26",
    "codigo": "1216088-155-COT26",
    "titulo": "CINTAS DE IMPRESIÓN Y TARJETAS CREDENCIALES PVC",
    "organismo": "CORPORACION MUNICIPAL DE DEPORTES DE PUENTE ALTO",
    "organismoRut": "52.033.518-0",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 290000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: CINTAS DE IMPRESIÓN Y TARJETAS CREDENCIALES PVC. Organismo demandante: CORPORACION MUNICIPAL DE DEPORTES DE PUENTE ALTO. Unidad de compra: OPERACIONES.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:38"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 14:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1216088-155-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1216088-155-COT26",
        "producto": "CINTAS DE IMPRESIÓN Y TARJETAS CREDENCIALES PVC",
        "cantidad": 1,
        "precioUnitario": 290000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3946-228-COT26",
    "codigo": "3946-228-COT26",
    "titulo": "Compra de Insumos para Obras de Mejoramiento de Parque Municipal.",
    "organismo": "I MUNICIPALIDAD DE PICHIDEGUA",
    "organismoRut": "77.618.241-4",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1990000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Medio",
    "descripcion": "Proceso: Compra de Insumos para Obras de Mejoramiento de Parque Municipal.. Organismo demandante: I MUNICIPALIDAD DE PICHIDEGUA. Unidad de compra: Administración y Finanzas.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:38"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3946-228-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3946-228-COT26",
        "producto": "Compra de Insumos para Obras de Mejoramiento de Parque Municipal.",
        "cantidad": 1,
        "precioUnitario": 1990000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "5795-53-COT26",
    "codigo": "5795-53-COT26",
    "titulo": "EPJA ESCRIORIO",
    "organismo": "DEPARTAMENTO PROVINCIAL DE EDUCACIÓN DE RANCO",
    "organismoRut": "48.600.079-8",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 350000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso: EPJA ESCRIORIO. Organismo demandante: DEPARTAMENTO PROVINCIAL DE EDUCACIÓN DE RANCO. Unidad de compra: DEPARTAMENTO PROVINCIAL DE EDUCACIÓN DE RANCO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:35"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_5795-53-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-5795-53-COT26",
        "producto": "EPJA ESCRIORIO",
        "cantidad": 1,
        "precioUnitario": 350000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2675-245-COT26",
    "codigo": "2675-245-COT26",
    "titulo": "IMPLEMENTOS DE ESTIMULACION PARA PROFESIONALES",
    "organismo": "I MUNICIPALIDAD DE MOSTAZAL",
    "organismoRut": "60.666.369-6",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 98,
    "riesgo": "Medio",
    "descripcion": "Proceso: IMPLEMENTOS DE ESTIMULACION PARA PROFESIONALES. Organismo demandante: I MUNICIPALIDAD DE MOSTAZAL. Unidad de compra: I MUNICIPALIDAD DE MOSTAZAL.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:35"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 14:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2675-245-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2675-245-COT26",
        "producto": "IMPLEMENTOS DE ESTIMULACION PARA PROFESIONALES",
        "cantidad": 1,
        "precioUnitario": 2500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2950-213-COT26",
    "codigo": "2950-213-COT26",
    "titulo": "ADQUISICIÓN DE ARTÍCULOS DE LIBRERÍA Y VARIOS PARA CONFECCIÓN DE TRAMOYAS CADETES",
    "organismo": "ESCUELA NAVAL \"ARTURO PRAT\"",
    "organismoRut": "79.964.666-9",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 950000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICIÓN DE ARTÍCULOS DE LIBRERÍA Y VARIOS PARA CONFECCIÓN DE TRAMOYAS CADETES. Organismo demandante: ESCUELA NAVAL \"ARTURO PRAT\". Unidad de compra: ESCUELA NAVAL \"ARTURO PRAT\".",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:35"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2950-213-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2950-213-COT26",
        "producto": "ADQUISICIÓN DE ARTÍCULOS DE LIBRERÍA Y VARIOS PARA CONFECCIÓN DE TRAMOYAS CADETES",
        "cantidad": 1,
        "precioUnitario": 950000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "324-389-COT26",
    "codigo": "324-389-COT26",
    "titulo": "DEPTO.SALUD/materiales de oficina",
    "organismo": "I MUNICIPALIDAD DE CERRILLOS",
    "organismoRut": "21.335.795-6",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 150000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: DEPTO.SALUD/materiales de oficina. Organismo demandante: I MUNICIPALIDAD DE CERRILLOS. Unidad de compra: Administración y Finanzas - Abastecimiento.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:35"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 13:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_324-389-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-324-389-COT26",
        "producto": "DEPTO.SALUD/materiales de oficina",
        "cantidad": 1,
        "precioUnitario": 150000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2859-728-COT26",
    "codigo": "2859-728-COT26",
    "titulo": "COMPRA MATERIALES DE OFICINA",
    "organismo": "UNIVERSIDAD DE ATACAMA",
    "organismoRut": "23.424.035-2",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Atacama",
    "monto": 200000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: COMPRA MATERIALES DE OFICINA. Organismo demandante: UNIVERSIDAD DE ATACAMA. Unidad de compra: SECCIÓN ABASTECIMIENTO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:34"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2859-728-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2859-728-COT26",
        "producto": "COMPRA MATERIALES DE OFICINA",
        "cantidad": 1,
        "precioUnitario": 200000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1098710-97-COT26",
    "codigo": "1098710-97-COT26",
    "titulo": "Servicio de diseño e impresión - BootCamp Explora",
    "organismo": "SUBSECRETARIA DE CIENCIA, TECNOLOGIA, CONOCIMIENTO E INNOVACION",
    "organismoRut": "64.364.647-K",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1900000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 80,
    "riesgo": "Medio",
    "descripcion": "Proceso: Servicio de diseño e impresión - BootCamp Explora. Organismo demandante: SUBSECRETARIA DE CIENCIA, TECNOLOGIA, CONOCIMIENTO E INNOVACION. Unidad de compra: SUBSECRETARIA DE CIENCIA, TECNOLOGIA, CONOCIMIENTO E INNOVACION.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:34"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1098710-97-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1098710-97-COT26",
        "producto": "Servicio de diseño e impresión - BootCamp Explora",
        "cantidad": 1,
        "precioUnitario": 1900000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2704-1266-COT26",
    "codigo": "2704-1266-COT26",
    "titulo": "COMPRA DE SUMINISTROS PARA IMPRESORA (S/C 3823 Y 3824)",
    "organismo": "UNIVERSIDAD DEL BIO BIO",
    "organismoRut": "38.547.801-0",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 800000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 97,
    "riesgo": "Bajo",
    "descripcion": "Proceso: COMPRA DE SUMINISTROS PARA IMPRESORA (S/C 3823 Y 3824). Organismo demandante: UNIVERSIDAD DEL BIO BIO. Unidad de compra: Universidad del Bío-Bío - Campus Concepción.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:32"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2704-1266-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2704-1266-COT26",
        "producto": "COMPRA DE SUMINISTROS PARA IMPRESORA (S/C 3823 Y 3824)",
        "cantidad": 1,
        "precioUnitario": 800000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1107276-292-COT26",
    "codigo": "1107276-292-COT26",
    "titulo": "SERVICIOS DE IMPRESIÓN E INSTALACIÓN DE ADHESIVOS EN BIOFÁBRICA",
    "organismo": "INSTITUTO DE INVESTIGACIONES AGROPECUARIAS",
    "organismoRut": "48.701.853-5",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 97,
    "riesgo": "Medio",
    "descripcion": "Proceso: SERVICIOS DE IMPRESIÓN E INSTALACIÓN DE ADHESIVOS EN BIOFÁBRICA. Organismo demandante: INSTITUTO DE INVESTIGACIONES AGROPECUARIAS. Unidad de compra: INTIHUASI.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:31"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1107276-292-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1107276-292-COT26",
        "producto": "SERVICIOS DE IMPRESIÓN E INSTALACIÓN DE ADHESIVOS EN BIOFÁBRICA",
        "cantidad": 1,
        "precioUnitario": 2500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4355-753-COT26",
    "codigo": "4355-753-COT26",
    "titulo": "TINTAS Y TONER, DIDECO",
    "organismo": "I MUNICIPALIDAD DE FREIRINA",
    "organismoRut": "68.369.422-9",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2600000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 81,
    "riesgo": "Medio",
    "descripcion": "Proceso: TINTAS Y TONER, DIDECO. Organismo demandante: I MUNICIPALIDAD DE FREIRINA. Unidad de compra: Adquisiones.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:31"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4355-753-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4355-753-COT26",
        "producto": "TINTAS Y TONER, DIDECO",
        "cantidad": 1,
        "precioUnitario": 2600000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1969-406-COT26",
    "codigo": "1969-406-COT26",
    "titulo": "PAPEL DE IMPRESIÓN PARA OFICINA ADMINISTRATIVA CDP MULCHEN",
    "organismo": "Dirección Regional de Gendarmeria - Concepcion",
    "organismoRut": "64.169.271-K",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Biobío",
    "monto": 548969,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: PAPEL DE IMPRESIÓN PARA OFICINA ADMINISTRATIVA CDP MULCHEN. Organismo demandante: Dirección Regional de Gendarmeria - Concepcion. Unidad de compra: Región del Bio Bío.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:27"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1969-406-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1969-406-COT26",
        "producto": "PAPEL DE IMPRESIÓN PARA OFICINA ADMINISTRATIVA CDP MULCHEN",
        "cantidad": 1,
        "precioUnitario": 548969
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2950-212-COT26",
    "codigo": "2950-212-COT26",
    "titulo": "ADQUISICIÓN DE MATERIALES ELECTRICOS Y ELECTRONICOS PARA CONFECCIÓN DE TRAMOYAS CADETES",
    "organismo": "ESCUELA NAVAL \"ARTURO PRAT\"",
    "organismoRut": "79.964.666-9",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 440000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICIÓN DE MATERIALES ELECTRICOS Y ELECTRONICOS PARA CONFECCIÓN DE TRAMOYAS CADETES. Organismo demandante: ESCUELA NAVAL \"ARTURO PRAT\". Unidad de compra: ESCUELA NAVAL \"ARTURO PRAT\".",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:25"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2950-212-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2950-212-COT26",
        "producto": "ADQUISICIÓN DE MATERIALES ELECTRICOS Y ELECTRONICOS PARA CONFECCIÓN DE TRAMOYAS CADETES",
        "cantidad": 1,
        "precioUnitario": 440000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2328-758-COT26",
    "codigo": "2328-758-COT26",
    "titulo": "ADQUISICIÓN DE MATERIALES DE ARTES VISUALES, ATRILES Y COTONAS - LICEO DE HOMBRES MANUEL MONTT / 23776",
    "organismo": "I MUNICIPALIDAD DE PUERTO MONTT",
    "organismoRut": "18.546.223-K",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Los Lagos",
    "monto": 1981260,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 79,
    "riesgo": "Medio",
    "descripcion": "Proceso: ADQUISICIÓN DE MATERIALES DE ARTES VISUALES, ATRILES Y COTONAS - LICEO DE HOMBRES MANUEL MONTT / 23776. Organismo demandante: I MUNICIPALIDAD DE PUERTO MONTT. Unidad de compra: Unidad de Adquisiciones Dirección de Educación.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:25"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2328-758-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2328-758-COT26",
        "producto": "ADQUISICIÓN DE MATERIALES DE ARTES VISUALES, ATRILES Y COTONAS - LICEO DE HOMBRES MANUEL MONTT / 23776",
        "cantidad": 1,
        "precioUnitario": 1981260
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3244-275-COT26",
    "codigo": "3244-275-COT26",
    "titulo": "INSUMOS DE OFICINA PARA DAEM",
    "organismo": "I MUNICIPALIDAD DE SANTO DOMINGO",
    "organismoRut": "76.227.506-4",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 300000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: INSUMOS DE OFICINA PARA DAEM. Organismo demandante: I MUNICIPALIDAD DE SANTO DOMINGO. Unidad de compra: Departamento de Educación.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:24"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3244-275-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3244-275-COT26",
        "producto": "INSUMOS DE OFICINA PARA DAEM",
        "cantidad": 1,
        "precioUnitario": 300000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3244-277-COT26",
    "codigo": "3244-277-COT26",
    "titulo": "INSUMOS Y ARTÍCULOS DE ESCRITORIO PARA MUNICIPALIDAD DE SANTO DOMINGO",
    "organismo": "I MUNICIPALIDAD DE SANTO DOMINGO",
    "organismoRut": "76.227.506-4",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Valparaíso",
    "monto": 1750000,
    "fechaPublicacion": "2026-07-20",
    "fechaCierre": "2026-07-25",
    "matchScore": 88,
    "riesgo": "Bajo",
    "descripcion": "Proceso: INSUMOS Y ARTÍCULOS DE ESCRITORIO PARA MUNICIPALIDAD DE SANTO DOMINGO. Organismo demandante: I MUNICIPALIDAD DE SANTO DOMINGO. Unidad de compra: Departamento de Administración y Finanzas.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "20/07/2026 10:00"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "25/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3244-277-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.4 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3244-277-01",
        "producto": "Resma Papel Fotocopia Carta 75g (Caja de 5 Resmas)",
        "especificacionTecnica": "Papel multipropósito 75g/m², blancura 98% ISO, apto para fotocopia e impresión láser.",
        "unidadMedida": "Caja x 5 Resmas",
        "cantidad": 30,
        "precioUnitario": 22500,
        "precioMercadoReferencial": 19800
      },
      {
        "sku": "CA-ITEM-3244-277-02",
        "producto": "Archivador Jaspeado Tamaño Oficio Lomo Ancho (Caja 50 unidades)",
        "especificacionTecnica": "Mecanismo niquelado de palanca con raddo, lomo 8 cm, cartón prensado con lomo reforzado.",
        "unidadMedida": "Caja x 50 un",
        "cantidad": 4,
        "precioUnitario": 95000,
        "precioMercadoReferencial": 84000
      },
      {
        "sku": "CA-ITEM-3244-277-03",
        "producto": "Caja Lápiz Pasta Azul/Negro Punta Fina 0.7mm (Caja 50 unidades)",
        "especificacionTecnica": "Tinta gel/secado rápido, cuerpo transparente con tapa ventilada antitragamiento.",
        "unidadMedida": "Caja x 50 un",
        "cantidad": 15,
        "precioUnitario": 18000,
        "precioMercadoReferencial": 15500
      },
      {
        "sku": "CA-ITEM-3244-277-04",
        "producto": "Tóner Negro Alta Capacidad Compatible HP 85A / 83A",
        "especificacionTecnica": "Rendimiento 1.600 páginas al 5% cobertura, certificación de calidad ISO 9001 / STMC.",
        "unidadMedida": "Unidad",
        "cantidad": 15,
        "precioUnitario": 28333,
        "precioMercadoReferencial": 24900
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Dimeiggs Distribuidora",
        "rut": "93.123.500-1",
        "cuotaMercado": 25,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2450-653-COT26",
    "codigo": "2450-653-COT26",
    "titulo": "ADQUISICIÓN DE MATERIALES DE OFICINA. I. MUNICIPALIDAD DE LA SERENA",
    "organismo": "I MUNICIPALIDAD DE LA SERENA",
    "organismoRut": "47.371.307-2",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Coquimbo",
    "monto": 849999,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICIÓN DE MATERIALES DE OFICINA. I. MUNICIPALIDAD DE LA SERENA. Organismo demandante: I MUNICIPALIDAD DE LA SERENA. Unidad de compra: DEPARTAMENTO DE ADQUISICIONES.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:24"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2450-653-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2450-653-COT26",
        "producto": "ADQUISICIÓN DE MATERIALES DE OFICINA. I. MUNICIPALIDAD DE LA SERENA",
        "cantidad": 1,
        "precioUnitario": 849999
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1106245-118-COT26",
    "codigo": "1106245-118-COT26",
    "titulo": "PENDONES",
    "organismo": "CENTRO DE FORMACION TECNICA DE LA REGION METROPOLITANA DE SANTIAGO",
    "organismoRut": "52.670.881-5",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 120000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: PENDONES. Organismo demandante: CENTRO DE FORMACION TECNICA DE LA REGION METROPOLITANA DE SANTIAGO. Unidad de compra: CENTRO DE FORMACION TECNICA DE LA REGION METROPOLI.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:23"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1106245-118-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1106245-118-COT26",
        "producto": "PENDONES",
        "cantidad": 1,
        "precioUnitario": 120000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1347870-126-COT26",
    "codigo": "1347870-126-COT26",
    "titulo": "ADQUISICION  POR CONVENIO CECOSF RENE GARCIA VALENZUELA CON RES. EX. 1678, MEMO 476",
    "organismo": "I MUNICIPALIDAD DE ARICA",
    "organismoRut": "96.297.150-5",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Arica y Parinacota",
    "monto": 188780,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-19",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICION  POR CONVENIO CECOSF RENE GARCIA VALENZUELA CON RES. EX. 1678, MEMO 476. Organismo demandante: I MUNICIPALIDAD DE ARICA. Unidad de compra: Servicio Municipal de Salud - Convenios.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:22"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "19/07/2026 20:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1347870-126-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1347870-126-COT26",
        "producto": "ADQUISICION  POR CONVENIO CECOSF RENE GARCIA VALENZUELA CON RES. EX. 1678, MEMO 476",
        "cantidad": 1,
        "precioUnitario": 188780
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "557974-299-COT26",
    "codigo": "557974-299-COT26",
    "titulo": "bolsas tnt y libretas ecológicas impresas para prog. adultos mayores.",
    "organismo": "CORPORACION MUNICIPAL DE EDUCACION,SALUD,CULTURA Y ATENCION AL MENOR,",
    "organismoRut": "64.810.178-1",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 3750000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 77,
    "riesgo": "Medio",
    "descripcion": "Proceso: bolsas tnt y libretas ecológicas impresas para prog. adultos mayores.. Organismo demandante: CORPORACION MUNICIPAL DE EDUCACION,SALUD,CULTURA Y ATENCION AL MENOR,. Unidad de compra: ÁREA DE SALUD.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:22"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_557974-299-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-557974-299-COT26",
        "producto": "bolsas tnt y libretas ecológicas impresas para prog. adultos mayores.",
        "cantidad": 1,
        "precioUnitario": 3750000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1346283-169-COT26",
    "codigo": "1346283-169-COT26",
    "titulo": "MATERIALES DE ASEO PARA DEPENDENCIAS DEL CENTRO, IP-IRC DE COPIAPÓ.",
    "organismo": "SERVICIO NACIONAL DE REINSERCION SOCIAL JUVENIL",
    "organismoRut": "99.928.483-K",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Medio",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 2700000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 96,
    "riesgo": "Medio",
    "descripcion": "Proceso: MATERIALES DE ASEO PARA DEPENDENCIAS DEL CENTRO, IP-IRC DE COPIAPÓ.. Organismo demandante: SERVICIO NACIONAL DE REINSERCION SOCIAL JUVENIL. Unidad de compra: DIRECCIÓN REGIONAL DE ATACAMA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:22"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 13:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1346283-169-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1346283-169-COT26",
        "producto": "MATERIALES DE ASEO PARA DEPENDENCIAS DEL CENTRO, IP-IRC DE COPIAPÓ.",
        "cantidad": 1,
        "precioUnitario": 2700000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2756-115-COT26",
    "codigo": "2756-115-COT26",
    "titulo": "Adquisicion Pizarras Interactivas Escuela Cerro Placilla y Escuela Poeta Pablo Neruda",
    "organismo": "I MUNICIPALIDAD DE SAN ANTONIO",
    "organismoRut": "78.733.524-9",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Valparaíso",
    "monto": 1850000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 97,
    "riesgo": "Medio",
    "descripcion": "Proceso: Adquisicion Pizarras Interactivas Escuela Cerro Placilla y Escuela Poeta Pablo Neruda. Organismo demandante: I MUNICIPALIDAD DE SAN ANTONIO. Unidad de compra: DEM.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:21"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2756-115-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2756-115-COT26",
        "producto": "Adquisicion Pizarras Interactivas Escuela Cerro Placilla y Escuela Poeta Pablo Neruda",
        "cantidad": 1,
        "precioUnitario": 7000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1078886-62-COT26",
    "codigo": "1078886-62-COT26",
    "titulo": "rollos folio 12",
    "organismo": "SERVICIO DE SALUD VALPARAISO SAN ANTONIO",
    "organismoRut": "32.680.808-0",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Valparaíso",
    "monto": 500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: rollos folio 12. Organismo demandante: SERVICIO DE SALUD VALPARAISO SAN ANTONIO. Unidad de compra: ATENCION PRIMARIA DIRECCION.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:21"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1078886-62-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1078886-62-COT26",
        "producto": "rollos folio 12",
        "cantidad": 1,
        "precioUnitario": 500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "707426-91-COT26",
    "codigo": "707426-91-COT26",
    "titulo": "Insumos de aseo JJ.II Fundación Integra, Región de Aysén",
    "organismo": "FUNDACION EDUCACIONAL PARA EL DESAROLLO INTEGRAL DE LA NIÑEZ",
    "organismoRut": "81.436.996-K",
    "organismoPagoDias": 44,
    "organismoRiesgo": "Medio",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 2450000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 86,
    "riesgo": "Medio",
    "descripcion": "Proceso: Insumos de aseo JJ.II Fundación Integra, Región de Aysén. Organismo demandante: FUNDACION EDUCACIONAL PARA EL DESAROLLO INTEGRAL DE LA NIÑEZ. Unidad de compra: Regional Aysen.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:21"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 14:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_707426-91-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-707426-91-COT26",
        "producto": "Insumos de aseo JJ.II Fundación Integra, Región de Aysén",
        "cantidad": 1,
        "precioUnitario": 4600000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "889473-1291-COT26",
    "codigo": "889473-1291-COT26",
    "titulo": "SC 8202 - Repuestos",
    "organismo": "UNIVERSIDAD DE O'HIGGINS",
    "organismoRut": "17.257.688-K",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "O'Higgins",
    "monto": 385001,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: SC 8202 - Repuestos. Organismo demandante: UNIVERSIDAD DE O'HIGGINS. Unidad de compra: UNIVERSIDAD DE O'HIGGINS.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:20"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_889473-1291-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-889473-1291-COT26",
        "producto": "SC 8202 - Repuestos",
        "cantidad": 1,
        "precioUnitario": 385001
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1057062-326-COT26",
    "codigo": "1057062-326-COT26",
    "titulo": "Adquisición de material promocional para difusión de la oferta académica de la universidad según FISABS 1924_URY25991",
    "organismo": "UNIVERSIDAD DE AYSEN",
    "organismoRut": "91.059.833-5",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Aysén",
    "monto": 3370000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-23",
    "matchScore": 98,
    "riesgo": "Medio",
    "descripcion": "Proceso: Adquisición de material promocional para difusión de la oferta académica de la universidad según FISABS 1924_URY25991. Organismo demandante: UNIVERSIDAD DE AYSEN. Unidad de compra: Proyectos.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:17"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "23/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1057062-326-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1057062-326-COT26",
        "producto": "Adquisición de material promocional para difusión de la oferta académica de la universidad según FISABS 1924_URY25991",
        "cantidad": 1,
        "precioUnitario": 5520000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1126922-530-COT26",
    "codigo": "1126922-530-COT26",
    "titulo": "RBDS JUNJI PG02 ADQUISICION DE MATERIALES DE ASEO PARA JARDINES INFANTILES",
    "organismo": "SERVICIO LOCAL DE EDUCACION PUBLICA DE LLANQUIHUE",
    "organismoRut": "35.448.336-3",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Medio",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 2904754,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 76,
    "riesgo": "Medio",
    "descripcion": "Proceso: RBDS JUNJI PG02 ADQUISICION DE MATERIALES DE ASEO PARA JARDINES INFANTILES. Organismo demandante: SERVICIO LOCAL DE EDUCACION PUBLICA DE LLANQUIHUE. Unidad de compra: SERVICIO LOCAL DE EDUCACION PUBLICA DE LLANQUIHUE.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:15"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1126922-530-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1126922-530-COT26",
        "producto": "RBDS JUNJI PG02 ADQUISICION DE MATERIALES DE ASEO PARA JARDINES INFANTILES",
        "cantidad": 1,
        "precioUnitario": 2904754
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "418-1038-COT26",
    "codigo": "418-1038-COT26",
    "titulo": "CRA-ESCRITORIO-RESMA TAMAÑO OFICIO - CARTA",
    "organismo": "SERVICIO NACIONAL DE SALUD HOSPITAL DE PUERTO AYSEN",
    "organismoRut": "86.186.665-0",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Aysén",
    "monto": 850000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-22",
    "matchScore": 75,
    "riesgo": "Medio",
    "descripcion": "Proceso: CRA-ESCRITORIO-RESMA TAMAÑO OFICIO - CARTA. Organismo demandante: SERVICIO NACIONAL DE SALUD HOSPITAL DE PUERTO AYSEN. Unidad de compra: H Puerto Aysén.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:11"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "22/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_418-1038-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-418-1038-COT26",
        "producto": "CRA-ESCRITORIO-RESMA TAMAÑO OFICIO - CARTA",
        "cantidad": 1,
        "precioUnitario": 6000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1627-353-COT26",
    "codigo": "1627-353-COT26",
    "titulo": "ARTICULOS DE LIBRERIA Y ESCRITORIO",
    "organismo": "SERVICIO DE SALUD HOSPITAL DE SAN FERNANDO",
    "organismoRut": "64.450.668-4",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "O'Higgins",
    "monto": 500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ARTICULOS DE LIBRERIA Y ESCRITORIO. Organismo demandante: SERVICIO DE SALUD HOSPITAL DE SAN FERNANDO. Unidad de compra: Hospital de San Fernando Abastecimiento.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:10"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1627-353-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1627-353-COT26",
        "producto": "ARTICULOS DE LIBRERIA Y ESCRITORIO",
        "cantidad": 1,
        "precioUnitario": 500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3962-243-COT26",
    "codigo": "3962-243-COT26",
    "titulo": "COMPRA DE MATERIALES PARA SER UTILIZADOS EN CENTRO DE EVENTOS",
    "organismo": "I MUNICIPALIDAD DE SANTA BARBARA",
    "organismoRut": "24.334.934-3",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2261800,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Medio",
    "descripcion": "Proceso: COMPRA DE MATERIALES PARA SER UTILIZADOS EN CENTRO DE EVENTOS. Organismo demandante: I MUNICIPALIDAD DE SANTA BARBARA. Unidad de compra: Municipalidad de Santa Barbara.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:10"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3962-243-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3962-243-COT26",
        "producto": "COMPRA DE MATERIALES PARA SER UTILIZADOS EN CENTRO DE EVENTOS",
        "cantidad": 1,
        "precioUnitario": 2261800
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1018-30-COT26",
    "codigo": "1018-30-COT26",
    "titulo": "Adquisición de cajas archivo Mega Box",
    "organismo": "MINISTERIO DE OBRAS PUBLICAS DIREC CION GRAL DE OO PP DCYF",
    "organismoRut": "84.780.005-9",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de cajas archivo Mega Box. Organismo demandante: MINISTERIO DE OBRAS PUBLICAS DIREC CION GRAL DE OO PP DCYF. Unidad de compra: Dirección de Arquitectura - MOP.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:08"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1018-30-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1018-30-COT26",
        "producto": "Adquisición de cajas archivo Mega Box",
        "cantidad": 1,
        "precioUnitario": 500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1106245-115-COT26",
    "codigo": "1106245-115-COT26",
    "titulo": "Artículos de escritorio CENSE",
    "organismo": "CENTRO DE FORMACION TECNICA DE LA REGION METROPOLITANA DE SANTIAGO",
    "organismoRut": "52.670.881-5",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 364710,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Artículos de escritorio CENSE. Organismo demandante: CENTRO DE FORMACION TECNICA DE LA REGION METROPOLITANA DE SANTIAGO. Unidad de compra: CENTRO DE FORMACION TECNICA DE LA REGION METROPOLI.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:04"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1106245-115-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1106245-115-COT26",
        "producto": "Artículos de escritorio CENSE",
        "cantidad": 1,
        "precioUnitario": 364710
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1528-118-COT26",
    "codigo": "1528-118-COT26",
    "titulo": "TONER Y TAMBOR IMPRESORA RICOH",
    "organismo": "DELEGACIÓN PRESIDENCIAL PROVINCIAL DE QUILLOTA",
    "organismoRut": "15.062.427-9",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Valparaíso",
    "monto": 180000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: TONER Y TAMBOR IMPRESORA RICOH. Organismo demandante: DELEGACIÓN PRESIDENCIAL PROVINCIAL DE QUILLOTA. Unidad de compra: DELEGACIÓN PRESIDENCIAL PROVINCIAL DE QUILLOTA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:02"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1528-118-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1528-118-COT26",
        "producto": "TONER Y TAMBOR IMPRESORA RICOH",
        "cantidad": 1,
        "precioUnitario": 180000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3355-234-COT26",
    "codigo": "3355-234-COT26",
    "titulo": "INSUMOS PARA PELUQUERÍA",
    "organismo": "Ejercito de Chile",
    "organismoRut": "90.520.203-8",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 180000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: INSUMOS PARA PELUQUERÍA. Organismo demandante: Ejercito de Chile. Unidad de compra: Destacamento Montaña Nº 17 Los Ángeles-DESMÑA N°17.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:01"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3355-234-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3355-234-COT26",
        "producto": "INSUMOS PARA PELUQUERÍA",
        "cantidad": 1,
        "precioUnitario": 50000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1078886-61-COT26",
    "codigo": "1078886-61-COT26",
    "titulo": "placa de acreditación  folio 1",
    "organismo": "SERVICIO DE SALUD VALPARAISO SAN ANTONIO",
    "organismoRut": "32.680.808-0",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Valparaíso",
    "monto": 180000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: placa de acreditación  folio 1. Organismo demandante: SERVICIO DE SALUD VALPARAISO SAN ANTONIO. Unidad de compra: ATENCION PRIMARIA DIRECCION.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:01"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1078886-61-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1078886-61-COT26",
        "producto": "placa de acreditación  folio 1",
        "cantidad": 1,
        "precioUnitario": 180000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1471-41-COT26",
    "codigo": "1471-41-COT26",
    "titulo": "Adquisición de resmas papel recicladas, pilas y paños Limpieza",
    "organismo": "DIRECCION GENERAL DE AERONAUTICA CIVIL",
    "organismoRut": "73.986.864-7",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 510000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-24",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de resmas papel recicladas, pilas y paños Limpieza. Organismo demandante: DIRECCION GENERAL DE AERONAUTICA CIVIL. Unidad de compra: UNIDAD DE COMPRA LA SERENA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 15:00"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "24/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1471-41-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1471-41-COT26",
        "producto": "Adquisición de resmas papel recicladas, pilas y paños Limpieza",
        "cantidad": 1,
        "precioUnitario": 510000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1211931-5-COT26",
    "codigo": "1211931-5-COT26",
    "titulo": "WRC/THO-1384-Adquisición de material didáctico para fortalecer proceso de enseñanza del Jardín infantil y Sala cuna VTF Mis Primeros Pasitos de la comuna de Angol, con cargo a Subvención JUNJI 2026",
    "organismo": "I MUNICIPALIDAD DE ANGOL",
    "organismoRut": "96.176.447-5",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "La Araucanía",
    "monto": 1900000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 76,
    "riesgo": "Medio",
    "descripcion": "Proceso: WRC/THO-1384-Adquisición de material didáctico para fortalecer proceso de enseñanza del Jardín infantil y Sala cuna VTF Mis Primeros Pasitos de la comuna de Angol, con cargo a Subvención JUNJI 2026. Organismo demandante: I MUNICIPALIDAD DE ANGOL. Unidad de compra: Jardín Mis primeros Pasitos.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:57"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1211931-5-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1211931-5-COT26",
        "producto": "WRC/THO-1384-Adquisición de material didáctico para fortalecer proceso de enseñanza del Jardín infantil y Sala cuna VTF Mis Primeros Pasitos de la comuna de Angol, con cargo a Subvención JUNJI 2026",
        "cantidad": 1,
        "precioUnitario": 1900000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3412-111-COT26",
    "codigo": "3412-111-COT26",
    "titulo": "ARTICULOS ELECTRICOS CASINO DE OFICIALES",
    "organismo": "Ejercito de Chile",
    "organismoRut": "90.520.203-8",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 360000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ARTICULOS ELECTRICOS CASINO DE OFICIALES. Organismo demandante: Ejercito de Chile. Unidad de compra: Destacamento Acorazado Nº 5 Lanceros - DESACO 5.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:56"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3412-111-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3412-111-COT26",
        "producto": "ARTICULOS ELECTRICOS CASINO DE OFICIALES",
        "cantidad": 1,
        "precioUnitario": 360000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1467968-36-COT26",
    "codigo": "1467968-36-COT26",
    "titulo": "Adquisición de Materiales de Escritorio para la Corporación Cultural de San Pedro de la Paz",
    "organismo": "CORPORACION CULTURAL DE SAN PEDRO DE LA PAZ",
    "organismoRut": "88.308.991-7",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 400000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de Materiales de Escritorio para la Corporación Cultural de San Pedro de la Paz. Organismo demandante: CORPORACION CULTURAL DE SAN PEDRO DE LA PAZ. Unidad de compra: CORPORACION CULTURAL DE SAN PEDRO DE LA PAZ.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:55"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1467968-36-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1467968-36-COT26",
        "producto": "Adquisición de Materiales de Escritorio para la Corporación Cultural de San Pedro de la Paz",
        "cantidad": 1,
        "precioUnitario": 400000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3962-242-COT26",
    "codigo": "3962-242-COT26",
    "titulo": "COMPRA DE MATERIALES PARA REPARACIONES DEPENDENCIAS MUNICIPALES",
    "organismo": "I MUNICIPALIDAD DE SANTA BARBARA",
    "organismoRut": "24.334.934-3",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 3350000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Medio",
    "descripcion": "Proceso: COMPRA DE MATERIALES PARA REPARACIONES DEPENDENCIAS MUNICIPALES. Organismo demandante: I MUNICIPALIDAD DE SANTA BARBARA. Unidad de compra: Municipalidad de Santa Barbara.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:55"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3962-242-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3962-242-COT26",
        "producto": "COMPRA DE MATERIALES PARA REPARACIONES DEPENDENCIAS MUNICIPALES",
        "cantidad": 1,
        "precioUnitario": 5500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "788110-132-COT26",
    "codigo": "788110-132-COT26",
    "titulo": "ARTÍCULOS DE ESCRITORIO PARA EL PROGRAMA MÁS ADULTOS MAYORES AUTOVALENTES DE LA DIRECCIÓN DE SALUD MUNICIPAL",
    "organismo": "I MUNICIPALIDAD DE SAN VICENTE",
    "organismoRut": "52.331.154-4",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 350000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ARTÍCULOS DE ESCRITORIO PARA EL PROGRAMA MÁS ADULTOS MAYORES AUTOVALENTES DE LA DIRECCIÓN DE SALUD MUNICIPAL. Organismo demandante: I MUNICIPALIDAD DE SAN VICENTE. Unidad de compra: Departamento de Salud.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:52"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_788110-132-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-788110-132-COT26",
        "producto": "ARTÍCULOS DE ESCRITORIO PARA EL PROGRAMA MÁS ADULTOS MAYORES AUTOVALENTES DE LA DIRECCIÓN DE SALUD MUNICIPAL",
        "cantidad": 1,
        "precioUnitario": 350000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1347870-125-COT26",
    "codigo": "1347870-125-COT26",
    "titulo": "ADQUISICION MOBILIARIO POR CONVENIO CECOSF RENE GARCIA VALENZUELA CON RES. EX. 1678, MEMO 480",
    "organismo": "I MUNICIPALIDAD DE ARICA",
    "organismoRut": "96.297.150-5",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Arica y Parinacota",
    "monto": 737670,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-19",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICION MOBILIARIO POR CONVENIO CECOSF RENE GARCIA VALENZUELA CON RES. EX. 1678, MEMO 480. Organismo demandante: I MUNICIPALIDAD DE ARICA. Unidad de compra: Servicio Municipal de Salud - Convenios.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:51"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "19/07/2026 20:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1347870-125-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1347870-125-COT26",
        "producto": "ADQUISICION MOBILIARIO POR CONVENIO CECOSF RENE GARCIA VALENZUELA CON RES. EX. 1678, MEMO 480",
        "cantidad": 1,
        "precioUnitario": 737670
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1079580-198-COT26",
    "codigo": "1079580-198-COT26",
    "titulo": "ADQUISICIÓN DE MATERIALES DE CONSTRUCCIÓN PARA MANTENCIÓN Y REPARACIÓN DE SECCIÓN LABOCAR ÑUBLE",
    "organismo": "SECCIÓN COMPRAS XVI ZONA",
    "organismoRut": "57.912.138-9",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1905663,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Medio",
    "descripcion": "Proceso: ADQUISICIÓN DE MATERIALES DE CONSTRUCCIÓN PARA MANTENCIÓN Y REPARACIÓN DE SECCIÓN LABOCAR ÑUBLE. Organismo demandante: SECCIÓN COMPRAS XVI ZONA. Unidad de compra: SECCIÓN COMPRAS ZONA DE CARABINEROS ÑUBLE.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:50"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1079580-198-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1079580-198-COT26",
        "producto": "ADQUISICIÓN DE MATERIALES DE CONSTRUCCIÓN PARA MANTENCIÓN Y REPARACIÓN DE SECCIÓN LABOCAR ÑUBLE",
        "cantidad": 1,
        "precioUnitario": 4055663
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3047-214-COT26",
    "codigo": "3047-214-COT26",
    "titulo": "BOLSAS PLASTICAS",
    "organismo": "Academia Politécnica Naval",
    "organismoRut": "37.059.806-2",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 300150,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: BOLSAS PLASTICAS. Organismo demandante: Academia Politécnica Naval. Unidad de compra: ACADEMIA POLITECNICA NAVAL.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:49"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3047-214-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3047-214-COT26",
        "producto": "BOLSAS PLASTICAS",
        "cantidad": 1,
        "precioUnitario": 300150
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2294-1359-COT26",
    "codigo": "2294-1359-COT26",
    "titulo": "IMPLEMENTOS SALA SENSORIAL ESCUELA ESPAÑA",
    "organismo": "I MUNICIPALIDAD DE TALCA",
    "organismoRut": "23.340.485-6",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Maule",
    "monto": 1126000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 97,
    "riesgo": "Bajo",
    "descripcion": "Proceso: IMPLEMENTOS SALA SENSORIAL ESCUELA ESPAÑA. Organismo demandante: I MUNICIPALIDAD DE TALCA. Unidad de compra: DEPT. EDUCACION COMUNAL.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:49"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:46"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2294-1359-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2294-1359-COT26",
        "producto": "IMPLEMENTOS SALA SENSORIAL ESCUELA ESPAÑA",
        "cantidad": 1,
        "precioUnitario": 1126000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4591-6-COT26",
    "codigo": "4591-6-COT26",
    "titulo": "Tachas para la seguridad Vial en caminos de la Provincia de Colchagua",
    "organismo": "MINISTERIO DE OBRAS PUBLICAS DIREC CION GRAL DE OO PP DCYF",
    "organismoRut": "84.780.005-9",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1850000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 80,
    "riesgo": "Medio",
    "descripcion": "Proceso: Tachas para la seguridad Vial en caminos de la Provincia de Colchagua. Organismo demandante: MINISTERIO DE OBRAS PUBLICAS DIREC CION GRAL DE OO PP DCYF. Unidad de compra: Dirección de Vialidad - VI Región - Provincia Colchagua.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:47"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4591-6-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4591-6-COT26",
        "producto": "Tachas para la seguridad Vial en caminos de la Provincia de Colchagua",
        "cantidad": 1,
        "precioUnitario": 7000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1346283-168-COT26",
    "codigo": "1346283-168-COT26",
    "titulo": "INSUMOS DE LAVANDERÍA PARA EL CENTRO, IP-IRC DE COPIAPÓ",
    "organismo": "SERVICIO NACIONAL DE REINSERCION SOCIAL JUVENIL",
    "organismoRut": "99.928.483-K",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1400000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: INSUMOS DE LAVANDERÍA PARA EL CENTRO, IP-IRC DE COPIAPÓ. Organismo demandante: SERVICIO NACIONAL DE REINSERCION SOCIAL JUVENIL. Unidad de compra: DIRECCIÓN REGIONAL DE ATACAMA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:46"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1346283-168-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1346283-168-COT26",
        "producto": "INSUMOS DE LAVANDERÍA PARA EL CENTRO, IP-IRC DE COPIAPÓ",
        "cantidad": 1,
        "precioUnitario": 1400000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1057498-1848-COT26",
    "codigo": "1057498-1848-COT26",
    "titulo": "LN ARTICULOS OFICINA",
    "organismo": "SERVICIO DE SALUD SUR HOSPITAL SANATORIO EL PINO",
    "organismoRut": "26.998.623-6",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: LN ARTICULOS OFICINA. Organismo demandante: SERVICIO DE SALUD SUR HOSPITAL SANATORIO EL PINO. Unidad de compra: Bienes y Servicios.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:45"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1057498-1848-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1057498-1848-COT26",
        "producto": "LN ARTICULOS OFICINA",
        "cantidad": 1,
        "precioUnitario": 1500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2440-1044-COT26",
    "codigo": "2440-1044-COT26",
    "titulo": "MATERIALES DE FERRETERÍA   ESCUELA REPÚBLICA ARGENTINA DE CURICÓ",
    "organismo": "I MUNICIPALIDAD DE CURICO",
    "organismoRut": "13.242.707-8",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Maule",
    "monto": 750000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 97,
    "riesgo": "Bajo",
    "descripcion": "Proceso: MATERIALES DE FERRETERÍA   ESCUELA REPÚBLICA ARGENTINA DE CURICÓ. Organismo demandante: I MUNICIPALIDAD DE CURICO. Unidad de compra: Municipalidad de Curicó - Educación - Adquisiciones.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:45"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2440-1044-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2440-1044-COT26",
        "producto": "MATERIALES DE FERRETERÍA   ESCUELA REPÚBLICA ARGENTINA DE CURICÓ",
        "cantidad": 1,
        "precioUnitario": 750000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "892563-42-COT26",
    "codigo": "892563-42-COT26",
    "titulo": "TERMOLAMINADORA/PLASTIFICADORA, PARA EL PROGRAMA SALUD MENTAL Y DESAM",
    "organismo": "I MUNICIPALIDAD DE PALENA",
    "organismoRut": "19.716.427-0",
    "organismoPagoDias": 40,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 100000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 82,
    "riesgo": "Bajo",
    "descripcion": "Proceso: TERMOLAMINADORA/PLASTIFICADORA, PARA EL PROGRAMA SALUD MENTAL Y DESAM. Organismo demandante: I MUNICIPALIDAD DE PALENA. Unidad de compra: DEPTO. SALUD.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:45"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_892563-42-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-892563-42-COT26",
        "producto": "TERMOLAMINADORA/PLASTIFICADORA, PARA EL PROGRAMA SALUD MENTAL Y DESAM",
        "cantidad": 1,
        "precioUnitario": 100000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3046-271-COT26",
    "codigo": "3046-271-COT26",
    "titulo": "DL-30 CA MANTENIMIENTO MASTIL BANDERA BICENTENARIO",
    "organismo": "IIIª Brigada Aérea",
    "organismoRut": "52.848.457-5",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2000000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Medio",
    "descripcion": "Proceso: DL-30 CA MANTENIMIENTO MASTIL BANDERA BICENTENARIO. Organismo demandante: IIIª Brigada Aérea. Unidad de compra: IIIª Brigada Aérea.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:44"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3046-271-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3046-271-COT26",
        "producto": "DL-30 CA MANTENIMIENTO MASTIL BANDERA BICENTENARIO",
        "cantidad": 1,
        "precioUnitario": 2000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2371-272-COT26",
    "codigo": "2371-272-COT26",
    "titulo": "S/P 353, EXPEDIENTE 11384, UNIDAD DE PREVENCIÓN, ADQUISICION DE CAJAS ORGANIZADORAS",
    "organismo": "ILUSTRE MUNICIPALIDAD DE CERRO NAVIA",
    "organismoRut": "75.254.893-8",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 380000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: S/P 353, EXPEDIENTE 11384, UNIDAD DE PREVENCIÓN, ADQUISICION DE CAJAS ORGANIZADORAS. Organismo demandante: ILUSTRE MUNICIPALIDAD DE CERRO NAVIA. Unidad de compra: DEPARTAMENTO DE ADQUISICIONES.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:44"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 21:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2371-272-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2371-272-COT26",
        "producto": "S/P 353, EXPEDIENTE 11384, UNIDAD DE PREVENCIÓN, ADQUISICION DE CAJAS ORGANIZADORAS",
        "cantidad": 1,
        "precioUnitario": 55000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1220203-29-COT26",
    "codigo": "1220203-29-COT26",
    "titulo": "Adquisición de materiales de aseo para el Museo Regional de Antofagast",
    "organismo": "DIRECCION REGIONAL DE ANTOFAGASTA",
    "organismoRut": "82.151.061-2",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Antofagasta",
    "monto": 600000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-21",
    "matchScore": 97,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de materiales de aseo para el Museo Regional de Antofagast. Organismo demandante: DIRECCION REGIONAL DE ANTOFAGASTA. Unidad de compra: DIRECCION REGIONAL DE ANTOFAGASTA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:42"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "21/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1220203-29-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1220203-29-COT26",
        "producto": "Adquisición de materiales de aseo para el Museo Regional de Antofagast",
        "cantidad": 1,
        "precioUnitario": 600000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1077908-69-COT26",
    "codigo": "1077908-69-COT26",
    "titulo": "COMPRA DE ARTICULOS DE OFICINA PARA EL C.O.N. NO DISPONIBLES EN CM",
    "organismo": "CENTRO ONCOLOGICO DEL NORTE",
    "organismoRut": "43.425.852-8",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2350000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 77,
    "riesgo": "Medio",
    "descripcion": "Proceso: COMPRA DE ARTICULOS DE OFICINA PARA EL C.O.N. NO DISPONIBLES EN CM. Organismo demandante: CENTRO ONCOLOGICO DEL NORTE. Unidad de compra: Bienes y Servicios.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:41"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1077908-69-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1077908-69-COT26",
        "producto": "COMPRA DE ARTICULOS DE OFICINA PARA EL C.O.N. NO DISPONIBLES EN CM",
        "cantidad": 1,
        "precioUnitario": 4500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2294-1356-COT26",
    "codigo": "2294-1356-COT26",
    "titulo": "MATERIAL DIDACTICO SENSORIAL ESCUELA ESPAÑA",
    "organismo": "I MUNICIPALIDAD DE TALCA",
    "organismoRut": "23.340.485-6",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Maule",
    "monto": 445000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 97,
    "riesgo": "Bajo",
    "descripcion": "Proceso: MATERIAL DIDACTICO SENSORIAL ESCUELA ESPAÑA. Organismo demandante: I MUNICIPALIDAD DE TALCA. Unidad de compra: DEPT. EDUCACION COMUNAL.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:40"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:46"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2294-1356-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2294-1356-COT26",
        "producto": "MATERIAL DIDACTICO SENSORIAL ESCUELA ESPAÑA",
        "cantidad": 1,
        "precioUnitario": 445000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3540-197-COT26",
    "codigo": "3540-197-COT26",
    "titulo": "Baterias de 150 amp y 66 amp (P. 2125-2119)",
    "organismo": "Ejercito de Chile",
    "organismoRut": "90.520.203-8",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 840000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Baterias de 150 amp y 66 amp (P. 2125-2119). Organismo demandante: Ejercito de Chile. Unidad de compra: Cuerpo Militar del Trabajo Subjefatura Zonal Coyhaique.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:37"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 21:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3540-197-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3540-197-COT26",
        "producto": "Baterias de 150 amp y 66 amp (P. 2125-2119)",
        "cantidad": 1,
        "precioUnitario": 840000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2320-103-COT26",
    "codigo": "2320-103-COT26",
    "titulo": "ADQUISICIÓN RODILLERAS Y CAMISETAS DEPORTIVAS",
    "organismo": "I MUNICIPALIDAD DE SAN JAVIER",
    "organismoRut": "15.422.833-8",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1050000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 97,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICIÓN RODILLERAS Y CAMISETAS DEPORTIVAS. Organismo demandante: I MUNICIPALIDAD DE SAN JAVIER. Unidad de compra: ADQUISICIONES SALUD MUNICIPAL.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:35"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2320-103-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2320-103-COT26",
        "producto": "ADQUISICIÓN RODILLERAS Y CAMISETAS DEPORTIVAS",
        "cantidad": 1,
        "precioUnitario": 1050000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1079445-456-COT26",
    "codigo": "1079445-456-COT26",
    "titulo": "ADQ. DE ARTICULOS DE OFICINA PARA LA ZONA MAGALLANES Y ANTARTICA CHILENA",
    "organismo": "SECCIÓN COMPRAS XII ZONA",
    "organismoRut": "60.558.103-4",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 168120,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQ. DE ARTICULOS DE OFICINA PARA LA ZONA MAGALLANES Y ANTARTICA CHILENA. Organismo demandante: SECCIÓN COMPRAS XII ZONA. Unidad de compra: SECC DE COM ZONA MAGALLANES Y ANTARTICA CHILENA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:35"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1079445-456-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1079445-456-COT26",
        "producto": "ADQ. DE ARTICULOS DE OFICINA PARA LA ZONA MAGALLANES Y ANTARTICA CHILENA",
        "cantidad": 1,
        "precioUnitario": 168120
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "648752-33-COT26",
    "codigo": "648752-33-COT26",
    "titulo": "MATERIALES DE OFICINA DE LA JESAM",
    "organismo": "Ejercito de Chile",
    "organismoRut": "90.520.203-8",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 633742,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-21",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: MATERIALES DE OFICINA DE LA JESAM. Organismo demandante: Ejercito de Chile. Unidad de compra: Jefatura de Sanidad Militar - JESAM.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:30"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "21/07/2026 21:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_648752-33-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-648752-33-COT26",
        "producto": "MATERIALES DE OFICINA DE LA JESAM",
        "cantidad": 1,
        "precioUnitario": 633742
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1035685-181-COT26",
    "codigo": "1035685-181-COT26",
    "titulo": "BOLSAS, CUADERNILLOS Y LÁPICES",
    "organismo": "CENTRO DE FORMACION TECNICA ESTATAL DE LA REGION DE LOS RIOS",
    "organismoRut": "67.568.125-8",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Los Ríos",
    "monto": 400000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: BOLSAS, CUADERNILLOS Y LÁPICES. Organismo demandante: CENTRO DE FORMACION TECNICA ESTATAL DE LA REGION DE LOS RIOS. Unidad de compra: Dirección económica y administrativa..",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:30"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1035685-181-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1035685-181-COT26",
        "producto": "BOLSAS, CUADERNILLOS Y LÁPICES",
        "cantidad": 1,
        "precioUnitario": 400000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1220203-28-COT26",
    "codigo": "1220203-28-COT26",
    "titulo": "Adquisición de materiales de oficina para el Museo Regional de Antofagasta",
    "organismo": "DIRECCION REGIONAL DE ANTOFAGASTA",
    "organismoRut": "82.151.061-2",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Antofagasta",
    "monto": 200000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-21",
    "matchScore": 97,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de materiales de oficina para el Museo Regional de Antofagasta. Organismo demandante: DIRECCION REGIONAL DE ANTOFAGASTA. Unidad de compra: DIRECCION REGIONAL DE ANTOFAGASTA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:29"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "21/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1220203-28-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1220203-28-COT26",
        "producto": "Adquisición de materiales de oficina para el Museo Regional de Antofagasta",
        "cantidad": 1,
        "precioUnitario": 200000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1461054-248-COT26",
    "codigo": "1461054-248-COT26",
    "titulo": "SERVICIO DE LIMPIEZA, RETIRO DE CABLEADO ANTIGUO, RECABLEADO DE TRONCALES DE DATOS CAT6, ENLACE PUNTO A PUNTO Y PUNTOS DE ACCESO DE WIFI PARA COLEGIO GABRIEL GONZALEZ VIDELA RBD 530,",
    "organismo": "SERVICIO LOCAL DE EDUCACIÓN PÚBLICA DEL ELQUI",
    "organismoRut": "62.074.129-7",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Medio",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 1350000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 97,
    "riesgo": "Medio",
    "descripcion": "Proceso: SERVICIO DE LIMPIEZA, RETIRO DE CABLEADO ANTIGUO, RECABLEADO DE TRONCALES DE DATOS CAT6, ENLACE PUNTO A PUNTO Y PUNTOS DE ACCESO DE WIFI PARA COLEGIO GABRIEL GONZALEZ VIDELA RBD 530,. Organismo demandante: SERVICIO LOCAL DE EDUCACIÓN PÚBLICA DEL ELQUI. Unidad de compra: P02 Establecimientos Educacionales.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:28"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1461054-248-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1461054-248-COT26",
        "producto": "SERVICIO DE LIMPIEZA, RETIRO DE CABLEADO ANTIGUO, RECABLEADO DE TRONCALES DE DATOS CAT6, ENLACE PUNTO A PUNTO Y PUNTOS DE ACCESO DE WIFI PARA COLEGIO GABRIEL GONZALEZ VIDELA RBD 530,",
        "cantidad": 1,
        "precioUnitario": 6500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "648752-32-COT26",
    "codigo": "648752-32-COT26",
    "titulo": "TONER JESAM",
    "organismo": "Ejercito de Chile",
    "organismoRut": "90.520.203-8",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 902000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-21",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: TONER JESAM. Organismo demandante: Ejercito de Chile. Unidad de compra: Jefatura de Sanidad Militar - JESAM.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:25"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "21/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_648752-32-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-648752-32-COT26",
        "producto": "TONER JESAM",
        "cantidad": 1,
        "precioUnitario": 902000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2332-597-COT26",
    "codigo": "2332-597-COT26",
    "titulo": "7612 ADQUISICIÓN DE ESCRITORIOS DE MADERA PARA EL PROGRAMA DE AUTISMO MUNICIPAL",
    "organismo": "I MUNICIPALIDAD DE PUERTO MONTT",
    "organismoRut": "18.546.223-K",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Los Lagos",
    "monto": 180000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: 7612 ADQUISICIÓN DE ESCRITORIOS DE MADERA PARA EL PROGRAMA DE AUTISMO MUNICIPAL. Organismo demandante: I MUNICIPALIDAD DE PUERTO MONTT. Unidad de compra: Oficina de Adquisiciones del Departamento de Salud.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:25"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2332-597-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2332-597-COT26",
        "producto": "7612 ADQUISICIÓN DE ESCRITORIOS DE MADERA PARA EL PROGRAMA DE AUTISMO MUNICIPAL",
        "cantidad": 1,
        "precioUnitario": 180000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "722640-79-COT26",
    "codigo": "722640-79-COT26",
    "titulo": "Adquisicion de insumos y materiales financiado por el programa Migrantes año 2026",
    "organismo": "I MUNICIPALIDAD DE COLCHANE",
    "organismoRut": "74.819.541-5",
    "organismoPagoDias": 42,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 457000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 84,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisicion de insumos y materiales financiado por el programa Migrantes año 2026. Organismo demandante: I MUNICIPALIDAD DE COLCHANE. Unidad de compra: DEPTO SALUD.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:24"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:40"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_722640-79-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-722640-79-COT26",
        "producto": "Adquisicion de insumos y materiales financiado por el programa Migrantes año 2026",
        "cantidad": 1,
        "precioUnitario": 457000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1183926-151-COT26",
    "codigo": "1183926-151-COT26",
    "titulo": "Protectores solares SENCE",
    "organismo": "CENTRO DE FORMACIÓN TÉCNICA ESTATAL DE LA REGIÓN D",
    "organismoRut": "31.565.819-5",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 180000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Protectores solares SENCE. Organismo demandante: CENTRO DE FORMACIÓN TÉCNICA ESTATAL DE LA REGIÓN D. Unidad de compra: Casa Central.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:24"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1183926-151-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1183926-151-COT26",
        "producto": "Protectores solares SENCE",
        "cantidad": 1,
        "precioUnitario": 60000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1346283-167-COT26",
    "codigo": "1346283-167-COT26",
    "titulo": "ADQUISICIÓN DE PILAS Y BATERIAS PARA EL CENTRO, IP-IRC DE COPIAPÓ",
    "organismo": "SERVICIO NACIONAL DE REINSERCION SOCIAL JUVENIL",
    "organismoRut": "99.928.483-K",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICIÓN DE PILAS Y BATERIAS PARA EL CENTRO, IP-IRC DE COPIAPÓ. Organismo demandante: SERVICIO NACIONAL DE REINSERCION SOCIAL JUVENIL. Unidad de compra: DIRECCIÓN REGIONAL DE ATACAMA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:23"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1346283-167-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1346283-167-COT26",
        "producto": "ADQUISICIÓN DE PILAS Y BATERIAS PARA EL CENTRO, IP-IRC DE COPIAPÓ",
        "cantidad": 1,
        "precioUnitario": 500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2429-712-COT26",
    "codigo": "2429-712-COT26",
    "titulo": "BANDERINES TIPO GIRNALDA (MEDIO AMBIENTE, ASEO Y ORNATO)",
    "organismo": "I MUNICIPALIDAD DE ANTOFAGASTA",
    "organismoRut": "20.248.011-9",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Antofagasta",
    "monto": 395223,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: BANDERINES TIPO GIRNALDA (MEDIO AMBIENTE, ASEO Y ORNATO). Organismo demandante: I MUNICIPALIDAD DE ANTOFAGASTA. Unidad de compra: I MUNICIPALIDAD DE ANTOFAGASTA - FINANZAS.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:12"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2429-712-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2429-712-COT26",
        "producto": "BANDERINES TIPO GIRNALDA (MEDIO AMBIENTE, ASEO Y ORNATO)",
        "cantidad": 1,
        "precioUnitario": 395223
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3431-95-COT26",
    "codigo": "3431-95-COT26",
    "titulo": "LP- Solicitud de cotización para la adquisición de materiales eléctricos para el mejoramiento de la aislación y sistema eléctrico del taller de telecomunicaciones de la UR.",
    "organismo": "Ejercito de Chile",
    "organismoRut": "90.520.203-8",
    "organismoPagoDias": 40,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 82,
    "riesgo": "Bajo",
    "descripcion": "Proceso: LP- Solicitud de cotización para la adquisición de materiales eléctricos para el mejoramiento de la aislación y sistema eléctrico del taller de telecomunicaciones de la UR.. Organismo demandante: Ejercito de Chile. Unidad de compra: Regimiento N° 8 Chiloé - R Nº 8.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:12"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 16:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3431-95-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3431-95-COT26",
        "producto": "LP- Solicitud de cotización para la adquisición de materiales eléctricos para el mejoramiento de la aislación y sistema eléctrico del taller de telecomunicaciones de la UR.",
        "cantidad": 1,
        "precioUnitario": 1500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1230769-16-COT26",
    "codigo": "1230769-16-COT26",
    "titulo": "Compra de materiales para talleres FCA",
    "organismo": "Corporación de Cultura y Patrimonio de Independenc",
    "organismoRut": "65.823.393-1",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 452397,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-22",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Compra de materiales para talleres FCA. Organismo demandante: Corporación de Cultura y Patrimonio de Independenc. Unidad de compra: Corporación de Cultura y Patrimonio de Independenc.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:09"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "22/07/2026 13:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1230769-16-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1230769-16-COT26",
        "producto": "Compra de materiales para talleres FCA",
        "cantidad": 1,
        "precioUnitario": 452397
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4291-772-COT26",
    "codigo": "4291-772-COT26",
    "titulo": "ARITCULOS CON LOGOS SEMINARIO ESCUELAS QUE CUIDAN – RED COLABORADORA JUNAEB 2026 13 /08/2026",
    "organismo": "UNIVERSIDAD DE ANTOFAGASTA",
    "organismoRut": "52.851.302-6",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Antofagasta",
    "monto": 810000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 81,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ARITCULOS CON LOGOS SEMINARIO ESCUELAS QUE CUIDAN – RED COLABORADORA JUNAEB 2026 13 /08/2026. Organismo demandante: UNIVERSIDAD DE ANTOFAGASTA. Unidad de compra: Universidad de Antofagasta.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:04"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4291-772-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4291-772-COT26",
        "producto": "ARITCULOS CON LOGOS SEMINARIO ESCUELAS QUE CUIDAN – RED COLABORADORA JUNAEB 2026 13 /08/2026",
        "cantidad": 1,
        "precioUnitario": 810000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3343-143-COT26",
    "codigo": "3343-143-COT26",
    "titulo": "Talonarios para permisos",
    "organismo": "I MUNICIPALIDAD DE OLMUE",
    "organismoRut": "19.052.104-8",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 300000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Talonarios para permisos. Organismo demandante: I MUNICIPALIDAD DE OLMUE. Unidad de compra: Departamento de Salud.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 14:00"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 14:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3343-143-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3343-143-COT26",
        "producto": "Talonarios para permisos",
        "cantidad": 1,
        "precioUnitario": 300000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1237853-80-COT26",
    "codigo": "1237853-80-COT26",
    "titulo": "Adquisición e instalación de espejo",
    "organismo": "CORPORACION DEL DEPORTE DE LA FLORIDA",
    "organismoRut": "74.615.688-9",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 700000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición e instalación de espejo. Organismo demandante: CORPORACION DEL DEPORTE DE LA FLORIDA. Unidad de compra: CORPORACION DEL DEPORTE DE LA FLORIDA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:59"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1237853-80-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1237853-80-COT26",
        "producto": "Adquisición e instalación de espejo",
        "cantidad": 1,
        "precioUnitario": 700000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2460-694-COT26",
    "codigo": "2460-694-COT26",
    "titulo": "Baterías Enduro y Cargador para Cámaras Go-Pro existentes. D. Tránsito. SBC 459",
    "organismo": "I MUNICIPALIDAD DE PROVIDENCIA",
    "organismoRut": "18.758.582-3",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 250000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Baterías Enduro y Cargador para Cámaras Go-Pro existentes. D. Tránsito. SBC 459. Organismo demandante: I MUNICIPALIDAD DE PROVIDENCIA. Unidad de compra: Dirección de Administración y Finanzas.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:56"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2460-694-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2460-694-COT26",
        "producto": "Baterías Enduro y Cargador para Cámaras Go-Pro existentes. D. Tránsito. SBC 459",
        "cantidad": 1,
        "precioUnitario": 250000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2429-709-COT26",
    "codigo": "2429-709-COT26",
    "titulo": "BANDERINES CON MASTILES (MEDIO AMBIENTE, ASEO Y ORNATO)",
    "organismo": "I MUNICIPALIDAD DE ANTOFAGASTA",
    "organismoRut": "20.248.011-9",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Antofagasta",
    "monto": 307000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: BANDERINES CON MASTILES (MEDIO AMBIENTE, ASEO Y ORNATO). Organismo demandante: I MUNICIPALIDAD DE ANTOFAGASTA. Unidad de compra: I MUNICIPALIDAD DE ANTOFAGASTA - FINANZAS.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:56"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2429-709-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2429-709-COT26",
        "producto": "BANDERINES CON MASTILES (MEDIO AMBIENTE, ASEO Y ORNATO)",
        "cantidad": 1,
        "precioUnitario": 57727
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1663-570-COT26",
    "codigo": "1663-570-COT26",
    "titulo": "TAZONES CON LOGO DEL HOSPITAL, BOLSAS ECOLOGICAS CON LOGO DEL HOSPITAL Y CREDENCIALES  INSTITUCIONAL CON LANYARD",
    "organismo": "Hospital de Quellón",
    "organismoRut": "54.063.715-5",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1800000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 76,
    "riesgo": "Medio",
    "descripcion": "Proceso: TAZONES CON LOGO DEL HOSPITAL, BOLSAS ECOLOGICAS CON LOGO DEL HOSPITAL Y CREDENCIALES  INSTITUCIONAL CON LANYARD. Organismo demandante: Hospital de Quellón. Unidad de compra: Hospital de Quellón.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:55"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1663-570-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1663-570-COT26",
        "producto": "TAZONES CON LOGO DEL HOSPITAL, BOLSAS ECOLOGICAS CON LOGO DEL HOSPITAL Y CREDENCIALES  INSTITUCIONAL CON LANYARD",
        "cantidad": 1,
        "precioUnitario": 3950000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2427-770-COT26",
    "codigo": "2427-770-COT26",
    "titulo": "Adquisición de materiales para la habilitación de recintos Municipales-Departamento de logística",
    "organismo": "I MUNICIPALIDAD DE VALPARAISO",
    "organismoRut": "27.700.676-0",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Valparaíso",
    "monto": 3350000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 79,
    "riesgo": "Medio",
    "descripcion": "Proceso: Adquisición de materiales para la habilitación de recintos Municipales-Departamento de logística. Organismo demandante: I MUNICIPALIDAD DE VALPARAISO. Unidad de compra: ABASTECIMIENTO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:52"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 17:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2427-770-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2427-770-COT26",
        "producto": "Adquisición de materiales para la habilitación de recintos Municipales-Departamento de logística",
        "cantidad": 1,
        "precioUnitario": 5500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1038-84-COT26",
    "codigo": "1038-84-COT26",
    "titulo": "Adquisición e Instalación de Pieza Gráfica en Cajón Superior de Acceso SIRE N°784",
    "organismo": "CORP NACIONAL FORESTAL",
    "organismoRut": "50.399.889-8",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 380000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición e Instalación de Pieza Gráfica en Cajón Superior de Acceso SIRE N°784. Organismo demandante: CORP NACIONAL FORESTAL. Unidad de compra: XII Región - Oficina Regional de Magallanes.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:51"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1038-84-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1038-84-COT26",
        "producto": "Adquisición e Instalación de Pieza Gráfica en Cajón Superior de Acceso SIRE N°784",
        "cantidad": 1,
        "precioUnitario": 380000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4494-390-COT26",
    "codigo": "4494-390-COT26",
    "titulo": "LETREROS \"PROHIBIDO BOTAR BASURA Y ESCOMBROS\" (P.539 DEPTO. ASEO)",
    "organismo": "I MUNICIPALIDAD DE PENCO",
    "organismoRut": "19.767.501-9",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Medio",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 2500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 77,
    "riesgo": "Medio",
    "descripcion": "Proceso: LETREROS \"PROHIBIDO BOTAR BASURA Y ESCOMBROS\" (P.539 DEPTO. ASEO). Organismo demandante: I MUNICIPALIDAD DE PENCO. Unidad de compra: Municipalidad.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:49"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4494-390-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4494-390-COT26",
        "producto": "LETREROS \"PROHIBIDO BOTAR BASURA Y ESCOMBROS\" (P.539 DEPTO. ASEO)",
        "cantidad": 1,
        "precioUnitario": 2500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1057402-946-COT26",
    "codigo": "1057402-946-COT26",
    "titulo": "(5074) Suministro luminarias",
    "organismo": "HOSPITAL CLINICO DE MAGALLANES DR. LAUTARO NAVARRO AVARIA",
    "organismoRut": "57.751.450-4",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Magallanes",
    "monto": 3070000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 80,
    "riesgo": "Medio",
    "descripcion": "Proceso: (5074) Suministro luminarias. Organismo demandante: HOSPITAL CLINICO DE MAGALLANES DR. LAUTARO NAVARRO AVARIA. Unidad de compra: Bienes y Servicios.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:48"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 14:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1057402-946-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1057402-946-COT26",
        "producto": "(5074) Suministro luminarias",
        "cantidad": 1,
        "precioUnitario": 3070000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2298-207-COT26",
    "codigo": "2298-207-COT26",
    "titulo": "ADQUISICIÓN DE MATERIALES DE OFICINA PROGRAMA 4 a 7.-",
    "organismo": "IMunicipalidad de Molina",
    "organismoRut": "98.836.216-8",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 855996,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICIÓN DE MATERIALES DE OFICINA PROGRAMA 4 a 7.-. Organismo demandante: IMunicipalidad de Molina. Unidad de compra: Oficina de Adquisiciones Municipales.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:45"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 14:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2298-207-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2298-207-COT26",
        "producto": "ADQUISICIÓN DE MATERIALES DE OFICINA PROGRAMA 4 a 7.-",
        "cantidad": 1,
        "precioUnitario": 855996
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4922-223-COT26",
    "codigo": "4922-223-COT26",
    "titulo": "MATERIALES DE ASEO",
    "organismo": "I MUNICIPALIDAD DE FUTRONO",
    "organismoRut": "12.413.259-K",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Medio",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 3000000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 76,
    "riesgo": "Medio",
    "descripcion": "Proceso: MATERIALES DE ASEO. Organismo demandante: I MUNICIPALIDAD DE FUTRONO. Unidad de compra: Direccion de Desarrollo Comunitario.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:44"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4922-223-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4922-223-COT26",
        "producto": "MATERIALES DE ASEO",
        "cantidad": 1,
        "precioUnitario": 3000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1702-335-COT26",
    "codigo": "1702-335-COT26",
    "titulo": "APOSITO DE GASA",
    "organismo": "SERVICIO DE SALUD VINA DEL MAR QUILLOTA",
    "organismoRut": "30.255.168-8",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Valparaíso",
    "monto": 600000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: APOSITO DE GASA. Organismo demandante: SERVICIO DE SALUD VINA DEL MAR QUILLOTA. Unidad de compra: HOSPITAL DE PEÑABLANCA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:40"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1702-335-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1702-335-COT26",
        "producto": "APOSITO DE GASA",
        "cantidad": 1,
        "precioUnitario": 600000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "979-65-COT26",
    "codigo": "979-65-COT26",
    "titulo": "ADQUISICIÓN FORMULARIOS DENUNCIOS DE INFRACCIÓN   Y HOJAS PREPICADAS PARA INFRACCIONES  DE LA DIRECCIÓN DE VIALIDAD.",
    "organismo": "MINISTERIO DE OBRAS PUBLICAS DIREC CION GRAL DE OO PP DCYF",
    "organismoRut": "84.780.005-9",
    "organismoPagoDias": 43,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 3550000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 85,
    "riesgo": "Medio",
    "descripcion": "Proceso: ADQUISICIÓN FORMULARIOS DENUNCIOS DE INFRACCIÓN   Y HOJAS PREPICADAS PARA INFRACCIONES  DE LA DIRECCIÓN DE VIALIDAD.. Organismo demandante: MINISTERIO DE OBRAS PUBLICAS DIREC CION GRAL DE OO PP DCYF. Unidad de compra: Dirección de Vialidad - Nivel Central - Abastecimiento.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:39"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_979-65-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-979-65-COT26",
        "producto": "ADQUISICIÓN FORMULARIOS DENUNCIOS DE INFRACCIÓN   Y HOJAS PREPICADAS PARA INFRACCIONES  DE LA DIRECCIÓN DE VIALIDAD.",
        "cantidad": 1,
        "precioUnitario": 5700000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3486-260-COT26",
    "codigo": "3486-260-COT26",
    "titulo": "TRITURADORA PAPEL CESFAM NVA IMPERIAL",
    "organismo": "I MUNICIPALIDAD DE NUEVA IMPERIAL",
    "organismoRut": "69.267.510-5",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 700000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: TRITURADORA PAPEL CESFAM NVA IMPERIAL. Organismo demandante: I MUNICIPALIDAD DE NUEVA IMPERIAL. Unidad de compra: Departamento De Salud.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:34"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3486-260-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3486-260-COT26",
        "producto": "TRITURADORA PAPEL CESFAM NVA IMPERIAL",
        "cantidad": 1,
        "precioUnitario": 700000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2297-980-COT26",
    "codigo": "2297-980-COT26",
    "titulo": "ADQUISICION DE MATERIALES PARA ACONDICIONAMIENTO DE BAÑOS Y LAVAPLATOS",
    "organismo": "I MUNICIPALIDAD DE OSORNO",
    "organismoRut": "31.620.320-1",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Los Lagos",
    "monto": 800000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 81,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICION DE MATERIALES PARA ACONDICIONAMIENTO DE BAÑOS Y LAVAPLATOS. Organismo demandante: I MUNICIPALIDAD DE OSORNO. Unidad de compra: IMUNI_OSORNO DIRECCION DE ADM Y FINANZAS.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:34"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 13:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2297-980-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2297-980-COT26",
        "producto": "ADQUISICION DE MATERIALES PARA ACONDICIONAMIENTO DE BAÑOS Y LAVAPLATOS",
        "cantidad": 1,
        "precioUnitario": 800000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2817-402-COT26",
    "codigo": "2817-402-COT26",
    "titulo": "ADQUISICIÓN DE MATERIAL DE OFICINA",
    "organismo": "I MUNICIPALIDAD DE SAN FERNANDO",
    "organismoRut": "69.867.797-3",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "O'Higgins",
    "monto": 500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICIÓN DE MATERIAL DE OFICINA. Organismo demandante: I MUNICIPALIDAD DE SAN FERNANDO. Unidad de compra: I MUNICIPALIDAD DE SAN FERNANDO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:32"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2817-402-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2817-402-COT26",
        "producto": "ADQUISICIÓN DE MATERIAL DE OFICINA",
        "cantidad": 1,
        "precioUnitario": 500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2294-1355-COT26",
    "codigo": "2294-1355-COT26",
    "titulo": "MATERIALES TALLER TELECOMUNICACIONES. EDUCACION.LICEO BICENTENARIO DIEGO PORTALES. NP 30",
    "organismo": "I MUNICIPALIDAD DE TALCA",
    "organismoRut": "23.340.485-6",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Maule",
    "monto": 997691,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 97,
    "riesgo": "Bajo",
    "descripcion": "Proceso: MATERIALES TALLER TELECOMUNICACIONES. EDUCACION.LICEO BICENTENARIO DIEGO PORTALES. NP 30. Organismo demandante: I MUNICIPALIDAD DE TALCA. Unidad de compra: DEPT. EDUCACION COMUNAL.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:31"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2294-1355-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2294-1355-COT26",
        "producto": "MATERIALES TALLER TELECOMUNICACIONES. EDUCACION.LICEO BICENTENARIO DIEGO PORTALES. NP 30",
        "cantidad": 1,
        "precioUnitario": 997691
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3412-109-COT26",
    "codigo": "3412-109-COT26",
    "titulo": "BATERIAS CAMION M BENZ",
    "organismo": "Ejercito de Chile",
    "organismoRut": "90.520.203-8",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 357000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: BATERIAS CAMION M BENZ. Organismo demandante: Ejercito de Chile. Unidad de compra: Destacamento Acorazado Nº 5 Lanceros - DESACO 5.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:29"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3412-109-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3412-109-COT26",
        "producto": "BATERIAS CAMION M BENZ",
        "cantidad": 1,
        "precioUnitario": 357000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2358-333-COT26",
    "codigo": "2358-333-COT26",
    "titulo": "©sc 52 D.S.P.-senda-Minipendon tipo T y Pendón tipo Roller",
    "organismo": "I MUNICIPALIDAD DE TALCAHUANO",
    "organismoRut": "70.934.160-9",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Maule",
    "monto": 325000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ©sc 52 D.S.P.-senda-Minipendon tipo T y Pendón tipo Roller. Organismo demandante: I MUNICIPALIDAD DE TALCAHUANO. Unidad de compra: DEPARTAMENTO DE FINANZAS.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:28"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2358-333-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2358-333-COT26",
        "producto": "©sc 52 D.S.P.-senda-Minipendon tipo T y Pendón tipo Roller",
        "cantidad": 1,
        "precioUnitario": 58945
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3017-521-COT26",
    "codigo": "3017-521-COT26",
    "titulo": "ARTICULOS DE ASEO PARA ALBERGUE MUNICIPAL",
    "organismo": "I MUNICIPALIDAD DE LOTA",
    "organismoRut": "37.654.264-1",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Biobío",
    "monto": 400000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ARTICULOS DE ASEO PARA ALBERGUE MUNICIPAL. Organismo demandante: I MUNICIPALIDAD DE LOTA. Unidad de compra: Departamento de Adquisiciones.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:28"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:01"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3017-521-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3017-521-COT26",
        "producto": "ARTICULOS DE ASEO PARA ALBERGUE MUNICIPAL",
        "cantidad": 1,
        "precioUnitario": 400000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3760-470-COT26",
    "codigo": "3760-470-COT26",
    "titulo": "FORMULARIO N° 26/// TRANSITO/// TONNER/// PROVEEDOR DEBE ENVIAR CARACTERÍSTICAS E IMAGEN DEL PRODUCTO OFERTADO///",
    "organismo": "I MUNICIPALIDAD DE EL MONTE",
    "organismoRut": "51.936.132-5",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 800000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: FORMULARIO N° 26/// TRANSITO/// TONNER/// PROVEEDOR DEBE ENVIAR CARACTERÍSTICAS E IMAGEN DEL PRODUCTO OFERTADO///. Organismo demandante: I MUNICIPALIDAD DE EL MONTE. Unidad de compra: IM De El Monte - Adquisiciones.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:28"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3760-470-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3760-470-COT26",
        "producto": "FORMULARIO N° 26/// TRANSITO/// TONNER/// PROVEEDOR DEBE ENVIAR CARACTERÍSTICAS E IMAGEN DEL PRODUCTO OFERTADO///",
        "cantidad": 1,
        "precioUnitario": 800000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3767-83-COT26",
    "codigo": "3767-83-COT26",
    "titulo": "TINTAS PARA IMPRESORAS",
    "organismo": "I MUNICIPALIDAD DE PELARCO",
    "organismoRut": "11.556.988-8",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 571200,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 81,
    "riesgo": "Bajo",
    "descripcion": "Proceso: TINTAS PARA IMPRESORAS. Organismo demandante: I MUNICIPALIDAD DE PELARCO. Unidad de compra: Educacion.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:27"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3767-83-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3767-83-COT26",
        "producto": "TINTAS PARA IMPRESORAS",
        "cantidad": 1,
        "precioUnitario": 571200
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2793-615-COT26",
    "codigo": "2793-615-COT26",
    "titulo": "Compra de imanes con informacion de contactos institucionales",
    "organismo": "Iluste Municipalidad de Huechuraba",
    "organismoRut": "40.191.385-2",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 3500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Medio",
    "descripcion": "Proceso: Compra de imanes con informacion de contactos institucionales. Organismo demandante: Iluste Municipalidad de Huechuraba. Unidad de compra: Municipalidad de Huechuraba.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:25"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2793-615-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2793-615-COT26",
        "producto": "Compra de imanes con informacion de contactos institucionales",
        "cantidad": 1,
        "precioUnitario": 3500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4034-329-COT26",
    "codigo": "4034-329-COT26",
    "titulo": "MATERIAL DIDÁCTICO PARA PROGRAMA HABILIDADES PARA LA VIDA DAEM CAÑETE, SP 70 - FONDOS DAEM",
    "organismo": "Ilustre Municipalidad de Cañete - Educación",
    "organismoRut": "66.926.810-7",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 836560,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: MATERIAL DIDÁCTICO PARA PROGRAMA HABILIDADES PARA LA VIDA DAEM CAÑETE, SP 70 - FONDOS DAEM. Organismo demandante: Ilustre Municipalidad de Cañete - Educación. Unidad de compra: Daem.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:25"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4034-329-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4034-329-COT26",
        "producto": "MATERIAL DIDÁCTICO PARA PROGRAMA HABILIDADES PARA LA VIDA DAEM CAÑETE, SP 70 - FONDOS DAEM",
        "cantidad": 1,
        "precioUnitario": 836560
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2211-829-COT26",
    "codigo": "2211-829-COT26",
    "titulo": "LAMINAS FRONTAL SOL 63 ADMINISTRACION",
    "organismo": "I MUNICIPALIDAD DE LIMACHE",
    "organismoRut": "86.968.119-0",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso: LAMINAS FRONTAL SOL 63 ADMINISTRACION. Organismo demandante: I MUNICIPALIDAD DE LIMACHE. Unidad de compra: MUNICIPALIDAD LIMACHE - Adquisiciones.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:24"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2211-829-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2211-829-COT26",
        "producto": "LAMINAS FRONTAL SOL 63 ADMINISTRACION",
        "cantidad": 1,
        "precioUnitario": 500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2294-1354-COT26",
    "codigo": "2294-1354-COT26",
    "titulo": "MATERIALES TALLER HOTELERIA. EDUCACION. LICEO BICENTENARIO DIEGO PORTALES.NP 29",
    "organismo": "I MUNICIPALIDAD DE TALCA",
    "organismoRut": "23.340.485-6",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Maule",
    "monto": 999952,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 97,
    "riesgo": "Bajo",
    "descripcion": "Proceso: MATERIALES TALLER HOTELERIA. EDUCACION. LICEO BICENTENARIO DIEGO PORTALES.NP 29. Organismo demandante: I MUNICIPALIDAD DE TALCA. Unidad de compra: DEPT. EDUCACION COMUNAL.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:23"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2294-1354-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2294-1354-COT26",
        "producto": "MATERIALES TALLER HOTELERIA. EDUCACION. LICEO BICENTENARIO DIEGO PORTALES.NP 29",
        "cantidad": 1,
        "precioUnitario": 999952
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2427-768-COT26",
    "codigo": "2427-768-COT26",
    "titulo": "ADQUISICION DE PINTURAS Y MATERIALES PARA MEJORAMIENTO Y RECUPERACION DE ESPACIOS PUBLICOS, DEPARTAMENTO ASISTENCIA TECNICA.",
    "organismo": "I MUNICIPALIDAD DE VALPARAISO",
    "organismoRut": "27.700.676-0",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Valparaíso",
    "monto": 1749000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 79,
    "riesgo": "Medio",
    "descripcion": "Proceso: ADQUISICION DE PINTURAS Y MATERIALES PARA MEJORAMIENTO Y RECUPERACION DE ESPACIOS PUBLICOS, DEPARTAMENTO ASISTENCIA TECNICA.. Organismo demandante: I MUNICIPALIDAD DE VALPARAISO. Unidad de compra: ABASTECIMIENTO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:23"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2427-768-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2427-768-COT26",
        "producto": "ADQUISICION DE PINTURAS Y MATERIALES PARA MEJORAMIENTO Y RECUPERACION DE ESPACIOS PUBLICOS, DEPARTAMENTO ASISTENCIA TECNICA.",
        "cantidad": 1,
        "precioUnitario": 6899000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3399-125-COT26",
    "codigo": "3399-125-COT26",
    "titulo": "COTIZACIÓN DE MATERIALES PARA MANTENIMIENTO DE QUINCHO DEL CASINO DE SUBOFICIALES.",
    "organismo": "Ejercito de Chile",
    "organismoRut": "90.520.203-8",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1800000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 98,
    "riesgo": "Medio",
    "descripcion": "Proceso: COTIZACIÓN DE MATERIALES PARA MANTENIMIENTO DE QUINCHO DEL CASINO DE SUBOFICIALES.. Organismo demandante: Ejercito de Chile. Unidad de compra: Regimiento N° 16 Talca - R Nº16.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:23"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3399-125-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3399-125-COT26",
        "producto": "COTIZACIÓN DE MATERIALES PARA MANTENIMIENTO DE QUINCHO DEL CASINO DE SUBOFICIALES.",
        "cantidad": 1,
        "precioUnitario": 1800000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2409-931-COT26",
    "codigo": "2409-931-COT26",
    "titulo": "ADQUISICION KIT DE ROBOTICA PARA ESCUELA F-921 GUILLERMO MARIN CARMONA",
    "organismo": "I MUNICIPALIDAD DE LOS ANGELES DEPTO DE",
    "organismoRut": "26.928.720-5",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Biobío",
    "monto": 1500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 81,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICION KIT DE ROBOTICA PARA ESCUELA F-921 GUILLERMO MARIN CARMONA. Organismo demandante: I MUNICIPALIDAD DE LOS ANGELES DEPTO DE. Unidad de compra: MUNICIPALIDAD DE LOS ANGELES - EDUCACION.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:22"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2409-931-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2409-931-COT26",
        "producto": "ADQUISICION KIT DE ROBOTICA PARA ESCUELA F-921 GUILLERMO MARIN CARMONA",
        "cantidad": 1,
        "precioUnitario": 1500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1214102-896-COT26",
    "codigo": "1214102-896-COT26",
    "titulo": "(RML) TONER PARA RED DE BIBLIOTECAS PUBLICAS",
    "organismo": "CORP MUNICIPAL DE DESARROLLO SOCIAL DE PUDAHUEL",
    "organismoRut": "88.985.800-2",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 800000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: (RML) TONER PARA RED DE BIBLIOTECAS PUBLICAS. Organismo demandante: CORP MUNICIPAL DE DESARROLLO SOCIAL DE PUDAHUEL. Unidad de compra: Adquisiciones.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:22"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1214102-896-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1214102-896-COT26",
        "producto": "(RML) TONER PARA RED DE BIBLIOTECAS PUBLICAS",
        "cantidad": 1,
        "precioUnitario": 800000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4125-64-COT26",
    "codigo": "4125-64-COT26",
    "titulo": "BATERIA CAMIONETA GREAT WALL SVKW 11",
    "organismo": "ILUSTRE MUNICIPALIDAD MELIPEUCO",
    "organismoRut": "69.857.133-1",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 150000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso: BATERIA CAMIONETA GREAT WALL SVKW 11. Organismo demandante: ILUSTRE MUNICIPALIDAD MELIPEUCO. Unidad de compra: Salud.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:20"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4125-64-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4125-64-COT26",
        "producto": "BATERIA CAMIONETA GREAT WALL SVKW 11",
        "cantidad": 1,
        "precioUnitario": 150000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3594-658-COT26",
    "codigo": "3594-658-COT26",
    "titulo": "ARTICULOS DE ASEO PROGRAMA RED LOCAL DE APOYOS Y CUIDADOS",
    "organismo": "I MUNICIPALIDAD DE PORTEZUELO",
    "organismoRut": "58.641.567-8",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 544689,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ARTICULOS DE ASEO PROGRAMA RED LOCAL DE APOYOS Y CUIDADOS. Organismo demandante: I MUNICIPALIDAD DE PORTEZUELO. Unidad de compra: I MUNICIPALIDAD DE PORTEZUELO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:20"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3594-658-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3594-658-COT26",
        "producto": "ARTICULOS DE ASEO PROGRAMA RED LOCAL DE APOYOS Y CUIDADOS",
        "cantidad": 1,
        "precioUnitario": 544689
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1080089-120-COT26",
    "codigo": "1080089-120-COT26",
    "titulo": "TIMBRE - ID 10882",
    "organismo": "SERVICIO DE SALUD MAGALLANES",
    "organismoRut": "48.264.399-2",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Magallanes",
    "monto": 80000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: TIMBRE - ID 10882. Organismo demandante: SERVICIO DE SALUD MAGALLANES. Unidad de compra: Bienes y servicios - DSSM.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:20"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 07:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1080089-120-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1080089-120-COT26",
        "producto": "TIMBRE - ID 10882",
        "cantidad": 1,
        "precioUnitario": 80000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1460278-294-COT26",
    "codigo": "1460278-294-COT26",
    "titulo": "Impresión offset Revista Cambalache \"Agentes biológicos\" de 86 páginas + portada y contraportada.",
    "organismo": "UNIVERSIDAD DE SANTIAGO DE CHILE",
    "organismoRut": "83.678.765-6",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 3562000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 97,
    "riesgo": "Medio",
    "descripcion": "Proceso: Impresión offset Revista Cambalache \"Agentes biológicos\" de 86 páginas + portada y contraportada.. Organismo demandante: UNIVERSIDAD DE SANTIAGO DE CHILE. Unidad de compra: DPTO DE COORDINACION INSTITUCIONAL - PRORRECTORIA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:18"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1460278-294-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1460278-294-COT26",
        "producto": "Impresión offset Revista Cambalache \"Agentes biológicos\" de 86 páginas + portada y contraportada.",
        "cantidad": 1,
        "precioUnitario": 5712000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1483-25-COT26",
    "codigo": "1483-25-COT26",
    "titulo": "Compra de materiales e insumos para funcionamiento de redes de mejoramiento, con criterios sustentable",
    "organismo": "DEPARTAMENTO PROVINCIAL DE EDUCACION EL LOA",
    "organismoRut": "26.240.250-9",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-27",
    "matchScore": 97,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Compra de materiales e insumos para funcionamiento de redes de mejoramiento, con criterios sustentable. Organismo demandante: DEPARTAMENTO PROVINCIAL DE EDUCACION EL LOA. Unidad de compra: Departamento Provincial El Loa.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:18"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "27/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1483-25-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1483-25-COT26",
        "producto": "Compra de materiales e insumos para funcionamiento de redes de mejoramiento, con criterios sustentable",
        "cantidad": 1,
        "precioUnitario": 500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1736-388-COT26",
    "codigo": "1736-388-COT26",
    "titulo": "Adquisición de material didáctico para ser destinado a la ludoteca, según FUSC 397 de DIDECO-DEPARTAMENTO DE PROMOCIÓN SOCIO-COMUNITARIA.",
    "organismo": "I MUNICIPALIDAD DE LA COMUNA DE EL BOSQUE",
    "organismoRut": "73.403.813-0",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 496860,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de material didáctico para ser destinado a la ludoteca, según FUSC 397 de DIDECO-DEPARTAMENTO DE PROMOCIÓN SOCIO-COMUNITARIA.. Organismo demandante: I MUNICIPALIDAD DE LA COMUNA DE EL BOSQUE. Unidad de compra: I MUNICIPALIDAD DE LA COMUNA DE EL BOSQUE.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:18"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 13:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1736-388-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1736-388-COT26",
        "producto": "Adquisición de material didáctico para ser destinado a la ludoteca, según FUSC 397 de DIDECO-DEPARTAMENTO DE PROMOCIÓN SOCIO-COMUNITARIA.",
        "cantidad": 1,
        "precioUnitario": 496860
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "5394-387-COT26",
    "codigo": "5394-387-COT26",
    "titulo": "ADQUISICIÓN DE BOLSAS PARA MUESTREO DE NIEVE, EN EL MARCO DEL PROYECTO DE INVESTIGACIÓN N° 021032, SOL. 158583",
    "organismo": "UNIVERSIDAD DE MAGALLANES",
    "organismoRut": "38.557.158-6",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Magallanes",
    "monto": 331555,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICIÓN DE BOLSAS PARA MUESTREO DE NIEVE, EN EL MARCO DEL PROYECTO DE INVESTIGACIÓN N° 021032, SOL. 158583. Organismo demandante: UNIVERSIDAD DE MAGALLANES. Unidad de compra: PROYECTOS CON TERCEROS (D/583).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:17"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_5394-387-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-5394-387-COT26",
        "producto": "ADQUISICIÓN DE BOLSAS PARA MUESTREO DE NIEVE, EN EL MARCO DEL PROYECTO DE INVESTIGACIÓN N° 021032, SOL. 158583",
        "cantidad": 1,
        "precioUnitario": 331555
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3760-469-COT26",
    "codigo": "3760-469-COT26",
    "titulo": "FORMULARIO N° 25/LC/2026/// TRANSITO-LICENCIAS/// TONNER/// PROVEEDOR DEBE ENVIAR CARACTERÍSTICAS E IMAGEN DEL PRODUCTO OFERTADO///",
    "organismo": "I MUNICIPALIDAD DE EL MONTE",
    "organismoRut": "51.936.132-5",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 800000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: FORMULARIO N° 25/LC/2026/// TRANSITO-LICENCIAS/// TONNER/// PROVEEDOR DEBE ENVIAR CARACTERÍSTICAS E IMAGEN DEL PRODUCTO OFERTADO///. Organismo demandante: I MUNICIPALIDAD DE EL MONTE. Unidad de compra: IM De El Monte - Adquisiciones.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:16"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3760-469-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3760-469-COT26",
        "producto": "FORMULARIO N° 25/LC/2026/// TRANSITO-LICENCIAS/// TONNER/// PROVEEDOR DEBE ENVIAR CARACTERÍSTICAS E IMAGEN DEL PRODUCTO OFERTADO///",
        "cantidad": 1,
        "precioUnitario": 800000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4690-250-COT26",
    "codigo": "4690-250-COT26",
    "titulo": "COMPRA DE  IMPRESION  MATRIZ DE  RIESGO    CONVENIO MAIS",
    "organismo": "I MUNICIPALIDAD DE MAULE",
    "organismoRut": "16.884.770-4",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Maule",
    "monto": 500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: COMPRA DE  IMPRESION  MATRIZ DE  RIESGO    CONVENIO MAIS. Organismo demandante: I MUNICIPALIDAD DE MAULE. Unidad de compra: Depto. Salud Comunal.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:16"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4690-250-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4690-250-COT26",
        "producto": "COMPRA DE  IMPRESION  MATRIZ DE  RIESGO    CONVENIO MAIS",
        "cantidad": 1,
        "precioUnitario": 500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1028-38-COT26",
    "codigo": "1028-38-COT26",
    "titulo": "Artículos de Escritorio",
    "organismo": "MINISTERIO DE OBRAS PUBLICAS DIREC CION GRAL DE OO PP DCYF",
    "organismoRut": "84.780.005-9",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1570126,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 98,
    "riesgo": "Medio",
    "descripcion": "Proceso: Artículos de Escritorio. Organismo demandante: MINISTERIO DE OBRAS PUBLICAS DIREC CION GRAL DE OO PP DCYF. Unidad de compra: Dirección de Vialidad - V Región - Dirección Regional.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:15"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1028-38-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1028-38-COT26",
        "producto": "Artículos de Escritorio",
        "cantidad": 1,
        "precioUnitario": 1570126
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "697058-56-COT26",
    "codigo": "697058-56-COT26",
    "titulo": "Servicio diseño, provision e instalación de empavonado en puerta principal para la FRM OCC",
    "organismo": "MINISTERIO PUBLICO",
    "organismoRut": "82.654.833-9",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 550000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 81,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Servicio diseño, provision e instalación de empavonado en puerta principal para la FRM OCC. Organismo demandante: MINISTERIO PUBLICO. Unidad de compra: FRM OCCIDENTE.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:12"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 13:20"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_697058-56-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-697058-56-COT26",
        "producto": "Servicio diseño, provision e instalación de empavonado en puerta principal para la FRM OCC",
        "cantidad": 1,
        "precioUnitario": 550000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3717-118-COT26",
    "codigo": "3717-118-COT26",
    "titulo": "Adquisicion de metodo lector",
    "organismo": "I MUNICIPALIDAD DE PUMANQUE",
    "organismoRut": "61.057.724-4",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 700000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisicion de metodo lector. Organismo demandante: I MUNICIPALIDAD DE PUMANQUE. Unidad de compra: Departamento de Educación Municipal.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:11"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 14:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3717-118-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3717-118-COT26",
        "producto": "Adquisicion de metodo lector",
        "cantidad": 1,
        "precioUnitario": 700000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "578459-558-COT26",
    "codigo": "578459-558-COT26",
    "titulo": "ARTICULO DE OFICINA - MEMO 393-16/26-PROGRAMA CECOSF- JOSE IGNACIO FUENTES- CECOSF SAN VICENTE DE NALTAGUA",
    "organismo": "CORP MUNICIPAL DE ISLA DE MAIPO PARA L",
    "organismoRut": "92.604.017-2",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 150000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-22",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ARTICULO DE OFICINA - MEMO 393-16/26-PROGRAMA CECOSF- JOSE IGNACIO FUENTES- CECOSF SAN VICENTE DE NALTAGUA. Organismo demandante: CORP MUNICIPAL DE ISLA DE MAIPO PARA L. Unidad de compra: Corporación Municipal Isla de Maipo.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:11"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "22/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_578459-558-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-578459-558-COT26",
        "producto": "ARTICULO DE OFICINA - MEMO 393-16/26-PROGRAMA CECOSF- JOSE IGNACIO FUENTES- CECOSF SAN VICENTE DE NALTAGUA",
        "cantidad": 1,
        "precioUnitario": 150000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "760-46-COT26",
    "codigo": "760-46-COT26",
    "titulo": "SC 224 ADQUISICION MATERIAL IMPRESO CEMF EL SAUCE",
    "organismo": "SERVICIO AGRICOLA Y GANADERO",
    "organismoRut": "94.604.106-6",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 81,
    "riesgo": "Bajo",
    "descripcion": "Proceso: SC 224 ADQUISICION MATERIAL IMPRESO CEMF EL SAUCE. Organismo demandante: SERVICIO AGRICOLA Y GANADERO. Unidad de compra: SAG - Valparaíso.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:10"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_760-46-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-760-46-COT26",
        "producto": "SC 224 ADQUISICION MATERIAL IMPRESO CEMF EL SAUCE",
        "cantidad": 1,
        "precioUnitario": 500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1432083-948-COT26",
    "codigo": "1432083-948-COT26",
    "titulo": "AN, RBD 36142, S.C. 2450, JUNJI, MATERIAL DE OFICINA, 2204001, SALA CUNA BUERAS ANTUKAMEL",
    "organismo": "Servicio local de educación pública de Valdivia",
    "organismoRut": "34.217.425-8",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Los Ríos",
    "monto": 225000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso: AN, RBD 36142, S.C. 2450, JUNJI, MATERIAL DE OFICINA, 2204001, SALA CUNA BUERAS ANTUKAMEL. Organismo demandante: Servicio local de educación pública de Valdivia. Unidad de compra: P02 Establecimientos Educacionales.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:10"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1432083-948-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1432083-948-COT26",
        "producto": "AN, RBD 36142, S.C. 2450, JUNJI, MATERIAL DE OFICINA, 2204001, SALA CUNA BUERAS ANTUKAMEL",
        "cantidad": 1,
        "precioUnitario": 56445
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4690-248-COT26",
    "codigo": "4690-248-COT26",
    "titulo": "COMPRA DE ROLLOS DE  ETIQUETAS ADHESIVAS   CONVENIO MAIS",
    "organismo": "I MUNICIPALIDAD DE MAULE",
    "organismoRut": "16.884.770-4",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Maule",
    "monto": 180000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: COMPRA DE ROLLOS DE  ETIQUETAS ADHESIVAS   CONVENIO MAIS. Organismo demandante: I MUNICIPALIDAD DE MAULE. Unidad de compra: Depto. Salud Comunal.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:09"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4690-248-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4690-248-COT26",
        "producto": "COMPRA DE ROLLOS DE  ETIQUETAS ADHESIVAS   CONVENIO MAIS",
        "cantidad": 1,
        "precioUnitario": 180000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "5911-80-COT26",
    "codigo": "5911-80-COT26",
    "titulo": "PAPEL HIGIENICO",
    "organismo": "TRIBUNAL CONSTITUCIONAL",
    "organismoRut": "29.155.196-7",
    "organismoPagoDias": 41,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Maule",
    "monto": 700000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 83,
    "riesgo": "Bajo",
    "descripcion": "Proceso: PAPEL HIGIENICO. Organismo demandante: TRIBUNAL CONSTITUCIONAL. Unidad de compra: TRIBUNAL CONSTITUCIONAL.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:06"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_5911-80-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-5911-80-COT26",
        "producto": "PAPEL HIGIENICO",
        "cantidad": 1,
        "precioUnitario": 700000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2176-203-COT26",
    "codigo": "2176-203-COT26",
    "titulo": "Adquisición de batería interna para Notebook Hp Elitebook 1040 G4 solicitud JLYG Isla de Pascua",
    "organismo": "CORP ADMINISTRATIVA DEL PODER JUDICIAL",
    "organismoRut": "38.391.940-3",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 180000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de batería interna para Notebook Hp Elitebook 1040 G4 solicitud JLYG Isla de Pascua. Organismo demandante: CORP ADMINISTRATIVA DEL PODER JUDICIAL. Unidad de compra: Corp. Adm. del Poder Judicial -  Valparaiso.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:03"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2176-203-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2176-203-COT26",
        "producto": "Adquisición de batería interna para Notebook Hp Elitebook 1040 G4 solicitud JLYG Isla de Pascua",
        "cantidad": 1,
        "precioUnitario": 62000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4077-89-COT26",
    "codigo": "4077-89-COT26",
    "titulo": "Adquisición de banderas y mástiles",
    "organismo": "V ZONA CARABINEROS VALPARAISO",
    "organismoRut": "37.705.273-1",
    "organismoPagoDias": 40,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Valparaíso",
    "monto": 900000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 82,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de banderas y mástiles. Organismo demandante: V ZONA CARABINEROS VALPARAISO. Unidad de compra: Escuela Formación Grupo Viña del Mar.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:02"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 17:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4077-89-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4077-89-COT26",
        "producto": "Adquisición de banderas y mástiles",
        "cantidad": 1,
        "precioUnitario": 900000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3917-118-COT26",
    "codigo": "3917-118-COT26",
    "titulo": "Material aseo C-20",
    "organismo": "I MUNICIPALIDAD DE TALTAL",
    "organismoRut": "85.185.800-9",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Antofagasta",
    "monto": 1000000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Material aseo C-20. Organismo demandante: I MUNICIPALIDAD DE TALTAL. Unidad de compra: Administracion Escolar.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:01"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3917-118-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3917-118-COT26",
        "producto": "Material aseo C-20",
        "cantidad": 1,
        "precioUnitario": 1000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2409-923-COT26",
    "codigo": "2409-923-COT26",
    "titulo": "ADQUISICION DE MATERIAL DE ASEO PARA ESCUELA G-904 LA MANCHA",
    "organismo": "I MUNICIPALIDAD DE LOS ANGELES DEPTO DE",
    "organismoRut": "26.928.720-5",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Biobío",
    "monto": 500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 81,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICION DE MATERIAL DE ASEO PARA ESCUELA G-904 LA MANCHA. Organismo demandante: I MUNICIPALIDAD DE LOS ANGELES DEPTO DE. Unidad de compra: MUNICIPALIDAD DE LOS ANGELES - EDUCACION.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:01"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2409-923-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2409-923-COT26",
        "producto": "ADQUISICION DE MATERIAL DE ASEO PARA ESCUELA G-904 LA MANCHA",
        "cantidad": 1,
        "precioUnitario": 500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2546-828-COT26",
    "codigo": "2546-828-COT26",
    "titulo": "ADQUISICION DE MATERIALES Y UTILES DE ASEO PROGRAMA PERSONAS MAYORES",
    "organismo": "I MUNICIPALIDAD DE PADRE LAS CASAS",
    "organismoRut": "53.541.107-8",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "La Araucanía",
    "monto": 200000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICION DE MATERIALES Y UTILES DE ASEO PROGRAMA PERSONAS MAYORES. Organismo demandante: I MUNICIPALIDAD DE PADRE LAS CASAS. Unidad de compra: MUNICIPALIDAD DE PADRE LAS CASAS.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:00"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2546-828-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2546-828-COT26",
        "producto": "ADQUISICION DE MATERIALES Y UTILES DE ASEO PROGRAMA PERSONAS MAYORES",
        "cantidad": 1,
        "precioUnitario": 200000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1171166-106-COT26",
    "codigo": "1171166-106-COT26",
    "titulo": "CMG/P02 SLEP/ ESCUELA GASPAR CABRALES/ ORD N°84/ UTILES DE ASEO",
    "organismo": "SERVICIO LOCAL DE EDUCACION PÚBLICA DE ATACAMA",
    "organismoRut": "61.929.131-5",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Atacama",
    "monto": 500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: CMG/P02 SLEP/ ESCUELA GASPAR CABRALES/ ORD N°84/ UTILES DE ASEO. Organismo demandante: SERVICIO LOCAL DE EDUCACION PÚBLICA DE ATACAMA. Unidad de compra: P02 SLEP ATACAMA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 13:00"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1171166-106-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1171166-106-COT26",
        "producto": "CMG/P02 SLEP/ ESCUELA GASPAR CABRALES/ ORD N°84/ UTILES DE ASEO",
        "cantidad": 1,
        "precioUnitario": 500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2771-393-COT26",
    "codigo": "2771-393-COT26",
    "titulo": "SOPI N°483 (ID 321145) ADQ. DE KARDEX SOLICITADO POR DIDECO.",
    "organismo": "I MUNICIPALIDAD DE CHIGUAYANTE",
    "organismoRut": "79.280.048-2",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 270000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: SOPI N°483 (ID 321145) ADQ. DE KARDEX SOLICITADO POR DIDECO.. Organismo demandante: I MUNICIPALIDAD DE CHIGUAYANTE. Unidad de compra: MUNICIPALIDAD DE CHIGUAYANTE.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:59"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2771-393-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2771-393-COT26",
        "producto": "SOPI N°483 (ID 321145) ADQ. DE KARDEX SOLICITADO POR DIDECO.",
        "cantidad": 1,
        "precioUnitario": 270000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3767-82-COT26",
    "codigo": "3767-82-COT26",
    "titulo": "COMPRA DE MATERIALES ESCOLARES PARA ESTUDIANTE LICEO",
    "organismo": "I MUNICIPALIDAD DE PELARCO",
    "organismoRut": "11.556.988-8",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2849999,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-18",
    "matchScore": 81,
    "riesgo": "Medio",
    "descripcion": "Proceso: COMPRA DE MATERIALES ESCOLARES PARA ESTUDIANTE LICEO. Organismo demandante: I MUNICIPALIDAD DE PELARCO. Unidad de compra: Educacion.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:59"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "18/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3767-82-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3767-82-COT26",
        "producto": "COMPRA DE MATERIALES ESCOLARES PARA ESTUDIANTE LICEO",
        "cantidad": 1,
        "precioUnitario": 4999999
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3593-277-COT26",
    "codigo": "3593-277-COT26",
    "titulo": "INSUMOS PARA IMPRESORA",
    "organismo": "ILUSTRE MINICIPALIDAD DE COMBARBALA",
    "organismoRut": "44.890.777-3",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 364068,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: INSUMOS PARA IMPRESORA. Organismo demandante: ILUSTRE MINICIPALIDAD DE COMBARBALA. Unidad de compra: ILUSTRE MINICIPALIDAD DE COMBARBALA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:58"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3593-277-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3593-277-COT26",
        "producto": "INSUMOS PARA IMPRESORA",
        "cantidad": 1,
        "precioUnitario": 364068
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "722640-78-COT26",
    "codigo": "722640-78-COT26",
    "titulo": "Adquiscion de insumos de aseo para el COnsultorio general Rural de Colchane",
    "organismo": "I MUNICIPALIDAD DE COLCHANE",
    "organismoRut": "74.819.541-5",
    "organismoPagoDias": 42,
    "organismoRiesgo": "Medio",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 1700000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 84,
    "riesgo": "Medio",
    "descripcion": "Proceso: Adquiscion de insumos de aseo para el COnsultorio general Rural de Colchane. Organismo demandante: I MUNICIPALIDAD DE COLCHANE. Unidad de compra: DEPTO SALUD.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:55"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_722640-78-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-722640-78-COT26",
        "producto": "Adquiscion de insumos de aseo para el COnsultorio general Rural de Colchane",
        "cantidad": 1,
        "precioUnitario": 1700000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "511505-268-COT26",
    "codigo": "511505-268-COT26",
    "titulo": "DEPARTAMENTO DE GEOLOGIA",
    "organismo": "UNIVERSIDAD DE ATACAMA",
    "organismoRut": "23.424.035-2",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Atacama",
    "monto": 519000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: DEPARTAMENTO DE GEOLOGIA. Organismo demandante: UNIVERSIDAD DE ATACAMA. Unidad de compra: FACULTAD DE INGENIERIA (1).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:54"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_511505-268-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-511505-268-COT26",
        "producto": "DEPARTAMENTO DE GEOLOGIA",
        "cantidad": 1,
        "precioUnitario": 519000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4777-527-COT26",
    "codigo": "4777-527-COT26",
    "titulo": "MATERIALES DE OFICINA PARA OF DE SEGURIDAD PUBLICA",
    "organismo": "I MUNICIPALIDAD DE LA UNION",
    "organismoRut": "12.418.148-3",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Los Ríos",
    "monto": 2004000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 79,
    "riesgo": "Medio",
    "descripcion": "Proceso: MATERIALES DE OFICINA PARA OF DE SEGURIDAD PUBLICA. Organismo demandante: I MUNICIPALIDAD DE LA UNION. Unidad de compra: Dirección de Adm. y Finanzas.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:54"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4777-527-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4777-527-COT26",
        "producto": "MATERIALES DE OFICINA PARA OF DE SEGURIDAD PUBLICA",
        "cantidad": 1,
        "precioUnitario": 2004000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3956-39-COT26",
    "codigo": "3956-39-COT26",
    "titulo": "PEDIDO ARTÍCULOS DE OFICINA DESTINADO AL DPTO. DE SALUD DE SANTA JUANA",
    "organismo": "I MUNICIPALIDAD DE SANTA JUANA",
    "organismoRut": "84.547.966-7",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 230000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: PEDIDO ARTÍCULOS DE OFICINA DESTINADO AL DPTO. DE SALUD DE SANTA JUANA. Organismo demandante: I MUNICIPALIDAD DE SANTA JUANA. Unidad de compra: Departamento de Salud.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:53"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3956-39-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3956-39-COT26",
        "producto": "PEDIDO ARTÍCULOS DE OFICINA DESTINADO AL DPTO. DE SALUD DE SANTA JUANA",
        "cantidad": 1,
        "precioUnitario": 230000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2771-392-COT26",
    "codigo": "2771-392-COT26",
    "titulo": "SOPI N°482 (ID 321213) ADQ. DE MOBILIARIO SOLICITADO POR DIDECO.",
    "organismo": "I MUNICIPALIDAD DE CHIGUAYANTE",
    "organismoRut": "79.280.048-2",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1330000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: SOPI N°482 (ID 321213) ADQ. DE MOBILIARIO SOLICITADO POR DIDECO.. Organismo demandante: I MUNICIPALIDAD DE CHIGUAYANTE. Unidad de compra: MUNICIPALIDAD DE CHIGUAYANTE.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:53"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2771-392-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2771-392-COT26",
        "producto": "SOPI N°482 (ID 321213) ADQ. DE MOBILIARIO SOLICITADO POR DIDECO.",
        "cantidad": 1,
        "precioUnitario": 1330000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2546-827-COT26",
    "codigo": "2546-827-COT26",
    "titulo": "ADQUISICIÓN DE OFFICE, ESCÁNER E INSUMOS DE IMPRESIÓN PARA DIDECO",
    "organismo": "I MUNICIPALIDAD DE PADRE LAS CASAS",
    "organismoRut": "53.541.107-8",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "La Araucanía",
    "monto": 1361000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICIÓN DE OFFICE, ESCÁNER E INSUMOS DE IMPRESIÓN PARA DIDECO. Organismo demandante: I MUNICIPALIDAD DE PADRE LAS CASAS. Unidad de compra: MUNICIPALIDAD DE PADRE LAS CASAS.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:53"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2546-827-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2546-827-COT26",
        "producto": "ADQUISICIÓN DE OFFICE, ESCÁNER E INSUMOS DE IMPRESIÓN PARA DIDECO",
        "cantidad": 1,
        "precioUnitario": 1361000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "578459-556-COT26",
    "codigo": "578459-556-COT26",
    "titulo": "BOTELLAS CON LOGO- MEMO 410-10/26-PROGRAMA PROMOCION DE SALUD- RODRIGO PEÑA-CESFAM ISLA DE MAIPO",
    "organismo": "CORP MUNICIPAL DE ISLA DE MAIPO PARA L",
    "organismoRut": "92.604.017-2",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 342275,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-22",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso: BOTELLAS CON LOGO- MEMO 410-10/26-PROGRAMA PROMOCION DE SALUD- RODRIGO PEÑA-CESFAM ISLA DE MAIPO. Organismo demandante: CORP MUNICIPAL DE ISLA DE MAIPO PARA L. Unidad de compra: Corporación Municipal Isla de Maipo.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:53"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "22/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_578459-556-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-578459-556-COT26",
        "producto": "BOTELLAS CON LOGO- MEMO 410-10/26-PROGRAMA PROMOCION DE SALUD- RODRIGO PEÑA-CESFAM ISLA DE MAIPO",
        "cantidad": 1,
        "precioUnitario": 342275
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1080286-71-COT26",
    "codigo": "1080286-71-COT26",
    "titulo": "ADQUISICION DE INSUMOS PARA LA COMISION SASTRERIA, DE CARGO DE LA PREFECTURA TRANSITO Y CARRETERAS",
    "organismo": "SECCIÓN COMPRAS ZONA METROPOLITANA",
    "organismoRut": "63.345.398-0",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 480000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICION DE INSUMOS PARA LA COMISION SASTRERIA, DE CARGO DE LA PREFECTURA TRANSITO Y CARRETERAS. Organismo demandante: SECCIÓN COMPRAS ZONA METROPOLITANA. Unidad de compra: SECCIÓN COMPRAS ZONA METROPOLITANA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:51"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 13:08"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1080286-71-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1080286-71-COT26",
        "producto": "ADQUISICION DE INSUMOS PARA LA COMISION SASTRERIA, DE CARGO DE LA PREFECTURA TRANSITO Y CARRETERAS",
        "cantidad": 1,
        "precioUnitario": 45900
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2817-403-COT26",
    "codigo": "2817-403-COT26",
    "titulo": "ADQ. DE ARTÍCULOS DE COCINA",
    "organismo": "I MUNICIPALIDAD DE SAN FERNANDO",
    "organismoRut": "69.867.797-3",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "O'Higgins",
    "monto": 1290190,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQ. DE ARTÍCULOS DE COCINA. Organismo demandante: I MUNICIPALIDAD DE SAN FERNANDO. Unidad de compra: I MUNICIPALIDAD DE SAN FERNANDO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:51"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 13:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2817-403-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2817-403-COT26",
        "producto": "ADQ. DE ARTÍCULOS DE COCINA",
        "cantidad": 1,
        "precioUnitario": 1290190
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2427-769-COT26",
    "codigo": "2427-769-COT26",
    "titulo": "Adquisición de materiales computacionales - SECPLA",
    "organismo": "I MUNICIPALIDAD DE VALPARAISO",
    "organismoRut": "27.700.676-0",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Valparaíso",
    "monto": 770000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de materiales computacionales - SECPLA. Organismo demandante: I MUNICIPALIDAD DE VALPARAISO. Unidad de compra: ABASTECIMIENTO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:51"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2427-769-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2427-769-COT26",
        "producto": "Adquisición de materiales computacionales - SECPLA",
        "cantidad": 1,
        "precioUnitario": 770000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "5620-43-COT26",
    "codigo": "5620-43-COT26",
    "titulo": "TRABAJ0S TERRITORIALES INVIERNO FECH 2026",
    "organismo": "UNIVERSIDAD DE CHILE",
    "organismoRut": "89.728.640-K",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2200000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-19",
    "matchScore": 79,
    "riesgo": "Medio",
    "descripcion": "Proceso: TRABAJ0S TERRITORIALES INVIERNO FECH 2026. Organismo demandante: UNIVERSIDAD DE CHILE. Unidad de compra: VAEC Federacion de Estudiantes.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:51"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "19/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_5620-43-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-5620-43-COT26",
        "producto": "TRABAJ0S TERRITORIALES INVIERNO FECH 2026",
        "cantidad": 1,
        "precioUnitario": 2200000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "5956-72-COT26",
    "codigo": "5956-72-COT26",
    "titulo": "ADQUISICIÓN BOLSAS DE ALGODÓN DEPTO. DE EDUCACIÓN",
    "organismo": "UNIVERSIDAD DE ATACAMA",
    "organismoRut": "23.424.035-2",
    "organismoPagoDias": 40,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Atacama",
    "monto": 314000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 82,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICIÓN BOLSAS DE ALGODÓN DEPTO. DE EDUCACIÓN. Organismo demandante: UNIVERSIDAD DE ATACAMA. Unidad de compra: FACULTAD DE HUMANIDADES Y EDUCACION.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:50"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_5956-72-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-5956-72-COT26",
        "producto": "ADQUISICIÓN BOLSAS DE ALGODÓN DEPTO. DE EDUCACIÓN",
        "cantidad": 1,
        "precioUnitario": 314000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4034-326-COT26",
    "codigo": "4034-326-COT26",
    "titulo": "ELABORACIÓN DE TALONARIOS PARA REPORTE DE IBNSPECTOR DE TRANSPORTE ESCOLAR, SP 68 - FONDOS DAEM",
    "organismo": "Ilustre Municipalidad de Cañete - Educación",
    "organismoRut": "66.926.810-7",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 200000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ELABORACIÓN DE TALONARIOS PARA REPORTE DE IBNSPECTOR DE TRANSPORTE ESCOLAR, SP 68 - FONDOS DAEM. Organismo demandante: Ilustre Municipalidad de Cañete - Educación. Unidad de compra: Daem.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:49"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4034-326-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4034-326-COT26",
        "producto": "ELABORACIÓN DE TALONARIOS PARA REPORTE DE IBNSPECTOR DE TRANSPORTE ESCOLAR, SP 68 - FONDOS DAEM",
        "cantidad": 1,
        "precioUnitario": 200000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1718-754-COT26",
    "codigo": "1718-754-COT26",
    "titulo": "AREA MUNICIPAL/SIC 17561/SEGURIDAD PUBLICA/SACOS ARENA , MANGAS PLASTICAS",
    "organismo": "I MUNICIPALIDAD DE SAN RAMON",
    "organismoRut": "37.008.677-2",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 600000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: AREA MUNICIPAL/SIC 17561/SEGURIDAD PUBLICA/SACOS ARENA , MANGAS PLASTICAS. Organismo demandante: I MUNICIPALIDAD DE SAN RAMON. Unidad de compra: Departamento de Adquisiciones San Ramon.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:49"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1718-754-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1718-754-COT26",
        "producto": "AREA MUNICIPAL/SIC 17561/SEGURIDAD PUBLICA/SACOS ARENA , MANGAS PLASTICAS",
        "cantidad": 1,
        "precioUnitario": 600000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "760-45-COT26",
    "codigo": "760-45-COT26",
    "titulo": "SC 222 ADQUISICION INSUMOS PLOTTER",
    "organismo": "SERVICIO AGRICOLA Y GANADERO",
    "organismoRut": "94.604.106-6",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 690000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 81,
    "riesgo": "Bajo",
    "descripcion": "Proceso: SC 222 ADQUISICION INSUMOS PLOTTER. Organismo demandante: SERVICIO AGRICOLA Y GANADERO. Unidad de compra: SAG - Valparaíso.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:48"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_760-45-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-760-45-COT26",
        "producto": "SC 222 ADQUISICION INSUMOS PLOTTER",
        "cantidad": 1,
        "precioUnitario": 690000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1432083-947-COT26",
    "codigo": "1432083-947-COT26",
    "titulo": "AN, RBD MULTI, S.C. 2713-2648-2675-1763, SEP, MATERIAL DE ENSEÑANZA, 2204002, INSAT, COL. TENIENTE MERINO Y DEPORTIVO, ESC. ALEMANIA,",
    "organismo": "Servicio local de educación pública de Valdivia",
    "organismoRut": "34.217.425-8",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Los Ríos",
    "monto": 1372344,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 80,
    "riesgo": "Medio",
    "descripcion": "Proceso: AN, RBD MULTI, S.C. 2713-2648-2675-1763, SEP, MATERIAL DE ENSEÑANZA, 2204002, INSAT, COL. TENIENTE MERINO Y DEPORTIVO, ESC. ALEMANIA,. Organismo demandante: Servicio local de educación pública de Valdivia. Unidad de compra: P02 Establecimientos Educacionales.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:47"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1432083-947-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1432083-947-COT26",
        "producto": "AN, RBD MULTI, S.C. 2713-2648-2675-1763, SEP, MATERIAL DE ENSEÑANZA, 2204002, INSAT, COL. TENIENTE MERINO Y DEPORTIVO, ESC. ALEMANIA,",
        "cantidad": 1,
        "precioUnitario": 6522344
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "5293-39-COT26",
    "codigo": "5293-39-COT26",
    "titulo": "MATERIALES PLACILLA JGE",
    "organismo": "I MUNICIPALIDAD DE LICANTEN",
    "organismoRut": "93.795.870-2",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2078260,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Medio",
    "descripcion": "Proceso: MATERIALES PLACILLA JGE. Organismo demandante: I MUNICIPALIDAD DE LICANTEN. Unidad de compra: UNIDAD DE SECPLAC.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:47"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_5293-39-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-5293-39-COT26",
        "producto": "MATERIALES PLACILLA JGE",
        "cantidad": 1,
        "precioUnitario": 2078260
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2429-707-COT26",
    "codigo": "2429-707-COT26",
    "titulo": "GUILLOTINA (MEDIO AMBIENTE, ASEO Y ORNATO)",
    "organismo": "I MUNICIPALIDAD DE ANTOFAGASTA",
    "organismoRut": "20.248.011-9",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Antofagasta",
    "monto": 398000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: GUILLOTINA (MEDIO AMBIENTE, ASEO Y ORNATO). Organismo demandante: I MUNICIPALIDAD DE ANTOFAGASTA. Unidad de compra: I MUNICIPALIDAD DE ANTOFAGASTA - FINANZAS.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:46"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2429-707-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2429-707-COT26",
        "producto": "GUILLOTINA (MEDIO AMBIENTE, ASEO Y ORNATO)",
        "cantidad": 1,
        "precioUnitario": 20218
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3178-694-COT26",
    "codigo": "3178-694-COT26",
    "titulo": "ADQ. CINTA ENGOMADA 1 (SELLOCINTA MASKING TAPE 18 MM X 40 M) Y CINTA ADHESIVA SELLOCINTA MASKING 48MMX40M",
    "organismo": "SUBSECRETARIA DE MARINA HOSP NAVAL ALMIR",
    "organismoRut": "33.665.191-4",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQ. CINTA ENGOMADA 1 (SELLOCINTA MASKING TAPE 18 MM X 40 M) Y CINTA ADHESIVA SELLOCINTA MASKING 48MMX40M. Organismo demandante: SUBSECRETARIA DE MARINA HOSP NAVAL ALMIR. Unidad de compra: HOSPITAL NAVAL ALMIRANTE ADRIAZOLA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:46"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3178-694-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3178-694-COT26",
        "producto": "ADQ. CINTA ENGOMADA 1 (SELLOCINTA MASKING TAPE 18 MM X 40 M) Y CINTA ADHESIVA SELLOCINTA MASKING 48MMX40M",
        "cantidad": 1,
        "precioUnitario": 500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2467-470-COT26",
    "codigo": "2467-470-COT26",
    "titulo": "ADQUISICION DE INSUMOS PARA ATENCION DE MASCOTAS - DIMAO",
    "organismo": "I MUNICIPALIDAD DE CHILLAN",
    "organismoRut": "27.382.489-9",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Ñuble",
    "monto": 623000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICION DE INSUMOS PARA ATENCION DE MASCOTAS - DIMAO. Organismo demandante: I MUNICIPALIDAD DE CHILLAN. Unidad de compra: IMUNI_CHILLAN ADQUISICIONES.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:45"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2467-470-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2467-470-COT26",
        "producto": "ADQUISICION DE INSUMOS PARA ATENCION DE MASCOTAS - DIMAO",
        "cantidad": 1,
        "precioUnitario": 623000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "681006-25-COT26",
    "codigo": "681006-25-COT26",
    "titulo": "compra de kit de mantenimiento Lexmarrk 711",
    "organismo": "Tribunal de Juicio Oral en lo Penal de Copiapo",
    "organismoRut": "28.674.443-K",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Atacama",
    "monto": 680000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-22",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: compra de kit de mantenimiento Lexmarrk 711. Organismo demandante: Tribunal de Juicio Oral en lo Penal de Copiapo. Unidad de compra: TOP de Copiapo.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:44"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "22/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_681006-25-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-681006-25-COT26",
        "producto": "compra de kit de mantenimiento Lexmarrk 711",
        "cantidad": 1,
        "precioUnitario": 680000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "924-157-COT26",
    "codigo": "924-157-COT26",
    "titulo": "Corchetera electrónica",
    "organismo": "SUBSECRETARIA DE SALUD PUBLICA",
    "organismoRut": "58.512.045-9",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 400000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Corchetera electrónica. Organismo demandante: SUBSECRETARIA DE SALUD PUBLICA. Unidad de compra: Seremi Salud R.M..",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:44"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_924-157-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-924-157-COT26",
        "producto": "Corchetera electrónica",
        "cantidad": 1,
        "precioUnitario": 400000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "511505-267-COT26",
    "codigo": "511505-267-COT26",
    "titulo": "CCAA DEPARTAMENTO DE METALURGIA",
    "organismo": "UNIVERSIDAD DE ATACAMA",
    "organismoRut": "23.424.035-2",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Atacama",
    "monto": 167000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: CCAA DEPARTAMENTO DE METALURGIA. Organismo demandante: UNIVERSIDAD DE ATACAMA. Unidad de compra: FACULTAD DE INGENIERIA (1).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:44"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_511505-267-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-511505-267-COT26",
        "producto": "CCAA DEPARTAMENTO DE METALURGIA",
        "cantidad": 1,
        "precioUnitario": 167000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3284-348-COT26",
    "codigo": "3284-348-COT26",
    "titulo": "ORNAMENTACION DE LA COMUNA CHAITEN / DIDECO",
    "organismo": "I MUNICIPALIDAD DE CHAITEN",
    "organismoRut": "19.912.760-6",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1000000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ORNAMENTACION DE LA COMUNA CHAITEN / DIDECO. Organismo demandante: I MUNICIPALIDAD DE CHAITEN. Unidad de compra: I MUNICIPALIDAD DE CHAITEN.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:43"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3284-348-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3284-348-COT26",
        "producto": "ORNAMENTACION DE LA COMUNA CHAITEN / DIDECO",
        "cantidad": 1,
        "precioUnitario": 1000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2371-270-COT26",
    "codigo": "2371-270-COT26",
    "titulo": "S/P 266, EXPEDIENTE 7830, CONVENIO SISTEMA NACIONAL DE APOYOS Y CUIDADOS “CENTRO COMUNITARIO DE CUIDADOS – CHILE CUIDA” CERRO NAVIA, ADQUISICIÓN DE MATERIALES PARA TALLER DE PINTURA",
    "organismo": "ILUSTRE MUNICIPALIDAD DE CERRO NAVIA",
    "organismoRut": "75.254.893-8",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 700000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: S/P 266, EXPEDIENTE 7830, CONVENIO SISTEMA NACIONAL DE APOYOS Y CUIDADOS “CENTRO COMUNITARIO DE CUIDADOS – CHILE CUIDA” CERRO NAVIA, ADQUISICIÓN DE MATERIALES PARA TALLER DE PINTURA. Organismo demandante: ILUSTRE MUNICIPALIDAD DE CERRO NAVIA. Unidad de compra: DEPARTAMENTO DE ADQUISICIONES.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:43"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2371-270-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2371-270-COT26",
        "producto": "S/P 266, EXPEDIENTE 7830, CONVENIO SISTEMA NACIONAL DE APOYOS Y CUIDADOS “CENTRO COMUNITARIO DE CUIDADOS – CHILE CUIDA” CERRO NAVIA, ADQUISICIÓN DE MATERIALES PARA TALLER DE PINTURA",
        "cantidad": 1,
        "precioUnitario": 700000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4044-385-COT26",
    "codigo": "4044-385-COT26",
    "titulo": "ADQUISICION DE IMPRESORA Y CINTAS DK 2212",
    "organismo": "I MUNICIPALIDAD DE ISLA DE PASCUA",
    "organismoRut": "41.625.501-6",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1300000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICION DE IMPRESORA Y CINTAS DK 2212. Organismo demandante: I MUNICIPALIDAD DE ISLA DE PASCUA. Unidad de compra: Adquisiciones.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:42"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4044-385-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4044-385-COT26",
        "producto": "ADQUISICION DE IMPRESORA Y CINTAS DK 2212",
        "cantidad": 1,
        "precioUnitario": 1300000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3131-160-COT26",
    "codigo": "3131-160-COT26",
    "titulo": "MANTENIMIENTO CORRECTIVO VEHICULO FISCAL CCDK-92 SIGLA NAVAL AU-347 (69)",
    "organismo": "ESTACION NAVAL METROPOLITANA",
    "organismoRut": "18.800.477-1",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 180000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-19",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: MANTENIMIENTO CORRECTIVO VEHICULO FISCAL CCDK-92 SIGLA NAVAL AU-347 (69). Organismo demandante: ESTACION NAVAL METROPOLITANA. Unidad de compra: ESTACION NAVAL METROPOLITANA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:42"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "19/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3131-160-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3131-160-COT26",
        "producto": "MANTENIMIENTO CORRECTIVO VEHICULO FISCAL CCDK-92 SIGLA NAVAL AU-347 (69)",
        "cantidad": 1,
        "precioUnitario": 70000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1663-579-COT26",
    "codigo": "1663-579-COT26",
    "titulo": "PODIO PARA ESPACIO RELIGIOSO - CONTEMPLACION",
    "organismo": "Hospital de Quellón",
    "organismoRut": "54.063.715-5",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 600000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: PODIO PARA ESPACIO RELIGIOSO - CONTEMPLACION. Organismo demandante: Hospital de Quellón. Unidad de compra: Hospital de Quellón.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:42"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1663-579-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1663-579-COT26",
        "producto": "PODIO PARA ESPACIO RELIGIOSO - CONTEMPLACION",
        "cantidad": 1,
        "precioUnitario": 600000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4034-325-COT26",
    "codigo": "4034-325-COT26",
    "titulo": "ARTÍCULOS DE OFICINA PARA ESTABLECIMIENTOS DE LA COMUNA, SP 66 – FONDOS FAEP 2024",
    "organismo": "Ilustre Municipalidad de Cañete - Educación",
    "organismoRut": "66.926.810-7",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1008000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ARTÍCULOS DE OFICINA PARA ESTABLECIMIENTOS DE LA COMUNA, SP 66 – FONDOS FAEP 2024. Organismo demandante: Ilustre Municipalidad de Cañete - Educación. Unidad de compra: Daem.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:41"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4034-325-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4034-325-COT26",
        "producto": "ARTÍCULOS DE OFICINA PARA ESTABLECIMIENTOS DE LA COMUNA, SP 66 – FONDOS FAEP 2024",
        "cantidad": 1,
        "precioUnitario": 1008000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "692276-7-COT26",
    "codigo": "692276-7-COT26",
    "titulo": "ADQUISICIÓN DE INSUMOS DE ENTOMOLOGÍA",
    "organismo": "UNIVERSIDAD METROPOLITANA DE CIENCIAS DE LA EDUCACION",
    "organismoRut": "42.997.286-7",
    "organismoPagoDias": 41,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 970650,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-21",
    "matchScore": 83,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICIÓN DE INSUMOS DE ENTOMOLOGÍA. Organismo demandante: UNIVERSIDAD METROPOLITANA DE CIENCIAS DE LA EDUCACION. Unidad de compra: INSTITUTO DE ENTOMOLOGIA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:40"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "21/07/2026 10:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_692276-7-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-692276-7-COT26",
        "producto": "ADQUISICIÓN DE INSUMOS DE ENTOMOLOGÍA",
        "cantidad": 1,
        "precioUnitario": 970650
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2294-1349-COT26",
    "codigo": "2294-1349-COT26",
    "titulo": "NP29 - LIC AMELIA COURBIS - MANTENCIÓN - LEY SEP",
    "organismo": "I MUNICIPALIDAD DE TALCA",
    "organismoRut": "23.340.485-6",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Maule",
    "monto": 2149500,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 97,
    "riesgo": "Medio",
    "descripcion": "Proceso: NP29 - LIC AMELIA COURBIS - MANTENCIÓN - LEY SEP. Organismo demandante: I MUNICIPALIDAD DE TALCA. Unidad de compra: DEPT. EDUCACION COMUNAL.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:40"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 16:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2294-1349-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2294-1349-COT26",
        "producto": "NP29 - LIC AMELIA COURBIS - MANTENCIÓN - LEY SEP",
        "cantidad": 1,
        "precioUnitario": 2149500
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2393-979-COT26",
    "codigo": "2393-979-COT26",
    "titulo": "ENGRAPADORA SEMIINDUSTRIAL PARA HASTA 100 HOJAS.",
    "organismo": "I MUNICIPALIDAD PEDRO AGUIRRE CERDA",
    "organismoRut": "28.773.827-8",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 180000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 81,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ENGRAPADORA SEMIINDUSTRIAL PARA HASTA 100 HOJAS.. Organismo demandante: I MUNICIPALIDAD PEDRO AGUIRRE CERDA. Unidad de compra: DEPARTAMENTO DE ADQUISICIONES.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:40"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:35"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2393-979-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2393-979-COT26",
        "producto": "ENGRAPADORA SEMIINDUSTRIAL PARA HASTA 100 HOJAS.",
        "cantidad": 1,
        "precioUnitario": 30000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3013-466-COT26",
    "codigo": "3013-466-COT26",
    "titulo": "Utiles de aseo",
    "organismo": "ILUSTRE MUNICIPALIDAD DE RETIRO",
    "organismoRut": "89.561.242-6",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 400000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Utiles de aseo. Organismo demandante: ILUSTRE MUNICIPALIDAD DE RETIRO. Unidad de compra: Adquisiciones.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:40"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 09:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3013-466-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3013-466-COT26",
        "producto": "Utiles de aseo",
        "cantidad": 1,
        "precioUnitario": 400000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3017-516-COT26",
    "codigo": "3017-516-COT26",
    "titulo": "TIMBRES AUTOMATICOS PARA SEGURIDAD PUBLICA, LOTA",
    "organismo": "I MUNICIPALIDAD DE LOTA",
    "organismoRut": "37.654.264-1",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Biobío",
    "monto": 180000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: TIMBRES AUTOMATICOS PARA SEGURIDAD PUBLICA, LOTA. Organismo demandante: I MUNICIPALIDAD DE LOTA. Unidad de compra: Departamento de Adquisiciones.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:39"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3017-516-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3017-516-COT26",
        "producto": "TIMBRES AUTOMATICOS PARA SEGURIDAD PUBLICA, LOTA",
        "cantidad": 1,
        "precioUnitario": 50000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1218393-119-COT26",
    "codigo": "1218393-119-COT26",
    "titulo": "Materiales de ferretería para mantenciones y proyectos de mejoras CESFAM Externo Valdivia",
    "organismo": "CONSULTORIO EXTERNO VALDIVIA",
    "organismoRut": "38.721.380-7",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Los Ríos",
    "monto": 655000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Materiales de ferretería para mantenciones y proyectos de mejoras CESFAM Externo Valdivia. Organismo demandante: CONSULTORIO EXTERNO VALDIVIA. Unidad de compra: BIENES Y SERVICIOS.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:38"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1218393-119-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1218393-119-COT26",
        "producto": "Materiales de ferretería para mantenciones y proyectos de mejoras CESFAM Externo Valdivia",
        "cantidad": 1,
        "precioUnitario": 655000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1432083-945-COT26",
    "codigo": "1432083-945-COT26",
    "titulo": "AN, MULTI RBD, S.C. 2388-2576-2674-2698-2701-2709, 1568, SEP-S.GRAL, TINTAS Y TONERS, 2204009, ESCUELA CHILE ,ESCUELA RURAL LOS MOLINOS Y BONIFACIO, LICEO BICENTENARIO Y COMERCIAL, COLEGIO DEPORTIVO",
    "organismo": "Servicio local de educación pública de Valdivia",
    "organismoRut": "34.217.425-8",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Los Ríos",
    "monto": 3303712,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 80,
    "riesgo": "Medio",
    "descripcion": "Proceso: AN, MULTI RBD, S.C. 2388-2576-2674-2698-2701-2709, 1568, SEP-S.GRAL, TINTAS Y TONERS, 2204009, ESCUELA CHILE ,ESCUELA RURAL LOS MOLINOS Y BONIFACIO, LICEO BICENTENARIO Y COMERCIAL, COLEGIO DEPORTIVO. Organismo demandante: Servicio local de educación pública de Valdivia. Unidad de compra: P02 Establecimientos Educacionales.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:37"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1432083-945-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1432083-945-COT26",
        "producto": "AN, MULTI RBD, S.C. 2388-2576-2674-2698-2701-2709, 1568, SEP-S.GRAL, TINTAS Y TONERS, 2204009, ESCUELA CHILE ,ESCUELA RURAL LOS MOLINOS Y BONIFACIO, LICEO BICENTENARIO Y COMERCIAL, COLEGIO DEPORTIVO",
        "cantidad": 1,
        "precioUnitario": 5453712
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3803-76-COT26",
    "codigo": "3803-76-COT26",
    "titulo": "kit de emergencia",
    "organismo": "I MUNICIPALIDAD DE QUILACO",
    "organismoRut": "29.700.590-1",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 540000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso: kit de emergencia. Organismo demandante: I MUNICIPALIDAD DE QUILACO. Unidad de compra: Salud.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:37"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3803-76-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3803-76-COT26",
        "producto": "kit de emergencia",
        "cantidad": 1,
        "precioUnitario": 540000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2328-757-COT26",
    "codigo": "2328-757-COT26",
    "titulo": "ESCUELA ANAHUAC - LIBROS PREBASICA F 23999",
    "organismo": "I MUNICIPALIDAD DE PUERTO MONTT",
    "organismoRut": "18.546.223-K",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Los Lagos",
    "monto": 2163040,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 79,
    "riesgo": "Medio",
    "descripcion": "Proceso: ESCUELA ANAHUAC - LIBROS PREBASICA F 23999. Organismo demandante: I MUNICIPALIDAD DE PUERTO MONTT. Unidad de compra: Unidad de Adquisiciones Dirección de Educación.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:36"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2328-757-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2328-757-COT26",
        "producto": "ESCUELA ANAHUAC - LIBROS PREBASICA F 23999",
        "cantidad": 1,
        "precioUnitario": 2163040
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "780724-54-COT26",
    "codigo": "780724-54-COT26",
    "titulo": "ADQUISICIÓN DE 2 MEMORIAS RAM PARA NOTEBOOK PARA EL TERCER TRIBUNAL AMBIENTAL",
    "organismo": "ILUSTRE TERCER TRIBUNAL AMBIENTAL",
    "organismoRut": "67.423.317-3",
    "organismoPagoDias": 40,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 350000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 82,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICIÓN DE 2 MEMORIAS RAM PARA NOTEBOOK PARA EL TERCER TRIBUNAL AMBIENTAL. Organismo demandante: ILUSTRE TERCER TRIBUNAL AMBIENTAL. Unidad de compra: Ilustre Tercer Tribunal Ambiental.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:35"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_780724-54-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-780724-54-COT26",
        "producto": "ADQUISICIÓN DE 2 MEMORIAS RAM PARA NOTEBOOK PARA EL TERCER TRIBUNAL AMBIENTAL",
        "cantidad": 1,
        "precioUnitario": 350000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1718-751-COT26",
    "codigo": "1718-751-COT26",
    "titulo": "MUNICIPAL/SIC N°19646/SUBDIRECCION DE ADMINISTRACION Y FINANZAS/COMPRA DE MATERIALES DE FERRETERIA",
    "organismo": "I MUNICIPALIDAD DE SAN RAMON",
    "organismoRut": "37.008.677-2",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 380000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: MUNICIPAL/SIC N°19646/SUBDIRECCION DE ADMINISTRACION Y FINANZAS/COMPRA DE MATERIALES DE FERRETERIA. Organismo demandante: I MUNICIPALIDAD DE SAN RAMON. Unidad de compra: Departamento de Adquisiciones San Ramon.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:35"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1718-751-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1718-751-COT26",
        "producto": "MUNICIPAL/SIC N°19646/SUBDIRECCION DE ADMINISTRACION Y FINANZAS/COMPRA DE MATERIALES DE FERRETERIA",
        "cantidad": 1,
        "precioUnitario": 380000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2777-342-COT26",
    "codigo": "2777-342-COT26",
    "titulo": "MATERIALES PARA IMPRESION DE CREDENCIAL PARA EL DEPARTAMENTO DE SALUD",
    "organismo": "I MUNICIPALIDAD DE RENGO",
    "organismoRut": "21.614.667-0",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "O'Higgins",
    "monto": 300000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: MATERIALES PARA IMPRESION DE CREDENCIAL PARA EL DEPARTAMENTO DE SALUD. Organismo demandante: I MUNICIPALIDAD DE RENGO. Unidad de compra: ADQUISICION MUNI-SALUD.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:34"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 08:15"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2777-342-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2777-342-COT26",
        "producto": "MATERIALES PARA IMPRESION DE CREDENCIAL PARA EL DEPARTAMENTO DE SALUD",
        "cantidad": 1,
        "precioUnitario": 300000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2859-727-COT26",
    "codigo": "2859-727-COT26",
    "titulo": "Servicio de Impresión  de Flyers y Afiches",
    "organismo": "UNIVERSIDAD DE ATACAMA",
    "organismoRut": "23.424.035-2",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Atacama",
    "monto": 100000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-21",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Servicio de Impresión  de Flyers y Afiches. Organismo demandante: UNIVERSIDAD DE ATACAMA. Unidad de compra: SECCIÓN ABASTECIMIENTO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:34"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "21/07/2026 17:35"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2859-727-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2859-727-COT26",
        "producto": "Servicio de Impresión  de Flyers y Afiches",
        "cantidad": 1,
        "precioUnitario": 100000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "5542-82-COT26",
    "codigo": "5542-82-COT26",
    "titulo": "Compra Artículos de Aseo",
    "organismo": "UNIVERSIDAD DE CHILE",
    "organismoRut": "89.728.640-K",
    "organismoPagoDias": 41,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 83,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Compra Artículos de Aseo. Organismo demandante: UNIVERSIDAD DE CHILE. Unidad de compra: FCFM Departamento de Geofísica.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:33"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_5542-82-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-5542-82-COT26",
        "producto": "Compra Artículos de Aseo",
        "cantidad": 1,
        "precioUnitario": 500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4280-249-COT26",
    "codigo": "4280-249-COT26",
    "titulo": "SE SOLICITA COTIZAR MATERIALES DE OFICINA Y DIDACTICOS PARA USO PROGRAMAS MUNICIPALES.",
    "organismo": "I MUNICIPALIDAD DE CATEMU",
    "organismoRut": "31.657.073-0",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1227370,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: SE SOLICITA COTIZAR MATERIALES DE OFICINA Y DIDACTICOS PARA USO PROGRAMAS MUNICIPALES.. Organismo demandante: I MUNICIPALIDAD DE CATEMU. Unidad de compra: Finanzas.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:33"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4280-249-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4280-249-COT26",
        "producto": "SE SOLICITA COTIZAR MATERIALES DE OFICINA Y DIDACTICOS PARA USO PROGRAMAS MUNICIPALES.",
        "cantidad": 1,
        "precioUnitario": 1227370
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4229-101-COT26",
    "codigo": "4229-101-COT26",
    "titulo": "ADQUISICION DE AGENDAS PARA CARABINEROS ALUMNOS",
    "organismo": "Carabineros de Chile - VIII Zona Bio Bio",
    "organismoRut": "67.785.989-K",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1850000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Medio",
    "descripcion": "Proceso: ADQUISICION DE AGENDAS PARA CARABINEROS ALUMNOS. Organismo demandante: Carabineros de Chile - VIII Zona Bio Bio. Unidad de compra: Escuela Formación Grupo Concepción.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:33"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4229-101-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4229-101-COT26",
        "producto": "ADQUISICION DE AGENDAS PARA CARABINEROS ALUMNOS",
        "cantidad": 1,
        "precioUnitario": 4000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3858-249-COT26",
    "codigo": "3858-249-COT26",
    "titulo": "MATERIAL DE ASEO SEGUNDO SEMESTRE JARDÍN CARACOLITO",
    "organismo": "I MUNICIPALIDAD DE MEJILLONES",
    "organismoRut": "12.340.548-8",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Medio",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 1500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: MATERIAL DE ASEO SEGUNDO SEMESTRE JARDÍN CARACOLITO. Organismo demandante: I MUNICIPALIDAD DE MEJILLONES. Unidad de compra: Educacion.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:33"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3858-249-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3858-249-COT26",
        "producto": "MATERIAL DE ASEO SEGUNDO SEMESTRE JARDÍN CARACOLITO",
        "cantidad": 1,
        "precioUnitario": 1500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "759916-49-COT26",
    "codigo": "759916-49-COT26",
    "titulo": "INSUMOS DE ECONOMATO SALA IRA Y ERA",
    "organismo": "SERVICIO SALUD METROPOLITANO OCCIDENTE",
    "organismoRut": "43.391.050-6",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 376140,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 81,
    "riesgo": "Bajo",
    "descripcion": "Proceso: INSUMOS DE ECONOMATO SALA IRA Y ERA. Organismo demandante: SERVICIO SALUD METROPOLITANO OCCIDENTE. Unidad de compra: CESFAM ANDES.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:32"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_759916-49-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-759916-49-COT26",
        "producto": "INSUMOS DE ECONOMATO SALA IRA Y ERA",
        "cantidad": 1,
        "precioUnitario": 376140
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "5667-97-COT26",
    "codigo": "5667-97-COT26",
    "titulo": "ADQ. MANTAS Y PONCHO, S.C. N°32, GRA, EDUCACIÓN, CVG",
    "organismo": "SEREMI de Educación Arica y Parinacota",
    "organismoRut": "14.323.888-K",
    "organismoPagoDias": 42,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Arica y Parinacota",
    "monto": 694960,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-18",
    "matchScore": 84,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQ. MANTAS Y PONCHO, S.C. N°32, GRA, EDUCACIÓN, CVG. Organismo demandante: SEREMI de Educación Arica y Parinacota. Unidad de compra: Secretaría Ministerial de Educación Arica y Parinacota.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:32"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "18/07/2026 21:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_5667-97-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-5667-97-COT26",
        "producto": "ADQ. MANTAS Y PONCHO, S.C. N°32, GRA, EDUCACIÓN, CVG",
        "cantidad": 1,
        "precioUnitario": 694960
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2427-767-COT26",
    "codigo": "2427-767-COT26",
    "titulo": "ADQUISICIÓN ARTÍCULOS DE ASEO_DESARROLLO COMUNITARIO",
    "organismo": "I MUNICIPALIDAD DE VALPARAISO",
    "organismoRut": "27.700.676-0",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Medio",
    "rubro": "Aseo e Higiene",
    "region": "Valparaíso",
    "monto": 1544000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 79,
    "riesgo": "Medio",
    "descripcion": "Proceso: ADQUISICIÓN ARTÍCULOS DE ASEO_DESARROLLO COMUNITARIO. Organismo demandante: I MUNICIPALIDAD DE VALPARAISO. Unidad de compra: ABASTECIMIENTO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:31"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 17:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2427-767-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2427-767-COT26",
        "producto": "ADQUISICIÓN ARTÍCULOS DE ASEO_DESARROLLO COMUNITARIO",
        "cantidad": 1,
        "precioUnitario": 1544000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3533-263-COT26",
    "codigo": "3533-263-COT26",
    "titulo": "Adquisición de materiales de enseñanza (Reserva Militar)",
    "organismo": "Ejercito de Chile",
    "organismoRut": "90.520.203-8",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 116330,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de materiales de enseñanza (Reserva Militar). Organismo demandante: Ejercito de Chile. Unidad de compra: Regimiento de Caballería Nº 3 Húsares - RC Nº 3.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:31"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3533-263-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3533-263-COT26",
        "producto": "Adquisición de materiales de enseñanza (Reserva Militar)",
        "cantidad": 1,
        "precioUnitario": 116330
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1051765-199-COT26",
    "codigo": "1051765-199-COT26",
    "titulo": "CPF Bulnes, Adquisición de Materiales de Arte Educador.",
    "organismo": "Dirección Regional de Ñuble",
    "organismoRut": "56.788.837-9",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Ñuble",
    "monto": 405550,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: CPF Bulnes, Adquisición de Materiales de Arte Educador.. Organismo demandante: Dirección Regional de Ñuble. Unidad de compra: Región de Ñuble.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:31"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 18:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1051765-199-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1051765-199-COT26",
        "producto": "CPF Bulnes, Adquisición de Materiales de Arte Educador.",
        "cantidad": 1,
        "precioUnitario": 405550
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2109-502-COT26",
    "codigo": "2109-502-COT26",
    "titulo": "ETIQUETA DE PLÁSTICO PARA CESTAS.",
    "organismo": "SERVICIO DE SALUD OCCIDENTE INSTITUTO TRAUMATOLOGICO DE SANTIAGO",
    "organismoRut": "70.492.566-8",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1000000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ETIQUETA DE PLÁSTICO PARA CESTAS.. Organismo demandante: SERVICIO DE SALUD OCCIDENTE INSTITUTO TRAUMATOLOGICO DE SANTIAGO. Unidad de compra: Abastecimiento y Farmacia.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:29"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2109-502-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2109-502-COT26",
        "producto": "ETIQUETA DE PLÁSTICO PARA CESTAS.",
        "cantidad": 1,
        "precioUnitario": 1000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1755-239-COT26",
    "codigo": "1755-239-COT26",
    "titulo": "Artículos escolares. SOL80_EDUC26_JMC",
    "organismo": "SECRETARIA REGIONAL MINISTERIAL DE EDUCACION VII REGION",
    "organismoRut": "57.414.599-0",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 750000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 97,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Artículos escolares. SOL80_EDUC26_JMC. Organismo demandante: SECRETARIA REGIONAL MINISTERIAL DE EDUCACION VII REGION. Unidad de compra: Mineduc Administración VII Región.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:29"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1755-239-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1755-239-COT26",
        "producto": "Artículos escolares. SOL80_EDUC26_JMC",
        "cantidad": 1,
        "precioUnitario": 750000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1350293-21-COT26",
    "codigo": "1350293-21-COT26",
    "titulo": "\"Servicio artístico cultural de Chinchinero y Organillero tradicional para actividad aniversario Casa de la Cultura y el Arte de Nacimiento\"",
    "organismo": "CORPORACION CULTURAL MUNICIPAL DE NACIMIENTO",
    "organismoRut": "80.913.107-2",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 97,
    "riesgo": "Bajo",
    "descripcion": "Proceso: \"Servicio artístico cultural de Chinchinero y Organillero tradicional para actividad aniversario Casa de la Cultura y el Arte de Nacimiento\". Organismo demandante: CORPORACION CULTURAL MUNICIPAL DE NACIMIENTO. Unidad de compra: CORPORACION CULTURAL MUNICIPAL DE NACIMIENTO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:27"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 16:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1350293-21-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1350293-21-COT26",
        "producto": "\"Servicio artístico cultural de Chinchinero y Organillero tradicional para actividad aniversario Casa de la Cultura y el Arte de Nacimiento\"",
        "cantidad": 1,
        "precioUnitario": 500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2773-223-COT26",
    "codigo": "2773-223-COT26",
    "titulo": "CORTINA, MUEBLE, SILLA, BASURERO Y CAJAS PLASTICAS",
    "organismo": "I MUNICIPALIDAD DE CHIGUAYANTE",
    "organismoRut": "79.280.048-2",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 640000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: CORTINA, MUEBLE, SILLA, BASURERO Y CAJAS PLASTICAS. Organismo demandante: I MUNICIPALIDAD DE CHIGUAYANTE. Unidad de compra: DIRECCION DE ADMINISTRACION DE SALUD.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:27"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 13:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2773-223-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2773-223-COT26",
        "producto": "CORTINA, MUEBLE, SILLA, BASURERO Y CAJAS PLASTICAS",
        "cantidad": 1,
        "precioUnitario": 640000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1075956-43-COT26",
    "codigo": "1075956-43-COT26",
    "titulo": "ADQUISICIÓN DE MATERIALES DE OFICINA- SEGÚN TÉRMINOS DE REFERENCIA- ANEXO N° 1 DECLARACIÓN PROGRAMA INTEGRIDAD \"OBLIGATORIO\" - PRESUPUESTO DISPONIBLE $177.806.",
    "organismo": "DEPARTAMENTO CONTROL FINANCIERO",
    "organismoRut": "46.104.483-9",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 177806,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-24",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICIÓN DE MATERIALES DE OFICINA- SEGÚN TÉRMINOS DE REFERENCIA- ANEXO N° 1 DECLARACIÓN PROGRAMA INTEGRIDAD \"OBLIGATORIO\" - PRESUPUESTO DISPONIBLE $177.806.. Organismo demandante: DEPARTAMENTO CONTROL FINANCIERO. Unidad de compra: DEPTO ANALISIS FINANCIERO PROCESOS Y RIESGOS.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:25"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "24/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1075956-43-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1075956-43-COT26",
        "producto": "ADQUISICIÓN DE MATERIALES DE OFICINA- SEGÚN TÉRMINOS DE REFERENCIA- ANEXO N° 1 DECLARACIÓN PROGRAMA INTEGRIDAD \"OBLIGATORIO\" - PRESUPUESTO DISPONIBLE $177.806.",
        "cantidad": 1,
        "precioUnitario": 177806
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "5613-303-COT26",
    "codigo": "5613-303-COT26",
    "titulo": "LIBRETAS Y LÁPICES PASTA",
    "organismo": "UNIVERSIDAD DE CHILE",
    "organismoRut": "89.728.640-K",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 650000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: LIBRETAS Y LÁPICES PASTA. Organismo demandante: UNIVERSIDAD DE CHILE. Unidad de compra: UCHILE Facultad de Cs. Forestales.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:23"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_5613-303-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-5613-303-COT26",
        "producto": "LIBRETAS Y LÁPICES PASTA",
        "cantidad": 1,
        "precioUnitario": 650000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4127-69-COT26",
    "codigo": "4127-69-COT26",
    "titulo": "DIVAP. Impresión, Adquisición y Distribución de placas JIALMA/IHAN y kit de evaluador IHAN",
    "organismo": "SUBSECRETARIA DE REDES ASISTENCIALES",
    "organismoRut": "87.755.929-9",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2010000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-24",
    "matchScore": 80,
    "riesgo": "Medio",
    "descripcion": "Proceso: DIVAP. Impresión, Adquisición y Distribución de placas JIALMA/IHAN y kit de evaluador IHAN. Organismo demandante: SUBSECRETARIA DE REDES ASISTENCIALES. Unidad de compra: Subsecretaria de Redes Asistenciales.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:21"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "24/07/2026 13:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4127-69-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4127-69-COT26",
        "producto": "DIVAP. Impresión, Adquisición y Distribución de placas JIALMA/IHAN y kit de evaluador IHAN",
        "cantidad": 1,
        "precioUnitario": 4160000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2464-1046-COT26",
    "codigo": "2464-1046-COT26",
    "titulo": "ADQUISICIÓN DE TIMBRE Y CORCHETERA SEGÚN OP 31/ UDEL PRODESAL.",
    "organismo": "I MUNICIPALIDAD DE QUILLOTA",
    "organismoRut": "67.699.505-7",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Valparaíso",
    "monto": 359000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 97,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICIÓN DE TIMBRE Y CORCHETERA SEGÚN OP 31/ UDEL PRODESAL.. Organismo demandante: I MUNICIPALIDAD DE QUILLOTA. Unidad de compra: IMUNI_QUILLOTA ADQUISICIONES.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:21"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2464-1046-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2464-1046-COT26",
        "producto": "ADQUISICIÓN DE TIMBRE Y CORCHETERA SEGÚN OP 31/ UDEL PRODESAL.",
        "cantidad": 1,
        "precioUnitario": 64979
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4034-324-COT26",
    "codigo": "4034-324-COT26",
    "titulo": "SE REQUIERE INSUMOS COMPUTACIONALES, ORD. N° 092 Y 130, LICEO F-832, FONDOS SEP 90%",
    "organismo": "Ilustre Municipalidad de Cañete - Educación",
    "organismoRut": "66.926.810-7",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2675000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 77,
    "riesgo": "Medio",
    "descripcion": "Proceso: SE REQUIERE INSUMOS COMPUTACIONALES, ORD. N° 092 Y 130, LICEO F-832, FONDOS SEP 90%. Organismo demandante: Ilustre Municipalidad de Cañete - Educación. Unidad de compra: Daem.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:21"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4034-324-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4034-324-COT26",
        "producto": "SE REQUIERE INSUMOS COMPUTACIONALES, ORD. N° 092 Y 130, LICEO F-832, FONDOS SEP 90%",
        "cantidad": 1,
        "precioUnitario": 2675000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1398-370-COT26",
    "codigo": "1398-370-COT26",
    "titulo": "Adquisición de Elementos Ergonómicos",
    "organismo": "SERVICIO DE SALUD LIBERTADOR BDO OHIGGINS",
    "organismoRut": "82.701.761-0",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2870000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 98,
    "riesgo": "Medio",
    "descripcion": "Proceso: Adquisición de Elementos Ergonómicos. Organismo demandante: SERVICIO DE SALUD LIBERTADOR BDO OHIGGINS. Unidad de compra: Servicio de Salud Ohiggins.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:21"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 15:01"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1398-370-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1398-370-COT26",
        "producto": "Adquisición de Elementos Ergonómicos",
        "cantidad": 1,
        "precioUnitario": 2870000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1126922-528-COT26",
    "codigo": "1126922-528-COT26",
    "titulo": "RBD 7975 PIE PG02 ADQUISICIÓN DE MATERIAL DIDÁCTICO PARA  ESCUELA ARTURO ALESSANDRI PALMA COMUNA FRUTILLAR",
    "organismo": "SERVICIO LOCAL DE EDUCACION PUBLICA DE LLANQUIHUE",
    "organismoRut": "35.448.336-3",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2999548,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 76,
    "riesgo": "Medio",
    "descripcion": "Proceso: RBD 7975 PIE PG02 ADQUISICIÓN DE MATERIAL DIDÁCTICO PARA  ESCUELA ARTURO ALESSANDRI PALMA COMUNA FRUTILLAR. Organismo demandante: SERVICIO LOCAL DE EDUCACION PUBLICA DE LLANQUIHUE. Unidad de compra: SERVICIO LOCAL DE EDUCACION PUBLICA DE LLANQUIHUE.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:21"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1126922-528-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1126922-528-COT26",
        "producto": "RBD 7975 PIE PG02 ADQUISICIÓN DE MATERIAL DIDÁCTICO PARA  ESCUELA ARTURO ALESSANDRI PALMA COMUNA FRUTILLAR",
        "cantidad": 1,
        "precioUnitario": 2999548
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "707412-33-COT26",
    "codigo": "707412-33-COT26",
    "titulo": "Material Gráfico Adhesivo “Proyecto mi Memoria”",
    "organismo": "FUNDACION EDUCACIONAL PARA EL DESAROLLO INTEGRAL DE LA NIÑEZ",
    "organismoRut": "81.436.996-K",
    "organismoPagoDias": 38,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 216000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Material Gráfico Adhesivo “Proyecto mi Memoria”. Organismo demandante: FUNDACION EDUCACIONAL PARA EL DESAROLLO INTEGRAL DE LA NIÑEZ. Unidad de compra: Regional Tarapaca.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:21"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 14:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_707412-33-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-707412-33-COT26",
        "producto": "Material Gráfico Adhesivo “Proyecto mi Memoria”",
        "cantidad": 1,
        "precioUnitario": 216000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "778992-164-COT26",
    "codigo": "778992-164-COT26",
    "titulo": "ADQUISICION DE VESTUARIO Y CALZADO PARA LE PERSONAL COCINEROS Y MAYORDOMOS CASINO SUB",
    "organismo": "Regimiento Reforzado N° 1 \"Calama\"",
    "organismoRut": "17.667.165-4",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Antofagasta",
    "monto": 1500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-28",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICION DE VESTUARIO Y CALZADO PARA LE PERSONAL COCINEROS Y MAYORDOMOS CASINO SUB. Organismo demandante: Regimiento Reforzado N° 1 \"Calama\". Unidad de compra: Brigada Motorizada N° 1 \"Calama\" - BRIMOT N 1.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:20"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "28/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_778992-164-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-778992-164-COT26",
        "producto": "ADQUISICION DE VESTUARIO Y CALZADO PARA LE PERSONAL COCINEROS Y MAYORDOMOS CASINO SUB",
        "cantidad": 1,
        "precioUnitario": 1500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1658-1054-COT26",
    "codigo": "1658-1054-COT26",
    "titulo": "ADQUISICIÓN DE MANUALES DE EDUCACIÓN AMBIENTAL PARA ACTIVIDADES CON LA COMUNIDAD, PROGRAMA RECURSOS HÍDRICOS Y BIODIVERSIDAD",
    "organismo": "I MUNICIPALIDAD DE TEMUCO",
    "organismoRut": "81.460.899-5",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "La Araucanía",
    "monto": 600000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQUISICIÓN DE MANUALES DE EDUCACIÓN AMBIENTAL PARA ACTIVIDADES CON LA COMUNIDAD, PROGRAMA RECURSOS HÍDRICOS Y BIODIVERSIDAD. Organismo demandante: I MUNICIPALIDAD DE TEMUCO. Unidad de compra: I MUNICIPALIDAD DE TEMUCO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:20"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1658-1054-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1658-1054-COT26",
        "producto": "ADQUISICIÓN DE MANUALES DE EDUCACIÓN AMBIENTAL PARA ACTIVIDADES CON LA COMUNIDAD, PROGRAMA RECURSOS HÍDRICOS Y BIODIVERSIDAD",
        "cantidad": 1,
        "precioUnitario": 600000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2328-754-COT26",
    "codigo": "2328-754-COT26",
    "titulo": "ESCUELA MIRASOL - ENTRADAS PARQUE KATALAPI - 24027",
    "organismo": "I MUNICIPALIDAD DE PUERTO MONTT",
    "organismoRut": "18.546.223-K",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Los Lagos",
    "monto": 1020000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ESCUELA MIRASOL - ENTRADAS PARQUE KATALAPI - 24027. Organismo demandante: I MUNICIPALIDAD DE PUERTO MONTT. Unidad de compra: Unidad de Adquisiciones Dirección de Educación.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:16"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2328-754-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2328-754-COT26",
        "producto": "ESCUELA MIRASOL - ENTRADAS PARQUE KATALAPI - 24027",
        "cantidad": 1,
        "precioUnitario": 1020000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3416-164-COT26",
    "codigo": "3416-164-COT26",
    "titulo": "FOCOS LED PARA BIBLIOTECA",
    "organismo": "Ejercito de Chile",
    "organismoRut": "90.520.203-8",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 2781804,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 98,
    "riesgo": "Medio",
    "descripcion": "Proceso: FOCOS LED PARA BIBLIOTECA. Organismo demandante: Ejercito de Chile. Unidad de compra: Escuela Militar -ESCMIL.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:16"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3416-164-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3416-164-COT26",
        "producto": "FOCOS LED PARA BIBLIOTECA",
        "cantidad": 1,
        "precioUnitario": 2781804
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2109-501-COT26",
    "codigo": "2109-501-COT26",
    "titulo": "Dispensadores de cinta adhesiva.",
    "organismo": "SERVICIO DE SALUD OCCIDENTE INSTITUTO TRAUMATOLOGICO DE SANTIAGO",
    "organismoRut": "70.492.566-8",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 77,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Dispensadores de cinta adhesiva.. Organismo demandante: SERVICIO DE SALUD OCCIDENTE INSTITUTO TRAUMATOLOGICO DE SANTIAGO. Unidad de compra: Abastecimiento y Farmacia.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:14"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2109-501-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2109-501-COT26",
        "producto": "Dispensadores de cinta adhesiva.",
        "cantidad": 1,
        "precioUnitario": 500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2333-447-COT26",
    "codigo": "2333-447-COT26",
    "titulo": "ESTACIÓN DE ENREGIA PORTATIL",
    "organismo": "I MUNICIPALIDAD DE LINARES",
    "organismoRut": "87.905.976-8",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Maule",
    "monto": 700000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ESTACIÓN DE ENREGIA PORTATIL. Organismo demandante: I MUNICIPALIDAD DE LINARES. Unidad de compra: ILUSTRE MUNICIPALIDAD DE LINARES.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:13"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 15:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2333-447-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2333-447-COT26",
        "producto": "ESTACIÓN DE ENREGIA PORTATIL",
        "cantidad": 1,
        "precioUnitario": 700000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2333-446-COT26",
    "codigo": "2333-446-COT26",
    "titulo": "MATERIALES DE OFICINA",
    "organismo": "I MUNICIPALIDAD DE LINARES",
    "organismoRut": "87.905.976-8",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Maule",
    "monto": 669732,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: MATERIALES DE OFICINA. Organismo demandante: I MUNICIPALIDAD DE LINARES. Unidad de compra: ILUSTRE MUNICIPALIDAD DE LINARES.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:13"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 08:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2333-446-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2333-446-COT26",
        "producto": "MATERIALES DE OFICINA",
        "cantidad": 1,
        "precioUnitario": 669732
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2759-371-COT26",
    "codigo": "2759-371-COT26",
    "titulo": "COMPRA DE CAJAS DE ARCHIVOS STANDAR DE 40X15X26 CM DE CARTON",
    "organismo": "I MUNICIPALIDAD DE CORONEL",
    "organismoRut": "56.189.652-2",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Biobío",
    "monto": 500000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: COMPRA DE CAJAS DE ARCHIVOS STANDAR DE 40X15X26 CM DE CARTON. Organismo demandante: I MUNICIPALIDAD DE CORONEL. Unidad de compra: DEPTO. ADQUISICIONES MUNICIPIO.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:12"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2759-371-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2759-371-COT26",
        "producto": "COMPRA DE CAJAS DE ARCHIVOS STANDAR DE 40X15X26 CM DE CARTON",
        "cantidad": 1,
        "precioUnitario": 500000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3516-433-COT26",
    "codigo": "3516-433-COT26",
    "titulo": "SERVICIO DE DIFUSIÓN EN PERIÓDICO IMPRESO PARA LA MUNICIPALIDAD DE CARAHUE",
    "organismo": "I MUNICIPALIDAD DE CARAHUE",
    "organismoRut": "14.959.187-4",
    "organismoPagoDias": 35,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 3550000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-21",
    "matchScore": 77,
    "riesgo": "Medio",
    "descripcion": "Proceso: SERVICIO DE DIFUSIÓN EN PERIÓDICO IMPRESO PARA LA MUNICIPALIDAD DE CARAHUE. Organismo demandante: I MUNICIPALIDAD DE CARAHUE. Unidad de compra: Adquisiciones.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:10"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "21/07/2026 09:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3516-433-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3516-433-COT26",
        "producto": "SERVICIO DE DIFUSIÓN EN PERIÓDICO IMPRESO PARA LA MUNICIPALIDAD DE CARAHUE",
        "cantidad": 1,
        "precioUnitario": 3550000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4856-148-COT26",
    "codigo": "4856-148-COT26",
    "titulo": "S.A. N°1074 Adquisición insumos Abordaje al dolor crónico Kume Monguen Quidico",
    "organismo": "I MUNICIPALIDAD DE TIRUA",
    "organismoRut": "23.585.137-7",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 350000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: S.A. N°1074 Adquisición insumos Abordaje al dolor crónico Kume Monguen Quidico. Organismo demandante: I MUNICIPALIDAD DE TIRUA. Unidad de compra: Salud.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 12:04"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 13:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4856-148-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4856-148-COT26",
        "producto": "S.A. N°1074 Adquisición insumos Abordaje al dolor crónico Kume Monguen Quidico",
        "cantidad": 1,
        "precioUnitario": 350000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1718-748-COT26",
    "codigo": "1718-748-COT26",
    "titulo": "AREA MUNICIPAL/SIC 20256/DOM/2 TIMBRES",
    "organismo": "I MUNICIPALIDAD DE SAN RAMON",
    "organismoRut": "37.008.677-2",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 380000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: AREA MUNICIPAL/SIC 20256/DOM/2 TIMBRES. Organismo demandante: I MUNICIPALIDAD DE SAN RAMON. Unidad de compra: Departamento de Adquisiciones San Ramon.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 11:14"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1718-748-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1718-748-COT26",
        "producto": "AREA MUNICIPAL/SIC 20256/DOM/2 TIMBRES",
        "cantidad": 1,
        "precioUnitario": 55800
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "648752-30-COT26",
    "codigo": "648752-30-COT26",
    "titulo": "UTILES DE ASEO",
    "organismo": "Ejercito de Chile",
    "organismoRut": "90.520.203-8",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Aseo e Higiene",
    "region": "Metropolitana",
    "monto": 157000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-21",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: UTILES DE ASEO. Organismo demandante: Ejercito de Chile. Unidad de compra: Jefatura de Sanidad Militar - JESAM.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 11:13"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "21/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_648752-30-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-648752-30-COT26",
        "producto": "UTILES DE ASEO",
        "cantidad": 1,
        "precioUnitario": 157000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Prisa S.A. Logística",
        "rut": "96.502.130-9",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Inder-Roll",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3387-106-COT26",
    "codigo": "3387-106-COT26",
    "titulo": "Adquisición de elementos de escritorio para la Unidad",
    "organismo": "Ejercito de Chile",
    "organismoRut": "90.520.203-8",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 350942,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Adquisición de elementos de escritorio para la Unidad. Organismo demandante: Ejercito de Chile. Unidad de compra: Regimiento Logístico del Ejército Nº1 Bellavista - RLE Nº1.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 11:13"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:30"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3387-106-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3387-106-COT26",
        "producto": "Adquisición de elementos de escritorio para la Unidad",
        "cantidad": 1,
        "precioUnitario": 350942
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1079445-449-COT26",
    "codigo": "1079445-449-COT26",
    "titulo": "ADQ. DE LETREROS ACRÍLICOS DESTINADOS A LA DIFUSIÓN DE LOS PRINCIPIOS INSTITUCIONALES, PARA EL DEAOPERPOL MAGALLANES",
    "organismo": "SECCIÓN COMPRAS XII ZONA",
    "organismoRut": "60.558.103-4",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 145000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: ADQ. DE LETREROS ACRÍLICOS DESTINADOS A LA DIFUSIÓN DE LOS PRINCIPIOS INSTITUCIONALES, PARA EL DEAOPERPOL MAGALLANES. Organismo demandante: SECCIÓN COMPRAS XII ZONA. Unidad de compra: SECC DE COM ZONA MAGALLANES Y ANTARTICA CHILENA.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 11:13"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 09:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1079445-449-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1079445-449-COT26",
        "producto": "ADQ. DE LETREROS ACRÍLICOS DESTINADOS A LA DIFUSIÓN DE LOS PRINCIPIOS INSTITUCIONALES, PARA EL DEAOPERPOL MAGALLANES",
        "cantidad": 1,
        "precioUnitario": 145000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3659-138-COT26",
    "codigo": "3659-138-COT26",
    "titulo": "INSUMOS PARA PINTURA",
    "organismo": "ILUSTRE MUNICIPALIDAD DE CHILLAN VIEJO",
    "organismoRut": "74.913.037-9",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Ñuble",
    "monto": 300000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso: INSUMOS PARA PINTURA. Organismo demandante: ILUSTRE MUNICIPALIDAD DE CHILLAN VIEJO. Unidad de compra: Ilustre Municipalidad de Chillan Viejo.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 11:11"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 16:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3659-138-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3659-138-COT26",
        "producto": "INSUMOS PARA PINTURA",
        "cantidad": 1,
        "precioUnitario": 300000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2401-624-COT26",
    "codigo": "2401-624-COT26",
    "titulo": "CAJAS CARTÓN PIEDRA - DOM",
    "organismo": "I MUNICIPALIDAD DE RANCAGUA",
    "organismoRut": "85.562.194-5",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "O'Higgins",
    "monto": 2070000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Medio",
    "descripcion": "Proceso: CAJAS CARTÓN PIEDRA - DOM. Organismo demandante: I MUNICIPALIDAD DE RANCAGUA. Unidad de compra: SECCION ADQUISICIONES.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 11:10"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 18:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2401-624-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2401-624-COT26",
        "producto": "CAJAS CARTÓN PIEDRA - DOM",
        "cantidad": 1,
        "precioUnitario": 2070000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "4548-403-COT26",
    "codigo": "4548-403-COT26",
    "titulo": "SECPLAN-ADQUISICION DE UNA TRITURADORA DE PAPEL PARA LA OFICINA DE LICITACIONES",
    "organismo": "I MUNICIPALIDAD DE QUINTERO",
    "organismoRut": "65.623.793-6",
    "organismoPagoDias": 36,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 200000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 78,
    "riesgo": "Bajo",
    "descripcion": "Proceso: SECPLAN-ADQUISICION DE UNA TRITURADORA DE PAPEL PARA LA OFICINA DE LICITACIONES. Organismo demandante: I MUNICIPALIDAD DE QUINTERO. Unidad de compra: UNIDAD NORMAL.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 11:09"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 10:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_4548-403-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-4548-403-COT26",
        "producto": "SECPLAN-ADQUISICION DE UNA TRITURADORA DE PAPEL PARA LA OFICINA DE LICITACIONES",
        "cantidad": 1,
        "precioUnitario": 200000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "3946-227-COT26",
    "codigo": "3946-227-COT26",
    "titulo": "Compra de Conos y Focos para la Oficina de Seguridad Publica.",
    "organismo": "I MUNICIPALIDAD DE PICHIDEGUA",
    "organismoRut": "77.618.241-4",
    "organismoPagoDias": 33,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 488000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 75,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Compra de Conos y Focos para la Oficina de Seguridad Publica.. Organismo demandante: I MUNICIPALIDAD DE PICHIDEGUA. Unidad de compra: Administración y Finanzas.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 11:09"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_3946-227-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-3946-227-COT26",
        "producto": "Compra de Conos y Focos para la Oficina de Seguridad Publica.",
        "cantidad": 1,
        "precioUnitario": 488000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2440-1041-COT26",
    "codigo": "2440-1041-COT26",
    "titulo": "Tintas Originales Epson para Escuela Estados Unidos de Curicó",
    "organismo": "I MUNICIPALIDAD DE CURICO",
    "organismoRut": "13.242.707-8",
    "organismoPagoDias": 31,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Maule",
    "monto": 1850000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 97,
    "riesgo": "Medio",
    "descripcion": "Proceso: Tintas Originales Epson para Escuela Estados Unidos de Curicó. Organismo demandante: I MUNICIPALIDAD DE CURICO. Unidad de compra: Municipalidad de Curicó - Educación - Adquisiciones.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 11:07"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2440-1041-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2440-1041-COT26",
        "producto": "Tintas Originales Epson para Escuela Estados Unidos de Curicó",
        "cantidad": 1,
        "precioUnitario": 4000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "2929-431-COT26",
    "codigo": "2929-431-COT26",
    "titulo": "Insumos de Cuidado PRLAC 2025",
    "organismo": "I MUNICIPALIDAD DE PALENA",
    "organismoRut": "19.716.427-0",
    "organismoPagoDias": 34,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 100000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 76,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Insumos de Cuidado PRLAC 2025. Organismo demandante: I MUNICIPALIDAD DE PALENA. Unidad de compra: DAF.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 11:05"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_2929-431-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-2929-431-COT26",
        "producto": "Insumos de Cuidado PRLAC 2025",
        "cantidad": 1,
        "precioUnitario": 100000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1004-14-COT26",
    "codigo": "1004-14-COT26",
    "titulo": "LÁMPARAS LED TIPO UFO PARA GALPONES DE TALLER",
    "organismo": "MINISTERIO DE OBRAS PUBLICAS DIREC CION GRAL DE OO PP DCYF",
    "organismoRut": "84.780.005-9",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 600000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 96,
    "riesgo": "Bajo",
    "descripcion": "Proceso: LÁMPARAS LED TIPO UFO PARA GALPONES DE TALLER. Organismo demandante: MINISTERIO DE OBRAS PUBLICAS DIREC CION GRAL DE OO PP DCYF. Unidad de compra: Dirección de Vialidad - XI Región - Provincia de Coyhaique.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 11:05"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1004-14-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1004-14-COT26",
        "producto": "LÁMPARAS LED TIPO UFO PARA GALPONES DE TALLER",
        "cantidad": 1,
        "precioUnitario": 600000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1697-86-COT26",
    "codigo": "1697-86-COT26",
    "titulo": "SUMINISTRO E INSTALACIÓN DE KIT DE ASTA PARA BANDERA EN EL TRIBUNAL DE MEJILLONES”",
    "organismo": "CORP ADMINISTRATIVA DEL PODER JUDICIAL",
    "organismoRut": "38.391.940-3",
    "organismoPagoDias": 37,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1000000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 79,
    "riesgo": "Bajo",
    "descripcion": "Proceso: SUMINISTRO E INSTALACIÓN DE KIT DE ASTA PARA BANDERA EN EL TRIBUNAL DE MEJILLONES”. Organismo demandante: CORP ADMINISTRATIVA DEL PODER JUDICIAL. Unidad de compra: Corp. Adm. del Poder Judicial - Antofagasta.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 09:07"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 12:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1697-86-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1697-86-COT26",
        "producto": "SUMINISTRO E INSTALACIÓN DE KIT DE ASTA PARA BANDERA EN EL TRIBUNAL DE MEJILLONES”",
        "cantidad": 1,
        "precioUnitario": 1000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "5529-62-COT26",
    "codigo": "5529-62-COT26",
    "titulo": "Impresión de mallas curriculares raspables",
    "organismo": "UNIVERSIDAD DE CHILE",
    "organismoRut": "89.728.640-K",
    "organismoPagoDias": 39,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 1000000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-20",
    "matchScore": 81,
    "riesgo": "Bajo",
    "descripcion": "Proceso: Impresión de mallas curriculares raspables. Organismo demandante: UNIVERSIDAD DE CHILE. Unidad de compra: FCFM Departamento de Ingeniería Civil.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 09:07"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "20/07/2026 16:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_5529-62-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-5529-62-COT26",
        "producto": "Impresión de mallas curriculares raspables",
        "cantidad": 1,
        "precioUnitario": 1000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  },
  {
    "id": "1261-31-COT26",
    "codigo": "1261-31-COT26",
    "titulo": "Adquisición Bolsas con Logo Institucional Programa Cuidando a quienes Cuidan",
    "organismo": "GOBIERNO REGIONAL REGION METROPOLITANA",
    "organismoRut": "11.807.033-0",
    "organismoPagoDias": 32,
    "organismoRiesgo": "Medio",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Metropolitana",
    "monto": 3600000,
    "fechaPublicacion": "2026-07-15",
    "fechaCierre": "2026-07-17",
    "matchScore": 98,
    "riesgo": "Medio",
    "descripcion": "Proceso: Adquisición Bolsas con Logo Institucional Programa Cuidando a quienes Cuidan. Organismo demandante: GOBIERNO REGIONAL REGION METROPOLITANA. Unidad de compra: PROGRAMAS REGIONALES - PROGRAMA 02.",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "15/07/2026 08:59"
      },
      {
        "hito": "Cierre de ofertas",
        "fecha": "17/07/2026 08:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Bases_Oficiales_1261-31-COT26.pdf",
        "tipo": "pdf",
        "tamanho": "1.2 MB"
      }
    ],
    "items": [
      {
        "sku": "CA-ITEM-1261-31-COT26",
        "producto": "Adquisición Bolsas con Logo Institucional Programa Cuidando a quienes Cuidan",
        "cantidad": 1,
        "precioUnitario": 3600000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 100,
        "descripcion": "Menor costo"
      }
    ],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [
      {
        "nombre": "Bastian SpA",
        "rut": "76.123.456-1",
        "cuotaMercado": 35,
        "adjudicacionesRecientes": 3
      }
    ],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil"
  }
];

export function parseProductCatalog(raw: string) {
  const lines = raw.trim().split('\n');
  return lines.map((line, idx) => {
    const parts = line.split('|');
    return {
      id: `p-${idx + 1}`,
      sku: parts[0] || 'SKU-000',
      nombre: parts[1] || 'Producto sin nombre',
      proveedor: parts[2] || 'Genérico',
      categoria: parts[3] || 'General',
      detalle: parts[4] || '',
      precioBase: parseFloat(parts[5]) || 1000,
      estado: parts[6] || 'Activo'
    };
  });
}
