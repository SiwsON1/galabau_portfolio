import { getOrderById, ExtendedOrder } from "@/actions/get-order"; // Importuj funkcję do pobierania zamówienia
import { OrderDetails } from "./order-details";

const OrderPage = async ({
  params
}: {
  params: { orderId: string }
}) => {
  // Użyj funkcji getOrderById do pobrania zamówienia o określonym orderId
  const order: ExtendedOrder | null = await getOrderById(params.orderId);

  if (!order) {
    // Jeśli zamówienie nie zostało znalezione, możesz wyświetlić odpowiedni komunikat lub przekierować użytkownika
    return (
      <div className="flex-col">
        <div className="flex-1 p-8 pt-6">
          <p>Order not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        {/* Wyświetl szczegóły zamówienia za pomocą komponentu OrderDetails */}
        <OrderDetails order={order} />
      </div>
    </div>
  );
}

export default OrderPage;