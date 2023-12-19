interface ICharacter {
  getType(): string;
  draw(coord01: number, coord02: number, coord03: number): void;
}

class Character implements ICharacter {
  constructor(private type: string) {}

  getType(): string {
    return this.type;
  }
  draw(coord01: number, coord02: number, coord03: number): void {
    console.log(
      `Drawing a ${this.type} in coords (${coord01}, ${coord02}, ${coord03})`
    );
  }
}

export class Flyweight {
  private characters: { [key: string]: ICharacter } = {};

  getCharacter(type: string): ICharacter {
    if (!this.characters[type]) {
      this.characters[type] = new Character(type);
    }
    return this.characters[type];
  }
}
