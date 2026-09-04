import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@bidcoop/database';
import { obtenerSesionDesdeRequest } from '../../utils/session';

/**
 * GET /api/db-etiquetas?oportunidadCodigo=...
 * Etiquetas reales, persistidas en Postgres, asociadas a un código de
 * oportunidad (texto plano, mismo patrón que Contrato — la tabla
 * Oportunidad es una copia parcial). Sin el parámetro, lista todas las
 * etiquetas de la(s) empresa(s) del usuario; con él, solo las de ese
 * proceso.
 */
export async function GET(req: NextRequest) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }

    const oportunidadCodigo = req.nextUrl.searchParams.get('oportunidadCodigo');

    const filtroEmpresa = sesion.rol === 'ADMIN_HOLDING'
      ? {}
      : { empresaId: { in: sesion.empresaIds } };

    const etiquetas = await prisma.etiqueta.findMany({
      where: {
        ...filtroEmpresa,
        ...(oportunidadCodigo ? { oportunidadCodigo } : {})
      },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json({
      etiquetas: etiquetas.map(e => ({
        id: e.id,
        oportunidadCodigo: e.oportunidadCodigo,
        nombre: e.nombre,
        color: e.color,
        empresaId: e.empresaId,
        createdAt: e.createdAt
      }))
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al consultar etiquetas: ${msg}` }, { status: 500 });
  }
}

/**
 * POST /api/db-etiquetas
 * Crea una etiqueta real sobre un código de oportunidad, asociada a la
 * empresa activa del usuario.
 */
export async function POST(req: NextRequest) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }

    const body = await req.json().catch(() => null);
    const { oportunidadCodigo, nombre, color, empresaId: empresaIdSolicitada } = body || {};

    if (typeof oportunidadCodigo !== 'string' || !oportunidadCodigo.trim()) {
      return NextResponse.json({ error: 'Falta oportunidadCodigo.' }, { status: 400 });
    }
    if (typeof nombre !== 'string' || !nombre.trim()) {
      return NextResponse.json({ error: 'Falta nombre.' }, { status: 400 });
    }
    if (typeof color !== 'string' || !color.trim()) {
      return NextResponse.json({ error: 'Falta color.' }, { status: 400 });
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

    const etiqueta = await prisma.etiqueta.create({
      data: {
        oportunidadCodigo: oportunidadCodigo.trim(),
        nombre: nombre.trim(),
        color: color.trim(),
        empresaId,
        creadoPorUsuarioId: sesion.usuarioId
      }
    });

    return NextResponse.json({
      etiqueta: {
        id: etiqueta.id,
        oportunidadCodigo: etiqueta.oportunidadCodigo,
        nombre: etiqueta.nombre,
        color: etiqueta.color,
        empresaId: etiqueta.empresaId,
        createdAt: etiqueta.createdAt
      }
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al crear la etiqueta: ${msg}` }, { status: 500 });
  }
}

/**
 * DELETE /api/db-etiquetas?id=...
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

    const etiqueta = await prisma.etiqueta.findUnique({ where: { id } });
    if (!etiqueta) {
      return NextResponse.json({ error: 'Etiqueta no encontrada.' }, { status: 404 });
    }
    if (sesion.rol !== 'ADMIN_HOLDING' && !sesion.empresaIds.includes(etiqueta.empresaId)) {
      return NextResponse.json({ error: 'No autorizado para esta etiqueta.' }, { status: 403 });
    }

    await prisma.etiqueta.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al eliminar la etiqueta: ${msg}` }, { status: 500 });
  }
}
