import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Zakładamy, że data zawiera pełne obiekty z relacji
interface PriceTableProps {
  data: Array<{
    drahtstaerke: { name: string };
    fenceSize: { name: string };
    color: { name: string };
    price: number;
  }>;
}

const PriceTable: React.FC<PriceTableProps> = ({ data }) => {
  return (
    <Table>
      <TableCaption>Current Prices</TableCaption>
      <TableHead>
        <TableRow>
          <TableHeader>Drahtstärke</TableHeader>
          <TableHeader>Fence Size</TableHeader>
          <TableHeader>Color</TableHeader>
          <TableHeader className="text-right">Price</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.drahtstaerke.name}</TableCell>
            <TableCell>{item.fenceSize.name}</TableCell>
            <TableCell>{item.color.name}</TableCell>
            <TableCell className="text-right">{`${item.price} zł`}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PriceTable;