import { SignJWT, jwtVerify } from 'jose';

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
