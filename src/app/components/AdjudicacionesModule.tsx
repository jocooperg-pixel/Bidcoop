import React, { useState, useMemo } from 'react';
import { Oportunidad, Postulacion, OrdenCompra, Empresa, AdjudicacionDetalle, ParticipanteAdjudicacion } from '../types';

interface AdjudicacionesModuleProps {
  oportunidades: Oportunidad[];
  postulaciones?: Postulacion[];
  ordenesCompra?: OrdenCompra[];
  activeCompany?: Empresa;
  onSimulateNewAdjudication?: (newAdjudication: AdjudicacionDetalle) => void;
  selectedCodigoInitial?: string | null;
}

// Complete list of pre-seeded Adjudications & Purchase Orders for Aminorte and V-MOCCS
export const initialAdjudicaciones: AdjudicacionDetalle[] = [
  // --- COMPRAS ÁGILES ---
  {
    id: 'adj-1075956-11-COT26',
    codigo: '1075956-11-COT26',
    modalidad: 'Compra Ágil',
    titulo: 'ADQUISICIÓN DE MATERIALES DE OFICINA - SEGÚN TÉRMINOS DE REFERENCIA- ANEXO N° 1 DECLARACIÓN PROGRAMA INTEGRIDAD "OBLIGATORIO" - PRESUPUESTO DISPONIBLE $ 3.406.032.',
    institucion: 'DEPARTAMENTO CONTROL FINANCIERO',
    institucionRut: '60.505.000-K',
    presupuestoEstimado: 3406032,
    fechaInicioPostulaciones: '2026-06-18 09:38',
    fechaCierrePostulaciones: '2026-06-25 10:00',
    fechaResultado: '2026-07-06 13:40',
    direccionEntrega: 'EXEQUIEL FERNANDEZ N°1162, ÑUÑOA',
    region: 'Región Metropolitana de Santiago',
    plazoEntrega: '5 dias',
    observaciones: 'ADQUISICIÓN DE MATERIALES DE OFICINA- SEGÚN TÉRMINOS DE REFERENCIA ADJUNTOS - ANEXO N° 1 DECLARACIÓN PROGRAMA INTEGRIDAD "OBLIGATORIO". PRESUPUESTO DISPONIBLE $3.406.032. SERÁ ADJUDICADO EL PROVEEDOR QUE CUMPLA CON LA TOTALIDAD DE REQUISITOS Y SU OFERTA SE ENMARQUE DENTRO DEL PRESUPUESTO DISPONIBLE.',
    postuladoPor: '[BBARBA] (VMONCCS)',
    empresaMatch: 'V-MOCCS',
    participantes: [
      { posicion: 1, nombre: 'INDUSTRIAL Y COMERCIAL MEIGGS 51 LIMITADA', rut: '77.558.540-4', montoNeto: 2152334, montoIvaInc: 2561277, resultado: 'ADJUDICADO' },
      { posicion: 2, nombre: 'SOCIEDAD COMERCIAL DISTRIBUCION GLOBAL LIMITADA', rut: '76.100.732-7', montoNeto: 2328012, montoIvaInc: 2770334, resultado: 'No adjudicado' },
      { posicion: 3, nombre: 'GBD GROUP ENTERPRISES SPA', rut: '78.078.188-2', montoNeto: 2524548, montoIvaInc: 3004212, resultado: 'No adjudicado' },
      { posicion: 4, nombre: 'V-MOCCS SPA', rut: '77.235.702-8', montoNeto: 2691280, montoIvaInc: 3202623, resultado: 'No adjudicado', esNuestraEmpresa: true },
      { posicion: 5, nombre: 'IMPORTADORA Y COMERCIALIZADORA FERVET ON LINE LIMITADA', rut: '76.955.038-0', montoNeto: 2813378, montoIvaInc: 3347920, resultado: 'No adjudicado' },
      { posicion: 6, nombre: 'E-PROVEE SPA', rut: '77.042.972-2', montoNeto: 2887062, montoIvaInc: 3435604, resultado: 'No adjudicado' },
      { posicion: 7, nombre: 'RED OFFICE DISTRIBUCION SPA', rut: '76.378.394-4', montoNeto: 2961968, montoIvaInc: 3524742, resultado: 'No adjudicado' },
      { posicion: 8, nombre: 'COMERCIALIZADORA ROMULO LIMITADA', rut: '76.185.139-K', montoNeto: 2968521, montoIvaInc: 3532540, resultado: 'No adjudicado' },
      { posicion: 9, nombre: 'BUY ME SPA', rut: '77.431.951-4', montoNeto: 2983600, montoIvaInc: 3550484, resultado: 'No adjudicado' },
      { posicion: 10, nombre: 'IMPORTADORA Y COMERCIALIZADORA JMMB SPA', rut: '77.461.733-7', montoNeto: 3816780, montoIvaInc: 4541968, resultado: 'No adjudicado' }
    ]
  },
  {
    id: 'adj-5188-312-COT26',
    codigo: '5188-312-COT26',
    modalidad: 'Compra Ágil',
    titulo: 'Compra Ágil: Adquisición de Artículos de Escritorio y Papelería para Municipalidad de Macul',
    institucion: 'I MUNICIPALIDAD DE MACUL',
    institucionRut: '69.070.400-5',
    presupuestoEstimado: 1848400,
    fechaInicioPostulaciones: '2026-07-15 08:30',
    fechaCierrePostulaciones: '2026-07-20 14:00',
    fechaResultado: '2026-07-22 11:20',
    direccionEntrega: 'AV. GREGORIO DE LA FUENTE N°3200, MACUL',
    region: 'Región Metropolitana de Santiago',
    plazoEntrega: '3 dias',
    observaciones: 'ADJUDICADO POR MENOR PRECIO Y CUMPLIMIENTO 100% DE ESPECIFICACIONES TÉCNICAS.',
    postuladoPor: '[JCOOPER] (VMONCCS)',
    empresaMatch: 'V-MOCCS',
    participantes: [
      { posicion: 1, nombre: 'V-MOCCS SPA', rut: '77.235.702-8', montoNeto: 1553277, montoIvaInc: 1848400, resultado: 'ADJUDICADO', esNuestraEmpresa: true },
      { posicion: 2, nombre: 'DISPROMAC LIMITADA', rut: '76.441.900-3', montoNeto: 1680000, montoIvaInc: 1999200, resultado: 'No adjudicado' },
      { posicion: 3, nombre: 'LIBRERÍA NACIONAL S.A.', rut: '96.502.130-9', montoNeto: 1790000, montoIvaInc: 2130100, resultado: 'No adjudicado' }
    ]
  },
  {
    id: 'adj-COT-6012-401-COT26',
    codigo: 'COT-6012-401-COT26',
    modalidad: 'Compra Ágil',
    titulo: 'Compra Ágil: Adquisición Urgente de Resmas Carta/Oficio y Tintas de Impresión',
    institucion: 'SUBSECRETARÍA DE EDUCACIÓN (MINEDUC)',
    institucionRut: '60.701.000-0',
    presupuestoEstimado: 2450000,
    fechaInicioPostulaciones: '2026-07-05 09:00',
    fechaCierrePostulaciones: '2026-07-09 13:00',
    fechaResultado: '2026-07-10 16:15',
    direccionEntrega: 'AV. BERNARDO O’HIGGINS N°1371, SANTIAGO',
    region: 'Región Metropolitana de Santiago',
    plazoEntrega: '2 dias',
    observaciones: 'ADJUDICADO A AMINORTE DISTRIBUIDORA SPA POR OFERTA CON MEJOR PLAZO DE ENTREGA Y PRECIO UNITARIO.',
    postuladoPor: '[JCOOPER] (AMINORTE)',
    empresaMatch: 'Aminorte',
    participantes: [
      { posicion: 1, nombre: 'AMINORTE DISTRIBUIDORA DE ESCRITORIO SPA', rut: '76.882.110-3', montoNeto: 2058823, montoIvaInc: 2450000, resultado: 'ADJUDICADO', esNuestraEmpresa: true },
      { posicion: 2, nombre: 'PRISA S.A. LOGÍSTICA', rut: '96.502.130-9', montoNeto: 2180000, montoIvaInc: 2594200, resultado: 'No adjudicado' },
      { posicion: 3, nombre: 'OFIMARKET CHILE SPA', rut: '77.810.120-1', montoNeto: 2350000, montoIvaInc: 2796500, resultado: 'No adjudicado' }
    ]
  },
  {
    id: 'adj-COT-7012-101-COT26',
    codigo: 'COT-7012-101-COT26',
    modalidad: 'Compra Ágil',
    titulo: 'Compra Ágil: Adquisición Urgente de Cloro Concentrado, Detergentes y Jabón Líquido',
    institucion: 'HOSPITAL DR. GUSTAVO FRICKE DE VIÑA DEL MAR',
    institucionRut: '61.602.100-8',
    presupuestoEstimado: 3120000,
    fechaInicioPostulaciones: '2026-07-20 09:00',
    fechaCierrePostulaciones: '2026-07-23 15:00',
    fechaResultado: '2026-07-24 10:30',
    direccionEntrega: 'ALVAREZ N°1532, VIÑA DEL MAR',
    region: 'Región de Valparaíso',
    plazoEntrega: '4 dias',
    observaciones: 'ADJUDICACIÓN A AMINORTE DISTRIBUIDORA SPA POR CUMPLIR TOTALMENTE ESPECIFICACIONES TÉCNICAS.',
    postuladoPor: '[JCOOPER] (AMINORTE)',
    empresaMatch: 'Aminorte',
    participantes: [

      { posicion: 1, nombre: 'AMINORTE DISTRIBUIDORA SPA', rut: '76.882.110-3', montoNeto: 2621848, montoIvaInc: 3120000, resultado: 'ADJUDICADO', esNuestraEmpresa: true },
      { posicion: 2, nombre: 'DIVERSEY CHILE S.A.', rut: '96.882.900-1', montoNeto: 2850000, montoIvaInc: 3391500, resultado: 'No adjudicado' },
      { posicion: 3, nombre: 'QUÍMICA INDUSTRIAL ANTOFAGASTA LTDA', rut: '77.201.880-9', montoNeto: 2990000, montoIvaInc: 3558100, resultado: 'No adjudicado' }
    ]
  },

  // --- LICITACIONES PÚBLICAS Y PRIVADAS ---
  {
    id: 'adj-2210-441-LR26',
    codigo: '2210-441-LR26',
    modalidad: 'Licitación',
    titulo: 'Suministro Escolar y Insumos de Papelería Parvularia 2026',
    institucion: 'JUNTA NACIONAL DE JARDINES INFANTILES (JUNJI)',
    institucionRut: '70.012.300-4',
    presupuestoEstimado: 85000000,
    fechaInicioPostulaciones: '2026-07-11 09:00',
    fechaCierrePostulaciones: '2026-07-20 14:00',
    fechaResultado: '2026-07-24 16:30',
    direccionEntrega: 'AVENIDA ESPAÑA N°2450, VALPARAÍSO',
    region: 'Región de Valparaíso',
    plazoEntrega: '15 dias',
    observaciones: 'ADJUDICADO SEGÚN CRITERIO ECONÓMICO Y EVALUACIÓN TÉCNICA DE MUESTRAS. CUMPLE CON REQUISITOS DE BASES.',
    postuladoPor: '[JCOOPER] (AMINORTE)',
    empresaMatch: 'Aminorte',
    participantes: [
      { posicion: 1, nombre: 'AMINORTE DISTRIBUIDORA DE ESCRITORIO SPA', rut: '76.882.110-3', montoNeto: 68900000, montoIvaInc: 81991000, resultado: 'ADJUDICADO', esNuestraEmpresa: true },
      { posicion: 2, nombre: 'DIPRISA S.A.', rut: '96.502.130-9', montoNeto: 72400000, montoIvaInc: 86156000, resultado: 'No adjudicado' },
      { posicion: 3, nombre: 'LIBRERÍA Y IMPRENTA CATEDRAL LTDA', rut: '78.112.400-5', montoNeto: 76100000, montoIvaInc: 90559000, resultado: 'No adjudicado' }
    ]
  },
  {
    id: 'adj-3047-1042-LE26',
    codigo: '3047-1042-LE26',
    modalidad: 'Licitación',
    titulo: 'Licitación Pública: Suministro de Alcohol Gel, Desinfectantes y Elementos de Aseo Municipal',
    institucion: 'ILUSTRE MUNICIPALIDAD DE SANTIAGO',
    institucionRut: '69.070.300-9',
    presupuestoEstimado: 18500000,
    fechaInicioPostulaciones: '2026-06-10 09:00',
    fechaCierrePostulaciones: '2026-06-22 17:00',
    fechaResultado: '2026-06-25 12:00',
    direccionEntrega: 'PLAZA DE ARMAS N°1, SANTIAGO',
    region: 'Región Metropolitana de Santiago',
    plazoEntrega: '7 dias',
    observaciones: 'OFERTA ADJUDICADA A AMINORTE SPA POR CUMPLIMIENTO TOTAL Y MENOR EVALUACIÓN ECONÓMICA.',
    postuladoPor: '[JCOOPER] (AMINORTE)',
    empresaMatch: 'Aminorte',

    participantes: [
      { posicion: 1, nombre: 'AMINORTE SPA', rut: '99.533.780-0', montoNeto: 15546218, montoIvaInc: 18500000, resultado: 'ADJUDICADO', esNuestraEmpresa: true },
      { posicion: 2, nombre: 'CLEAN CHILE S.A.', rut: '96.771.200-4', montoNeto: 16800000, montoIvaInc: 19992000, resultado: 'No adjudicado' },
      { posicion: 3, nombre: 'DETERGENTES DEL PACÍFICO SPA', rut: '77.012.550-8', montoNeto: 17500000, montoIvaInc: 20825000, resultado: 'No adjudicado' }
    ]
  },
  {
    id: 'adj-2239-8-LR25',
    codigo: '2239-8-LR25',
    modalidad: 'Licitación',
    titulo: 'Licitación Pública: Suministro de Insumos de Aseo Químico e Higiene Hospitalaria',
    institucion: 'SERVICIO DE SALUD METROPOLITANO SUR - HOSPITAL SANATORIO EL PINO',
    institucionRut: '61.602.400-7',
    presupuestoEstimado: 34500000,
    fechaInicioPostulaciones: '2026-07-01 09:00',
    fechaCierrePostulaciones: '2026-07-18 14:00',
    fechaResultado: '2026-07-21 15:30',
    direccionEntrega: 'AV. LOS MORROS N°11500, SAN BERNARDO',
    region: 'Región Metropolitana de Santiago',
    plazoEntrega: '10 dias',
    observaciones: 'PROCESO FINALIZADO. EVALUACIÓN DE OFERTAS TÉCNICAS COMPLETADA.',
    postuladoPor: '[JCOOPER] (AMINORTE)',
    empresaMatch: 'Aminorte',

    participantes: [
      { posicion: 1, nombre: 'QUÍMICA VIRUTEX ILKO S.A.', rut: '96.510.200-7', montoNeto: 27500000, montoIvaInc: 32725000, resultado: 'ADJUDICADO' },
      { posicion: 2, nombre: 'AMINORTE SPA', rut: '99.533.780-0', montoNeto: 28991596, montoIvaInc: 34500000, resultado: 'No adjudicado', esNuestraEmpresa: true },
      { posicion: 3, nombre: 'DISTRIBUIDORA SANITARIA CENTRAL LTDA', rut: '77.410.900-1', montoNeto: 31000000, montoIvaInc: 36890000, resultado: 'No adjudicado' }
    ]
  },

  // --- GRANDES COMPRAS (CONVENIO MARCO > 1.000 UTM) ---
  {
    id: 'adj-GC-6012-280-CM26',
    codigo: 'GC-6012-280-CM26',
    modalidad: 'Grandes Compras',
    titulo: 'Grande Compra: Dotación Anual de Papelería y Resmas para Seremi de Salud RM',
    institucion: 'SEREMI DE SALUD REGIÓN METROPOLITANA',
    institucionRut: '60.705.000-2',
    presupuestoEstimado: 83400000,
    fechaInicioPostulaciones: '2026-06-15 09:00',
    fechaCierrePostulaciones: '2026-06-25 17:00',
    fechaResultado: '2026-06-28 11:00',
    direccionEntrega: 'PADRE ALONSO DE OVALLE N°1250, SANTIAGO',
    region: 'Región Metropolitana de Santiago',
    plazoEntrega: '7 dias',
    observaciones: 'ADJUDICADO MEDIANTE CATÁLOGO ELECTRÓNICO DE CONVENIO MARCO A AMINORTE SPA POR OBTENER EL MAYOR PUNTAJE PONDERADO.',
    postuladoPor: '[JCOOPER] (AMINORTE)',
    empresaMatch: 'Aminorte',
    participantes: [
      { posicion: 1, nombre: 'AMINORTE DISTRIBUIDORA DE ESCRITORIO SPA', rut: '76.882.110-3', montoNeto: 70084033, montoIvaInc: 83400000, resultado: 'ADJUDICADO', esNuestraEmpresa: true },
      { posicion: 2, nombre: 'PRISA S.A.', rut: '96.502.130-9', montoNeto: 74200000, montoIvaInc: 88298000, resultado: 'No adjudicado' },
      { posicion: 3, nombre: 'DIMERC S.A.', rut: '96.620.190-1', montoNeto: 78900000, montoIvaInc: 93891000, resultado: 'No adjudicado' }
    ]
  },
  {
    id: 'adj-GC-6012-195-CM26',
    codigo: 'GC-6012-195-CM26',
    modalidad: 'Grandes Compras',
    titulo: 'Grande Compra: Insumos de Escritorio y Archivadores para Dirección de Obras Públicas',
    institucion: 'DIRECCIÓN GENERAL DE OBRAS PÚBLICAS (MOP)',
    institucionRut: '61.201.000-3',
    presupuestoEstimado: 130800000,
    fechaInicioPostulaciones: '2026-06-20 09:00',
    fechaCierrePostulaciones: '2026-07-02 17:00',
    fechaResultado: '2026-07-05 14:30',
    direccionEntrega: 'BOMBERO SALAS N°1351, SANTIAGO',
    region: 'Región Metropolitana de Santiago',
    plazoEntrega: '10 dias',
    observaciones: 'SELECCIÓN DE OFERTA ADJUDICADA EN CONVENIO MARCO A AMINORTE DISTRIBUIDORA SPA.',
    postuladoPor: '[JCOOPER] (AMINORTE)',
    empresaMatch: 'Aminorte',
    participantes: [
      { posicion: 1, nombre: 'AMINORTE DISTRIBUIDORA DE ESCRITORIO SPA', rut: '76.882.110-3', montoNeto: 109915966, montoIvaInc: 130800000, resultado: 'ADJUDICADO', esNuestraEmpresa: true },
      { posicion: 2, nombre: 'LIBRERÍA NACIONAL S.A.', rut: '96.502.130-9', montoNeto: 115000000, montoIvaInc: 136850000, resultado: 'No adjudicado' },
      { posicion: 3, nombre: 'COMPAÑÍA DE PAPELES Y CARTONES CMPC S.A.', rut: '90.150.000-8', montoNeto: 122000000, montoIvaInc: 145180000, resultado: 'No adjudicado' }
    ]
  },
  {
    id: 'adj-1627-940-CM26',
    codigo: '1627-940-CM26',
    modalidad: 'Grandes Compras',
    titulo: 'Grande Compra: Suministro de Toallas de Papel Interfoliadas y Jabón Institucional',
    institucion: 'ILUSTRE MUNICIPALIDAD DE VALPARAÍSO',
    institucionRut: '69.060.100-1',
    presupuestoEstimado: 67500000,
    fechaInicioPostulaciones: '2026-06-10 09:00',
    fechaCierrePostulaciones: '2026-06-22 17:00',
    fechaResultado: '2026-06-25 16:00',
    direccionEntrega: 'CONDICO N°1490, VALPARAÍSO',
    region: 'Región de Valparaíso',
    plazoEntrega: '7 dias',
    observaciones: 'GRANDE COMPRA RESUELTA. OFERTA GANADORA CORRESPONDE A CMPC TISSUE S.A.',
    postuladoPor: '[JCOOPER] (AMINORTE)',
    empresaMatch: 'Aminorte',

    participantes: [
      { posicion: 1, nombre: 'CMPC TISSUE S.A.', rut: '96.520.110-2', montoNeto: 54000000, montoIvaInc: 64260000, resultado: 'ADJUDICADO' },
      { posicion: 2, nombre: 'AMINORTE SPA', rut: '99.533.780-0', montoNeto: 56722689, montoIvaInc: 67500000, resultado: 'No adjudicado', esNuestraEmpresa: true },
      { posicion: 3, nombre: 'KIMBERLY-CLARK CHILE S.A.', rut: '96.701.440-9', montoNeto: 59000000, montoIvaInc: 70210000, resultado: 'No adjudicado' }
    ]
  },

  // --- ÓRDENES DE COMPRA DIRECTAS POR CONVENIO MARCO ---
  {
    id: 'adj-OC-61601500-112',
    codigo: 'OC-61601500-112',
    codigoOC: 'OC-61601500-112',
    modalidad: 'Orden de Compra CM',
    titulo: 'Orden de Compra Convenio Marco: Adquisición Insumos Aseo Institucional y Cloro',
    institucion: 'ILUSTRE MUNICIPALIDAD DE SANTIAGO',
    institucionRut: '69.070.300-9',
    presupuestoEstimado: 18500000,
    fechaInicioPostulaciones: '2026-06-20 10:00',
    fechaCierrePostulaciones: '2026-06-24 18:00',
    fechaResultado: '2026-06-25 09:30',
    direccionEntrega: 'AMUNATEGUI N°980, SANTIAGO',
    region: 'Región Metropolitana de Santiago',
    plazoEntrega: '5 dias',
    observaciones: 'ORDEN DE COMPRA EMITIDA DIRECTAMENTE DESDE LA TIENDA DE CONVENIO MARCO DE MERCADO PÚBLICO. ACEPTADA Y EN DESPACHO.',
    postuladoPor: '[JCOOPER] (AMINORTE)',
    empresaMatch: 'Aminorte',

    participantes: [
      { posicion: 1, nombre: 'AMINORTE SPA', rut: '99.533.780-0', montoNeto: 15546218, montoIvaInc: 18500000, resultado: 'ADJUDICADO', esNuestraEmpresa: true },
      { posicion: 2, nombre: 'TIENDA CONVENIO MARCO ASEO S.A.', rut: '96.881.000-4', montoNeto: 16500000, montoIvaInc: 19635000, resultado: 'No adjudicado' }
    ]
  },
  {
    id: 'adj-OC-70012300-884',
    codigo: 'OC-70012300-884',
    codigoOC: 'OC-70012300-884',
    modalidad: 'Orden de Compra CM',
    titulo: 'Orden de Compra Convenio Marco: Resmas de Papel y Artículos de Escritorio Oficina Central',
    institucion: 'JUNTA NACIONAL DE JARDINES INFANTILES (JUNJI)',
    institucionRut: '70.012.300-4',
    presupuestoEstimado: 24800000,
    fechaInicioPostulaciones: '2026-07-02 08:30',
    fechaCierrePostulaciones: '2026-07-05 16:00',
    fechaResultado: '2026-07-06 10:15',
    direccionEntrega: 'AVENIDA ESPAÑA N°2450, VALPARAÍSO',
    region: 'Región de Valparaíso',
    plazoEntrega: '4 dias',
    observaciones: 'EMISIÓN DIRECTA ORDEN DE COMPRA CONVENIO MARCO N° OC-70012300-884 ACEPTADA POR AMINORTE DISTRIBUIDORA SPA.',
    postuladoPor: '[JCOOPER] (AMINORTE)',
    empresaMatch: 'Aminorte',
    participantes: [
      { posicion: 1, nombre: 'AMINORTE DISTRIBUIDORA DE ESCRITORIO SPA', rut: '76.882.110-3', montoNeto: 20840336, montoIvaInc: 24800000, resultado: 'ADJUDICADO', esNuestraEmpresa: true },
      { posicion: 2, nombre: 'PRISA CONVENIO MARCO CHILE', rut: '96.502.130-9', montoNeto: 22100000, montoIvaInc: 26300000, resultado: 'No adjudicado' }
    ]
  },
  {
    id: 'adj-OC-60505000-551',
    codigo: 'OC-60505000-551',
    codigoOC: 'OC-60505000-551',
    modalidad: 'Orden de Compra CM',
    titulo: 'Orden de Compra Convenio Marco: Artículos de Escritorio y Papelería General',
    institucion: 'DEPARTAMENTO CONTROL FINANCIERO',
    institucionRut: '60.505.000-K',
    presupuestoEstimado: 12350000,
    fechaInicioPostulaciones: '2026-07-10 09:00',
    fechaCierrePostulaciones: '2026-07-14 15:00',
    fechaResultado: '2026-07-15 12:45',
    direccionEntrega: 'EXEQUIEL FERNANDEZ N°1162, ÑUÑOA',
    region: 'Región Metropolitana de Santiago',
    plazoEntrega: '5 dias',
    observaciones: 'ORDEN DE COMPRA EMITIDA EN CATÁLOGO ELECTRÓNICO Y ACEPTADA POR V-MOCCS SPA.',
    postuladoPor: '[BBARBA] (VMONCCS)',
    empresaMatch: 'V-MOCCS',
    participantes: [
      { posicion: 1, nombre: 'V-MOCCS SPA', rut: '77.235.702-8', montoNeto: 10378151, montoIvaInc: 12350000, resultado: 'ADJUDICADO', esNuestraEmpresa: true },
      { posicion: 2, nombre: 'DIMERC CHILE S.A.', rut: '96.620.190-1', montoNeto: 11200000, montoIvaInc: 13328000, resultado: 'No adjudicado' }
    ]
  },
  {
    id: 'adj-OC-61608100-339',
    codigo: 'OC-61608100-339',
    codigoOC: 'OC-61608100-339',
    modalidad: 'Orden de Compra CM',
    titulo: 'Orden de Compra Convenio Marco: Insumos Aseo Quirúrgico e Higiene Hospitalaria',
    institucion: 'HOSPITAL CLINICO SAN BORJA ARRIARAN',
    institucionRut: '61.608.100-2',
    presupuestoEstimado: 43435000,
    fechaInicioPostulaciones: '2026-07-12 09:00',
    fechaCierrePostulaciones: '2026-07-16 17:00',
    fechaResultado: '2026-07-17 11:30',
    direccionEntrega: 'SANTA ROSA N°1234, SANTIAGO CENTRO',
    region: 'Región Metropolitana de Santiago',
    plazoEntrega: '7 dias',
    observaciones: 'ORDEN DE COMPRA ACEPTADA EN CATÁLOGO MARCO VIGENTE DE PRODUCTOS DE ASEO.',
    postuladoPor: '[JCOOPER] (AMINORTE)',
    empresaMatch: 'Aminorte',

    participantes: [
      { posicion: 1, nombre: 'AMINORTE SPA', rut: '99.533.780-0', montoNeto: 36500000, montoIvaInc: 43435000, resultado: 'ADJUDICADO', esNuestraEmpresa: true },
      { posicion: 2, nombre: 'INSUQUIM CHILE S.A.', rut: '77.301.990-2', montoNeto: 39500000, montoIvaInc: 47005000, resultado: 'No adjudicado' }
    ]
  }
];

export default function AdjudicacionesModule({
  oportunidades,
  postulaciones = [],
  ordenesCompra = [],
  activeCompany = 'Consolidado',
  onSimulateNewAdjudication,
  selectedCodigoInitial = null
}: AdjudicacionesModuleProps) {
  const [adjudicacionesList, setAdjudicacionesList] = useState<AdjudicacionDetalle[]>(initialAdjudicaciones);
  const [selectedCodigo, setSelectedCodigo] = useState<string>(selectedCodigoInitial || '1075956-11-COT26');
  const [filterModalidad, setFilterModalidad] = useState<string>('Todas');
  const [showToast, setShowToast] = useState<string | null>(null);

  // Combine initial static list with dynamic postulations and purchase orders
  const allAvailableAdjudicaciones = useMemo(() => {
    const map = new Map<string, AdjudicacionDetalle>();
    
    // 1. Load seed adjudications
    initialAdjudicaciones.forEach(item => map.set(item.codigo, item));
    adjudicacionesList.forEach(item => map.set(item.codigo, item));

    // 2. Map dynamic postulations into adjudications if not present
    postulaciones.forEach(p => {
      if (!p.oportunidadCodigo) return;
      if (!map.has(p.oportunidadCodigo)) {
        const op = oportunidades.find(o => o.codigo === p.oportunidadCodigo || o.id === p.oportunidadId);
        const company = p.empresaMatch || op?.empresaMatch || 'Aminorte';
        const companyFullName = company === 'Aminorte' ? 'AMINORTE DISTRIBUIDORA DE ESCRITORIO SPA' : 'V-MOCCS SPA';
        const companyRut = company === 'Aminorte' ? '76.882.110-3' : '77.235.702-8';
        const isWinner = p.estado === 'Adjudicada';
        const mod: AdjudicacionDetalle['modalidad'] = p.modalidad || op?.modalidad || (p.oportunidadCodigo.includes('COT') ? 'Compra Ágil' : (p.oportunidadCodigo.includes('GC') ? 'Grandes Compras' : 'Licitación'));

        const netAmount = Math.round(p.montoOferta / 1.19);

        map.set(p.oportunidadCodigo, {
          id: `adj-post-${p.id}`,
          codigo: p.oportunidadCodigo,
          modalidad: mod,
          titulo: p.oportunidadTitulo || op?.titulo || `Proceso ${p.oportunidadCodigo}`,
          institucion: p.organismo || op?.organismo || 'ORGANISMO PÚBLICO DE CHILE',
          institucionRut: op?.organismoRut || '60.000.000-0',
          presupuestoEstimado: op?.monto || p.montoOferta,
          fechaInicioPostulaciones: op?.fechaPublicacion ? op.fechaPublicacion + ' 09:00' : '2026-07-01 09:00',
          fechaCierrePostulaciones: op?.fechaCierre ? op.fechaCierre + ' 17:00' : '2026-07-15 17:00',
          fechaResultado: p.fechaActualizacion ? p.fechaActualizacion + ' 12:00' : '2026-07-20 12:00',
          direccionEntrega: 'DIRECCIÓN OFICIAL DE DESPACHO E IMPRESIÓN',
          region: op?.region || 'Metropolitana',
          plazoEntrega: '5 dias',
          observaciones: `SEGUIMIENTO DE OFERTA POSTULADA PARA ${p.oportunidadCodigo}. ESTADO OFICIAL: ${p.estado.toUpperCase()}.`,
          postuladoPor: `[${p.responsable || 'JCOOPER'}] (${company.toUpperCase()})`,
          empresaMatch: company,
          participantes: [
            {
              posicion: isWinner ? 1 : 2,
              nombre: companyFullName,
              rut: companyRut,
              montoNeto: netAmount,
              montoIvaInc: p.montoOferta,
              resultado: isWinner ? 'ADJUDICADO' : 'No adjudicado',
              esNuestraEmpresa: true
            },
            {
              posicion: isWinner ? 2 : 1,
              nombre: isWinner ? 'COMPETIDOR SECUNDARIO CHILE SPA' : 'PROVEEDOR LÍDER ADJUDICADO S.A.',
              rut: '96.502.130-9',
              montoNeto: Math.round((netAmount * (isWinner ? 1.08 : 0.92))),
              montoIvaInc: Math.round((p.montoOferta * (isWinner ? 1.08 : 0.92))),
              resultado: isWinner ? 'No adjudicado' : 'ADJUDICADO'
            },
            {
              posicion: 3,
              nombre: 'DISTRIBUIDORA Y COMERCIALIZADORA NACIONAL LTDA',
              rut: '77.810.120-1',
              montoNeto: Math.round(netAmount * 1.15),
              montoIvaInc: Math.round(p.montoOferta * 1.15),
              resultado: 'No adjudicado'
            }
          ]
        });
      }
    });

    // 3. Map purchase orders from Convenio Marco into adjudications
    ordenesCompra.forEach(oc => {
      if (!oc.codigoOC) return;
      if (!map.has(oc.codigoOC)) {
        const op = oportunidades.find(o => o.id === oc.oportunidadId || o.codigo === oc.oportunidadId);
        const company = op?.empresaMatch || 'Aminorte';
        const companyFullName = company === 'Aminorte' ? 'AMINORTE DISTRIBUIDORA DE ESCRITORIO SPA' : 'V-MOCCS SPA';
        const companyRut = company === 'Aminorte' ? '76.882.110-3' : '77.235.702-8';
        const netAmount = Math.round(oc.monto / 1.19);

        map.set(oc.codigoOC, {
          id: `adj-oc-${oc.id}`,
          codigo: oc.codigoOC,
          codigoOC: oc.codigoOC,
          modalidad: 'Orden de Compra CM',
          titulo: `Orden de Compra Convenio Marco: ${op?.titulo || oc.organismo}`,
          institucion: oc.organismo,
          institucionRut: op?.organismoRut || '60.505.000-K',
          presupuestoEstimado: oc.monto,
          fechaInicioPostulaciones: oc.fechaEmision + ' 09:00',
          fechaCierrePostulaciones: oc.fechaEmision + ' 17:00',
          fechaResultado: oc.fechaEmision + ' 18:00',
          direccionEntrega: 'DIRECCIÓN DE DESPACHO REGIONAL CONVENIO MARCO',
          region: op?.region || 'Metropolitana',
          plazoEntrega: '5 dias',
          observaciones: `ORDEN DE COMPRA EMITIDA DIRECTAMENTE POR CONVENIO MARCO (${oc.codigoOC}). ESTADO: ${oc.estado.toUpperCase()}.`,
          postuladoPor: `[SISTEMA CONVENIO MARCO] (${company.toUpperCase()})`,
          empresaMatch: company,
          participantes: [
            {
              posicion: 1,
              nombre: companyFullName,
              rut: companyRut,
              montoNeto: netAmount,
              montoIvaInc: oc.monto,
              resultado: 'ADJUDICADO',
              esNuestraEmpresa: true
            },
            {
              posicion: 2,
              nombre: 'TIENDA DIGITAL CONVENIO MARCO CHILE',
              rut: '96.881.000-4',
              montoNeto: Math.round(netAmount * 1.05),
              montoIvaInc: Math.round(oc.monto * 1.05),
              resultado: 'No adjudicado'
            }
          ]
        });
      }
    });

    return Array.from(map.values());
  }, [adjudicacionesList, postulaciones, ordenesCompra, oportunidades]);

  // Filter list by modality and activeCompany context
  const filteredList = useMemo(() => {
    return allAvailableAdjudicaciones.filter(item => {
      if (filterModalidad !== 'Todas') {
        if (filterModalidad === 'Órdenes de Compra CM' && item.modalidad !== 'Orden de Compra CM') return false;
        if (filterModalidad !== 'Órdenes de Compra CM' && item.modalidad !== filterModalidad) return false;
      }
      if (activeCompany !== 'Consolidado' && item.empresaMatch && item.empresaMatch !== activeCompany) {
        return false;
      }
      return true;
    });
  }, [allAvailableAdjudicaciones, filterModalidad, activeCompany]);

  // Current active adjudication item
  const currentAdjudicacion = useMemo(() => {
    const found = allAvailableAdjudicaciones.find(a => a.codigo === selectedCodigo || a.id === selectedCodigo || a.codigoOC === selectedCodigo);
    if (found) return found;

    // Fallback: search in opportunities and build a synthetic adjudication object
    const op = oportunidades.find(o => o.codigo === selectedCodigo || o.id === selectedCodigo);
    if (op) {
      return {
        id: `adj-${op.codigo}`,
        codigo: op.codigo,
        modalidad: op.modalidad,
        titulo: op.titulo,
        institucion: op.organismo,
        institucionRut: op.organismoRut || '60.000.000-0',
        presupuestoEstimado: op.monto,
        fechaInicioPostulaciones: op.fechaPublicacion + ' 09:00',
        fechaCierrePostulaciones: op.fechaCierre + ' 14:00',
        fechaResultado: new Date().toISOString().replace('T', ' ').slice(0, 16),
        direccionEntrega: 'DIRECCIÓN DE ENTREGA REGIONAL',
        region: op.region || 'Metropolitana',
        plazoEntrega: '5 dias',
        observaciones: `PROCESO DE EVALUACIÓN FINALIZADO PARA ${op.codigo}. RESULTADOS PUBLICADOS OFICIALMENTE EN MERCADO PÚBLICO.`,
        postuladoPor: `[EQUIPO] (${op.empresaMatch || 'BIDCOOP'})`,
        empresaMatch: op.empresaMatch,
        participantes: [
          {
            posicion: 1,
            nombre: 'PROVEEDOR ADJUDICADO OFICIAL S.A.',
            rut: '76.452.190-8',
            montoNeto: Math.round(op.monto * 0.85),
            montoIvaInc: Math.round(op.monto * 0.85 * 1.19),
            resultado: 'ADJUDICADO'
          },
          {
            posicion: 2,
            nombre: op.empresaMatch === 'V-MOCCS' ? 'V-MOCCS SPA' : 'AMINORTE SPA',

            rut: '76.882.110-3',
            montoNeto: Math.round(op.monto * 0.92),
            montoIvaInc: Math.round(op.monto * 0.92 * 1.19),
            resultado: 'No adjudicado',
            esNuestraEmpresa: true
          },
          {
            posicion: 3,
            nombre: 'COMERCIALIZADORA REGIONAL LTDA',
            rut: '77.102.330-1',
            montoNeto: op.monto,
            montoIvaInc: Math.round(op.monto * 1.19),
            resultado: 'No adjudicado'
          }
        ]
      };
    }

    return filteredList[0] || initialAdjudicaciones[0];
  }, [allAvailableAdjudicaciones, selectedCodigo, oportunidades, filteredList]);

  // Handler to simulate new real-time adjudication event
  const handleTriggerNewAdjudication = () => {
    const randomCodes = ['5542-12-COT26', '7701-88-LR26', 'GC-2026-990-CM26', 'OC-9902100-441'];
    const chosenCode = randomCodes[Math.floor(Math.random() * randomCodes.length)];
    const dateStr = new Date().toISOString().replace('T', ' ').slice(0, 16);
    const isOC = chosenCode.startsWith('OC-');
    const isGC = chosenCode.startsWith('GC-');

    const newAdj: AdjudicacionDetalle = {
      id: `adj-${chosenCode}-${Date.now()}`,
      codigo: chosenCode,
      codigoOC: isOC ? chosenCode : undefined,
      modalidad: isOC ? 'Orden de Compra CM' : (isGC ? 'Grandes Compras' : (chosenCode.includes('COT') ? 'Compra Ágil' : 'Licitación')),
      titulo: isOC ? `Orden de Compra Convenio Marco Recibida (${chosenCode})` : `ADQUISICIÓN DE INSUMOS Y EQUIPAMIENTO (${chosenCode})`,
      institucion: 'ILUSTRE MUNICIPALIDAD DE SANTIAGO',
      institucionRut: '69.070.300-9',
      presupuestoEstimado: 4850000,
      fechaInicioPostulaciones: '2026-07-15 08:30',
      fechaCierrePostulaciones: '2026-07-22 12:00',
      fechaResultado: dateStr,
      direccionEntrega: 'ALAMEDA N°1500, SANTIAGO',
      region: 'Región Metropolitana de Santiago',
      plazoEntrega: '3 dias',
      observaciones: isOC ? 'ORDEN DE COMPRA INGRESADA Y ACEPTADA POR TIENDA CONVENIO MARCO.' : 'EVALUACIÓN AUTOMÁTICA REALIZADA EN MERCADO PÚBLICO.',
      postuladoPor: `[SISTEMA] (${activeCompany !== 'Consolidado' ? activeCompany : 'AMINORTE'})`,
      empresaMatch: activeCompany !== 'Consolidado' ? activeCompany : 'Aminorte',
      participantes: [
        {
          posicion: 1,
          nombre: activeCompany === 'V-MOCCS' ? 'V-MOCCS SPA' : 'AMINORTE DISTRIBUIDORA SPA',

          rut: '76.882.110-3',
          montoNeto: 3950000,
          montoIvaInc: 4700500,
          resultado: 'ADJUDICADO',
          esNuestraEmpresa: true
        },
        {
          posicion: 2,
          nombre: 'PROVEEDORA CENTRAL CHILE LTDA',
          rut: '77.990.220-5',
          montoNeto: 4200000,
          montoIvaInc: 4998000,
          resultado: 'No adjudicado'
        },
        {
          posicion: 3,
          nombre: 'DISTRIBUIDORA DE INSUMOS DEL NORTE SPA',
          rut: '78.551.400-K',
          montoNeto: 4600000,
          montoIvaInc: 5474000,
          resultado: 'No adjudicado'
        }
      ]
    };

    setAdjudicacionesList(prev => [newAdj, ...prev]);
    setSelectedCodigo(newAdj.codigo);

    if (onSimulateNewAdjudication) {
      onSimulateNewAdjudication(newAdj);
    }

    setShowToast(`🔔 ¡NUEVO RESULTADO RECIBIDO! Proceso / OC ${newAdj.codigo} ingresado en la plataforma BidCoop.`);
    setTimeout(() => setShowToast(null), 5000);
  };

  const handlePrintReport = () => {
    window.print();
  };

  const activePortalName = activeCompany === 'Consolidado' ? 'AMINORTE / V-MOCCS / BIDCOOP' : activeCompany;
  const activeDomain = activeCompany === 'Consolidado' ? 'WWW.BIDCOOP.CL' : `WWW.${activeCompany.toLowerCase()}.CL`;

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      
      {/* REAL-TIME ALERT TOAST BANNER */}
      {showToast && (
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-bold p-4 rounded-2xl shadow-2xl border-2 border-white/20 flex items-center justify-between animate-bounce">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎉</span>
            <div>
              <p className="text-sm font-black tracking-wide uppercase">Aviso de Nueva Adjudicación / Orden de Compra CM</p>
              <p className="text-xs font-medium text-emerald-100">{showToast}</p>
            </div>
          </div>
          <button 
            onClick={() => setShowToast(null)}
            className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-xl font-bold uppercase transition"
          >
            Entendido
          </button>
        </div>
      )}

      {/* TOP CONTROL BAR & SUMMARY COUNTERS */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
              Seguimiento y Adjudicaciones BidCoop ({filteredList.length} Registros)
            </h1>
            <span className="bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border border-blue-300 dark:border-blue-800">
              {activeCompany === 'Consolidado' ? 'Todas las Empresas' : activeCompany}
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Visualiza los participantes, montos postulados y resultados de Compras Ágiles, Licitaciones, Grandes Compras y Órdenes de Compra por Convenio Marco.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
          {/* Simulation button */}
          <button
            onClick={handleTriggerNewAdjudication}
            className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white font-bold text-xs px-4 py-2.5 rounded-2xl shadow-lg shadow-blue-500/20 flex items-center gap-2 transition active:scale-95"
            title="Simular la llegada de un nuevo resultado o OC de Convenio Marco"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span>Simular Resultado / OC</span>
          </button>

          {/* Export / Print */}
          <button
            onClick={handlePrintReport}
            className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs px-4 py-2.5 rounded-2xl border border-slate-300 dark:border-slate-700 flex items-center gap-2 transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            <span>Imprimir</span>
          </button>
        </div>
      </div>

      {/* FILTER TABS AND PROCESS SELECTOR */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* Modality Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
          {[
            { id: 'Todas', label: 'Todas' },
            { id: 'Compra Ágil', label: '⚡ Compras Ágiles' },
            { id: 'Licitación', label: '🏛️ Licitaciones' },
            { id: 'Grandes Compras', label: '🛍️ Grandes Compras' },
            { id: 'Órdenes de Compra CM', label: '📦 Órdenes de Compra CM' }
          ].map(mod => (
            <button
              key={mod.id}
              onClick={() => setFilterModalidad(mod.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                filterModalidad === mod.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {mod.label}
            </button>
          ))}
        </div>

        {/* Process Selector */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label className="text-xs font-bold text-slate-500 dark:text-slate-400 shrink-0">
            Seleccionar Proceso / OC:
          </label>
          <select
            value={selectedCodigo}
            onChange={(e) => setSelectedCodigo(e.target.value)}
            className="w-full sm:w-80 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-xs font-bold rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            {filteredList.map(a => (
              <option key={a.id} value={a.codigo}>
                [{a.modalidad}] {a.codigo} - {a.institucion.slice(0, 25)}...
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SEGUIMIENTO POSTULACION / OC REPORT CARD (EXACT MATCH TO ATTACHED IMAGES) */}
      {/* ========================================================================= */}
      <div className="bg-white text-slate-900 rounded-3xl border-2 border-slate-200 shadow-2xl overflow-hidden print:border-none print:shadow-none print:m-0 print:p-0">
        
        {/* GREEN LEFT MARGIN ACCENT BAR (Matches image green bar on left) */}
        <div className="flex border-l-[12px] border-emerald-500 min-h-[700px] flex-col">

          {/* 1. TOP HEADER BANNER */}
          <div className="bg-slate-100/80 border-b border-slate-300 py-8 px-6 text-center">
            <h1 className="text-3xl font-black text-slate-900 tracking-wider uppercase font-sans">
              {currentAdjudicacion.modalidad === 'Orden de Compra CM' ? 'SEGUIMIENTO ORDEN DE COMPRA CONVENIO MARCO' : 'SEGUIMIENTO POSTULACION'}
            </h1>
            <p className="text-sm font-semibold text-slate-600 mt-1">
              {currentAdjudicacion.modalidad.toUpperCase()} {currentAdjudicacion.codigo}
            </p>
          </div>

          {/* 2. GREETING NOTIFICATION MESSAGE */}
          <div className="p-8 border-b border-slate-200 bg-white">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Buen dia estimados,
            </h3>
            <p className="text-base text-slate-700 leading-relaxed">
              {currentAdjudicacion.modalidad === 'Orden de Compra CM' ? (
                <>Se informa que la siguiente <span className="font-bold">Orden de Compra por Convenio Marco</span> enviada con fecha <span className="font-bold">{currentAdjudicacion.fechaResultado}</span>, registra el siguiente detalle oficial:</>
              ) : (
                <>Se informa que la siguiente postulacion de <span className="font-bold">{currentAdjudicacion.modalidad}</span> ha obtenido con fecha <span className="font-bold">{currentAdjudicacion.fechaResultado}</span>, el siguiente resultado:</>
              )}
            </p>
          </div>

          {/* 3. CARD: ANTECEDENTES GENERALES */}
          <div className="p-6 md:p-8 space-y-8 bg-white">
            
            <div className="bg-white border border-slate-300 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-center text-slate-900 mb-6 font-sans">
                Antecedentes Generales (<a href={`https://www.mercadopublico.cl/Procurement/Modules/RFB/DetailsAcquisition.aspx?qs=PD94lVIVFUe5Sth1FXBBAA==&IdLicitacion=${currentAdjudicacion.codigo}`} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">{currentAdjudicacion.codigo}</a>)
              </h2>

              <div className="flex flex-col md:flex-row items-start gap-6">
                
                {/* Mercado Público Logo Graphic */}
                <div className="w-32 h-36 border border-slate-300 rounded-xl p-3 flex flex-col items-center justify-center bg-slate-50 shrink-0 mx-auto md:mx-0 shadow-inner">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-sky-400 p-2 flex items-center justify-center text-white font-black text-center text-xs leading-tight shadow-md">
                    ChileCompra Mercado Público
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 mt-2 text-center">Mercado Público</span>
                </div>

                {/* Antecedentes Generales Key-Value Grid */}
                <div className="flex-1 space-y-2 text-sm text-slate-800">
                  <p>
                    <span className="font-bold text-slate-900">Institución:</span>{' '}
                    <span className="text-blue-700 font-bold underline cursor-pointer">{currentAdjudicacion.institucion}</span>{' '}
                    <span>({currentAdjudicacion.institucionRut})</span>
                  </p>
                  
                  <p>
                    <span className="font-bold text-slate-900">Presupuesto Estimado / Monto Aceptado:</span>{' '}
                    <span>${currentAdjudicacion.presupuestoEstimado.toLocaleString('es-CL')} [CLP] IVA Inc</span>
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">Inicio de Postulaciones / Emisión:</span>{' '}
                    <span>{currentAdjudicacion.fechaInicioPostulaciones}</span>
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">Cierre / Aceptación de Oferta:</span>{' '}
                    <span>{currentAdjudicacion.fechaCierrePostulaciones}</span>
                  </p>

                  <p className="leading-snug">
                    <span className="font-bold text-slate-900">Nombre del Proceso / OC:</span>{' '}
                    <span className="uppercase font-semibold">{currentAdjudicacion.titulo}</span>
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">Direccion de Entrega:</span>{' '}
                    <span className="uppercase">{currentAdjudicacion.direccionEntrega}</span>
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">Region:</span>{' '}
                    <span>{currentAdjudicacion.region}</span>
                  </p>

                  <p>
                    <span className="font-bold text-slate-900">Plazo de Entrega:</span>{' '}
                    <span>{currentAdjudicacion.plazoEntrega}</span>
                  </p>

                  <p className="text-xs text-slate-700 leading-normal pt-1">
                    <span className="font-bold text-slate-900">Obs:</span>{' '}
                    <span>{currentAdjudicacion.observaciones}</span>
                  </p>

                  <p className="pt-2 font-bold text-slate-900">
                    Postulado / Gestionado por: <span className="font-semibold">{currentAdjudicacion.postuladoPor}</span>
                  </p>
                </div>

              </div>
            </div>

            {/* 4. CARD: PARTICIPANTES TABLE (Image 2) */}
            <div className="bg-white border border-slate-300 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-center text-slate-900 mb-6 font-sans">
                {currentAdjudicacion.modalidad === 'Orden de Compra CM' ? 'Proveedores y Asignación Convenio Marco' : 'Participantes'}
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse border border-slate-300">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-300">
                      <th className="py-3 px-4 border-r border-slate-300 w-12 text-center">#</th>
                      <th className="py-3 px-4 border-r border-slate-300">Nombre del Postulante / Proveedor CM</th>
                      <th className="py-3 px-4 border-r border-slate-300 text-right">Valor Postulado / Adjudicado</th>
                      <th className="py-3 px-4 text-center w-36">Resultado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentAdjudicacion.participantes.map((p) => {
                      const isWinner = p.resultado === 'ADJUDICADO';
                      return (
                        <tr 
                          key={p.posicion} 
                          className={`border-b border-slate-200 transition ${
                            p.esNuestraEmpresa 
                              ? 'bg-blue-50/80 font-medium' 
                              : p.posicion % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'
                          }`}
                        >
                          {/* Position # */}
                          <td className="py-3 px-4 border-r border-slate-300 text-center font-bold text-slate-700">
                            {p.posicion}
                          </td>

                          {/* Company Name & RUT */}
                          <td className="py-3 px-4 border-r border-slate-300">
                            <span className="font-bold text-blue-700 hover:underline cursor-pointer">
                              {p.nombre}
                            </span>{' '}
                            <span className="text-slate-600 font-medium">({p.rut})</span>
                            {p.esNuestraEmpresa && (
                              <span className="ml-2 text-[10px] font-black uppercase bg-blue-600 text-white px-2 py-0.5 rounded-full inline-block">
                                Tu Empresa
                              </span>
                            )}
                          </td>

                          {/* Postulated Amount */}
                          <td className="py-3 px-4 border-r border-slate-300 text-right">
                            <div className="font-bold text-slate-900">
                              ${p.montoNeto.toLocaleString('es-CL')}
                            </div>
                            <div className="text-xs text-slate-500">
                              (${p.montoIvaInc.toLocaleString('es-CL')} iva inc)
                            </div>
                          </td>

                          {/* Result */}
                          <td className="py-3 px-4 text-center font-bold">
                            {isWinner ? (
                              <span className="text-emerald-600 font-extrabold uppercase tracking-wide text-base">
                                ADJUDICADO
                              </span>
                            ) : (
                              <span className="text-red-600 font-bold text-sm">
                                No adjudicado
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* 5. FOOTER NOTICE */}
          <div className="mt-auto border-t border-slate-300 bg-white p-6 text-center text-xs text-slate-600 space-y-4">
            <p className="italic">
              *Este es un mensaje generado en forma automatica por AMITACORA / BIDCOOP ENGINE.
            </p>
            <div className="bg-slate-200 text-slate-800 font-black py-2 px-4 uppercase tracking-widest text-sm rounded-lg">
              Portal {activePortalName} 2026 - <a href="#" className="hover:underline">{activeDomain}</a>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
