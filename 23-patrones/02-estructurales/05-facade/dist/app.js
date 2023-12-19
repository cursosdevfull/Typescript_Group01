import { Facade } from "./facade.js";
const facade = new Facade();
const search1 = facade.search({
    dateStart: new Date(),
    days: 5,
    people: {
        adults: 4,
        children: 2,
    },
    price: {
        min: 100,
        max: 200,
    },
});
const search2 = facade.search({
    dateStart: new Date(),
    days: 8,
    people: {
        adults: 2,
        children: 1,
    },
    price: {
        min: 500,
        max: 1000,
    },
});
Promise.all([search1, search2]).then((results) => {
    console.log(results);
});
