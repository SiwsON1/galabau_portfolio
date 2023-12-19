import { db } from "@/lib/db";
import formatDate from "@/lib/utils";
import { Order, OrderItem, Drahtstaerke, FenceSize, Color, Customer, OrderStatus } from "@prisma/client";

export interface ExtendedOrderItem extends OrderItem {
  drahtstaerke: Drahtstaerke;
  fenceSize: FenceSize;
  color: Color;
}

export interface ExtendedOrder {
    id: string;
    customerId: string;
    status: OrderStatus;
    createdAt: string; // Zmieniamy typ na string
    updatedAt: string; // Zmieniamy typ na string
    customer: {
      vorname: string;
      nachname: string;
      stadt: string;
      // Dodatkowe pola klienta, jeśli są potrzebne
    };
    items: ExtendedOrderItem[];
  }

export const getOrders = async (): Promise<ExtendedOrder[]> => {
  try {
    const orders = await db.order.findMany({
      include: {
        items: {
          include: {
            drahtstaerke: true,
            fenceSize: true,
            color: true,
          },
        },
        customer: true, // Dołączamy pełne informacje o kliencie
      },
    });

    return orders.map(order => ({
      ...order,
      createdAt: formatDate(order.createdAt),
      updatedAt: formatDate(order.updatedAt),
      items: order.items.map(item => ({
        ...item,
        drahtstaerke: item.drahtstaerke,
        fenceSize: item.fenceSize,
        color: item.color,
      })),
      customer: order.customer, // Przypisanie informacji o kliencie
    }));
  } catch (error) {
    console.error("[GET_ORDERS]", error);
    throw new Error("Błąd podczas pobierania zamówień");
  }
};