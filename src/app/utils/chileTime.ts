// Utilidades de tiempo ancladas a America/Santiago — usadas para decidir si
// una oportunidad está vencida y para cualquier cálculo de "tiempo restante".
// No confiar en que el navegador del usuario esté en hora de Chile: se
// calcula explícitamente vía Intl, independiente de dónde se abra la
// plataforma.

/** Epoch (ms) del instante actual, expresado como si fuera hora de Chile. */
export function nowInSantiagoMillis(): number {
  const now = new Date();
  // Intl con timeZone America/Santiago nos da los componentes de fecha/hora
  // reales en Chile para "ahora"; los reconstruimos como si fueran UTC para
  // obtener un epoch comparable con fechas naive (sin offset) del sync.
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Santiago',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false
  }).formatToParts(now);

  const get = (type: string) => parts.find(p => p.type === type)?.value ?? '00';
  const iso = `${get('year')}-${get('month')}-${get('day')}T${get('hour')}:${get('minute')}:${get('second')}Z`;
  return new Date(iso).getTime();
}

/**
 * Parsea una fecha naive (sin offset, ej. "2026-08-13T10:00:00") emitida por
 * el sync como hora de Chile, y devuelve su epoch (ms) comparable con
 * nowInSantiagoMillis().
 */
export function parseChileNaiveDate(fecha: string | undefined | null): number | null {
  if (!fecha) return null;
  // Si ya trae offset/Z, respetarlo (fecha real, no naive).
  const hasOffset = /[+-]\d{2}:?\d{2}$|Z$/.test(fecha);
  const iso = hasOffset ? fecha : `${fecha}Z`;
  const t = new Date(iso).getTime();
  return isNaN(t) ? null : t;
}

/** true si fechaCierre ya pasó respecto a "ahora" en hora de Chile. */
export function isVencida(fechaCierre: string | undefined | null): boolean {
  const cierre = parseChileNaiveDate(fechaCierre);
  if (cierre === null) return false;
  return cierre < nowInSantiagoMillis();
}
