import { Product } from "../domain/product";
import { ProductRepository } from "../domain/product.repository";

const products = [
  new Product("Product 1", 100, 1),
  new Product("Product 2", 200, 2),
  new Product("Product 3", 300, 3),
];

export class ProductInfrastructure implements ProductRepository {
  async list(): Promise<Product[]> {
    return Promise.resolve(products);
  }

  async add(product: Product): Promise<void> {
    product.id = Date.now();
    products.push(product);
    console.log(products);
    return Promise.resolve();
  }
}
