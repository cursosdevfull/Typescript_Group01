export abstract class Observer {
  abstract notify(): void;
}

export class Subject {
  private observers: Observer[] = [];

  register(observer: Observer) {
    this.observers.push(observer);
  }

  unregister(observer: Observer) {
    const index = this.observers.indexOf(observer);
    this.observers.splice(index, 1);
  }

  notify() {
    this.observers.forEach((observer) => observer.notify());
  }
}

abstract class Component<
  T extends HTMLDivElement,
  U extends HTMLElement
> extends Observer {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    super();
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId)! as T;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as U;

    if (newElementId) {
      this.element.id = newElementId;
    }

    this.attach(insertAtStart);
  }

  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? "afterbegin" : "beforeend",
      this.element
    );
  }
}

class ProductInput extends Component<HTMLDivElement, HTMLElement> {
  name: HTMLInputElement;
  price: HTMLInputElement;
  subject: Subject;

  constructor(subject: Subject) {
    super("product-input", "app", true, "user-input");
    this.subject = subject;
    this.name = this.element.querySelector("#name")! as HTMLInputElement;
    this.price = this.element.querySelector("#price")! as HTMLInputElement;
    this.element.addEventListener("submit", this.submitHandler.bind(this));
  }

  async submitHandler(event: Event) {
    event.preventDefault();
    const inputs = this.getInputs();
    this.clearInputs();

    await this.saveProduct(inputs);
    this.subject.notify();
  }

  saveProduct(product: object) {
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

  notify(): void {
    console.log("ProductInput");
  }
}

class ProductList extends Component<HTMLDivElement, HTMLElement> {
  ul: HTMLUListElement;

  constructor() {
    super("product-list", "app", false, "product-list");
    this.ul = this.element.querySelector("ul")! as HTMLUListElement;
    this.fetchProducts();
  }

  async fetchProducts() {
    const products = await this.getProducts();
    this.renderProducts(products);
  }

  getProducts() {
    return fetch("http://localhost:4000/product").then((res) => res.json());
  }

  renderProducts(products: any[]) {
    this.ul.innerHTML = "";
    products.forEach((product) => {
      const li = document.createElement("li");
      li.textContent = product.name;
      this.ul.appendChild(li);
    });
  }

  notify(): void {
    this.fetchProducts();
  }
}

const subject = new Subject();

new ProductInput(subject);
subject.register(new ProductList());
