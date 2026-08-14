import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@bidcoop/database';
import { obtenerSesionDesdeRequest } from '../../../utils/session';

/**
 * GET /api/db-proveedores/[id]
 * Detalle de un proveedor con su historial de ventas observadas
 * (inteligencia competitiva, no cotizaciones que nos hayan dado a nosotros).
 */
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }

    const { id } = await params;
    const proveedor = await prisma.proveedor.findUnique({
      where: { id },
      include: {
        ventasHistoricas: { orderBy: { precio: 'desc' } }
      }
    });

    if (!proveedor) {
      return NextResponse.json({ error: 'Proveedor no encontrado.' }, { status: 404 });
    }

    // Decimal de Prisma no serializa a número plano en JSON.
    const ventasHistoricas = proveedor.ventasHistoricas.map(v => ({
      ...v,
      precio: Number(v.precio)
    }));

    return NextResponse.json({ proveedor: { ...proveedor, ventasHistoricas } });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al consultar proveedor: ${msg}` }, { status: 500 });
  }
}
