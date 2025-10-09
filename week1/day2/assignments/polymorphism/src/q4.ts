class PolyDuck {
  fly(): void {
    console.log("Duck is flying...");
  }
}

class DesiDuck extends PolyDuck {
  fly(): void {
    console.log("DesiDuck flies at 10kmph");
  }
}

class VidesiDuck extends PolyDuck {
  fly(): void {
    console.log("VidesiDuck flies at 20kmph");
  }
}

class SmartDuck extends PolyDuck {
  fly(): void {
    console.log("SmartDuck flies at 50kmph");
  }
}

// Function demonstrating polymorphism
function makeDuckFly(duck: PolyDuck): void {
  duck.fly();
}

// Testing
const desi = new DesiDuck();
const videsi = new VidesiDuck();
const smart = new SmartDuck();

makeDuckFly(desi);
makeDuckFly(videsi);
makeDuckFly(smart);
