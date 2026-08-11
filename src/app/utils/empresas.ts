// Espejo del config/empresas.json real (fuente de verdad usada por el motor
// de sync en Python) para que el frontend nunca tenga que hardcodear RUT,
// razón social o rubros de las empresas del holding con valores inventados.
// Actualizar aquí SOLO si config/empresas.json cambia.

export interface EmpresaInfo {
  nombre: string;
  nombreCompleto: string;
  rut: string;
  emailContacto: string;
  activa: boolean;
  rubros: string[];
}

export const EMPRESAS: Record<string, EmpresaInfo> = {
  Aminorte: {
    nombre: 'Aminorte',
    nombreCompleto: 'AMINORTE SPA',
    rut: '99.533.780-0',
    emailContacto: 'mviguera@aminorte.cl',
    activa: true,
    rubros: ['Artículos de Escritorio y Oficina', 'Tecnología y Hardware', 'Servicios de Climatización y Maquinaria']
  },
  'V-MOCCS': {
    nombre: 'V-MOCCS',
    nombreCompleto: 'V-MOCCS LTDA',
    rut: '77.235.702-8',
    emailContacto: 'jorge.alvarado@discoverymerch.cl',
    activa: true,
    rubros: ['Mobiliario y Equipamiento de Oficina', 'Artículos de Escritorio y Oficina']
  }
};

export function getEmpresaInfo(nombre: string): EmpresaInfo | undefined {
  return EMPRESAS[nombre];
}
