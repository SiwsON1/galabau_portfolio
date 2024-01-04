import React from 'react';
import { useFormContext } from "react-hook-form";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
// TODO dodać type formData z z.infer , nie stosować any
  interface OrderSummaryProps {
    price: number;
    formData: any; // Staraj się unikać 'any', lepiej zdefiniować dokładny typ
  }

  export function OrderSummary({ price, formData }: OrderSummaryProps) {
    return (
      <Table className='w-1/2 mx-auto'>
        <TableCaption>Podsumowanie zamówienia</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-xl">Nazwa opcji</TableHead>
            <TableHead className="text-right text-xl">Wartość</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Color</TableCell>
            <TableCell className="text-right">{formData.color}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Size</TableCell>
            <TableCell className="text-right">{formData.fenceSize}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Length</TableCell>
            <TableCell className="text-right">{formData.length}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Drahtstärke</TableCell>
            <TableCell className="text-right">{formData.drahtstaerke}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Corners</TableCell>
            <TableCell className="text-right">{formData.corner}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Mounting Type</TableCell>
            <TableCell className="text-right">{formData.mounting}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Gate</TableCell>
            <TableCell className="text-right">{formData.gate}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Delivery</TableCell>
            <TableCell className="text-right">{formData.delivery}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Amount</TableCell>
            <TableCell className="text-right">{price} €</TableCell>
          </TableRow>

        </TableBody>
      </Table>
    );
  }