"use strict";
const person1 = {
    firstName: "Aadidev",
    lastName: "Soni",
    age: 18
};
console.log(`Name: ${person1.firstName} ${person1.lastName}, Age: ${person1.age}`);
// Using objects as function return value
function printUser() {
    return {
        name: "Aadi",
        age: 18,
        location: "India"
    };
}
;
const res4 = printUser();
console.log(res4);
