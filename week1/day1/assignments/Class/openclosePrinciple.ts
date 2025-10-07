// Step 1: Create an interface
interface ShippingStrategy {
  calculate(): number;
}

// Step 2: Implement strategies for each shipping type
class StandardShipping implements ShippingStrategy {
  calculate(): number {
    return 50;
  }
}

class ExpressShipping implements ShippingStrategy {
  calculate(): number {
    return 100;
  }
}

// Example of easily adding new type
class OvernightShipping implements ShippingStrategy {
  calculate(): number {
    return 200;
  }
}

// Step 3: Create the main Shipping class using dependency injection
class Shipping {
  private strategy: ShippingStrategy;

  constructor(strategy: ShippingStrategy) {
    this.strategy = strategy;
  }

  calculate(): number {
    return this.strategy.calculate();
  }
}

// Step 4: Usage
// const standard = new Shipping(new StandardShipping());
// console.log("Standard:", standard.calculate()); 

// const express = new Shipping(new ExpressShipping());
// console.log("Express:", express.calculate()); 

// const overnight = new Shipping(new OvernightShipping());
// console.log("Overnight:", overnight.calculate()); 
