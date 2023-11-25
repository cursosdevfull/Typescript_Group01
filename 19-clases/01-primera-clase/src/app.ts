class Perro {
  raza: string;
  tamano: string;
  color: string;

  constructor(pRaza: string, pTamano: string, pColor: string) {
    this.raza = pRaza;
    this.tamano = pTamano;
    this.color = pColor;
    /*this.raza = "Pastor Aleman";
    this.tamano = "Grande";
    this.color = "Blanco";*/
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

const perro = new Perro("Pastor Aleman", "Grande", "Blanco");
perro.toUpper();
console.log("raza", perro.raza);
// console.log("tamano", perro.tamano);
// console.log("color", perro.color);
// perro.corre();
// perro.ladra();
// perro.come();

const perro2 = new Perro("Chihuahua", "Pequeño", "Cafe");
console.log("raza2", perro2.raza);
