// Beverage.ts (abstract)
abstract class Beverage {
    abstract getDescription(): string;
    abstract getCost(): number;
}

// GreenTea.ts
class GreenTea extends Beverage {
    getDescription(): string {
        return "Green Tea";
    }
    getCost(): number {
        return 40;
    }
}

// Sugar.ts (Decorator)
class Sugar extends Beverage {
    private beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + " + Sugar";
    }

    getCost(): number {
        return this.beverage.getCost() + 10;
    }
}

// index.ts (test)
const tea = new Sugar(new Sugar(new GreenTea()));
console.log(tea.getDescription()); // Green Tea + Sugar + Sugar
console.log(tea.getCost());        // 60
