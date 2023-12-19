'use client';

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown, Circle, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Drahtstaerke, FenceSize, Color,  } from '@prisma/client';

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
    accessorKey: "customer.vorname",
    id: "customerFirstName",
    header: "First Name",
  },
  {
    accessorKey: "customer.nachname",
    id: "customerLastName",
    header: "Last Name",
  },
  {
    accessorKey: "customer.stadt",
    id: "customerCity",
    header: "City",
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
    id: 'actions',
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(row.original.id)}
            >
              Copy order ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View order details</DropdownMenuItem>
            <DropdownMenuItem>Change status</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];