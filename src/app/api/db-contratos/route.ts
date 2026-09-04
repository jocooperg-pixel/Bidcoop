import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@bidcoop/database';
import { obtenerSesionDesdeRequest } from '../../utils/session';

/**
 * GET /api/db-contratos
 * Seguimiento post-adjudicación (entregas, facturas) de procesos ganados
 * por Aminorte/V-MOCCS. Sin ?oportunidadCodigo devuelve el listado
 * completo (aislado por empresa según sesión); con el parámetro, devuelve
 * el contrato de ese proceso si existe (o null — el llamador decide si
 * ofrece crearlo).
 */
export async function GET(req: NextRequest) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }

    const filtroEmpresa = sesion.rol === 'ADMIN_HOLDING'
      ? {}
      : { empresaId: { in: sesion.empresaIds } };

    const oportunidadCodigo = req.nextUrl.searchParams.get('oportunidadCodigo');

    if (oportunidadCodigo) {
      const contrato = await prisma.contrato.findFirst({
        where: { ...filtroEmpresa, oportunidadCodigo },
        include: {
          entregas: { orderBy: { fecha: 'asc' } },
          facturas: { orderBy: { fecha: 'asc' } },
          empresa: { select: { nombre: true } },
          creadoPor: { select: { nombre: true, email: true } },
          comprador: { select: { id: true, nombre: true, riesgo: true } }
        }
      });
      return NextResponse.json({ contrato });
    }

    const contratos = await prisma.contrato.findMany({
      where: filtroEmpresa,
      include: {
        entregas: { select: { estado: true } },
        facturas: { select: { estado: true } },
        empresa: { select: { nombre: true } },
        comprador: { select: { id: true, nombre: true, riesgo: true } }
      },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json({
      total: contratos.length,
      contratos: contratos.map(c => ({
        id: c.id,
        oportunidadCodigo: c.oportunidadCodigo,
        oportunidadTitulo: c.oportunidadTitulo,
        empresa: c.empresa.nombre,
        fechaInicio: c.fechaInicio,
        plazoEntregaReal: c.plazoEntregaReal,
        comprador: c.comprador ? { id: c.comprador.id, nombre: c.comprador.nombre, riesgo: c.comprador.riesgo } : null,
        totalEntregas: c.entregas.length,
        entregasPendientes: c.entregas.filter(e => e.estado === 'PENDIENTE').length,
        totalFacturas: c.facturas.length,
        facturasPendientes: c.facturas.filter(f => f.estado === 'PENDIENTE').length
      }))
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al consultar contratos: ${msg}` }, { status: 500 });
  }
}

/**
 * POST /api/db-contratos
 * Crea el seguimiento de contrato para un proceso ya adjudicado.
 * plazoEntregaReal y fechaInicio los ingresa el usuario a partir del
 * documento real de adjudicación — nunca inferidos.
 */
export async function POST(req: NextRequest) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }

    const body = await req.json().catch(() => null);
    const { oportunidadCodigo, oportunidadTitulo, empresaNombre, fechaInicio, plazoEntregaReal } = body || {};

    if (typeof oportunidadCodigo !== 'string' || !oportunidadCodigo.trim()) {
      return NextResponse.json({ error: 'Falta oportunidadCodigo.' }, { status: 400 });
    }
    if (typeof oportunidadTitulo !== 'string' || !oportunidadTitulo.trim()) {
      return NextResponse.json({ error: 'Falta oportunidadTitulo.' }, { status: 400 });
    }
    if (typeof empresaNombre !== 'string' || !empresaNombre.trim()) {
      return NextResponse.json({ error: 'Falta empresaNombre.' }, { status: 400 });
    }

    const empresa = await prisma.empresa.findFirst({ where: { nombre: empresaNombre } });
    if (!empresa) {
      return NextResponse.json({ error: `No existe la empresa "${empresaNombre}".` }, { status: 404 });
    }
    if (sesion.rol !== 'ADMIN_HOLDING' && !sesion.empresaIds.includes(empresa.id)) {
      return NextResponse.json({ error: 'No autorizado para esta empresa.' }, { status: 403 });
    }

    // Resuelve compradorId automáticamente desde la Oportunidad real en
    // Postgres, si existe — esa tabla es una copia parcial (ver comentario
    // en schema.prisma), así que muchos códigos no van a estar ahí; en ese
    // caso o si la oportunidad no tiene comprador asociado, queda null.
    // Nunca se inventa un comprador ni se resuelve por nombre/heurística.
    const oportunidadReal = await prisma.oportunidad.findFirst({
      where: { codigo: oportunidadCodigo.trim(), workspaceId: sesion.workspaceId },
      select: { compradorId: true }
    });

    const contrato = await prisma.contrato.create({
      data: {
        oportunidadCodigo: oportunidadCodigo.trim(),
        oportunidadTitulo: oportunidadTitulo.trim(),
        empresaId: empresa.id,
        fechaInicio: typeof fechaInicio === 'string' && fechaInicio ? new Date(fechaInicio) : null,
        plazoEntregaReal: typeof plazoEntregaReal === 'string' && plazoEntregaReal.trim() ? plazoEntregaReal.trim() : null,
        creadoPorUsuarioId: sesion.usuarioId,
        compradorId: oportunidadReal?.compradorId ?? null
      },
      include: { entregas: true, facturas: true, empresa: { select: { nombre: true } }, comprador: { select: { id: true, nombre: true, riesgo: true } } }
    });

    return NextResponse.json({ contrato });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    if (msg.includes('Unique constraint')) {
      return NextResponse.json({ error: 'Ya existe un seguimiento de contrato para este proceso.' }, { status: 409 });
    }
    return NextResponse.json({ error: `Error al crear contrato: ${msg}` }, { status: 500 });
  }
}
