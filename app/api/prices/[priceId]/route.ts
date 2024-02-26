import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";

export async function GET(
    req: Request,
    { params }: { params: { priceId: string } }
  ) {
    try {
      const { userId } = auth(); // Pobieranie ID użytkownika z funkcji autoryzacji
      if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
      }

      // Pobieranie danych dla pojedynczej ceny na podstawie priceId
      const price = await db.price.findUnique({
        where: { id: params.priceId },
        include: {
          drahtstaerke: true,
          fenceSize: true,
          color: true,
        },
      });

      if (!price) {
        return new NextResponse("Price not found", { status: 404 });
      }

      return new NextResponse(JSON.stringify(price), { status: 200 });
    } catch (error) {
      console.error("[GET_PRICE]", error);
      return new NextResponse("Internal Error", { status: 500 });
    }
  }
  
export async function PATCH(
    req: Request,
    { params }: { params: { priceId: string } }
  ) {
    try {
      const { userId } = auth(); // Pobieranie ID użytkownika z funkcji autoryzacji
      const { priceId } = params; // ID ceny do aktualizacji
      const values = await req.json(); // Nowe wartości do zaktualizowania

      if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
      }

      // Zakładamy, że `values` zawiera pole `newPrice` z nową ceną
      const updatedPrice = await db.price.update({
        where: {
          id: priceId,
          // opcjonalnie: userId: userId, jeśli ceny są przypisane do użytkowników
        },
        data: {
          price: values.newPrice, // Aktualizacja ceny
        },
      });

      return new NextResponse(JSON.stringify(updatedPrice), { status: 200 });
    } catch (error) {
      console.error("[UPDATE_PRICE]", error);
      return new NextResponse("Internal Error", { status: 500 });
    }
  }