import { Product } from "./product";

export interface ProductRepository {
  list(): Promise<Product[]>;
  add(product: Product): Promise<void>;
}
