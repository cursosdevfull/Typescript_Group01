const decorator = (path: string): MethodDecorator => {
  return (target: any, propertyKey: string | symbol) => {
    const routes = Reflect.getMetadata("routes", target.constructor) || [];

    routes.push({
      requestMethod: "post",
      path,
      methodName: propertyKey,
    });

    Reflect.defineMetadata("routes", routes, target.constructor);
  };
};

export default decorator;
