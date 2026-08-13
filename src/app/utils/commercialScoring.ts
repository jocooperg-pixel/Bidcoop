import { Oportunidad } from '../types';

export interface CommercialAnalysis {
  score: number; // 0-100
  nivel: 'Alta' | 'Media' | 'Baja';
  razones: string[];
  etiquetaPrioridad: string;
}

/**
 * Calcula el puntaje comercial (0-100) y la clasificación de una oportunidad en Mercado Público.
 * Evalúa:
 *  - Monto estimado / valor económico (0-25 pts)
 *  - Urgencia / Tiempo restante de cierre (0-20 pts)
 *  - Historial y riesgo del Organismo Comprador (0-20 pts)
 *  - Coincidencia con catálogo y empresa match (0-20 pts)
 *  - Modalidad y volumen de competencia estimado (0-15 pts)
 */
export function calculateCommercialScore(op: Partial<Oportunidad>): CommercialAnalysis {
  let score = 50; // Base neutra
  const razones: string[] = [];

  // 1. Monto (0-25 pts)
  const monto = op.monto || op.amount || op.monto_final || 0;
  if (monto >= 10000000) {
    score += 25;
    razones.push(`Monto atractivo: $${monto.toLocaleString('es-CL')} CLP`);
  } else if (monto >= 2500000) {
    score += 18;
    razones.push(`Monto significativo para Compra Ágil: $${monto.toLocaleString('es-CL')} CLP`);
  } else if (monto >= 500000) {
    score += 10;
    razones.push(`Monto moderado: $${monto.toLocaleString('es-CL')} CLP`);
  } else if (monto > 0) {
    score += 5;
    razones.push(`Monto menor: $${monto.toLocaleString('es-CL')} CLP`);
  } else {
    razones.push('Monto no especificado o por cotizar');
  }

  // 2. Tiempo Restante / Cierre (0-20 pts)
  if (op.fechaCierre) {
    const ahora = new Date();
    const cierre = new Date(op.fechaCierre);
    const diffHours = (cierre.getTime() - ahora.getTime()) / (1000 * 3600);

    if (diffHours > 0 && diffHours <= 24) {
      score += 20;
      razones.push('Cierre inminente (menos de 24 hrs): Acción inmediata requerida');
    } else if (diffHours > 24 && diffHours <= 72) {
      score += 15;
      razones.push(`Cierre oportuno en ${Math.round(diffHours / 24)} días`);
    } else if (diffHours > 72) {
      score += 10;
      razones.push(`Plazo amplio de postulación (${Math.round(diffHours / 24)} días)`);
    } else {
      score -= 30;
      razones.push('Proceso vencido o fecha de cierre superada');
    }
  }

  // 3. Organismo Comprador & Historial (0-20 pts)
  // Mercado Público no expone riesgo del organismo ni días de pago vía API
  // pública — 'Sin evaluar' es el estado real de casi todos los registros
  // hoy. No sumar puntos por eso: sumar por defecto aquí equivaldría a
  // fabricar una señal de confianza que no existe (ver feedback_no_fabrication).
  const riesgo = op.organismoRiesgo || op.riesgo;
  if (riesgo === 'Bajo') {
    score += 20;
    razones.push('Organismo con excelente historial de pago y bajo riesgo crediticio');
  } else if (riesgo === 'Medio') {
    score += 10;
    razones.push('Organismo comprador habitual (Riesgo medio)');
  } else if (riesgo === 'Alto') {
    score -= 10;
    razones.push('Atención: Organismo con historial de demoras en pago');
  } else {
    razones.push('Riesgo del organismo: sin evaluar (Mercado Público no publica este dato)');
  }

  const pagoDias = op.organismoPagoDias;
  if (pagoDias && pagoDias <= 30) {
    score += 5;
    razones.push(`Condiciones de pago expeditas: ~${pagoDias} días`);
  }

  // 4. Coincidencia de Catálogo / Match (0-20 pts)
  if (op.empresaMatch === 'Aminorte') {
    score += 20;
    razones.push('Alta coincidencia con catálogo Aminorte (Artículos de Escritorio / Tecnología)');
  } else if (op.empresaMatch === 'V-MOCCS') {
    score += 20;
    razones.push('Alta coincidencia con catálogo V-MOCCS (Mobiliario y Equipamiento)');
  } else if (op.matchScore && op.matchScore > 75) {
    score += 15;
    razones.push(`Score de coincidencia de catálogo elevado (${op.matchScore}%)`);
  }

  // 5. Competencia y Modalidad (0-15 pts)
  if (op.modalidad === 'Compra Ágil') {
    score += 10;
    razones.push('Modalidad Compra Ágil: Adjudicación rápida y ágil');
  } else if (op.modalidad === 'Licitación') {
    score += 5;
    razones.push('Licitación Pública: Requiere preparación formal de propuesta');
  }

  // Normalización final entre 0 y 100
  const finalScore = Math.min(100, Math.max(0, Math.round(score)));

  let nivel: 'Alta' | 'Media' | 'Baja' = 'Media';
  let etiquetaPrioridad = 'Oportunidad Estándar';

  if (finalScore >= 75) {
    nivel = 'Alta';
    etiquetaPrioridad = '🔥 Oportunidad Prioritaria';
  } else if (finalScore >= 50) {
    nivel = 'Media';
    etiquetaPrioridad = '⭐ Oportunidad Recomendada';
  } else {
    nivel = 'Baja';
    etiquetaPrioridad = 'ℹ️ Oportunidad Secundaria';
  }

  return {
    score: finalScore,
    nivel,
    razones,
    etiquetaPrioridad
  };
}
