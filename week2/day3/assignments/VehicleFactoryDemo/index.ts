// Vehicle interface
interface Vehicle {
    getDetails(): string;
}

// Bike class
class Bike implements Vehicle {
    constructor(private name: string) {}
    getDetails(): string {
        return `Bike: ${this.name}`;
    }
}

// Car class
class Car implements Vehicle {
    constructor(private name: string) {}
    getDetails(): string {
        return `Car: ${this.name}`;
    }
}

// VehicleFactory
class VehicleFactory {
    static createVehicle(type: string, name: string): Vehicle {
        if (type === "Bike") {
            return new Bike(name);
        } else if (type === "Car") {
            return new Car(name);
        } else {
            throw new Error("Unknown vehicle type");
        }
    }
}

// Test
const myBike = VehicleFactory.createVehicle("Bike", "Yamaha");
console.log(myBike.getDetails()); // Bike: Yamaha

const myCar = VehicleFactory.createVehicle("Car", "Toyota");
console.log(myCar.getDetails()); // Car: Toyota
