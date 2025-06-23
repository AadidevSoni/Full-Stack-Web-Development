//Modules are a way to pass code from 1 file to another
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// Now that we've learned about "module wrapper" that's why we know
// that every file is a module (by default).

//This will allow us to use that greet function we exported
const greet = require('./greet');
greet("Aadidev");

const {person1,person2,person3} = require('./people')
console.log("Person 1 : " , person1);
console.log("Person 2 : " , person2);
console.log("Person 3 : " , person3);

greet(person1);

