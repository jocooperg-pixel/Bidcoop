import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { prisma } from '@bidcoop/database';
import { obtenerSesionDesdeRequest } from '../../utils/session';

const ROLES_VALIDOS = ['ADMIN_HOLDING', 'ADMIN_EMPRESA', 'DIRECTOR_LICITACIONES', 'GESTOR', 'APROBADOR_COMERCIAL', 'LECTOR'];

function generarPasswordTemporal(): string {
  // 12 bytes aleatorios en base64url -> 16 caracteres, suficiente entropía
  // para una contraseña temporal de un solo uso (debeCambiarPassword=true).
  return crypto.randomBytes(12).toString('base64url');
}

/**
 * GET /api/usuarios
 * Directorio real de usuarios del workspace, para la pantalla de
 * administración RBAC. Solo ADMIN_HOLDING puede ver/gestionar usuarios —
 * mismo criterio de "una sola capa de admin" que el resto del RBAC ya
 * implementado (db-oportunidades, db-compradores).
 */
export async function GET(req: NextRequest) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }
    if (sesion.rol !== 'ADMIN_HOLDING') {
      return NextResponse.json({ error: 'No autorizado. Solo el administrador del holding puede gestionar usuarios.' }, { status: 403 });
    }

    const [usuarios, empresas] = await Promise.all([
      prisma.usuario.findMany({
        where: { workspaceId: sesion.workspaceId },
        include: { empresas: { include: { empresa: { select: { id: true, nombre: true } } } } },
        orderBy: { createdAt: 'asc' }
      }),
      prisma.empresa.findMany({
        where: { workspaceId: sesion.workspaceId },
        select: { id: true, nombre: true },
        orderBy: { nombre: 'asc' }
      })
    ]);

    const directorio = usuarios.map(u => ({
      id: u.id,
      nombre: u.nombre,
      email: u.email,
      rol: u.rol,
      activo: u.activo,
      debeCambiarPassword: u.debeCambiarPassword,
      ultimoLoginEn: u.ultimoLoginEn,
      createdAt: u.createdAt,
      empresas: u.empresas.map(ue => ue.empresa)
    }));

    return NextResponse.json({ usuarios: directorio, empresasDisponibles: empresas });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al listar usuarios: ${msg}` }, { status: 500 });
  }
}

/**
 * POST /api/usuarios
 * Crea un usuario real con contraseña temporal generada al azar (nunca
 * elegida por el admin ni hardcodeada). La contraseña se devuelve UNA sola
 * vez en esta respuesta para que el administrador la comparta manualmente
 * — no queda guardada en ningún otro lugar ni se loguea en texto plano.
 */
export async function POST(req: NextRequest) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }
    if (sesion.rol !== 'ADMIN_HOLDING') {
      return NextResponse.json({ error: 'No autorizado. Solo el administrador del holding puede crear usuarios.' }, { status: 403 });
    }

    const body = await req.json();
    const { nombre, email, rol, empresaIds } = body as { nombre?: string; email?: string; rol?: string; empresaIds?: string[] };

    if (!nombre?.trim() || !email?.trim() || !rol) {
      return NextResponse.json({ error: 'Nombre, correo y rol son obligatorios.' }, { status: 400 });
    }
    if (!ROLES_VALIDOS.includes(rol)) {
      return NextResponse.json({ error: `Rol inválido: ${rol}` }, { status: 400 });
    }
    const empresaIdsLimpios = Array.isArray(empresaIds) ? empresaIds.filter(Boolean) : [];
    if (rol !== 'ADMIN_HOLDING' && empresaIdsLimpios.length === 0) {
      return NextResponse.json({ error: 'Debe asignar al menos una empresa a un usuario que no sea Administrador del Holding.' }, { status: 400 });
    }

    const existente = await prisma.usuario.findUnique({ where: { email: email.trim().toLowerCase() } });
    if (existente) {
      return NextResponse.json({ error: 'Ya existe un usuario con ese correo.' }, { status: 409 });
    }

    const passwordTemporal = generarPasswordTemporal();
    const passwordHash = await bcrypt.hash(passwordTemporal, 12);

    const usuario = await prisma.usuario.create({
      data: {
        workspaceId: sesion.workspaceId,
        nombre: nombre.trim(),
        email: email.trim().toLowerCase(),
        rol: rol as never,
        passwordHash,
        debeCambiarPassword: true,
        empresas: {
          create: empresaIdsLimpios.map(empresaId => ({ empresaId }))
        }
      }
    });

    await prisma.registroAuditoria.create({
      data: {
        workspaceId: sesion.workspaceId,
        usuarioId: sesion.usuarioId,
        accion: 'usuario.crear',
        entidadTipo: 'Usuario',
        entidadId: usuario.id,
        detalle: { email: usuario.email, rol: usuario.rol, empresaIds: empresaIdsLimpios }
      }
    });

    return NextResponse.json({
      usuario: { id: usuario.id, nombre: usuario.nombre, email: usuario.email, rol: usuario.rol },
      passwordTemporal
    }, { status: 201 });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al crear usuario: ${msg}` }, { status: 500 });
  }
}
