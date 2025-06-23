// Every javascript object has a anonymous property called prototype
// Remember functions & arrays are also a object
// that prototype will be the parent of that object, prototype property is object by itself, which have some special properties & methods

// Every object is associated with another object.
// The object (a) is associated with [[Prototype]] Object
// -> which means a object will inherit all properties of Object.prototype || [[Prototype]]

// We can check the prototype of something in 3 ways:
// --> obj.__proto__
// --> obj.constructor.prototype
// --> Object.getPrototypeOf(a)

// ********* Checking the Prototype
// const obj = {};
// console.log(obj.__proto__.__proto__);

// const arr = new Array();
// console.log(arr.__proto__.__proto__.__proto__);

// const str = new String();
// console.log(str.__proto__.__proto__.__proto__);

const obj = {};
console.log(obj);

console.log(obj.__proto__);
console.log(obj.constructor.prototype);
console.log(Object.getPrototypeOf(obj));

const arr = new Array();
console.log(arr);

function Person(firstName,lastName,pl) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.pl = pl;
}

const aadi = new Person("Aadi","Dev","JAVA");
console.log(aadi.__proto__);

// ********* Changing the Built-in Methods
console.log(Array.prototype);

Array.prototype.pop = function() {
  return("POP IT UP");
}

const arr1 = [1,2,3,4];
console.log(arr1.pop());

// ********* We can define our own method as well
String.prototype.hello = function() {
  console.log(this);
  console.log(this.toUpperCase());
}
console.log("Hello Aadidev".hello());