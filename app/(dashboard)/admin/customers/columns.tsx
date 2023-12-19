'use client';
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'


// Kontynuacja zaktualizowanego typu Customer
export type Customer = {
  id: string;
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  postleitzahl: string;
  stadt: string;
  anmerkungen: string | null;
  // Dodatkowe pola z modelu Prisma, jeśli są potrzebne
};

// Kontynuacja zaktualizowanych kolumn dla Customer
export const customerColumns: ColumnDef<Customer>[] = [
  {
    accessorKey: "vorname",
    header: "Vorname",
  },
  {
    accessorKey: "nachname",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nachname
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "telefon",
    header: "Telefon",
  },
  {
    accessorKey: "postleitzahl",
    header: "Postleitzahl",
  },
  {
    accessorKey: "stadt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Stadt
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Data utworzenia
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const customer = row.original

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
              onClick={() => navigator.clipboard.writeText(customer.id)}
            >
              Copy user ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View custeomers orders</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }

];