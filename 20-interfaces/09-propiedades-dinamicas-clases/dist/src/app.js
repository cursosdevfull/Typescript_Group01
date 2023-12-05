"use strict";
class HomeController {
    constructor() {
        this.title = "Home";
        this.type = "Component";
    }
}
class AboutController {
    constructor() {
        this.title = "About";
        this.type = "Component";
    }
}
class ContactController {
    constructor() {
        this.title = "Contact";
        this.type = "Component";
    }
}
const routes = {
    "/": HomeController,
    "/about": AboutController,
    "/contact": ContactController,
};
function render(route) {
    const controller = new routes[route]();
    console.log("controller", controller);
}
const routeSelected = "/";
render(routeSelected);
// const controller = routes[routeSelected];
// const aboutController = new controller();
// console.log("aboutController", aboutController);
