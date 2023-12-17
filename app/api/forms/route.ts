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

    // Znajdź ID dla drahtstaerke, fenceSize, color
    const drahtstaerke = await db.drahtstaerke.findFirst({
      where: { name: data.drahtstaerke },
    });
    const fenceSize = await db.fenceSize.findFirst({
      where: { name: data.fenceSize },
    });
    const color = await db.color.findFirst({
      where: { name: data.color },
    });

    if (!drahtstaerke || !fenceSize || !color) {
      throw new Error('Nie znaleziono wszystkich wymaganych elementów zamówienia.');
    }

    // Utwórz rekord OrderItem
    const orderItem = await db.orderItem.create({
      data: {
        orderId: order.id,
        drahtstaerkeId: drahtstaerke.id,
        fenceSizeId: fenceSize.id,
        colorId: color.id,
        totalPrice: data.price,
      },
    });

    return NextResponse.json({ customer, order, orderItem });
  } catch (error) {
    console.error("[Customer/Order/OrderItem]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}