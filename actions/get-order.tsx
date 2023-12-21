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
    telefon: string;
    // Dodatkowe pola klienta, jeśli są potrzebne
  };
  items: ExtendedOrderItem[];
}

export const getOrderById = async (orderId: string): Promise<ExtendedOrder | null> => {
  try {
    const order = await db.order.findUnique({
      where: {
        id: orderId,
      },
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

    if (!order) {
      return null; // Jeśli zamówienie o podanym orderId nie istnieje, zwracamy null
    }

    return {
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
    };
  } catch (error) {
    console.error("[GET_ORDER_BY_ID]", error);
    throw new Error("Błąd podczas pobierania zamówienia");
  }
};