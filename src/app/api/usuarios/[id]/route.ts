import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { prisma } from '@bidcoop/database';
import { obtenerSesionDesdeRequest } from '../../../utils/session';

const ROLES_VALIDOS = ['ADMIN_HOLDING', 'ADMIN_EMPRESA', 'DIRECTOR_LICITACIONES', 'GESTOR', 'APROBADOR_COMERCIAL', 'LECTOR'];

function generarPasswordTemporal(): string {
  return crypto.randomBytes(12).toString('base64url');
}

/**
 * PATCH /api/usuarios/[id]
 * Cambiar rol/empresas/estado activo, o resetear contraseña. Un admin no
 * puede desactivarse ni quitarse a sí mismo el rol ADMIN_HOLDING — evita
 * quedar sin ningún administrador del holding activo.
 */
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }
    if (sesion.rol !== 'ADMIN_HOLDING') {
      return NextResponse.json({ error: 'No autorizado. Solo el administrador del holding puede gestionar usuarios.' }, { status: 403 });
    }

    const { id } = await params;
    const objetivo = await prisma.usuario.findUnique({ where: { id } });
    if (!objetivo || objetivo.workspaceId !== sesion.workspaceId) {
      return NextResponse.json({ error: 'Usuario no encontrado.' }, { status: 404 });
    }

    const body = await req.json();
    const { accion } = body as { accion?: string };

    if (accion === 'resetear_password') {
      const passwordTemporal = generarPasswordTemporal();
      const passwordHash = await bcrypt.hash(passwordTemporal, 12);
      await prisma.usuario.update({ where: { id }, data: { passwordHash, debeCambiarPassword: true } });
      await prisma.registroAuditoria.create({
        data: {
          workspaceId: sesion.workspaceId,
          usuarioId: sesion.usuarioId,
          accion: 'usuario.resetear_password',
          entidadTipo: 'Usuario',
          entidadId: id,
          detalle: { email: objetivo.email }
        }
      });
      return NextResponse.json({ passwordTemporal });
    }

    if (accion === 'actualizar') {
      const { rol, activo, empresaIds } = body as { rol?: string; activo?: boolean; empresaIds?: string[] };

      if (rol !== undefined && !ROLES_VALIDOS.includes(rol)) {
        return NextResponse.json({ error: `Rol inválido: ${rol}` }, { status: 400 });
      }
      if (id === sesion.usuarioId) {
        if (activo === false) {
          return NextResponse.json({ error: 'No puedes desactivar tu propia cuenta.' }, { status: 400 });
        }
        if (rol !== undefined && rol !== 'ADMIN_HOLDING') {
          return NextResponse.json({ error: 'No puedes quitarte a ti mismo el rol de Administrador del Holding.' }, { status: 400 });
        }
      }

      const rolFinal = rol !== undefined ? rol : objetivo.rol;
      const empresaIdsLimpios = Array.isArray(empresaIds) ? empresaIds.filter(Boolean) : undefined;
      if (rolFinal !== 'ADMIN_HOLDING' && empresaIdsLimpios !== undefined && empresaIdsLimpios.length === 0) {
        return NextResponse.json({ error: 'Debe asignar al menos una empresa a un usuario que no sea Administrador del Holding.' }, { status: 400 });
      }

      const usuario = await prisma.usuario.update({
        where: { id },
        data: {
          ...(rol !== undefined ? { rol: rol as never } : {}),
          ...(activo !== undefined ? { activo } : {}),
          ...(empresaIdsLimpios !== undefined
            ? { empresas: { deleteMany: {}, create: empresaIdsLimpios.map(empresaId => ({ empresaId })) } }
            : {})
        }
      });

      await prisma.registroAuditoria.create({
        data: {
          workspaceId: sesion.workspaceId,
          usuarioId: sesion.usuarioId,
          accion: 'usuario.actualizar',
          entidadTipo: 'Usuario',
          entidadId: id,
          detalle: { rol, activo, empresaIds: empresaIdsLimpios }
        }
      });

      return NextResponse.json({ usuario: { id: usuario.id, rol: usuario.rol, activo: usuario.activo } });
    }

    return NextResponse.json({ error: 'Acción no reconocida.' }, { status: 400 });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al actualizar usuario: ${msg}` }, { status: 500 });
  }
}
