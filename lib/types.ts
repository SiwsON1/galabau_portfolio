import { Order, OrderItem, Customer, Drahtstaerke, FenceSize, Color } from "@prisma/client";

export interface ExtendedOrderItem extends OrderItem {
  drahtstaerke: Drahtstaerke;
  fenceSize: FenceSize;
  color: Color;
}

export interface ExtendedOrder extends Order {
  items: ExtendedOrderItem[];
  customer: Customer;
}