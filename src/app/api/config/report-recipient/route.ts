import { NextRequest, NextResponse } from 'next/server';
import { obtenerSesionDesdeRequest } from '../../../utils/session';

/**
 * GET /api/config/report-recipient
 * Entrega el correo de destino configurado para reportes (para precargar
 * el formulario de ReportsNotificationsModule). Antes este correo personal
 * vivía hardcodeado en ~14 lugares de código fuente público — cualquiera
 * podía leerlo directamente en GitHub. Ahora vive solo en la variable de
 * entorno REPORT_RECIPIENT_EMAIL (nunca committeada) y se entrega únicamente
 * a sesiones autenticadas.
 */
export async function GET(req: NextRequest) {
  const sesion = await obtenerSesionDesdeRequest(req);
  if (!sesion) {
    return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
  }
  return NextResponse.json({ email: process.env.REPORT_RECIPIENT_EMAIL || '' });
}
