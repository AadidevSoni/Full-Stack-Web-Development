"use strict";
class Dog {
    bark() {
        console.log("Bark");
    }
}
class Cat {
    meow() {
        console.log("Meow");
    }
}
function animalSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
const myDog = new Dog();
const myCat = new Cat();
animalSound(myDog);
animalSound(myCat);
