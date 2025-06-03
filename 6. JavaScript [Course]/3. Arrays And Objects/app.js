//Arrays
let numArr = [1,2,3,4,5];
console.log(numArr);
console.log(numArr[2]);

//Nested Array
let numArray = [1,[1,2,3],3,4,5];
console.log(numArray);
console.log(numArray[1][1]);

//BASIC ARRAY METHODS
const fruits = ["apples","banana","orange","berry"]
console.log(fruits);

//Push
fruits.push("watermelon")
console.log(fruits);

//Pop
fruits.pop();
console.log(fruits);

//Shift - Removes first element
fruits.shift();
console.log(fruits);

//Unshift - Inserts at first
fruits.unshift("grapefruit");
console.log(fruits);

//concat
const moreFruits = ["pineapple","jackfruit","lichy"];
const totalFruits = fruits.concat(moreFruits);
console.log(totalFruits);

const pl = ["Javascript","Golang","Python","JAVA","C++"];
const number = [3,5,4,1,2];

//Includes
console.log(pl.includes("JAVA"));

//Join
console.log(pl.join('-'));

//Reverse
console.log(pl.reverse());

//Slice
console.log(pl.slice(0,2));

//Sort
console.log(number.sort());

//OBJECTS -> {label : value}
const person = {
  firstName: "Aadidev",
  lastName: "Soni",
  age: 18,
  location: ['Earth',"India"]
};
console.log(person);

//Accessing from objects
//Method 1
console.log(person.age);

person.firstName = "Aadi";
//Method 2
console.log(person["firstName"]);

delete person.location;
console.log(person);