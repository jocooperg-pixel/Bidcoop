import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@bidcoop/database';
import { obtenerSesionDesdeRequest } from '../../../utils/session';

const ESTADOS_VALIDOS = ['PENDIENTE', 'EN_PROGRESO', 'COMPLETADA'];

/**
 * PATCH /api/tareas/[id]
 * Cambiar estado/asignación/fecha límite. Cualquier usuario autenticado
 * puede actualizar una tarea que ve (asignada a sí mismo, sin asignar, o
 * cualquiera si es ADMIN_HOLDING) — no hay un dueño exclusivo de una tarea
 * más allá de a quién está asignada.
 */
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }

    const { id } = await params;
    const body = await req.json();
    const { estado, asignadoAId, fechaLimite, titulo, descripcion } = body as {
      estado?: string; asignadoAId?: string | null; fechaLimite?: string | null; titulo?: string; descripcion?: string;
    };

    if (estado !== undefined && !ESTADOS_VALIDOS.includes(estado)) {
      return NextResponse.json({ error: `Estado inválido: ${estado}` }, { status: 400 });
    }
    if (asignadoAId) {
      const usuario = await prisma.usuario.findFirst({ where: { id: asignadoAId, workspaceId: sesion.workspaceId } });
      if (!usuario) {
        return NextResponse.json({ error: 'Usuario asignado no encontrado.' }, { status: 404 });
      }
    }

    const tarea = await prisma.tarea.update({
      where: { id },
      data: {
        ...(estado !== undefined ? { estado: estado as never } : {}),
        ...(asignadoAId !== undefined ? { asignadoAId } : {}),
        ...(fechaLimite !== undefined ? { fechaLimite: fechaLimite ? new Date(fechaLimite) : null } : {}),
        ...(titulo !== undefined ? { titulo: titulo.trim() } : {}),
        ...(descripcion !== undefined ? { descripcion: descripcion?.trim() || null } : {})
      }
    });

    return NextResponse.json({ tarea });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al actualizar tarea: ${msg}` }, { status: 500 });
  }
}

/** DELETE /api/tareas/[id] */
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }
    const { id } = await params;
    await prisma.tarea.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al eliminar tarea: ${msg}` }, { status: 500 });
  }
}
