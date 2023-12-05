"use strict";
class ProductService {
    constructor() {
        this.products = [
            { category: "electronic", title: "TV" },
            { category: "furniture", title: "Table" },
            { category: "electronic", title: "Phone" },
            { category: "furniture", title: "Chair" },
        ];
    }
    getAll() {
        return [...this.products];
    }
    add(product) {
        this.products.push(product);
    }
}
class HomeController {
    constructor(productService) {
        this.products = [];
        this.kindOfProduct = "All";
        this.productService = productService;
        //const productService = new ProductService();
        this.products = productService.getAll();
    }
    getName() {
        return "HomeController";
    }
}
class ElectronicController {
    constructor(productService) {
        this.products = [];
        this.kindOfProduct = "electronic";
        this.productService = productService;
        this.products = productService
            .getAll()
            .filter((p) => p.category === "electronic");
        productService.add({ category: "electronic", title: "Radio" });
        productService.add({ category: "furniture", title: "Sofa" });
    }
    getName() {
        return "ElectronicController";
    }
}
class FurnitureController {
    constructor(productService) {
        this.products = [];
        this.kindOfProduct = "furniture";
        this.productService = productService;
        this.products = productService
            .getAll()
            .filter((p) => p.category === "furniture");
    }
    getName() {
        return "FurnitureController";
    }
}
class HealthCheckController {
    constructor() {
        console.log("HealthCheckController");
    }
}
const routes = {
    "/": HomeController,
    "/electronic": ElectronicController,
    "/furniture": FurnitureController,
    "/healthcheck": HealthCheckController,
};
function renderProduct(route) {
    const classAssociated = routes[route];
    let controller;
    if (!!classAssociated.prototype["getName"]) {
        controller = new classAssociated(productService);
        console.log("route " + route, controller.products);
    }
    else {
        controller = new classAssociated();
    }
}
const productService = new ProductService();
renderProduct("/electronic");
renderProduct("/furniture");
renderProduct("/");
renderProduct("/healthcheck");
function getNameClass(parameter) {
    console.log("name of class", parameter.name);
}
getNameClass(HomeController);
// const productService = new ProductService();
// const homeController = new HomeController(productService);
// console.log(homeController.products);
//# sourceMappingURL=app.js.map