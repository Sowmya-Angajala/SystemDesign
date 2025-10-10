// Base Product class
abstract class Product {
  constructor(public name: string, public price: number) {}
  abstract getDescription(): string;
}

// Concrete Product classes
class Laptop extends Product {
  getDescription(): string {
    return `Laptop: ${this.name}, Price: $${this.price}`;
  }
}

class Mobile extends Product {
  getDescription(): string {
    return `Mobile: ${this.name}, Price: $${this.price}`;
  }
}

class Tablet extends Product {
  getDescription(): string {
    return `Tablet: ${this.name}, Price: $${this.price}`;
  }
}

// Product Constructor type
type ProductConstructor = new (name: string, price: number) => Product;

// Configurable class map
const productMap: Record<string, ProductConstructor> = {
  Laptop,
  Mobile,
  Tablet,
};

// Factory
class ProductFactory {
  static createProduct(type: string, name: string, price: number): Product {
    const ProductClass = productMap[type];
    if (!ProductClass) throw new Error("Unknown product type");
    return new ProductClass(name, price);
  }

  // Optional: allow registering new types dynamically
  static registerProduct(type: string, constructor: ProductConstructor) {
    productMap[type] = constructor;
  }
}

// Usage Example
const t = ProductFactory.createProduct("Tablet", "Galaxy Tab", 1100);
console.log(t.getDescription()); // Tablet: Galaxy Tab, Price: $1100

// Adding new product dynamically
class SmartWatch extends Product {
  getDescription(): string {
    return `SmartWatch: ${this.name}, Price: $${this.price}`;
  }
}

ProductFactory.registerProduct("SmartWatch", SmartWatch);
const s = ProductFactory.createProduct("SmartWatch", "Apple Watch", 500);
console.log(s.getDescription()); // SmartWatch: Apple Watch, Price: $500
