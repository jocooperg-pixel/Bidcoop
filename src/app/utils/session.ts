import { SignJWT, jwtVerify } from 'jose';
import type { NextRequest } from 'next/server';

const COOKIE_NAME = 'bidcoop_session';
const SESSION_DURATION_SECONDS = 60 * 60 * 12; // 12 horas

function getSecretKey(): Uint8Array {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error('AUTH_SECRET no está configurado — no se puede firmar/verificar sesiones.');
  return new TextEncoder().encode(secret);
}

export interface SessionPayload {
  usuarioId: string;
  email: string;
  nombre: string;
  rol: string;
  workspaceId: string;
  empresaIds: string[];
}

export async function crearTokenSesion(payload: SessionPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION_SECONDS}s`)
    .sign(getSecretKey());
}

export async function verificarTokenSesion(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    return payload as unknown as SessionPayload;
  } catch {
    return null;
  }
}

export const SESSION_COOKIE_NAME = COOKIE_NAME;
export const SESSION_MAX_AGE = SESSION_DURATION_SECONDS;

// Helper reusable para rutas API: el proxy (src/proxy.ts) ya garantiza que
// solo llegan requests con cookie válida a estas rutas, pero cada ruta
// vuelve a verificar (no confía en headers propagados) para poder leer el
// payload y aplicar separación de datos por empresa/rol.
export async function obtenerSesionDesdeRequest(req: NextRequest): Promise<SessionPayload | null> {
  const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!token) return null;
  return verificarTokenSesion(token);
}
