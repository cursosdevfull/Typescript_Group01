"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function MinLength(min) {
    return (target, propertyKey) => {
        let value = target[propertyKey];
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
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
function Rango(options) {
    return (target, propertyKey) => {
        let value = target[propertyKey];
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal < options.min) {
                throw `Invalid min value ${options.min}`;
            }
            else if (options.max && newVal > options.max) {
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
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
}
__decorate([
    MinLength(10),
    __metadata("design:type", String)
], ProductItem.prototype, "name", void 0);
__decorate([
    Rango({ min: 10, max: 100 }),
    __metadata("design:type", Number)
], ProductItem.prototype, "quantity", void 0);
class ProductRepository {
    add(product) {
        console.log("Product added", product);
    }
}
const productRepository = new ProductRepository();
productRepository.add(new ProductItem("Laptop Lenovo AMD 7", 5));
