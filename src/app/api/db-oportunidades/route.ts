import { NextResponse } from 'next/server';
import { prisma } from '@bidcoop/database';

/**
 * GET /api/db-oportunidades
 * Endpoint de VERIFICACIÓN — lee directo de Postgres (fuente migrada), no de
 * mockData.ts. No es todavía la fuente de datos de la UI: existe para probar
 * conectividad real app→Postgres antes de reemplazar mockData.ts.
 */
export async function GET() {
  try {
    const [total, porEstado, porModalidad, ultimaSincronizada, totalCompradores, totalItems, totalEmpresas, ultimasOportunidades] = await Promise.all([
      prisma.oportunidad.count(),
      prisma.oportunidad.groupBy({ by: ['estado'], _count: true }),
      prisma.oportunidad.groupBy({ by: ['modalidad'], _count: true }),
      prisma.oportunidad.findFirst({ orderBy: { sincronizadoEn: 'desc' }, select: { sincronizadoEn: true } }),
      prisma.comprador.count(),
      prisma.oportunidadItem.count(),
      prisma.empresa.count({ where: { activa: true } }),
      prisma.oportunidad.findMany({
        take: 10,
        orderBy: { sincronizadoEn: 'desc' },
        select: {
          codigo: true,
          tituloOficial: true,
          estado: true,
          estadoOficialMP: true,
          modalidad: true,
          fechaCierre: true,
          comprador: { select: { nombre: true } }
        }
      })
    ]);

    return NextResponse.json({
      fuente: 'Postgres (Neon) — @bidcoop/database',
      total,
      totalCompradores,
      totalItems,
      totalEmpresas,
      porEstado: Object.fromEntries(porEstado.map(r => [r.estado, r._count])),
      porModalidad: Object.fromEntries(porModalidad.map(r => [r.modalidad, r._count])),
      ultimaSincronizacion: ultimaSincronizada?.sincronizadoEn ?? null,
      ultimasOportunidades,
      timestampConsulta: new Date().toISOString()
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al consultar Postgres: ${msg}` }, { status: 500 });
  }
}
