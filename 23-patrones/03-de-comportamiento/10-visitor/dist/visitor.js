var OfferKind;
(function (OfferKind) {
    OfferKind[OfferKind["ProductNormal"] = 0] = "ProductNormal";
    OfferKind[OfferKind["ProductDiscount"] = 1] = "ProductDiscount";
})(OfferKind || (OfferKind = {}));
export class ProductNormal {
    constructor(price) {
        this.price = price;
        this.kind = OfferKind.ProductNormal;
    }
    get Price() {
        return this.price;
    }
    accept(visitor) {
        return visitor.visit(this);
    }
}
export class ProductDiscount {
    constructor(price) {
        this.price = price;
        this.kind = OfferKind.ProductDiscount;
    }
    get Price() {
        return this.price;
    }
    accept(visitor) {
        throw visitor.visit(this);
    }
}
export class Tax {
    constructor() {
        this.taxNormal = 1.18;
        this.taxDiscount = 1.18;
    }
    visit(entity) {
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
