// const course: { title: string; description: string; duration: number } = {
//   title: "Typescript",
//   description: "Curso de Typescript PRO",
//   duration: 10,
// };

enum ERROR_MESSAGE {
  AMOUNT_NOT_ALLOWED = "Amount not allowed",
}

enum CURRENCY {
  PEN = "PEN",
  USD = "USD",
  EUR = "EUR",
}

const courseDev: {
  title: string;
  description: string;
  duration: number;
  requeriments: string[];
  price: Array<[CURRENCY, number]>;
} = {
  title: "Typescript",
  description: "Curso de Typescript PRO",
  duration: 10,
  requeriments: ["Conocimientos de JS", "Ganas de aprender"],
  price: [
    [CURRENCY.PEN, 600],
    [CURRENCY.USD, 200],
  ],
};

courseDev.duration = 20;
courseDev.title = "Typescript PRO";
courseDev.requeriments.push("Conocimientos de POO");
courseDev.price.push([CURRENCY.EUR, 300]);
//course.slug = "typescript-pro";

console.log("course", courseDev);

for (const requeriment of courseDev.requeriments) {
  console.log(requeriment.toLowerCase());
}

for (const price of courseDev.price) {
  if (price[1] > 200) throw new Error(ERROR_MESSAGE.AMOUNT_NOT_ALLOWED);
}
