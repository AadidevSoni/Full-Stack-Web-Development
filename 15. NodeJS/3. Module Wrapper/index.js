/*
Module Wrapper
Before a module's code is execuited, Node.js will wrap it
with a function wrapper that looks like the following👇
 (function(exports, require, module, __filename, __dirname) {
    //  <module code>
 }
By doing this, Node.js achieves a few things 👇
👉 It keeps top-level variables (defined with var, let, const) scoped to the module rather then global object.
👉 It helps to provide some global-looking variables that are
actually specific to the module.
Arguments
exports: Allows us to export data from one file to other(s).
require: Allows us to import data from one file to another.
module: A reference to the current module.
__dirname: Directory name of the current module.
__filename: The filename of the current module.
*/

console.log("Hello World");

// Behind the scene 👇
// (function (exports, require, module, __filename, __dirname) {
//   console.log("Hello World");
// })(); // 👈 If you wanna call it

console.log(__dirname);
console.log(__filename);
console.log(module);