// engine.ts
// Step 2: Implement PetrolEngine
var PetrolEngine = /** @class */ (function () {
    function PetrolEngine() {
    }
    PetrolEngine.prototype.start = function () {
        console.log("Petrol engine started");
    };
    return PetrolEngine;
}());
// Step 3: Implement DieselEngine
var DieselEngine = /** @class */ (function () {
    function DieselEngine() {
    }
    DieselEngine.prototype.start = function () {
        console.log("Diesel engine started");
    };
    return DieselEngine;
}());
// Step 4: Refactor Car to use Engine interface
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine; // Dependency Injection
    }
    Car.prototype.drive = function () {
        this.engine.start();
        console.log("Driving car");
    };
    // Optional: swap engine at runtime
    Car.prototype.setEngine = function (engine) {
        this.engine = engine;
    };
    return Car;
}());
// Step 5: Test the code
// Using PetrolEngine
var petrolCar = new Car(new PetrolEngine());
petrolCar.drive();
// Swap to DieselEngine at runtime
petrolCar.setEngine(new DieselEngine());
petrolCar.drive();
// Using DieselEngine directly
var dieselCar = new Car(new DieselEngine());
dieselCar.drive();
