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
function ValidateParameter(options) {
    return (target, propertyKey, descriptor) => {
        console.log("target", target);
        console.log("propertyKey", propertyKey);
        const original = target[propertyKey];
        descriptor.value = function (...args) {
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
    add(product) {
        console.log("Product added", product);
    }
}
__decorate([
    ValidateParameter({ minQuantity: 190 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductRepository.prototype, "add", null);
const productRepository = new ProductRepository();
productRepository.add({ name: "Laptop", quantity: 100 });
