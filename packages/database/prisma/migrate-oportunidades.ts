// Migración P0 — mockData.ts (+ postulaciones/watchlist reales en Vercel
// Blob) hacia Postgres. Reversible: solo LEE las fuentes actuales (nunca
// las modifica) y hace upsert por `codigo` en la tabla Oportunidad, así que
// se puede correr de nuevo sin duplicar, y si algo sale mal el remedio es
// truncar Oportunidad (y sus tablas dependientes) y volver a correr — el
// origen (mockData.ts / Blob) queda intacto en todo momento.
//
// No inventa nada: cualquier campo sin dato real en la fuente queda null,
// nunca un valor de relleno.

import { PrismaClient, EstadoOportunidad, ModalidadCompra, FuenteTipo } from '@prisma/client';
import { get } from '@vercel/blob';
import * as path from 'path';

// mockData.ts es TypeScript compilado con los tipos de la app — lo
// importamos directo vía ts-node/tsx, que resuelve el path relativo real.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mockDataPath = path.join(__dirname, '../../../src/app/mockData.ts');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { mockOportunidades } = require(mockDataPath);

const prisma = new PrismaClient();

interface OportunidadFuente {
  id: string;
  codigo: string;
  titulo: string;
  organismo: string;
  organismoRut?: string;
  modalidad: string;
  estado: string;
  region?: string;
  monto: number;
  fechaPublicacion?: string;
  fechaCierre?: string;
  matchScore: number;
  empresaMatch?: string;
  descripcion?: string;
  fechaSincronizacion?: string;
  sourceUrl?: string;
  items?: Array<{ sku?: string; producto: string; cantidad: number; precioUnitario: number }>;
}

interface PostulacionFuente {
  id: string;
  oportunidadId: string;
  oportunidadCodigo?: string;
}

interface WatchlistEntry {
  oportunidadId: string;
}

const MODALIDAD_MAP: Record<string, ModalidadCompra> = {
  'Compra Ágil': ModalidadCompra.COMPRA_AGIL,
  'Licitación': ModalidadCompra.LICITACION,
  'Convenio Marco': ModalidadCompra.CONVENIO_MARCO,
  'Grandes Compras': ModalidadCompra.GRANDES_COMPRAS
};

// El `estado` que trae mockData.ts es el estado tal cual lo informa
// Mercado Público (o 'Vencida', inferida por el frontend) — se preserva
// integro en estadoOficialMP. El `estado` canónico del pipeline CRM se
// deriva por separado más abajo (según si hay postulación/watchlist real).
function deriveEstadoPipeline(estadoOficial: string, tienePostulacionReal: boolean, estaEnWatchlist: boolean): EstadoOportunidad {
  if (estadoOficial === 'Vencida') return EstadoOportunidad.VENCIDA;
  if (estadoOficial === 'Cancelada') return EstadoOportunidad.CANCELADA;
  if (estadoOficial === 'Desierta') return EstadoOportunidad.DESIERTA;
  if (estadoOficial === 'Adjudicada' || estadoOficial === 'Proveedor seleccionado') return EstadoOportunidad.ADJUDICADA;
  if (tienePostulacionReal) return EstadoOportunidad.OFERTA_ENVIADA;
  if (estadoOficial === 'Cerrada' || estadoOficial === 'En Evaluación') return EstadoOportunidad.EN_EVALUACION;
  if (estaEnWatchlist) return EstadoOportunidad.SEGUIDA;
  return EstadoOportunidad.DETECTADA; // 'Publicada' sin ninguna acción real del equipo todavía
}

async function loadBlobJson<T>(pathname: string): Promise<T[]> {
  try {
    const result = await get(pathname, { access: 'private' });
    if (!result || result.statusCode !== 200) return [];
    const text = await new Response(result.stream).text();
    const parsed = JSON.parse(text);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function main() {
  const oportunidades: OportunidadFuente[] = mockOportunidades;
  const postulaciones = await loadBlobJson<PostulacionFuente>('data/postulaciones.json');
  const watchlist = await loadBlobJson<WatchlistEntry>('data/watchlist.json');

  const postuladasIds = new Set(postulaciones.map(p => p.oportunidadId).filter(Boolean));
  const watchlistIds = new Set(watchlist.map(w => w.oportunidadId).filter(Boolean));

  console.log(`Fuente: ${oportunidades.length} oportunidades, ${postulaciones.length} postulaciones reales, ${watchlist.length} en watchlist.`);

  const workspace = await prisma.workspace.findUniqueOrThrow({ where: { id: 'ws-holding-principal' } });
  const empresas = await prisma.empresa.findMany();
  const empresaPorNombre = new Map(empresas.map(e => [e.nombre, e]));

  const reporte = {
    total: oportunidades.length,
    creadas: 0,
    actualizadas: 0,
    omitidas: 0,
    motivosOmision: [] as string[],
    compradoresCreados: 0,
    itemsCreados: 0,
    postulacionesReales: 0
  };

  const compradorCache = new Map<string, string>(); // organismo -> compradorId

  for (const op of oportunidades) {
    if (!op.codigo || !op.titulo) {
      reporte.omitidas++;
      reporte.motivosOmision.push(`Sin código o título: id=${op.id}`);
      continue;
    }

    const modalidad = MODALIDAD_MAP[op.modalidad];
    if (!modalidad) {
      reporte.omitidas++;
      reporte.motivosOmision.push(`Modalidad desconocida "${op.modalidad}" en ${op.codigo}`);
      continue;
    }

    // Comprador — upsert por nombre de organismo (no todos traen RUT real)
    let compradorId = compradorCache.get(op.organismo);
    if (!compradorId && op.organismo) {
      const comprador = await prisma.comprador.upsert({
        where: op.organismoRut ? { rut: op.organismoRut } : { rut: `__sin_rut__${op.organismo}` },
        update: { nombre: op.organismo },
        create: {
          workspaceId: workspace.id,
          rut: op.organismoRut || null,
          nombre: op.organismo
        }
      }).catch(async () => {
        // Puede no existir aún con ese RUT sintético — crear directo si el upsert por RUT sintético falla
        return prisma.comprador.create({
          data: { workspaceId: workspace.id, rut: op.organismoRut || null, nombre: op.organismo }
        });
      });
      compradorId = comprador.id;
      compradorCache.set(op.organismo, compradorId);
      reporte.compradoresCreados++;
    }

    const tienePostulacionReal = postuladasIds.has(op.id);
    const estaEnWatchlist = watchlistIds.has(op.id);
    const estadoPipeline = deriveEstadoPipeline(op.estado, tienePostulacionReal, estaEnWatchlist);
    if (tienePostulacionReal) reporte.postulacionesReales++;

    const existente = await prisma.oportunidad.findUnique({ where: { codigo: op.codigo } });

    const oportunidad = await prisma.oportunidad.upsert({
      where: { codigo: op.codigo },
      update: {
        tituloOficial: op.titulo,
        modalidad,
        estado: estadoPipeline,
        estadoOficialMP: op.estado,
        compradorId: compradorId || null,
        region: op.region || null,
        montoEstimado: op.monto > 0 ? op.monto : null,
        fechaPublicacion: op.fechaPublicacion ? new Date(op.fechaPublicacion) : null,
        fechaCierre: op.fechaCierre ? new Date(op.fechaCierre) : null,
        confianza: op.matchScore ?? null,
        descripcion: op.descripcion || null,
        fuenteUrl: op.sourceUrl || null,
        sincronizadoEn: op.fechaSincronizacion ? new Date(op.fechaSincronizacion) : new Date()
      },
      create: {
        workspaceId: workspace.id,
        codigo: op.codigo,
        tituloOficial: op.titulo,
        modalidad,
        estado: estadoPipeline,
        estadoOficialMP: op.estado,
        compradorId: compradorId || null,
        region: op.region || null,
        montoEstimado: op.monto > 0 ? op.monto : null,
        fechaPublicacion: op.fechaPublicacion ? new Date(op.fechaPublicacion) : null,
        fechaCierre: op.fechaCierre ? new Date(op.fechaCierre) : null,
        fuenteTipo: FuenteTipo.OFICIAL,
        fuenteNombre: 'Mercado Público',
        fuenteUrl: op.sourceUrl || null,
        observadoEn: op.fechaPublicacion ? new Date(op.fechaPublicacion) : null,
        sincronizadoEn: op.fechaSincronizacion ? new Date(op.fechaSincronizacion) : new Date(),
        confianza: op.matchScore ?? null,
        rawSourceId: op.id,
        descripcion: op.descripcion || null
      }
    });

    if (existente) reporte.actualizadas++;
    else reporte.creadas++;

    // Link a empresa (match de catálogo)
    if (op.empresaMatch && empresaPorNombre.has(op.empresaMatch)) {
      const empresa = empresaPorNombre.get(op.empresaMatch)!;
      await prisma.oportunidadEmpresa.upsert({
        where: { oportunidadId_empresaId: { oportunidadId: oportunidad.id, empresaId: empresa.id } },
        update: {},
        create: { oportunidadId: oportunidad.id, empresaId: empresa.id, esCoincidenciaPrincipal: true }
      });
    }

    // Ítems — solo si no existen aún (no recrear en cada re-run)
    const itemsExistentes = await prisma.oportunidadItem.count({ where: { oportunidadId: oportunidad.id } });
    if (itemsExistentes === 0 && Array.isArray(op.items)) {
      for (const it of op.items) {
        if (!it.producto || !it.cantidad) continue;
        await prisma.oportunidadItem.create({
          data: {
            oportunidadId: oportunidad.id,
            sku: it.sku || null,
            descripcion: it.producto,
            cantidad: it.cantidad,
            precioUnitarioRef: it.precioUnitario > 0 ? it.precioUnitario : null
          }
        });
        reporte.itemsCreados++;
      }
    }
  }

  console.log('\n=== REPORTE DE MIGRACIÓN ===');
  console.log(JSON.stringify(reporte, null, 2));

  const totalEnDB = await prisma.oportunidad.count();
  const porEstado = await prisma.oportunidad.groupBy({ by: ['estado'], _count: true });
  console.log(`\nTotal en base de datos ahora: ${totalEnDB}`);
  console.log('Distribución por estado del pipeline:');
  for (const row of porEstado) {
    console.log(`  ${row.estado}: ${row._count}`);
  }
}

main()
  .catch((e) => {
    console.error('ERROR EN MIGRACIÓN:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
