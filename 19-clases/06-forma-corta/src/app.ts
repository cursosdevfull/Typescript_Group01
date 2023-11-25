class Perro {
  perroId: string;

  constructor(
    public raza: string,
    public tamano: string,
    private color: string,
    public edad: number,
    pPerroId = "abc123"
  ) {
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
