import React from 'react';
import Card from './Card';

interface KpiCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  /** Solo pasar cuando exista una comparación real contra un período anterior — nunca inventar una tendencia. */
  trend?: { value: string; positive: boolean } | null;
  /** Línea de contexto adicional bajo el valor (ej. "vigentes hoy") — no implica tendencia, solo aclara el número. */
  subtitle?: string;
  accent?: 'brand' | 'emerald' | 'amber' | 'slate';
}

const ACCENT_CLASSES: Record<string, string> = {
  brand: 'bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400',
  emerald: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400',
  amber: 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400',
  slate: 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
};

export default function KpiCard({ label, value, icon, trend, subtitle, accent = 'brand' }: KpiCardProps) {
  return (
    <Card className="h-36 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase font-black tracking-wider text-slate-400">{label}</span>
        {icon && (
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${ACCENT_CLASSES[accent]}`}>
            {icon}
          </div>
        )}
      </div>
      <div>
        <h2 className="text-3xl font-black text-slate-900 dark:text-white">{value}</h2>
        {subtitle && (
          <span className="text-[10px] font-bold text-slate-400 block mt-1">{subtitle}</span>
        )}
        {trend && (
          <span
            className={`text-[10px] font-bold block mt-1 ${
              trend.positive ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'
            }`}
          >
            {trend.positive ? '↑' : '↓'} {trend.value}
          </span>
        )}
      </div>
    </Card>
  );
}
