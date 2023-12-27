export class Product {
  constructor(
    public readonly name: string,
    public readonly price: number,
    public id?: number
  ) {}
}
