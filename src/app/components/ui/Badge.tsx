import React from 'react';
import { getMatchScoreBadgeStyle } from '../../utils/smartMatchEngine';
import { getSemaforoBidCoop } from '../../utils/semaforoEngine';

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
  title?: string;
}

/** Pill genérico de estado/etiqueta — base visual para cualquier badge de la app. */
export function Badge({ className = '', children, title }: BadgeProps) {
  return (
    <span
      title={title}
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border whitespace-nowrap ${className}`}
    >
      {children}
    </span>
  );
}

/**
 * Badge de % de Match — envuelve getMatchScoreBadgeStyle() sin modificar su
 * lógica ni sus umbrales/colores. Nunca recalcular el score aquí: siempre
 * viene de la oportunidad ya procesada por el motor de sync.
 */
export function MatchBadge({ score, showLabel = false }: { score: number; showLabel?: boolean }) {
  const style = getMatchScoreBadgeStyle(score);
  return (
    <Badge className={style.badgeBg}>
      {score}%{showLabel ? ` · ${style.label}` : ''}
    </Badge>
  );
}

/**
 * Semáforo BidCoop (🟢🟡🔴⚫) — envuelve getSemaforoBidCoop() sin modificar su
 * lógica ni sus colores. `compact` renderiza solo el emoji con tooltip (para
 * columnas de tabla angostas); el modo completo muestra emoji + etiqueta.
 */
export function SemaforoBadge({
  op,
  compact = false
}: {
  op: { monto: number; matchScore: number; amount?: number | null; amountType?: string };
  compact?: boolean;
}) {
  const s = getSemaforoBidCoop(op);
  if (compact) {
    return (
      <span title={s.reason} className="text-base leading-none cursor-default">
        {s.emoji}
      </span>
    );
  }
  return (
    <Badge className={s.badgeBg} title={s.reason}>
      <span>{s.emoji}</span> {s.label}
    </Badge>
  );
}
