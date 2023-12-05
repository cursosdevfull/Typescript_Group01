interface Controllers {
  [key: string]: new (...args: any[]) => any;
}

interface Product {
  category: "electronic" | "furniture";
  title: string;
}

interface IInyection {
  getName(): string;
}

class ProductService {
  private products: Product[] = [
    { category: "electronic", title: "TV" },
    { category: "furniture", title: "Table" },
    { category: "electronic", title: "Phone" },
    { category: "furniture", title: "Chair" },
  ];

  getAll() {
    return [...this.products];
  }

  add(product: Product) {
    this.products.push(product);
  }
}

class HomeController implements IInyection {
  products: Product[] = [];
  kindOfProduct: string = "All";
  productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
    //const productService = new ProductService();
    this.products = productService.getAll();
  }

  getName(): string {
    return "HomeController";
  }
}

class ElectronicController implements IInyection {
  products: Product[] = [];
  kindOfProduct: string = "electronic";
  productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
    this.products = productService
      .getAll()
      .filter((p) => p.category === "electronic");

    productService.add({ category: "electronic", title: "Radio" });
    productService.add({ category: "furniture", title: "Sofa" });
  }

  getName(): string {
    return "ElectronicController";
  }
}

class FurnitureController implements IInyection {
  products: Product[] = [];
  kindOfProduct: string = "furniture";
  productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
    this.products = productService
      .getAll()
      .filter((p) => p.category === "furniture");
  }

  getName(): string {
    return "FurnitureController";
  }
}

class HealthCheckController {
  constructor() {
    console.log("HealthCheckController");
  }
}

const routes: Controllers = {
  "/": HomeController,
  "/electronic": ElectronicController,
  "/furniture": FurnitureController,
  "/healthcheck": HealthCheckController,
};

function renderProduct(route: string) {
  const classAssociated = routes[route];

  let controller;

  if (!!classAssociated.prototype["getName"]) {
    controller = new classAssociated(productService);
    console.log("route " + route, controller.products);
  } else {
    controller = new classAssociated();
  }
}

const productService = new ProductService();

renderProduct("/electronic");
renderProduct("/furniture");
renderProduct("/");
renderProduct("/healthcheck");

function getNameClass(parameter: new (...args: any) => any) {
  console.log("name of class", parameter.name);
}

getNameClass(HomeController);

// const productService = new ProductService();
// const homeController = new HomeController(productService);
// console.log(homeController.products);
