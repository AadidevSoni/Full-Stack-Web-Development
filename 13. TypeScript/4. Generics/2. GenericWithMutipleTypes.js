"use strict";
function reversePair(value1, value2) {
    return [value2, value1];
}
const reversedPair = reversePair("Hello", 42);
console.log(reversedPair);
// Generic function to combine two values into an array
function combineValues(value1, value2) {
    return [value1, value2];
}
const combinedStringAndNumber = combineValues("Hello", 42);
console.log(combinedStringAndNumber);
