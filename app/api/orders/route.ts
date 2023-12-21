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
