function Log01(prefix: string) {
  return function (target: any, propertyName: string) {
    console.log("Property decorator!");
    console.log("target", target);
    console.log("propertyName", propertyName);

    let value: string;

    const getter = () => {
      console.log("getter");
      return value;
    };

    const setter = (newValue: string) => {
      console.log("setter");
      value = `${prefix}: ${newValue}`;
    };

    Object.defineProperty(target, propertyName, {
      get: getter,
      set: setter,
    });
  };
}

function Book(props: { hookId: string; isUpper: boolean }) {
  return function (constructor: any) {
    const hookEl = document.getElementById(props.hookId);

    const p = new constructor();

    if (hookEl) {
      hookEl.innerHTML = `<h1>${
        props.isUpper ? p.title.toUpperCase() : p.title.toLowerCase()
      }</h1>`;
    }
  };
}

function Log02(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  console.log("descriptor", descriptor);
  const original = descriptor.set;
  console.log("original", original);

  descriptor.set = function (value: number) {
    if (value < 0) {
      throw new Error("Invalid price - should be positive!");
    } else {
      if (original) {
        original.call(this, value);
      }
    }
  };
}

function Log03(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  const originalMethod = descriptor.value;
  console.log("originalMethod", originalMethod);

  descriptor.value = function (...args: any[]) {
    console.log("Arguments", args);
    console.log("desc", target.constructor);
    const result = originalMethod.apply(this, args);
    console.log("Result", result);
    return result;
  };
}

@Book({ hookId: "app", isUpper: true })
class Product {
  @Log01("Libro")
  title: string = "";
  vPrice: number = 0;

  @Log02
  set price(val: number) {
    this.vPrice = val;
  }

  @Log03
  getPriceWithTax(tax: number, excludedTax: boolean) {
    return this.vPrice * (1 + tax);
  }
}

const product = new Product();
product.title = "El señor de los anillos";
console.log(product.title);
product.price = 20;
console.log(product);
product.getPriceWithTax(0.2, true);
