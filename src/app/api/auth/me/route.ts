import { NextRequest, NextResponse } from 'next/server';
import { verificarTokenSesion, SESSION_COOKIE_NAME } from '../../../utils/session';

/**
 * GET /api/auth/me — fuente de verdad de la sesión actual, verificada en
 * servidor (JWT firmado). El cliente ya no decide si está autenticado
 * leyendo un flag local (sessionStorage) — solo refleja lo que este
 * endpoint confirma.
 */
export async function GET(req: NextRequest) {
  const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!token) return NextResponse.json({ autenticado: false }, { status: 401 });

  const sesion = await verificarTokenSesion(token);
  if (!sesion) return NextResponse.json({ autenticado: false }, { status: 401 });

  return NextResponse.json({
    autenticado: true,
    usuario: {
      id: sesion.usuarioId,
      email: sesion.email,
      nombre: sesion.nombre,
      rol: sesion.rol,
      workspaceId: sesion.workspaceId,
      empresaIds: sesion.empresaIds
    }
  });
}
