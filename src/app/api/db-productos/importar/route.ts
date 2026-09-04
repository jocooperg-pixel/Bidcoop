import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@bidcoop/database';
import * as XLSX from 'xlsx';
import { obtenerSesionDesdeRequest } from '../../../utils/session';

/**
 * POST /api/db-productos/importar
 * Carga masiva de catálogo vía Excel (.xlsx). Primer uso real de la
 * dependencia "xlsx" en el proyecto — estaba instalada pero nunca se
 * importaba en ningún archivo.
 *
 * Formato esperado (encabezados de columna, primera fila): sku, nombre,
 * categoria, precioBase, costoActual, stock. Filas sin sku o nombre se
 * omiten y se reportan como error — nunca se inventa un valor para
 * completar una fila incompleta.
 */
export async function POST(req: NextRequest) {
  try {
    const sesion = await obtenerSesionDesdeRequest(req);
    if (!sesion) {
      return NextResponse.json({ error: 'No autenticado.' }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get('file');
    const empresaNombre = formData.get('empresaNombre');

    if (!(file instanceof File) || file.size === 0) {
      return NextResponse.json({ error: 'Debes adjuntar un archivo .xlsx real.' }, { status: 400 });
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

    const buffer = Buffer.from(await file.arrayBuffer());
    const workbook = XLSX.read(buffer, { type: 'buffer' });
    const primeraHoja = workbook.Sheets[workbook.SheetNames[0]];
    const filas: Record<string, unknown>[] = XLSX.utils.sheet_to_json(primeraHoja, { defval: null });

    let importados = 0;
    const erroresFila: string[] = [];

    for (let i = 0; i < filas.length; i++) {
      const fila = filas[i];
      const sku = String(fila.sku ?? '').trim();
      const nombre = String(fila.nombre ?? '').trim();

      if (!sku || !nombre) {
        erroresFila.push(`Fila ${i + 2}: falta sku o nombre, se omitió.`);
        continue;
      }

      const precioBase = typeof fila.precioBase === 'number' ? fila.precioBase : null;
      const costoActual = typeof fila.costoActual === 'number' ? fila.costoActual : null;
      const stock = typeof fila.stock === 'number' ? Math.round(fila.stock) : null;
      const categoria = fila.categoria != null ? String(fila.categoria).trim() : null;

      await prisma.producto.upsert({
        where: { empresaId_sku: { empresaId: empresa.id, sku } },
        update: { nombre, categoria, precioBase, costoActual, stock },
        create: { empresaId: empresa.id, sku, nombre, categoria, precioBase, costoActual, stock }
      });
      importados++;
    }

    return NextResponse.json({ importados, totalFilas: filas.length, erroresFila });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: `Error al importar catálogo: ${msg}` }, { status: 500 });
  }
}
