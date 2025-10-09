// Abstract Beverage class
abstract class Beverage {
    abstract getDescription(): string;
    abstract getCost(): number;
}

// Concrete Beverage
class GreenTea extends Beverage {
    getDescription(): string {
        return "Green Tea";
    }
    getCost(): number {
        return 40;
    }
}

// Abstract Decorator
abstract class ToppingDecorator extends Beverage {
    protected beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    abstract getDescription(): string;
    abstract getCost(): number;
}

// Concrete Decorators
class Sugar extends ToppingDecorator {
    getDescription(): string {
        return this.beverage.getDescription() + " + Sugar";
    }
    getCost(): number {
        return this.beverage.getCost() + 10;
    }
}

class Honey extends ToppingDecorator {
    getDescription(): string {
        return this.beverage.getDescription() + " + Honey";
    }
    getCost(): number {
        return this.beverage.getCost() + 20;
    }
}

// Usage
const tea = new Honey(new Sugar(new GreenTea()));
console.log(tea.getDescription()); // Green Tea + Sugar + Honey
console.log(tea.getCost());        // 70
