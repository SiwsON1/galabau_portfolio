import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  await prisma.corner.create({
    data: {
      name: "standard",
      price: 20
    }
  });

  // Dodajemy Mounting z różnymi typami i cenami
  const mountingTypes = ["type1", "type2", "type3", "type4"];
  const mountingPrices = [5, 10, 15, 20];

  for (let i = 0; i < mountingTypes.length; i++) {
    await prisma.mounting.create({
      data: {
        name: mountingTypes[i],
        price: mountingPrices[i]
      }
    });
  }

  // Dodajemy Delivery
  await prisma.delivery.create({
    data: {
      name: "Montage",
      price: 200
    }
  });

  await prisma.delivery.create({
    data: {
      name: "Lieferung",
      price: 50
    }
  });

  // Dodajemy Gate z różnymi typami i cenami
  const gateTypes = [
    { name: "Einflüglige Toranlage System AC-Typ Light 1", price: 100 },
    { name: "Einflüglige Toranlage System AC-Typ MRL 1", price: 200 },
    { name: "Zweiflüglige Toranlage System AC-Typ SRL 2", price: 300 },
    { name: "Einflüglige Toranlage System AC-Typ SRL 1", price: 400 }
  ];

  for (const gate of gateTypes) {
    await prisma.gate.create({
      data: gate
    });
  }
  // Tworzenie Drahtstaerken
  const drahtstaerke1 = await prisma.drahtstaerke.create({
    data: { name: "6/5/6" },
  });

  const drahtstaerke2 = await prisma.drahtstaerke.create({
    data: { name: "8/6/8" },
  });

  // Tworzenie FenceSizes
  const sizes = ["2.03", "1.83", "1.63", "1.43", "1.23", "1.03"];
  const fenceSizes = await Promise.all(sizes.map(size =>
    prisma.fenceSize.create({ data: { name: size } })
  ));

  // Tworzenie Colors
  const colors = ["zielony", "antrazyt", "ocynk"];
  const colorRecords = await Promise.all(colors.map(color =>
    prisma.color.create({ data: { name: color } })
  ));

  // Ceny dla Drahtstaerke 6/5/6
  const prices1 = [34, 31, 29, 27, 25, 23]; // Zielony i Antrazyt
  const prices2 = [39, 36, 34, 31, 30, 24]; // Ocynk

  for (let i = 0; i < fenceSizes.length; i++) {
    await prisma.price.create({
      data: {
        drahtstaerkeId: drahtstaerke1.id,
        fenceSizeId: fenceSizes[i].id,
        colorId: colorRecords[0].id, // Zielony
        price: prices1[i],
        length: parseInt(sizes[i].replace('.', '')),
      },
    });

    await prisma.price.create({
      data: {
        drahtstaerkeId: drahtstaerke1.id,
        fenceSizeId: fenceSizes[i].id,
        colorId: colorRecords[1].id, // Antrazyt
        price: prices1[i],
        length: parseInt(sizes[i].replace('.', '')),
      },
    });

    await prisma.price.create({
      data: {
        drahtstaerkeId: drahtstaerke1.id,
        fenceSizeId: fenceSizes[i].id,
        colorId: colorRecords[2].id, // Ocynk
        price: prices2[i],
        length: parseInt(sizes[i].replace('.', '')),
      },
    });
  }


  const prices8_6_8 = [51, 46, 43, 39, 36, 32];

  for (let i = 0; i < fenceSizes.length; i++) {
    await prisma.price.create({
      data: {
        drahtstaerkeId: drahtstaerke2.id,
        fenceSizeId: fenceSizes[i].id,
        colorId: colorRecords[0].id, // Zielony dla 8/6/8
        price: prices8_6_8[i],
        length: parseInt(sizes[i].replace('.', '')),
      },
    });

    await prisma.price.create({
      data: {
        drahtstaerkeId: drahtstaerke2.id,
        fenceSizeId: fenceSizes[i].id,
        colorId: colorRecords[1].id, // Antrazyt dla 8/6/8
        price: prices8_6_8[i],
        length: parseInt(sizes[i].replace('.', '')),
      },
    });
  }
  console.log('Seedowanie zakończone.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });