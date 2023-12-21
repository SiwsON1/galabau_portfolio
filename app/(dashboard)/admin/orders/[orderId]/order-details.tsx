import { ExtendedOrder } from "@/actions/get-order";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableHeader,
    TableCaption,
  } from "@/components/ui/table";

  interface OrderDetailsProps {
    order: ExtendedOrder; // Załóżmy, że masz obiekt zamówienia o rozszerzonym typie ExtendedOrder
  }

  export function OrderDetails({ order }: OrderDetailsProps) {
    return (
      <Table>
        <TableCaption>Order Details</TableCaption>
        <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Field</TableHead>
          <TableHead>Value</TableHead>

        </TableRow>
      </TableHeader>
        <TableBody>
          {/* Wiersze dla danych zamówienia */}
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell>{order.status}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>{order.customer.vorname} {order.customer.nachname}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Telefon</TableCell>
            <TableCell>{order.customer.telefon} </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>City</TableCell>
            <TableCell>{order.customer.stadt}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Order Created At</TableCell>
            <TableCell>{order.createdAt}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Order Updated At</TableCell>
            <TableCell>{order.updatedAt}</TableCell>
          </TableRow>
          {/* Wiersze dla każdego elementu zamówienia */}
          {order.items.map((item, index) => (
            <>
              <TableRow key={`item-${index}-1`}>
                <TableCell>Drahtstaerke</TableCell>
                <TableCell>{item.drahtstaerke.name}</TableCell>
              </TableRow>
              <TableRow key={`item-${index}-2`}>
                <TableCell>Fence Size</TableCell>
                <TableCell>{item.fenceSize.name}</TableCell>
              </TableRow>
              <TableRow key={`item-${index}-3`}>
                <TableCell>Fence Length</TableCell>
                <TableCell>{item.length}</TableCell>
              </TableRow>
              <TableRow key={`item-${index}-4`}>
                <TableCell>Color</TableCell>
                <TableCell>{item.color.name}
                </TableCell>
              </TableRow>
              <TableRow key={`item-${index}-5`}>
                <TableCell>Total Price</TableCell>
                <TableCell>{item.totalPrice}</TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    );
  }