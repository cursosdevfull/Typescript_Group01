import { Request, Response } from "express";

import { Controller, Get, Post } from "../../../../core/decorators";
import { ProductApplication } from "../../application/product.application";
import { Product } from "../../domain/product";

@Controller("/product")
export class ProductController {
  constructor(private readonly application: ProductApplication) {}

  @Get("/")
  async list(request: Request, response: Response) {
    const products = await this.application.list();
    response.json(products);
  }

  @Post("/")
  async add(request: Request, response: Response) {
    const body = request.body;
    const product = new Product(body.name, body.price);
    await this.application.add(product);
    response.status(201).send();
  }
}
