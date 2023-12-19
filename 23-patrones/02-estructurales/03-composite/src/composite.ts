export interface IPrice {
  price: number;
}

export abstract class Component {
  protected _parent!: Component;

  set parent(parent: Component) {
    this._parent = parent;
  }

  get parent(): Component {
    return this._parent;
  }

  add(component: Component): void {}

  remove(component: Component): void {}

  isComposite(): boolean {
    return false;
  }

  abstract getPrice(): number;
}

export class Product extends Component implements IPrice {
  constructor(readonly price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class Box extends Component implements IPrice {
  protected children: Component[] = [];
  price = 0;

  override add(component: Component): void {
    this.children.push(component);
    component.parent = this;
  }

  override remove(component: Component): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);

    component.parent = null!;
  }

  override isComposite(): boolean {
    return true;
  }

  getPrice(): number {
    let priceTotal = 0;
    for (const child of this.children) {
      priceTotal += child.getPrice();
    }
    return priceTotal;
  }
}
