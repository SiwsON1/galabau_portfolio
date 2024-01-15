import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function addAbholungOption() {
  await prisma.delivery.create({
    data: {
      name: "Abholung",
      price: 0 // Ustaw cenę dla opcji abholung według własnych potrzeb
    },
  });
  console.log('Opcja abholung została dodana.');
}

addAbholungOption()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });