import { Product } from "./product";

export class OrderProduct {
  id: number;
  product_id: number;
  order_id: number;
  quantity: number;
  notes: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  total_price: number;
  product: Product;

  constructor() { }
}
