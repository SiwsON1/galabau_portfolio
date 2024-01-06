import { db } from "@/lib/db";
import {  Mounting, Corner, Delivery, Gate } from "@prisma/client";

export interface ExtendedAdditionalPrice {
  corners: Corner[];
  mountings: Mounting[];
  deliveries: Delivery[];
  gates: Gate[];
}

export const getAdditionalPrices = async (): Promise<ExtendedAdditionalPrice> => {
  try {
    const corners = await db.corner.findMany();
    const mountings = await db.mounting.findMany();
    const deliveries = await db.delivery.findMany();
    const gates = await db.gate.findMany();

    return { corners, mountings, deliveries, gates };
  } catch (error) {
    console.error("[GET_ADDITIONAL_PRICES]", error);
    throw new Error("Błąd podczas pobierania dodatkowych cen");
  }
};