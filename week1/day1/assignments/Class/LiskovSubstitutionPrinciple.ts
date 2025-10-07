class Bird {
  eat(): void {
    console.log("Eating...");
  }
}

class FlyingBird extends Bird {
  fly(): void {
    console.log("Flying...");
  }
}

class Sparrow extends FlyingBird {
  sing(): void {
    console.log("Singing...");
  }
}

class Ostrich extends Bird {
  walk(): void {
    console.log("Walking...");
  }
}

//  Usage examples
// const sparrow = new Sparrow();
// sparrow.fly();   // Output: Flying...
// sparrow.sing();  // Output: Singing...
// sparrow.eat();   // Output: Eating...

// const ostrich = new Ostrich();
// ostrich.walk();  // Output: Walking...
// ostrich.eat();   // Output: Eating...