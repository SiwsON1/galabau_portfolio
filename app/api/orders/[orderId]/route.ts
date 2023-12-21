import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { Order } from "@prisma/client";

// Pobieranie szczegółów zamówienia na podstawie orderId
export async function GET(request: Request, { query }: { query: { orderId: string } }) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    const { orderId } = query; // Pobierz orderId z parametrów żądania

    if (!orderId) {
      return new NextResponse("Missing orderId", { status: 400 });
    }

    const order = await db.order.findUnique({
      where: {
        id: orderId,
      },
      include: {
        customer: true,
        items: {
          include: {
            drahtstaerke: true,
            fenceSize: true,
            color: true,
          },
        },
      },
    });

    if (!order) {
      return new NextResponse("Order not found", { status: 404 });
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error("[ORDER_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}