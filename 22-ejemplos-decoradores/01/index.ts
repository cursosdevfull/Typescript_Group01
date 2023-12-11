function Repository() {
  return function (target: Function) {
    target.prototype.products = [];
    target.prototype.add = function (entity: object) {
      target.prototype.products.push(entity);
    };
  };
}

export interface ProductRepository {
  products: object[];
  add(entity: object): void;
}

@Repository()
export class ProductRepository {}

const productRepository = new ProductRepository();

console.log(productRepository);

productRepository.add({ name: "Producto 1" });
productRepository.add({ name: "Producto 2" });
productRepository.add({ name: "Producto 3" });
console.log(productRepository.products);
