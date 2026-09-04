import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@bidcoop/database';
import { obtenerSesionDesdeRequest } from '../../utils/session';

/**
 * GET /api/db-productos
 * Catálogo real de productos propios (Aminorte/V-MOCCS), persistido en
 * Postgres — reemplaza el catálogo hardcodeado de 22 productos de ejemplo
 * que vivía en src/app/catalog.ts. ADMIN_HOLDING ve el catálogo consolidado
 * de todas las empresas; cualquier otro rol solo ve las suyas (mismo patrón
 * de aislamiento por empresa que /api/db-oportunidades).
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

    const productos = await prisma.producto.findMany({
      where: filtroEmpresa,
      include: { empresa: { select: { nombre: true } } },
      orderBy: [{ empresa: { nombre: 'asc' } }, { nombre: 'asc' }]
    });

    return NextResponse.json({
      total: productos.length,
      productos: productos.map(p => ({
        id: p.id,
        sku: p.sku,
        nombre: p.nombre,
        categoria: p.categoria,
        precioBase: p.precioBase !== null ? Number(p.precioBase) : null,
        costoActual: p.costoActual !== null ? Number(p.costoActual) : null,
        stock: p.stock,
        empresa: p.empresa.nombre,
        actualizadoEn: p.updatedAt
      }))
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al consultar catálogo: ${msg}` }, { status: 500 });
  }
}

/**
 * POST /api/db-productos
 * Crea o actualiza un producto (upsert por sku+empresa). Los campos que el
 * usuario no informa quedan en null/no se tocan — nunca se rellenan con un
 * valor por defecto inventado (ej. stock=0 cuando en realidad no se sabe).
 */
export async function POST(req: NextRequest) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }

    const body = await req.json().catch(() => null);
    const { empresaNombre, sku, nombre, categoria, precioBase, costoActual, stock } = body || {};

    if (typeof empresaNombre !== 'string' || !empresaNombre.trim()) {
      return NextResponse.json({ error: 'Falta empresaNombre.' }, { status: 400 });
    }
    if (typeof sku !== 'string' || !sku.trim()) {
      return NextResponse.json({ error: 'Falta sku.' }, { status: 400 });
    }
    if (typeof nombre !== 'string' || !nombre.trim()) {
      return NextResponse.json({ error: 'Falta nombre.' }, { status: 400 });
    }

    const empresa = await prisma.empresa.findFirst({ where: { nombre: empresaNombre } });
    if (!empresa) {
      return NextResponse.json({ error: `No existe la empresa "${empresaNombre}".` }, { status: 404 });
    }
    if (sesion.rol !== 'ADMIN_HOLDING' && !sesion.empresaIds.includes(empresa.id)) {
      return NextResponse.json({ error: 'No autorizado para esta empresa.' }, { status: 403 });
    }

    const producto = await prisma.producto.upsert({
      where: { empresaId_sku: { empresaId: empresa.id, sku: sku.trim() } },
      update: {
        nombre: nombre.trim(),
        categoria: typeof categoria === 'string' ? categoria.trim() : null,
        precioBase: typeof precioBase === 'number' ? precioBase : null,
        costoActual: typeof costoActual === 'number' ? costoActual : null,
        stock: typeof stock === 'number' ? stock : null
      },
      create: {
        empresaId: empresa.id,
        sku: sku.trim(),
        nombre: nombre.trim(),
        categoria: typeof categoria === 'string' ? categoria.trim() : null,
        precioBase: typeof precioBase === 'number' ? precioBase : null,
        costoActual: typeof costoActual === 'number' ? costoActual : null,
        stock: typeof stock === 'number' ? stock : null
      }
    });

    return NextResponse.json({ producto });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al guardar producto: ${msg}` }, { status: 500 });
  }
}

/**
 * DELETE /api/db-productos?id=...
 */
export async function DELETE(req: NextRequest) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }

    const id = req.nextUrl.searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Falta el parámetro "id".' }, { status: 400 });
    }

    const producto = await prisma.producto.findUnique({ where: { id } });
    if (!producto) {
      return NextResponse.json({ error: 'Producto no encontrado.' }, { status: 404 });
    }
    if (sesion.rol !== 'ADMIN_HOLDING' && !sesion.empresaIds.includes(producto.empresaId)) {
      return NextResponse.json({ error: 'No autorizado para este producto.' }, { status: 403 });
    }

    await prisma.producto.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al eliminar producto: ${msg}` }, { status: 500 });
  }
}
