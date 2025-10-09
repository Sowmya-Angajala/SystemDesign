// Strategy interface
interface FlyStrategy {
  fly(): void;
}

// Concrete strategies
class FastFly implements FlyStrategy {
  fly(): void {
    console.log("Flying fast like a rocket!");
  }
}

class NoFly implements FlyStrategy {
  fly(): void {
    console.log("I cannot fly");
  }
}

// Context class
class Duck {
  private flyStrategy: FlyStrategy;

  constructor(strategy: FlyStrategy) {
    this.flyStrategy = strategy;
  }

  performFly(): void {
    this.flyStrategy.fly();
  }

  setFlyStrategy(strategy: FlyStrategy): void {
    this.flyStrategy = strategy;
  }
}

// Testing
const duck = new Duck(new FastFly());
duck.performFly(); // Fast flying

duck.setFlyStrategy(new NoFly());
duck.performFly(); // Cannot fly
