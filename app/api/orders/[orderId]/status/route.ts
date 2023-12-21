import {db} from '@/lib/db';
import { NextResponse } from 'next/server';

// Zdefiniowanie obsługi żądania PATCH
export async function PATCH(request: Request, { params }: { params: { orderId: string } }) {
  try {
    const { status } = await request.json();

    if (!['NEW', 'IN_PROGRESS', 'COMPLETED'].includes(status)) {
      return new NextResponse("Invalid status", { status: 400 });
    }

    const updatedOrder = await db.order.update({
      where: { id: params.orderId },
      data: { status }
    });

    return new NextResponse(JSON.stringify(updatedOrder), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}