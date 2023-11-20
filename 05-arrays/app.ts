// const course: { title: string; description: string; duration: number } = {
//   title: "Typescript",
//   description: "Curso de Typescript PRO",
//   duration: 10,
// };

const courseDev = {
  title: "Typescript",
  description: "Curso de Typescript PRO",
  duration: 10,
  requeriments: ["Conocimientos de JS", "Ganas de aprender"],
};

courseDev.duration = 20;
courseDev.title = "Typescript PRO";
courseDev.requeriments.push("Conocimientos de POO");
//course.slug = "typescript-pro";

console.log("course", courseDev);

for (const requeriment of courseDev.requeriments) {
  console.log(requeriment.toLowerCase());
}
