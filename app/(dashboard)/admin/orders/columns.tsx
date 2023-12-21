'use client';

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown, Circle, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import toast from "react-hot-toast";
import {  useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Drahtstaerke, FenceSize, Color,  } from '@prisma/client';
import CellActions from "./cell-action";

const statusIcons = {
    NEW: Circle,
    IN_PROGRESS: AlertCircle,
    COMPLETED: CheckCircle,
  };

  type OrderStatus = 'NEW' | 'IN_PROGRESS' | 'COMPLETED';

// Typ dla zamówienia
export type Order = {
  id: string;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
  customer: {
    vorname: string;
    nachname: string;
    stadt: string;
  };
  items: OrderItem[];
};

// Typ dla elementu zamówienia
export type OrderItem = {
  drahtstaerke: Drahtstaerke;
  fenceSize: FenceSize;
  color: Color;
  totalPrice: number;
};



// Kolumny dla tabeli zamówień
export const orderColumns: ColumnDef<Order>[] = [

    {
        accessorKey: "status",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Status
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
        cell: ({ row }) => {
          const status = row.getValue("status") as 'NEW' | 'IN_PROGRESS' | 'COMPLETED';
          const StatusIcon = statusIcons[status];
          return (
            <div className="flex items-center">
              {StatusIcon && <StatusIcon className="mr-2 h-4 w-4 text-muted-foreground" />}
              <span>{status}</span>
            </div>
          );
        },
        filterFn: (row, columnId, filterValue) => {
          // Przefiltruj wiersze na podstawie statusu
          if (filterValue === 'all') return true;
          return row.getValue(columnId) === filterValue;
        },
      },

  {
    accessorKey: "customer.nachname",
    id: "customerLastName",
    header: "Nachname",
  },
  {
    accessorKey: "customer.stadt",
    id: "customerCity",
    header: "Stadt",
  },

  {
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    accessorFn: (order) => order.items.map(item => item.drahtstaerke.name).join(', '),
    id: "drahtstaerkeNames",
    header: "Drahtstärke",
  },
  {
    accessorFn: (order) => order.items.map(item => item.fenceSize.name).join(', '),
    id: "fenceSizeNames",
    header: "Fence Size",
  },
  {
    accessorFn: (order) => order.items.map(item => item.color.name).join(', '),
    id: "colorNames",
    header: "Color",
  },
  {
    accessorFn: (order) => order.items.reduce((total, item) => total + item.totalPrice, 0).toFixed(2),
    id: "totalPrice",
    header: "Total Price",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellActions order={row.original} />
  },
];