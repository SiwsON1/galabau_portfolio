import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  try {
    // Dodaj logikę uwierzytelniania, jeśli jest potrzebna
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    const prices = await db.price.findMany({
      include: {
        drahtstaerke: true,
        fenceSize: true,
        color: true,
      },
    });

    // Opcjonalnie, przekształć wyniki, jeśli jest taka potrzeba
    const data = prices.map(price => ({
      ...price,
      drahtstaerkeName: price.drahtstaerke.name,
      fenceSizeName: price.fenceSize.name,
      colorName: price.color.name,
    }));

    return NextResponse.json(data);
  } catch (error) {
    console.log("[GET_PRICES]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
