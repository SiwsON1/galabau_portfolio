import { db } from "@/lib/db";
import { Customer, Order } from "@prisma/client";

export interface ExtendedCustomer extends Customer {
  orders: Order[]; // Lista zamówień bez szczegółów
}

export const getCustomer = async (customerId: string): Promise<ExtendedCustomer | null> => {
  try {
    const customer = await db.customer.findUnique({
      where: { id: customerId },
      include: {
        orders: true, // Pobieramy listę zamówień
      },
    });

    if (!customer) {
      return null;
    }

    return customer;
  } catch (error) {
    console.error("[GET_CUSTOMER]", error);
    throw new Error("Błąd podczas pobierania danych klienta");
  }
};