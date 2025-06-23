//Functions
function greet(){
  console.log("Hello");
}
greet();  

function sayHello(name) {
  console.log("Hello " + name);
}
sayHello("Aadidev");

//return keyword
function add(a,b) {
  return(a+b);
}
console.log("Sum = " + add(1,2));

//Function Declaration
//Above

//Function Expression
const greetings = function (user) {
  console.log("Hello " + user);
}
greetings("Aadi");

//Callback function
//showCallFun(function() {})
function showCallFunc(fn) {
  const value = 10;
  fn(value);
}

showCallFunc(function(value) {
  console.log(value);
  })

//Challenge
function showCallFunction(func){
  const val = 10;
  func(10);
}

function func(value){
  console.log(value);
}

showCallFunction(func);

//Scope
//Local and global variables

//Methods
//Method 1
function greet() {
  return `Hello, my name is ${this.name} and I am ${this.age} years old`;
}

const person = {
  name: "Aadi",
  age: 18,
  greet,
};

console.log(person.greet());

//Method 2
const Person = {
  name: "Aadi",
  age : 19,
  greet : function() {
    return `Hello, my name is ${Person.name} and I am ${Person.age} years old`;
  }
}
console.log(Person.greet());