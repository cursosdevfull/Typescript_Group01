// const course: { title: string; description: string; duration: number } = {
//   title: "Typescript",
//   description: "Curso de Typescript PRO",
//   duration: 10,
// };
var ERROR_MESSAGE;
(function (ERROR_MESSAGE) {
    ERROR_MESSAGE["AMOUNT_NOT_ALLOWED"] = "Amount not allowed";
})(ERROR_MESSAGE || (ERROR_MESSAGE = {}));
var CURRENCY;
(function (CURRENCY) {
    CURRENCY["PEN"] = "PEN";
    CURRENCY["USD"] = "USD";
    CURRENCY["EUR"] = "EUR";
})(CURRENCY || (CURRENCY = {}));
var courseDev = {
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
for (var _i = 0, _a = courseDev.requeriments; _i < _a.length; _i++) {
    var requeriment = _a[_i];
    console.log(requeriment.toLowerCase());
}
for (var _b = 0, _c = courseDev.price; _b < _c.length; _b++) {
    var price = _c[_b];
    if (price[1] > 200)
        throw new Error(ERROR_MESSAGE.AMOUNT_NOT_ALLOWED);
}
