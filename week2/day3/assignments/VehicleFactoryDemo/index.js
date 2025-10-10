// Bike class
var Bike = /** @class */ (function () {
    function Bike(name) {
        this.name = name;
    }
    Bike.prototype.getDetails = function () {
        return "Bike: ".concat(this.name);
    };
    return Bike;
}());
// Car class
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.getDetails = function () {
        return "Car: ".concat(this.name);
    };
    return Car;
}());
// VehicleFactory
var VehicleFactory = /** @class */ (function () {
    function VehicleFactory() {
    }
    VehicleFactory.createVehicle = function (type, name) {
        if (type === "Bike") {
            return new Bike(name);
        }
        else if (type === "Car") {
            return new Car(name);
        }
        else {
            throw new Error("Unknown vehicle type");
        }
    };
    return VehicleFactory;
}());
// Test
var myBike = VehicleFactory.createVehicle("Bike", "Yamaha");
console.log(myBike.getDetails()); // Bike: Yamaha
var myCar = VehicleFactory.createVehicle("Car", "Toyota");
console.log(myCar.getDetails()); // Car: Toyota
