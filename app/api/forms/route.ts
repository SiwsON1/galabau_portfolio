import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("Otrzymane dane z formularza:", data);

    // Znajdź lub utwórz klienta
    let customer = await db.customer.findUnique({
      where: { email: data.email },
    });

    if (!customer) {
      customer = await db.customer.create({
        data: {
          vorname: data.vorname,
          nachname: data.nachname,
          email: data.email,
          telefon: data.telefon,
          postleitzahl: data.postleitzahl,
          stadt: data.stadt,
          anmerkungen: data.anmerkungen,
        },
      });
    }

    // Utwórz zamówienie
    const order = await db.order.create({
      data: {
        customerId: customer.id,
      },
    });

    const drahtstaerke = await db.drahtstaerke.findFirst({
      where: { name: data.drahtstaerke },
    });
    console.log("drahtstaerke:", drahtstaerke);

    const fenceSize = await db.fenceSize.findFirst({
      where: { name: data.fenceSize },
    });
    console.log("fenceSize:", fenceSize);
    const corner = await db.corner.findFirst();
    console.log("cooorner:", corner);


    const fenceCover = await db.fenceCover.findFirst({
      where: { name: data.fenceCover },
    })
    const color = await db.color.findFirst({
      where: { name: data.color },
    });
    console.log("color:", color);


    const mounting = await db.mounting.findFirst({
      where: { name: data.mounting },
    });
    console.log("mounting:", mounting);

    const delivery = await db.delivery.findFirst({
      where: { name: data.delivery },
    });
    console.log("delivery:", delivery);

    const gate = data.gateNeeded ? await db.gate.findFirst({
      where: { name: data.gate },
    }) : null;
    console.log("gate:", gate);

    if (!drahtstaerke || !fenceSize || !color ||!corner|| !fenceCover|| !mounting || !delivery || (data.gateNeeded && !gate)) {
      throw new Error('Nie znaleziono wszystkich wymaganych elementów zamówienia.');
    }

    // Utwórz rekord OrderItem z ID zamiast wartości
    const orderItem = await db.orderItem.create({
      data: {
        orderId: order.id,
        drahtstaerkeId: drahtstaerke.id,
        fenceSizeId: fenceSize.id,
        colorId: color.id,
        totalPrice: data.price,
        length: data.length,
        fenceCoverId:fenceCover.id,
        cornerId: corner.id, // Dodaj to
        cornerAmount: data.corner,
        mountingId: mounting.id, // Zaktualizowano na mountingId
        deliveryId: delivery.id, // Zaktualizowano na deliveryId
        gateId: gate?.id,         // Zaktualizowano na gateId
      },
    });

    return NextResponse.json({ customer, order, orderItem });
  } catch (error) {
    console.error("[Customer/Order/OrderItem]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}