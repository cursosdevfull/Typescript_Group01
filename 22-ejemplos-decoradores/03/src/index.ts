function ValidateParameter(options: any) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log("target", target);
    console.log("propertyKey", propertyKey);
    const original = target[propertyKey];
    descriptor.value = function (...args: any[]) {
      console.log("arguments", args);
      if (!args[0].name) {
        throw "Name is required";
      }
      if (!args[0].quantity) {
        throw "Quantity is required";
      }

      if (args[0].quantity < options.minQuantity) {
        throw `Quantity should be greater than ${options.minQuantity}`;
      }
      original.apply(this, args);
    };

    console.log("target", target);
  };
}

class ProductRepository {
  @ValidateParameter({ minQuantity: 190 })
  add(product: object) {
    console.log("Product added", product);
  }
}

const productRepository = new ProductRepository();
productRepository.add({ name: "Laptop", quantity: 100 });
