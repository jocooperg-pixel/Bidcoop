import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@bidcoop/database';
import { obtenerSesionDesdeRequest } from '../../../utils/session';

async function verificarAcceso(contratoId: string, sesion: { rol: string; empresaIds: string[] }) {
  const contrato = await prisma.contrato.findUnique({ where: { id: contratoId } });
  if (!contrato) return { contrato: null, autorizado: false };
  const autorizado = sesion.rol === 'ADMIN_HOLDING' || sesion.empresaIds.includes(contrato.empresaId);
  return { contrato, autorizado };
}

/**
 * POST /api/db-contratos/[id]
 * Agrega una entrega o factura real al contrato (body: { tipo: 'entrega'
 * | 'factura', ...datos }). Todo dato lo ingresa el usuario — nunca se
 * infiere un monto, fecha o estado.
 */
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }
    const { id } = await params;
    const { contrato, autorizado } = await verificarAcceso(id, sesion);
    if (!contrato) return NextResponse.json({ error: 'Contrato no encontrado.' }, { status: 404 });
    if (!autorizado) return NextResponse.json({ error: 'No autorizado.' }, { status: 403 });

    const body = await req.json().catch(() => null);
    const { tipo } = body || {};

    if (tipo === 'entrega') {
      const { fecha, descripcion } = body;
      if (typeof fecha !== 'string' || !fecha) return NextResponse.json({ error: 'Falta fecha.' }, { status: 400 });
      if (typeof descripcion !== 'string' || !descripcion.trim()) return NextResponse.json({ error: 'Falta descripcion.' }, { status: 400 });

      const entrega = await prisma.entrega.create({
        data: { contratoId: id, fecha: new Date(fecha), descripcion: descripcion.trim() }
      });
      return NextResponse.json({ entrega });
    }

    if (tipo === 'factura') {
      const { numero, fecha, monto } = body;
      if (typeof numero !== 'string' || !numero.trim()) return NextResponse.json({ error: 'Falta numero.' }, { status: 400 });
      if (typeof fecha !== 'string' || !fecha) return NextResponse.json({ error: 'Falta fecha.' }, { status: 400 });
      if (typeof monto !== 'number' || monto <= 0) return NextResponse.json({ error: 'Falta un monto real mayor a 0.' }, { status: 400 });

      const factura = await prisma.factura.create({
        data: { contratoId: id, numero: numero.trim(), fecha: new Date(fecha), monto }
      });
      return NextResponse.json({ factura });
    }

    return NextResponse.json({ error: 'tipo debe ser "entrega" o "factura".' }, { status: 400 });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al registrar: ${msg}` }, { status: 500 });
  }
}

/**
 * PATCH /api/db-contratos/[id]
 * Cambia el estado de una entrega o factura ya registrada (body:
 * { tipo: 'entrega'|'factura', itemId, estado }).
 */
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }
    const { id } = await params;
    const { contrato, autorizado } = await verificarAcceso(id, sesion);
    if (!contrato) return NextResponse.json({ error: 'Contrato no encontrado.' }, { status: 404 });
    if (!autorizado) return NextResponse.json({ error: 'No autorizado.' }, { status: 403 });

    const body = await req.json().catch(() => null);
    const { tipo, itemId, estado } = body || {};

    if (tipo === 'entrega') {
      if (!['PENDIENTE', 'ENTREGADO', 'ATRASADO'].includes(estado)) {
        return NextResponse.json({ error: 'Estado de entrega inválido.' }, { status: 400 });
      }
      const entrega = await prisma.entrega.update({ where: { id: itemId, contratoId: id }, data: { estado } });
      return NextResponse.json({ entrega });
    }

    if (tipo === 'factura') {
      if (!['PENDIENTE', 'PAGADA', 'VENCIDA'].includes(estado)) {
        return NextResponse.json({ error: 'Estado de factura inválido.' }, { status: 400 });
      }
      const factura = await prisma.factura.update({ where: { id: itemId, contratoId: id }, data: { estado } });
      return NextResponse.json({ factura });
    }

    return NextResponse.json({ error: 'tipo debe ser "entrega" o "factura".' }, { status: 400 });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al actualizar: ${msg}` }, { status: 500 });
  }
}
