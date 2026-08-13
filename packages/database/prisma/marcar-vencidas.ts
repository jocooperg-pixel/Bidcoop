// Aplica el mismo criterio de vencimiento que ya usa el frontend
// (src/app/utils/chileTime.ts: fechaCierre < ahora en America/Santiago) a
// las oportunidades recién migradas — la migración solo trajo el estado
// oficial crudo (mayormente 'Publicada'), sin recalcular vencimiento server-
// side. Cada transición queda en CambioEstado (auditoría real, no silenciosa).
import { PrismaClient, EstadoOportunidad, FuenteTipo } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const ahora = new Date(); // timestamps en DB son UTC reales, comparación directa es correcta

  const candidatas = await prisma.oportunidad.findMany({
    where: {
      estado: { in: [EstadoOportunidad.DETECTADA, EstadoOportunidad.EN_ANALISIS, EstadoOportunidad.SEGUIDA, EstadoOportunidad.COTIZANDO, EstadoOportunidad.PREPARANDO_OFERTA] },
      fechaCierre: { lt: ahora }
    }
  });

  console.log(`${candidatas.length} oportunidades con fechaCierre pasado, marcando VENCIDA...`);

  for (const op of candidatas) {
    await prisma.$transaction([
      prisma.oportunidad.update({
        where: { id: op.id },
        data: { estado: EstadoOportunidad.VENCIDA }
      }),
      prisma.cambioEstado.create({
        data: {
          oportunidadId: op.id,
          estadoAnterior: op.estado,
          estadoNuevo: EstadoOportunidad.VENCIDA,
          fuenteTipo: FuenteTipo.DERIVADO,
          campoAdicional: 'fechaCierre',
          valorNuevo: op.fechaCierre?.toISOString() || null
        }
      })
    ]);
  }

  const porEstado = await prisma.oportunidad.groupBy({ by: ['estado'], _count: true });
  console.log('\nDistribución final por estado:');
  for (const row of porEstado) {
    console.log(`  ${row.estado}: ${row._count}`);
  }
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
