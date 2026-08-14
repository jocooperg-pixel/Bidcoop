// Crea el primer usuario real (Administrador del holding) para reemplazar
// el login hardcodeado. Idempotente por email. La contraseña temporal se
// pasa por variable de entorno para no dejarla en el historial de git ni
// en la salida de shell persistente.
import { PrismaClient, RolUsuario } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = process.env.SEED_ADMIN_EMAIL;
  const password = process.env.SEED_ADMIN_PASSWORD;
  if (!email || !password) {
    throw new Error('SEED_ADMIN_EMAIL y SEED_ADMIN_PASSWORD son requeridos.');
  }

  const workspace = await prisma.workspace.findUniqueOrThrow({ where: { id: 'ws-holding-principal' } });
  const passwordHash = await bcrypt.hash(password, 12);

  const usuario = await prisma.usuario.upsert({
    where: { email: email.toLowerCase() },
    update: { passwordHash, activo: true },
    create: {
      workspaceId: workspace.id,
      email: email.toLowerCase(),
      nombre: 'Administrador',
      rol: RolUsuario.ADMIN_HOLDING,
      activo: true,
      passwordHash,
      debeCambiarPassword: true
    }
  });

  console.log(`Usuario creado/actualizado: ${usuario.email} (${usuario.rol})`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
