import { NextResponse } from "next/server";
import axios from "axios";
import { db } from "@/lib/db";
import { getPrices } from "@/actions/get-prices";
import { getAdditionalPrices } from "@/actions/get-additional-prices";
import { calculatePrice } from "@/lib/calculateprice";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("Otrzymane dane z formularza:", data);

    // Weryfikacja reCAPTCHA
    const recaptchaToken = data.gRecaptchaToken;
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const recaptchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`,
      {},
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    if (!recaptchaResponse.data.success || recaptchaResponse.data.score < 0.5) {
      return NextResponse.json({ success: false, message: 'Nieudana weryfikacja reCAPTCHA.' });
    }

    // Pobierz aktualne ceny
    const extendedPrices = await getPrices();
    const standardPrices = extendedPrices.map(ep => ({
      id: ep.id,
      drahtstaerke: ep.drahtstaerke,
      fenceSize: ep.fenceSize,
      color: ep.color,
      price: ep.price
    }));

    const additionalPrices = await getAdditionalPrices();
    const expectedPrice = calculatePrice(data, { standardPrices }, additionalPrices);

    // Sprawdzenie zgodności ceny
    if (data.price !== expectedPrice) {
      throw new Error("Nieprawidłowa cena");
    }

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

    // Pobierz szczegółowe informacje do zamówienia
    const drahtstaerke = await db.drahtstaerke.findFirst({ where: { name: data.drahtstaerke } });
    const fenceSize = await db.fenceSize.findFirst({ where: { name: data.fenceSize } });
    const corner = await db.corner.findFirst();
    const fenceCover = await db.fenceCover.findFirst({ where: { name: data.fenceCover } });
    const color = await db.color.findFirst({ where: { name: data.color } });
    const mounting = await db.mounting.findFirst({ where: { name: data.mounting } });
    const delivery = await db.delivery.findFirst({ where: { name: data.delivery } });
    const gate = data.gateNeeded ? await db.gate.findFirst({ where: { name: data.gate } }) : null;

    if (!drahtstaerke || !fenceSize || !color || !corner || !fenceCover || !mounting || !delivery || (data.gateNeeded && !gate)) {
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
        length: data.length,
        fenceCoverId: fenceCover.id,
        cornerId: corner.id,
        cornerAmount: data.corner,
        mountingId: mounting.id,
        deliveryId: delivery.id,
        gateId: gate?.id,
        gateSize: data.gateSize, // Dodane pole gateSize
    gateWidth: data.gateWidth, // Dodane pole gateWidth
      },
    });

    return NextResponse.json({ success: true, customer, order, orderItem });
  } catch (error) {
    console.error("[Customer/Order/OrderItem]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}