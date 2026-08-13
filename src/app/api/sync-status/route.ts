import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/**
 * GET /api/sync-status
 * Retorna el estado actual de la última sincronización con Mercado Público.
 * Lee data/sync_meta.json generado por scripts/sync_mercadopublico.py
 */
export async function GET() {
  try {
    const metaPath = path.join(process.cwd(), 'data', 'sync_meta.json');

    if (!fs.existsSync(metaPath)) {
      return NextResponse.json({
        exitosa: false,
        ultimaSincronizacionExitosa: null,
        ultimoIntentoRealizado: null,
        registrosEnPlataforma: 0,
        mensaje: 'No se ha ejecutado ninguna sincronización aún.',
        alertas: [],
        categorias: { licitaciones: 0, comprasAgiles: 0, convenioMarco: 0, grandesCompras: 0 },
        matchPorEmpresa: {},
        limitacionesDocumentadas: [
          'Invitaciones a Grandes Compras no disponibles vía API pública.'
        ]
      });
    }

    const raw = fs.readFileSync(metaPath, 'utf-8');
    const meta = JSON.parse(raw);

    // Calcular tiempo desde última sync exitosa en minutos y horas
    let horasDesdeUltimaSync: number | null = null;
    let minutosDesdeUltimaSync: number | null = null;
    if (meta.ultimaSincronizacionExitosa) {
      const lastSync = new Date(meta.ultimaSincronizacionExitosa);
      const diffMs = Date.now() - lastSync.getTime();
      minutosDesdeUltimaSync = Math.max(0, Math.floor(diffMs / 60000));
      horasDesdeUltimaSync = parseFloat((diffMs / 3600000).toFixed(1));
    }

    // Determinar estado de salud del sistema según las reglas de Bidcoop
    let estadoSalud: '🟢 OPERATIVO' | '🟡 CON PROBLEMAS' | '🔴 SIN ACTUALIZACIÓN' = '🟢 OPERATIVO';
    let detalleSalud = 'Sincronización en régimen normal cada 3 horas (24/7).';

    if (horasDesdeUltimaSync === null || horasDesdeUltimaSync > 6) {
      estadoSalud = '🔴 SIN ACTUALIZACIÓN';
      detalleSalud = `Alerta: Más de ${horasDesdeUltimaSync || 'N/D'} horas sin sincronización exitosa. API de Mercado Público requiere revisión.`;
    } else if (horasDesdeUltimaSync > 3.5 || meta.errores?.length > 0) {
      estadoSalud = '🟡 CON PROBLEMAS';
      detalleSalud = 'Advertencia: Reintentos de sincronización ejecutados o ligera demora en la API oficial.';
    }

    // Calcular próxima sincronización estimada (+3 horas)
    let proximaSincronizacion: string | null = null;
    if (meta.ultimaSincronizacionExitosa) {
      const nextSyncDate = new Date(new Date(meta.ultimaSincronizacionExitosa).getTime() + 3 * 3600000);
      proximaSincronizacion = nextSyncDate.toISOString();
    }

    const fechaHoraChile = new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' });

    return NextResponse.json({
      ...meta,
      estadoSalud,
      detalleSalud,
      fuenteOficial: 'Mercado Público / ChileCompra',
      frecuenciaConfigurada: 'Cada 3 horas (24/7)',
      minutosDesdeUltimaSync,
      horasDesdeUltimaSync,
      proximaSincronizacion,
      fechaHoraChile,
      syncAtrasada: horasDesdeUltimaSync !== null && horasDesdeUltimaSync > 3.5,
      timestampConsulta: new Date().toISOString()
    });

  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: `Error al leer sync_meta.json: ${msg}` },
      { status: 500 }
    );
  }
}
