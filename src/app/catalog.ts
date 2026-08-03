export const productCatalogRaw = `
ESC-001|CUADERNO UNIVERSITARIO 100 HOJAS MATEMÁTICA|Aminorte|ESCRITORIO|Unidad|1500|Activo
ESC-002|LÁPIZ PASTA AZUL STAEDTLER C/50|Aminorte|ESCRITORIO|Caja|9800|Activo
ESC-003|RESMA DE PAPEL CARTA CHAMECO 75G|Aminorte|PAPELERÍA|Caja c/5 resmas|24500|Activo
ESC-004|CORRECTOR EN CINTA TIPP-EX 8M|Aminorte|ESCRITORIO|Unidad|1200|Activo
ESC-005|CARPETA CORPORATIVA CON ARCHIVADOR LOMO ANCHO|Aminorte|ESCRITORIO|Docena|18000|Activo
ESC-006|TIZAS DE COLORES ANTIALÉRGICAS C/12|Aminorte|ESCRITORIO|Caja|850|Activo
ESC-007|TIJERAS ESCOLARES ERGONÓMICAS 13CM|Aminorte|ESCRITORIO|Unidad|950|Activo
ESC-008|MÁQUINA CORCHETERA ROBUSTA DE MESA|Aminorte|ESCRITORIO|Unidad|4500|Activo
ESC-009|REGLA DE ALUMINIO PROFESIONAL 30CM|Aminorte|ESCRITORIO|Unidad|1600|Activo
ESC-010|SACAPUNTAS ELÉCTRICO DE OFICINA|Aminorte|ESCRITORIO|Unidad|15000|Activo
ESC-011|TÓNER HP HP-205A NEGRO ORIGINAL|Aminorte|TECNOLOGÍA|Unidad|65000|Activo
ESC-012|TÓNER CANON CRG-054 MAGENTA|Aminorte|TECNOLOGÍA|Unidad|58000|Activo
ESC-013|SET DESTACADORES TRAPAZOIDALES 6 COLORES|Aminorte|ESCRITORIO|Caja|4200|Activo
ESC-014|CLIP MARIPOSA N°2 CAJA 100 UNIDADES|Aminorte|ESCRITORIO|Caja|1800|Activo
ESC-015|NOTAS ADHESIVAS POST-IT 76X76MM AMARILLO|Aminorte|ESCRITORIO|Pack 12|8900|Activo
MOB-001|SILLA EJECUTIVA ERGONÓMICA CON CABECERO Y REPOSABRAZOS AJUSTABLES|V-MOCCS|MOBILIARIO|Unidad|145000|Activo
MOB-002|ESCRITORIO GERENCIAL EN L CON CAJONERA Y PASACABLES|V-MOCCS|MOBILIARIO|Unidad|285000|Activo
MOB-003|ESTANTE METÁLICO KARDEX 4 CAJONES CON LLAVE|V-MOCCS|MOBILIARIO|Unidad|195000|Activo
MOB-004|MESA DE REUNIONES RECTANGULAR 8 PERSONAS 240X120CM|V-MOCCS|MOBILIARIO|Unidad|340000|Activo
MOB-005|SILLA OPERATIVA CAJERA CON ARO REPOSAPIÉS|V-MOCCS|MOBILIARIO|Unidad|98000|Activo
MOB-006|LOCKER METÁLICO 3 CUERPOS 6 PUERTAS CON PORTACANDADO|V-MOCCS|MOBILIARIO|Unidad|210000|Activo
MOB-007|PANEL DIVISORIO ACÚSTICO DE OFICINA 140X120CM|V-MOCCS|MOBILIARIO|Unidad|85000|Activo
`;

export interface CatalogProduct {
  sku: string;
  producto: string;
  empresa: 'Aminorte' | 'V-MOCCS';
  categoria: string;
  unidad: string;
  precioReferencial: number;
  estado: string;
}

export const parsedProductCatalog: CatalogProduct[] = productCatalogRaw
  .trim()
  .split('\n')
  .map(line => {
    const parts = line.split('|');
    return {
      sku: parts[0]?.trim() || '',
      producto: parts[1]?.trim() || '',
      empresa: (parts[2]?.trim() === 'V-MOCCS' ? 'V-MOCCS' : 'Aminorte') as 'Aminorte' | 'V-MOCCS',
      categoria: parts[3]?.trim() || 'General',
      unidad: parts[4]?.trim() || 'Unidad',
      precioReferencial: parseFloat(parts[5] || '0'),
      estado: parts[6]?.trim() || 'Activo'
    };
  });
