export type Empresa = 'Consolidado' | 'Inder-Roll' | 'Aminorte' | 'V-MOCCS';
export type EmpresaMatch = 'Inder-Roll' | 'Aminorte' | 'V-MOCCS';

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

export type OpportunityState = 'Publicada' | 'Cerrada' | 'Proveedor seleccionado' | 'Cancelada' | 'Adjudicada' | 'Desierta' | 'En Evaluación' | 'Postulada';

export interface Oportunidad {
  id: string;
  codigo: string;
  titulo: string;
  organismo: string;
  organismoRut: string;
  organismoPagoDias: number;
  organismoRiesgo: 'Bajo' | 'Medio' | 'Alto';
  rubro: string;
  region: string;
  monto: number;
  fechaPublicacion: string;
  fechaCierre: string;
  matchScore: number;
  riesgo: 'Bajo' | 'Medio' | 'Alto';
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
  modalidad: 'Compra Ágil' | 'Licitación' | 'Convenio Marco' | 'Grandes Compras';
  esInvitacionGrandesCompras?: boolean;
  convenioMarcoNombre?: string;
  montoUtm?: number;
  subestadoEvaluacion?: string;
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
