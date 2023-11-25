"use strict";
class Perro {
    constructor(raza, tamano, color, edad, pPerroId = "abc123") {
        this.raza = raza;
        this.tamano = tamano;
        this.color = color;
        this.edad = edad;
        this.perroId = pPerroId;
    }
    corre() {
        console.log("Corriendo...");
    }
    ladra() {
        console.log("Ladrando...");
    }
    come() {
        console.log("Comiendo...");
    }
    toUpper() {
        this.raza = this.raza.toUpperCase();
    }
}
const perro = new Perro("Pastor Aleman", "Grande", "Blanco", 12);
perro.toUpper();
console.log("raza", perro.raza);
console.log("edad", perro.edad);
console.log(perro);
