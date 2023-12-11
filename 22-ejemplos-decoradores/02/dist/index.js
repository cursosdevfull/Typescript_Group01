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
function MinQuantity(quantity) {
    return (target, propertyKey, descriptor) => {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            if (args[1] < quantity) {
                throw `No se puede agregar menos de ${quantity} productos`;
                //console.log(`La cantidad mínima es de ${quantity}`);
            }
            else {
                original.apply(this, args);
            }
        };
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class Inventory {
    addProduct(product, quantity) {
        console.log("Product added", product, quantity);
    }
}
__decorate([
    MinQuantity(20),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], Inventory.prototype, "addProduct", null);
const inventory = new Inventory();
inventory.addProduct("Laptop", 100);
console.log(inventory);
