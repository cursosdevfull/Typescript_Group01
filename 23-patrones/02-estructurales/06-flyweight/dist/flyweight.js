class Character {
    constructor(type) {
        this.type = type;
    }
    getType() {
        return this.type;
    }
    draw(coord01, coord02, coord03) {
        console.log(`Drawing a ${this.type} in coords (${coord01}, ${coord02}, ${coord03})`);
    }
}
export class Flyweight {
    constructor() {
        this.characters = {};
    }
    getCharacter(type) {
        if (!this.characters[type]) {
            this.characters[type] = new Character(type);
        }
        return this.characters[type];
    }
}
