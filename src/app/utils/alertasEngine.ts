import { Oportunidad } from '../types';

export interface AlertaConHoras {
  op: Oportunidad;
  horas: number;
}

export interface CentroAlertas {
  critico: AlertaConHoras[];
  alto: AlertaConHoras[];
  medio: AlertaConHoras[];
  total: number;
}

// Único cálculo real de severidad de alertas (por tiempo hasta cierre) —
// usado por DashboardModule y BusinessModule. Antes existían dos
// implementaciones: una real aquí y una en BusinessModule con 3 alertas
// hardcodeadas (organismos, montos y hasta una "adjudicación" inventados).
// Extraído a un solo lugar para que sea imposible que vuelvan a divergir.
export function calcularCentroAlertas(oportunidades: Oportunidad[]): CentroAlertas {
  const now = new Date();
  const activas = oportunidades.filter(o => o.estado === 'Publicada' && o.fechaCierre);

  const conHoras = activas
    .map(o => {
      const cierre = new Date(o.fechaCierre as string);
      if (isNaN(cierre.getTime())) return null;
      const horas = (cierre.getTime() - now.getTime()) / (1000 * 60 * 60);
      return horas >= 0 ? { op: o, horas } : null;
    })
    .filter((x): x is AlertaConHoras => x !== null);

  const critico = conHoras.filter(x => x.horas <= 24).sort((a, b) => a.horas - b.horas);
  const alto = conHoras.filter(x => x.horas > 24 && x.horas <= 72).sort((a, b) => a.horas - b.horas);
  const medio = conHoras.filter(x => x.horas > 72 && x.horas <= 168).sort((a, b) => a.horas - b.horas);

  return { critico, alto, medio, total: critico.length + alto.length + medio.length };
}
