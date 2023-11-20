var user;
user = "Juan";
user = 20;
user = true;
user = new Date();
user = {
    name: "Juan",
    age: 20,
};
user = ["Juan Carlos", "Admin"];
var course;
course = "Typescript";
course = {
    title: "Typescript",
    description: "Curso de Typescript PRO",
};
if (typeof course === "string") {
    course = "Typescript PRO";
}
else if (typeof course === "object") {
    course.title = "Typescript PRO2";
}
console.log(course);
