export class Component {
    set parent(parent) {
        this._parent = parent;
    }
    get parent() {
        return this._parent;
    }
    add(component) { }
    remove(component) { }
    isComposite() {
        return false;
    }
}
export class Product extends Component {
    constructor(price) {
        super();
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
export class Box extends Component {
    constructor() {
        super(...arguments);
        this.children = [];
        this.price = 0;
    }
    add(component) {
        this.children.push(component);
        component.parent = this;
    }
    remove(component) {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
        component.parent = null;
    }
    isComposite() {
        return true;
    }
    getPrice() {
        let priceTotal = 0;
        for (const child of this.children) {
            priceTotal += child.getPrice();
        }
        return priceTotal;
    }
}
