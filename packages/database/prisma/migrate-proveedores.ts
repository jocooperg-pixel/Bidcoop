// Migración P0 — providersData.ts (155 proveedores reales, extraídos de
// archivos de adjudicación de Mercado Público) hacia Postgres. Reversible:
// solo LEE la fuente actual, upsert por rut. fuenteTipo queda MANUAL
// (extraído de archivos, no de la API pública en vivo) y fechaValidacion
// null — nadie ha validado formalmente este directorio todavía, aunque los
// datos en sí sean reales.
import { PrismaClient, FuenteTipo } from '@prisma/client';
import * as path from 'path';

const providersDataPath = path.join(__dirname, '../../../src/app/providersData.ts');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { listadoProveedores } = require(providersDataPath);

const prisma = new PrismaClient();

interface VentaFuente {
  articulo: string;
  precio: number;
  compradorRegion: string;
  modalidad: string;
}

interface ProveedorFuente {
  rut: string;
  razonSocial: string;
  tipoEmpresa: string;
  comuna: string;
  region: string;
  rubro: string;
  email: string;
  telefono: string;
  representante: string;
  web: string;
  ventas: VentaFuente[];
  file?: string;
}

async function main() {
  const proveedores: ProveedorFuente[] = listadoProveedores;
  const workspace = await prisma.workspace.findUniqueOrThrow({ where: { id: 'ws-holding-principal' } });

  const reporte = { total: proveedores.length, creados: 0, actualizados: 0, omitidos: 0, motivosOmision: [] as string[], ventasCreadas: 0 };

  for (const p of proveedores) {
    if (!p.rut || !p.razonSocial) {
      reporte.omitidos++;
      reporte.motivosOmision.push(`Sin rut o razón social: ${JSON.stringify(p).slice(0, 80)}`);
      continue;
    }

    const existente = await prisma.proveedor.findUnique({ where: { rut: p.rut } });

    const proveedor = await prisma.proveedor.upsert({
      where: { rut: p.rut },
      update: {
        razonSocial: p.razonSocial,
        tipoEmpresa: p.tipoEmpresa || null,
        comuna: p.comuna || null,
        region: p.region || null,
        representante: p.representante || null,
        sitioWeb: p.web || null,
        rubros: p.rubro ? [p.rubro] : [],
        contactoEmail: p.email || null,
        contactoTelefono: p.telefono || null
      },
      create: {
        workspaceId: workspace.id,
        rut: p.rut,
        razonSocial: p.razonSocial,
        tipoEmpresa: p.tipoEmpresa || null,
        comuna: p.comuna || null,
        region: p.region || null,
        representante: p.representante || null,
        sitioWeb: p.web || null,
        rubros: p.rubro ? [p.rubro] : [],
        contactoEmail: p.email || null,
        contactoTelefono: p.telefono || null,
        fuenteTipo: FuenteTipo.MANUAL
      }
    });

    if (existente) reporte.actualizados++;
    else reporte.creados++;

    // Ventas históricas — solo si no existen aún (no recrear en cada re-run)
    const ventasExistentes = await prisma.ventaHistoricaProveedor.count({ where: { proveedorId: proveedor.id } });
    if (ventasExistentes === 0 && Array.isArray(p.ventas)) {
      for (const v of p.ventas) {
        if (!v.articulo || !v.precio) continue;
        await prisma.ventaHistoricaProveedor.create({
          data: {
            proveedorId: proveedor.id,
            articulo: v.articulo,
            precio: v.precio,
            compradorRegion: v.compradorRegion || null,
            modalidad: v.modalidad || null,
            fuenteTipo: FuenteTipo.MANUAL,
            rawSourceId: p.file || null
          }
        });
        reporte.ventasCreadas++;
      }
    }
  }

  console.log('\n=== REPORTE DE MIGRACIÓN DE PROVEEDORES ===');
  console.log(JSON.stringify(reporte, null, 2));

  const totalEnDB = await prisma.proveedor.count();
  const totalVentas = await prisma.ventaHistoricaProveedor.count();
  console.log(`\nTotal proveedores en base de datos: ${totalEnDB}`);
  console.log(`Total ventas históricas en base de datos: ${totalVentas}`);
}

main()
  .catch((e) => {
    console.error('ERROR EN MIGRACIÓN:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
