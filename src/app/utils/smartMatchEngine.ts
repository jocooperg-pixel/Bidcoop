import { EmpresaMatch, Oportunidad } from '../types';

export interface SmartMatchResult {
  companyMatch: EmpresaMatch;
  matchScore: number;
  matchedProducts: string[];
  explanation: string;
  rubroRecomendado: string;
}

// 1. INDER-ROLL CATALOG (Inderquim) - Convenio Marco Aseo & Higiene
const CATALOG_INDER_ROLL = [
  { keyword: 'papel higienico', name: 'Papel Higiénico Inder-Roll (Jumbo 300m / Hoja Simple / Hoja Doble)' },
  { keyword: 'papel higiénico', name: 'Papel Higiénico Inder-Roll (Jumbo 300m / Hoja Simple / Hoja Doble)' },
  { keyword: 'toalla de papel', name: 'Toalla de Papel Inder-Roll (200m / 150m / Interfoliada 250h)' },
  { keyword: 'toalla papel', name: 'Toalla de Papel Inder-Roll (200m / 150m / Interfoliada 250h)' },
  { keyword: 'interfoliada', name: 'Toalla Interfoliada Inder-Roll 250 hojas' },
  { keyword: 'jumbo', name: 'Papel Higiénico Jumbo Inder-Roll 300m' },
  { keyword: 'cloro', name: 'Cloro Concentrado 10% / 5% Inderquim' },
  { keyword: 'cloro gel', name: 'Cloro Gel Multiuso Inderquim' },
  { keyword: 'desinfectante', name: 'Desinfectante Multiuso Lavanda / Cítrico Inderquim' },
  { keyword: 'amonio cuaternario', name: 'Amonio Cuaternario 5ta Generación 0.5% Inderquim' },
  { keyword: 'alcohol gel', name: 'Alcohol Gel 70% con dosificador Inderquim' },
  { keyword: 'detergente', name: 'Detergente Líquido Concentrado Ropa/Pisos Inderquim' },
  { keyword: 'desengrasante', name: 'Desengrasante Industrial / Cocina Inderquim' },
  { keyword: 'lavaloza', name: 'Lavaloza Concentrado Inderquim' },
  { keyword: 'limpiador de pisos', name: 'Limpiador de Pisos y Superficies Inderquim' },
  { keyword: 'limpiador superficies', name: 'Limpiador de Pisos y Superficies Inderquim' },
  { keyword: 'lustramuebles', name: 'Lustramuebles Aerosol 400ml Inderquim' },
  { keyword: 'cera', name: 'Cera Autobrillo Incolora Inderquim' },
  { keyword: 'suavizante', name: 'Suavizante Textil Concentrado Inderquim' },
  { keyword: 'quitamanchas', name: 'Quitamanchas Industrial Inderquim' },
  { keyword: 'jabón', name: 'Jabón Gel Lavamanos con Glicerina Inderquim' },
  { keyword: 'jabon', name: 'Jabón Gel Lavamanos con Glicerina Inderquim' },
  { keyword: 'dispensador', name: 'Dispensador Rellenable 1000ml Jabón / Alcohol Gel' },
  { keyword: 'bolsa basura', name: 'Bolsas de Basura Pesadas 80x100cm' },
  { keyword: 'escoba', name: 'Escobillón Plástico Industrial 40cm' },
  { keyword: 'escobillón', name: 'Escobillón Plástico Industrial 40cm' },
  { keyword: 'mopa', name: 'Mopa Completa Algodón 400g' },
  { keyword: 'paño microfibra', name: 'Paño Microfibra Multiuso 40x40cm' },
  { keyword: 'guante nitrilo', name: 'Guantes Nitrilo Azul Sin Polvo (Certificado ISP)' },
  { keyword: 'mascarilla', name: 'Mascarillas Quirúrgicas 3 Pliegues BFE >98%' }
];

// 2. AMINORTE CATALOG - Convenio Marco Escritorio, Oficina & Computación
const CATALOG_AMINORTE = [
  { keyword: 'resma', name: 'Resma Papel Fotocopia Carta / Oficio 75g' },
  { keyword: 'papel carta', name: 'Resma Papel Carta 75g (Caja 5 resmas)' },
  { keyword: 'papel oficio', name: 'Resma Papel Oficio 75g (Caja 5 resmas)' },
  { keyword: 'archivador', name: 'Archivador Lomo Ancho Plastificado Carta' },
  { keyword: 'lomo ancho', name: 'Archivador Lomo Ancho Plastificado Carta' },
  { keyword: 'carpeta', name: 'Carpeta Plastificada con Nepaco / Fastener Carta' },
  { keyword: 'nepaco', name: 'Carpeta Plastificada con Nepaco Carta' },
  { keyword: 'separador', name: 'Separadores Numéricos 1-12 Carta' },
  { keyword: 'bolígrafo', name: 'Bolígrafo Pasta Azul / Negro 0.7mm' },
  { keyword: 'boligrafo', name: 'Bolígrafo Pasta Azul / Negro 0.7mm' },
  { keyword: 'lápiz', name: 'Lápiz Grafito 2B con Goma' },
  { keyword: 'lapiz', name: 'Lápiz Grafito 2B con Goma' },
  { keyword: 'destacador', name: 'Destacador Fluorescente Surtido (Set 4u)' },
  { keyword: 'corchetera', name: 'Corchetera Escritorio 20-25 Hojas Metálica' },
  { keyword: 'corchete', name: 'Caja Corchetes 26/6 (5.000u)' },
  { keyword: 'saca corchete', name: 'Saca Corchete Tipo Tenaza Metálico' },
  { keyword: 'clip', name: 'Caja Clips Mariposa N°2 (100u)' },
  { keyword: 'post-it', name: 'Block Notas Adhesivas 76x76mm (Pack 12u)' },
  { keyword: 'nota adhesiva', name: 'Block Notas Adhesivas 76x76mm (Pack 12u)' },
  { keyword: 'cinta adhesiva', name: 'Cinta Adhesiva Transparente 18mm x 40m' },
  { keyword: 'tijera', name: 'Tijera Oficina 8" Acero Inoxidable' },
  { keyword: 'regla', name: 'Regla Plástica Transparente 30cm' },
  { keyword: 'guillotina', name: 'Guillotina de Palanca para Papel' },
  { keyword: 'tóner', name: 'Tóner Compatible HP LaserJet (85A / 26A / 05A)' },
  { keyword: 'toner', name: 'Tóner Compatible HP LaserJet (85A / 26A / 05A)' },
  { keyword: 'tinta', name: 'Cartuchos de Tinta Impresora HP / Epson' },
  { keyword: 'mouse', name: 'Mouse Óptico USB 1000 DPI Ambidiestro' },
  { keyword: 'teclado', name: 'Teclado USB Español Latino con Teclado Numérico' },
  { keyword: 'mouse pad', name: 'Mouse Pad Ergonómico con Apoyo Gel' },
  { keyword: 'cable hdmi', name: 'Cable HDMI 2.0 3m Malla' },
  { keyword: 'pendrive', name: 'Pendrive USB 3.0 64GB Kingston / SanDisk' },
  { keyword: 'ampolleta', name: 'Ampolleta LED 12W E27 Luz Fría' },
  { keyword: 'huincha aisladora', name: 'Huincha Aisladora 18mm x 20m 3M' },
  { keyword: 'pintura', name: 'Pintura Esmalte al Agua Blanco Galón' }
];

// 3. V-MOCCS CATALOG - Convenio Marco Muebles Institucionales
const CATALOG_VMOCCS = [
  { keyword: 'silla', name: 'Silla Ergonómica Operativa / Ejecutiva con Apoyo Lumbar' },
  { keyword: 'silla ergonómica', name: 'Silla Ergonómica Ejecutiva con Apoyo Lumbar y Malla' },
  { keyword: 'silla ejecutiva', name: 'Silla Ejecutiva Cuero Sintético / Malla Ergonométrica' },
  { keyword: 'escritorio', name: 'Escritorio Modular Melamina 18mm con Cajonera' },
  { keyword: 'escritorio modular', name: 'Escritorio Modular Melamina 18mm con Cajonera' },
  { keyword: 'mesa de reunión', name: 'Mesa de Reunión Modular Melamina 240x120cm' },
  { keyword: 'estante', name: 'Estante Librero Melamina / Metálico 5 Repisas' },
  { keyword: 'librero', name: 'Estante Librero Melamina 5 Repisas' },
  { keyword: 'cajonera', name: 'Cajonera Rodante 3 Cajones con Cerradura' },
  { keyword: 'kardex', name: 'Archivo Metálico Kardex 4 Cajones para Carpetas Colgantes' },
  { keyword: 'archivo metálico', name: 'Archivo Metálico Kardex 4 Cajones' },
  { keyword: 'locker', name: 'Locker Metálico 3 Puertas con Portacandado' },
  { keyword: 'panel', name: 'Panel Divisorio Acústico para Oficina' }
];

export function calculateSmartCatalogMatch(op: {
  titulo: string;
  descripcion?: string;
  rubro?: string;
  items?: Array<{ producto: string; especificacionTecnica?: string }>;
}): SmartMatchResult {
  const fullText = (
    `${op.titulo || ''} ${op.descripcion || ''} ${op.rubro || ''} ` +
    (op.items || []).map(it => `${it.producto} ${it.especificacionTecnica || ''}`).join(' ')
  ).toLowerCase();

  const matchedInder: string[] = [];
  const matchedAminorte: string[] = [];
  const matchedVmoccs: string[] = [];

  // Match Inder-Roll
  for (const item of CATALOG_INDER_ROLL) {
    if (fullText.includes(item.keyword) && !matchedInder.includes(item.name)) {
      matchedInder.push(item.name);
    }
  }

  // Match Aminorte
  for (const item of CATALOG_AMINORTE) {
    if (fullText.includes(item.keyword) && !matchedAminorte.includes(item.name)) {
      matchedAminorte.push(item.name);
    }
  }

  // Match V-MOCCS
  for (const item of CATALOG_VMOCCS) {
    if (fullText.includes(item.keyword) && !matchedVmoccs.includes(item.name)) {
      matchedVmoccs.push(item.name);
    }
  }

  const countInder = matchedInder.length;
  const countAminorte = matchedAminorte.length;
  const countVmoccs = matchedVmoccs.length;

  let bestCompany: EmpresaMatch = 'Aminorte';
  let bestScore = 0;
  let bestMatchedProducts: string[] = [];
  let rubroRecomendado = 'Artículos de Escritorio y Oficina';

  if (countInder > 0 && countInder >= countAminorte && countInder >= countVmoccs) {
    bestCompany = 'Inder-Roll';
    bestMatchedProducts = matchedInder;
    rubroRecomendado = 'Aseo e Higiene';
    bestScore = Math.min(99, 82 + countInder * 5);
  } else if (countVmoccs > 0 && countVmoccs >= countAminorte) {
    bestCompany = 'V-MOCCS';
    bestMatchedProducts = matchedVmoccs;
    rubroRecomendado = 'Artículos de Escritorio y Oficina';
    bestScore = Math.min(99, 85 + countVmoccs * 6);
  } else if (countAminorte > 0) {
    bestCompany = 'Aminorte';
    bestMatchedProducts = matchedAminorte;
    const isTech = fullText.includes('tóner') || fullText.includes('toner') || fullText.includes('impresora') || fullText.includes('mouse') || fullText.includes('teclado') || fullText.includes('usb');
    rubroRecomendado = isTech ? 'Tecnología y Hardware' : 'Artículos de Escritorio y Oficina';
    bestScore = Math.min(99, 82 + countAminorte * 5);
  } else {
    // Fallback classification if no explicit product match
    if (fullText.includes('aseo') || fullText.includes('higiene') || fullText.includes('limpieza') || fullText.includes('cloro')) {
      bestCompany = 'Inder-Roll';
      rubroRecomendado = 'Aseo e Higiene';
      bestScore = 80;
    } else if (fullText.includes('mueble') || fullText.includes('silla')) {
      bestCompany = 'V-MOCCS';
      rubroRecomendado = 'Artículos de Escritorio y Oficina';
      bestScore = 82;
    } else {
      bestCompany = 'Aminorte';
      rubroRecomendado = op.rubro || 'Artículos de Escritorio y Oficina';
      bestScore = 78;
    }
  }

  let explanation = '';
  if (bestMatchedProducts.length > 0) {
    explanation = `Match del ${bestScore}% por catálogo: ${bestMatchedProducts.length} producto(s) coinciden exactamente con el Convenio Marco cargado de ${bestCompany} (${bestMatchedProducts.slice(0, 3).join(', ')}).`;
  } else {
    explanation = `Match estimado del ${bestScore}% para la empresa ${bestCompany} según rubro y capacidad de abastecimiento en ${rubroRecomendado}.`;
  }

  return {
    companyMatch: bestCompany,
    matchScore: bestScore,
    matchedProducts: bestMatchedProducts,
    explanation,
    rubroRecomendado
  };
}

/**
 * Helper function for match score badge styling based on corporate rules:
 * - >= 90%: Vivid Green (Excelente Match)
 * - 80% - 89%: Corporate Blue (Buen Match)
 * - 70% - 79%: Warm Amber (Match Moderado)
 * - < 70%: Muted Red / Slate (Bajo Match)
 */
export function getMatchScoreBadgeStyle(score: number): {
  badgeBg: string;
  badgeText: string;
  borderClass: string;
  progressColor: string;
  label: string;
} {
  if (score >= 90) {
    return {
      badgeBg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60',
      badgeText: 'text-emerald-600 dark:text-emerald-400',
      borderClass: 'border-emerald-500',
      progressColor: '#10B981',
      label: 'Excelente Match'
    };
  } else if (score >= 80) {
    return {
      badgeBg: 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/60',
      badgeText: 'text-blue-600 dark:text-blue-400',
      borderClass: 'border-blue-500',
      progressColor: '#2563EB',
      label: 'Buen Match'
    };
  } else if (score >= 70) {
    return {
      badgeBg: 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/60',
      badgeText: 'text-amber-600 dark:text-amber-400',
      borderClass: 'border-amber-500',
      progressColor: '#F59E0B',
      label: 'Match Moderado'
    };
  } else {
    return {
      badgeBg: 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/60',
      badgeText: 'text-rose-600 dark:text-rose-400',
      borderClass: 'border-rose-500',
      progressColor: '#EF4444',
      label: 'Bajo Match'
    };
  }
}

