function MinLength(min: number) {
  return (target: any, propertyKey: string) => {
    let value: string = target[propertyKey];

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      if (newVal.length < min) {
        throw `Invalid length ${min}`;
      }
      value = newVal;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

function Rango(options: { min: number; max?: number }) {
  return (target: any, propertyKey: string) => {
    let value: number = target[propertyKey];

    const getter = function () {
      return value;
    };

    const setter = function (newVal: number) {
      if (newVal < options.min) {
        throw `Invalid min value ${options.min}`;
      } else if (options.max && newVal > options.max) {
        throw `Invalid max value ${options.max}`;
      }
      value = newVal;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

class ProductItem {
  @MinLength(10)
  name: string;

  @Rango({ min: 10, max: 100 })
  quantity: number;

  constructor(name: string, quantity: number) {
    this.name = name;
    this.quantity = quantity;
  }
}

class ProductRepository {
  add(product: ProductItem) {
    console.log("Product added", product);
  }
}

const productRepository = new ProductRepository();
productRepository.add(new ProductItem("Laptop Lenovo AMD 7", 5));
