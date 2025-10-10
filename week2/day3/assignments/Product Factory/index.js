"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Base Product class
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
// Concrete Product classes
class Laptop extends Product {
    getDescription() {
        return `Laptop: ${this.name}, Price: $${this.price}`;
    }
}
class Mobile extends Product {
    getDescription() {
        return `Mobile: ${this.name}, Price: $${this.price}`;
    }
}
class Tablet extends Product {
    getDescription() {
        return `Tablet: ${this.name}, Price: $${this.price}`;
    }
}
// Configurable class map
const productMap = {
    Laptop,
    Mobile,
    Tablet,
};
// Factory
class ProductFactory {
    static createProduct(type, name, price) {
        const ProductClass = productMap[type];
        if (!ProductClass)
            throw new Error("Unknown product type");
        return new ProductClass(name, price);
    }
    // Optional: allow registering new types dynamically
    static registerProduct(type, constructor) {
        productMap[type] = constructor;
    }
}
// Usage Example
const t = ProductFactory.createProduct("Tablet", "Galaxy Tab", 1100);
console.log(t.getDescription()); // Tablet: Galaxy Tab, Price: $1100
// Adding new product dynamically
class SmartWatch extends Product {
    getDescription() {
        return `SmartWatch: ${this.name}, Price: $${this.price}`;
    }
}
ProductFactory.registerProduct("SmartWatch", SmartWatch);
const s = ProductFactory.createProduct("SmartWatch", "Apple Watch", 500);
console.log(s.getDescription()); // SmartWatch: Apple Watch, Price: $500
//# sourceMappingURL=index.js.map