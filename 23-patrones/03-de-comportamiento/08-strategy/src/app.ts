import {
  BookRepository,
  ResearcherStrategy,
  Strategy,
  StudentStrategy,
  TeacherStrategy,
} from "./strategy.js";

const researcher = new ResearcherStrategy();
const teacher = new TeacherStrategy();
const student = new StudentStrategy();
const strategy = new Strategy();

const book1 = strategy.findBookByRole(researcher, "NodeJS");
console.log(book1);
const book2 = strategy.findBookByRole(student, "NodeJS");
console.log(book2);
const book3 = strategy.findBookByRole(researcher, "NodeJS");
console.log(book3);
const book4 = strategy.findBookByRole(researcher, "NodeJS");
console.log(book4);
const book5 = strategy.findBookByRole(student, "Typescript");
console.log(book5);
const book6 = strategy.findBookByRole(teacher, "Typescript");
console.log(book6);

console.table(BookRepository.list);
