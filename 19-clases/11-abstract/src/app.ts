const button = document.querySelector("button")!;

abstract class BaseComponent {
  abstract data: any[];
  totalRecords: number = 0;

  pageSize: number = 4;
  currentPage: number = 0;

  getPage(): any[] {
    const page = this.data.slice(
      this.currentPage * this.pageSize,
      this.currentPage * this.pageSize + this.pageSize
    );
    this.currentPage++;

    this.showNotification(`Page ${this.currentPage} loaded`);

    return page;
  }

  abstract showNotification(message: string): void;
}

class UserComponent extends BaseComponent {
  data: any[] = [
    {
      name: "John",
      age: 32,
    },
    {
      name: "Jane",
      age: 28,
    },
    {
      name: "Mary",
      age: 31,
    },
    {
      name: "John",
      age: 32,
    },
    {
      name: "Jane",
      age: 28,
    },
    {
      name: "Mary",
      age: 31,
    },
    {
      name: "John",
      age: 32,
    },
    {
      name: "Jane",
      age: 28,
    },
    {
      name: "Mary",
      age: 31,
    },
    {
      name: "John",
      age: 32,
    },
    {
      name: "Jane",
      age: 28,
    },
    {
      name: "Mary",
      age: 31,
    },
    {
      name: "John",
      age: 32,
    },
    {
      name: "Jane",
      age: 28,
    },
    {
      name: "Mary",
      age: 31,
    },
    {
      name: "John",
      age: 32,
    },
    {
      name: "Jane",
      age: 28,
    },
    {
      name: "Mary",
      age: 31,
    },
    {
      name: "John",
      age: 32,
    },
    {
      name: "Jane",
      age: 28,
    },
    {
      name: "Mary",
      age: 31,
    },
    {
      name: "John",
      age: 32,
    },
    {
      name: "Jane",
      age: 28,
    },
    {
      name: "Mary",
      age: 31,
    },
    {
      name: "John",
      age: 32,
    },
    {
      name: "Jane",
      age: 28,
    },
    {
      name: "Mary",
      age: 31,
    },
    {
      name: "John",
      age: 32,
    },
    {
      name: "Jane",
      age: 28,
    },
    {
      name: "Mary",
      age: 31,
    },
  ];

  showNotification(message: string): void {
    alert(message);
  }
}

const user = new UserComponent();

button.addEventListener("click", () => {
  console.log(user.getPage());
});

//const base = new BaseComponent(); // Error: Cannot create an instance of an abstract class.
