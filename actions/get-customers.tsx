import { db } from "@/lib/db";
import formatDate from "@/lib/utils";
import { Customer } from "@prisma/client";

// Nowy interfejs bez pola createdAt
interface CustomerData extends Omit<Customer, 'createdAt' | 'updatedAt'> {}

// Rozszerzony interfejs z nowym typem dla createdAt
export interface ExtendedCustomer extends CustomerData {
  createdAt: string; // Sformatowana data jako string
  orderIds: string[]; // Tablica identyfikatorów zamówień
}

export const getCustomers = async (): Promise<ExtendedCustomer[]> => {
  try {
    const customers = await db.customer.findMany({
      include: {
        orders: {
          select: {
            id: true, // Pobieramy tylko identyfikatory zamówień
          },
        },
      },
    });

    // Przekształć wyniki, aby uwzględnić tylko identyfikatory zamówień i sformatowaną datę
    return customers.map(customer => ({
        ...customer,
        createdAt: formatDate(customer.createdAt),
        orderIds: customer.orders.map(order => order.id),
      }));
  } catch (error) {
    console.error("[GET_CUSTOMERS]", error);
    throw new Error("Błąd podczas pobierania danych klientów");
  }
};