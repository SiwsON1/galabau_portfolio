import { z } from 'zod';
import { FormDataSchema } from './schema';
import { Drahtstaerke, FenceSize, Color, Mounting, Corner, Delivery, Gate,Order, OrderItem, Customer } from '@prisma/client';
export interface ExtendedOrderItem extends OrderItem {
  drahtstaerke: Drahtstaerke;
  fenceSize: FenceSize;
  color: Color;
}

export interface ExtendedOrder extends Order {
  items: ExtendedOrderItem[];
  customer: Customer;
}


export type FormData = z.infer<typeof FormDataSchema>;

export interface PriceData {
  id: string;
  drahtstaerke: Drahtstaerke;
  fenceSize: FenceSize;
  color: Color;
  price: number; // Dodajemy brakujące pole price
  length?: number; // Opcjonalnie, jeśli jest używane
}

export interface AdditionalPriceData {
  corners: Corner[];
  mountings: Mounting[];
  deliveries: Delivery[];
  gates: Gate[];
}