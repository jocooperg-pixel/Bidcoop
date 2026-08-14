import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@bidcoop/database';
import { obtenerSesionDesdeRequest } from '../../utils/session';

/**
 * GET /api/db-compradores
 * Directorio CRM de compradores reales (organismos de Mercado Público),
 * agregado desde las oportunidades ya migradas a Postgres. riesgo viene de
 * Comprador.riesgo, que nunca se inicializa en "Bajo" — "Sin evaluar" hasta
 * que exista una metodología real registrada en riesgoMetodologia.
 *
 * Separación por empresa: mismo criterio que /api/db-oportunidades —
 * ADMIN_HOLDING ve todos los compradores; otros roles solo ven compradores
 * con al menos una oportunidad vinculada a sus empresas asignadas.
 */
export async function GET(req: NextRequest) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }

    const esConsolidado = sesion.rol === 'ADMIN_HOLDING';
    const filtroOportunidad = esConsolidado
      ? {}
      : { empresas: { some: { empresaId: { in: sesion.empresaIds } } } };

    const compradores = await prisma.comprador.findMany({
      where: esConsolidado ? {} : { oportunidades: { some: filtroOportunidad } },
      include: {
        oportunidades: {
          where: filtroOportunidad,
          select: { codigo: true, montoEstimado: true, fechaCierre: true, estado: true, sincronizadoEn: true }
        }
      },
      orderBy: { nombre: 'asc' }
    });

    const directorio = compradores.map(c => {
      const activas = c.oportunidades.filter(o => !['VENCIDA', 'CANCELADA', 'DESIERTA', 'ARCHIVADA'].includes(o.estado));
      const montoTotalEstimado = c.oportunidades.reduce((sum, o) => sum + (o.montoEstimado ? Number(o.montoEstimado) : 0), 0);
      const ultima = c.oportunidades.reduce<typeof c.oportunidades[number] | null>((max, o) => {
        if (!o.sincronizadoEn) return max;
        if (!max || !max.sincronizadoEn || o.sincronizadoEn > max.sincronizadoEn) return o;
        return max;
      }, null);

      return {
        id: c.id,
        nombre: c.nombre,
        rut: c.rut,
        riesgo: c.riesgo,
        riesgoMetodologia: c.riesgoMetodologia,
        contactoEmail: c.contactoEmail,
        contactoTelefono: c.contactoTelefono,
        totalOportunidades: c.oportunidades.length,
        oportunidadesActivas: activas.length,
        montoTotalEstimado,
        ultimaActividad: ultima?.sincronizadoEn ?? null
      };
    });

    return NextResponse.json({ vistaConsolidada: esConsolidado, total: directorio.length, compradores: directorio });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al consultar compradores: ${msg}` }, { status: 500 });
  }
}
