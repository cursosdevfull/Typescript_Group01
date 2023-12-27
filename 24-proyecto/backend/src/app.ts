import cors from "cors";
import express, { Request, Response } from "express";

import { Controllers, RouteAttach } from "./core/routes/route-attach";
import { ProductApplication } from "./modules/product/application/product.application";
import { ProductController } from "./modules/product/infrastructure/presentation/product.controller";
import { ProductInfrastructure } from "./modules/product/infrastructure/product.infrastructure";

class App {
  private readonly app: express.Application;
  private readonly controllers: Controllers = [
    {
      class: ProductController,
      dependencies: [
        {
          class: ProductApplication,
          dependencies: [{ class: ProductInfrastructure }],
        },
      ],
    },
  ];

  constructor() {
    this.app = express();
    this.mountMiddlewares();
    this.mountRoutes();
    this.attachRoutes();
    this.mountErrorHandlers();
  }

  mountMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  mountRoutes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.send("It's alive!");
    });
  }

  attachRoutes() {
    const routeAttach = new RouteAttach(this.app, this.controllers);
    routeAttach.attach();
  }

  mountErrorHandlers() {
    this.app.use((req: Request, res: Response) => {
      res.status(404).send("Not Found");
    });
  }

  get App() {
    return this.app;
  }
}

export default new App().App;
