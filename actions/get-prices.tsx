import { db } from "@/lib/db";
import { Price, Drahtstaerke, FenceSize, Color } from "@prisma/client";

export interface ExtendedPrice extends Price {
  drahtstaerke: Drahtstaerke;
  fenceSize: FenceSize;
  color: Color;
}

export const getPrices = async (): Promise<ExtendedPrice[]> => {
  try {
    const prices = await db.price.findMany({
      include: {
        drahtstaerke: true,
        fenceSize: true,
        color: true,
      },
    });
    return prices;
  } catch (error) {
    console.error("[GET_PRICES]", error);
    throw new Error("Błąd podczas pobierania cen");
  }
};