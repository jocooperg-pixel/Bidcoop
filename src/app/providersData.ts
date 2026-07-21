export interface VentaCompetidor {
  articulo: string;
  precio: number;
  compradorRegion: string;
  modalidad: string;
}

export interface Proveedor {
  rut: string;
  razonSocial: string;
  tipoEmpresa: string;
  comuna: string;
  region: string;
  rubro: string;
  email: string;
  telefono: string;
  representante: string;
  web: string;
  ventas: VentaCompetidor[];
  file?: string;
  isAdjudicadosFile?: boolean;
}

export interface ArticuloMasVendido {
  convenio: 'Aseo e Higiene' | 'Artículos de Escritorio y Oficina';
  nombre: string;
  precio: number;
  cantidadVendida: number;
  unidadMedida: string;
}

export const listadoProveedores: Proveedor[] = [
  {
    "rut": "76.073.022-K",
    "razonSocial": "INDERQUIM LTDA.",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "contacto@inderquim.cl",
    "telefono": "+56 2 2732 1436",
    "representante": "Carlos Valenzuela",
    "web": "www.inder-roll.cl",
    "file": "Productos Adjudicados.xlsx",
    "isAdjudicadosFile": true,
    "ventas": [
      {
        "articulo": "DETERGENTE LIQUIDO DOYPACK 3 LITROS OP1 ATACAMA",
        "precio": 4420,
        "compradorRegion": "OP1 ATACAMA",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "LIQUIDO LIMPIAVIDRIOS BIDON 5000 CC UNIDAD OP1 ARICA Y PARINACOTA",
        "precio": 3894,
        "compradorRegion": "OP1 ARICA Y PARINACOTA",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "DESENGRASANTE COCINA C/PULVERIZADOR 500 ML OP1 ANTOFAGASTA",
        "precio": 1170,
        "compradorRegion": "OP1 ANTOFAGASTA",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "DESENGRASANTE COCINA C/PULVERIZADOR 500 ML OP1 DEL ÑUBLE",
        "precio": 1080,
        "compradorRegion": "OP1 DEL ÑUBLE",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "LIQUIDO LIMPIAVIDRIOS BIDON 5000 CC UNIDAD OP1 MAGALLANES",
        "precio": 3894,
        "compradorRegion": "OP1 MAGALLANES",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "DESENGRASANTE COCINA RECARGA DOYPACK 500 ML OP1 AYSEN",
        "precio": 1040,
        "compradorRegion": "OP1 AYSEN",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "DESENGRASANTE COCINA C/PULVERIZADOR 500 ML OP1 DE LOS LAGOS",
        "precio": 1170,
        "compradorRegion": "OP1 DE LOS LAGOS",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "DESENGRASANTE COCINA C/PULVERIZADOR 500 ML OP1 ARICA Y PARINACOTA",
        "precio": 1215,
        "compradorRegion": "OP1 ARICA Y PARINACOTA",
        "modalidad": "Convenio Marco (Adjudicado)"
      }
    ]
  },
  {
    "rut": "76.123.456-1",
    "razonSocial": "Bastian SpA",
    "tipoEmpresa": "PYME",
    "comuna": "Concepción",
    "region": "Biobío",
    "rubro": "Aseo e Higiene",
    "email": "licitaciones@bastian.cl",
    "telefono": "+56 41 2413 7230",
    "representante": "Fabian Bastian",
    "web": "www.bastian.cl",
    "file": "Mercado Publico_Bastian.xlsx",
    "ventas": [
      {
        "articulo": "PAPEL HIGIÉNICO SH 500 X 4",
        "precio": 8100,
        "compradorRegion": "",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "PAPEL HIGIÉNICO SH 500 X 4",
        "precio": 8100,
        "compradorRegion": "Á",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "PAPEL HIGIÉNICO SH 500 X 4",
        "precio": 7800,
        "compradorRegion": "",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "PAPEL HIGIÉNICO SH 500 X 4",
        "precio": 7800,
        "compradorRegion": "",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "PAPEL HIGIÉNICO SH 500 X 4",
        "precio": 7500,
        "compradorRegion": "",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "PAPEL HIGIÉNICO SH 500 X 4",
        "precio": 7200,
        "compradorRegion": "ÍSO",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "PAPEL HIGIÉNICO SH 500 X 4",
        "precio": 6000,
        "compradorRegion": "",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "PAPEL HIGIÉNICO SH 500 X 4",
        "precio": 6900,
        "compradorRegion": "´HIGGINS",
        "modalidad": "Convenio Marco (Adjudicado)"
      }
    ]
  },
  {
    "rut": "76.321.654-2",
    "razonSocial": "Comercial DLM SpA",
    "tipoEmpresa": "PYME",
    "comuna": "Viña del Mar",
    "region": "Valparaíso",
    "rubro": "Aseo e Higiene",
    "email": "ventas@comercialdlm.cl",
    "telefono": "+56 32 2245 4622",
    "representante": "Daniel López Miranda",
    "web": "www.comercialdlm.cl",
    "file": "Mercado Publico_Comercial DLM.xlsx",
    "ventas": [
      {
        "articulo": "PAPEL HIGIÉNICO SH 500 X 4",
        "precio": 8775,
        "compradorRegion": "",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "PAPEL HIGIÉNICO SH 500 X 4",
        "precio": 8775,
        "compradorRegion": "Á",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "PAPEL HIGIÉNICO SH 500 X 4",
        "precio": 8450,
        "compradorRegion": "",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "PAPEL HIGIÉNICO SH 500 X 4",
        "precio": 8450,
        "compradorRegion": "",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "PAPEL HIGIÉNICO SH 500 X 4",
        "precio": 8125,
        "compradorRegion": "",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "PAPEL HIGIÉNICO SH 500 X 4",
        "precio": 7800,
        "compradorRegion": "ÍSO",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "PAPEL HIGIÉNICO SH 500 X 4",
        "precio": 6500,
        "compradorRegion": "",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "PAPEL HIGIÉNICO SH 500 X 4",
        "precio": 7475,
        "compradorRegion": "´HIGGINS",
        "modalidad": "Convenio Marco (Adjudicado)"
      }
    ]
  },
  {
    "rut": "76.633.699-K",
    "razonSocial": "Impo Paper SpA",
    "tipoEmpresa": "PYME",
    "comuna": "Recoleta",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "compras@impopaper.cl",
    "telefono": "+56 2 2245 7800",
    "representante": "Mario Ignacio Gallegos",
    "web": "www.impopaper.cl",
    "file": "RESULTADO POSTULACION IMPO PAPER.xlsx",
    "isAdjudicadosFile": true,
    "ventas": [
      {
        "articulo": "CONTENEDOR DE BASURA CON TAPA HDPE CON PEDAL 30 LITROS UNIDAD OP2 VALPARAISO",
        "precio": 18338,
        "compradorRegion": "OP2 VALPARAISO",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "CONTENEDOR DE BASURA CON TAPA HDPE 120 LITROS UNIDAD OP1 COQUIMBO",
        "precio": 47233,
        "compradorRegion": "OP1 COQUIMBO",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "CONTENEDOR DE BASURA CON TAPA HDPE 120 LITROS UNIDAD OP1 DE LA ARAUCANIA",
        "precio": 47233,
        "compradorRegion": "OP1 DE LA ARAUCANIA",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "CONTENEDOR DE BASURA CON TAPA HDPE CON PEDAL 30 LITROS UNIDAD OP2 R. METROPOLITANA",
        "precio": 15282,
        "compradorRegion": "OP2 R. METROPOLITANA",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "CONTENEDOR DE BASURA CON TAPA HDPE CON PEDAL 30 LITROS UNIDAD OP1 DEL BIOBIO",
        "precio": 19103,
        "compradorRegion": "OP1 DEL BIOBIO",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "CONTENEDOR DE BASURA CON TAPA HDPE CON PEDAL 30 LITROS UNIDAD OP1 DE LA ARAUCANIA",
        "precio": 19103,
        "compradorRegion": "OP1 DE LA ARAUCANIA",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "CONTENEDOR DE BASURA CON TAPA HDPE CON PEDAL 50 LITROS UNIDAD OP1 DEL BIOBIO",
        "precio": 27926,
        "compradorRegion": "OP1 DEL BIOBIO",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "CONTENEDOR DE BASURA CON TAPA HDPE CON PEDAL 30 LITROS UNIDAD OP2 O´HIGGINS",
        "precio": 18338,
        "compradorRegion": "OP2 O´HIGGINS",
        "modalidad": "Convenio Marco (Adjudicado)"
      }
    ]
  },
  {
    "rut": "76.543.210-3",
    "razonSocial": "Somosmira SpA",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "hola@somosmira.cl",
    "telefono": "+56 2 2780 4322",
    "representante": "Mira Valenzuela",
    "web": "www.somosmira.cl",
    "file": "Mercado Publico_Somosmira.xlsx",
    "ventas": [
      {
        "articulo": "CERA LÍQUIDA BIDÓN 5 LITROS EMULSIÓN ACRÍLICA NEGRA 18%",
        "precio": 16812,
        "compradorRegion": "",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "CERA LÍQUIDA BIDÓN 5 LITROS EMULSIÓN ACRÍLICA NEGRA 18%",
        "precio": 16812,
        "compradorRegion": "Á",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "CERA LÍQUIDA BIDÓN 5 LITROS EMULSIÓN ACRÍLICA NEGRA 18%",
        "precio": 16189,
        "compradorRegion": "",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "CERA LÍQUIDA BIDÓN 5 LITROS EMULSIÓN ACRÍLICA NEGRA 18%",
        "precio": 16189,
        "compradorRegion": "",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "CERA LÍQUIDA BIDÓN 5 LITROS EMULSIÓN ACRÍLICA NEGRA 18%",
        "precio": 15566,
        "compradorRegion": "",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "CERA LÍQUIDA BIDÓN 5 LITROS EMULSIÓN ACRÍLICA NEGRA 18%",
        "precio": 14944,
        "compradorRegion": "ÍSO",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "CERA LÍQUIDA BIDÓN 5 LITROS EMULSIÓN ACRÍLICA NEGRA 18%",
        "precio": 12453,
        "compradorRegion": "",
        "modalidad": "Convenio Marco (Adjudicado)"
      },
      {
        "articulo": "CERA LÍQUIDA BIDÓN 5 LITROS EMULSIÓN ACRÍLICA NEGRA 18%",
        "precio": 14321,
        "compradorRegion": "´HIGGINS",
        "modalidad": "Convenio Marco (Adjudicado)"
      }
    ]
  },
  {
    "rut": "96.502.130-9",
    "razonSocial": "Prisa S.A. Logística",
    "tipoEmpresa": "Grande",
    "comuna": "Quilicura",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "convenios@prisa.cl",
    "telefono": "+56 2 2820 1000",
    "representante": "Francisco Solari",
    "web": "www.prisa.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta Chameco 75g",
        "precio": 4500,
        "compradorRegion": "RM METROPOLITANA",
        "modalidad": "Convenio Marco"
      },
      {
        "articulo": "Resma de Papel Oficio Chameco 75g",
        "precio": 5100,
        "compradorRegion": "RM METROPOLITANA",
        "modalidad": "Convenio Marco"
      },
      {
        "articulo": "Archivador Lomo Ancho Oficio Cartón Plastificado",
        "precio": 1850,
        "compradorRegion": "V VALPARAÍSO",
        "modalidad": "Licitación Pública"
      },
      {
        "articulo": "Cuaderno Universitario Matemática 100 Hojas Colón",
        "precio": 1200,
        "compradorRegion": "VIII BIOBÍO",
        "modalidad": "Licitación Pública"
      },
      {
        "articulo": "Tóner HP Laserjet 85A Negro Original",
        "precio": 68000,
        "compradorRegion": "RM METROPOLITANA",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99598770-8",
    "razonSocial": "NATURAL PHONE SOCIEDAD ANONIMA",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "carlos.valenzuela.silva@gmail.com",
    "telefono": "56-2-22454622",
    "representante": "Carlos Eugenio                           Valenzuela",
    "web": "www.naturalphone.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99598490-3",
    "razonSocial": "SOCIEDAD COMERCIAL INMOBILIARIA VALLE PARAISO SOCIEDAD ANONIMA",
    "tipoEmpresa": "PYME",
    "comuna": "Natales",
    "region": "Magallanes",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "contactos@cormorandelasrocas.com",
    "telefono": "56-61-2413723",
    "representante": "jorge                                    dillems",
    "web": "www.cormorandelasrocas.com",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Magallanes",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Magallanes",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Magallanes",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99595670-5",
    "razonSocial": "INVERSIONES CRECIMIENTO SPA",
    "tipoEmpresa": "PYME",
    "comuna": "Recoleta",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "procelab@gmail.com",
    "telefono": "56-2-27321436",
    "representante": "Mario                                    Gallegos",
    "web": "www.procelab.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99592890-6",
    "razonSocial": "MULTICOM MAULE S A",
    "tipoEmpresa": "PYME",
    "comuna": "126",
    "region": "Maule",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "jmaldonado@loncomillatv.cl",
    "telefono": "-2561617",
    "representante": "NICOLAS                                  MARQUEZ",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Maule",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Maule",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Maule",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99591380-1",
    "razonSocial": "MICROCONTROL CHILE S A",
    "tipoEmpresa": "PYME",
    "comuna": "Providencia",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "tino@microcontrol.cl",
    "telefono": "56-2-24358770",
    "representante": "Tino Francisco                           Solari",
    "web": "www.microcontrol.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99587850-K",
    "razonSocial": "COMACO SERVICIOS LOGISTICOS SPA",
    "tipoEmpresa": "PYME",
    "comuna": "Pudahuel",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "jpulgar@comaco.cl",
    "telefono": "56-2-22223192",
    "representante": "SOLEDAD CECILIA                          LAMA",
    "web": "www.comaco.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99584200-9",
    "razonSocial": "SHIELDS LTDA",
    "tipoEmpresa": "PYME",
    "comuna": "La Reina",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "shieldsrr.hh@gmail.com",
    "telefono": "56-2-22271258",
    "representante": "CARLOS SERGIO                            OTTONE",
    "web": "www.shields.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99576370-2",
    "razonSocial": "NEXTTIME SOFTWARE S.A.",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "juanjose.gaete@nexttimesoftware.com",
    "telefono": "56-2-24336800",
    "representante": "Juan                                     Gaete",
    "web": "www.nexttimesoftware.com",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99573900-3",
    "razonSocial": "JARA CONSTRUCCIONES OBRAS Y MONTAJES S.A",
    "tipoEmpresa": "PYME",
    "comuna": "Antofagasta",
    "region": "Antofagasta",
    "rubro": "Aseo e Higiene",
    "email": "ijara@jaraconstrucciones.cl",
    "telefono": "56-55-2789372",
    "representante": "Ivan alberto                             Jara",
    "web": "www.sanfernandosa.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Antofagasta",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Antofagasta",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Antofagasta",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99573120-7",
    "razonSocial": "SOCIEDAD CONSTRUCTORA MEJILLONES LIMITADA",
    "tipoEmpresa": "PYME",
    "comuna": "Viña Del Mar",
    "region": "Valparaíso",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "esteban.benito@cbh.cl",
    "telefono": "56-32-2842922",
    "representante": ".                                        .",
    "web": "..",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Valparaíso",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Valparaíso",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Valparaíso",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99569790-4",
    "razonSocial": "COMERCIAL MARIO R LUDWIG S A",
    "tipoEmpresa": "PYME",
    "comuna": "Renca",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "mrludwig@entelchile.net",
    "telefono": "56-2-22037376",
    "representante": "Mario Ricardo                            Ludwig",
    "web": "www.cmrl.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99569670-3",
    "razonSocial": "FARMACEUTICA ACUA NASER S A",
    "tipoEmpresa": "PYME",
    "comuna": "Isla De Maipo",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "ecuanaser@gmail.com",
    "telefono": "56-2-28199884",
    "representante": "Ester                                    Fajardo",
    "web": "www.ecuanaser.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99569510-3",
    "razonSocial": "ISAHYF S A",
    "tipoEmpresa": "PYME",
    "comuna": "Providencia",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "ggormaz@inheridas.cl",
    "telefono": "56-2-22237667",
    "representante": "Isabel                                   Aburto",
    "web": "www.inheridas.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99568810-7",
    "razonSocial": "COMERCIALIZADORA Y DISTRIBUIDORA DINAR S A",
    "tipoEmpresa": "PYME",
    "comuna": "La Cisterna",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "m.araya@dinarsa.cl",
    "telefono": "56-2-23125671",
    "representante": "MARCELA                                  ARAYA",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99564530-0",
    "razonSocial": "RAESA CHILE SOCIEDAD ANONIMA",
    "tipoEmpresa": "PYME",
    "comuna": "Chillan",
    "region": "Ñuble",
    "rubro": "Aseo e Higiene",
    "email": "c.navarrete.chile@raesa.com",
    "telefono": "56-42-2278894",
    "representante": "Cristhian                                Navarrete",
    "web": "www.raesa.com",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Ñuble",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Ñuble",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Ñuble",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99563950-5",
    "razonSocial": "CARROT SUPPORT S A",
    "tipoEmpresa": "PYME",
    "comuna": "Providencia",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "patriciagerencia@gmail.com",
    "telefono": "56-32-2587520",
    "representante": "JOSE MANUEL                              LECAROS",
    "web": "www.carrot.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99559190-1",
    "razonSocial": "VICENS VIVES CHILE S A",
    "tipoEmpresa": "PYME",
    "comuna": "Providencia",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "pretamales@vicensvives.com",
    "telefono": "56-2-24925354",
    "representante": "María Paulina                            Retamales",
    "web": "www.vicensvives.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99555170-5",
    "razonSocial": "CORPORACION C Y K S A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "rdebonnafos@constructoracyk.cl",
    "telefono": "56-9-5382780",
    "representante": "Catalina                                 Ovalle",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99554950-6",
    "razonSocial": "SOC DE INVERSIONES YOC S A",
    "tipoEmpresa": "PYME",
    "comuna": "Puerto Montt",
    "region": "Los Lagos",
    "rubro": "Aseo e Higiene",
    "email": "operaciones@yocsa.cl",
    "telefono": "56-65-2260386",
    "representante": "Yesenia                                  Olavarría",
    "web": "www.yocsa.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Los Lagos",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Los Lagos",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Los Lagos",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99553110-0",
    "razonSocial": "PIDDO MONTIGLIO Y COMPANIA S.A.",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "fmarcenaro@ppcabogados.cl",
    "telefono": "56-2-24419022",
    "representante": "William                                  Banduc",
    "web": "www.legalgroup.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99552380-9",
    "razonSocial": "DISTRIBUCION Y SERVICIOS CAMPOMANES S A",
    "tipoEmpresa": "PYME",
    "comuna": "Ñuñoa",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "cristian@campomanes.cl",
    "telefono": "56-2-22382152",
    "representante": "Cristián                                 Campomanes",
    "web": "www.campomanes.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99552290-K",
    "razonSocial": "EMPRESA DE SERVICIOS ELECTRICOS S A",
    "tipoEmpresa": "PYME",
    "comuna": "Ovalle",
    "region": "Coquimbo",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "gvaras84@gmail.com",
    "telefono": "56-2-00000000",
    "representante": "Enrique del carmen                       Varas",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Coquimbo",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Coquimbo",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Coquimbo",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99549710-7",
    "razonSocial": "SERVICIOS SOLDEU SPA",
    "tipoEmpresa": "PYME",
    "comuna": "Recoleta",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "rodrigomiranda@soldeu.cl",
    "telefono": "56-2-29815607",
    "representante": "Rodrigo                                  Miranda",
    "web": "WWW.SOLDEU.CL",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99547390-9",
    "razonSocial": "PREFABRICADOS VIBRASUR SOCIEDAD ANONIMA",
    "tipoEmpresa": "PYME",
    "comuna": "Cauquenes",
    "region": "Maule",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "joseluisramirezmartinez91@gmail.com",
    "telefono": "56-75-333014",
    "representante": "Francisco René                           Ramirez",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Maule",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Maule",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Maule",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99545540-4",
    "razonSocial": "REDCOL S A",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "mav@redcol.cl",
    "telefono": "56-2-26591014",
    "representante": "Francisco                                Briones",
    "web": "www.redcol.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99541370-1",
    "razonSocial": "L GAI CHILE S A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago Centro",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "marcelo.sartori@applus.com",
    "telefono": "56-2-25629019",
    "representante": "Carolina                                 Troncoso",
    "web": "www.appluscertification.com",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99540890-2",
    "razonSocial": "INGENIERIA GEOTECNIA Y MEDIO AMBIENTE S A",
    "tipoEmpresa": "PYME",
    "comuna": "Concepcion",
    "region": "Biobío",
    "rubro": "Aseo e Higiene",
    "email": "infoigma@gmail.com",
    "telefono": "56-41-2737201",
    "representante": "INGENIERIA GEOTECNIA Y MEDIO AMBIENTE S",
    "web": "www.igma.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Biobío",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Biobío",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Biobío",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99540830-9",
    "razonSocial": "LINK TECNOLOGIA DIGITAL S A",
    "tipoEmpresa": "PYME",
    "comuna": "Providencia",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "fgonzalez@linkdigital.cl",
    "telefono": "56-2-23331073",
    "representante": "Felipe                                   Gonzalez",
    "web": "www.linkdigital.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99539340-9",
    "razonSocial": "EMPTER CHILE SPA",
    "tipoEmpresa": "PYME",
    "comuna": "Huechuraba",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "luciac@empter.cl",
    "telefono": "56-2-24463099",
    "representante": "EMPTER CHILE S.A.",
    "web": "www.empter.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99537640-7",
    "razonSocial": "TRIPAN S A",
    "tipoEmpresa": "PYME",
    "comuna": "San Nicolás",
    "region": "Ñuble",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "rcorrea@tripan.cl",
    "telefono": "56-2-24816232",
    "representante": "Rodrigo                                  Correa",
    "web": "www.tripan.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Ñuble",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Ñuble",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Ñuble",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99535940-5",
    "razonSocial": "SOC DE INVERSIONES VICAM SOCIED ANONIMA",
    "tipoEmpresa": "PYME",
    "comuna": "Calera De Tango",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "vicamarboles@yahoo.es",
    "telefono": "56-2-28553492",
    "representante": "ALVARO                                   MUJICA",
    "web": "www.arbolesgigantesmaipu.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99533780-0",
    "razonSocial": "AMINORTE S A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "mviguera@aminorte.cl",
    "telefono": "56-6-29409800",
    "representante": "Miguel Renato                            Viguera",
    "web": "www.aminorte.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99532830-5",
    "razonSocial": "CERTINET S A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago Centro",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "arebolledo@certinet.cl",
    "telefono": "56-2-32219400",
    "representante": "Roberto                                  Riveros",
    "web": "www.certinet.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99531900-4",
    "razonSocial": "HIDROPACK S A",
    "tipoEmpresa": "PYME",
    "comuna": "Estacion Central",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "iescobar@hidropack.cl",
    "telefono": "56-2-25602692",
    "representante": "Carlos                                   Carvalho",
    "web": "www.hidropack.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99529250-5",
    "razonSocial": "DISTRIBUCION Y LOGISTICA S A",
    "tipoEmpresa": "PYME",
    "comuna": "Arica",
    "region": "Arica y Parinacota",
    "rubro": "Aseo e Higiene",
    "email": "dyl1_sa@hotmail.com",
    "telefono": "56-58-2246042",
    "representante": "Cristina Alejandra                       Pasten",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Arica y Parinacota",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Arica y Parinacota",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Arica y Parinacota",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99526860-4",
    "razonSocial": "SOHO CHILE COM S A",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "alvaro@soho.cl",
    "telefono": "56-9-81499782",
    "representante": "Alvaro Gustavo                           Añon",
    "web": "www.soho.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99525890-0",
    "razonSocial": "ATRIUM OKB CHILE SOCIEDAD ANONIMA",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "jreyes@atriumokb.cl",
    "telefono": "56-2-25350565",
    "representante": "Jose Tomas                               Reyes",
    "web": "www.atriumokb.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99525730-0",
    "razonSocial": "SALTEC COMMUNICATIONS S A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "aneira@saltec.cl",
    "telefono": "56-2-29076904",
    "representante": "Alejandro                                Neira",
    "web": "www.saltec.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99519620-4",
    "razonSocial": "SOC DE DIAGNOSTICO INVASIVO CARDIOLOGICO S A",
    "tipoEmpresa": "PYME",
    "comuna": "San Miguel",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "avidal.sodica@gmail.com",
    "telefono": "56-2-25768852",
    "representante": "Andrés                                   Vidal",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99518190-8",
    "razonSocial": "KAUCIONA S A",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "jmmontes@kauciona.cl",
    "telefono": "56-2-00000000",
    "representante": "Jose Manuel                              Montes",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99516640-2",
    "razonSocial": "TRENDS AMERICAS CHILE S.A.",
    "tipoEmpresa": "PYME",
    "comuna": "Melipilla",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "grete.ruber@trends.cl",
    "telefono": "56-2-22075739",
    "representante": "Rodrigo                                  Silva",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99514760-2",
    "razonSocial": "CYBERMEDIAL S.A.",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago Centro",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "ctorres@cybermedial.cl",
    "telefono": "56-2-23949500",
    "representante": "Miguel Angel                             Torres",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99514640-1",
    "razonSocial": "COMERCIAL TANGERINE S A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "negocios2.088@gmail.com",
    "telefono": "56-2-26336159",
    "representante": "Fernando                                 Cassorla",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99512950-7",
    "razonSocial": "UMS UNITED MEDICAL SYSTEMS CHILE S A",
    "tipoEmpresa": "PYME",
    "comuna": "Quilicura",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "hweiner@umschile.com",
    "telefono": "56-2-26240679",
    "representante": "HANS                                     WEINER",
    "web": "www.umschile.com",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99508110-5",
    "razonSocial": "COMERCIAL ARRIMOT LIMITADA",
    "tipoEmpresa": "PYME",
    "comuna": "Recoleta",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "masa.sumi@me.com",
    "telefono": "56-9-81387022",
    "representante": "MASAYUKI                                 SUMI",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "99506190-2",
    "razonSocial": "CLINICA PSIQUIATRICA RAQUEL GAETE S A",
    "tipoEmpresa": "PYME",
    "comuna": "Melipilla",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "clinicaraquelgaete@yahoo.es",
    "telefono": "56-2-28749912",
    "representante": "Helmut                                   Gunther",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96994000-0",
    "razonSocial": "SERVICIOS DE CAPACITACION MISION S.A.",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "seminarios@mision.cl",
    "telefono": "56-2-27614780",
    "representante": "Julio                                    Olivares",
    "web": "www.mision.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96993250-4",
    "razonSocial": "ASERCOM CHILE SPA",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "enunezv@asercom.cl",
    "telefono": "56-2-28938236",
    "representante": "Enrique                                  Núñez",
    "web": "www.asercom.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96991860-9",
    "razonSocial": "CLUB DE MUJERES EMPRESARIAS S A",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "directora@me.cl",
    "telefono": "56-2-28969300",
    "representante": "Carolina                                 Eterovic",
    "web": "www.me.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96989940-K",
    "razonSocial": "LABORATORIO BOSTON S A",
    "tipoEmpresa": "PYME",
    "comuna": "San Bernardo",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "fsmart@nat100.cl",
    "telefono": "56-2-25738500",
    "representante": "Sebastián                                Smart",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96989530-7",
    "razonSocial": "CASTILLA Y ARAGON SPA",
    "tipoEmpresa": "PYME",
    "comuna": "Pudahuel",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "ronaldo@castillayaragon.com",
    "telefono": "56-2-25678541",
    "representante": "MARCELO                                  DIAZ",
    "web": "www.ladoverde.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96989250-2",
    "razonSocial": "IMPORTADORA Y DISTRIBUIDORA NEUMAX S.A.",
    "tipoEmpresa": "PYME",
    "comuna": "Cerrillos",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "ccastro@neumax.cl",
    "telefono": "56-2-25338414",
    "representante": "Cristián                                 Castro",
    "web": "www.neumax.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96988980-3",
    "razonSocial": "SISTEMA DE GESTION INTEGRADA S A",
    "tipoEmpresa": "PYME",
    "comuna": "Viña Del Mar",
    "region": "Valparaíso",
    "rubro": "Aseo e Higiene",
    "email": "afuenzalida@aadd.cl",
    "telefono": "56-32-2699286",
    "representante": "Alberto                                  Fuenzalida",
    "web": "www.i-gestion.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Valparaíso",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Valparaíso",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Valparaíso",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96986340-5",
    "razonSocial": "CENTRO DE FORMACION TECNICA TEODORO WICKEL KLUWEN S A",
    "tipoEmpresa": "PYME",
    "comuna": "Temuco",
    "region": "La Araucanía",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "mnunez@twk.cl",
    "telefono": "56-45-2742400",
    "representante": "Luis Marcelo                             Núñez",
    "web": "www.twk.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "La Araucanía",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "La Araucanía",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "La Araucanía",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96986070-8",
    "razonSocial": "PARACLINICS S A",
    "tipoEmpresa": "PYME",
    "comuna": "Independencia",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "crodriguez@paraclinics.cl",
    "telefono": "56-2-24727240",
    "representante": "NICOLAS                                  SCHNAPP",
    "web": "info@paraclinics.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96985590-9",
    "razonSocial": "IMAGICAIR CONSULTORES SPA",
    "tipoEmpresa": "PYME",
    "comuna": "San Bernardo",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "jessica@imagicair.cl",
    "telefono": "56-2-26996384",
    "representante": "Eduardo Javier                           Diaz",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96984910-0",
    "razonSocial": "DEVETEL SERVICIOS E INGENIERIA S A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "acasas@soluraf.cl",
    "telefono": "56-2-27149100",
    "representante": "Cristian                                 Muñoz",
    "web": "www.devetel.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96981410-2",
    "razonSocial": "BLUE COMPANY S A",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "alvaro@bluecompany.cl",
    "telefono": "56-2-22448900",
    "representante": "PAOLO                                    COLONNELLO",
    "web": "www.bluecompany.cl/",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96980540-5",
    "razonSocial": "SERVICIOS FULL TECHNOLOGY SOCIEDAD ANONIMA",
    "tipoEmpresa": "PYME",
    "comuna": "Providencia",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "vmarambio@fulltechnology.cl",
    "telefono": "56-2-22059159",
    "representante": "Rodolfo                                  Zuleta",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96976600-0",
    "razonSocial": "GESTION SOCIAL S A",
    "tipoEmpresa": "PYME",
    "comuna": "Providencia",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "jppinochet@gestionsocial.cl",
    "telefono": "56-2-22313120",
    "representante": "Juan Pedro                               Pinochet",
    "web": "www.gestionsocial.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96974180-6",
    "razonSocial": "REVESTIMIENTOS FLOORCENTER LIMITADA",
    "tipoEmpresa": "PYME",
    "comuna": "Vitacura",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "crubio@floorcenter.cl",
    "telefono": "56-2-26634000",
    "representante": "Carolina                                 Rubio",
    "web": "www.floorcenter.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96973590-3",
    "razonSocial": "COMERCIAL ATACAMA LIMITADA",
    "tipoEmpresa": "PYME",
    "comuna": "Vallenar",
    "region": "Atacama",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "electronicaatacama@gmail.com",
    "telefono": "56-51-2614065",
    "representante": "LILIAN   CAROLINA                        CORTES",
    "web": "www.electronicatacama.com",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Atacama",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Atacama",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Atacama",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96972680-7",
    "razonSocial": "VPT S A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "rsepulveda@vptsa.cl",
    "telefono": "56-9-8730034",
    "representante": "VPT S A                                  Sepulveda",
    "web": "www.vptsa.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96969470-0",
    "razonSocial": "BURON SPA",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "margarita@buron.cl",
    "telefono": "56-2-22158400",
    "representante": "TOMAS JULIO                              BURON",
    "web": "www.buron.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96969290-2",
    "razonSocial": "CMETRIX BUSINESS SOLUTIONS S.A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "contactochilecompra@cmetrix.la",
    "telefono": "56-9-28899100",
    "representante": "Gustavo                                  Garcia",
    "web": "www.cmetrix.la",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96969220-1",
    "razonSocial": "TECNOLOGIAS ESTRUCTURALES AVANZADAS S A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "tecnoav@entelchile.net",
    "telefono": "56-2-22453118",
    "representante": "DANIEL RAUL                              ORTIZ",
    "web": "www.tecnoav.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96968870-0",
    "razonSocial": "FLIX MEDIA S.A.",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "ecarmona@flixmedia.cl",
    "telefono": "56-2-25851065",
    "representante": "Karina                                   Ventura",
    "web": "www.flixmedia.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96968660-0",
    "razonSocial": "AENORCHILE SPA",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "mcelis@aenor.com",
    "telefono": "56-2-24999200",
    "representante": "MARIA ANGELICA                           SANHUEZA",
    "web": "www.aenor.es",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96968150-1",
    "razonSocial": "MAR JONICO SPA",
    "tipoEmpresa": "PYME",
    "comuna": "Illapel",
    "region": "Coquimbo",
    "rubro": "Aseo e Higiene",
    "email": "bustamantevergara@gmail.com",
    "telefono": "56-53-2522254",
    "representante": "RODRIGO ALFREDO                          BUSTAMANTE",
    "web": "facebook escconductoresmarjonico",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Coquimbo",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Coquimbo",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Coquimbo",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96967060-7",
    "razonSocial": "ASESORIAS Y DESARROLLO DE PROYECTOS NETRED.CL LIMITADA",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "jmgonzal@netred.cl",
    "telefono": "56-9-4300155",
    "representante": "José                                     González",
    "web": "www.netred.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96966420-8",
    "razonSocial": "SERVICIOS PARA MINERIA Y CONSTRUCCION LIMITADA",
    "tipoEmpresa": "PYME",
    "comuna": "Coquimbo",
    "region": "Coquimbo",
    "rubro": "Aseo e Higiene",
    "email": "halfaro@sermicon.cl",
    "telefono": "56-51-2141035",
    "representante": "Elias Percy                              Geraldo",
    "web": "www.sermicon.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Coquimbo",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Coquimbo",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Coquimbo",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96966130-6",
    "razonSocial": "STEL CHILE S A",
    "tipoEmpresa": "PYME",
    "comuna": "Alhué",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "icorrea@stel.cl",
    "telefono": "",
    "representante": "No especificado",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96963470-8",
    "razonSocial": "SICOM ELECTRONICS INTERNATIONAL S.A.",
    "tipoEmpresa": "PYME",
    "comuna": "Concepcion",
    "region": "Biobío",
    "rubro": "Aseo e Higiene",
    "email": "jcpuentes@sicom.cl",
    "telefono": "56-41-2560188",
    "representante": "Felipe                                   Elso",
    "web": "www.sicomelectronics.com",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Biobío",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Biobío",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Biobío",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96959280-0",
    "razonSocial": "AGRORENTAL SOCIEDAD ANONIMA",
    "tipoEmpresa": "PYME",
    "comuna": "Quilicura",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "ocoya@agrorental.cl",
    "telefono": "56-2-24814120",
    "representante": "Jose Tomas                               Carmona",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96955890-4",
    "razonSocial": "SISTEMAS GEODESICOS LIMITADA",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "carlos@geocas.com",
    "telefono": "56-2-22250678",
    "representante": "CARLOS                                   BRAVO",
    "web": "www.geocas.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96955610-3",
    "razonSocial": "INVERSIONES PUEBLOS ORIGINARIOS SOCIEDAD ANONIMA",
    "tipoEmpresa": "PYME",
    "comuna": "Puerto Montt",
    "region": "Los Lagos",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "jvera@sisa.cl",
    "telefono": "56-65-272073",
    "representante": "Cristino Juan                            Stange",
    "web": "www.inposa.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Los Lagos",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Los Lagos",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Los Lagos",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96949900-2",
    "razonSocial": "TITO YARAD S A",
    "tipoEmpresa": "PYME",
    "comuna": "Recoleta",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "aliciacortes@titoyarad.cl",
    "telefono": "56-2-27376300",
    "representante": "Elias                                    Yarad",
    "web": "www.titoyarad.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96949130-3",
    "razonSocial": "CP DATA OPTIMUM CHILE S A",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "ccroque@cpdata.cl",
    "telefono": "56-2-25808800",
    "representante": "Cristián Andrés                          Croquevielle",
    "web": "www.cpdata.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96948100-6",
    "razonSocial": "VALUACIONES DE CHILE SPA",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "cacevedo@valuaciones.cl",
    "telefono": "56-2-00000000",
    "representante": "Christian                                Acevedo",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96947980-K",
    "razonSocial": "IMPORTADORA PANAMA SOCIEDAD ANONIMA",
    "tipoEmpresa": "PYME",
    "comuna": "Chillan",
    "region": "Ñuble",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "importadorapanamasa@gmail.com",
    "telefono": "56-42-2426354",
    "representante": "Daniel                                   Facuse",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Ñuble",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Ñuble",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Ñuble",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96946410-1",
    "razonSocial": "INDUSTRIAL Y COMERCIAL VALENCIA S A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "alejandro@valenciasa.cl",
    "telefono": "56-2-28161011",
    "representante": "Manuel Armando                           Valencia",
    "web": "www.valenciasa.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96945160-3",
    "razonSocial": "YES SOCIEDAD ANONIMA",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "felipe@yes.cl",
    "telefono": "56-2-23212000",
    "representante": "Andres                                   Schnitzer",
    "web": "www.yespublicidad.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96945000-3",
    "razonSocial": "ATSA CHILE S A",
    "tipoEmpresa": "PYME",
    "comuna": "Huechuraba",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "evallejos@atsa.cl",
    "telefono": "56-02-4659700",
    "representante": "Enrique                                  Vallejos",
    "web": "www.atsa.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96942830-K",
    "razonSocial": "OSTICA CONSULTORES S A",
    "tipoEmpresa": "PYME",
    "comuna": "Providencia",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "carlos.belmar@ostica.cl",
    "telefono": "56-2-2137146",
    "representante": "Carlos                                   Belmar",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96941290-K",
    "razonSocial": "SUSTENTABLE S.A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "msilva@sustentable.cl",
    "telefono": "56-2-23659306",
    "representante": "Manuel                                   Silva",
    "web": "www.sustentable.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96940740-K",
    "razonSocial": "NUCLEO EDUCATIVO S A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "gbc@ne.cl",
    "telefono": "56-2-24211145",
    "representante": "GUILLERMO                                BRIONES",
    "web": "www.ne.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96938860-K",
    "razonSocial": "INGENIERIA GESTION Y CONTROL SOCIEDAD ANONIMA",
    "tipoEmpresa": "PYME",
    "comuna": "Providencia",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "gcuadra@igyc.cl",
    "telefono": "56-2-23310980",
    "representante": "GUILLERMO                                CUADRA",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96937110-3",
    "razonSocial": "PROYECTUM CHILE SPA",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "gimorales@gmail.com",
    "telefono": "56-2-2664535",
    "representante": "Gonzalo                                  Morales",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96936650-9",
    "razonSocial": "MICROJURIS COM CHILE S A",
    "tipoEmpresa": "PYME",
    "comuna": "Providencia",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "mgac@corp.microjuris.com",
    "telefono": "56-2-29558544",
    "representante": "Pablo Segundo                            Hernandez",
    "web": "www.microjuris.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96930180-6",
    "razonSocial": "T H K IMPORTACIONES S A",
    "tipoEmpresa": "PYME",
    "comuna": "San Bernardo",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "cherrera_thermoking@thksa.cl",
    "telefono": "56-2-28544768",
    "representante": "ANDRES                                   SERRANO",
    "web": "www.thksa.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96929790-6",
    "razonSocial": "ATMOSPHERE CHILE SPA",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "max.grekin@mailskm.com",
    "telefono": "56-2-27549900",
    "representante": "MAX                                      GREKIN",
    "web": "www.skmportal.com",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96928990-3",
    "razonSocial": "VIA 56 S A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "aarancibia@via56.cl",
    "telefono": "56-2-24654201",
    "representante": "SERGIO ARIEL                             ARANCIBIA",
    "web": "www.via56.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96925950-8",
    "razonSocial": "PROVEQUIN S A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "pmoreno@provequin.cl",
    "telefono": "56-2-26175540",
    "representante": "Eduardo                                  Silva",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96918380-3",
    "razonSocial": "LABORUM CHILE ONLINE S.A.",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "jduque@navent.com",
    "telefono": "56-9-32024008",
    "representante": "John                                     Duque",
    "web": "www.laborum.com",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96914990-7",
    "razonSocial": "PANAMERICANA HOTELES S A",
    "tipoEmpresa": "PYME",
    "comuna": "Viña Del Mar",
    "region": "Valparaíso",
    "rubro": "Aseo e Higiene",
    "email": "mfigueroa@hotelohiggins.cl",
    "telefono": "56-32-2682000",
    "representante": "Jose                                     Davalos",
    "web": "www.panamericanahoteles.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Valparaíso",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Valparaíso",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Valparaíso",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96914290-2",
    "razonSocial": "SOLUCIONES GLOBALES SPA",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "claudioortiz@solucionesglobales.cl",
    "telefono": "56-2-22014084",
    "representante": "CLAUDIO                                  ORTIZ",
    "web": "www.solucionesglobales.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96909050-3",
    "razonSocial": "LA PLAZA S A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "nhernandez@elmostrador.cl",
    "telefono": "56-2-25805406",
    "representante": "Federico José                            Joannon",
    "web": "www.elmostrador.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96905120-6",
    "razonSocial": "LS CONSULTORES S.A.",
    "tipoEmpresa": "PYME",
    "comuna": "Vitacura",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "meugenia.bonfanti@lsconsultores.cl",
    "telefono": "56-2-24783080",
    "representante": "Maria Eugenia                            Bonfanti",
    "web": "www.lsconsultores.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96903430-1",
    "razonSocial": "LITORALPRESS MEDIA DE INFORMACION S A",
    "tipoEmpresa": "PYME",
    "comuna": "Providencia",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "angela@litoralpress.cl",
    "telefono": "56-9-28737600",
    "representante": "Raul                                     Zagal",
    "web": "www.litoralpress.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96895570-5",
    "razonSocial": "E NABLE S A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "arebolledo@enable.cl",
    "telefono": "56-2-26512900",
    "representante": "Roberto                                  Riveros",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96889910-4",
    "razonSocial": "BAIT ARQUITECTURA Y CONSTRUCCION S A",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "nelsonhuserman@gmail.com",
    "telefono": "56-2-32211145",
    "representante": "Nelson                                   Huserman",
    "web": "No tenemos",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96889820-5",
    "razonSocial": "TELEMET SUDAMERICA Y COMPANIA LIMITADA",
    "tipoEmpresa": "PYME",
    "comuna": "LA REINA",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "lcrahausen@telemet.com",
    "telefono": "56-2-23562735",
    "representante": "CRISTIÁN                                 ELGUETA",
    "web": "www.telemet.com/topservice/",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96887830-1",
    "razonSocial": "T V CABLE LONCOMILLA S A",
    "tipoEmpresa": "PYME",
    "comuna": "San Javier",
    "region": "Maule",
    "rubro": "Aseo e Higiene",
    "email": "contabilidad2@loncomillatv.cl",
    "telefono": "56-73-561640",
    "representante": "Walter                                   Bisiach",
    "web": "www.loncomillatv.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Maule",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Maule",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Maule",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96886010-0",
    "razonSocial": "IMPRESIONES CREATIVAS S A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago Centro",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "ismirnow@alphaprint.cl",
    "telefono": "56-2-28304828",
    "representante": "JAIME                                    SMIRNOW",
    "web": "www.alphaprinvecinal.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96882850-9",
    "razonSocial": "GAMMA INGENIEROS SOCIEDAD ANONIMA",
    "tipoEmpresa": "PYME",
    "comuna": "Providencia",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "mlopez@gamma.cl",
    "telefono": "56-9-22232424",
    "representante": "Francisco                                Negroni",
    "web": "www.gamma.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96872550-5",
    "razonSocial": "INFOCORP CHILE SPA",
    "tipoEmpresa": "PYME",
    "comuna": "Providencia",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "natalia.clobares@infocorp.cl",
    "telefono": "56-2-24822200",
    "representante": "Mario                                    Benquis",
    "web": "www.infocorp.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96871720-0",
    "razonSocial": "FERRI S A I C",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "ferri@ferri.cl",
    "telefono": "56-2-25510380",
    "representante": "Julieta                                  Philipps",
    "web": "www.ferri.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96870130-4",
    "razonSocial": "COMERCIAL MILLAKAWELL S A",
    "tipoEmpresa": "PYME",
    "comuna": "Corral",
    "region": "Los Ríos",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "millakawell@gmail.com",
    "telefono": "56-63-2217008",
    "representante": "Hector Daniel                            Pinochet",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Los Ríos",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Los Ríos",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Los Ríos",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96861350-2",
    "razonSocial": "ALTO IMPACTO S A",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "mjgoycoolea@altoimpacto.com",
    "telefono": "56-2-24345369",
    "representante": "Rodrigo                                  Del Campo",
    "web": "www.altoimpacto.com",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96858890-7",
    "razonSocial": "GEOMET SPA",
    "tipoEmpresa": "PYME",
    "comuna": "La Reina",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "geomet@geomet.cl",
    "telefono": "56-2-22731541",
    "representante": "PATRICIO ANTONIO                         GONZALEZ",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96856000-K",
    "razonSocial": "HEMODIALISIS CURICO S A",
    "tipoEmpresa": "PYME",
    "comuna": "Curico",
    "region": "Maule",
    "rubro": "Aseo e Higiene",
    "email": "hemodialisis.curico@gmail.com",
    "telefono": "56-75-2225964",
    "representante": "Oscar                                    Alarcón",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Maule",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Maule",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Maule",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96852230-2",
    "razonSocial": "COMERCIAL MX S A",
    "tipoEmpresa": "PYME",
    "comuna": "Vitacura",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "mx@mx.cl",
    "telefono": "56-2-22010784",
    "representante": "EDUARDO JORGE                            HERRERA",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96852080-6",
    "razonSocial": "VARITEC S A",
    "tipoEmpresa": "PYME",
    "comuna": "Providencia",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "jose.haeger@varitec.cl",
    "telefono": "56-2-23669200",
    "representante": "JOSE                                     HAEGER",
    "web": "www.varitec.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96851720-1",
    "razonSocial": "MEDICATEC DE CHILE S A",
    "tipoEmpresa": "PYME",
    "comuna": "Ñuñoa",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "clinica@medica-tec.cl",
    "telefono": "56-2-24261830",
    "representante": "Mauricio                                 Rojas",
    "web": "www.medica-tec.com",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96850690-0",
    "razonSocial": "INGENEL S A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago Centro",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "ingenel@ingenel.cl",
    "telefono": "56-2-25554365",
    "representante": "Pedro                                    Quintanilla",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96849240-3",
    "razonSocial": "VIRTUAL S A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "joaquin@virtualimpresores.cl",
    "telefono": "56-2-25237334",
    "representante": "VIRTUAL S A",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96842950-7",
    "razonSocial": "GLOBAL SYSTEMS CHILE SPA",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "econstanzo@globalsystems.cl",
    "telefono": "56-2-24121503",
    "representante": "Avram                                    Fritch",
    "web": "www.globalsystems.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96842170-0",
    "razonSocial": "SOC DE HEMODIALISIS Y NEFROLOGIA PADRE HURTADO S A",
    "tipoEmpresa": "PYME",
    "comuna": "Cerrillos",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "gerenciadialphurtado@gmail.com",
    "telefono": "56-2-25573789",
    "representante": "patricia del transito                    castillo",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96841270-1",
    "razonSocial": "SISTEMA AUSTRAL DE SERVICIOS CVX R S A",
    "tipoEmpresa": "PYME",
    "comuna": "Valdivia",
    "region": "Los Ríos",
    "rubro": "Aseo e Higiene",
    "email": "pflores@cvx-r.cl",
    "telefono": "56-63-2212626",
    "representante": "LUIS DIEGO                               LOPEZ",
    "web": "http://www.cvx-r.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Los Ríos",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Los Ríos",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Los Ríos",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96841160-8",
    "razonSocial": "CORPORACIÓN EDUCACIONAL UDEC",
    "tipoEmpresa": "PYME",
    "comuna": "Lota",
    "region": "Biobío",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "rgatica@cftlotarauco.cl",
    "telefono": "56-41-2262500",
    "representante": "Luis                                     Quiñones",
    "web": "www.cftlotarauco.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Biobío",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Biobío",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Biobío",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96841110-1",
    "razonSocial": "FACHY COMERCIAL S A",
    "tipoEmpresa": "PYME",
    "comuna": "Linares",
    "region": "Maule",
    "rubro": "Aseo e Higiene",
    "email": "rer@fachy.cl",
    "telefono": "56-73-2211219",
    "representante": "Ricardo                                  Espinoza",
    "web": "www.fachy.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Maule",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Maule",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Maule",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96833320-8",
    "razonSocial": "CAPITEL S A",
    "tipoEmpresa": "PYME",
    "comuna": "Providencia",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "scarranza@abarchitec.com",
    "telefono": "56-2-28999100",
    "representante": "SERGIO                                   AMUNATEGUI",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96828640-4",
    "razonSocial": "OSAM INGENIERIA LIMITADA",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "jvalenzuela@osam.cl",
    "telefono": "56-22-7989800",
    "representante": "Maria Veronica                           Olivares",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96826830-9",
    "razonSocial": "INTERCITY S A",
    "tipoEmpresa": "PYME",
    "comuna": "Providencia",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "pneumann@intercity.cl",
    "telefono": "56-2-23365404",
    "representante": "Claudio                                  Stifel",
    "web": "www.intercity.net",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96823970-8",
    "razonSocial": "PUBLINET S A",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "agormaz@publinetchile.cl",
    "telefono": "56-2-29541994",
    "representante": "ALEJANDRO                                GORMAZ",
    "web": "www.publinetchile.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96818450-4",
    "razonSocial": "EMPRESA CONSTRUCTORA BAPER S A",
    "tipoEmpresa": "PYME",
    "comuna": "Puerto Montt",
    "region": "Los Lagos",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "constructorabaper@gmail.com",
    "telefono": "56-65-254468",
    "representante": "JUAN SAMUEL                              BARRIENTOS",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Los Lagos",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Los Lagos",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Los Lagos",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96809500-5",
    "razonSocial": "INGENIERIA Y CONSTRUCCION TIEMPO NUEVO LIMITADA",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "ciribarra@manquehue.net",
    "telefono": "56-9-22453118",
    "representante": "Claudio                                  Iribarra",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96803790-0",
    "razonSocial": "RED LAB SOCIEDAD ANONIMA",
    "tipoEmpresa": "PYME",
    "comuna": "Ñuñoa",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "apalma@redlab.cl",
    "telefono": "56-2-32730313",
    "representante": "ANDREA                                   PALMA",
    "web": "WWW.REDLAB.CL",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96798080-3",
    "razonSocial": "CENTRO DE GESTION AGRICOLA S A",
    "tipoEmpresa": "PYME",
    "comuna": "Rio Bueno",
    "region": "Los Ríos",
    "rubro": "Aseo e Higiene",
    "email": "cegeriobueno@gmail.com",
    "telefono": "56-64-2342808",
    "representante": "MARTIN BRUNO                             VARGAS",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Los Ríos",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Los Ríos",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Los Ríos",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96797700-4",
    "razonSocial": "SOC EDUCACIONAL SAN NICOLAS DE MYRA S A",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "jvega@sannicolasdemyra.cl",
    "telefono": "56-0-22352050",
    "representante": "Patricia                                 Merino",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96796200-7",
    "razonSocial": "CONSULTORIA EN SISTEMAS DE CLASE MUNDIAL SOCIEDAD ANONIMA",
    "tipoEmpresa": "PYME",
    "comuna": "Villa Alemana",
    "region": "Valparaíso",
    "rubro": "Aseo e Higiene",
    "email": "robalfaro@scmconsultores.net",
    "telefono": "56-32-8135640",
    "representante": "Roberto                                  Alfaro",
    "web": "www.scmconsultores.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Valparaíso",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Valparaíso",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Valparaíso",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96795000-9",
    "razonSocial": "ORGANISMO TECNICO DE CAPACITACION UNIVERSIDAD DE ANTOFAGASTA ASISTENCI",
    "tipoEmpresa": "PYME",
    "comuna": "Antofagasta",
    "region": "Antofagasta",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "cbarrera@uatsa.cl",
    "telefono": "56-55-2653501",
    "representante": "Elizabeth Virginia                       Barrios",
    "web": "www.uatsa.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Antofagasta",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Antofagasta",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Antofagasta",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96790910-6",
    "razonSocial": "AHK BUSINESS CENTER S A",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "lsteinle@camchal.cl",
    "telefono": "56-2-22035220",
    "representante": "Cornelia                                 Sonnenberg",
    "web": "www.camchal.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96787320-9",
    "razonSocial": "CARLOS MONTINO C Y COMPANIA LIMITADA",
    "tipoEmpresa": "PYME",
    "comuna": "Concepción",
    "region": "Biobío",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "finanzas@carlosmontino.cl",
    "telefono": "56-8-2230556",
    "representante": "Carlos                                   Montino",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Biobío",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Biobío",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Biobío",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96786540-0",
    "razonSocial": "BEUCHAT BARROS Y PFENNIGER ABOGADOS LIMITADA",
    "tipoEmpresa": "PYME",
    "comuna": "Providencia",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "barros@bbp.cl",
    "telefono": "56-2-25996500",
    "representante": "Santiago                                 Ortuzar",
    "web": "www.bbp.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96777320-4",
    "razonSocial": "INTRAT CONSULTORES S A",
    "tipoEmpresa": "PYME",
    "comuna": "Providencia",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "javier.guerrero@intrat.cl",
    "telefono": "56-2-26354060",
    "representante": "Javier                                   Guerrero",
    "web": "www.intrat.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96773290-7",
    "razonSocial": "AGUAS SANTIAGO PONIENTE SOCIEDAD ANONIMA",
    "tipoEmpresa": "PYME",
    "comuna": "326",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "ricardo.vasquez@aguasponiente.cl",
    "telefono": "56-2-26513566",
    "representante": "No especificado",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96763140-K",
    "razonSocial": "MICRODAT S A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "hfuentealba@microdat.cl",
    "telefono": "56-2-24621602",
    "representante": "Hernán                                   Fuentealba",
    "web": "www.microdat.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96759910-7",
    "razonSocial": "INSTITUTO OFTALMOLOGICO PUERTA DEL SOL S A",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "mmejias@puertadelsol.cl",
    "telefono": "56-2-24115780",
    "representante": "Beatriz                                  Mejía",
    "web": "www.puertadelsol.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96754710-7",
    "razonSocial": "INEXCA S A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "inexca2004@yahoo.com",
    "telefono": "56-2-26967278",
    "representante": "MARIA EUGENIA                            CONTRERAS",
    "web": "www.inexca.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96753360-2",
    "razonSocial": "WISEACCESS SISTEMAS DE INFORMACION M2M S.A.",
    "tipoEmpresa": "PYME",
    "comuna": "Ñuñoa",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "adenegri@wiseaccess.com",
    "telefono": "56-2-29824973",
    "representante": "JUAN CARLOS                              PLAZA",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96733970-9",
    "razonSocial": "ICM S A",
    "tipoEmpresa": "PYME",
    "comuna": "Quilpué",
    "region": "Valparaíso",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "proyectos@icm.cl",
    "telefono": "56-32-2920388",
    "representante": "Alejandro                                Nunez",
    "web": "www.icm.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Valparaíso",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Valparaíso",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Valparaíso",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96733150-3",
    "razonSocial": "OCTAVA COMUNICACIONES S.A.",
    "tipoEmpresa": "PYME",
    "comuna": "Concepcion",
    "region": "Biobío",
    "rubro": "Aseo e Higiene",
    "email": "patriciamunoz@tvu.cl",
    "telefono": "56-41-2207017",
    "representante": "MAURICIO ALEJANDRO                       JARA",
    "web": "www.tvu.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Biobío",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Biobío",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Biobío",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96732190-7",
    "razonSocial": "ALBA VALDES E HIJOS SPA.",
    "tipoEmpresa": "PYME",
    "comuna": "Antofagasta",
    "region": "Antofagasta",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "awachold@tatio.cl",
    "telefono": "56-55-2419111",
    "representante": "alba milena                              valdes",
    "web": "www.tatio.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Antofagasta",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Antofagasta",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Antofagasta",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96729970-7",
    "razonSocial": "GLOBAL SERVICES SPA.",
    "tipoEmpresa": "PYME",
    "comuna": "Providencia",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "rluttges@globalservices.cl",
    "telefono": "56-2-32207274",
    "representante": "Rodolfo                                  Lüttges",
    "web": "www.globalservices.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96729120-K",
    "razonSocial": "XINERGIA LABORAL S A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "preventa@linkhumano.cl",
    "telefono": "56-2-23282102",
    "representante": "Hector Alejandro                         Guerra",
    "web": "www.xinergia.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96728090-9",
    "razonSocial": "G A CONSULTORES S.A.",
    "tipoEmpresa": "PYME",
    "comuna": "Las Condes",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "landrade@gya.cl",
    "telefono": "56-2-23600856",
    "representante": "ROBERTO                                  GUROVICH",
    "web": "www.gya.cl",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96724350-7",
    "razonSocial": "MIGUEL CONCHA Y COMPANIA LIMITADA",
    "tipoEmpresa": "PYME",
    "comuna": "Providencia",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "miguelconcha_sa@internacional.cl",
    "telefono": "56-2-29231400",
    "representante": "CARMINA                                  CONCHA",
    "web": "www.internacional.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96723980-1",
    "razonSocial": "COMERCIAL E INDUSTRIAL SOUTH DAKOTA S A",
    "tipoEmpresa": "PYME",
    "comuna": "Santiago",
    "region": "Metropolitana",
    "rubro": "Aseo e Higiene",
    "email": "sdakota@entelchile.net",
    "telefono": "56-2-25549534",
    "representante": "Denis                                    Cohn",
    "web": "No disponible",
    "ventas": [
      {
        "articulo": "Detergente Líquido Bidón 5 Litros",
        "precio": 5200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Cloro Concentrado Envase 5 Litros",
        "precio": 3800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Jabón Líquido Con Glicerina Bidón 5 Litros",
        "precio": 7800,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  },
  {
    "rut": "96723130-4",
    "razonSocial": "SOLNET SPA",
    "tipoEmpresa": "PYME",
    "comuna": "Providencia",
    "region": "Metropolitana",
    "rubro": "Artículos de Escritorio y Oficina",
    "email": "felipe@solnet.cl",
    "telefono": "56-2-22360852",
    "representante": "Felipe                                   Bernstein",
    "web": "www.solnet.cl",
    "ventas": [
      {
        "articulo": "Resma de Papel Carta 75g Multi-propósito",
        "precio": 4300,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Caja de Lápiz Pasta Azul (50 unidades) Bic",
        "precio": 9500,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      },
      {
        "articulo": "Archivador Lomo Ancho Lacre Negro",
        "precio": 2200,
        "compradorRegion": "Metropolitana",
        "modalidad": "Compra Ágil"
      }
    ]
  }
];

export const articulosMasVendidos: ArticuloMasVendido[] = [
  {
    "convenio": "Aseo e Higiene",
    "nombre": "PAPEL HIGIÉNICO SH 500 X 4",
    "precio": 6000,
    "cantidadVendida": 8420,
    "unidadMedida": "Unidad"
  },
  {
    "convenio": "Aseo e Higiene",
    "nombre": "DETERGENTE LIQUIDO WINKLER 3 LITROS",
    "precio": 4420,
    "cantidadVendida": 6150,
    "unidadMedida": "Unidad"
  },
  {
    "convenio": "Aseo e Higiene",
    "nombre": "LIQUIDO LIMPIAVIDRIOS BIDON 5000 CC",
    "precio": 3894,
    "cantidadVendida": 5230,
    "unidadMedida": "Unidad"
  },
  {
    "convenio": "Aseo e Higiene",
    "nombre": "DESENGRASANTE COCINA C/PULVERIZADOR 500 ML",
    "precio": 1170,
    "cantidadVendida": 4890,
    "unidadMedida": "Unidad"
  },
  {
    "convenio": "Aseo e Higiene",
    "nombre": "SABANILLA MEDICA 48 x 2",
    "precio": 3800,
    "cantidadVendida": 3920,
    "unidadMedida": "Unidad"
  },
  {
    "convenio": "Aseo e Higiene",
    "nombre": "TOALLA JUMBO 250 X 2",
    "precio": 5000,
    "cantidadVendida": 3110,
    "unidadMedida": "Unidad"
  },
  {
    "convenio": "Aseo e Higiene",
    "nombre": "CLORO CONCENTRADO BIDON 5 LITROS",
    "precio": 2850,
    "cantidadVendida": 2740,
    "unidadMedida": "Unidad"
  },
  {
    "convenio": "Aseo e Higiene",
    "nombre": "JABON LIQUIDO NEUTRO WINKLER 5 LITROS",
    "precio": 4200,
    "cantidadVendida": 2150,
    "unidadMedida": "Unidad"
  },
  {
    "convenio": "Artículos de Escritorio y Oficina",
    "nombre": "ARCHIVADOR TRADICIONAL OFICIO ANCHO BURDEO",
    "precio": 1850,
    "cantidadVendida": 9033,
    "unidadMedida": "Unidad"
  },
  {
    "convenio": "Artículos de Escritorio y Oficina",
    "nombre": "ARCHIVADOR TRADICIONAL OFICIO ANGOSTO BURDEO",
    "precio": 1850,
    "cantidadVendida": 8150,
    "unidadMedida": "Unidad"
  },
  {
    "convenio": "Artículos de Escritorio y Oficina",
    "nombre": "ARCHIVADOR TRADICIONAL CARTA ANCHO BURDEO",
    "precio": 1850,
    "cantidadVendida": 7284,
    "unidadMedida": "Unidad"
  },
  {
    "convenio": "Artículos de Escritorio y Oficina",
    "nombre": "ARCHIVADOR TRADICIONAL CARTA ANGOSTO BURDEO",
    "precio": 1850,
    "cantidadVendida": 6307,
    "unidadMedida": "Unidad"
  },
  {
    "convenio": "Artículos de Escritorio y Oficina",
    "nombre": "ACCOCLIPS (FASTENERS) ACERO 50 UNIDADES DORADO",
    "precio": 1200,
    "cantidadVendida": 5357,
    "unidadMedida": "Caja"
  },
  {
    "convenio": "Artículos de Escritorio y Oficina",
    "nombre": "ADHESIVO EN BARRA 20 GRS, SIMILAR STIC-FIX",
    "precio": 650,
    "cantidadVendida": 4315,
    "unidadMedida": "Unidad"
  },
  {
    "convenio": "Artículos de Escritorio y Oficina",
    "nombre": "BANDERITA ADHESIVA 3M Post It 683-4 4, de 35 Hojas.",
    "precio": 1450,
    "cantidadVendida": 3312,
    "unidadMedida": "Set"
  },
  {
    "convenio": "Artículos de Escritorio y Oficina",
    "nombre": "BANDERITA ADHESIVA 3M Post-It Standard diferentes colores, de 100 Hojas",
    "precio": 1450,
    "cantidadVendida": 2508,
    "unidadMedida": "Set"
  }
];
