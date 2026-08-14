import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@bidcoop/database';
import { obtenerSesionDesdeRequest } from '../../../utils/session';

/**
 * GET /api/db-compradores/[id]
 * Historial completo de un comprador: todas sus oportunidades reales,
 * con la misma separación por empresa que el listado.
 */
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }

    const { id } = await params;
    const esConsolidado = sesion.rol === 'ADMIN_HOLDING';
    const filtroOportunidad = esConsolidado
      ? {}
      : { empresas: { some: { empresaId: { in: sesion.empresaIds } } } };

    const comprador = await prisma.comprador.findUnique({
      where: { id },
      include: {
        oportunidades: {
          where: filtroOportunidad,
          orderBy: { fechaCierre: 'desc' },
          select: {
            codigo: true,
            tituloOficial: true,
            modalidad: true,
            estado: true,
            estadoOficialMP: true,
            montoEstimado: true,
            fechaPublicacion: true,
            fechaCierre: true,
            empresas: { select: { empresa: { select: { nombre: true } } } }
          }
        }
      }
    });

    if (!comprador) {
      return NextResponse.json({ error: 'Comprador no encontrado.' }, { status: 404 });
    }

    // Decimal de Prisma no serializa a número plano en JSON — se normaliza
    // explícitamente para que el cliente reciba number, no string.
    const oportunidades = comprador.oportunidades.map(o => ({
      ...o,
      montoEstimado: o.montoEstimado ? Number(o.montoEstimado) : null
    }));

    return NextResponse.json({ comprador: { ...comprador, oportunidades } });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al consultar comprador: ${msg}` }, { status: 500 });
  }
}
