// Seed inicial — solo Workspace + Empresa, desde la fuente real
// config/empresas.json. No inventa nada: si empresas.json cambia, este
// script es idempotente (upsert por RUT) y refleja el cambio real.
import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

interface EmpresaConfig {
  id: string;
  nombre: string;
  nombreCompleto: string;
  rut: string;
  emailContacto: string;
  activa: boolean;
  catalogoKeywords: string[];
  rubros: string[];
}

async function main() {
  const configPath = path.join(__dirname, '../../../config/empresas.json');
  const raw = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  const empresas: EmpresaConfig[] = raw.empresas;

  const workspace = await prisma.workspace.upsert({
    where: { id: 'ws-holding-principal' },
    update: {},
    create: {
      id: 'ws-holding-principal',
      nombre: 'Holding BidCoop'
    }
  });
  console.log(`Workspace: ${workspace.nombre} (${workspace.id})`);

  for (const e of empresas) {
    const empresa = await prisma.empresa.upsert({
      where: { rut: e.rut },
      update: {
        nombre: e.nombre,
        nombreCompleto: e.nombreCompleto,
        emailContacto: e.emailContacto,
        activa: e.activa,
        catalogoKeywords: e.catalogoKeywords,
        rubros: e.rubros
      },
      create: {
        workspaceId: workspace.id,
        nombre: e.nombre,
        nombreCompleto: e.nombreCompleto,
        rut: e.rut,
        emailContacto: e.emailContacto,
        activa: e.activa,
        catalogoKeywords: e.catalogoKeywords,
        rubros: e.rubros
      }
    });
    console.log(`  Empresa: ${empresa.nombre} (${empresa.rut}) — activa: ${empresa.activa}`);
  }

  console.log('Seed completado.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
