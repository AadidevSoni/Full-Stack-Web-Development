// Prototypal inheritance is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects. 
// It is a fundamental concept in the language and is based on the prototype model. In prototypal inheritance, objects can serve 
// as prototypes for other objects, forming a hierarchical chain of inheritance.

// In JavaScript, every object has an internal property called [[Prototype]] (often referred to as __proto__), which points to 
// its prototype object. When you access a property or method on an object, and that property or method is not found in the object 
// itself, JavaScript looks for it in the object's prototype (and further up the prototype chain, if needed) until it finds the 
// property or reaches the top of the prototype chain, which is usually the Object.prototype.

// // Parent constructor function
function Animal(name) {
  this.name = name;
}

// Adding a method to the prototype of Animal
Animal.prototype.sound = function() {
  return "Animal Sound"
}

// Child constructor function inheriting from Animal
function Dog(name,breed) {
  Animal.call(this,name);
  this.breed = breed;
}

// Set Dog's prototype to an instance of Animal to establish inheritance
Dog.prototype = Object.create(Animal.prototype);  //Object,create creates a new object from an existing object as a prototype for the newly created object

Dog.prototype.bark = function() {
  return "Woof";
}

const animal1 = new Animal("Frog");
console.log(animal1.sound());

const dog1 =  new Dog("Juli","Pomerian");
console.log(dog1.name);
console.log(dog1.sound());
console.log(dog1.bark());

// Practice

function Mobile(name,cost) {
  this.name = "Mobile"
  this.cost = "1000"
}

Mobile.prototype.ring =  function() {
  return "Ring Ring";
}

function Iphone(name,cost,year) {
  Mobile.call(this);
  this.name = name;
  this.cost = cost;
  this.year = year;
}

Iphone.prototype = Object.create(Mobile.prototype);

const myPhone = new Iphone("Apple",9999,2025);

console.log(myPhone.name);
console.log(myPhone.cost);
console.log(myPhone.year);
console.log(myPhone.ring());