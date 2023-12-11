"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
function Repository() {
    return function (target) {
        target.prototype.products = [];
        target.prototype.add = function (entity) {
            target.prototype.products.push(entity);
        };
    };
}
let ProductRepository = class ProductRepository {
};
exports.ProductRepository = ProductRepository;
exports.ProductRepository = ProductRepository = __decorate([
    Repository()
], ProductRepository);
const productRepository = new ProductRepository();
console.log(productRepository);
productRepository.add({ name: "Producto 1" });
productRepository.add({ name: "Producto 2" });
productRepository.add({ name: "Producto 3" });
console.log(productRepository.products);
