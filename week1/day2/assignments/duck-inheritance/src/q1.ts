class Duck {
  swim(): void {
    console.log("I know swimming");
  }
}

class MallardDuck extends Duck {}

const duck = new MallardDuck();
duck.swim();
