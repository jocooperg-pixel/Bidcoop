// @ts-nocheck
import { Oportunidad, Postulacion, OrdenCompra, MiembroEquipo, VistaGuardada, Notificacion } from './types';

// ============================================================
// mockData.ts — Generado automáticamente por BidCoop v7.5
// Última sincronización oficial: 2026-08-13T15:57:09.789931+00:00
// Total registros: 231 | Confirmados: 231 | Compras Ágiles validadas: 229/229
// NO EDITAR MANUALMENTE
// ============================================================

const rawOportunidades: any = [
  {
    "id": "op-1057439-4608-COT26",
    "codigo": "1057439-4608-COT26",
    "officialCode": "1057439-4608-COT26",
    "id_compra_agil": "1057439-4608-COT26",
    "id_proceso": "1057439-4608-COT26",
    "id_cotizacion": "1057439-4608-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Compra repuestos para monitores Mindray Umec12",
    "organismo": "SERVICIO DE SALUD COQUIMBO HOSPITAL LA SERENA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 7068600,
    "amount": 7068600,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T12:51:00",
    "fechaCierre": "2026-08-12T10:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T12:51:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-12T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1057439-4608-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1057439-4608-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Compra repuestos para monitores Mindray Umec12",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1057439-4608-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 7068600,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 7068600,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1057439-4608-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "monitor",
        "monitores"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2378-155-COT26",
    "codigo": "2378-155-COT26",
    "officialCode": "2378-155-COT26",
    "id_compra_agil": "2378-155-COT26",
    "id_proceso": "2378-155-COT26",
    "id_cotizacion": "2378-155-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "“ADQUISICIÓN DE MOBILIARIO Y EQUIPAMIENTO INFANTIL, DIDÁCTICO Y DE ESTIMULACIÓN PARA BENEFICIARIOS DEL PROGRAMA CUIDAR EN COMUNIDAD”.",
    "organismo": "I MUNICIPALIDAD DE LA FLORIDA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 7000000,
    "amount": 7000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T17:53:00",
    "fechaCierre": "2026-08-10T15:30:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T17:53:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T15:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2378-155-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2378-155-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "“ADQUISICIÓN DE MOBILIARIO Y EQUIPAMIENTO INFANTIL, DIDÁCTICO Y DE ESTIMULACIÓN PARA BENEFICIARIOS DEL PROGRAMA CUIDAR EN COMUNIDAD”.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2378-155-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 7000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 7000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2378-155-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "mobiliario"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2408-320-COT26",
    "codigo": "2408-320-COT26",
    "officialCode": "2408-320-COT26",
    "id_compra_agil": "2408-320-COT26",
    "id_proceso": "2408-320-COT26",
    "id_cotizacion": "2408-320-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "(ID: 2943)  MOBILIARIO PARA OFICINAS PROGRAMA RESIDENCIA FAMILIAR ADOLESCENTE AÑO 2026.",
    "organismo": "I MUNICIPALIDAD DE LOS ANGELES",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 6950000,
    "amount": 6950000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T16:12:00",
    "fechaCierre": "2026-08-10T15:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T16:12:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T15:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2408-320-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2408-320-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "(ID: 2943)  MOBILIARIO PARA OFICINAS PROGRAMA RESIDENCIA FAMILIAR ADOLESCENTE AÑO 2026.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2408-320-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 6950000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 6950000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2408-320-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "mobiliario"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2923-602-COT26",
    "codigo": "2923-602-COT26",
    "officialCode": "2923-602-COT26",
    "id_compra_agil": "2923-602-COT26",
    "id_proceso": "2923-602-COT26",
    "id_cotizacion": "2923-602-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "TONER Y TINTAS",
    "organismo": "I MUNICIPALIDAD DE CHANARAL",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 6000000,
    "amount": 6000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T09:18:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 90,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T09:18:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2923-602-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2923-602-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "TONER Y TINTAS",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2923-602-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 6000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 6000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2923-602-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 90,
      "keywordsCoincidentes": [
        "tóner",
        "toner",
        "tinta",
        "tintas"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2427-829-COT26",
    "codigo": "2427-829-COT26",
    "officialCode": "2427-829-COT26",
    "id_compra_agil": "2427-829-COT26",
    "id_proceso": "2427-829-COT26",
    "id_cotizacion": "2427-829-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Adquisición de sillas y escritorios, Departamento de Logística.",
    "organismo": "I MUNICIPALIDAD DE VALPARAISO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 6000000,
    "amount": 6000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T09:17:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T09:17:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2427-829-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2427-829-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Adquisición de sillas y escritorios, Departamento de Logística.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2427-829-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 6000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 6000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2427-829-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "silla",
        "escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3167-131-COT26",
    "codigo": "3167-131-COT26",
    "officialCode": "3167-131-COT26",
    "id_compra_agil": "3167-131-COT26",
    "id_proceso": "3167-131-COT26",
    "id_cotizacion": "3167-131-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICION TONER IMPRESORA DIGITAL",
    "organismo": "IMPRENTA DE LA ARMADA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 5600000,
    "amount": 5600000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T08:33:00",
    "fechaCierre": "2026-08-10T08:00:00",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T08:33:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3167-131-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3167-131-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICION TONER IMPRESORA DIGITAL",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3167-131-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 5600000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 5600000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3167-131-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 80,
      "keywordsCoincidentes": [
        "tóner",
        "toner",
        "impresora"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1082957-130-COT26",
    "codigo": "1082957-130-COT26",
    "officialCode": "1082957-130-COT26",
    "id_compra_agil": "1082957-130-COT26",
    "id_proceso": "1082957-130-COT26",
    "id_cotizacion": "1082957-130-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "SERVICIO ALMACENAJE DE MOBILIARIO Y BIENES PARA OFICINAS DE PROCHILE SANTIAGO",
    "organismo": "DIRECCION GENERAL DE PROMOCION DE EXPORTACIONES",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 4950000,
    "amount": 4950000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T17:51:00",
    "fechaCierre": "2026-08-10T18:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T17:51:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T18:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1082957-130-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1082957-130-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "SERVICIO ALMACENAJE DE MOBILIARIO Y BIENES PARA OFICINAS DE PROCHILE SANTIAGO",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1082957-130-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 4950000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 4950000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1082957-130-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "mobiliario"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2705-1085-COT26",
    "codigo": "2705-1085-COT26",
    "officialCode": "2705-1085-COT26",
    "id_compra_agil": "2705-1085-COT26",
    "id_proceso": "2705-1085-COT26",
    "id_cotizacion": "2705-1085-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "“ADQUISICIÓN DE TINTAS PARA IMPRESORAS – SC 3121”",
    "organismo": "UNIVERSIDAD DEL BIO BIO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 4760000,
    "amount": 4760000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T11:39:00",
    "fechaCierre": "2026-08-10T08:00:00",
    "matchScore": 90,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T11:39:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2705-1085-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2705-1085-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "“ADQUISICIÓN DE TINTAS PARA IMPRESORAS – SC 3121”",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2705-1085-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 4760000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 4760000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2705-1085-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 90,
      "keywordsCoincidentes": [
        "tinta",
        "tintas",
        "impresora",
        "impresoras"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3637-173-COT26",
    "codigo": "3637-173-COT26",
    "officialCode": "3637-173-COT26",
    "id_compra_agil": "3637-173-COT26",
    "id_proceso": "3637-173-COT26",
    "id_cotizacion": "3637-173-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICIÓN DE INSUMOS Y ACCESORIOS PARA REPARACIONES DE INMUEBLE",
    "organismo": "ILUSTRE MUNICIPALIDAD DE SAN GREGORIO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 4600000,
    "amount": 4600000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T15:19:00",
    "fechaCierre": "2026-08-11T13:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T15:19:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T13:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3637-173-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3637-173-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICIÓN DE INSUMOS Y ACCESORIOS PARA REPARACIONES DE INMUEBLE",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3637-173-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 4600000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 4600000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3637-173-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "mueble"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1274667-293-COT26",
    "codigo": "1274667-293-COT26",
    "officialCode": "1274667-293-COT26",
    "id_compra_agil": "1274667-293-COT26",
    "id_proceso": "1274667-293-COT26",
    "id_cotizacion": "1274667-293-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "RVB - TALONARIO DE PARA PASAJES IDA Y VUELTA AYSEN-COYHAIQUE",
    "organismo": "CENTRO DE SALUD FAMILIAR PUERTO AYSÉN",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región de Aysén del General Carlos Ibáñez del Campo",
    "monto": 4500000,
    "amount": 4500000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T14:57:00",
    "fechaCierre": "2026-08-10T07:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T14:57:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T07:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1274667-293-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1274667-293-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "RVB - TALONARIO DE PARA PASAJES IDA Y VUELTA AYSEN-COYHAIQUE",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1274667-293-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 4500000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 4500000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1274667-293-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "talonario"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3731-116-COT26",
    "codigo": "3731-116-COT26",
    "officialCode": "3731-116-COT26",
    "id_compra_agil": "3731-116-COT26",
    "id_proceso": "3731-116-COT26",
    "id_cotizacion": "3731-116-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ARTICULOS DE OFICINA",
    "organismo": "I MUNICIPALIDAD DE CHIMBARONGO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 4285426,
    "amount": 4285426,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T15:58:00",
    "fechaCierre": "2026-08-11T10:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T15:58:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3731-116-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3731-116-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ARTICULOS DE OFICINA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3731-116-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 4285426,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 4285426,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3731-116-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "artículos de oficina",
        "articulos de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2934-72-COT26",
    "codigo": "2934-72-COT26",
    "officialCode": "2934-72-COT26",
    "id_compra_agil": "2934-72-COT26",
    "id_proceso": "2934-72-COT26",
    "id_cotizacion": "2934-72-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "IMPRESORAS MULTIFUNCIONAL Y BÁSICA",
    "organismo": "I MUNICIPALIDAD DE ALHUE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 4050000,
    "amount": 4050000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T11:10:00",
    "fechaCierre": "2026-08-11T08:00:00",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T11:10:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2934-72-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2934-72-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "IMPRESORAS MULTIFUNCIONAL Y BÁSICA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2934-72-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 4050000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 4050000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2934-72-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 80,
      "keywordsCoincidentes": [
        "impresora",
        "impresoras",
        "multifuncional"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-5740-146-COT26",
    "codigo": "5740-146-COT26",
    "officialCode": "5740-146-COT26",
    "id_compra_agil": "5740-146-COT26",
    "id_proceso": "5740-146-COT26",
    "id_cotizacion": "5740-146-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICION DE MOBILIARIO",
    "organismo": "DIRECCION REGIONAL DE GENDARMERIA DE CHILE, REGION",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 4000000,
    "amount": 4000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T15:55:00",
    "fechaCierre": "2026-08-10T15:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T15:55:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T15:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (5740-146-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5740-146-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICION DE MOBILIARIO",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5740-146-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 4000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 4000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "5740-146-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "mobiliario"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-722-85-COT26",
    "codigo": "722-85-COT26",
    "officialCode": "722-85-COT26",
    "id_compra_agil": "722-85-COT26",
    "id_proceso": "722-85-COT26",
    "id_cotizacion": "722-85-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Materiales de Oficina",
    "organismo": "GOBIERNO REGIONAL DE LA ARAUCANIA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 4000000,
    "amount": 4000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T16:31:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T16:31:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (722-85-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=722-85-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Materiales de Oficina",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=722-85-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 4000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 4000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "722-85-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2923-605-COT26",
    "codigo": "2923-605-COT26",
    "officialCode": "2923-605-COT26",
    "id_compra_agil": "2923-605-COT26",
    "id_proceso": "2923-605-COT26",
    "id_cotizacion": "2923-605-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "MATERIALES DE OFICINA--STOCK BODEGA MUNICIPAL",
    "organismo": "I MUNICIPALIDAD DE CHANARAL",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 4000000,
    "amount": 4000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T11:57:00",
    "fechaCierre": "2026-08-10T15:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T11:57:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T15:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2923-605-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2923-605-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "MATERIALES DE OFICINA--STOCK BODEGA MUNICIPAL",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2923-605-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 4000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 4000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2923-605-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2460-760-COT26",
    "codigo": "2460-760-COT26",
    "officialCode": "2460-760-COT26",
    "id_compra_agil": "2460-760-COT26",
    "id_proceso": "2460-760-COT26",
    "id_cotizacion": "2460-760-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Adquisición de Pinturas e Insumos",
    "organismo": "I MUNICIPALIDAD DE PROVIDENCIA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 3882450,
    "amount": 3882450,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T10:02:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T10:02:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2460-760-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2460-760-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Adquisición de Pinturas e Insumos",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2460-760-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 3882450,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 3882450,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2460-760-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "pintura"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1426102-58-COT26",
    "codigo": "1426102-58-COT26",
    "officialCode": "1426102-58-COT26",
    "id_compra_agil": "1426102-58-COT26",
    "id_proceso": "1426102-58-COT26",
    "id_cotizacion": "1426102-58-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICIÓN DE TÓNERES, TAMBORES Y TINTAS ORIGINALES PARA IMPRESORAS.",
    "organismo": "SERVICIO NACIONAL DE REINSERCION SOCIAL JUVENIL",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 3510000,
    "amount": 3510000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T10:00:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T10:00:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1426102-58-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1426102-58-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICIÓN DE TÓNERES, TAMBORES Y TINTAS ORIGINALES PARA IMPRESORAS.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1426102-58-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 3510000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 3510000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1426102-58-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 98,
      "keywordsCoincidentes": [
        "tóner",
        "toner",
        "tinta",
        "tintas",
        "tambor",
        "impresora",
        "impresoras"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3692-225-COT26",
    "codigo": "3692-225-COT26",
    "officialCode": "3692-225-COT26",
    "id_compra_agil": "3692-225-COT26",
    "id_proceso": "3692-225-COT26",
    "id_cotizacion": "3692-225-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Adquisición de Insumos para impresoras, CESFAM El Quisco",
    "organismo": "I MUNICIPALIDAD DE EL QUISCO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 3000000,
    "amount": 3000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T10:44:00",
    "fechaCierre": "2026-08-11T15:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T10:44:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T15:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3692-225-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3692-225-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Adquisición de Insumos para impresoras, CESFAM El Quisco",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3692-225-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 3000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 3000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3692-225-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "impresora",
        "impresoras"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1057539-3332-COT26",
    "codigo": "1057539-3332-COT26",
    "officialCode": "1057539-3332-COT26",
    "id_compra_agil": "1057539-3332-COT26",
    "id_proceso": "1057539-3332-COT26",
    "id_cotizacion": "1057539-3332-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "compra de material de escritorio 2 semestre 2026",
    "organismo": "HOSPITAL PUERTO MONTT SERVICIO DE SALUD DEL RELONCAVI",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 3000000,
    "amount": 3000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T11:52:00",
    "fechaCierre": "2026-08-11T08:30:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T11:52:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T08:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1057539-3332-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1057539-3332-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "compra de material de escritorio 2 semestre 2026",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1057539-3332-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 3000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 3000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1057539-3332-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-5153-1540-COT26",
    "codigo": "5153-1540-COT26",
    "officialCode": "5153-1540-COT26",
    "id_compra_agil": "5153-1540-COT26",
    "id_proceso": "5153-1540-COT26",
    "id_cotizacion": "5153-1540-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "MFV_SOBRE TROQUELADOS PARA CUBIERTO (COD. 261730)",
    "organismo": "UNIVERSIDAD DE CHILE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 3000000,
    "amount": 3000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T11:03:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T11:03:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (5153-1540-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5153-1540-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "MFV_SOBRE TROQUELADOS PARA CUBIERTO (COD. 261730)",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5153-1540-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 3000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 3000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "5153-1540-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "sobre"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2585-965-COT26",
    "codigo": "2585-965-COT26",
    "officialCode": "2585-965-COT26",
    "id_compra_agil": "2585-965-COT26",
    "id_proceso": "2585-965-COT26",
    "id_cotizacion": "2585-965-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQ. INSUMOS DE IMPRESIÓN, ORD N°3350, CONVENIO CALLE TERRITORIO 2, DIDECO, CBA, IMA",
    "organismo": "I MUNICIPALIDAD DE ARICA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 2850000,
    "amount": 2850000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T10:46:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T10:46:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2585-965-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2585-965-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQ. INSUMOS DE IMPRESIÓN, ORD N°3350, CONVENIO CALLE TERRITORIO 2, DIDECO, CBA, IMA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2585-965-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2850000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2850000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2585-965-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "insumos de impresión"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2322-473-COT26",
    "codigo": "2322-473-COT26",
    "officialCode": "2322-473-COT26",
    "id_compra_agil": "2322-473-COT26",
    "id_proceso": "2322-473-COT26",
    "id_cotizacion": "2322-473-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Materiales de librería para Talleres Artísticos Culturales",
    "organismo": "I MUNICIPALIDAD DE VALLENAR",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 2800000,
    "amount": 2800000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T17:14:00",
    "fechaCierre": "2026-08-11T10:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T17:14:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2322-473-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2322-473-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Materiales de librería para Talleres Artísticos Culturales",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2322-473-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2800000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2800000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2322-473-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "librería",
        "libreria"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2207-643-COT26",
    "codigo": "2207-643-COT26",
    "officialCode": "2207-643-COT26",
    "id_compra_agil": "2207-643-COT26",
    "id_proceso": "2207-643-COT26",
    "id_cotizacion": "2207-643-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "INSUMOS BODEGA ESCRITORIO",
    "organismo": "SERVICIO DE SALUD HOSPITAL DE PICHILEMU",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 2800000,
    "amount": 2800000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T18:16:00",
    "fechaCierre": "2026-08-12T08:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T18:16:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-12T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2207-643-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2207-643-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "INSUMOS BODEGA ESCRITORIO",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2207-643-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2800000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2800000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2207-643-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3508-557-COT26",
    "codigo": "3508-557-COT26",
    "officialCode": "3508-557-COT26",
    "id_compra_agil": "3508-557-COT26",
    "id_proceso": "3508-557-COT26",
    "id_cotizacion": "3508-557-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "TINTA PARA IMPRESORA",
    "organismo": "I MUNICIPALIDAD DE CHONCHI",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 2700000,
    "amount": 2700000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T11:06:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T11:06:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3508-557-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3508-557-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "TINTA PARA IMPRESORA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3508-557-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2700000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2700000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3508-557-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "tinta",
        "impresora"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2294-1621-COT26",
    "codigo": "2294-1621-COT26",
    "officialCode": "2294-1621-COT26",
    "id_compra_agil": "2294-1621-COT26",
    "id_proceso": "2294-1621-COT26",
    "id_cotizacion": "2294-1621-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "REPARACION DE PLOTTER LICEO MARTA DONOSO ESPEJO FONDOS SEP",
    "organismo": "I MUNICIPALIDAD DE TALCA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 2650000,
    "amount": 2650000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T14:56:00",
    "fechaCierre": "2026-08-10T11:05:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T14:56:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T11:05:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2294-1621-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2294-1621-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "REPARACION DE PLOTTER LICEO MARTA DONOSO ESPEJO FONDOS SEP",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2294-1621-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2650000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2650000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2294-1621-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "plotter"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2270-239-COT26",
    "codigo": "2270-239-COT26",
    "officialCode": "2270-239-COT26",
    "id_compra_agil": "2270-239-COT26",
    "id_proceso": "2270-239-COT26",
    "id_cotizacion": "2270-239-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Exp N°59921 - Adquisicion de Cuaderno y Calendario Epidemiologico - Epidemiologia; Salud Publica.",
    "organismo": "SUBSECRETARIA DE SALUD PUBLICA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 2629900,
    "amount": 2629900,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T17:57:00",
    "fechaCierre": "2026-08-11T12:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T17:57:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T12:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2270-239-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2270-239-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Exp N°59921 - Adquisicion de Cuaderno y Calendario Epidemiologico - Epidemiologia; Salud Publica.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2270-239-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2629900,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2629900,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2270-239-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "cuaderno"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2389-431-COT26",
    "codigo": "2389-431-COT26",
    "officialCode": "2389-431-COT26",
    "id_compra_agil": "2389-431-COT26",
    "id_proceso": "2389-431-COT26",
    "id_cotizacion": "2389-431-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Adquisición de mobiliario clínico y administrativo",
    "organismo": "I MUNICIPALIDAD DE PUCON",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 2500000,
    "amount": 2500000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T15:42:00",
    "fechaCierre": "2026-08-15T16:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T15:42:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-15T16:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2389-431-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2389-431-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Adquisición de mobiliario clínico y administrativo",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2389-431-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2500000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2500000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2389-431-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "mobiliario"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2765-388-COT26",
    "codigo": "2765-388-COT26",
    "officialCode": "2765-388-COT26",
    "id_compra_agil": "2765-388-COT26",
    "id_proceso": "2765-388-COT26",
    "id_cotizacion": "2765-388-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICIÓN IMPRESORA DE TARJETAS PVC PARA COMUNICACIONES Y RR.PP. LA CISTERNA",
    "organismo": "I MUNICIPALIDAD DE LA CISTERNA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 2500000,
    "amount": 2500000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T17:34:00",
    "fechaCierre": "2026-08-12T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T17:34:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-12T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2765-388-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2765-388-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICIÓN IMPRESORA DE TARJETAS PVC PARA COMUNICACIONES Y RR.PP. LA CISTERNA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2765-388-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2500000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2500000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2765-388-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "impresora"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2980-385-COT26",
    "codigo": "2980-385-COT26",
    "officialCode": "2980-385-COT26",
    "id_compra_agil": "2980-385-COT26",
    "id_proceso": "2980-385-COT26",
    "id_cotizacion": "2980-385-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "FAMEFA / SA 28-2026 / ADQUISICIÓN Y SUMINISTRO DE MATERIALES DE OFICINA",
    "organismo": "Comando de Personal-CEAFOSS",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 2500000,
    "amount": 2500000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T15:34:00",
    "fechaCierre": "2026-08-12T12:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T15:34:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-12T12:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2980-385-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2980-385-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "FAMEFA / SA 28-2026 / ADQUISICIÓN Y SUMINISTRO DE MATERIALES DE OFICINA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2980-385-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2500000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2500000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2980-385-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1965-273-COT26",
    "codigo": "1965-273-COT26",
    "officialCode": "1965-273-COT26",
    "id_compra_agil": "1965-273-COT26",
    "id_proceso": "1965-273-COT26",
    "id_cotizacion": "1965-273-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICION DE MOBILIARIO UNIDADES PENALES",
    "organismo": "Dirección Regional de Gendarmeria - Pta. Arenas",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 2500000,
    "amount": 2500000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T10:55:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T10:55:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1965-273-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1965-273-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICION DE MOBILIARIO UNIDADES PENALES",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1965-273-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2500000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2500000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1965-273-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "mobiliario"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-507428-289-COT26",
    "codigo": "507428-289-COT26",
    "officialCode": "507428-289-COT26",
    "id_compra_agil": "507428-289-COT26",
    "id_proceso": "507428-289-COT26",
    "id_cotizacion": "507428-289-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Sillas ergonómicas para personal SCD y administrativos sub. SAMU Chiloé",
    "organismo": "SERVICIO DE SALUD CHILOE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región de Los Lagos",
    "monto": 2500000,
    "amount": 2500000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T10:13:00",
    "fechaCierre": "2026-08-11T08:30:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T10:13:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T08:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (507428-289-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=507428-289-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Sillas ergonómicas para personal SCD y administrativos sub. SAMU Chiloé",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=507428-289-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2500000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2500000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "507428-289-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "silla"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-557639-1959-COT26",
    "codigo": "557639-1959-COT26",
    "officialCode": "557639-1959-COT26",
    "id_compra_agil": "557639-1959-COT26",
    "id_proceso": "557639-1959-COT26",
    "id_cotizacion": "557639-1959-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "INSUMOS DE OFICINA - LIC J.V. LASTARRIA",
    "organismo": "CORP MUNICIPAL DE SERVICIOS PUBLICOS TRASPASADOS DE RANCAGUA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 2400000,
    "amount": 2400000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-08T21:10:00",
    "fechaCierre": "2026-08-10T16:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-08T21:10:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T16:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (557639-1959-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=557639-1959-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "INSUMOS DE OFICINA - LIC J.V. LASTARRIA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=557639-1959-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2400000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2400000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "557639-1959-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "insumos de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1718-856-COT26",
    "codigo": "1718-856-COT26",
    "officialCode": "1718-856-COT26",
    "id_compra_agil": "1718-856-COT26",
    "id_proceso": "1718-856-COT26",
    "id_cotizacion": "1718-856-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "AREA MUNICIPAL/SIC 19427/SECPLA/COMUNICACIONES/TONERS",
    "organismo": "I MUNICIPALIDAD DE SAN RAMON",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 2400000,
    "amount": 2400000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T11:19:00",
    "fechaCierre": "2026-08-10T11:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T11:19:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T11:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1718-856-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1718-856-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "AREA MUNICIPAL/SIC 19427/SECPLA/COMUNICACIONES/TONERS",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1718-856-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2400000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2400000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1718-856-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "tóner",
        "toner"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-986278-70-COT26",
    "codigo": "986278-70-COT26",
    "officialCode": "986278-70-COT26",
    "id_compra_agil": "986278-70-COT26",
    "id_proceso": "986278-70-COT26",
    "id_cotizacion": "986278-70-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Mobiliario para carrera Técnico de nivel superior en Podología Clínica / CFT de la región de la Araucania",
    "organismo": "CENTRO DE FORMACION TECNICA DE LA REGION DE LA ARAUCANIA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región de La Araucanía",
    "monto": 2391900,
    "amount": 2391900,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T16:18:00",
    "fechaCierre": "2026-08-10T13:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T16:18:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T13:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (986278-70-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=986278-70-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Mobiliario para carrera Técnico de nivel superior en Podología Clínica / CFT de la región de la Araucania",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=986278-70-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2391900,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2391900,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "986278-70-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "mobiliario"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3508-558-COT26",
    "codigo": "3508-558-COT26",
    "officialCode": "3508-558-COT26",
    "id_compra_agil": "3508-558-COT26",
    "id_proceso": "3508-558-COT26",
    "id_cotizacion": "3508-558-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "CARTUCHOS DE TINTA",
    "organismo": "I MUNICIPALIDAD DE CHONCHI",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 2100000,
    "amount": 2100000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T11:25:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T11:25:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3508-558-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3508-558-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "CARTUCHOS DE TINTA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3508-558-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2100000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2100000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3508-558-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 80,
      "keywordsCoincidentes": [
        "tinta",
        "cartucho",
        "cartuchos"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3885-254-COT26",
    "codigo": "3885-254-COT26",
    "officialCode": "3885-254-COT26",
    "id_compra_agil": "3885-254-COT26",
    "id_proceso": "3885-254-COT26",
    "id_cotizacion": "3885-254-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "MATERIALES DE ASEO PISCINA Y PCD",
    "organismo": "I MUNICIPALIDAD DE PICA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 2040000,
    "amount": 2040000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T10:41:00",
    "fechaCierre": "2026-08-10T08:30:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T10:41:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3885-254-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3885-254-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "MATERIALES DE ASEO PISCINA Y PCD",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3885-254-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2040000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2040000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3885-254-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "pc"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3383-42-COT26",
    "codigo": "3383-42-COT26",
    "officialCode": "3383-42-COT26",
    "id_compra_agil": "3383-42-COT26",
    "id_proceso": "3383-42-COT26",
    "id_cotizacion": "3383-42-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "TINTAS Y TONERS PARA IMPRESORAS",
    "organismo": "Ejercito de Chile",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 2034186,
    "amount": 2034186,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T11:58:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 98,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T11:58:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3383-42-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3383-42-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "TINTAS Y TONERS PARA IMPRESORAS",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3383-42-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2034186,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2034186,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3383-42-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 98,
      "keywordsCoincidentes": [
        "tóner",
        "toner",
        "tinta",
        "tintas",
        "impresora",
        "impresoras"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-449-267-COT26",
    "codigo": "449-267-COT26",
    "officialCode": "449-267-COT26",
    "id_compra_agil": "449-267-COT26",
    "id_proceso": "449-267-COT26",
    "id_cotizacion": "449-267-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Generador a bencina y focos led",
    "organismo": "I MUNICIPALIDAD DE LA REINA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 2000000,
    "amount": 2000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T16:23:00",
    "fechaCierre": "2026-08-11T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T16:23:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (449-267-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=449-267-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Generador a bencina y focos led",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=449-267-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "449-267-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "led"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3017-593-COT26",
    "codigo": "3017-593-COT26",
    "officialCode": "3017-593-COT26",
    "id_compra_agil": "3017-593-COT26",
    "id_proceso": "3017-593-COT26",
    "id_cotizacion": "3017-593-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "MUEBLES PARA PROGRAMA RED LOCAL DE APOYO Y CUIDADOS",
    "organismo": "I MUNICIPALIDAD DE LOTA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 2000000,
    "amount": 2000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T15:33:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T15:33:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3017-593-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3017-593-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "MUEBLES PARA PROGRAMA RED LOCAL DE APOYO Y CUIDADOS",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3017-593-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3017-593-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "mueble"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3567-305-COT26",
    "codigo": "3567-305-COT26",
    "officialCode": "3567-305-COT26",
    "id_compra_agil": "3567-305-COT26",
    "id_proceso": "3567-305-COT26",
    "id_cotizacion": "3567-305-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "SERVICIO REPARACIÓN DE MANTENCIÓN Y REPARACIÓN IMPRESORAS Y PLOTER.",
    "organismo": "I MUNICIPALIDAD DE FLORIDA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 2000000,
    "amount": 2000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T15:01:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T15:01:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3567-305-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3567-305-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "SERVICIO REPARACIÓN DE MANTENCIÓN Y REPARACIÓN IMPRESORAS Y PLOTER.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3567-305-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3567-305-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "impresora",
        "impresoras"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1175-251-COT26",
    "codigo": "1175-251-COT26",
    "officialCode": "1175-251-COT26",
    "id_compra_agil": "1175-251-COT26",
    "id_proceso": "1175-251-COT26",
    "id_cotizacion": "1175-251-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Compra de servicio de Impresión de material educativo “Rotafolio educativo de escritorio Medicina del Estilo de Vida”.",
    "organismo": "SERVICIO DE SALUD ARAUCANIA SUR",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 2000000,
    "amount": 2000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T14:33:00",
    "fechaCierre": "2026-08-10T14:40:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T14:33:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T14:40:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1175-251-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1175-251-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Compra de servicio de Impresión de material educativo “Rotafolio educativo de escritorio Medicina del Estilo de Vida”.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1175-251-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1175-251-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3712-405-COT26",
    "codigo": "3712-405-COT26",
    "officialCode": "3712-405-COT26",
    "id_compra_agil": "3712-405-COT26",
    "id_proceso": "3712-405-COT26",
    "id_cotizacion": "3712-405-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Materiales de Oficina para la Secretaría Comunal de Planificación.",
    "organismo": "I MUNICIPALIDAD DE LOS VILOS",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 2000000,
    "amount": 2000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T11:30:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T11:30:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3712-405-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3712-405-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Materiales de Oficina para la Secretaría Comunal de Planificación.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3712-405-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3712-405-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3703-316-COT26",
    "codigo": "3703-316-COT26",
    "officialCode": "3703-316-COT26",
    "id_compra_agil": "3703-316-COT26",
    "id_proceso": "3703-316-COT26",
    "id_cotizacion": "3703-316-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Adquisición de mobiliario y otros",
    "organismo": "I MUNICIPALIDAD DE HUASCO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 2000000,
    "amount": 2000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T10:50:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T10:50:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3703-316-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3703-316-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Adquisición de mobiliario y otros",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3703-316-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3703-316-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "mobiliario"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1035206-118-COT26",
    "codigo": "1035206-118-COT26",
    "officialCode": "1035206-118-COT26",
    "id_compra_agil": "1035206-118-COT26",
    "id_proceso": "1035206-118-COT26",
    "id_cotizacion": "1035206-118-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Insumos Impresoras Viña del Mar y Limache",
    "organismo": "CENTRO DE FORMACION TECNICA ESTATAL DE LA REGION DE VALPARAISO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región de Valparaíso",
    "monto": 2000000,
    "amount": 2000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T09:21:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T09:21:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1035206-118-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1035206-118-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Insumos Impresoras Viña del Mar y Limache",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1035206-118-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 2000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 2000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1035206-118-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "impresora",
        "impresoras"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2682-233-COT26",
    "codigo": "2682-233-COT26",
    "officialCode": "2682-233-COT26",
    "id_compra_agil": "2682-233-COT26",
    "id_proceso": "2682-233-COT26",
    "id_cotizacion": "2682-233-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Insumos de Impresión",
    "organismo": "I MUNICIPALIDAD DE INDEPENDENCIA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 1900000,
    "amount": 1900000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T10:18:00",
    "fechaCierre": "2026-08-10T08:30:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T10:18:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2682-233-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2682-233-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Insumos de Impresión",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2682-233-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1900000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1900000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2682-233-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "insumos de impresión"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3017-586-COT26",
    "codigo": "3017-586-COT26",
    "officialCode": "3017-586-COT26",
    "id_compra_agil": "3017-586-COT26",
    "id_proceso": "3017-586-COT26",
    "id_cotizacion": "3017-586-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "MATERIALES DE OFICINA",
    "organismo": "I MUNICIPALIDAD DE LOTA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 1892000,
    "amount": 1892000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T10:41:00",
    "fechaCierre": "2026-08-10T09:30:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T10:41:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3017-586-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3017-586-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "MATERIALES DE OFICINA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3017-586-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1892000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1892000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3017-586-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3544-218-COT26",
    "codigo": "3544-218-COT26",
    "officialCode": "3544-218-COT26",
    "id_compra_agil": "3544-218-COT26",
    "id_proceso": "3544-218-COT26",
    "id_cotizacion": "3544-218-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQ DE MATERIALES DE PINTURA",
    "organismo": "Ejercito de Chile",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 1841000,
    "amount": 1841000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T15:20:00",
    "fechaCierre": "2026-08-10T15:30:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T15:20:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T15:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3544-218-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3544-218-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQ DE MATERIALES DE PINTURA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3544-218-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1841000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1841000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3544-218-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "pintura"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1431841-881-COT26",
    "codigo": "1431841-881-COT26",
    "officialCode": "1431841-881-COT26",
    "id_compra_agil": "1431841-881-COT26",
    "id_proceso": "1431841-881-COT26",
    "id_cotizacion": "1431841-881-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "SM 5469 - 7115 MATERIALES DE OFICINA DESAL Y ESPACIO AMIGABLE",
    "organismo": "MUNICIPALIDAD DE RECOLETA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 1820000,
    "amount": 1820000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T11:23:00",
    "fechaCierre": "2026-08-10T08:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T11:23:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1431841-881-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1431841-881-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "SM 5469 - 7115 MATERIALES DE OFICINA DESAL Y ESPACIO AMIGABLE",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1431841-881-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1820000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1820000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1431841-881-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2793-712-COT26",
    "codigo": "2793-712-COT26",
    "officialCode": "2793-712-COT26",
    "id_compra_agil": "2793-712-COT26",
    "id_proceso": "2793-712-COT26",
    "id_cotizacion": "2793-712-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICION DE MOBILIARIO PARA HABILITACION DE OFICINA",
    "organismo": "Iluste Municipalidad de Huechuraba",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 1819986,
    "amount": 1819986,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T12:51:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T12:51:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2793-712-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2793-712-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICION DE MOBILIARIO PARA HABILITACION DE OFICINA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2793-712-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1819986,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1819986,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2793-712-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "mobiliario"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1057543-159-COT26",
    "codigo": "1057543-159-COT26",
    "officialCode": "1057543-159-COT26",
    "id_compra_agil": "1057543-159-COT26",
    "id_proceso": "1057543-159-COT26",
    "id_cotizacion": "1057543-159-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "VARIOS ESCRITORIO",
    "organismo": "SERVICIO DE SALUD TALCAHUANO HOSPITAL DE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 1800000,
    "amount": 1800000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T11:25:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T11:25:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1057543-159-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1057543-159-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "VARIOS ESCRITORIO",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1057543-159-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1800000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1800000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1057543-159-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3208-124-COT26",
    "codigo": "3208-124-COT26",
    "officialCode": "3208-124-COT26",
    "id_compra_agil": "3208-124-COT26",
    "id_proceso": "3208-124-COT26",
    "id_cotizacion": "3208-124-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICIÓN DE BATERIAS 12V LPC SALINAS",
    "organismo": "GOBERNACION MARITIMA DE IQUIQUE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 1729603,
    "amount": 1729603,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T16:40:00",
    "fechaCierre": "2026-08-11T09:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T16:40:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3208-124-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3208-124-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICIÓN DE BATERIAS 12V LPC SALINAS",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3208-124-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1729603,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1729603,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3208-124-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "pc"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-5251-721-COT26",
    "codigo": "5251-721-COT26",
    "officialCode": "5251-721-COT26",
    "id_compra_agil": "5251-721-COT26",
    "id_proceso": "5251-721-COT26",
    "id_cotizacion": "5251-721-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Mobiliario sala de lactancia",
    "organismo": "UNIVERSIDAD TECNOLOGICA METROPOLITANA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 1710000,
    "amount": 1710000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T16:20:00",
    "fechaCierre": "2026-08-11T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T16:20:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (5251-721-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5251-721-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Mobiliario sala de lactancia",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5251-721-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1710000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1710000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "5251-721-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "mobiliario"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1432083-1207-COT26",
    "codigo": "1432083-1207-COT26",
    "officialCode": "1432083-1207-COT26",
    "id_compra_agil": "1432083-1207-COT26",
    "id_proceso": "1432083-1207-COT26",
    "id_cotizacion": "1432083-1207-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "CSF, RBD 6934 - ESCUELA NUEVA ESPAÑA DE LOS LAGOS, SC 3367, OTROS MOBILIARIOS. SEP, 29-04-999",
    "organismo": "Servicio local de educación pública de Valdivia",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región de Los Lagos",
    "monto": 1641450,
    "amount": 1641450,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T15:10:00",
    "fechaCierre": "2026-08-10T07:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T15:10:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T07:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1432083-1207-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1432083-1207-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "CSF, RBD 6934 - ESCUELA NUEVA ESPAÑA DE LOS LAGOS, SC 3367, OTROS MOBILIARIOS. SEP, 29-04-999",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1432083-1207-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1641450,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1641450,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1432083-1207-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "mobiliario"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3316-117-COT26",
    "codigo": "3316-117-COT26",
    "officialCode": "3316-117-COT26",
    "id_compra_agil": "3316-117-COT26",
    "id_proceso": "3316-117-COT26",
    "id_cotizacion": "3316-117-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICIÓN DE TINTAS PARA LAS IMPRESORAS DE LA OFICINA REGISTRO CURRICULAR",
    "organismo": "Dirección de Educación, Doctrina e Historia de Carabineros",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 1600000,
    "amount": 1600000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-09T12:30:00",
    "fechaCierre": "2026-08-10T17:30:00",
    "matchScore": 90,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-09T12:30:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T17:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3316-117-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3316-117-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICIÓN DE TINTAS PARA LAS IMPRESORAS DE LA OFICINA REGISTRO CURRICULAR",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3316-117-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1600000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1600000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3316-117-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 90,
      "keywordsCoincidentes": [
        "tinta",
        "tintas",
        "impresora",
        "impresoras"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2132-127-COT26",
    "codigo": "2132-127-COT26",
    "officialCode": "2132-127-COT26",
    "id_compra_agil": "2132-127-COT26",
    "id_proceso": "2132-127-COT26",
    "id_cotizacion": "2132-127-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Adquisición de insumos de papelería y artículos de escritorio para oficina",
    "organismo": "SUBSECRETARIA DE SALUD PUBLICA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 1600000,
    "amount": 1600000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T16:19:00",
    "fechaCierre": "2026-08-10T10:30:00",
    "matchScore": 90,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T16:19:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2132-127-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2132-127-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Adquisición de insumos de papelería y artículos de escritorio para oficina",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2132-127-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1600000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1600000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2132-127-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 90,
      "keywordsCoincidentes": [
        "papelería",
        "papeleria",
        "artículos de escritorio",
        "articulos de escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1004823-85-COT26",
    "codigo": "1004823-85-COT26",
    "officialCode": "1004823-85-COT26",
    "id_compra_agil": "1004823-85-COT26",
    "id_proceso": "1004823-85-COT26",
    "id_cotizacion": "1004823-85-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Adquisición de insumos de librería, papelería y otros para la ejecución de programas del Fondo Concursable, Proyectos:“Cuidar es Amar”, “Las Emociones”, “Enfermedades No Transmisibles” y “Siempre Acti",
    "organismo": "CENTRO DE FORMACION TECNICA DE LA REGION DE COQUIMBO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 1600000,
    "amount": 1600000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T10:57:00",
    "fechaCierre": "2026-08-10T12:30:00",
    "matchScore": 90,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T10:57:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T12:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1004823-85-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1004823-85-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Adquisición de insumos de librería, papelería y otros para la ejecución de programas del Fondo Concursable, Proyectos:“Cuidar es Amar”, “Las Emociones”, “Enfermedades No Transmisibles” y “Siempre Acti",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1004823-85-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1600000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1600000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1004823-85-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 90,
      "keywordsCoincidentes": [
        "papelería",
        "papeleria",
        "librería",
        "libreria"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3747-238-COT26",
    "codigo": "3747-238-COT26",
    "officialCode": "3747-238-COT26",
    "id_compra_agil": "3747-238-COT26",
    "id_proceso": "3747-238-COT26",
    "id_cotizacion": "3747-238-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "TONER PARA IMPRESORAS DE LOS ESTABLECIMIENTOS DE SALUD. ADJUNTAR FICHA TECNICA E INDICAR PLAZO DE ENTREGA.",
    "organismo": "I MUNICIPALIDAD DE SAN IGNACIO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 1500000,
    "amount": 1500000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T16:39:00",
    "fechaCierre": "2026-08-10T12:00:00",
    "matchScore": 90,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T16:39:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T12:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3747-238-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3747-238-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "TONER PARA IMPRESORAS DE LOS ESTABLECIMIENTOS DE SALUD. ADJUNTAR FICHA TECNICA E INDICAR PLAZO DE ENTREGA.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3747-238-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1500000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1500000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3747-238-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 90,
      "keywordsCoincidentes": [
        "tóner",
        "toner",
        "impresora",
        "impresoras"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-630424-438-COT26",
    "codigo": "630424-438-COT26",
    "officialCode": "630424-438-COT26",
    "id_compra_agil": "630424-438-COT26",
    "id_proceso": "630424-438-COT26",
    "id_cotizacion": "630424-438-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "MANTENCION Y REPARACION IMPRESORA RISO EN LICEO CEI",
    "organismo": "I MUNICIPALIDAD DE LAGO RANCO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 1500000,
    "amount": 1500000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T14:17:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T14:17:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (630424-438-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=630424-438-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "MANTENCION Y REPARACION IMPRESORA RISO EN LICEO CEI",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=630424-438-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1500000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1500000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "630424-438-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "impresora"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-564953-564-COT26",
    "codigo": "564953-564-COT26",
    "officialCode": "564953-564-COT26",
    "id_compra_agil": "564953-564-COT26",
    "id_proceso": "564953-564-COT26",
    "id_cotizacion": "564953-564-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "INSTALACIÓN DE PIZARRAS - LICEO SANTA MARÍA DE LAS CONDES",
    "organismo": "CORP DE EDUCACION Y SALUD DE LAS CONDES",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 1500000,
    "amount": 1500000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T11:43:00",
    "fechaCierre": "2026-08-10T12:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T11:43:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T12:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (564953-564-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=564953-564-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "INSTALACIÓN DE PIZARRAS - LICEO SANTA MARÍA DE LAS CONDES",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=564953-564-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1500000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1500000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "564953-564-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "pizarra"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-4452-362-COT26",
    "codigo": "4452-362-COT26",
    "officialCode": "4452-362-COT26",
    "id_compra_agil": "4452-362-COT26",
    "id_proceso": "4452-362-COT26",
    "id_cotizacion": "4452-362-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "PROG APOYO ADM 08/2026 TONER Y TAMBOR",
    "organismo": "SERVICIO DE SALUD DEL MAULE HOSPITAL DE CURICO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 1500000,
    "amount": 1500000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T16:39:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T16:39:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (4452-362-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4452-362-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "PROG APOYO ADM 08/2026 TONER Y TAMBOR",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4452-362-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1500000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1500000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "4452-362-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 80,
      "keywordsCoincidentes": [
        "tóner",
        "toner",
        "tambor"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2440-1256-COT26",
    "codigo": "2440-1256-COT26",
    "officialCode": "2440-1256-COT26",
    "id_compra_agil": "2440-1256-COT26",
    "id_proceso": "2440-1256-COT26",
    "id_cotizacion": "2440-1256-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "MATERIALES  DE LIBRERÍA SALA CUNA Y JARDÍN INFANTÍL ANGELITOS  DE CURICÓ",
    "organismo": "I MUNICIPALIDAD DE CURICO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región del Maule",
    "monto": 1500000,
    "amount": 1500000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T16:02:00",
    "fechaCierre": "2026-08-10T08:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T16:02:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2440-1256-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2440-1256-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "MATERIALES  DE LIBRERÍA SALA CUNA Y JARDÍN INFANTÍL ANGELITOS  DE CURICÓ",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2440-1256-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1500000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1500000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2440-1256-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "librería",
        "libreria"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1057415-96-COT26",
    "codigo": "1057415-96-COT26",
    "officialCode": "1057415-96-COT26",
    "id_compra_agil": "1057415-96-COT26",
    "id_proceso": "1057415-96-COT26",
    "id_cotizacion": "1057415-96-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICIÓN ARTICULOS DE LIBRERÍA PROGRAMA DENTAL",
    "organismo": "SERVICIO SALUD BIO BIO HOSPITAL NACIMIENTO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 1500000,
    "amount": 1500000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T10:50:00",
    "fechaCierre": "2026-08-11T12:00:00",
    "matchScore": 90,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T10:50:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T12:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1057415-96-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1057415-96-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICIÓN ARTICULOS DE LIBRERÍA PROGRAMA DENTAL",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1057415-96-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1500000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1500000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1057415-96-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 90,
      "keywordsCoincidentes": [
        "librería",
        "libreria",
        "artículos de librería",
        "articulos de libreria"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-952751-156-COT26",
    "codigo": "952751-156-COT26",
    "officialCode": "952751-156-COT26",
    "id_compra_agil": "952751-156-COT26",
    "id_proceso": "952751-156-COT26",
    "id_cotizacion": "952751-156-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "OPI 23.899 TALONARIOS DE SOLICITUD CIUDADANA SAN PEDRO DE LA PAZ",
    "organismo": "DIRECCIÓN DE ADMINISTRACIÓN DE SALUD DAS",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 1400000,
    "amount": 1400000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T11:30:00",
    "fechaCierre": "2026-08-11T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T11:30:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (952751-156-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=952751-156-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "OPI 23.899 TALONARIOS DE SOLICITUD CIUDADANA SAN PEDRO DE LA PAZ",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=952751-156-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1400000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1400000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "952751-156-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "talonario"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3017-579-COT26",
    "codigo": "3017-579-COT26",
    "officialCode": "3017-579-COT26",
    "id_compra_agil": "3017-579-COT26",
    "id_proceso": "3017-579-COT26",
    "id_cotizacion": "3017-579-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "MATERIALES DE OFICINA PARA PROGRAMA RED LOCAL DE APOYOS Y CUIDADOS, LOTA",
    "organismo": "I MUNICIPALIDAD DE LOTA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 1400000,
    "amount": 1400000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T10:36:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T10:36:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3017-579-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3017-579-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "MATERIALES DE OFICINA PARA PROGRAMA RED LOCAL DE APOYOS Y CUIDADOS, LOTA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3017-579-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1400000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1400000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3017-579-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1069417-714-COT26",
    "codigo": "1069417-714-COT26",
    "officialCode": "1069417-714-COT26",
    "id_compra_agil": "1069417-714-COT26",
    "id_proceso": "1069417-714-COT26",
    "id_cotizacion": "1069417-714-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Equipos Computacionales y Tintas para Impresoras para Unidad de Convenio dependiente de la Dirección de Salud Municipal de Chillán",
    "organismo": "Dirección  de Salud Municipal Chillán",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región de Ñuble",
    "monto": 1372000,
    "amount": 1372000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T16:19:00",
    "fechaCierre": "2026-08-10T15:00:00",
    "matchScore": 90,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T16:19:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T15:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1069417-714-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1069417-714-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Equipos Computacionales y Tintas para Impresoras para Unidad de Convenio dependiente de la Dirección de Salud Municipal de Chillán",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1069417-714-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1372000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1372000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1069417-714-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 90,
      "keywordsCoincidentes": [
        "tinta",
        "tintas",
        "impresora",
        "impresoras"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2343-365-COT26",
    "codigo": "2343-365-COT26",
    "officialCode": "2343-365-COT26",
    "id_compra_agil": "2343-365-COT26",
    "id_proceso": "2343-365-COT26",
    "id_cotizacion": "2343-365-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Adquisición de materiales de oficina / pedido 972",
    "organismo": "I MUNICIPALIDAD DE SANTIAGO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 1331817,
    "amount": 1331817,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T15:50:00",
    "fechaCierre": "2026-08-11T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T15:50:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2343-365-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2343-365-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Adquisición de materiales de oficina / pedido 972",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2343-365-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1331817,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1331817,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2343-365-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-4494-450-COT26",
    "codigo": "4494-450-COT26",
    "officialCode": "4494-450-COT26",
    "id_compra_agil": "4494-450-COT26",
    "id_proceso": "4494-450-COT26",
    "id_cotizacion": "4494-450-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "INSUMOS DE OFICINA Y ESCOLARES PARA PROGRAMA OLN",
    "organismo": "I MUNICIPALIDAD DE PENCO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 1252486,
    "amount": 1252486,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T13:16:00",
    "fechaCierre": "2026-08-11T09:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T13:16:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (4494-450-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4494-450-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "INSUMOS DE OFICINA Y ESCOLARES PARA PROGRAMA OLN",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4494-450-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1252486,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1252486,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "4494-450-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "insumos de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2733-388-COT26",
    "codigo": "2733-388-COT26",
    "officialCode": "2733-388-COT26",
    "id_compra_agil": "2733-388-COT26",
    "id_proceso": "2733-388-COT26",
    "id_cotizacion": "2733-388-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "SC 42298 - ESC. N°674 - ADQUISICIÓN DE TINTAS Y TONER PARA USO ESCUELA ROSALINA PESCIO VARGAS.",
    "organismo": "I MUNICIPALIDAD DE PENAFLOR",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 1220000,
    "amount": 1220000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T13:48:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 90,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T13:48:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2733-388-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2733-388-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "SC 42298 - ESC. N°674 - ADQUISICIÓN DE TINTAS Y TONER PARA USO ESCUELA ROSALINA PESCIO VARGAS.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2733-388-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1220000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1220000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2733-388-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 90,
      "keywordsCoincidentes": [
        "tóner",
        "toner",
        "tinta",
        "tintas"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3602-83-COT26",
    "codigo": "3602-83-COT26",
    "officialCode": "3602-83-COT26",
    "id_compra_agil": "3602-83-COT26",
    "id_proceso": "3602-83-COT26",
    "id_cotizacion": "3602-83-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Mobiliario Estrategia Telesalud",
    "organismo": "I MUNICIPALIDAD DE PAPUDO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 1200000,
    "amount": 1200000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T17:30:00",
    "fechaCierre": "2026-08-11T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T17:30:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3602-83-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3602-83-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Mobiliario Estrategia Telesalud",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3602-83-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1200000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1200000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3602-83-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "mobiliario"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-889473-1464-COT26",
    "codigo": "889473-1464-COT26",
    "officialCode": "889473-1464-COT26",
    "id_compra_agil": "889473-1464-COT26",
    "id_proceso": "889473-1464-COT26",
    "id_cotizacion": "889473-1464-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "SC 8341 - Artículos de Oficina",
    "organismo": "UNIVERSIDAD DE O'HIGGINS",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 1200000,
    "amount": 1200000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T15:59:00",
    "fechaCierre": "2026-08-09T18:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T15:59:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-09T18:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (889473-1464-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=889473-1464-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "SC 8341 - Artículos de Oficina",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=889473-1464-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1200000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1200000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "889473-1464-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "artículos de oficina",
        "articulos de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2864-226-COT26",
    "codigo": "2864-226-COT26",
    "officialCode": "2864-226-COT26",
    "id_compra_agil": "2864-226-COT26",
    "id_proceso": "2864-226-COT26",
    "id_cotizacion": "2864-226-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "TINTAS ESC LAS CASCADAS",
    "organismo": "I MUNICIPALIDAD PUERTO OCTAY",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 1200000,
    "amount": 1200000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T13:09:00",
    "fechaCierre": "2026-08-10T08:30:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T13:09:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2864-226-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2864-226-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "TINTAS ESC LAS CASCADAS",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2864-226-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1200000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1200000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2864-226-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "tinta",
        "tintas"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-5416-530-COT26",
    "codigo": "5416-530-COT26",
    "officialCode": "5416-530-COT26",
    "id_compra_agil": "5416-530-COT26",
    "id_proceso": "5416-530-COT26",
    "id_cotizacion": "5416-530-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Tóner",
    "organismo": "UNIVERSIDAD DE LA SERENA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 1150000,
    "amount": 1150000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T11:24:00",
    "fechaCierre": "2026-08-10T11:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T11:24:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T11:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (5416-530-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5416-530-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Tóner",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5416-530-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1150000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1150000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "5416-530-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "tóner",
        "toner"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-4993-130-COT26",
    "codigo": "4993-130-COT26",
    "officialCode": "4993-130-COT26",
    "id_compra_agil": "4993-130-COT26",
    "id_proceso": "4993-130-COT26",
    "id_cotizacion": "4993-130-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICION DE LICENCIAS DE CONDUCIR DIGITAL CON SOBRE TERMOSELLABLE",
    "organismo": "MUNICIPALIDAD DE CHOLCHOL",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 1140000,
    "amount": 1140000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T14:58:00",
    "fechaCierre": "2026-08-12T15:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T14:58:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-12T15:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (4993-130-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4993-130-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICION DE LICENCIAS DE CONDUCIR DIGITAL CON SOBRE TERMOSELLABLE",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4993-130-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1140000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1140000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "4993-130-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "sobre"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3533-285-COT26",
    "codigo": "3533-285-COT26",
    "officialCode": "3533-285-COT26",
    "id_compra_agil": "3533-285-COT26",
    "id_proceso": "3533-285-COT26",
    "id_cotizacion": "3533-285-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Adquisición de pinturas y materiales de ferretería para ser utilizados por la FT Húsares",
    "organismo": "Ejercito de Chile",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 1121240,
    "amount": 1121240,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T16:11:00",
    "fechaCierre": "2026-08-10T08:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T16:11:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3533-285-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3533-285-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Adquisición de pinturas y materiales de ferretería para ser utilizados por la FT Húsares",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3533-285-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1121240,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1121240,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3533-285-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "pintura"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2422-484-COT26",
    "codigo": "2422-484-COT26",
    "officialCode": "2422-484-COT26",
    "id_compra_agil": "2422-484-COT26",
    "id_proceso": "2422-484-COT26",
    "id_cotizacion": "2422-484-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "SOL. 945790, MATERIALES DE OFICINA",
    "organismo": "I MUNICIPALIDAD DE PUENTE ALTO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 1092000,
    "amount": 1092000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T10:50:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T10:50:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2422-484-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2422-484-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "SOL. 945790, MATERIALES DE OFICINA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2422-484-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1092000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1092000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2422-484-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-647431-36-COT26",
    "codigo": "647431-36-COT26",
    "officialCode": "647431-36-COT26",
    "id_compra_agil": "647431-36-COT26",
    "id_proceso": "647431-36-COT26",
    "id_cotizacion": "647431-36-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ELEMENTOS DE ESCRITORIO",
    "organismo": "Ejercito de Chile",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 1050000,
    "amount": 1050000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T17:51:00",
    "fechaCierre": "2026-08-10T15:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T17:51:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T15:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (647431-36-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=647431-36-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ELEMENTOS DE ESCRITORIO",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=647431-36-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1050000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1050000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "647431-36-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-608-4946-COT26",
    "codigo": "608-4946-COT26",
    "officialCode": "608-4946-COT26",
    "id_compra_agil": "608-4946-COT26",
    "id_proceso": "608-4946-COT26",
    "id_cotizacion": "608-4946-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "err/ Cartuchos de papel",
    "organismo": "HOSPITAL DR GUSTAVO FRICKE DE VINA DEL MAR",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 1000000,
    "amount": 1000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-08T08:18:00",
    "fechaCierre": "2026-08-10T12:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-08T08:18:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T12:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (608-4946-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=608-4946-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "err/ Cartuchos de papel",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=608-4946-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "608-4946-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "cartucho",
        "cartuchos"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2446-730-COT26",
    "codigo": "2446-730-COT26",
    "officialCode": "2446-730-COT26",
    "id_compra_agil": "2446-730-COT26",
    "id_proceso": "2446-730-COT26",
    "id_cotizacion": "2446-730-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISCION MATERIALES DE OFICINA (PROGRAMA REGISTRO SOCIAL)",
    "organismo": "I MUNICIPALIDAD DE COQUIMBO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 1000000,
    "amount": 1000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T17:04:00",
    "fechaCierre": "2026-08-11T13:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T17:04:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T13:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2446-730-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2446-730-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISCION MATERIALES DE OFICINA (PROGRAMA REGISTRO SOCIAL)",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2446-730-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2446-730-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1426100-61-COT26",
    "codigo": "1426100-61-COT26",
    "officialCode": "1426100-61-COT26",
    "id_compra_agil": "1426100-61-COT26",
    "id_proceso": "1426100-61-COT26",
    "id_cotizacion": "1426100-61-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Adquisición de materiales de oficina para la Dirección Regional de los rios",
    "organismo": "SERVICIO NACIONAL DE REINSERCION SOCIAL JUVENIL",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región de Los Ríos",
    "monto": 1000000,
    "amount": 1000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T15:36:00",
    "fechaCierre": "2026-08-11T15:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T15:36:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T15:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1426100-61-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1426100-61-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Adquisición de materiales de oficina para la Dirección Regional de los rios",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1426100-61-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1426100-61-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1101892-142-COT26",
    "codigo": "1101892-142-COT26",
    "officialCode": "1101892-142-COT26",
    "id_compra_agil": "1101892-142-COT26",
    "id_proceso": "1101892-142-COT26",
    "id_cotizacion": "1101892-142-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Insumos de oficina.",
    "organismo": "INSTITUTO DE INVESTIGACIONES AGROPECUARIAS",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 1000000,
    "amount": 1000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T15:20:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T15:20:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1101892-142-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1101892-142-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Insumos de oficina.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1101892-142-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1101892-142-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "insumos de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2371-284-COT26",
    "codigo": "2371-284-COT26",
    "officialCode": "2371-284-COT26",
    "id_compra_agil": "2371-284-COT26",
    "id_proceso": "2371-284-COT26",
    "id_cotizacion": "2371-284-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "S/P 399, EXPEDIENTE 11762, DEPARTAMENTO DE GESTIÓN DE PERSONAS, ADQUISICION DE CINTA RIBBON 800 300-350 L A, PARA IMPRESORA ZEBRA.",
    "organismo": "ILUSTRE MUNICIPALIDAD DE CERRO NAVIA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 1000000,
    "amount": 1000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T14:59:00",
    "fechaCierre": "2026-08-10T21:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T14:59:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T21:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2371-284-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2371-284-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "S/P 399, EXPEDIENTE 11762, DEPARTAMENTO DE GESTIÓN DE PERSONAS, ADQUISICION DE CINTA RIBBON 800 300-350 L A, PARA IMPRESORA ZEBRA.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2371-284-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2371-284-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "impresora"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2385-436-COT26",
    "codigo": "2385-436-COT26",
    "officialCode": "2385-436-COT26",
    "id_compra_agil": "2385-436-COT26",
    "id_proceso": "2385-436-COT26",
    "id_cotizacion": "2385-436-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Materiales de Oficina M-1642",
    "organismo": "I MUNICIPALIDAD DE CALAMA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 1000000,
    "amount": 1000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T12:25:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T12:25:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2385-436-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2385-436-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Materiales de Oficina M-1642",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2385-436-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2385-436-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1591-102-COT26",
    "codigo": "1591-102-COT26",
    "officialCode": "1591-102-COT26",
    "id_compra_agil": "1591-102-COT26",
    "id_proceso": "1591-102-COT26",
    "id_cotizacion": "1591-102-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "IMPRESIÓN DE CARPETAS INSTITUCIONALES",
    "organismo": "Servicio Nacional de Turismo",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 1000000,
    "amount": 1000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T15:40:00",
    "fechaCierre": "2026-08-13T12:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T15:40:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-13T12:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1591-102-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1591-102-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "IMPRESIÓN DE CARPETAS INSTITUCIONALES",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1591-102-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1591-102-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "carpeta"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1962-224-COT26",
    "codigo": "1962-224-COT26",
    "officialCode": "1962-224-COT26",
    "id_compra_agil": "1962-224-COT26",
    "id_proceso": "1962-224-COT26",
    "id_cotizacion": "1962-224-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "E102RT Adquisición de Mobiliario",
    "organismo": "Gendarmería de Chile - Dirección Regional de Coquimbo",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 1000000,
    "amount": 1000000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T15:00:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T15:00:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1962-224-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1962-224-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "E102RT Adquisición de Mobiliario",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1962-224-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 1000000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 1000000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1962-224-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "mobiliario"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1485-34-COT26",
    "codigo": "1485-34-COT26",
    "officialCode": "1485-34-COT26",
    "id_compra_agil": "1485-34-COT26",
    "id_proceso": "1485-34-COT26",
    "id_cotizacion": "1485-34-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Útiles de oficina Red Diuto",
    "organismo": "Departamento Provincial de Educación Bío Bío",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 995000,
    "amount": 995000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T15:07:00",
    "fechaCierre": "2026-08-13T09:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T15:07:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-13T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1485-34-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1485-34-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Útiles de oficina Red Diuto",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1485-34-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 995000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 995000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1485-34-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "útiles de oficina",
        "utiles de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-4053-108-COT26",
    "codigo": "4053-108-COT26",
    "officialCode": "4053-108-COT26",
    "id_compra_agil": "4053-108-COT26",
    "id_proceso": "4053-108-COT26",
    "id_cotizacion": "4053-108-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "MOBILIARIO PARA DESAM MARIQUINA",
    "organismo": "I MUNICIPALIDAD DE MARIQUINA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 952000,
    "amount": 952000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T10:03:00",
    "fechaCierre": "2026-08-10T11:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T10:03:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T11:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (4053-108-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4053-108-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "MOBILIARIO PARA DESAM MARIQUINA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4053-108-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 952000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 952000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "4053-108-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "mobiliario"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2464-1131-COT26",
    "codigo": "2464-1131-COT26",
    "officialCode": "2464-1131-COT26",
    "id_compra_agil": "2464-1131-COT26",
    "id_proceso": "2464-1131-COT26",
    "id_cotizacion": "2464-1131-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICIÓN ART. LIBRERIA - OP. 5228 SEGURIDAD PUBLICA",
    "organismo": "I MUNICIPALIDAD DE QUILLOTA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 950000,
    "amount": 950000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T11:55:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T11:55:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2464-1131-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2464-1131-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICIÓN ART. LIBRERIA - OP. 5228 SEGURIDAD PUBLICA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2464-1131-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 950000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 950000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2464-1131-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "librería",
        "libreria"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-552757-111-COT26",
    "codigo": "552757-111-COT26",
    "officialCode": "552757-111-COT26",
    "id_compra_agil": "552757-111-COT26",
    "id_proceso": "552757-111-COT26",
    "id_cotizacion": "552757-111-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICIÓN DE ADQUISICIÓN DE TINTAS Y TONERS PARA USO DEL DEPARTAMENTO DE SALUD MUNICIPAL DE PICHILEMU",
    "organismo": "ILUSTRE MUNICIPALIDAD DE PICHILEMU",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 928154,
    "amount": 928154,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T10:21:00",
    "fechaCierre": "2026-08-10T08:00:00",
    "matchScore": 90,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T10:21:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (552757-111-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=552757-111-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICIÓN DE ADQUISICIÓN DE TINTAS Y TONERS PARA USO DEL DEPARTAMENTO DE SALUD MUNICIPAL DE PICHILEMU",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=552757-111-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 928154,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 928154,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "552757-111-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 90,
      "keywordsCoincidentes": [
        "tóner",
        "toner",
        "tinta",
        "tintas"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-5416-532-COT26",
    "codigo": "5416-532-COT26",
    "officialCode": "5416-532-COT26",
    "id_compra_agil": "5416-532-COT26",
    "id_proceso": "5416-532-COT26",
    "id_cotizacion": "5416-532-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ARTICULOS DE OFICINA",
    "organismo": "UNIVERSIDAD DE LA SERENA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 922000,
    "amount": 922000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T16:14:00",
    "fechaCierre": "2026-08-11T16:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T16:14:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T16:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (5416-532-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5416-532-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ARTICULOS DE OFICINA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5416-532-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 922000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 922000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "5416-532-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "artículos de oficina",
        "articulos de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-602-146-COT26",
    "codigo": "602-146-COT26",
    "officialCode": "602-146-COT26",
    "id_compra_agil": "602-146-COT26",
    "id_proceso": "602-146-COT26",
    "id_cotizacion": "602-146-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Reparacion Impresora Colegio Riachuelo (SP42)",
    "organismo": "Ilustre Municipalidad de Río Negro - Educación",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 913418,
    "amount": 913418,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T11:34:00",
    "fechaCierre": "2026-08-10T08:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T11:34:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (602-146-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=602-146-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Reparacion Impresora Colegio Riachuelo (SP42)",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=602-146-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 913418,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 913418,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "602-146-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "impresora"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2428-1061-COT26",
    "codigo": "2428-1061-COT26",
    "officialCode": "2428-1061-COT26",
    "id_compra_agil": "2428-1061-COT26",
    "id_proceso": "2428-1061-COT26",
    "id_cotizacion": "2428-1061-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ESCRITORIOS Y CAJONERAS",
    "organismo": "I MUNICIPALIDAD DE QUILPUE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 900000,
    "amount": 900000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T12:28:00",
    "fechaCierre": "2026-08-10T09:30:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T12:28:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2428-1061-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2428-1061-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ESCRITORIOS Y CAJONERAS",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2428-1061-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 900000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 900000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2428-1061-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "escritorio",
        "cajonera"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-707424-22-COT26",
    "codigo": "707424-22-COT26",
    "officialCode": "707424-22-COT26",
    "id_compra_agil": "707424-22-COT26",
    "id_proceso": "707424-22-COT26",
    "id_cotizacion": "707424-22-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Fundación Integra requiere adquirir Discos de Estado Sólido (SSD) nuevos y Cargadores para Notebook tipo USB-C.",
    "organismo": "FUNDACION EDUCACIONAL PARA EL DESAROLLO INTEGRAL DE LA NIÑEZ",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 900000,
    "amount": 900000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T14:31:00",
    "fechaCierre": "2026-08-11T12:00:00",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T14:31:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T12:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (707424-22-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=707424-22-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Fundación Integra requiere adquirir Discos de Estado Sólido (SSD) nuevos y Cargadores para Notebook tipo USB-C.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=707424-22-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 900000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 900000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "707424-22-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 80,
      "keywordsCoincidentes": [
        "notebook",
        "ssd",
        "usb"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-377-294-COT26",
    "codigo": "377-294-COT26",
    "officialCode": "377-294-COT26",
    "id_compra_agil": "377-294-COT26",
    "id_proceso": "377-294-COT26",
    "id_cotizacion": "377-294-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "PAPEL PLOTTER Y MATERIAL DE OFICINA",
    "organismo": "I MUNICIPALIDAD DE ALGARROBO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 867000,
    "amount": 867000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T13:38:00",
    "fechaCierre": "2026-08-13T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T13:38:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-13T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (377-294-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=377-294-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "PAPEL PLOTTER Y MATERIAL DE OFICINA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=377-294-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 867000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 867000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "377-294-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "plotter"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-974550-5-COT26",
    "codigo": "974550-5-COT26",
    "officialCode": "974550-5-COT26",
    "id_compra_agil": "974550-5-COT26",
    "id_proceso": "974550-5-COT26",
    "id_cotizacion": "974550-5-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "TINTAS Y TONER PARA LA MZSSCN",
    "organismo": "MACRO ZONA DE SALUD SANTIAGO CENTRO NORTE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 830000,
    "amount": 830000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T10:22:00",
    "fechaCierre": "2026-08-10T15:00:00",
    "matchScore": 90,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T10:22:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T15:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (974550-5-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=974550-5-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "TINTAS Y TONER PARA LA MZSSCN",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=974550-5-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 830000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 830000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "974550-5-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 90,
      "keywordsCoincidentes": [
        "tóner",
        "toner",
        "tinta",
        "tintas"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2585-964-COT26",
    "codigo": "2585-964-COT26",
    "officialCode": "2585-964-COT26",
    "id_compra_agil": "2585-964-COT26",
    "id_proceso": "2585-964-COT26",
    "id_cotizacion": "2585-964-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQ.  TINTA Y TONER  ORD. N°3510, DIDECO  CENTRO CALLE , IMA. MMR",
    "organismo": "I MUNICIPALIDAD DE ARICA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 828700,
    "amount": 828700,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T10:56:00",
    "fechaCierre": "2026-08-11T17:00:00",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T10:56:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T17:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2585-964-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2585-964-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQ.  TINTA Y TONER  ORD. N°3510, DIDECO  CENTRO CALLE , IMA. MMR",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2585-964-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 828700,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 828700,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2585-964-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 80,
      "keywordsCoincidentes": [
        "tóner",
        "toner",
        "tinta"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1079454-507-COT26",
    "codigo": "1079454-507-COT26",
    "officialCode": "1079454-507-COT26",
    "id_compra_agil": "1079454-507-COT26",
    "id_proceso": "1079454-507-COT26",
    "id_cotizacion": "1079454-507-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICIÓN DE PINTURA IMPERMEABILIZANTES, PARA LA SECCIÓN CRIMINALISTICA AFTA, D/E 257105240",
    "organismo": "SECCIÓN COMPRAS II ZONA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 802239,
    "amount": 802239,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T15:52:00",
    "fechaCierre": "2026-08-11T12:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T15:52:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T12:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1079454-507-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1079454-507-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICIÓN DE PINTURA IMPERMEABILIZANTES, PARA LA SECCIÓN CRIMINALISTICA AFTA, D/E 257105240",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1079454-507-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 802239,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 802239,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1079454-507-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "pintura"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1230750-171-COT26",
    "codigo": "1230750-171-COT26",
    "officialCode": "1230750-171-COT26",
    "id_compra_agil": "1230750-171-COT26",
    "id_proceso": "1230750-171-COT26",
    "id_cotizacion": "1230750-171-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "SUMINISTRO TINTAS CORPORACIÓN",
    "organismo": "Corporación Municipal De Cultura y Deportes de Recoleta",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 800000,
    "amount": 800000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T13:19:00",
    "fechaCierre": "2026-08-10T11:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T13:19:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T11:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1230750-171-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1230750-171-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "SUMINISTRO TINTAS CORPORACIÓN",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1230750-171-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 800000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 800000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1230750-171-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "tinta",
        "tintas"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2940-111-COT26",
    "codigo": "2940-111-COT26",
    "officialCode": "2940-111-COT26",
    "id_compra_agil": "2940-111-COT26",
    "id_proceso": "2940-111-COT26",
    "id_cotizacion": "2940-111-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ARTICULOS DE LIBRERIA PARA ESCUELA DELICIO CARDENAS",
    "organismo": "IMunicipalidad de San Pablo - Educación",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 800000,
    "amount": 800000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T13:17:00",
    "fechaCierre": "2026-08-10T13:00:00",
    "matchScore": 90,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T13:17:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T13:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2940-111-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2940-111-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ARTICULOS DE LIBRERIA PARA ESCUELA DELICIO CARDENAS",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2940-111-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 800000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 800000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2940-111-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 90,
      "keywordsCoincidentes": [
        "librería",
        "libreria",
        "artículos de librería",
        "articulos de libreria"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2281-1427-COT26",
    "codigo": "2281-1427-COT26",
    "officialCode": "2281-1427-COT26",
    "id_compra_agil": "2281-1427-COT26",
    "id_proceso": "2281-1427-COT26",
    "id_cotizacion": "2281-1427-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Adquisición de pizarras blancas y pizarras de corcho – Programa Asuntos Indígenas",
    "organismo": "I MUNICIPALIDAD VALDIVIA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 800000,
    "amount": 800000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T13:00:00",
    "fechaCierre": "2026-08-11T12:45:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T13:00:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T12:45:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2281-1427-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2281-1427-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Adquisición de pizarras blancas y pizarras de corcho – Programa Asuntos Indígenas",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2281-1427-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 800000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 800000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2281-1427-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "pizarra"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2292-592-COT26",
    "codigo": "2292-592-COT26",
    "officialCode": "2292-592-COT26",
    "id_compra_agil": "2292-592-COT26",
    "id_proceso": "2292-592-COT26",
    "id_cotizacion": "2292-592-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICIÓN DE RESMAS PAPEL FOTOCOPIA Y TONER ORIGINAL BROTHER, PEDIDO 009280(VLN)",
    "organismo": "I MUNICIPALIDAD DE TALCA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 800000,
    "amount": 800000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T12:45:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 90,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T12:45:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2292-592-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2292-592-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICIÓN DE RESMAS PAPEL FOTOCOPIA Y TONER ORIGINAL BROTHER, PEDIDO 009280(VLN)",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2292-592-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 800000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 800000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2292-592-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 90,
      "keywordsCoincidentes": [
        "resma",
        "fotocopia",
        "tóner",
        "toner"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2408-322-COT26",
    "codigo": "2408-322-COT26",
    "officialCode": "2408-322-COT26",
    "id_compra_agil": "2408-322-COT26",
    "id_proceso": "2408-322-COT26",
    "id_cotizacion": "2408-322-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ID: 2946  “ADQUISICIÓN DE TINTAS PARA DATACARD PARA CREDENCIALES DE FUNCIONARIOS “",
    "organismo": "I MUNICIPALIDAD DE LOS ANGELES",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 800000,
    "amount": 800000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T09:52:00",
    "fechaCierre": "2026-08-13T13:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T09:52:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-13T13:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2408-322-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2408-322-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ID: 2946  “ADQUISICIÓN DE TINTAS PARA DATACARD PARA CREDENCIALES DE FUNCIONARIOS “",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2408-322-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 800000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 800000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2408-322-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "tinta",
        "tintas"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3178-782-COT26",
    "codigo": "3178-782-COT26",
    "officialCode": "3178-782-COT26",
    "id_compra_agil": "3178-782-COT26",
    "id_proceso": "3178-782-COT26",
    "id_cotizacion": "3178-782-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "IMPRESORA TINTA CONTINUA",
    "organismo": "SUBSECRETARIA DE MARINA HOSP NAVAL ALMIR",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 800000,
    "amount": 800000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T09:21:00",
    "fechaCierre": "2026-08-11T08:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T09:21:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3178-782-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3178-782-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "IMPRESORA TINTA CONTINUA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3178-782-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 800000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 800000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3178-782-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "tinta",
        "impresora"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-617807-1953-COT26",
    "codigo": "617807-1953-COT26",
    "officialCode": "617807-1953-COT26",
    "id_compra_agil": "617807-1953-COT26",
    "id_proceso": "617807-1953-COT26",
    "id_cotizacion": "617807-1953-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "HAAV COMPRA DE TONER",
    "organismo": "SERV NAC SALUD HOSPITAL DE LOS ANDES",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 789327,
    "amount": 789327,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-09T02:42:00",
    "fechaCierre": "2026-08-10T12:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-09T02:42:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T12:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (617807-1953-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=617807-1953-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "HAAV COMPRA DE TONER",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=617807-1953-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 789327,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 789327,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "617807-1953-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "tóner",
        "toner"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2710-336-COT26",
    "codigo": "2710-336-COT26",
    "officialCode": "2710-336-COT26",
    "id_compra_agil": "2710-336-COT26",
    "id_proceso": "2710-336-COT26",
    "id_cotizacion": "2710-336-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Libretas, bolsas TNT, Lapiceras personalizado según OI 4020-2026 PARA CONVENIO MAIS CESFAM FRAY JORGE.",
    "organismo": "MUNICIPALIDAD DE OVALLE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 770477,
    "amount": 770477,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T16:00:00",
    "fechaCierre": "2026-08-10T08:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T16:00:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2710-336-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2710-336-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Libretas, bolsas TNT, Lapiceras personalizado según OI 4020-2026 PARA CONVENIO MAIS CESFAM FRAY JORGE.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2710-336-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 770477,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 770477,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2710-336-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "libreta"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-662456-1-COT26",
    "codigo": "662456-1-COT26",
    "officialCode": "662456-1-COT26",
    "id_compra_agil": "662456-1-COT26",
    "id_proceso": "662456-1-COT26",
    "id_cotizacion": "662456-1-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Compra de materiales de oficina Juzgado Garantía Tocopilla.",
    "organismo": "JUzgado Garantia Tocopilla",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región de Antofagasta",
    "monto": 750000,
    "amount": 750000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T15:54:00",
    "fechaCierre": "2026-08-14T08:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T15:54:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-14T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (662456-1-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=662456-1-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Compra de materiales de oficina Juzgado Garantía Tocopilla.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=662456-1-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 750000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 750000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "662456-1-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1673-224-COT26",
    "codigo": "1673-224-COT26",
    "officialCode": "1673-224-COT26",
    "id_compra_agil": "1673-224-COT26",
    "id_proceso": "1673-224-COT26",
    "id_cotizacion": "1673-224-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Materiales de escritorio",
    "organismo": "SERVICIO DE SALUD COQUIMBO HOSPITAL VICUNA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 733000,
    "amount": 733000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T16:10:00",
    "fechaCierre": "2026-08-11T11:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T16:10:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T11:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1673-224-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1673-224-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Materiales de escritorio",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1673-224-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 733000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 733000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1673-224-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-4050-641-COT26",
    "codigo": "4050-641-COT26",
    "officialCode": "4050-641-COT26",
    "id_compra_agil": "4050-641-COT26",
    "id_proceso": "4050-641-COT26",
    "id_cotizacion": "4050-641-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ITEM 1 DE 2 :ADQUISICIÓN DE MATERIALES DE OFICINA , PROGRAMA  4 A 7",
    "organismo": "I MUNICIPALIDAD DE LONQUIMAY",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 730000,
    "amount": 730000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T09:01:00",
    "fechaCierre": "2026-08-10T08:30:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T09:01:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (4050-641-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4050-641-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ITEM 1 DE 2 :ADQUISICIÓN DE MATERIALES DE OFICINA , PROGRAMA  4 A 7",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4050-641-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 730000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 730000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "4050-641-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3938-229-COT26",
    "codigo": "3938-229-COT26",
    "officialCode": "3938-229-COT26",
    "id_compra_agil": "3938-229-COT26",
    "id_proceso": "3938-229-COT26",
    "id_cotizacion": "3938-229-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICIÓN DE TALONARIOS REGISTRO VISITAS PREDIALES PARA PDTI CURARREHUE",
    "organismo": "ILUSTRE MUNICIPALIDAD DE CURARREHUE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 714000,
    "amount": 714000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T15:52:00",
    "fechaCierre": "2026-08-10T15:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T15:52:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T15:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3938-229-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3938-229-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICIÓN DE TALONARIOS REGISTRO VISITAS PREDIALES PARA PDTI CURARREHUE",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3938-229-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 714000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 714000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3938-229-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "talonario"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-5956-83-COT26",
    "codigo": "5956-83-COT26",
    "officialCode": "5956-83-COT26",
    "id_compra_agil": "5956-83-COT26",
    "id_proceso": "5956-83-COT26",
    "id_cotizacion": "5956-83-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICIÓN TINTAS DEPARTAMENTO DE EDUCACIÓN/POSTÍTULO",
    "organismo": "UNIVERSIDAD DE ATACAMA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 700000,
    "amount": 700000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-08T11:04:00",
    "fechaCierre": "2026-08-11T17:30:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-08T11:04:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T17:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (5956-83-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5956-83-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICIÓN TINTAS DEPARTAMENTO DE EDUCACIÓN/POSTÍTULO",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5956-83-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 700000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 700000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "5956-83-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "tinta",
        "tintas"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2422-487-COT26",
    "codigo": "2422-487-COT26",
    "officialCode": "2422-487-COT26",
    "id_compra_agil": "2422-487-COT26",
    "id_proceso": "2422-487-COT26",
    "id_cotizacion": "2422-487-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "SOL. DE ADQ. N° 945762, TONER",
    "organismo": "I MUNICIPALIDAD DE PUENTE ALTO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 700000,
    "amount": 700000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-08T09:39:00",
    "fechaCierre": "2026-08-10T12:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-08T09:39:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T12:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2422-487-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2422-487-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "SOL. DE ADQ. N° 945762, TONER",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2422-487-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 700000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 700000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2422-487-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "tóner",
        "toner"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1057468-67-COT26",
    "codigo": "1057468-67-COT26",
    "officialCode": "1057468-67-COT26",
    "id_compra_agil": "1057468-67-COT26",
    "id_proceso": "1057468-67-COT26",
    "id_cotizacion": "1057468-67-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Articulo de escritorio y educativos para talleres de formación educativos Chile Crece Contigo",
    "organismo": "SERVICIO DE SALUD METROPOLITANO CENTRAL",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 700000,
    "amount": 700000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T15:07:00",
    "fechaCierre": "2026-08-10T15:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T15:07:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T15:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1057468-67-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1057468-67-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Articulo de escritorio y educativos para talleres de formación educativos Chile Crece Contigo",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1057468-67-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 700000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 700000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1057468-67-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-5742-72-COT26",
    "codigo": "5742-72-COT26",
    "officialCode": "5742-72-COT26",
    "id_compra_agil": "5742-72-COT26",
    "id_proceso": "5742-72-COT26",
    "id_cotizacion": "5742-72-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICION MATERIALES PARA TALLER DE MUEBLERIA PROYECTO OFICIO 2026",
    "organismo": "SEREMI de Educación de la Región de Los Ríos",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 700000,
    "amount": 700000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T11:41:00",
    "fechaCierre": "2026-08-10T08:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T11:41:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (5742-72-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5742-72-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICION MATERIALES PARA TALLER DE MUEBLERIA PROYECTO OFICIO 2026",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5742-72-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 700000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 700000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "5742-72-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "mueble"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-4777-588-COT26",
    "codigo": "4777-588-COT26",
    "officialCode": "4777-588-COT26",
    "id_compra_agil": "4777-588-COT26",
    "id_proceso": "4777-588-COT26",
    "id_cotizacion": "4777-588-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "MATERIALES DE ESCRITORIO PARA OFICINA DE LA MUJER",
    "organismo": "I MUNICIPALIDAD DE LA UNION",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 700000,
    "amount": 700000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T09:39:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T09:39:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (4777-588-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4777-588-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "MATERIALES DE ESCRITORIO PARA OFICINA DE LA MUJER",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4777-588-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 700000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 700000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "4777-588-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1469-2393-COT26",
    "codigo": "1469-2393-COT26",
    "officialCode": "1469-2393-COT26",
    "id_compra_agil": "1469-2393-COT26",
    "id_proceso": "1469-2393-COT26",
    "id_cotizacion": "1469-2393-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "2000042940 Pizarras",
    "organismo": "UNIVERSIDAD DE TALCA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 648000,
    "amount": 648000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T10:03:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T10:03:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1469-2393-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1469-2393-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "2000042940 Pizarras",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1469-2393-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 648000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 648000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1469-2393-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "pizarra"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3944-108-COT26",
    "codigo": "3944-108-COT26",
    "officialCode": "3944-108-COT26",
    "id_compra_agil": "3944-108-COT26",
    "id_proceso": "3944-108-COT26",
    "id_cotizacion": "3944-108-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICIÓN DE FÁRMACOS PARA TELEDERMATOLOGÍA",
    "organismo": "I MUNICIPALIDAD DE PERALILLO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 641502,
    "amount": 641502,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T11:47:00",
    "fechaCierre": "2026-08-11T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T11:47:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3944-108-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3944-108-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICIÓN DE FÁRMACOS PARA TELEDERMATOLOGÍA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3944-108-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 641502,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 641502,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3944-108-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "led"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2762-493-COT26",
    "codigo": "2762-493-COT26",
    "officialCode": "2762-493-COT26",
    "id_compra_agil": "2762-493-COT26",
    "id_proceso": "2762-493-COT26",
    "id_cotizacion": "2762-493-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICION DE APC BR900MI UPS PRO.",
    "organismo": "I MUNICIPALIDAD DE CORONEL DPTO ADMINIST",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 630000,
    "amount": 630000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T08:01:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T08:01:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2762-493-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2762-493-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICION DE APC BR900MI UPS PRO.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2762-493-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 630000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 630000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2762-493-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "pc",
        "ups"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-4170-196-COT26",
    "codigo": "4170-196-COT26",
    "officialCode": "4170-196-COT26",
    "id_compra_agil": "4170-196-COT26",
    "id_proceso": "4170-196-COT26",
    "id_cotizacion": "4170-196-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICION DE TALONARIOS  PROGRAMA PDTI",
    "organismo": "I MUNICIPALIDAD DE GALVARINO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 626506,
    "amount": 626506,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T11:05:00",
    "fechaCierre": "2026-08-10T08:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T11:05:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (4170-196-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4170-196-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICION DE TALONARIOS  PROGRAMA PDTI",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4170-196-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 626506,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 626506,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "4170-196-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "talonario"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1260453-1-COT26",
    "codigo": "1260453-1-COT26",
    "officialCode": "1260453-1-COT26",
    "id_compra_agil": "1260453-1-COT26",
    "id_proceso": "1260453-1-COT26",
    "id_cotizacion": "1260453-1-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICIÓN DE BATERÍAS DE UPS",
    "organismo": "Subcentro d Telecomunicaciones Navales d Pto Montt",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 624900,
    "amount": 624900,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T11:51:00",
    "fechaCierre": "2026-08-11T09:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T11:51:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1260453-1-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1260453-1-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICIÓN DE BATERÍAS DE UPS",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1260453-1-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 624900,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 624900,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1260453-1-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "ups"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-557639-1970-COT26",
    "codigo": "557639-1970-COT26",
    "officialCode": "557639-1970-COT26",
    "id_compra_agil": "557639-1970-COT26",
    "id_proceso": "557639-1970-COT26",
    "id_cotizacion": "557639-1970-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "RESMAS, CARTULINAS Y OTROS  - COL ABG",
    "organismo": "CORP MUNICIPAL DE SERVICIOS PUBLICOS TRASPASADOS DE RANCAGUA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 620000,
    "amount": 620000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-08T22:48:00",
    "fechaCierre": "2026-08-10T16:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-08T22:48:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T16:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (557639-1970-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=557639-1970-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "RESMAS, CARTULINAS Y OTROS  - COL ABG",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=557639-1970-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 620000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 620000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "557639-1970-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "resma"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2062-66-COT26",
    "codigo": "2062-66-COT26",
    "officialCode": "2062-66-COT26",
    "id_compra_agil": "2062-66-COT26",
    "id_proceso": "2062-66-COT26",
    "id_cotizacion": "2062-66-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "COMPRA PROYECTO SAAT LICEO FRANCISCO TELLO (ART.LIBRERIA) - DEPROV. 2026",
    "organismo": "Departamento Provincial de Educación de Cachapoal",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 602000,
    "amount": 602000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T11:42:00",
    "fechaCierre": "2026-08-10T09:30:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T11:42:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2062-66-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2062-66-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "COMPRA PROYECTO SAAT LICEO FRANCISCO TELLO (ART.LIBRERIA) - DEPROV. 2026",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2062-66-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 602000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 602000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2062-66-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "librería",
        "libreria"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2703-166-COT26",
    "codigo": "2703-166-COT26",
    "officialCode": "2703-166-COT26",
    "id_compra_agil": "2703-166-COT26",
    "id_proceso": "2703-166-COT26",
    "id_cotizacion": "2703-166-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "SC 12519, Archivadores PVC, Dir de Salud",
    "organismo": "I MUNICIPALIDAD DE TALAGANTE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 600000,
    "amount": 600000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T12:29:00",
    "fechaCierre": "2026-08-11T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T12:29:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2703-166-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2703-166-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "SC 12519, Archivadores PVC, Dir de Salud",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2703-166-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 600000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 600000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2703-166-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "archivador"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2328-864-COT26",
    "codigo": "2328-864-COT26",
    "officialCode": "2328-864-COT26",
    "id_compra_agil": "2328-864-COT26",
    "id_proceso": "2328-864-COT26",
    "id_cotizacion": "2328-864-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICIÓN DE PINTURA BLANCA TALLER DE MURALISMO - LICEO ANDRÉS BELLO / 24091",
    "organismo": "I MUNICIPALIDAD DE PUERTO MONTT",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 600000,
    "amount": 600000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T09:12:00",
    "fechaCierre": "2026-08-10T14:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T09:12:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T14:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2328-864-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2328-864-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICIÓN DE PINTURA BLANCA TALLER DE MURALISMO - LICEO ANDRÉS BELLO / 24091",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2328-864-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 600000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 600000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2328-864-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "pintura"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3926-174-COT26",
    "codigo": "3926-174-COT26",
    "officialCode": "3926-174-COT26",
    "id_compra_agil": "3926-174-COT26",
    "id_proceso": "3926-174-COT26",
    "id_cotizacion": "3926-174-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "INSUMOS /ARTICULOS Y MATERIAL DE LIBRERIA  ACTIVIDAD DE PROMOCION PGMA MAS SALUD EN COMUNIDAD",
    "organismo": "Ilustre Municipalidad de San Juan de la Costa",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 594485,
    "amount": 594485,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T10:32:00",
    "fechaCierre": "2026-08-12T09:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T10:32:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-12T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3926-174-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3926-174-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "INSUMOS /ARTICULOS Y MATERIAL DE LIBRERIA  ACTIVIDAD DE PROMOCION PGMA MAS SALUD EN COMUNIDAD",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3926-174-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 594485,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 594485,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3926-174-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "librería",
        "libreria"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1079576-65-COT26",
    "codigo": "1079576-65-COT26",
    "officialCode": "1079576-65-COT26",
    "id_compra_agil": "1079576-65-COT26",
    "id_proceso": "1079576-65-COT26",
    "id_cotizacion": "1079576-65-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICION DE MATERIALES DE ASEO, DESTINADOS A LA 5TA. COMISARIA COP CONCEPCION",
    "organismo": "SECCIÓN COMPRAS VIII ZONA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región del Biobío",
    "monto": 582000,
    "amount": 582000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T09:27:00",
    "fechaCierre": "2026-08-10T10:30:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T09:27:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1079576-65-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1079576-65-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICION DE MATERIALES DE ASEO, DESTINADOS A LA 5TA. COMISARIA COP CONCEPCION",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1079576-65-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 582000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 582000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1079576-65-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "pc"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2701-515-COT26",
    "codigo": "2701-515-COT26",
    "officialCode": "2701-515-COT26",
    "id_compra_agil": "2701-515-COT26",
    "id_proceso": "2701-515-COT26",
    "id_cotizacion": "2701-515-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Juegos mobiliario y juguetes, para Oficina Local de La Niñez (Formulario N°6) solicitado por DIDECO.",
    "organismo": "I MUNICIPALIDAD DE TALAGANTE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 560000,
    "amount": 560000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T16:38:00",
    "fechaCierre": "2026-08-10T15:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T16:38:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T15:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2701-515-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2701-515-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Juegos mobiliario y juguetes, para Oficina Local de La Niñez (Formulario N°6) solicitado por DIDECO.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2701-515-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 560000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 560000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2701-515-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "mobiliario"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1026727-296-COT26",
    "codigo": "1026727-296-COT26",
    "officialCode": "1026727-296-COT26",
    "id_compra_agil": "1026727-296-COT26",
    "id_proceso": "1026727-296-COT26",
    "id_cotizacion": "1026727-296-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Adquisición tóner para Unidad de Programación y Registro Académico del CFT.",
    "organismo": "CENTRO DE FORMACION TECNICA DE LA REGION DE TARAPACA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 550000,
    "amount": 550000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T11:01:00",
    "fechaCierre": "2026-08-10T11:30:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T11:01:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T11:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1026727-296-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1026727-296-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Adquisición tóner para Unidad de Programación y Registro Académico del CFT.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1026727-296-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 550000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 550000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1026727-296-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "tóner",
        "toner"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2432-594-COT26",
    "codigo": "2432-594-COT26",
    "officialCode": "2432-594-COT26",
    "id_compra_agil": "2432-594-COT26",
    "id_proceso": "2432-594-COT26",
    "id_cotizacion": "2432-594-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "SOL525-SEGURIDAD-TINTAS PARA IMPRESORAS.",
    "organismo": "I MUNICIPALIDAD ESTACION CENTRAL",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 540000,
    "amount": 540000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-08T12:19:00",
    "fechaCierre": "2026-08-10T11:00:00",
    "matchScore": 90,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-08T12:19:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T11:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2432-594-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2432-594-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "SOL525-SEGURIDAD-TINTAS PARA IMPRESORAS.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2432-594-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 540000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 540000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2432-594-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 90,
      "keywordsCoincidentes": [
        "tinta",
        "tintas",
        "impresora",
        "impresoras"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1411-910-COT26",
    "codigo": "1411-910-COT26",
    "officialCode": "1411-910-COT26",
    "id_compra_agil": "1411-910-COT26",
    "id_proceso": "1411-910-COT26",
    "id_cotizacion": "1411-910-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "DRM: ADQUISICIÓN DE ARTÍCULOS DE OFICINA PARA EL CCP TIL TIL",
    "organismo": "Dirección Regional de Gendarmeria - Metropolitana",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 534000,
    "amount": 534000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T10:45:00",
    "fechaCierre": "2026-08-10T10:30:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T10:45:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1411-910-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1411-910-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "DRM: ADQUISICIÓN DE ARTÍCULOS DE OFICINA PARA EL CCP TIL TIL",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1411-910-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 534000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 534000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1411-910-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "artículos de oficina",
        "articulos de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2401-677-COT26",
    "codigo": "2401-677-COT26",
    "officialCode": "2401-677-COT26",
    "id_compra_agil": "2401-677-COT26",
    "id_proceso": "2401-677-COT26",
    "id_cotizacion": "2401-677-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ESMALTE AL AGUA, RODILLOS, BROCHAS",
    "organismo": "I MUNICIPALIDAD DE RANCAGUA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 514080,
    "amount": 514080,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T13:14:00",
    "fechaCierre": "2026-08-10T16:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T13:14:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T16:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2401-677-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2401-677-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ESMALTE AL AGUA, RODILLOS, BROCHAS",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2401-677-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 514080,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 514080,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2401-677-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "esmalte al agua",
        "brocha"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-654-191-COT26",
    "codigo": "654-191-COT26",
    "officialCode": "654-191-COT26",
    "id_compra_agil": "654-191-COT26",
    "id_proceso": "654-191-COT26",
    "id_cotizacion": "654-191-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "INSUMOS PLOTTER",
    "organismo": "SERVICIO DE VIVIENDA Y URBANIZACION REGIÓN DEL BIO BIO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 510000,
    "amount": 510000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T15:07:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T15:07:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (654-191-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=654-191-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "INSUMOS PLOTTER",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=654-191-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 510000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 510000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "654-191-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "plotter"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3082-119-COT26",
    "codigo": "3082-119-COT26",
    "officialCode": "3082-119-COT26",
    "id_compra_agil": "3082-119-COT26",
    "id_proceso": "3082-119-COT26",
    "id_cotizacion": "3082-119-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Insumos de oficina DOM",
    "organismo": "I MUNICIPALIDAD DE PANQUEHUE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 506000,
    "amount": 506000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T16:07:00",
    "fechaCierre": "2026-08-10T10:30:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T16:07:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3082-119-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3082-119-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Insumos de oficina DOM",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3082-119-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 506000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 506000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3082-119-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "insumos de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3082-118-COT26",
    "codigo": "3082-118-COT26",
    "officialCode": "3082-118-COT26",
    "id_compra_agil": "3082-118-COT26",
    "id_proceso": "3082-118-COT26",
    "id_cotizacion": "3082-118-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Insumos de Oficina  DAF",
    "organismo": "I MUNICIPALIDAD DE PANQUEHUE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 500000,
    "amount": 500000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T15:59:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T15:59:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3082-118-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3082-118-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Insumos de Oficina  DAF",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3082-118-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 500000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 500000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3082-118-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "insumos de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2138-256-COT26",
    "codigo": "2138-256-COT26",
    "officialCode": "2138-256-COT26",
    "id_compra_agil": "2138-256-COT26",
    "id_proceso": "2138-256-COT26",
    "id_cotizacion": "2138-256-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "COMPRA DE TERMOLAMINADORA, LAMINAS PARA TERMOLAMINAR, GUILOTINA, ENCUADERNADORA, TINTAS COMPATIBLES CON IMPRESORA CANON PIXMA 190 M (100% COMPATIBLE) PARA PROGRAMA DE SALUD MENTAL DEL H.QUEILEN",
    "organismo": "Hospital de Queilen",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 500000,
    "amount": 500000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T13:52:00",
    "fechaCierre": "2026-08-10T15:35:00",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T13:52:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T15:35:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2138-256-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2138-256-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "COMPRA DE TERMOLAMINADORA, LAMINAS PARA TERMOLAMINAR, GUILOTINA, ENCUADERNADORA, TINTAS COMPATIBLES CON IMPRESORA CANON PIXMA 190 M (100% COMPATIBLE) PARA PROGRAMA DE SALUD MENTAL DEL H.QUEILEN",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2138-256-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 500000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 500000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2138-256-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 80,
      "keywordsCoincidentes": [
        "tinta",
        "tintas",
        "impresora"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3013-520-COT26",
    "codigo": "3013-520-COT26",
    "officialCode": "3013-520-COT26",
    "id_compra_agil": "3013-520-COT26",
    "id_proceso": "3013-520-COT26",
    "id_cotizacion": "3013-520-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Materiales de libreria",
    "organismo": "ILUSTRE MUNICIPALIDAD DE RETIRO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 500000,
    "amount": 500000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T13:17:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T13:17:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3013-520-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3013-520-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Materiales de libreria",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3013-520-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 500000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 500000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3013-520-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "librería",
        "libreria"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-643-172-COT26",
    "codigo": "643-172-COT26",
    "officialCode": "643-172-COT26",
    "id_compra_agil": "643-172-COT26",
    "id_proceso": "643-172-COT26",
    "id_cotizacion": "643-172-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "COTIZACIÓN TALONARIOS ACTAS DE REUNIÓN",
    "organismo": "SERVICIO DE VIVIENDA Y URBANIZACION V REGION",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 500000,
    "amount": 500000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T11:28:00",
    "fechaCierre": "2026-08-11T08:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T11:28:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (643-172-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=643-172-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "COTIZACIÓN TALONARIOS ACTAS DE REUNIÓN",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=643-172-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 500000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 500000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "643-172-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "talonario"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-4834-82-COT26",
    "codigo": "4834-82-COT26",
    "officialCode": "4834-82-COT26",
    "id_compra_agil": "4834-82-COT26",
    "id_proceso": "4834-82-COT26",
    "id_cotizacion": "4834-82-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "MATERIALES DE OFICINA PROG. SALUD MENTAL Y BIENESTAR PSICOSOCIAL",
    "organismo": "Ilustre Municipalidad de Cochamó - Salud",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 500000,
    "amount": 500000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T10:24:00",
    "fechaCierre": "2026-08-11T14:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T10:24:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T14:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (4834-82-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4834-82-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "MATERIALES DE OFICINA PROG. SALUD MENTAL Y BIENESTAR PSICOSOCIAL",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4834-82-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 500000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 500000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "4834-82-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1057514-108-COT26",
    "codigo": "1057514-108-COT26",
    "officialCode": "1057514-108-COT26",
    "id_compra_agil": "1057514-108-COT26",
    "id_proceso": "1057514-108-COT26",
    "id_cotizacion": "1057514-108-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "MATERIALES DE OFICINA",
    "organismo": "SERVICIO DE SALUD NUBLE HOSPITAL DE EL C",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 500000,
    "amount": 500000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T12:11:00",
    "fechaCierre": "2026-08-10T08:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T12:11:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1057514-108-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1057514-108-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "MATERIALES DE OFICINA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1057514-108-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 500000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 500000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1057514-108-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3508-552-COT26",
    "codigo": "3508-552-COT26",
    "officialCode": "3508-552-COT26",
    "id_compra_agil": "3508-552-COT26",
    "id_proceso": "3508-552-COT26",
    "id_cotizacion": "3508-552-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "MATERIALES DE LIBRERIA",
    "organismo": "I MUNICIPALIDAD DE CHONCHI",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 500000,
    "amount": 500000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T09:50:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T09:50:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3508-552-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3508-552-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "MATERIALES DE LIBRERIA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3508-552-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 500000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 500000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3508-552-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "librería",
        "libreria"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-900-402-COT26",
    "codigo": "900-402-COT26",
    "officialCode": "900-402-COT26",
    "id_compra_agil": "900-402-COT26",
    "id_proceso": "900-402-COT26",
    "id_cotizacion": "900-402-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "HDS - COMPRA DE MATERIALES DE OFICINA, BODEGA AGOSTO 2026",
    "organismo": "SERVICIO DE SALUD VALPARAISO SAN ANTONIO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 500000,
    "amount": 500000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T09:36:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T09:36:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (900-402-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=900-402-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "HDS - COMPRA DE MATERIALES DE OFICINA, BODEGA AGOSTO 2026",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=900-402-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 500000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 500000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "900-402-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3938-226-COT26",
    "codigo": "3938-226-COT26",
    "officialCode": "3938-226-COT26",
    "id_compra_agil": "3938-226-COT26",
    "id_proceso": "3938-226-COT26",
    "id_cotizacion": "3938-226-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Insumos de Oficina SECPLA",
    "organismo": "ILUSTRE MUNICIPALIDAD DE CURARREHUE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 500000,
    "amount": 500000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T09:21:00",
    "fechaCierre": "2026-08-17T09:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T09:21:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-17T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3938-226-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3938-226-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Insumos de Oficina SECPLA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3938-226-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 500000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 500000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3938-226-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "insumos de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1040758-153-COT26",
    "codigo": "1040758-153-COT26",
    "officialCode": "1040758-153-COT26",
    "id_compra_agil": "1040758-153-COT26",
    "id_proceso": "1040758-153-COT26",
    "id_cotizacion": "1040758-153-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "EXP 62472 Materiales de oficina y otros para funcionamiento. Continuidad / Administración y Funciones de Apoyo.",
    "organismo": "SUBSECRETARIA DE SALUD PUBLICA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 499990,
    "amount": 499990,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T12:38:00",
    "fechaCierre": "2026-08-11T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T12:38:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1040758-153-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1040758-153-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "EXP 62472 Materiales de oficina y otros para funcionamiento. Continuidad / Administración y Funciones de Apoyo.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1040758-153-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 499990,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 499990,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1040758-153-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3869-592-COT26",
    "codigo": "3869-592-COT26",
    "officialCode": "3869-592-COT26",
    "id_compra_agil": "3869-592-COT26",
    "id_proceso": "3869-592-COT26",
    "id_cotizacion": "3869-592-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "MATERIALES DE OFICINA",
    "organismo": "I MUNICIPALIDAD DE GORBEA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 490000,
    "amount": 490000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T16:29:00",
    "fechaCierre": "2026-08-09T18:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T16:29:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-09T18:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3869-592-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3869-592-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "MATERIALES DE OFICINA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3869-592-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 490000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 490000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3869-592-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-699360-41-COT26",
    "codigo": "699360-41-COT26",
    "officialCode": "699360-41-COT26",
    "id_compra_agil": "699360-41-COT26",
    "id_proceso": "699360-41-COT26",
    "id_cotizacion": "699360-41-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICIÓN DE 300 CARPETAS INSTITUCIONALES IMPRESAS",
    "organismo": "Dirección General de Carabineros de Chile",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 450000,
    "amount": 450000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T17:53:00",
    "fechaCierre": "2026-08-10T08:30:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T17:53:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (699360-41-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=699360-41-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICIÓN DE 300 CARPETAS INSTITUCIONALES IMPRESAS",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=699360-41-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 450000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 450000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "699360-41-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "carpeta"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2495-403-COT26",
    "codigo": "2495-403-COT26",
    "officialCode": "2495-403-COT26",
    "id_compra_agil": "2495-403-COT26",
    "id_proceso": "2495-403-COT26",
    "id_cotizacion": "2495-403-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "adquisición materiales de oficina SENDA Previene 2026",
    "organismo": "I MUNICIPALIDAD DE COYHAIQUE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 450000,
    "amount": 450000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T16:58:00",
    "fechaCierre": "2026-08-11T21:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T16:58:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T21:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2495-403-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2495-403-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "adquisición materiales de oficina SENDA Previene 2026",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2495-403-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 450000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 450000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2495-403-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3899-52-COT26",
    "codigo": "3899-52-COT26",
    "officialCode": "3899-52-COT26",
    "id_compra_agil": "3899-52-COT26",
    "id_proceso": "3899-52-COT26",
    "id_cotizacion": "3899-52-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "PROYECTOR LED",
    "organismo": "I MUNICIPALIDAD DE FUTALEUFU",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 450000,
    "amount": 450000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T16:08:00",
    "fechaCierre": "2026-08-10T12:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T16:08:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T12:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3899-52-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3899-52-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "PROYECTOR LED",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3899-52-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 450000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 450000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3899-52-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "proyector",
        "led"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3821-229-COT26",
    "codigo": "3821-229-COT26",
    "officialCode": "3821-229-COT26",
    "id_compra_agil": "3821-229-COT26",
    "id_proceso": "3821-229-COT26",
    "id_cotizacion": "3821-229-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Adquisicion Insumos para Impresoras de Centro de Salud Municipal.",
    "organismo": "I MUNICIPALIDAD DE SANTA MARIA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 450000,
    "amount": 450000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T15:26:00",
    "fechaCierre": "2026-08-10T08:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T15:26:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3821-229-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3821-229-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Adquisicion Insumos para Impresoras de Centro de Salud Municipal.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3821-229-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 450000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 450000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3821-229-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "impresora",
        "impresoras"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3508-556-COT26",
    "codigo": "3508-556-COT26",
    "officialCode": "3508-556-COT26",
    "id_compra_agil": "3508-556-COT26",
    "id_proceso": "3508-556-COT26",
    "id_cotizacion": "3508-556-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "FLUORECENTES, FOCOS Y AMPOLLETAS",
    "organismo": "I MUNICIPALIDAD DE CHONCHI",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 450000,
    "amount": 450000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T10:48:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T10:48:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3508-556-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3508-556-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "FLUORECENTES, FOCOS Y AMPOLLETAS",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3508-556-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 450000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 450000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3508-556-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "ampolleta"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-4197-195-COT26",
    "codigo": "4197-195-COT26",
    "officialCode": "4197-195-COT26",
    "id_compra_agil": "4197-195-COT26",
    "id_proceso": "4197-195-COT26",
    "id_cotizacion": "4197-195-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "“ADQUISICION MATERIALES DE ESCRITORIO PARA EL DEPARTAMENTO DE SALUD QUEMCHI” SP N°213",
    "organismo": "I MUNICIPALIDAD DE QUEMCHI",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 409710,
    "amount": 409710,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T09:20:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T09:20:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (4197-195-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4197-195-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "“ADQUISICION MATERIALES DE ESCRITORIO PARA EL DEPARTAMENTO DE SALUD QUEMCHI” SP N°213",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4197-195-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 409710,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 409710,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "4197-195-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-5504-246-COT26",
    "codigo": "5504-246-COT26",
    "officialCode": "5504-246-COT26",
    "id_compra_agil": "5504-246-COT26",
    "id_proceso": "5504-246-COT26",
    "id_cotizacion": "5504-246-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "COMPRA DE CARPETA",
    "organismo": "UNIVERSIDAD DE CHILE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 400000,
    "amount": 400000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T16:05:00",
    "fechaCierre": "2026-08-10T12:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T16:05:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T12:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (5504-246-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5504-246-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "COMPRA DE CARPETA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5504-246-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 400000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 400000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "5504-246-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "carpeta"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1643-794-COT26",
    "codigo": "1643-794-COT26",
    "officialCode": "1643-794-COT26",
    "id_compra_agil": "1643-794-COT26",
    "id_proceso": "1643-794-COT26",
    "id_cotizacion": "1643-794-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Adquisiciones de Insumos Foco Led y Megáfono/Despacho Incluido",
    "organismo": "SERVICIO NACIONAL DE SALUD HOSPITAL DE T",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 400000,
    "amount": 400000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T14:28:00",
    "fechaCierre": "2026-08-10T08:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T14:28:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1643-794-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1643-794-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Adquisiciones de Insumos Foco Led y Megáfono/Despacho Incluido",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1643-794-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 400000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 400000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1643-794-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "led"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2467-523-COT26",
    "codigo": "2467-523-COT26",
    "officialCode": "2467-523-COT26",
    "id_compra_agil": "2467-523-COT26",
    "id_proceso": "2467-523-COT26",
    "id_cotizacion": "2467-523-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICION DE CARPETAS INSTITUCIONALES PARA SECPLA",
    "organismo": "I MUNICIPALIDAD DE CHILLAN",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 400000,
    "amount": 400000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T08:59:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T08:59:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2467-523-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2467-523-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICION DE CARPETAS INSTITUCIONALES PARA SECPLA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2467-523-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 400000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 400000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2467-523-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "carpeta"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-727-32-COT26",
    "codigo": "727-32-COT26",
    "officialCode": "727-32-COT26",
    "id_compra_agil": "727-32-COT26",
    "id_proceso": "727-32-COT26",
    "id_cotizacion": "727-32-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Adquisición de Tambor y Cinta de Arrastre",
    "organismo": "FISCALIZACION Y CONTROL",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 400000,
    "amount": 400000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T17:49:00",
    "fechaCierre": "2026-08-10T14:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T17:49:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T14:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (727-32-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=727-32-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Adquisición de Tambor y Cinta de Arrastre",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=727-32-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 400000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 400000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "727-32-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "tambor"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1057486-117-COT26",
    "codigo": "1057486-117-COT26",
    "officialCode": "1057486-117-COT26",
    "id_compra_agil": "1057486-117-COT26",
    "id_proceso": "1057486-117-COT26",
    "id_cotizacion": "1057486-117-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "UPS",
    "organismo": "DIRECCION SERVICIO SALUD METROPOLITANO O",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 400000,
    "amount": 400000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T16:46:00",
    "fechaCierre": "2026-08-11T08:30:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T16:46:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T08:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1057486-117-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1057486-117-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "UPS",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1057486-117-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 400000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 400000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1057486-117-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "ups"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1622-547-COT26",
    "codigo": "1622-547-COT26",
    "officialCode": "1622-547-COT26",
    "id_compra_agil": "1622-547-COT26",
    "id_proceso": "1622-547-COT26",
    "id_cotizacion": "1622-547-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "UTILES DE ESCRITORIO PARA EL HOSPITAL DE SAN VICENTE",
    "organismo": "SERVICIO DE SALUD HOSPITAL DE SAN VICENTE DE TAGUA TAGUA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 400000,
    "amount": 400000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T12:27:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T12:27:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1622-547-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1622-547-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "UTILES DE ESCRITORIO PARA EL HOSPITAL DE SAN VICENTE",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1622-547-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 400000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 400000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1622-547-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1057501-2598-COT26",
    "codigo": "1057501-2598-COT26",
    "officialCode": "1057501-2598-COT26",
    "id_compra_agil": "1057501-2598-COT26",
    "id_proceso": "1057501-2598-COT26",
    "id_cotizacion": "1057501-2598-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ESCRITORIO DE MADERA Y REPISA DE PARED",
    "organismo": "COMPLEJO ASISTENCIAL DR. SOTERO DEL RIO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 400000,
    "amount": 400000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T11:13:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T11:13:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1057501-2598-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1057501-2598-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ESCRITORIO DE MADERA Y REPISA DE PARED",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1057501-2598-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 400000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 400000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1057501-2598-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2862-102-COT26",
    "codigo": "2862-102-COT26",
    "officialCode": "2862-102-COT26",
    "id_compra_agil": "2862-102-COT26",
    "id_proceso": "2862-102-COT26",
    "id_cotizacion": "2862-102-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "TINTAS PARA IMPRESORA.",
    "organismo": "I MUNICIPALIDAD PUERTO OCTAY",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 397000,
    "amount": 397000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T10:12:00",
    "fechaCierre": "2026-08-10T10:30:00",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T10:12:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2862-102-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2862-102-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "TINTAS PARA IMPRESORA.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2862-102-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 397000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 397000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2862-102-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 80,
      "keywordsCoincidentes": [
        "tinta",
        "tintas",
        "impresora"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1525570-30-COT26",
    "codigo": "1525570-30-COT26",
    "officialCode": "1525570-30-COT26",
    "id_compra_agil": "1525570-30-COT26",
    "id_proceso": "1525570-30-COT26",
    "id_cotizacion": "1525570-30-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Adquisición de artículos de escritorio para proyecto San Bernardo",
    "organismo": "ASOCIACIÓN DE MUNICIPIOS PARA LA SEGURIDAD COMUNIT",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 370000,
    "amount": 370000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T12:53:00",
    "fechaCierre": "2026-08-10T08:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T12:53:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1525570-30-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1525570-30-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Adquisición de artículos de escritorio para proyecto San Bernardo",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1525570-30-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 370000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 370000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1525570-30-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "artículos de escritorio",
        "articulos de escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2078-335-COT26",
    "codigo": "2078-335-COT26",
    "officialCode": "2078-335-COT26",
    "id_compra_agil": "2078-335-COT26",
    "id_proceso": "2078-335-COT26",
    "id_cotizacion": "2078-335-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Compra insumos equipo plotter, rollos papel (02) y tintas (06, 02 ccolor SC 384",
    "organismo": "SUBSECRETARIA DE SALUD PUBLICA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 366520,
    "amount": 366520,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T09:47:00",
    "fechaCierre": "2026-08-10T14:00:00",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T09:47:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T14:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2078-335-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2078-335-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Compra insumos equipo plotter, rollos papel (02) y tintas (06, 02 ccolor SC 384",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2078-335-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 366520,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 366520,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2078-335-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 80,
      "keywordsCoincidentes": [
        "tinta",
        "tintas",
        "plotter"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1736-462-COT26",
    "codigo": "1736-462-COT26",
    "officialCode": "1736-462-COT26",
    "id_compra_agil": "1736-462-COT26",
    "id_proceso": "1736-462-COT26",
    "id_cotizacion": "1736-462-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "adquisición de insumos de escritorio y otros - FORMULARIO ÚNICO DE SOLICITUD DE COMPRA N° 475",
    "organismo": "I MUNICIPALIDAD DE LA COMUNA DE EL BOSQUE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 359300,
    "amount": 359300,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T09:42:00",
    "fechaCierre": "2026-08-10T11:59:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T09:42:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T11:59:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1736-462-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1736-462-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "adquisición de insumos de escritorio y otros - FORMULARIO ÚNICO DE SOLICITUD DE COMPRA N° 475",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1736-462-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 359300,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 359300,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1736-462-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "insumos de escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-4197-196-COT26",
    "codigo": "4197-196-COT26",
    "officialCode": "4197-196-COT26",
    "id_compra_agil": "4197-196-COT26",
    "id_proceso": "4197-196-COT26",
    "id_cotizacion": "4197-196-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICION INSUMOS DE ESCRITORIO SEGÚN CONVENIO CECOSF DE LA RED DE SALUD QUEMCHI” SP N°246",
    "organismo": "I MUNICIPALIDAD DE QUEMCHI",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 349500,
    "amount": 349500,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T10:01:00",
    "fechaCierre": "2026-08-13T09:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T10:01:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-13T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (4197-196-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4197-196-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICION INSUMOS DE ESCRITORIO SEGÚN CONVENIO CECOSF DE LA RED DE SALUD QUEMCHI” SP N°246",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4197-196-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 349500,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 349500,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "4197-196-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "insumos de escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2727-467-COT26",
    "codigo": "2727-467-COT26",
    "officialCode": "2727-467-COT26",
    "id_compra_agil": "2727-467-COT26",
    "id_proceso": "2727-467-COT26",
    "id_cotizacion": "2727-467-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ARTICULOS DE LIBRERIA CONVENIO MAIS CECOSF CACHAPOAL",
    "organismo": "ILUSTRE MUNICIPALIDAD DE SAN CARLOS",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región del Libertador General Bernardo O'Higgins",
    "monto": 340000,
    "amount": 340000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T15:51:00",
    "fechaCierre": "2026-08-11T10:00:00",
    "matchScore": 90,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T15:51:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2727-467-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2727-467-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ARTICULOS DE LIBRERIA CONVENIO MAIS CECOSF CACHAPOAL",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2727-467-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 340000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 340000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2727-467-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 90,
      "keywordsCoincidentes": [
        "librería",
        "libreria",
        "artículos de librería",
        "articulos de libreria"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-4519-236-COT26",
    "codigo": "4519-236-COT26",
    "officialCode": "4519-236-COT26",
    "id_compra_agil": "4519-236-COT26",
    "id_proceso": "4519-236-COT26",
    "id_cotizacion": "4519-236-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICION ARTICULOS DE OFICINA PARA PROGRAMA FAMILIAS",
    "organismo": "I MUNICIPALIDAD DE TREHUACO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 300000,
    "amount": 300000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T16:21:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T16:21:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (4519-236-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4519-236-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICION ARTICULOS DE OFICINA PARA PROGRAMA FAMILIAS",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4519-236-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 300000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 300000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "4519-236-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "artículos de oficina",
        "articulos de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-630424-439-COT26",
    "codigo": "630424-439-COT26",
    "officialCode": "630424-439-COT26",
    "id_compra_agil": "630424-439-COT26",
    "id_proceso": "630424-439-COT26",
    "id_cotizacion": "630424-439-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "SERVICIO DE MANTENCION IMPRESORA RICOH 3003 LICEO CEI",
    "organismo": "I MUNICIPALIDAD DE LAGO RANCO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 300000,
    "amount": 300000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T14:24:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T14:24:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (630424-439-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=630424-439-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "SERVICIO DE MANTENCION IMPRESORA RICOH 3003 LICEO CEI",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=630424-439-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 300000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 300000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "630424-439-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "impresora"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-5615-595-COT26",
    "codigo": "5615-595-COT26",
    "officialCode": "5615-595-COT26",
    "id_compra_agil": "5615-595-COT26",
    "id_proceso": "5615-595-COT26",
    "id_cotizacion": "5615-595-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "TINTAS IMPRESORA MESÓN BIBLIOTECA , OFICINA DE ORGANIZACIONES COMUNITARIAS Y OFICINA DE SEGURIDAD PÚBLICA REQ. DIDECO N°243",
    "organismo": "I.Municipalidad de El Carmen",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 300000,
    "amount": 300000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T10:58:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T10:58:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (5615-595-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5615-595-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "TINTAS IMPRESORA MESÓN BIBLIOTECA , OFICINA DE ORGANIZACIONES COMUNITARIAS Y OFICINA DE SEGURIDAD PÚBLICA REQ. DIDECO N°243",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5615-595-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 300000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 300000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "5615-595-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 80,
      "keywordsCoincidentes": [
        "tinta",
        "tintas",
        "impresora"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-411-259-COT26",
    "codigo": "411-259-COT26",
    "officialCode": "411-259-COT26",
    "id_compra_agil": "411-259-COT26",
    "id_proceso": "411-259-COT26",
    "id_cotizacion": "411-259-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "TINTAS ORIGINALES  PARA IMPRESORA EPSON",
    "organismo": "ILUSTRE MUNICIPALIDAD DE ALTO DEL CARMEN",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 300000,
    "amount": 300000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T17:29:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T17:29:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (411-259-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=411-259-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "TINTAS ORIGINALES  PARA IMPRESORA EPSON",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=411-259-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 300000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 300000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "411-259-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 80,
      "keywordsCoincidentes": [
        "tinta",
        "tintas",
        "impresora"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1195-428-COT26",
    "codigo": "1195-428-COT26",
    "officialCode": "1195-428-COT26",
    "id_compra_agil": "1195-428-COT26",
    "id_proceso": "1195-428-COT26",
    "id_cotizacion": "1195-428-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "TINTAS DE IMPRESORA",
    "organismo": "I MUNICIPALIDAD DE COYHAIQUE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 300000,
    "amount": 300000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T15:32:00",
    "fechaCierre": "2026-08-10T16:30:00",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T15:32:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T16:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1195-428-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1195-428-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "TINTAS DE IMPRESORA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1195-428-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 300000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 300000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1195-428-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 80,
      "keywordsCoincidentes": [
        "tinta",
        "tintas",
        "impresora"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-4355-775-COT26",
    "codigo": "4355-775-COT26",
    "officialCode": "4355-775-COT26",
    "id_compra_agil": "4355-775-COT26",
    "id_proceso": "4355-775-COT26",
    "id_cotizacion": "4355-775-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "TONER PROGRAMA ATENCION INICIAL FREIRINA",
    "organismo": "I MUNICIPALIDAD DE FREIRINA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 300000,
    "amount": 300000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T11:23:00",
    "fechaCierre": "2026-08-11T12:30:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T11:23:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T12:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (4355-775-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4355-775-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "TONER PROGRAMA ATENCION INICIAL FREIRINA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4355-775-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 300000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 300000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "4355-775-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "tóner",
        "toner"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-900-403-COT26",
    "codigo": "900-403-COT26",
    "officialCode": "900-403-COT26",
    "id_compra_agil": "900-403-COT26",
    "id_proceso": "900-403-COT26",
    "id_cotizacion": "900-403-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "HDS - COMPRA DE TONER ORIGINALES, BODEGA AGOSTO 2026",
    "organismo": "SERVICIO DE SALUD VALPARAISO SAN ANTONIO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 300000,
    "amount": 300000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T09:39:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T09:39:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (900-403-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=900-403-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "HDS - COMPRA DE TONER ORIGINALES, BODEGA AGOSTO 2026",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=900-403-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 300000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 300000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "900-403-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "tóner",
        "toner"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-4548-445-COT26",
    "codigo": "4548-445-COT26",
    "officialCode": "4548-445-COT26",
    "id_compra_agil": "4548-445-COT26",
    "id_proceso": "4548-445-COT26",
    "id_cotizacion": "4548-445-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "DIDECO-MATERIALES DE LIBRERIA PARA ORNAMENTACION EN CAMPEONATO COMUNAL DE CUECA DE PERSONAS MAYORES",
    "organismo": "I MUNICIPALIDAD DE QUINTERO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 299798,
    "amount": 299798,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T15:50:00",
    "fechaCierre": "2026-08-10T10:30:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T15:50:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (4548-445-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4548-445-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "DIDECO-MATERIALES DE LIBRERIA PARA ORNAMENTACION EN CAMPEONATO COMUNAL DE CUECA DE PERSONAS MAYORES",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4548-445-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 299798,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 299798,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "4548-445-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "librería",
        "libreria"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2674-647-COT26",
    "codigo": "2674-647-COT26",
    "officialCode": "2674-647-COT26",
    "id_compra_agil": "2674-647-COT26",
    "id_proceso": "2674-647-COT26",
    "id_cotizacion": "2674-647-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICION DE CORCHETERA ELECTRICA 60 HOJAS Y PERFORADORA 65 HOJAS",
    "organismo": "ILUSTRE MUNICIPALIDAD DE MELIPILLA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 284168,
    "amount": 284168,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T15:56:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T15:56:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2674-647-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2674-647-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICION DE CORCHETERA ELECTRICA 60 HOJAS Y PERFORADORA 65 HOJAS",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2674-647-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 284168,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 284168,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2674-647-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 80,
      "keywordsCoincidentes": [
        "corchetera",
        "corchete",
        "perforadora"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1138054-97-COT26",
    "codigo": "1138054-97-COT26",
    "officialCode": "1138054-97-COT26",
    "id_compra_agil": "1138054-97-COT26",
    "id_proceso": "1138054-97-COT26",
    "id_cotizacion": "1138054-97-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Articulos de escritorio y de manualidades.",
    "organismo": "SERVICIO DE SALUD MAGALLANES",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 283000,
    "amount": 283000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T10:23:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T10:23:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1138054-97-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1138054-97-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Articulos de escritorio y de manualidades.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1138054-97-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 283000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 283000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1138054-97-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "artículos de escritorio",
        "articulos de escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-732868-19-COT26",
    "codigo": "732868-19-COT26",
    "officialCode": "732868-19-COT26",
    "id_compra_agil": "732868-19-COT26",
    "id_proceso": "732868-19-COT26",
    "id_cotizacion": "732868-19-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ARTICULOS DE OFICINA Se solicita cotización de los siguientes artículos de oficina y unidades, despacho incluido.   se acompañan fotos referenciales y listado en adjunto.",
    "organismo": "Juzgado de Letras del Trabajo de San Bernardo",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 270000,
    "amount": 270000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T09:39:00",
    "fechaCierre": "2026-08-11T11:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T09:39:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T11:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (732868-19-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=732868-19-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ARTICULOS DE OFICINA Se solicita cotización de los siguientes artículos de oficina y unidades, despacho incluido.   se acompañan fotos referenciales y listado en adjunto.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=732868-19-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 270000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 270000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "732868-19-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "artículos de oficina",
        "articulos de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3780-166-COT26",
    "codigo": "3780-166-COT26",
    "officialCode": "3780-166-COT26",
    "id_compra_agil": "3780-166-COT26",
    "id_proceso": "3780-166-COT26",
    "id_cotizacion": "3780-166-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Materiales de oficina, Sol. N° 176, Jaime Rojas.",
    "organismo": "Municipalidad de Yerbas Buenas-Depto. Salud",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 261345,
    "amount": 261345,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T14:12:00",
    "fechaCierre": "2026-08-11T09:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T14:12:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3780-166-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3780-166-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Materiales de oficina, Sol. N° 176, Jaime Rojas.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3780-166-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 261345,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 261345,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3780-166-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-4454-566-COT26",
    "codigo": "4454-566-COT26",
    "officialCode": "4454-566-COT26",
    "id_compra_agil": "4454-566-COT26",
    "id_proceso": "4454-566-COT26",
    "id_cotizacion": "4454-566-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Materiales de escritorio - DIDECO",
    "organismo": "I MUNICIPALIDAD DE HUALQUI",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 260000,
    "amount": 260000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T15:23:00",
    "fechaCierre": "2026-08-10T12:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T15:23:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T12:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (4454-566-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4454-566-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Materiales de escritorio - DIDECO",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4454-566-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 260000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 260000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "4454-566-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-968695-120-COT26",
    "codigo": "968695-120-COT26",
    "officialCode": "968695-120-COT26",
    "id_compra_agil": "968695-120-COT26",
    "id_proceso": "968695-120-COT26",
    "id_cotizacion": "968695-120-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICIÓN DE TONER PARA LA JAL",
    "organismo": "JEFATURA ADMINISTRATIVA Y LOGISTICA CAMPO MILITAR PENALOLEN",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 250000,
    "amount": 250000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T14:25:00",
    "fechaCierre": "2026-08-10T08:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T14:25:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (968695-120-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=968695-120-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICIÓN DE TONER PARA LA JAL",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=968695-120-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 250000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 250000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "968695-120-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "tóner",
        "toner"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-4291-919-COT26",
    "codigo": "4291-919-COT26",
    "officialCode": "4291-919-COT26",
    "id_compra_agil": "4291-919-COT26",
    "id_proceso": "4291-919-COT26",
    "id_cotizacion": "4291-919-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Batería recargable para cámara fotográfica digital",
    "organismo": "UNIVERSIDAD DE ANTOFAGASTA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 250000,
    "amount": 250000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T17:20:00",
    "fechaCierre": "2026-08-10T08:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T17:20:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (4291-919-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4291-919-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Batería recargable para cámara fotográfica digital",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4291-919-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 250000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 250000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "4291-919-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "cámara"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2067-201-COT26",
    "codigo": "2067-201-COT26",
    "officialCode": "2067-201-COT26",
    "id_compra_agil": "2067-201-COT26",
    "id_proceso": "2067-201-COT26",
    "id_cotizacion": "2067-201-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "MATERIALES DE ESCRITORIO PARA CAPACITACION",
    "organismo": "SERVICIO SALUD ARAUCANIA SUR HOSPIT DR EDUARDO GONZALEZ GALENO CUNCO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 250000,
    "amount": 250000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T16:22:00",
    "fechaCierre": "2026-08-11T08:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T16:22:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2067-201-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2067-201-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "MATERIALES DE ESCRITORIO PARA CAPACITACION",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2067-201-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 250000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 250000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2067-201-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-5067-1914-COT26",
    "codigo": "5067-1914-COT26",
    "officialCode": "5067-1914-COT26",
    "id_compra_agil": "5067-1914-COT26",
    "id_proceso": "5067-1914-COT26",
    "id_cotizacion": "5067-1914-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Adquisición de Tóners - Rectoría USACH",
    "organismo": "UNIVERSIDAD DE SANTIAGO DE CHILE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 223574,
    "amount": 223574,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T13:24:00",
    "fechaCierre": "2026-08-10T11:30:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T13:24:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T11:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (5067-1914-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5067-1914-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Adquisición de Tóners - Rectoría USACH",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5067-1914-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 223574,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 223574,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "5067-1914-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "tóner",
        "toner"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-387-369-COT26",
    "codigo": "387-369-COT26",
    "officialCode": "387-369-COT26",
    "id_compra_agil": "387-369-COT26",
    "id_proceso": "387-369-COT26",
    "id_cotizacion": "387-369-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Insumos electrónicos OLN (Cable HDMI, pendrives y micrófono inalámbrico",
    "organismo": "I MUNICIPALIDAD DE LOS MUERMOS",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 220000,
    "amount": 220000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T09:39:00",
    "fechaCierre": "2026-08-10T08:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T09:39:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (387-369-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=387-369-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Insumos electrónicos OLN (Cable HDMI, pendrives y micrófono inalámbrico",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=387-369-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 220000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 220000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "387-369-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "pendrive",
        "cable hdmi"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-889-26-COT26",
    "codigo": "889-26-COT26",
    "officialCode": "889-26-COT26",
    "id_compra_agil": "889-26-COT26",
    "id_proceso": "889-26-COT26",
    "id_cotizacion": "889-26-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICION ARTICULOS DE PAPELERÍA PARA OFICINA Y BAÑOS OFICINA REGIONAL DGA",
    "organismo": "MINISTERIO DE OBRAS PUBLICAS DIREC CION GRAL DE OO PP DCYF",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 210000,
    "amount": 210000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T16:26:00",
    "fechaCierre": "2026-08-12T13:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T16:26:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-12T13:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (889-26-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=889-26-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICION ARTICULOS DE PAPELERÍA PARA OFICINA Y BAÑOS OFICINA REGIONAL DGA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=889-26-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 210000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 210000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "889-26-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "papelería",
        "papeleria"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-449-269-COT26",
    "codigo": "449-269-COT26",
    "officialCode": "449-269-COT26",
    "id_compra_agil": "449-269-COT26",
    "id_proceso": "449-269-COT26",
    "id_cotizacion": "449-269-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "cámaras web y luces led",
    "organismo": "I MUNICIPALIDAD DE LA REINA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 200000,
    "amount": 200000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T17:50:00",
    "fechaCierre": "2026-08-10T12:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T17:50:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T12:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (449-269-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=449-269-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "cámaras web y luces led",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=449-269-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 200000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 200000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "449-269-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "cámara",
        "led"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3355-268-COT26",
    "codigo": "3355-268-COT26",
    "officialCode": "3355-268-COT26",
    "id_compra_agil": "3355-268-COT26",
    "id_proceso": "3355-268-COT26",
    "id_cotizacion": "3355-268-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "UTILES DE ESCRITORIO (otros anticipos) P/70",
    "organismo": "Ejercito de Chile",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 200000,
    "amount": 200000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T17:13:00",
    "fechaCierre": "2026-08-10T12:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T17:13:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T12:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3355-268-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3355-268-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "UTILES DE ESCRITORIO (otros anticipos) P/70",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3355-268-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 200000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 200000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3355-268-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-4158-147-COT26",
    "codigo": "4158-147-COT26",
    "officialCode": "4158-147-COT26",
    "id_compra_agil": "4158-147-COT26",
    "id_proceso": "4158-147-COT26",
    "id_cotizacion": "4158-147-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ARCHIVADOR KARDEX 4 CAJONES CON LLEVE MUEBLES PARA ARCHIVADORES REQ 194",
    "organismo": "I.Municipalidad de El Carmen",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 200000,
    "amount": 200000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T15:43:00",
    "fechaCierre": "2026-08-10T08:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T15:43:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (4158-147-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4158-147-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ARCHIVADOR KARDEX 4 CAJONES CON LLEVE MUEBLES PARA ARCHIVADORES REQ 194",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4158-147-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 200000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 200000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "4158-147-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "kardex",
        "mueble"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3665-494-COT26",
    "codigo": "3665-494-COT26",
    "officialCode": "3665-494-COT26",
    "id_compra_agil": "3665-494-COT26",
    "id_proceso": "3665-494-COT26",
    "id_cotizacion": "3665-494-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "MATERIALES DE OFICINA. RSH",
    "organismo": "I MUNICIPALIDAD DE TIL TIL",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 200000,
    "amount": 200000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T15:27:00",
    "fechaCierre": "2026-08-10T11:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T15:27:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T11:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3665-494-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3665-494-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "MATERIALES DE OFICINA. RSH",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3665-494-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 200000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 200000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3665-494-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-4968-527-COT26",
    "codigo": "4968-527-COT26",
    "officialCode": "4968-527-COT26",
    "id_compra_agil": "4968-527-COT26",
    "id_proceso": "4968-527-COT26",
    "id_cotizacion": "4968-527-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Ampolletas para laringoscopio",
    "organismo": "HOSPITAL DE QUILPUE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 200000,
    "amount": 200000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T15:01:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T15:01:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (4968-527-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4968-527-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Ampolletas para laringoscopio",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4968-527-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 200000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 200000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "4968-527-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "ampolleta"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2186-283-COT26",
    "codigo": "2186-283-COT26",
    "officialCode": "2186-283-COT26",
    "id_compra_agil": "2186-283-COT26",
    "id_proceso": "2186-283-COT26",
    "id_cotizacion": "2186-283-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "CAJONERA MOVIL 3 CAJONES",
    "organismo": "HOSPITAL GERIATRICO LA PAZ DE LA TARDE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 200000,
    "amount": 200000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T09:22:00",
    "fechaCierre": "2026-08-11T12:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T09:22:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T12:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2186-283-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2186-283-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "CAJONERA MOVIL 3 CAJONES",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2186-283-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 200000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 200000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2186-283-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "cajonera"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2658-958-COT26",
    "codigo": "2658-958-COT26",
    "officialCode": "2658-958-COT26",
    "id_compra_agil": "2658-958-COT26",
    "id_proceso": "2658-958-COT26",
    "id_cotizacion": "2658-958-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Destacadores, almohadilla timbre, otros",
    "organismo": "I MUNICIPALIDAD DE ANCUD",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 200000,
    "amount": 200000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T09:07:00",
    "fechaCierre": "2026-08-10T08:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T09:07:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2658-958-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2658-958-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Destacadores, almohadilla timbre, otros",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2658-958-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 200000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 200000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2658-958-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "destacador"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2186-281-COT26",
    "codigo": "2186-281-COT26",
    "officialCode": "2186-281-COT26",
    "id_compra_agil": "2186-281-COT26",
    "id_proceso": "2186-281-COT26",
    "id_cotizacion": "2186-281-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "MANTENCION CORRECTIVA IMPRESORA SMART-31S",
    "organismo": "HOSPITAL GERIATRICO LA PAZ DE LA TARDE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 200000,
    "amount": 200000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T16:22:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T16:22:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2186-281-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2186-281-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "MANTENCION CORRECTIVA IMPRESORA SMART-31S",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2186-281-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 200000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 200000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2186-281-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "impresora"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3636-166-COT26",
    "codigo": "3636-166-COT26",
    "officialCode": "3636-166-COT26",
    "id_compra_agil": "3636-166-COT26",
    "id_proceso": "3636-166-COT26",
    "id_cotizacion": "3636-166-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "COMRA DE INSUMOS DE ESCRITORIO PROGRAMA MAS ADULTOS MAYORES AUTOVALENTES",
    "organismo": "I MUNICIPALIDAD DE MALLOA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 200000,
    "amount": 200000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T09:41:00",
    "fechaCierre": "2026-08-09T22:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T09:41:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-09T22:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3636-166-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3636-166-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "COMRA DE INSUMOS DE ESCRITORIO PROGRAMA MAS ADULTOS MAYORES AUTOVALENTES",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3636-166-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 200000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 200000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3636-166-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "insumos de escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-881-108-COT26",
    "codigo": "881-108-COT26",
    "officialCode": "881-108-COT26",
    "id_compra_agil": "881-108-COT26",
    "id_proceso": "881-108-COT26",
    "id_cotizacion": "881-108-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Tóner 90X impresora Brother L2360",
    "organismo": "GOBIERNO REGIONAL DE ANTOFAGASTA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 190000,
    "amount": 190000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T11:23:00",
    "fechaCierre": "2026-08-12T11:00:00",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T11:23:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-12T11:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (881-108-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=881-108-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Tóner 90X impresora Brother L2360",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=881-108-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 190000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 190000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "881-108-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 80,
      "keywordsCoincidentes": [
        "tóner",
        "toner",
        "impresora"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-557639-1967-COT26",
    "codigo": "557639-1967-COT26",
    "officialCode": "557639-1967-COT26",
    "id_compra_agil": "557639-1967-COT26",
    "id_proceso": "557639-1967-COT26",
    "id_cotizacion": "557639-1967-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "TÓNER NEGRO - COL B. V. MACKENNA",
    "organismo": "CORP MUNICIPAL DE SERVICIOS PUBLICOS TRASPASADOS DE RANCAGUA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 180000,
    "amount": 180000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-08T22:25:00",
    "fechaCierre": "2026-08-10T16:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-08T22:25:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T16:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (557639-1967-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=557639-1967-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "TÓNER NEGRO - COL B. V. MACKENNA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=557639-1967-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 180000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 180000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "557639-1967-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "tóner",
        "toner"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1079866-251-COT26",
    "codigo": "1079866-251-COT26",
    "officialCode": "1079866-251-COT26",
    "id_compra_agil": "1079866-251-COT26",
    "id_proceso": "1079866-251-COT26",
    "id_cotizacion": "1079866-251-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICION DE ARCHIVADORES TAMAÑO OFICIO, PÁRA CDT. PUDAHUEL NORTE DOE 259119478, C.D.P.307",
    "organismo": "SECCIÓN COMPRAS ZONA SANTIAGO OESTE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 179600,
    "amount": 179600,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T17:09:00",
    "fechaCierre": "2026-08-10T11:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T17:09:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T11:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1079866-251-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1079866-251-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICION DE ARCHIVADORES TAMAÑO OFICIO, PÁRA CDT. PUDAHUEL NORTE DOE 259119478, C.D.P.307",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1079866-251-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 179600,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 179600,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1079866-251-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "archivador"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-5955-358-COT26",
    "codigo": "5955-358-COT26",
    "officialCode": "5955-358-COT26",
    "id_compra_agil": "5955-358-COT26",
    "id_proceso": "5955-358-COT26",
    "id_cotizacion": "5955-358-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "MATERIALES DE LIBRERIA",
    "organismo": "I MUNICIPALIDAD DE LAGO RANCO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 173106,
    "amount": 173106,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T12:18:00",
    "fechaCierre": "2026-08-10T12:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T12:18:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T12:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (5955-358-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5955-358-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "MATERIALES DE LIBRERIA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5955-358-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 173106,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 173106,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "5955-358-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "librería",
        "libreria"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2427-833-COT26",
    "codigo": "2427-833-COT26",
    "officialCode": "2427-833-COT26",
    "id_compra_agil": "2427-833-COT26",
    "id_proceso": "2427-833-COT26",
    "id_cotizacion": "2427-833-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Adquisición de materiales de oficina - CEDAM / DIDECO",
    "organismo": "I MUNICIPALIDAD DE VALPARAISO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 173000,
    "amount": 173000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T08:20:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T08:20:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2427-833-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2427-833-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Adquisición de materiales de oficina - CEDAM / DIDECO",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2427-833-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 173000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 173000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2427-833-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-4881-18-COT26",
    "codigo": "4881-18-COT26",
    "officialCode": "4881-18-COT26",
    "id_compra_agil": "4881-18-COT26",
    "id_proceso": "4881-18-COT26",
    "id_cotizacion": "4881-18-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICION DE MATERIALES DE OFICINA - COPIAPO",
    "organismo": "Subsecretaria de las Culturas y las Artes Región de Atacama",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región de Atacama",
    "monto": 172149,
    "amount": 172149,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T11:50:00",
    "fechaCierre": "2026-08-12T11:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T11:50:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-12T11:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (4881-18-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4881-18-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICION DE MATERIALES DE OFICINA - COPIAPO",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4881-18-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 172149,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 172149,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "4881-18-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1079576-66-COT26",
    "codigo": "1079576-66-COT26",
    "officialCode": "1079576-66-COT26",
    "id_compra_agil": "1079576-66-COT26",
    "id_proceso": "1079576-66-COT26",
    "id_cotizacion": "1079576-66-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICION DE TAMBOR COMPATIBLE CON IMPRESORA BROTHER MFC-L8900CDW, DE CARGO DE LA ZONA DE CARABINEROS BIOBIO",
    "organismo": "SECCIÓN COMPRAS VIII ZONA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región del Biobío",
    "monto": 169990,
    "amount": 169990,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T15:54:00",
    "fechaCierre": "2026-08-10T16:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T15:54:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T16:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1079576-66-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1079576-66-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICION DE TAMBOR COMPATIBLE CON IMPRESORA BROTHER MFC-L8900CDW, DE CARGO DE LA ZONA DE CARABINEROS BIOBIO",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1079576-66-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 169990,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 169990,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1079576-66-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "tambor",
        "impresora"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1729-310-COT26",
    "codigo": "1729-310-COT26",
    "officialCode": "1729-310-COT26",
    "id_compra_agil": "1729-310-COT26",
    "id_proceso": "1729-310-COT26",
    "id_cotizacion": "1729-310-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "RESMAS Y TONER (ATENCION DOMICILIARIAS)",
    "organismo": "I MUNICIPALIDAD DE TIERRA AMARILLA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 150409,
    "amount": 150409,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T16:15:00",
    "fechaCierre": "2026-08-10T12:00:00",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T16:15:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T12:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1729-310-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1729-310-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "RESMAS Y TONER (ATENCION DOMICILIARIAS)",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1729-310-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 150409,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 150409,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1729-310-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 80,
      "keywordsCoincidentes": [
        "resma",
        "tóner",
        "toner"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2424-1365-COT26",
    "codigo": "2424-1365-COT26",
    "officialCode": "2424-1365-COT26",
    "id_compra_agil": "2424-1365-COT26",
    "id_proceso": "2424-1365-COT26",
    "id_cotizacion": "2424-1365-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "SERVICIO DE REPARACIÓN DE NOTEBOOK/PED95-3251/VDV",
    "organismo": "I MUNICIPALIDAD DE VINA DEL MAR",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 150000,
    "amount": 150000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-08T09:47:00",
    "fechaCierre": "2026-08-10T12:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-08T09:47:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T12:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2424-1365-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2424-1365-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "SERVICIO DE REPARACIÓN DE NOTEBOOK/PED95-3251/VDV",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2424-1365-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 150000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 150000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2424-1365-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "notebook"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3866-83-COT26",
    "codigo": "3866-83-COT26",
    "officialCode": "3866-83-COT26",
    "id_compra_agil": "3866-83-COT26",
    "id_proceso": "3866-83-COT26",
    "id_cotizacion": "3866-83-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICIÓN DE MATERIALES DE OFICINA DOM-SECPLAN FRIL 2025",
    "organismo": "I MUNICIPALIDAD DE PRIMAVERA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 150000,
    "amount": 150000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T14:02:00",
    "fechaCierre": "2026-08-11T08:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T14:02:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3866-83-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3866-83-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICIÓN DE MATERIALES DE OFICINA DOM-SECPLAN FRIL 2025",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3866-83-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 150000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 150000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3866-83-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-732425-15-COT26",
    "codigo": "732425-15-COT26",
    "officialCode": "732425-15-COT26",
    "id_compra_agil": "732425-15-COT26",
    "id_proceso": "732425-15-COT26",
    "id_cotizacion": "732425-15-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "MATERIALES DE OFICINA PARA EL JUZGADO DE GARANTIA DE PUENTE ALTO",
    "organismo": "Juzgado de Garantia de Puente Alto",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 150000,
    "amount": 150000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T12:04:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T12:04:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (732425-15-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=732425-15-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "MATERIALES DE OFICINA PARA EL JUZGADO DE GARANTIA DE PUENTE ALTO",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=732425-15-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 150000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 150000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "732425-15-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1430710-311-COT26",
    "codigo": "1430710-311-COT26",
    "officialCode": "1430710-311-COT26",
    "id_compra_agil": "1430710-311-COT26",
    "id_proceso": "1430710-311-COT26",
    "id_cotizacion": "1430710-311-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "BATERIA UPS",
    "organismo": "SERVICIO DE SALUD COQUIMBO HOSPITAL DE COQUIMBO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 150000,
    "amount": 150000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T09:01:00",
    "fechaCierre": "2026-08-10T08:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T09:01:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1430710-311-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1430710-311-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "BATERIA UPS",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1430710-311-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 150000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 150000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1430710-311-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "ups"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-5153-1548-COT26",
    "codigo": "5153-1548-COT26",
    "officialCode": "5153-1548-COT26",
    "id_compra_agil": "5153-1548-COT26",
    "id_proceso": "5153-1548-COT26",
    "id_cotizacion": "5153-1548-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "MFV_TALONARIO VALE DE PEDIDO. (COD. 261710)",
    "organismo": "UNIVERSIDAD DE CHILE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 150000,
    "amount": 150000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T16:33:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T16:33:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (5153-1548-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5153-1548-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "MFV_TALONARIO VALE DE PEDIDO. (COD. 261710)",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5153-1548-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 150000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 150000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "5153-1548-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "talonario"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1782-14-COT26",
    "codigo": "1782-14-COT26",
    "officialCode": "1782-14-COT26",
    "id_compra_agil": "1782-14-COT26",
    "id_proceso": "1782-14-COT26",
    "id_cotizacion": "1782-14-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "COMPRA Cargadores de Notebooks",
    "organismo": "GOBIERNO REGIONAL DE ANTOFAGASTA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 150000,
    "amount": 150000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T12:15:00",
    "fechaCierre": "2026-08-11T12:30:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T12:15:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T12:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1782-14-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1782-14-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "COMPRA Cargadores de Notebooks",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1782-14-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 150000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 150000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1782-14-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "notebook",
        "notebooks"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1079967-545-COT26",
    "codigo": "1079967-545-COT26",
    "officialCode": "1079967-545-COT26",
    "id_compra_agil": "1079967-545-COT26",
    "id_proceso": "1079967-545-COT26",
    "id_cotizacion": "1079967-545-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICIÓN ÚTILES DE ESCRITORIO PARA LA AUTORIDAD FISCALIZADORA 004 2DA. COMISARÍA POZO ALMONTE",
    "organismo": "SECCIÓN COMPRAS I ZONA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 134699,
    "amount": 134699,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T16:35:00",
    "fechaCierre": "2026-08-10T16:45:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T16:35:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T16:45:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1079967-545-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1079967-545-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICIÓN ÚTILES DE ESCRITORIO PARA LA AUTORIDAD FISCALIZADORA 004 2DA. COMISARÍA POZO ALMONTE",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1079967-545-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 134699,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 134699,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1079967-545-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-699100-8-COT26",
    "codigo": "699100-8-COT26",
    "officialCode": "699100-8-COT26",
    "id_compra_agil": "699100-8-COT26",
    "id_proceso": "699100-8-COT26",
    "id_cotizacion": "699100-8-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Compra de Materiales de Oficina -Segun programa de Compras 2026-TOP Parenas",
    "organismo": "Tribunal de Juicio Oral en lo Penal de",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 130000,
    "amount": 130000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T09:21:00",
    "fechaCierre": "2026-08-13T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T09:21:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-13T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (699100-8-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=699100-8-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Compra de Materiales de Oficina -Segun programa de Compras 2026-TOP Parenas",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=699100-8-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 130000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 130000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "699100-8-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1463-277-COT26",
    "codigo": "1463-277-COT26",
    "officialCode": "1463-277-COT26",
    "id_compra_agil": "1463-277-COT26",
    "id_proceso": "1463-277-COT26",
    "id_cotizacion": "1463-277-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "TINTAS MAIS",
    "organismo": "SERVICIO DE SALUD DEL MAULE HOSPITAL DE LICANTEN",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 128000,
    "amount": 128000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T10:47:00",
    "fechaCierre": "2026-08-11T14:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T10:47:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T14:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1463-277-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1463-277-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "TINTAS MAIS",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1463-277-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 128000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 128000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1463-277-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "tinta",
        "tintas"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-5067-1918-COT26",
    "codigo": "5067-1918-COT26",
    "officialCode": "5067-1918-COT26",
    "id_compra_agil": "5067-1918-COT26",
    "id_proceso": "5067-1918-COT26",
    "id_cotizacion": "5067-1918-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Adquisición de artículos de escritorio",
    "organismo": "UNIVERSIDAD DE SANTIAGO DE CHILE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 126500,
    "amount": 126500,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T16:29:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T16:29:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (5067-1918-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5067-1918-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Adquisición de artículos de escritorio",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5067-1918-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 126500,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 126500,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "5067-1918-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "artículos de escritorio",
        "articulos de escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-5504-245-COT26",
    "codigo": "5504-245-COT26",
    "officialCode": "5504-245-COT26",
    "id_compra_agil": "5504-245-COT26",
    "id_proceso": "5504-245-COT26",
    "id_cotizacion": "5504-245-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "COMPRA DE BOLIGRAFO",
    "organismo": "UNIVERSIDAD DE CHILE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 120000,
    "amount": 120000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T15:28:00",
    "fechaCierre": "2026-08-10T11:11:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T15:28:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T11:11:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (5504-245-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5504-245-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "COMPRA DE BOLIGRAFO",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5504-245-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 120000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 120000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "5504-245-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "bolígrafo",
        "boligrafo"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-4100-165-COT26",
    "codigo": "4100-165-COT26",
    "officialCode": "4100-165-COT26",
    "id_compra_agil": "4100-165-COT26",
    "id_proceso": "4100-165-COT26",
    "id_cotizacion": "4100-165-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICION MATERIALES DE OFICINA PARA EL CENTRO DE DOCTRINA Y ÉTICA DE CARABINEROS",
    "organismo": "Dirección General de Carabineros de Chile",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 119676,
    "amount": 119676,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T12:50:00",
    "fechaCierre": "2026-08-10T12:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T12:50:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T12:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (4100-165-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4100-165-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICION MATERIALES DE OFICINA PARA EL CENTRO DE DOCTRINA Y ÉTICA DE CARABINEROS",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4100-165-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 119676,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 119676,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "4100-165-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2701-510-COT26",
    "codigo": "2701-510-COT26",
    "officialCode": "2701-510-COT26",
    "id_compra_agil": "2701-510-COT26",
    "id_proceso": "2701-510-COT26",
    "id_cotizacion": "2701-510-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Materiales de oficina, Taller de emprendimiento: Estructuración de costos y   definición de precios.(Inst N°255)Solicitado por Programa Mujeres Jefas de Hogar",
    "organismo": "I MUNICIPALIDAD DE TALAGANTE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 105000,
    "amount": 105000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T11:53:00",
    "fechaCierre": "2026-08-10T15:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T11:53:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T15:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2701-510-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2701-510-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Materiales de oficina, Taller de emprendimiento: Estructuración de costos y   definición de precios.(Inst N°255)Solicitado por Programa Mujeres Jefas de Hogar",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2701-510-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 105000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 105000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2701-510-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2062-65-COT26",
    "codigo": "2062-65-COT26",
    "officialCode": "2062-65-COT26",
    "id_compra_agil": "2062-65-COT26",
    "id_proceso": "2062-65-COT26",
    "id_cotizacion": "2062-65-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "COMPRA PROYECTO SAAT LICEO FRANCISCO TELLO (TINTAS) - DEPROV. 2026",
    "organismo": "Departamento Provincial de Educación de Cachapoal",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 105000,
    "amount": 105000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T11:09:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T11:09:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2062-65-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2062-65-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "COMPRA PROYECTO SAAT LICEO FRANCISCO TELLO (TINTAS) - DEPROV. 2026",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2062-65-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 105000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 105000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2062-65-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "tinta",
        "tintas"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1058339-435-COT26",
    "codigo": "1058339-435-COT26",
    "officialCode": "1058339-435-COT26",
    "id_compra_agil": "1058339-435-COT26",
    "id_proceso": "1058339-435-COT26",
    "id_cotizacion": "1058339-435-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Adquisición de materiales de oficina programa Habitabilidad",
    "organismo": "ILUSTRE MUNICIPALIDAD DE HUARA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 100000,
    "amount": 100000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T13:06:00",
    "fechaCierre": "2026-08-11T15:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T13:06:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T15:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1058339-435-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1058339-435-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Adquisición de materiales de oficina programa Habitabilidad",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1058339-435-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 100000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 100000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1058339-435-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-3651-188-COT26",
    "codigo": "3651-188-COT26",
    "officialCode": "3651-188-COT26",
    "id_compra_agil": "3651-188-COT26",
    "id_proceso": "3651-188-COT26",
    "id_cotizacion": "3651-188-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQ. MATERIALES DE OFICINA PROMOCION DE LA SALUD",
    "organismo": "I MUNICIPALIDAD DE QUILLECO DEPARTAMENTO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 100000,
    "amount": 100000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T17:28:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T17:28:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (3651-188-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3651-188-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQ. MATERIALES DE OFICINA PROMOCION DE LA SALUD",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3651-188-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 100000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 100000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "3651-188-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1298357-185-COT26",
    "codigo": "1298357-185-COT26",
    "officialCode": "1298357-185-COT26",
    "id_compra_agil": "1298357-185-COT26",
    "id_proceso": "1298357-185-COT26",
    "id_cotizacion": "1298357-185-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICIÓN DE FILAMENTO PLA PARA IMPRESORA 3D INSTITUCIONAL",
    "organismo": "CORPORACION CULTURAL MUNICIPAL DE LA COMUNA DE CHILLAN",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 100000,
    "amount": 100000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T16:48:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T16:48:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1298357-185-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1298357-185-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICIÓN DE FILAMENTO PLA PARA IMPRESORA 3D INSTITUCIONAL",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1298357-185-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 100000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 100000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1298357-185-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "impresora"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2291-774-COT26",
    "codigo": "2291-774-COT26",
    "officialCode": "2291-774-COT26",
    "id_compra_agil": "2291-774-COT26",
    "id_proceso": "2291-774-COT26",
    "id_cotizacion": "2291-774-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "NP/30 FINANZAS - ADQ. DE PIZARRA - PERFORADORA - CALCULADORA SEGUN ARCHIVO ADJUNTO",
    "organismo": "I MUNICIPALIDAD DE TALCA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 100000,
    "amount": 100000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T15:45:00",
    "fechaCierre": "2026-08-10T08:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T15:45:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2291-774-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2291-774-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "NP/30 FINANZAS - ADQ. DE PIZARRA - PERFORADORA - CALCULADORA SEGUN ARCHIVO ADJUNTO",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2291-774-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 100000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 100000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2291-774-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "perforadora"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1671-142-COT26",
    "codigo": "1671-142-COT26",
    "officialCode": "1671-142-COT26",
    "id_compra_agil": "1671-142-COT26",
    "id_proceso": "1671-142-COT26",
    "id_cotizacion": "1671-142-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Unidad de Estadísticas / Batería para notebook.",
    "organismo": "SUBSECRETARIA DE SALUD PUBLICA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 100000,
    "amount": 100000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T13:38:00",
    "fechaCierre": "2026-08-10T10:30:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T13:38:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1671-142-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1671-142-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Unidad de Estadísticas / Batería para notebook.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1671-142-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 100000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 100000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1671-142-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "notebook"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2658-957-COT26",
    "codigo": "2658-957-COT26",
    "officialCode": "2658-957-COT26",
    "id_compra_agil": "2658-957-COT26",
    "id_proceso": "2658-957-COT26",
    "id_cotizacion": "2658-957-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "CARPETAS ECOCUERO, PERFORADORAS",
    "organismo": "I MUNICIPALIDAD DE ANCUD",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 100000,
    "amount": 100000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T10:15:00",
    "fechaCierre": "2026-08-10T08:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T10:15:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2658-957-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2658-957-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "CARPETAS ECOCUERO, PERFORADORAS",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2658-957-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 100000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 100000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2658-957-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "carpeta",
        "perforadora"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-686619-7-COT26",
    "codigo": "686619-7-COT26",
    "officialCode": "686619-7-COT26",
    "id_compra_agil": "686619-7-COT26",
    "id_proceso": "686619-7-COT26",
    "id_cotizacion": "686619-7-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "COMPRA DE 6 BATERIAS PARA UPS 12V 4.5AH/20HR PARA COMPUTADORES",
    "organismo": "JUZGADO DE FAMILIA DE COQUIMBO",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 100000,
    "amount": 100000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T08:29:00",
    "fechaCierre": "2026-08-10T10:00:00",
    "matchScore": 80,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T08:29:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (686619-7-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=686619-7-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "COMPRA DE 6 BATERIAS PARA UPS 12V 4.5AH/20HR PARA COMPUTADORES",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=686619-7-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 100000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 100000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "686619-7-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 80,
      "keywordsCoincidentes": [
        "computador",
        "computadores",
        "ups"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-5702-250-COT26",
    "codigo": "5702-250-COT26",
    "officialCode": "5702-250-COT26",
    "id_compra_agil": "5702-250-COT26",
    "id_proceso": "5702-250-COT26",
    "id_cotizacion": "5702-250-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "CPF ARICA, COMPRA DE UTILES DE OFICINA; C.T.A. FEMENINO.",
    "organismo": "Direc.Reg.Arica y Parinacota",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región de Arica y Parinacota",
    "monto": 99100,
    "amount": 99100,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T17:36:00",
    "fechaCierre": "2026-08-10T11:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T17:36:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T11:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (5702-250-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5702-250-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "CPF ARICA, COMPRA DE UTILES DE OFICINA; C.T.A. FEMENINO.",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5702-250-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 99100,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 99100,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "5702-250-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "útiles de oficina",
        "utiles de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1450521-82-COT26",
    "codigo": "1450521-82-COT26",
    "officialCode": "1450521-82-COT26",
    "id_compra_agil": "1450521-82-COT26",
    "id_proceso": "1450521-82-COT26",
    "id_cotizacion": "1450521-82-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "CECIPU – Adquisición de materiales de oficina",
    "organismo": "SUBSECRETARÍA DE SEGURIDAD PÚBLICA",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 85800,
    "amount": 85800,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T16:10:00",
    "fechaCierre": "2026-08-10T17:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T16:10:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T17:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1450521-82-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1450521-82-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "CECIPU – Adquisición de materiales de oficina",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1450521-82-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 85800,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 85800,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1450521-82-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-5178-4149-COT26",
    "codigo": "5178-4149-COT26",
    "officialCode": "5178-4149-COT26",
    "id_compra_agil": "5178-4149-COT26",
    "id_proceso": "5178-4149-COT26",
    "id_cotizacion": "5178-4149-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ESCRITORIO/ASEO/SP 1063434 KS",
    "organismo": "UNIVERSIDAD DE CHILE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 84000,
    "amount": 84000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T16:00:00",
    "fechaCierre": "2026-08-10T10:30:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T16:00:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T10:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (5178-4149-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5178-4149-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ESCRITORIO/ASEO/SP 1063434 KS",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5178-4149-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 84000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 84000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "5178-4149-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "escritorio"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-799512-1069-COT26",
    "codigo": "799512-1069-COT26",
    "officialCode": "799512-1069-COT26",
    "id_compra_agil": "799512-1069-COT26",
    "id_proceso": "799512-1069-COT26",
    "id_cotizacion": "799512-1069-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "DAS REQUIERE COMPRA TINETAS DE PINTURA",
    "organismo": "Corporación Municipal de Valparaíso para el Desarrollo Social",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 70000,
    "amount": 70000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T10:19:00",
    "fechaCierre": "2026-08-10T08:30:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T10:19:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T08:30:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (799512-1069-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=799512-1069-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "DAS REQUIERE COMPRA TINETAS DE PINTURA",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=799512-1069-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 70000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 70000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "799512-1069-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "pintura"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-4247-485-COT26",
    "codigo": "4247-485-COT26",
    "officialCode": "4247-485-COT26",
    "id_compra_agil": "4247-485-COT26",
    "id_proceso": "4247-485-COT26",
    "id_cotizacion": "4247-485-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "SOLICITUD DE TINTA EN POLVO PARA IMPRESORA RICOH OPERANDO EN CONTROL. SEGÚN CERTIFICADO N° 615",
    "organismo": "I MUNICIPALIDAD DE PUNITAQUI",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 60000,
    "amount": 60000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T16:38:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T16:38:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (4247-485-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4247-485-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "SOLICITUD DE TINTA EN POLVO PARA IMPRESORA RICOH OPERANDO EN CONTROL. SEGÚN CERTIFICADO N° 615",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4247-485-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 60000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 60000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "4247-485-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "tinta",
        "impresora"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-2727-466-COT26",
    "codigo": "2727-466-COT26",
    "officialCode": "2727-466-COT26",
    "id_compra_agil": "2727-466-COT26",
    "id_proceso": "2727-466-COT26",
    "id_cotizacion": "2727-466-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "INSUMOS DE OFICINA PARA CONVENIO PROMOCION DE LA SALUD 2026",
    "organismo": "ILUSTRE MUNICIPALIDAD DE SAN CARLOS",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 40000,
    "amount": 40000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T11:49:00",
    "fechaCierre": "2026-08-11T12:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T11:49:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-11T12:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (2727-466-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2727-466-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "INSUMOS DE OFICINA PARA CONVENIO PROMOCION DE LA SALUD 2026",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2727-466-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 40000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 40000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "2727-466-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "insumos de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-623339-52-COT26",
    "codigo": "623339-52-COT26",
    "officialCode": "623339-52-COT26",
    "id_compra_agil": "623339-52-COT26",
    "id_proceso": "623339-52-COT26",
    "id_cotizacion": "623339-52-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQ DE MATERIALES DE OFICINA PARA CME",
    "organismo": "Ejercito de Chile",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 39876,
    "amount": 39876,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T12:51:00",
    "fechaCierre": "2026-08-10T11:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T12:51:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T11:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (623339-52-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=623339-52-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQ DE MATERIALES DE OFICINA PARA CME",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=623339-52-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 39876,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 39876,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "623339-52-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "materiales de oficina"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-1209-226-COT26",
    "codigo": "1209-226-COT26",
    "officialCode": "1209-226-COT26",
    "id_compra_agil": "1209-226-COT26",
    "id_proceso": "1209-226-COT26",
    "id_cotizacion": "1209-226-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "PROYECTO SAAT - COLEGIO LA CONCEPCIÓN",
    "organismo": "SECRETARIA REGIONAL MINISTERIAL DE EDUCACION II REGIÓN",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región del Biobío",
    "monto": 37937,
    "amount": 37937,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T12:53:00",
    "fechaCierre": "2026-08-10T15:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T12:53:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T15:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (1209-226-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1209-226-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "PROYECTO SAAT - COLEGIO LA CONCEPCIÓN",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=1209-226-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 37937,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 37937,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "1209-226-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "pc"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-875646-1830-COT26",
    "codigo": "875646-1830-COT26",
    "officialCode": "875646-1830-COT26",
    "id_compra_agil": "875646-1830-COT26",
    "id_proceso": "875646-1830-COT26",
    "id_cotizacion": "875646-1830-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "Borrador de Pizarra",
    "organismo": "Hospital Dr. Eduardo Pereira Ramirez",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región Metropolitana",
    "monto": 30000,
    "amount": 30000,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T10:45:00",
    "fechaCierre": "2026-08-10T11:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T10:45:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T11:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (875646-1830-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=875646-1830-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "Borrador de Pizarra",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "V-MOCCS",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=875646-1830-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 30000,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 30000,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "875646-1830-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "vmoccs",
      "empresaAsociada": "V-MOCCS",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "pizarra"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-5178-4154-COT26",
    "codigo": "5178-4154-COT26",
    "officialCode": "5178-4154-COT26",
    "id_compra_agil": "5178-4154-COT26",
    "id_proceso": "5178-4154-COT26",
    "id_cotizacion": "5178-4154-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ESPIRALES DE ENCUADERNACIÓN/SP 1063878/JL",
    "organismo": "UNIVERSIDAD DE CHILE",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "monto": 27500,
    "amount": 27500,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-07T16:34:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 60,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-07T16:34:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (5178-4154-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5178-4154-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ESPIRALES DE ENCUADERNACIÓN/SP 1063878/JL",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=5178-4154-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 27500,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 27500,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "5178-4154-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 60,
      "keywordsCoincidentes": [
        "encuadernación"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "op-4197-194-COT26",
    "codigo": "4197-194-COT26",
    "officialCode": "4197-194-COT26",
    "id_compra_agil": "4197-194-COT26",
    "id_proceso": "4197-194-COT26",
    "id_cotizacion": "4197-194-COT26",
    "id_orden_compra": null,
    "codigoOrdenCompra": null,
    "rutOrganismo": "No informado",
    "tipoOficial": "COT",
    "tipoNombre": "Trato Directo / Compra Ágil",
    "titulo": "ADQUISICION IMPRESORA MULTIFUNCIONAL LASER MONOCROMATICA PARA UNIDAD DE ADQUISICIONES DEL DEPARTAMENTO DE SALUD QUEMCHI” SP N°252",
    "organismo": "I MUNICIPALIDAD DE QUEMCHI",
    "organismoRut": "No informado",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Tecnología y Hardware",
    "region": "Región Metropolitana",
    "monto": 240,
    "amount": 240,
    "amountType": "monto_estimado",
    "currency": "CLP",
    "fechaPublicacion": "2026-08-06T16:09:00",
    "fechaCierre": "2026-08-10T09:00:00",
    "matchScore": 70,
    "riesgo": "Bajo",
    "descripcion": "Proceso oficial de contratación pública (Trato Directo / Compra Ágil).",
    "estado": "Publicada",
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-06T16:09:00"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-10T09:00:00"
      }
    ],
    "documentos": [
      {
        "nombre": "Ver Ficha Oficial en Mercado Público (4197-194-COT26)",
        "tipo": "link",
        "tamanho": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4197-194-COT26"
      }
    ],
    "items": [
      {
        "sku": "ITEM-1",
        "producto": "ADQUISICION IMPRESORA MULTIFUNCIONAL LASER MONOCROMATICA PARA UNIDAD DE ADQUISICIONES DEL DEPARTAMENTO DE SALUD QUEMCHI” SP N°252",
        "cantidad": 1,
        "precioUnitario": 0,
        "unidadMedida": "UN"
      }
    ],
    "criteriosEvaluacion": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": [],
    "empresaMatch": "Aminorte",
    "modalidad": "Compra Ágil",
    "esInvitacionGrandesCompras": false,
    "subestadoEvaluacion": "Sin oferta seleccionada",
    "sourceSystem": "mercadopublico_excel",
    "sourceType": "compra_agil",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/DAP/Details.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=4197-194-COT26",
    "fetchedAt": "2026-08-13T15:57:09.789931+00:00",
    "lastVerifiedAt": "2026-08-13T15:57:09.789931+00:00",
    "validationStatus": "confirmado",
    "monto_original": 240,
    "monto_adjudicado": null,
    "monto_oc": null,
    "monto_final": 240,
    "fuente_monto": "Cotización Mercado Público (Excel)",
    "id_fuente_monto": "4197-194-COT26",
    "estado_validacion_monto": "RECUPERADO_DESDE_COTIZACION",
    "proveedorAdjudicado": null,
    "rutProveedor": null,
    "estadoOC": null,
    "matchMetadata": {
      "empresaId": "aminorte",
      "empresaAsociada": "Aminorte",
      "motivoMatch": "keyword_catalog",
      "campoMatch": "titulo_descripcion",
      "fechaDeteccion": "2026-08-13",
      "nivelConfianza": 70,
      "keywordsCoincidentes": [
        "impresora",
        "multifuncional"
      ],
      "fuenteDatos": "excel"
    }
  },
  {
    "id": "2239-10-LP26",
    "codigo": "2239-10-LP26",
    "officialCode": "2239-10-LP26",
    "titulo": "Licitación Pública: Provisión Anual de Insumos de Escritorio y Papelería Institucional",
    "organismo": "MINISTERIO DE EDUCACIÓN (MINEDUC)",
    "organismoRut": "60.000.000-0",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Artículos de Escritorio y Oficina",
    "region": "Región Metropolitana",
    "ciudad": "Santiago",
    "monto": 45000000,
    "monto_final": 45000000,
    "fechaPublicacion": "2026-08-13",
    "fechaCierre": "2026-08-27",
    "matchScore": 95,
    "riesgo": "Bajo",
    "descripcion": "Licitación pública para la adquisición de resmas de papel, archivadores, útiles de oficina e insumos de escritorio para sedes regionales de Mineduc.",
    "estado": "Publicada",
    "empresaMatch": "Aminorte",
    "modalidad": "Licitación",
    "sourceSystem": "mercadopublico_api",
    "sourceType": "licitacion",
    "amountType": "monto_estimado",
    "validationStatus": "confirmado",
    "tipoOficial": "LP",
    "tipoNombre": "Licitación Pública >100 UTM",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/RFB/DetailsAcquisition.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=2239-10-LP26",
    "items": [
      {
        "sku": "SKU-MIN-01",
        "producto": "Insumos de papelería y escritorio",
        "cantidad": 1,
        "precioUnitario": 45000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 60,
        "descripcion": "Evaluación económica de la oferta"
      },
      {
        "aspecto": "Calidad",
        "ponderacion": 40,
        "descripcion": "Especificaciones técnicas del producto"
      }
    ],
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-13"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-08-27"
      }
    ],
    "documentos": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": []
  },
  {
    "id": "3934-45-LP26",
    "codigo": "3934-45-LP26",
    "officialCode": "3934-45-LP26",
    "titulo": "Licitación Pública: Adquisición de Mobiliario Ergonómico de Oficina y Escritorios Modulares",
    "organismo": "JUNTA NACIONAL DE JARDINES INFANTILES (JUNJI)",
    "organismoRut": "70.012.300-4",
    "organismoPagoDias": 30,
    "organismoRiesgo": "Bajo",
    "rubro": "Mobiliario y Equipamiento de Oficina",
    "region": "Región de Valparaíso",
    "ciudad": "Valparaíso",
    "monto": 68000000,
    "monto_final": 68000000,
    "fechaPublicacion": "2026-08-13",
    "fechaCierre": "2026-09-03",
    "matchScore": 92,
    "riesgo": "Bajo",
    "descripcion": "Licitación pública para provisión e instalación de sillas ejecutivas ergonómicas, escritorios modulares y cajoneras rodantes.",
    "estado": "Publicada",
    "empresaMatch": "V-MOCCS",
    "modalidad": "Licitación",
    "sourceSystem": "mercadopublico_api",
    "sourceType": "licitacion",
    "amountType": "monto_estimado",
    "validationStatus": "confirmado",
    "tipoOficial": "LP",
    "tipoNombre": "Licitación Pública >100 UTM",
    "sourceUrl": "https://www.mercadopublico.cl/Procurement/Modules/RFB/DetailsAcquisition.aspx?qs=PD94bVIVFUe5Sth1FXBBAA==&IdLicitacion=3934-45-LP26",
    "items": [
      {
        "sku": "SKU-VMO-01",
        "producto": "Mobiliario ergonómico de oficina",
        "cantidad": 1,
        "precioUnitario": 68000000
      }
    ],
    "criteriosEvaluacion": [
      {
        "aspecto": "Precio",
        "ponderacion": 50,
        "descripcion": "Evaluación de propuesta económica"
      },
      {
        "aspecto": "Plazo Entrega",
        "ponderacion": 50,
        "descripcion": "Tiempo de instalación en dependencias"
      }
    ],
    "cronograma": [
      {
        "hito": "Publicación",
        "fecha": "2026-08-13"
      },
      {
        "hito": "Cierre de Ofertas",
        "fecha": "2026-09-03"
      }
    ],
    "documentos": [],
    "preguntas": [],
    "comentarios": [],
    "competidoresPropuestos": []
  }
];
export const mockOportunidades: Oportunidad[] = rawOportunidades as Oportunidad[];

export const mockPostulaciones: Postulacion[] = [];
export const mockOrdenesCompra: OrdenCompra[] = [];

export const mockMiembrosEquipo: MiembroEquipo[] = [
  { id: "user-1", nombre: "Jonathan Cooper", email: "jcooper@bidcoop.cl", rol: "Admin", avatar: "JC", estado: "Activo" },
  { id: "user-2", nombre: "Manuel Viguera", email: "mviguera@aminorte.cl", rol: "Gestor", avatar: "MV", estado: "Activo" }
];

export const mockNotificaciones: Notificacion[] = [
  {
    id: "notif-sync-20260813",
    leida: false,
    tipo: "info",
    fecha: "2026-08-13",
    titulo: "Sincronización Mercado Público Completada",
    descripcion: "Sincronizadas 231 oportunidades (229 Compras Ágiles validadas con presupuesto)."
  }
];

export const mockVistasGuardadas: VistaGuardada[] = [
  { id: 'v-1', nombre: 'Compras Ágiles', filters: { search: '', rubro: 'Todos', region: 'Todos', riesgo: 'Todos', montoMin: 0, montoMax: 99999999 } },
  { id: 'v-2', nombre: 'Licitaciones Activas', filters: { search: '', rubro: 'Todos', region: 'Todos', riesgo: 'Todos', montoMin: 0, montoMax: 99999999 } }
];

export const FLETES_REGIONALES_CHILE: Record<string, { zona: string; fleteBase: number; diasEntrega: string }> = {
  "Región Metropolitana": { zona: "Zona Central (RM)", fleteBase: 0, diasEntrega: "24 hrs" },
  "Región de Valparaíso": { zona: "Zona Centro", fleteBase: 15000, diasEntrega: "24-48 hrs" },
  "Región de Coquimbo": { zona: "Zona Norte Chico", fleteBase: 25000, diasEntrega: "48 hrs" },
  "Región del Libertador General Bernardo O'Higgins": { zona: "Zona Centro-Sur", fleteBase: 18000, diasEntrega: "24-48 hrs" },
  "Región del Maule": { zona: "Zona Centro-Sur", fleteBase: 22000, diasEntrega: "48 hrs" },
  "Región de Ñuble": { zona: "Zona Sur", fleteBase: 28000, diasEntrega: "48 hrs" },
  "Región del Biobío": { zona: "Zona Sur", fleteBase: 32000, diasEntrega: "48-72 hrs" },
  "Región de La Araucanía": { zona: "Zona Sur", fleteBase: 38000, diasEntrega: "72 hrs" },
  "Región de Los Ríos": { zona: "Zona Sur", fleteBase: 42000, diasEntrega: "72 hrs" },
  "Región de Los Lagos": { zona: "Zona Sur-Austral", fleteBase: 48000, diasEntrega: "72-96 hrs" },
  "Región de Aysén del General Carlos Ibáñez del Campo": { zona: "Zona Austral", fleteBase: 85000, diasEntrega: "5-7 días" },
  "Región de Magallanes y de la Antártica Chilena": { zona: "Zona Austral", fleteBase: 95000, diasEntrega: "5-7 días" },
  "Región de Atacama": { zona: "Zona Norte", fleteBase: 45000, diasEntrega: "48-72 hrs" },
  "Región de Antofagasta": { zona: "Zona Norte Grande", fleteBase: 55000, diasEntrega: "72 hrs" },
  "Región de Tarapacá": { zona: "Zona Norte Grande", fleteBase: 65000, diasEntrega: "72-96 hrs" },
  "Región de Arica y Parinacota": { zona: "Zona Norte Extrema", fleteBase: 75000, diasEntrega: "4-5 días" }
};
