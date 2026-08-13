export type Empresa = 'Consolidado' | 'Aminorte' | 'V-MOCCS';
export type EmpresaMatch = 'Aminorte' | 'V-MOCCS';

/**
 * Metadatos de trazabilidad del match empresa-oportunidad.
 * Registra por qué y cómo se asoció una oportunidad a una empresa.
 */
export interface MatchMetadata {
  empresaId: string;            // ID interno de la empresa (e.g. 'aminorte')
  empresaAsociada: EmpresaMatch; // Nombre de la empresa
  motivoMatch: 'keyword_catalog' | 'rut_directo' | 'source_hint' | 'fallback_default';
  campoMatch: string;           // Campo que produjo la coincidencia
  fechaDeteccion: string;       // Fecha ISO cuando se detectó el match
  nivelConfianza: number;       // 0-99
  keywordsCoincidentes: string[]; // Keywords que generaron el match
  fuenteDatos: 'api' | 'excel' | 'manual'; // Origen del registro
}


export interface DocumentoAdjunto {
  nombre: string;
  tipo: 'pdf' | 'docx' | 'xlsx' | 'link';
  tamanho: string;
  url?: string;
}

export interface Item {
  sku: string;
  producto: string;
  cantidad: number;
  precioUnitario: number;
  precioMercadoReferencial?: number;
  especificacionTecnica?: string;
  unidadMedida?: string;
}

// 'Vencida' es distinto de 'Cerrada': se asigna automáticamente en el
// frontend (ver isVencida en utils/chileTime.ts) cuando fechaCierre ya pasó
// en hora de Chile y Mercado Público todavía no publicó una actualización
// oficial de estado — evita mostrar como activa una oportunidad vencida.
export type OpportunityState = 'Publicada' | 'Cerrada' | 'Proveedor seleccionado' | 'Cancelada' | 'Adjudicada' | 'Desierta' | 'En Evaluación' | 'Postulada' | 'Vencida';

export interface Oportunidad {
  id: string;
  codigo: string;
  titulo: string;
  organismo: string;
  organismoRut: string;
  // organismoPagoDias/organismoRiesgo: Mercado Público no expone esto vía API
  // pública — 'Sin evaluar' es el único valor honesto hasta que exista una
  // fuente real (nunca fijar 'Bajo' por defecto, ver feedback_no_fabrication).
  organismoPagoDias: number | null;
  organismoRiesgo: 'Bajo' | 'Medio' | 'Alto' | 'Sin evaluar';
  rubro: string;
  region: string;
  ciudad?: string;
  monto: number;

  fechaPublicacion: string;
  fechaCierre: string;
  matchScore: number;
  riesgo: 'Bajo' | 'Medio' | 'Alto' | 'Sin evaluar';
  descripcion: string;
  estado: OpportunityState;
  cronograma: Array<{ hito: string; fecha: string }>;
  documentos: DocumentoAdjunto[];
  items: Item[];
  criteriosEvaluacion: Array<{ aspecto: string; ponderacion: number; descripcion: string }>;
  preguntas: Array<{ usuario: string; pregunta: string; respuesta?: string }>;
  comentarios: Array<{ id: string; usuario: string; rol: string; fecha: string; texto: string }>;
  competidoresPropuestos: Array<{ nombre: string; rut: string; cuotaMercado: number; adjudicacionesRecientes: number }>;
  historialPrecios?: Array<{ fecha: string; precioUnitarioPromedio: number }>;
  empresaMatch?: EmpresaMatch;
  matchMetadata?: MatchMetadata; // Trazabilidad del match empresa-oportunidad
  modalidad: 'Compra Ágil' | 'Licitación' | 'Convenio Marco' | 'Grandes Compras';
  esInvitacionGrandesCompras?: boolean;
  convenioMarcoNombre?: string;
  subestadoEvaluacion?: string;
  montoUtm?: number;


  tipoOficial?: string;
  tipoNombre?: string;

  // --- TRAZABILIDAD OFICIAL Y ESTADO DE VALIDACIÓN ---
  sourceSystem?: 'mercadopublico_api' | 'mercadopublico_excel' | 'manual';
  sourceType?: 'licitacion' | 'compra_agil' | 'convenio_marco' | 'grandes_compras';
  officialCode?: string;         // Código oficial de Mercado Público (igual a codigo)
  sourceUrl?: string;            // URL oficial a la ficha en Mercado Público
  sourceRecordId?: string;       // ID interno de origen
  fetchedAt?: string;            // Fecha/hora ISO cuando se obtuvo el dato
  lastVerifiedAt?: string;       // Fecha/hora ISO de última verificación con API de detalle
  amount?: number | null;        // Monto numérico o null si no está informado
  currency?: 'CLP' | 'USD' | 'UF' | 'UTM';
  amountType?: 'monto_estimado' | 'presupuesto_disponible' | 'monto_reservado' | 'no_informado';
  validationStatus?: 'confirmado' | 'requiere_verificacion' | 'rechazado';

  // --- RECONCILIACIÓN Y TRAZABILIDAD DE MONTOS (v7.5) ---
  id_compra_agil?: string;
  id_proceso?: string;
  id_cotizacion?: string;
  id_orden_compra?: string;
  codigoOrdenCompra?: string;
  rutOrganismo?: string;
  proveedorAdjudicado?: string;
  rutProveedor?: string;
  fechaAdjudicacion?: string;
  fechaEmisionOC?: string;
  monto_informado?: number | null;
  monto_adjudicado?: number | null;
  monto_oc?: number | null;
  monto_neto?: number | null;
  iva?: number | null;
  monto_original?: number;
  monto_final?: number;
  fuente_monto?: string;
  id_fuente_monto?: string;
  estado_validacion_monto?: 'VALIDADO' | 'RECUPERADO_DESDE_OC' | 'RECUPERADO_DESDE_ADJUDICACION' | 'RECUPERADO_DESDE_COTIZACION' | 'MONTO_NO_ENCONTRADO';
  estadoOC?: string;

  fechaAdjudicacionEstimada?: string;
  admisibilidadIA?: {
    checklist: Array<{ requisito: string; estado: 'Cumple' | 'Atención' | 'Riesgo'; detalle: string }>;
    riesgoGlobal: 'Bajo' | 'Medio' | 'Alto';
    resumenRiesgo: string;
  };
  precioHistoricoMP?: {
    promedioAdjudicado: number;
    ultimoAdjudicado: number;
    proveedorGanador?: string;
    fechaUltimaAdjudicacion?: string;
    ahorroEstimadoPct?: number;
  };
  fleteEstimadoRegion?: number;
  alertasActivas?: Array<{
    id: string;
    tipo: 'cierre' | 'preguntas' | 'match';
    titulo: string;
    canal: 'WhatsApp' | 'Email';
    fechaHora: string;
  }>;
  puntajeComercial?: number; // 0 a 100
  nivelOportunidad?: 'Alta' | 'Media' | 'Baja';
  razonesOportunidad?: string[];
  esNueva?: boolean;
  fueModificada?: boolean;
  fechaUltimaModificacion?: string;
}

export interface Postulacion {
  id: string;
  oportunidadId: string;
  oportunidadTitulo: string;
  oportunidadCodigo: string;
  estado: 'Borrador' | 'Enviada' | 'En Evaluación' | 'Adjudicada' | 'Rechazada';
  responsable: string;
  montoOferta: number;
  documentosAdjuntos: string[];
  itemsOfertados: Array<{ sku: string; precioOferta: number; cantidad: number }>;
  fechaActualizacion: string;
  empresaMatch?: EmpresaMatch;
  modalidad?: 'Compra Ágil' | 'Licitación' | 'Convenio Marco' | 'Grandes Compras';
  organismo?: string;
}

export interface MiembroEquipo {
  id: string;
  nombre: string;
  rol: 'Admin' | 'Gestor' | 'Lector';
  avatar: string;
  estado: 'Activo' | 'Ausente' | 'Invitado';
  email: string;
}

export interface ParticipanteAdjudicacion {
  posicion: number;
  nombre: string;
  rut: string;
  montoNeto: number;
  montoIvaInc: number;
  resultado: 'ADJUDICADO' | 'No adjudicado' | 'Descalificado';
  esNuestraEmpresa?: boolean;
}

export interface AdjudicacionDetalle {
  id: string;
  codigo: string;
  modalidad: 'Compra Ágil' | 'Licitación' | 'Convenio Marco' | 'Grandes Compras' | 'Orden de Compra CM';
  titulo: string;
  institucion: string;
  institucionRut: string;
  presupuestoEstimado: number;
  fechaInicioPostulaciones: string;
  fechaCierrePostulaciones: string;
  fechaResultado: string;
  direccionEntrega: string;
  region: string;
  plazoEntrega: string;
  observaciones: string;
  postuladoPor: string;
  empresaMatch?: EmpresaMatch;
  codigoOC?: string;
  participantes: ParticipanteAdjudicacion[];
}

export interface Notificacion {
  id: string;
  leida: boolean;
  tipo: 'alerta' | 'info' | 'sistema' | 'invitacion' | 'adjudicacion';
  fecha: string;
  titulo: string;
  descripcion: string;
  oportunidadId?: string;
  codigoProceso?: string;
  empresaMatch?: EmpresaMatch;
  esGrandesCompras?: boolean;
  montoUtm?: number;
}

export interface VistaGuardada {
  id: string;
  nombre: string;
  filters: {
    search: string;
    rubro: string;
    region: string;
    riesgo: string;
    montoMin: number;
    montoMax: number;
  };
}

export interface OrdenCompra {
  id: string;
  oportunidadId: string;
  codigoOC: string;
  organismo: string;
  monto: number;
  fechaEmision: string;
  estado: 'Aceptada' | 'Enviada' | 'Completada' | 'Reclamada';
}
