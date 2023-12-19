import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { db } from "@/lib/db";

// Pobieranie listy zamówień
export async function GET(req: Request) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthenticated", { status: 403 });
        }

        const orders = await db.order.findMany({
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

        return NextResponse.json(orders);
    } catch (error) {
        console.log('[ORDERS_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};

// Aktualizacja statusu zamówienia
export async function PATCH(req: Request, { params }: { params: { orderId: string } }) {
    try {
        const { userId } = auth();
        const { status } = await req.json();

        if (!userId) {
            return new NextResponse("Unauthenticated", { status: 403 });
        }

        if (!params.orderId) {
            return new NextResponse("Order id is required", { status: 400 });
        }

        const updatedOrder = await db.order.update({
            where: { id: params.orderId },
            data: { status },
        });

        return NextResponse.json(updatedOrder);
    } catch (error) {
        console.log('[ORDER_PATCH]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};

// Usuwanie zamówienia
export async function DELETE(req: Request, { params }: { params: { orderId: string } }) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthenticated", { status: 403 });
        }

        if (!params.orderId) {
            return new NextResponse("Order id is required", { status: 400 });
        }

        const deletedOrder = await db.order.delete({
            where: { id: params.orderId },
        });

        return NextResponse.json(deletedOrder);
    } catch (error) {
        console.log('[ORDER_DELETE]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};