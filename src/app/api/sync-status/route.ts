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

    // Calcular tiempo desde última sync exitosa
    let horasDesdeUltimaSync: number | null = null;
    if (meta.ultimaSincronizacionExitosa) {
      const lastSync = new Date(meta.ultimaSincronizacionExitosa);
      horasDesdeUltimaSync = Math.round((Date.now() - lastSync.getTime()) / 1000 / 60 / 60);
    }

    // Verificar si la sync está atrasada (más de 8 horas sin actualizar)
    const syncAtrasada = horasDesdeUltimaSync !== null && horasDesdeUltimaSync > 8;

    return NextResponse.json({
      ...meta,
      horasDesdeUltimaSync,
      syncAtrasada,
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
