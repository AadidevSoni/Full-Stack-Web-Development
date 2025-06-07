// Classes are one of the features introduced in the ES6 version of JavaScript.
// A class is a blueprint for the object. You can create an object from the class.

// You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, etc. 
// Based on these descriptions, you build the house.

// Since many houses can be made from the same description, we can create many objects from a class.

// Class Declaration
class Person {
  constructor(firstName,lastName,age) {
    //Instance Members
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.printUserInfo = function() {
      return `Name: ${this.firstName} ${this.lastName} , Age: ${this.age}`;
    };
  }

  //Prototoype Members
  greet() {
    return "Hello " + this.printUserInfo(); //this method can be called for allthe instance of the baove class
  }
}

const aadi = new Person("Aadidev","Soni",18);
console.log(aadi);
console.log(aadi.printUserInfo());
console.log(aadi.greet());

//Inheritance
class Programmer extends Person{
  constructor(firstName,lastName,age,pl) {
    super(firstName,lastName,age); //calls the parent constructor
    this.pl = pl;
  }
}

const john = new Programmer("John", "Doe", 19, "JavaScript");
console.log(john);
console.log(john.greet());