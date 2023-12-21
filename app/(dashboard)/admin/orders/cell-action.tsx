import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Order } from "./columns";
import { OrderStatus } from "@prisma/client";
import { Button } from "@/components/ui/button";

interface CellActionsProps {
  order: Order;
}

const CellActions: React.FC<CellActionsProps> = ({ order }) => {
  const router = useRouter();

  const updateOrderStatus = async (orderId: string, newStatus: OrderStatus) => {
    try {
      const response = await fetch(`/api/orders/${orderId}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        toast.success(`Status zamówienia zmieniony na ${newStatus}`);
        router.refresh();
      } else {
        toast.error("Wystąpił błąd podczas zmiany statusu zamówienia");
      }
    } catch (error) {
      toast.error("Nie można połączyć z serwerem");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Działania</DropdownMenuLabel>
        {order.status === "NEW" && (
          <DropdownMenuItem
            onClick={() => updateOrderStatus(order.id, "IN_PROGRESS")}
          >
            Rozpocznij Zlecenie
          </DropdownMenuItem>
        )}
        {order.status === "IN_PROGRESS" && (
          <DropdownMenuItem
            onClick={() => updateOrderStatus(order.id, "COMPLETED")}
          >
            Zakończ Zlecenie
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() =>
            router.push(`/admin/orders/${order.id}`) // Poprawione: dodanie router.push
          }
        >
          Zobacz szczegóły
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(order.id)}
        >
          Skopiuj ID
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CellActions;
