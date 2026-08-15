import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@bidcoop/database';
import { obtenerSesionDesdeRequest } from '../../utils/session';

/**
 * GET /api/tareas
 * ADMIN_HOLDING ve todas las tareas del workspace. Cualquier otro rol ve
 * solo las tareas asignadas a sí mismo o sin asignar (para poder tomarlas) —
 * mismo espíritu de separación que el resto del RBAC, aplicado a lo único
 * que Tarea puede filtrar (no tiene empresaId propio).
 */
export async function GET(req: NextRequest) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }

    const esConsolidado = sesion.rol === 'ADMIN_HOLDING';
    const tareas = await prisma.tarea.findMany({
      where: {
        AND: [
          { OR: [{ oportunidadId: null }, { oportunidad: { workspaceId: sesion.workspaceId } }] },
          ...(esConsolidado ? [] : [{ OR: [{ asignadoAId: sesion.usuarioId }, { asignadoAId: null }] }])
        ]
      },
      include: {
        asignadoA: { select: { id: true, nombre: true } },
        oportunidad: { select: { codigo: true, tituloOficial: true } }
      },
      orderBy: [{ estado: 'asc' }, { fechaLimite: 'asc' }]
    });

    const ahora = new Date();
    const todas = tareas.map(t => ({
      id: t.id,
      titulo: t.titulo,
      descripcion: t.descripcion,
      // VENCIDA se calcula al leer, nunca se persiste automáticamente —
      // mismo criterio que el vencimiento de Oportunidad (isVencida client-side).
      estado: t.estado === 'COMPLETADA' ? 'COMPLETADA' : (t.fechaLimite && t.fechaLimite < ahora ? 'VENCIDA' : t.estado),
      fechaLimite: t.fechaLimite,
      asignadoA: t.asignadoA,
      oportunidad: t.oportunidad,
      createdAt: t.createdAt
    }));

    return NextResponse.json({ tareas: todas, vistaConsolidada: esConsolidado });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al listar tareas: ${msg}` }, { status: 500 });
  }
}

/**
 * POST /api/tareas
 * Crea una tarea real. oportunidadCodigo es opcional — si viene, se resuelve
 * al id real de Postgres (el frontend solo conoce el código de Mercado
 * Público, no el uuid interno).
 */
export async function POST(req: NextRequest) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }

    const body = await req.json();
    const { titulo, descripcion, fechaLimite, asignadoAId, oportunidadCodigo } = body as {
      titulo?: string; descripcion?: string; fechaLimite?: string; asignadoAId?: string; oportunidadCodigo?: string;
    };

    if (!titulo?.trim()) {
      return NextResponse.json({ error: 'El título es obligatorio.' }, { status: 400 });
    }

    let oportunidadId: string | undefined;
    if (oportunidadCodigo?.trim()) {
      const op = await prisma.oportunidad.findFirst({
        where: { codigo: oportunidadCodigo.trim(), workspaceId: sesion.workspaceId },
        select: { id: true }
      });
      if (!op) {
        return NextResponse.json({ error: `No se encontró la oportunidad con código ${oportunidadCodigo}.` }, { status: 404 });
      }
      oportunidadId = op.id;
    }

    if (asignadoAId) {
      const usuario = await prisma.usuario.findFirst({ where: { id: asignadoAId, workspaceId: sesion.workspaceId } });
      if (!usuario) {
        return NextResponse.json({ error: 'Usuario asignado no encontrado.' }, { status: 404 });
      }
    }

    const tarea = await prisma.tarea.create({
      data: {
        titulo: titulo.trim(),
        descripcion: descripcion?.trim() || null,
        fechaLimite: fechaLimite ? new Date(fechaLimite) : null,
        asignadoAId: asignadoAId || null,
        oportunidadId: oportunidadId || null
      }
    });

    return NextResponse.json({ tarea }, { status: 201 });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al crear tarea: ${msg}` }, { status: 500 });
  }
}
