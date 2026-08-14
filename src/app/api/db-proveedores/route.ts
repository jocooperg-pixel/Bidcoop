import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@bidcoop/database';
import { obtenerSesionDesdeRequest } from '../../utils/session';

/**
 * GET /api/db-proveedores
 * Directorio de proveedores reales (extraídos de archivos de adjudicación
 * de Mercado Público, no de la API pública en vivo). fuenteTipo=MANUAL y
 * fechaValidacion=null en todos los registros hasta que alguien del equipo
 * los valide formalmente — el directorio es real, pero no está validado,
 * y la UI debe decirlo, no dar a entender lo contrario.
 *
 * Proveedores es un catálogo compartido del workspace (no pertenece a una
 * empresa específica), así que no aplica el filtro por empresa que sí usa
 * /api/db-oportunidades y /api/db-compradores — solo requiere sesión.
 */
export async function GET(req: NextRequest) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }

    const proveedores = await prisma.proveedor.findMany({
      include: {
        ventasHistoricas: { select: { precio: true } }
      },
      orderBy: { razonSocial: 'asc' }
    });

    const directorio = proveedores.map(p => ({
      id: p.id,
      rut: p.rut,
      razonSocial: p.razonSocial,
      tipoEmpresa: p.tipoEmpresa,
      comuna: p.comuna,
      region: p.region,
      representante: p.representante,
      sitioWeb: p.sitioWeb,
      rubros: p.rubros,
      contactoEmail: p.contactoEmail,
      contactoTelefono: p.contactoTelefono,
      fuenteTipo: p.fuenteTipo,
      fechaValidacion: p.fechaValidacion,
      totalVentasRegistradas: p.ventasHistoricas.length
    }));

    return NextResponse.json({ total: directorio.length, proveedores: directorio });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al consultar proveedores: ${msg}` }, { status: 500 });
  }
}
