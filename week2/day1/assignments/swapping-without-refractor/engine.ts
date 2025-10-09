// engine.ts

// Step 1: Define Engine interface
interface Engine {
  start(): void;
}

// Step 2: Implement PetrolEngine
class PetrolEngine implements Engine {
  start(): void {
    console.log("Petrol engine started");
  }
}

// Step 3: Implement DieselEngine
class DieselEngine implements Engine {
  start(): void {
    console.log("Diesel engine started");
  }
}

// Step 4: Refactor Car to use Engine interface
class Car {
  engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine; // Dependency Injection
  }

  drive(): void {
    this.engine.start();
    console.log("Driving car");
  }

  // Optional: swap engine at runtime
  setEngine(engine: Engine): void {
    this.engine = engine;
  }
}

// Step 5: Test the code

// Using PetrolEngine
const petrolCar = new Car(new PetrolEngine());
petrolCar.drive();

// Swap to DieselEngine at runtime
petrolCar.setEngine(new DieselEngine());
petrolCar.drive();

// Using DieselEngine directly
const dieselCar = new Car(new DieselEngine());
dieselCar.drive();
