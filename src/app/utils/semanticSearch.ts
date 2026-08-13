/**
 * Motor de Búsqueda Semántica e Inteligente para Mercado Público y ChileCompra.
 * Permite expandir consultas como "artículos de oficina" a términos afines como
 * papelería, resmas, lápices, archivadores, sobres, corchetes, etc.
 */

export const SEMANTIC_DICTIONARY: Record<string, string[]> = {
  // Categoría Escritorio / Oficina / Librería
  'articulos de escritorio': ['escritorio', 'papeleria', 'papel', 'resma', 'resmas', 'lapiz', 'lapices', 'boligrafo', 'plumon', 'marcador', 'archivador', 'archivadores', 'sobre', 'sobres', 'corchete', 'corchetes', 'corchetera', 'carpeta', 'carpetas', 'insumos de escritorio', 'utiles de oficina', 'utiles de escritorio', 'destacador', 'fastener', 'clip', 'post-it', 'cinta adhesiva', 'tijera', 'regla', 'guillotina', 'perforadora', 'chinche', 'libreria'],
  'articulos de libreria': ['libreria', 'papeleria', 'cuaderno', 'cuadernos', 'libreta', 'libretas', 'bloc', 'talonario', 'libro', 'libros', 'resma', 'papel carta', 'papel oficio', 'cartulina', 'sobre', 'sobres', 'encuadernacion', 'anillado', 'espiral', 'funda plastificada', 'archivador', 'carpeta'],
  'libreria': ['articulos de libreria', 'cuaderno', 'libreta', 'papel', 'resma', 'sobres', 'talonario', 'encuadernacion', 'lapices', 'cartulina'],
  'articulos de oficina': ['papeleria', 'papel', 'resma', 'lapiz', 'lapices', 'archivador', 'archivadores', 'sobre', 'sobres', 'corchete', 'corchetes', 'carpeta', 'carpetas', 'insumos de escritorio', 'utiles de oficina', 'utiles de escritorio', 'destacador', 'fastener', 'clip', 'post-it', 'toner', 'tinta', 'impresora', 'muebles'],
  'papeleria': ['resma', 'papel carta', 'papel oficio', 'archivador', 'carpeta', 'sobre', 'cartulina', 'cuaderno', 'libreta', 'articulos de libreria'],
  'utiles de escritorio': ['lapiz', 'boligrafo', 'destacador', 'tijera', 'regla', 'corchetera', 'saca corchete', 'clip', 'chinche', 'cinta adhesiva', 'plumon', 'marcador'],
  'escritorio': ['papeleria', 'resma', 'archivador', 'utiles de oficina', 'lapiz', 'mueble escritorio', 'articulos de escritorio'],

  // Categoría Impresoras / Tóner / Tintas
  'impresoras': ['impresora', 'fotocopiadora', 'fotocopiadoras', 'multifuncional', 'multifuncionales', 'plotter', 'plotters', 'escaner', 'escaneres', 'toner', 'tinta', 'cartucho', 'arriendo impresora', 'arriendo fotocopiadora', 'suministro impresion', 'mantenimiento impresora'],
  'impresora': ['impresoras', 'fotocopiadora', 'multifuncional', 'plotter', 'escaner', 'toner', 'tinta', 'cartucho', 'arriendo impresora'],
  'toner': ['toners', 'tinta', 'tintas', 'cartucho', 'cartuchos', 'impresora', 'fotocopia', 'suministro impresion', 'toner laser', 'drum', 'tambor', 'kit mantenimiento'],
  'tinta': ['tintas', 'toner', 'cartucho', 'cartuchos', 'impresora', 'suministro impresion', 'cabezal'],

  // Categoría Computadores / Computación / Tecnología
  'computadores': ['computador', 'computadora', 'computadoras', 'pc', 'pc de escritorio', 'all in one', 'notebook', 'notebooks', 'laptop', 'laptops', 'tablet', 'tablets', 'servidor', 'servidores', 'monitor', 'monitores', 'pantalla', 'teclado', 'mouse', 'pendrive', 'disco duro', 'ssd', 'hdmi', 'impresora', 'ups', 'webcam', 'headset', 'audifono'],
  'computador': ['computadores', 'computadora', 'pc', 'notebook', 'laptop', 'monitor', 'teclado', 'mouse', 'disco duro', 'ssd', 'all in one', 'servidor'],
  'computacion': ['notebook', 'computador', 'computadores', 'pc', 'monitor', 'teclado', 'mouse', 'pendrive', 'disco duro', 'ssd', 'hdmi', 'impresora', 'ups', 'servidor', 'redes'],
  'tecnologia': ['hardware', 'pantalla', 'cables', 'ups', 'router', 'switch', 'servidor', 'computador', 'computadores', 'notebook', 'teclado', 'mouse'],

  // Categoría Mobiliario
  'mobiliario': ['silla', 'sillas', 'escritorio', 'escritorios', 'mesa', 'mesas', 'estante', 'estantes', 'kardex', 'cajonera', 'librero', 'locker', 'biombo', 'tabique', 'mueble'],
  'sillas': ['silla ejecutiva', 'silla operativa', 'silla ergonomica', 'silla visita', 'silla de escritorio', 'taburete'],
  'silla': ['silla ejecutiva', 'silla operativa', 'silla ergonomica', 'silla visita', 'silla de escritorio', 'taburete'],
  'muebles': ['silla', 'escritorio', 'estante', 'librero', 'cajonera', 'locker', 'kardex', 'mesa de reunion'],

  // Categoría Climatización / Equipamiento / Aseo
  'climatizacion': ['aire acondicionado', 'ventilador', 'calefactor', 'extractor', 'termo', 'purificador aire'],
  'aseo': ['limpieza', 'desinfectante', 'detergente', 'jabon', 'cloro', 'papel higienico', 'toalla papel', 'bolsa basura', 'mopa', 'escoba']
};

/**
 * Normaliza un texto removiendo acentos, caracteres especiales y convirtiendo a minúsculas.
 */
export function normalizeText(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

/**
 * Expande una consulta de búsqueda obteniendo términos sinonímicos o relacionados.
 */
export function getExpandedSearchTerms(query: string): string[] {
  const normalized = normalizeText(query);
  if (!normalized) return [];

  const terms = new Set<string>([normalized]);

  // Si la consulta exacta coincide con alguna clave del diccionario
  for (const [key, synonyms] of Object.entries(SEMANTIC_DICTIONARY)) {
    const keyNorm = normalizeText(key);
    if (normalized.includes(keyNorm) || keyNorm.includes(normalized)) {
      synonyms.forEach(syn => terms.add(normalizeText(syn)));
    }
  }

  // Palabras sueltas
  const words = normalized.split(/\s+/).filter(w => w.length > 2);
  words.forEach(word => {
    terms.add(word);
    for (const [key, synonyms] of Object.entries(SEMANTIC_DICTIONARY)) {
      if (normalizeText(key).includes(word)) {
        synonyms.forEach(syn => terms.add(normalizeText(syn)));
      }
    }
  });

  return Array.from(terms);
}

/**
 * Evalúa si una oportunidad coincide con la consulta mediante búsqueda semántica multi-campo.
 */
export function matchesSemanticSearch(target: Record<string, any>, query: string): boolean {
  if (!query || !query.trim()) return true;

  const searchTerms = getExpandedSearchTerms(query);
  const targetTextParts: string[] = [
    target.titulo || '',
    target.codigo || '',
    target.organismo || '',
    target.descripcion || '',
    target.rubro || '',
    target.region || '',
    target.ciudad || '',
    target.estado || '',
    target.modalidad || '',
    target.empresaMatch || '',
    ...(target.items ? target.items.map((i: any) => `${i.producto} ${i.sku} ${i.especificacionTecnica || ''}`) : [])
  ];

  const fullTargetText = normalizeText(targetTextParts.join(' '));

  // Retorna true si al menos uno de los términos expandidos existe en los campos del target
  return searchTerms.some(term => fullTargetText.includes(term));
}
