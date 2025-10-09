class Engine {
  start(): void {
    console.log("Engine started");
  }
}

class Car {
  // Car *creates and owns* an Engine instance directly → tight coupling
  private engine: Engine;

  constructor() {
    this.engine = new Engine(); // Car decides the exact Engine implementation
  }

  drive(): void {
    this.engine.start();
    console.log("Car is driving");
  }
}

const myCar = new Car();
myCar.drive();
