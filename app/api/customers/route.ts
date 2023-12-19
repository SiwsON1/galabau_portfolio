import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  try {
    // Tutaj możesz dodać logikę uwierzytelniania, jeśli jest potrzebna
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    const customers = await db.customer.findMany({
      include: {
        orders: {
          select: {
            id: true, // Pobieramy tylko identyfikatory zamówień
          },
        },
      },
    });

    // Przekształć wyniki
    const data = customers.map(customer => ({
      ...customer,
      orderIds: customer.orders.map(order => order.id),
    }));

    return NextResponse.json(data);
  } catch (error) {
    console.log("[GET_CUSTOMERS]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}