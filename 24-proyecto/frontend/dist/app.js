var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Observer {
}
export class Subject {
    constructor() {
        this.observers = [];
    }
    register(observer) {
        this.observers.push(observer);
    }
    unregister(observer) {
        const index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    }
    notify() {
        this.observers.forEach((observer) => observer.notify());
    }
}
class Component extends Observer {
    constructor(templateId, hostElementId, insertAtStart, newElementId) {
        super();
        this.templateElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElementId);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(insertAtStart);
    }
    attach(insertAtBeginning) {
        this.hostElement.insertAdjacentElement(insertAtBeginning ? "afterbegin" : "beforeend", this.element);
    }
}
class ProductInput extends Component {
    constructor(subject) {
        super("product-input", "app", true, "user-input");
        this.subject = subject;
        this.name = this.element.querySelector("#name");
        this.price = this.element.querySelector("#price");
        this.element.addEventListener("submit", this.submitHandler.bind(this));
    }
    submitHandler(event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            const inputs = this.getInputs();
            this.clearInputs();
            yield this.saveProduct(inputs);
            this.subject.notify();
        });
    }
    saveProduct(product) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        };
        return fetch("http://localhost:4000/product", options);
    }
    getInputs() {
        return {
            name: this.name.value,
            price: +this.price.value,
        };
    }
    clearInputs() {
        this.name.value = "";
        this.price.value = "";
    }
    notify() {
        console.log("ProductInput");
    }
}
class ProductList extends Component {
    constructor() {
        super("product-list", "app", false, "product-list");
        this.ul = this.element.querySelector("ul");
        this.fetchProducts();
    }
    fetchProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.getProducts();
            this.renderProducts(products);
        });
    }
    getProducts() {
        return fetch("http://localhost:4000/product").then((res) => res.json());
    }
    renderProducts(products) {
        this.ul.innerHTML = "";
        products.forEach((product) => {
            const li = document.createElement("li");
            li.textContent = product.name;
            this.ul.appendChild(li);
        });
    }
    notify() {
        this.fetchProducts();
    }
}
const subject = new Subject();
new ProductInput(subject);
subject.register(new ProductList());
