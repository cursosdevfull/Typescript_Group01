import { Product } from "../domain/product";
import { ProductRepository } from "../domain/product.repository";

export class ProductApplication {
  constructor(private readonly repository: ProductRepository) {}

  async list() {
    return this.repository.list();
  }

  async add(product: Product) {
    return this.repository.add(product);
  }
}
