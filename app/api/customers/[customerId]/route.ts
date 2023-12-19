import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import {db} from "@/lib/db";

export async function GET(req: Request, { params }: { params: { customerId: string } }) {
  try {
    if (!params.customerId) {
      return new NextResponse("Customer id is required", { status: 400 });
    }

    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    const customer = await db.customer.findUnique({
      where: { id: params.customerId },
      include: {
        orders: true, // Tutaj możesz dostosować, jakie dane zamówień chcesz pobrać
      },
    });

    if (!customer) {
      return new NextResponse("Customer not found", { status: 404 });
    }

    return NextResponse.json(customer);
  } catch (error) {
    console.log('[CUSTOMER_GET]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};