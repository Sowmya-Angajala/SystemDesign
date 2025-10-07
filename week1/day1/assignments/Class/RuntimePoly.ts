class Animal {
  makeSound(): void {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark!");
  }
}

// Function demonstrating runtime polymorphism
function makeAnimalSound(animal: Animal): void {
  animal.makeSound();
}

// Example usage
const genericAnimal = new Animal();
const dog = new Dog();

// makeAnimalSound(genericAnimal); // Output: Some sound
// makeAnimalSound(dog);           // Output: Bark!
