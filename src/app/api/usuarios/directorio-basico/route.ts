import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@bidcoop/database';
import { obtenerSesionDesdeRequest } from '../../../utils/session';

/**
 * GET /api/usuarios/directorio-basico
 * Lista mínima (id, nombre) de usuarios reales del workspace, para
 * selectores como "Encargado de Postulación" en SearchModule. Accesible a
 * cualquier usuario autenticado (a diferencia de /api/usuarios, que es solo
 * ADMIN_HOLDING) — nunca expone email, rol ni empresas. ADMIN_HOLDING ve
 * todos los usuarios activos del workspace; el resto solo ve usuarios que
 * comparten al menos una empresa asignada (mismo criterio de separación que
 * db-compradores/db-oportunidades).
 */
export async function GET(req: NextRequest) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }

    const esConsolidado = sesion.rol === 'ADMIN_HOLDING';
    const usuarios = await prisma.usuario.findMany({
      where: {
        workspaceId: sesion.workspaceId,
        activo: true,
        ...(esConsolidado ? {} : { empresas: { some: { empresaId: { in: sesion.empresaIds } } } })
      },
      select: { id: true, nombre: true },
      orderBy: { nombre: 'asc' }
    });

    return NextResponse.json({ usuarios });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al listar directorio de usuarios: ${msg}` }, { status: 500 });
  }
}
