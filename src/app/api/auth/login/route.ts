import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@bidcoop/database';
import { crearTokenSesion, SESSION_COOKIE_NAME, SESSION_MAX_AGE } from '../../../utils/session';

/**
 * POST /api/auth/login
 * Autenticación real contra Usuario.passwordHash (bcrypt). Reemplaza la
 * comparación hardcodeada que antes vivía en el cliente (LoginScreen.tsx).
 * No revela si el email existe o la password es incorrecta por separado
 * (mismo mensaje genérico) para no filtrar qué cuentas existen.
 */
export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
      return NextResponse.json({ error: 'Usuario o contraseña incorrectos.' }, { status: 400 });
    }

    const usuario = await prisma.usuario.findUnique({
      where: { email: email.trim().toLowerCase() },
      include: { empresas: { select: { empresaId: true } } }
    });

    if (!usuario || !usuario.activo) {
      return NextResponse.json({ error: 'Usuario o contraseña incorrectos.' }, { status: 401 });
    }

    const passwordValida = await bcrypt.compare(password, usuario.passwordHash);
    if (!passwordValida) {
      return NextResponse.json({ error: 'Usuario o contraseña incorrectos.' }, { status: 401 });
    }

    const token = await crearTokenSesion({
      usuarioId: usuario.id,
      email: usuario.email,
      nombre: usuario.nombre,
      rol: usuario.rol,
      workspaceId: usuario.workspaceId,
      empresaIds: usuario.empresas.map(e => e.empresaId)
    });

    await prisma.usuario.update({ where: { id: usuario.id }, data: { ultimoLoginEn: new Date() } });

    const response = NextResponse.json({
      usuario: {
        id: usuario.id,
        email: usuario.email,
        nombre: usuario.nombre,
        rol: usuario.rol,
        debeCambiarPassword: usuario.debeCambiarPassword
      }
    });

    response.cookies.set(SESSION_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: SESSION_MAX_AGE,
      path: '/'
    });

    return response;
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al iniciar sesión: ${msg}` }, { status: 500 });
  }
}
