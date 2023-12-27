export class BookRepository {
}
BookRepository.list = [
    { id: 1, title: "NodeJS", state: "NEW", isAvailable: true },
    { id: 2, title: "NodeJS", state: "NEW", isAvailable: true },
    { id: 3, title: "NodeJS", state: "GOOD", isAvailable: true },
    { id: 4, title: "NodeJS", state: "REGULAR", isAvailable: true },
    { id: 5, title: "Angular", state: "NEW", isAvailable: true },
    { id: 6, title: "Angular", state: "NEW", isAvailable: true },
    { id: 7, title: "Angular", state: "NEW", isAvailable: true },
    { id: 8, title: "Angular", state: "REGULAR", isAvailable: true },
    { id: 9, title: "Typescript", state: "NEW", isAvailable: true },
    { id: 10, title: "Typescript", state: "GOOD", isAvailable: true },
    { id: 11, title: "Typescript", state: "GOOD", isAvailable: true },
    { id: 12, title: "Typescript", state: "GOOD", isAvailable: true },
];
export class OperationsBook {
    constructor() {
        this.listBooks = BookRepository.list;
    }
    updateState(id, available) {
        const book = this.listBooks.find((book) => book.id === id);
        if (book) {
            book.isAvailable = available;
        }
    }
    findByStrategy(title, ...states) {
        let position = 0;
        let book;
        while (position < states.length) {
            book = this.listBooks.find((bookEl) => bookEl.state === states[position] &&
                bookEl.title === title &&
                bookEl.isAvailable);
            position++;
            if (book)
                break;
        }
        if (book) {
            this.updateState(book.id, false);
        }
        return book;
    }
}
export class ResearcherStrategy extends OperationsBook {
    findBook(title) {
        return this.findByStrategy(title, "NEW", "GOOD");
    }
}
export class TeacherStrategy extends OperationsBook {
    findBook(title) {
        return this.findByStrategy(title, "GOOD", "NEW", "REGULAR");
    }
}
export class StudentStrategy extends OperationsBook {
    findBook(title) {
        return this.findByStrategy(title, "REGULAR", "GOOD", "NEW");
    }
}
export class Strategy {
    findBookByRole(strategy, title) {
        return strategy.findBook(title);
    }
}
