import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@bidcoop/database';
import { obtenerSesionDesdeRequest } from '../../utils/session';

/**
 * GET /api/checklists?oportunidadCodigo=XXX
 * Checklists reales de una oportunidad real (Checklist siempre requiere
 * oportunidadId en el schema — no existe checklist "suelto").
 */
export async function GET(req: NextRequest) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }

    const codigo = req.nextUrl.searchParams.get('oportunidadCodigo');
    if (!codigo?.trim()) {
      return NextResponse.json({ error: 'oportunidadCodigo es obligatorio.' }, { status: 400 });
    }

    const oportunidad = await prisma.oportunidad.findFirst({
      where: { codigo: codigo.trim(), workspaceId: sesion.workspaceId },
      select: { id: true, codigo: true, tituloOficial: true }
    });
    if (!oportunidad) {
      return NextResponse.json({ error: `No se encontró la oportunidad con código ${codigo}.` }, { status: 404 });
    }

    const checklists = await prisma.checklist.findMany({
      where: { oportunidadId: oportunidad.id },
      include: { items: { orderBy: { id: 'asc' } } },
      orderBy: { createdAt: 'asc' }
    });

    return NextResponse.json({ oportunidad, checklists });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al listar checklists: ${msg}` }, { status: 500 });
  }
}

/**
 * POST /api/checklists
 * Crea un checklist real para una oportunidad real, con items iniciales
 * opcionales (lista de strings).
 */
export async function POST(req: NextRequest) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }

    const body = await req.json();
    const { nombre, oportunidadCodigo, items } = body as { nombre?: string; oportunidadCodigo?: string; items?: string[] };

    if (!nombre?.trim() || !oportunidadCodigo?.trim()) {
      return NextResponse.json({ error: 'nombre y oportunidadCodigo son obligatorios.' }, { status: 400 });
    }

    const oportunidad = await prisma.oportunidad.findFirst({
      where: { codigo: oportunidadCodigo.trim(), workspaceId: sesion.workspaceId },
      select: { id: true }
    });
    if (!oportunidad) {
      return NextResponse.json({ error: `No se encontró la oportunidad con código ${oportunidadCodigo}.` }, { status: 404 });
    }

    const itemsLimpios = Array.isArray(items) ? items.filter(i => i?.trim()) : [];

    const checklist = await prisma.checklist.create({
      data: {
        nombre: nombre.trim(),
        oportunidadId: oportunidad.id,
        items: { create: itemsLimpios.map(descripcion => ({ descripcion: descripcion.trim() })) }
      },
      include: { items: true }
    });

    return NextResponse.json({ checklist }, { status: 201 });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al crear checklist: ${msg}` }, { status: 500 });
  }
}
