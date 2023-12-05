interface Routes {
  [key: string]: new (...args: any[]) => { title: string; type: string };
}

class HomeController {
  title: string;
  type: string;
  constructor() {
    this.title = "Home";
    this.type = "Component";
  }
}

class AboutController {
  title: string;
  type: string;
  constructor() {
    this.title = "About";
    this.type = "Component";
  }
}

class ContactController {
  title: string;
  type: string;
  constructor() {
    this.title = "Contact";
    this.type = "Component";
  }
}

const routes: Routes = {
  "/": HomeController,
  "/about": AboutController,
  "/contact": ContactController,
};

function render(route: string) {
  const controller = new routes[route]();
  console.log("controller", controller);
}

const routeSelected = "/";

render(routeSelected);

// const controller = routes[routeSelected];
// const aboutController = new controller();
// console.log("aboutController", aboutController);
