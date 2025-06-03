//Destructuring - unpack variables from data object to variables
//From array
const nums = ["one","two","three"];
const [one,two,three] = nums;
console.log(one);
console.log(two);
console.log(three); 

//Default values
let [a=5,b=3] = [1];
console.log("a = " + a);
console.log("b = " + b);

//From function
function f() {
  return[1,2];
}
let x,y;
[x,y] = f();
console.log("x = " + x);
console.log("y = " + y);

//Ignoring return values  
function fun() {
  return[1,2,3];
}
let p,q;
[p,,q] = fun();
console.log("p = " + p);
console.log("q = " + q);

//Assigning rest of array to a variable
const [e,...g] = ['one','two','three'];
console.log(e);
console.log(g);

//In array destructring, name doesnt matter but in object destructuring, name matters

//Object destructring
const student = {
  name: "Aadidev",
  position: "First",
  rollNo: 1
};
const {name,rollNo} = student;
console.log(name,rollNo);

//Renaming variables for object destructring
const num = {x:100 , y:200};
const {x:X,y:Y} = num;
console.log("X = " , X);
console.log("Y = " , Y);

//Object destructuring and rest operator
let {A,B,...rest} = {A:100,B:200,C:300,D:400};
console.log("A = " , A);
console.log("B = " , B);
console.log("Rest = ", rest);

//Function destructuring
const person = {
  name: "Aadidev",
  age:18,
  country:"India" 
};
function printPersonInfo({name,age,country}) {
  console.log("Name: " + name);
  console.log("Age: " + age);
  console.log("Country: " + country);
}
printPersonInfo(person)

//Renaming function destructuring
const movies = {
  title: "Jungle Book",
  author: "JK Rowling",
};
function movieInfo({title,author:director,gross=100000}){
  console.log(`${title} , ${director} , Gross = $${gross}`);
}
movieInfo(movies);

//Nested Destructuring
const songs = [
  {name: "Baby",singer:"Justin Beiber"},
  {name: "Holiday",singer:"KSI"}
];
const[,{singer}] = songs;
console.log(singer);

//Challenge
const data = {
  user: {
    id: 123,
    Name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
      city: "New York",
      country: "USA",
    },
    hobbies: ["Reading", "Painting", "Cooking"],
    scores: {
      math: 95,
      science: 88,
      history: 75,
    },
  },
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
  ],
  settings: {
    darkMode: true,
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    language: "English",
  },
};
const {
  user: {
    id, Name, age, email, 
    address:{
      city,
      country
    },
    hobbies,
    scores: {
      math,
      science,
      history
    },
  },
  products: [product1,product2,product3],
  settings: {
    darkMode,
    notifications: {
      email:emailNotifications,
      sms:smsNotifications,
      push:pushNotifications
    },
    language
  },
} = data;
console.log(`Name: ${Name}`);
console.log(`Age: ${age}`);
console.log(`Address: ${city}, ${country}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Math Score: ${math}`);
console.log(`Science Score: ${science}`);
console.log(`History Score: ${history}`);
console.log(`Product 1: ${product1.name} - $${product1.price}`);
console.log(`Product 2: ${product2.name} - $${product2.price}`);
console.log(`Product 3: ${product3.name} - $${product3.price}`);
console.log(`Dark Mode: ${darkMode}`);
console.log(`Email Notifications: ${emailNotifications}`);
console.log(`SMS Notifications: ${smsNotifications}`);
console.log(`Push Notifications: ${pushNotifications}`);
console.log(`Language: ${language}`);