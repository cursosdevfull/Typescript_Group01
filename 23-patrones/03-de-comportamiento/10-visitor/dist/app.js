import { ProductDiscount, Tax } from "./visitor.js";
//const productNormal = new ProductNormal(500);
const productDiscount = new ProductDiscount(600);
const tax = new Tax();
//const priceNormal = productNormal.accept(tax);
const priceDiscount = productDiscount.accept(tax);
//console.log("priceNormal", priceNormal);
//console.log("priceDiscount", priceDiscount);
