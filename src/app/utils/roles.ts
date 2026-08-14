const ROL_LABELS: Record<string, string> = {
  ADMIN_HOLDING: 'Administrador del Holding',
  ADMIN_EMPRESA: 'Administrador de Empresa',
  DIRECTOR_LICITACIONES: 'Director de Licitaciones',
  GESTOR: 'Gestor',
  APROBADOR_COMERCIAL: 'Aprobador Comercial',
  LECTOR: 'Lector'
};

export function rolLabel(rol: string): string {
  return ROL_LABELS[rol] || rol;
}

export function inicialesDe(nombre: string): string {
  const partes = nombre.trim().split(/\s+/).filter(Boolean);
  if (partes.length === 0) return '?';
  if (partes.length === 1) return partes[0].slice(0, 2).toUpperCase();
  return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase();
}
