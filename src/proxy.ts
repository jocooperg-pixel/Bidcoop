import { NextRequest, NextResponse } from 'next/server';
import { verificarTokenSesion, SESSION_COOKIE_NAME } from './app/utils/session';

// Protege todas las rutas /api/* que sirven o mutan datos reales. Antes de
// este proxy, /api/db-oportunidades, /api/postulaciones, /api/watchlist,
// /api/sync-status, /api/mercadopublico, /api/export-excel y
// /api/assistant no verificaban sesión — cualquiera con la URL podía leer
// inteligencia de negocio real (compradores, montos, licitaciones objetivo)
// sin haber iniciado sesión. /api/auth/* queda excluido (login/logout/me
// deben ser accesibles sin sesión previa). /api/sync-relay también queda
// excluido a propósito: lo llama scripts/sync_mercadopublico.py desde
// GitHub Actions (sin sesión de usuario), y solo reenvía datos ya públicos
// de Mercado Público — ver el comentario en esa ruta.
// /api/postulaciones/paquete sigue el mismo patrón que sync-relay: lo llama
// la extensión de navegador de BidCoop (sin sesión de usuario en ese
// contexto, corre sobre mercadopublico.cl), autenticada con su propio token
// (POSTULACION_API_TOKEN) verificado dentro de esa misma ruta.
//
// Esta es una capa, no la única defensa: cada ruta que mute datos sensibles
// (empresas, compradores) debe verificar autorización por rol/empresa por
// su cuenta también — un cambio futuro en el matcher no debe ser el único
// punto de falla. Ver node_modules/next/dist/docs/.../proxy.md.
export async function proxy(req: NextRequest) {
  const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  const sesion = token ? await verificarTokenSesion(token) : null;

  if (!sesion) {
    return NextResponse.json({ error: 'No autenticado. Inicia sesión para acceder a este recurso.' }, { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/((?!auth|sync-relay|postulaciones/paquete).*)']
};
