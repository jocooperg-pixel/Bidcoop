/**
 * Motor de Búsqueda Semántica e Inteligente para Mercado Público y ChileCompra.
 * Permite expandir consultas como "artículos de oficina" a términos afines como
 * papelería, resmas, lápices, archivadores, sobres, corchetes, etc.
 */

export const SEMANTIC_DICTIONARY: Record<string, string[]> = {
  // Categoría Oficina / Papelería
  'articulos de oficina': ['papeleria', 'papel', 'resma', 'lapiz', 'lapices', 'archivador', 'archivadores', 'sobre', 'sobres', 'corchete', 'corchetes', 'carpeta', 'carpetas', 'insumos de escritorio', 'utiles de oficina', 'utiles de escritorio', 'destacador', 'toner', 'fastener', 'clip', 'post-it'],
  'papeleria': ['resma', 'papel carta', 'papel oficio', 'archivador', 'carpeta', 'sobre', 'cartulina', 'cuaderno'],
  'utiles de escritorio': ['lapiz', 'boligrafo', 'destacador', 'tijera', 'regla', 'corchetera', 'saca corchete', 'clip', 'chinche', 'cinta adhesiva'],
  'escritorio': ['papeleria', 'resma', 'archivador', 'utiles de oficina', 'lapiz', 'mueble escritorio'],
  'toner': ['tinta', 'cartucho', 'impresora', 'fotocopia', 'suministro impresion', 'toner laser'],
  
  // Categoría Mobiliario
  'mobiliario': ['silla', 'sillas', 'escritorio', 'escritorios', 'mesa', 'mesas', 'estante', 'estantes', 'kardex', 'cajonera', 'librero', 'locker', 'biombo', 'tabique', 'mueble'],
  'sillas': ['silla ejecutiva', 'silla operativa', 'silla ergonomica', 'silla visita', 'silla de escritorio', 'taburete'],
  'silla': ['silla ejecutiva', 'silla operativa', 'silla ergonomica', 'silla visita', 'silla de escritorio', 'taburete'],
  'muebles': ['silla', 'escritorio', 'estante', 'librero', 'cajonera', 'locker', 'kardex', 'mesa de reunion'],
  
  // Categoría Tecnología
  'computacion': ['notebook', 'computador', 'pc', 'monitor', 'teclado', 'mouse', 'pendrive', 'disco duro', 'hdmi', 'impresora'],
  'tecnologia': ['hardware', 'pantalla', 'cables', 'ups', 'router', 'switch', 'servidor', 'computador'],
  
  // Categoría Climatización / Equipamiento
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
