// Abstract Beverage class
abstract class Beverage {
  abstract getDescription(): string;
  abstract getCost(): number;
}

// Concrete Beverage: Coffee
class Coffee extends Beverage {
  getDescription(): string {
    return "Coffee";
  }

  getCost(): number {
    return 50;
  }
}

// Abstract Decorator class extending Beverage
abstract class ToppingDecorator extends Beverage {
  protected beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
}

// Concrete Topping: Sugar
class Sugar extends ToppingDecorator {
  getDescription(): string {
    return this.beverage.getDescription() + " + Sugar";
  }

  getCost(): number {
    return this.beverage.getCost() + 10;
  }
}

// Concrete Topping: Honey
class Honey extends ToppingDecorator {
  getDescription(): string {
    return this.beverage.getDescription() + " + Honey";
  }

  getCost(): number {
    return this.beverage.getCost() + 20;
  }
}

// Concrete Topping: WhippedCream
class WhippedCream extends ToppingDecorator {
  getDescription(): string {
    return this.beverage.getDescription() + " + WhippedCream";
  }

  getCost(): number {
    return this.beverage.getCost() + 15;
  }
}

// ---- Test ----
const myDrink = new WhippedCream(new Honey(new Sugar(new Coffee())));
console.log(myDrink.getDescription()); // Coffee + Sugar + Honey + WhippedCream
console.log(myDrink.getCost());        // 95
