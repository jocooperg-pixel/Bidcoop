import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@bidcoop/database';
import { obtenerSesionDesdeRequest } from '../../utils/session';

/**
 * GET /api/db-oportunidades
 * Endpoint de VERIFICACIÓN — lee directo de Postgres (fuente migrada), no de
 * mockData.ts. No es todavía la fuente de datos de la UI: existe para probar
 * conectividad real app→Postgres antes de reemplazar mockData.ts.
 *
 * Separación por empresa: ADMIN_HOLDING ve la vista consolidada (todas las
 * empresas del workspace); cualquier otro rol solo ve oportunidades
 * vinculadas a las empresas que tiene asignadas (UsuarioEmpresa) — evita que
 * un usuario de una empresa vea datos de la otra.
 */
export async function GET(req: NextRequest) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }

    const filtroEmpresa = sesion.rol === 'ADMIN_HOLDING'
      ? {}
      : { empresas: { some: { empresaId: { in: sesion.empresaIds } } } };

    const [total, porEstado, porModalidad, ultimaSincronizada, totalCompradores, totalItems, totalEmpresas, ultimasOportunidades] = await Promise.all([
      prisma.oportunidad.count({ where: filtroEmpresa }),
      prisma.oportunidad.groupBy({ by: ['estado'], _count: true, where: filtroEmpresa }),
      prisma.oportunidad.groupBy({ by: ['modalidad'], _count: true, where: filtroEmpresa }),
      prisma.oportunidad.findFirst({ where: filtroEmpresa, orderBy: { sincronizadoEn: 'desc' }, select: { sincronizadoEn: true } }),
      prisma.comprador.count(),
      prisma.oportunidadItem.count({ where: { oportunidad: filtroEmpresa } }),
      prisma.empresa.count({ where: { activa: true } }),
      prisma.oportunidad.findMany({
        where: filtroEmpresa,
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
      vistaConsolidada: sesion.rol === 'ADMIN_HOLDING',
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
