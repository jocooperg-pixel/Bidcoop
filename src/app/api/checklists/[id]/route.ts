import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@bidcoop/database';
import { obtenerSesionDesdeRequest } from '../../../utils/session';

/**
 * PATCH /api/checklists/[id]
 * Acciones sobre un checklist real: agregar item, marcar/desmarcar item,
 * eliminar item. Un solo endpoint con discriminador `accion` — mismo patrón
 * ya usado en /api/usuarios/[id] para mantener el número de rutas acotado.
 */
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }

    const { id } = await params;
    const checklist = await prisma.checklist.findUnique({ where: { id }, include: { oportunidad: { select: { workspaceId: true } } } });
    if (!checklist || checklist.oportunidad.workspaceId !== sesion.workspaceId) {
      return NextResponse.json({ error: 'Checklist no encontrado.' }, { status: 404 });
    }

    const body = await req.json();
    const { accion } = body as { accion?: string };

    if (accion === 'agregar_item') {
      const { descripcion } = body as { descripcion?: string };
      if (!descripcion?.trim()) {
        return NextResponse.json({ error: 'descripcion es obligatoria.' }, { status: 400 });
      }
      const item = await prisma.checklistItem.create({ data: { checklistId: id, descripcion: descripcion.trim() } });
      return NextResponse.json({ item }, { status: 201 });
    }

    if (accion === 'toggle_item') {
      const { itemId } = body as { itemId?: string };
      const item = await prisma.checklistItem.findUnique({ where: { id: itemId } });
      if (!item || item.checklistId !== id) {
        return NextResponse.json({ error: 'Item no encontrado.' }, { status: 404 });
      }
      const actualizado = await prisma.checklistItem.update({
        where: { id: itemId },
        data: { completado: !item.completado, completadoEn: !item.completado ? new Date() : null }
      });
      return NextResponse.json({ item: actualizado });
    }

    if (accion === 'eliminar_item') {
      const { itemId } = body as { itemId?: string };
      await prisma.checklistItem.deleteMany({ where: { id: itemId, checklistId: id } });
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: 'Acción no reconocida.' }, { status: 400 });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al actualizar checklist: ${msg}` }, { status: 500 });
  }
}

/** DELETE /api/checklists/[id] — elimina el checklist completo (cascada a items). */
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }
    const { id } = await params;
    const checklist = await prisma.checklist.findUnique({ where: { id }, include: { oportunidad: { select: { workspaceId: true } } } });
    if (!checklist || checklist.oportunidad.workspaceId !== sesion.workspaceId) {
      return NextResponse.json({ error: 'Checklist no encontrado.' }, { status: 404 });
    }
    await prisma.checklist.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al eliminar checklist: ${msg}` }, { status: 500 });
  }
}
