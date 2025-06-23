// BASICS OF CONSOLES  AND COMMENTS

console.log("Table")
console.table({name: "Aadi" , age: 18})
// clg  ->  console.log()

//VARIABLES
//(reserved keyword) (variable name) (type of variable)

//Declared variable
let name;

//Assign variable
name = "Aadidev";
console.log(name);

//Variable Challenge 
let Name = "Aadidev";
let whatDoYouWannaBecomeInYourLife = "programmer";
let gender = "male";
let twitterHandle = "Aadidev Soni"
console.table({Name:Name , Job:whatDoYouWannaBecomeInYourLife , Gender:gender , SoacialMedia:twitterHandle});

//Primitive Types
//1. Number

let num = 10;
num++;
console.log(num);
console.log(typeof num)

//Basic Math
console.log(2+2);
console.log(2*2);
console.log(2**3);

//Number Challenge
let firstFavNum = 7;
let secondFavNum = 10;
console.log(firstFavNum + secondFavNum);
console.log(firstFavNum - secondFavNum);
console.log(firstFavNum * secondFavNum);
console.log(firstFavNum / secondFavNum);
console.log(firstFavNum % secondFavNum);
console.log(firstFavNum ** secondFavNum);

//Boolean
let isTrue = true;
console.log(isTrue);

let number = NaN; //Not a number
console.log(number);

//falsy  ->  false  null  undefined  0  -0  NaN  ''  ""  

//Comparison Operators 
//->Relational  ->  >  <  >=  <=
console.log(10 > 10);
console.log(10 <= 10);

//->Equality
console.log(10 === 10); //strict checks type and value
console.log(10 === '10');
console.log(10 !== 10);
console.log(10 !== '10');
console.log(10 == '10'); //loose equality

//Strings
let firstName = "Aadidev";
let secondName = "Soni";

//1. Concatenation
console.log(firstName + " " + secondName);
let fullName = firstName.concat(secondName);
console.log(fullName);

//2. Append
firstName += " ";
console.log(firstName + secondName);

//3. Length
console.log(firstName.length);

//4. Cases
console.log(firstName.toUpperCase());

//5. Slice
console.log(firstName.slice(0, 4));

//6. Split & Joiin
console.log(firstName.split(''));
console.log(firstName.split('').join('-'));

//7. Include
console.log(firstName.includes('d'));

//8. Trim
console.log(firstName.trim());

let desc = `This is a random 
            text`;

console.log(desc);

fullName = `${firstName} ${secondName}`;
console.log(fullName);

//Type Conversion
//1. String to number
let money = "50";
money = parseInt(money);
money += money
money = Number(money);
console.log(typeof money);

//2. Number to String
money = 50;
money = money.toString();
money = String(money);
console.log(typeof money);

//3. String to Decimal
money = "50.25";
money = parseFloat(money);
console.log(typeof money);
