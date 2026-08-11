// Semáforo BidCoop — clasificación honesta por oportunidad.
// Usa únicamente datos reales ya disponibles (matchScore por catálogo y si el
// monto fue informado por Mercado Público). No incorpora rentabilidad,
// competencia ni experiencia histórica porque no tenemos una fuente real para
// esos factores todavía — inventarlos violaría la regla "no inventar" del
// resto de la plataforma.

export type SemaforoColor = 'verde' | 'amarillo' | 'rojo' | 'negro';

export interface SemaforoResult {
  color: SemaforoColor;
  emoji: string;
  label: string;
  reason: string;
  badgeBg: string;
}

export function montoInformado(op: { monto: number; amount?: number | null; amountType?: string }): boolean {
  if (op.amountType === 'no_informado') return false;
  if (op.amount === null) return false;
  if (!op.amount && op.monto === 0) return false;
  return true;
}

export function getSemaforoBidCoop(op: {
  monto: number;
  matchScore: number;
  amount?: number | null;
  amountType?: string;
}): SemaforoResult {
  if (!montoInformado(op)) {
    return {
      color: 'negro',
      emoji: '⚫',
      label: 'Información Insuficiente',
      reason: 'Mercado Público no informa el monto de este proceso — no hay base real para priorizarlo económicamente.',
      badgeBg: 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
    };
  }
  if (op.matchScore >= 70) {
    return {
      color: 'verde',
      emoji: '🟢',
      label: 'Alta Prioridad',
      reason: `Match del ${op.matchScore}% con tu catálogo y monto informado.`,
      badgeBg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60'
    };
  }
  if (op.matchScore >= 40) {
    return {
      color: 'amarillo',
      emoji: '🟡',
      label: 'Prioridad Media',
      reason: `Match del ${op.matchScore}% con tu catálogo — revisar antes de invertir tiempo.`,
      badgeBg: 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/60'
    };
  }
  return {
    color: 'rojo',
    emoji: '🔴',
    label: 'Baja Prioridad',
    reason: `Match del ${op.matchScore}% con tu catálogo actual — baja relevancia.`,
    badgeBg: 'bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800/60'
  };
}
