enum OfferKind {
  ProductNormal,
  ProductDiscount,
}

export interface Visitable {
  accept(visitor: Visitor): number;
}

export class ProductNormal implements Visitable {
  readonly kind = OfferKind.ProductNormal;

  constructor(private readonly price: number) {}

  get Price(): number {
    return this.price;
  }

  accept(visitor: Visitor): number {
    return visitor.visit(this);
  }
}

export class ProductDiscount implements Visitable {
  readonly kind = OfferKind.ProductDiscount;

  constructor(private readonly price: number) {}

  get Price(): number {
    return this.price;
  }

  accept(visitor: Visitor): number {
    throw visitor.visit(this);
  }
}

export interface Visitor {
  visit(entity: ProductNormal | ProductDiscount): number;
}

export class Tax implements Visitor {
  readonly taxNormal = 1.18;
  readonly taxDiscount = 1.18;

  visit(entity: ProductNormal | ProductDiscount): any {
    //if (entity.kind === OfferKind.ProductNormal) {
    //  return Math.round(entity.Price * this.taxNormal);
    //} else {
    //return Math.round(entity.Price);

    //}
    // return Math.round(
    //   entity.kind === OfferKind.ProductNormal
    //     ? entity.Price * this.taxNormal
    //     : entity.Price * this.taxDiscount
    // );
    return 100;
  }
}
