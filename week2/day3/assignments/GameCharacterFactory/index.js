// Base interface for characters
class Character {
    constructor(name) {
        this.name = name;
    }

    getStats() {
        throw new Error("Method 'getStats()' must be implemented.");
    }
}

// Warrior class
class Warrior extends Character {
    constructor(name) {
        super(name);
        this.strength = 90;
        this.agility = 50;
    }

    getStats() {
        return `Warrior ${this.name} Strength: ${this.strength}, Agility: ${this.agility}`;
    }
}

// Archer class
class Archer extends Character {
    constructor(name) {
        super(name);
        this.agility = 80;
        this.strength = 40;
    }

    getStats() {
        return `Archer ${this.name} Agility: ${this.agility}, Strength: ${this.strength}`;
    }
}

// Mage class
class Mage extends Character {
    constructor(name) {
        super(name);
        this.intelligence = 90;
        this.mana = 100;
    }

    getStats() {
        return `Mage ${this.name} Intelligence: ${this.intelligence}, Mana: ${this.mana}`;
    }
}

// Character Factory
class CharacterFactory {
    static createCharacter(type, name) {
        switch(type) {
            case "Warrior":
                return new Warrior(name);
            case "Archer":
                return new Archer(name);
            case "Mage":
                return new Mage(name);
            default:
                throw new Error("Unknown character type");
        }
    }
}

// Testing the factory
const archer = CharacterFactory.createCharacter("Archer", "Eldrin");
console.log(archer.getStats());
// Archer Eldrin Agility: 80, Strength: 40

const mage = CharacterFactory.createCharacter("Mage", "Gandalf");
console.log(mage.getStats());
// Mage Gandalf Intelligence: 90, Mana: 100

const warrior = CharacterFactory.createCharacter("Warrior", "Thorin");
console.log(warrior.getStats());
// Warrior Thorin Strength: 90, Agility: 50
