import { Flyweight } from "./flyweight.js";
const kindOfCharacters = ["enemy", "car", "key"];
const amountCharacters = Math.round(Math.random() * 1000) + 1;
const flyweight = new Flyweight();
for (let index = 0; index < amountCharacters; index++) {
    const element = Math.floor(Math.random() * kindOfCharacters.length);
    const coord01 = Math.floor(Math.random() * 100);
    const coord02 = Math.floor(Math.random() * 100);
    const coord03 = Math.floor(Math.random() * 100);
    flyweight
        .getCharacter(kindOfCharacters[element])
        .draw(coord01, coord02, coord03);
}
