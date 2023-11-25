"use strict";
const button = document.querySelector("button");
class BaseComponent {
    constructor() {
        this.totalRecords = 0;
        this.pageSize = 4;
        this.currentPage = 0;
    }
    getPage() {
        const page = this.data.slice(this.currentPage * this.pageSize, this.currentPage * this.pageSize + this.pageSize);
        this.currentPage++;
        this.showNotification(`Page ${this.currentPage} loaded`);
        return page;
    }
}
class UserComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.data = [
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
    }
    showNotification(message) {
        alert(message);
    }
}
const user = new UserComponent();
button.addEventListener("click", () => {
    console.log(user.getPage());
});
//const base = new BaseComponent(); // Error: Cannot create an instance of an abstract class.
