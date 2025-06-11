"use strict";
function printType(s1, s2) {
    return [s1, s2];
}
const st = printType("Aadi", "Dev");
const nm = printType(1, 2);
const bl = printType(true, false);
console.log(st);
console.log(nm);
console.log(bl);
const dogPair = printType({ name: "Buddy", breed: "Labrador" }, { name: "Default", breed: "Unknown" });
console.log(dogPair);
//Key Value Pairs
function getRandomKeyValuePairs(obj) {
    const keys = Object.keys(obj); //Gets all the keys
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randKey, value: obj[randKey] };
}
const stringObject = { a: "apple", b: "banana", c: "cherry" };
const randomStringPair = getRandomKeyValuePairs(stringObject);
console.log(randomStringPair);
const numberObject = { one: 1, two: 2, three: 3, four: 4 };
const randomNumberPair = getRandomKeyValuePairs(numberObject);
console.log(randomNumberPair);
//Arrays filter VVIP ---------------------------------------------------------
function filterArray(array, condition) {
    return array.filter((item) => condition(item));
}
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray(numberArray, (num) => num % 2 === 0);
console.log(evenNumbers); // Outputs: [2, 4, 6, 8, 10]
const stringArray = ["apple", "banana", "cherry", "date"];
const shortWords = filterArray(stringArray, (word) => word.length < 6);
console.log(shortWords); // Outputs: ["apple", "date"]
const fruitArray = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Cherry", color: "Red" },
];
const redFruits = filterArray(fruitArray, (fruit) => fruit.color === "Red");
console.log(redFruits);
