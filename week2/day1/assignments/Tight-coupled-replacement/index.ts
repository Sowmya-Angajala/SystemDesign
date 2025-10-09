interface IVehicle {
  start(): void;
}

class Car implements IVehicle {
  start(): void {
    console.log("Car is starting");
  }
}

class Bike implements IVehicle {
  start(): void {
    console.log("Bike is starting");
  }
}

class Driver {
  constructor(private vehicle: IVehicle) {
    this.vehicle.start();
    console.log("Driving...");
  }
}

// Demonstration (produces the exact expected output)
new Driver(new Car());
new Driver(new Bike());
