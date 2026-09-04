import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@bidcoop/database';
import { obtenerSesionDesdeRequest } from '../../utils/session';

/**
 * GET /api/db-busquedas
 * Búsquedas guardadas reales, persistidas en Postgres — reemplaza el
 * VistaGuardada en memoria (mockVistasGuardadas en page.tsx) que se
 * perdía al recargar. ADMIN_HOLDING ve las de todas las empresas a las
 * que tiene acceso; cualquier otro rol solo ve las suyas (mismo patrón
 * de aislamiento que /api/db-productos).
 */
export async function GET(req: NextRequest) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }

    const filtroEmpresa = sesion.rol === 'ADMIN_HOLDING'
      ? {}
      : { empresaId: { in: sesion.empresaIds } };

    const busquedas = await prisma.busquedaGuardada.findMany({
      where: filtroEmpresa,
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json({
      busquedas: busquedas.map(b => ({
        id: b.id,
        nombre: b.nombre,
        filtros: b.filtros,
        createdAt: b.createdAt
      }))
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al consultar búsquedas guardadas: ${msg}` }, { status: 500 });
  }
}

/**
 * POST /api/db-busquedas
 * Crea una búsqueda guardada real, asociada a la empresa activa del
 * usuario (la primera de su sesión) y a él mismo.
 */
export async function POST(req: NextRequest) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }

    const body = await req.json().catch(() => null);
    const { nombre, filtros, empresaId: empresaIdSolicitada } = body || {};

    if (typeof nombre !== 'string' || !nombre.trim()) {
      return NextResponse.json({ error: 'Falta nombre.' }, { status: 400 });
    }
    if (filtros === undefined || filtros === null || typeof filtros !== 'object') {
      return NextResponse.json({ error: 'Falta filtros.' }, { status: 400 });
    }

    let empresaId: string | undefined = typeof empresaIdSolicitada === 'string' ? empresaIdSolicitada : undefined;
    if (empresaId) {
      if (sesion.rol !== 'ADMIN_HOLDING' && !sesion.empresaIds.includes(empresaId)) {
        return NextResponse.json({ error: 'No autorizado para esta empresa.' }, { status: 403 });
      }
    } else {
      empresaId = sesion.empresaIds[0];
    }
    if (!empresaId) {
      return NextResponse.json({ error: 'El usuario no tiene una empresa asociada.' }, { status: 400 });
    }

    const busqueda = await prisma.busquedaGuardada.create({
      data: {
        empresaId,
        usuarioId: sesion.usuarioId,
        nombre: nombre.trim(),
        filtros
      }
    });

    return NextResponse.json({
      busqueda: {
        id: busqueda.id,
        nombre: busqueda.nombre,
        filtros: busqueda.filtros,
        createdAt: busqueda.createdAt
      }
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al guardar la búsqueda: ${msg}` }, { status: 500 });
  }
}

/**
 * DELETE /api/db-busquedas?id=...
 */
export async function DELETE(req: NextRequest) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }

    const id = req.nextUrl.searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Falta el parámetro "id".' }, { status: 400 });
    }

    const busqueda = await prisma.busquedaGuardada.findUnique({ where: { id } });
    if (!busqueda) {
      return NextResponse.json({ error: 'Búsqueda guardada no encontrada.' }, { status: 404 });
    }
    if (sesion.rol !== 'ADMIN_HOLDING' && !sesion.empresaIds.includes(busqueda.empresaId)) {
      return NextResponse.json({ error: 'No autorizado para esta búsqueda guardada.' }, { status: 403 });
    }

    await prisma.busquedaGuardada.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al eliminar la búsqueda guardada: ${msg}` }, { status: 500 });
  }
}
