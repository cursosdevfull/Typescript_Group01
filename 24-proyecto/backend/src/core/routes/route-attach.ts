export interface Controller {
  class: new (...args: any[]) => any;
  dependencies?: Controller[];
}

export type Controllers = Controller[];

export interface Route {
  requestMethod: "get" | "post" | "put" | "delete";
  path: string;
  methodName: string;
}

export type Routes = Route[];

export class RouteAttach {
  constructor(
    private readonly app: any,
    private readonly controllers: Controllers
  ) {}

  getDependencies(dependencies: Controllers): any[] {
    return dependencies.map((dependency: Controller) => {
      const instance = new dependency.class(
        ...(dependency.dependencies
          ? this.getDependencies(dependency.dependencies)
          : [])
      );
      return instance;
    });
  }

  attach() {
    this.controllers.forEach((controller: Controller) => {
      const instance = new controller.class(
        ...(controller.dependencies
          ? this.getDependencies(controller.dependencies)
          : [])
      );

      const prefix: string = Reflect.getMetadata("prefix", controller.class);
      const routes: Routes = Reflect.getMetadata("routes", controller.class);

      routes.forEach((route: Route) => {
        this.app[route.requestMethod](
          prefix + route.path,
          instance[route.methodName].bind(instance)
        );
      });
    });
  }
}
