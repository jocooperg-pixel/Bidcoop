// Daily Synchronization Background Worker - Licitia AI
import cron from 'node-cron';
import { prisma } from '@licitia/database';
import { MercadoPublicoClient } from '@licitia/mp-client';

const mpClient = new MercadoPublicoClient();

// Sync function executing daily data updates
async function runSynchronizationPipeline() {
  console.log('[Worker] Iniciando ciclo de sincronización diaria con Mercado Público...');
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const fechaQuery = `${dd}${mm}${yyyy}`;

  try {
    // 1. Fetch daily biddings listing
    console.log(`[Worker] Consultando licitaciones para la fecha: ${fechaQuery}`);
    const rawData = await mpClient.fetchLicitaciones({ fecha: fechaQuery });
    const payload = rawData as any;

    if (payload && payload.Cantidad > 0) {
      console.log(`[Worker] Se encontraron ${payload.Cantidad} licitaciones. Sincronizando registros en base de datos...`);
      
      // Iterate and store in PostgreSQL
      for (const lic of payload.Listado || []) {
        await prisma.licitacion.upsert({
          where: { codigo: lic.CodigoExterno },
          update: {
            titulo: lic.Nombre,
            estado: lic.Estado,
            fechaCierre: new Date(lic.FechaCierre),
          },
          create: {
            codigo: lic.CodigoExterno,
            titulo: lic.Nombre,
            estado: lic.Estado,
            rubro: 'Insumos Clínicos y Oficina',
            region: 'Metropolitana de Santiago',
            montoEstimado: lic.MontoEstimado || 0,
            fechaCierre: new Date(lic.FechaCierre),
          }
        });
      }
      console.log('[Worker] Sincronización de licitaciones finalizada con éxito.');
    } else {
      console.log('[Worker] No se registraron nuevas licitaciones públicas hoy.');
    }
  } catch (error) {
    console.error('[Worker] Error crítico en el pipeline de sincronización:', error);
  }
}

// Schedule task to run every day at midnight
console.log('[Worker] Iniciando planificador de tareas cron...');
cron.schedule('0 0 * * *', () => {
  runSynchronizationPipeline();
});

// Run once on startup for debugging/seeding purposes
runSynchronizationPipeline();
