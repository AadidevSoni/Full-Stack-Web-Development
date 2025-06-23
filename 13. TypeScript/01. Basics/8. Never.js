"use strict";
//Used for functio jthat always throw error, has infinite loop or a variable that can never have a value
// 1.
function throwError(msg) {
    throw new Error(msg);
}
// 2.
function infiniteLoop() {
    while (true) { }
}
// 3.
let x;
function neverReturns() {
    while (true) { }
}
x = neverReturns(); // This line will cause a compile-time error because the function never returns
