// Car class
class Car {
  constructor(builder) {
    this.brand = builder.brand;
    this.engine = builder.engine;
    this.color = builder.color;
    this.sunroof = builder.sunroof;
    this.automaticTransmission = builder.automaticTransmission;
  }

  // Method to display car details
  displayDetails() {
    console.log(`Car Details:
    Brand: ${this.brand}
    Engine: ${this.engine}
    Color: ${this.color}
    Sunroof: ${this.sunroof ? "Yes" : "No"}
    Automatic Transmission: ${this.automaticTransmission ? "Yes" : "No"}`);
  }
}

// CarBuilder class
class CarBuilder {
  setBrand(brand) {
    this.brand = brand;
    return this; // allows chaining
  }

  setEngine(engine) {
    this.engine = engine;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setSunroof(hasSunroof) {
    this.sunroof = hasSunroof;
    return this;
  }

  setAutomaticTransmission(isAutomatic) {
    this.automaticTransmission = isAutomatic;
    return this;
  }

  build() {
    return new Car(this);
  }
}

// Usage
const tesla = new CarBuilder()
  .setBrand("Tesla Model S")
  .setEngine("Electric")
  .setColor("Black")
  .setSunroof(true)
  .setAutomaticTransmission(true)
  .build();

tesla.displayDetails();
