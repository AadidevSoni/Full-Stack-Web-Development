"use strict";
function greet1(person = "Anonymous") {
    return `Hello ${person}`;
}
const res1 = greet1();
console.log(res1);
