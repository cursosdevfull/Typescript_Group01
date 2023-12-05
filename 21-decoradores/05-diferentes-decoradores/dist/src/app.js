var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Log01(prefix) {
    return function (target, propertyName) {
        console.log("Property decorator!");
        console.log("target", target);
        console.log("propertyName", propertyName);
        let value;
        const getter = () => {
            console.log("getter");
            return value;
        };
        const setter = (newValue) => {
            console.log("setter");
            value = `${prefix}: ${newValue}`;
        };
        Object.defineProperty(target, propertyName, {
            get: getter,
            set: setter,
        });
    };
}
function Book(props) {
    return function (constructor) {
        const hookEl = document.getElementById(props.hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = `<h1>${props.isUpper ? p.title.toUpperCase() : p.title.toLowerCase()}</h1>`;
        }
    };
}
function Log02(target, propertyName, descriptor) {
    console.log("descriptor", descriptor);
    const original = descriptor.set;
    console.log("original", original);
    descriptor.set = function (value) {
        if (value < 0) {
            throw new Error("Invalid price - should be positive!");
        }
        else {
            if (original) {
                original.call(this, value);
            }
        }
    };
}
function Log03(target, propertyName, descriptor) {
    console.log("Method decorator!");
    const originalMethod = descriptor.value;
    console.log("originalMethod", originalMethod);
    descriptor.value = function (...args) {
        console.log("Arguments", args);
        console.log("desc", target.constructor);
        const result = originalMethod.apply(this, args);
        console.log("Result", result);
        return result;
    };
}
let Product = class Product {
    constructor() {
        this.title = "";
        this.vPrice = 0;
    }
    set price(val) {
        this.vPrice = val;
    }
    getPriceWithTax(tax, excludedTax) {
        return this.vPrice * (1 + tax);
    }
};
__decorate([
    Log01("Libro"),
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    Log02,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Product.prototype, "price", null);
__decorate([
    Log03,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", void 0)
], Product.prototype, "getPriceWithTax", null);
Product = __decorate([
    Book({ hookId: "app", isUpper: true })
], Product);
const product = new Product();
product.title = "El señor de los anillos";
console.log(product.title);
product.price = 20;
console.log(product);
product.getPriceWithTax(0.2, true);
//# sourceMappingURL=app.js.map