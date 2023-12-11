function MinQuantity(quantity: number) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      if (args[1] < quantity) {
        throw `No se puede agregar menos de ${quantity} productos`;
        //console.log(`La cantidad mínima es de ${quantity}`);
      } else {
        original.apply(this, args);
      }
    };

    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  };
}

class Inventory {
  @MinQuantity(20)
  addProduct(product: string, quantity: number) {
    console.log("Product added", product, quantity);
  }
}

const inventory = new Inventory();
inventory.addProduct("Laptop", 100);
console.log(inventory);
