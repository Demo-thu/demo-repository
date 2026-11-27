const { spawnSync } = require('node:child_process');
const { PrismaClient } = require('@prisma/client');

async function seedIfEmpty() {
  const prisma = new PrismaClient();
  let userCount;

  try {
    userCount = await prisma.user.count();
  } finally {
    await prisma.$disconnect();
  }

  if (userCount > 0) {
    console.log('Database already has users; skipping demo seed.');
    return;
  }

  const result = spawnSync('npx', ['prisma', 'db', 'seed'], {
    stdio: 'inherit',
    env: process.env,
  });

  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(`Prisma seed failed with exit code ${result.status ?? 'unknown'}.`);
  }
}

seedIfEmpty().catch((error) => {
  console.error('Docker database initialization failed:', error);
  process.exitCode = 1;
});
