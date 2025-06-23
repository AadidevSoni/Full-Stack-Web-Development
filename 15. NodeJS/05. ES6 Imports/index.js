import greet from "./greet.js";
//In case of using import you have to prvide the .js extension

greet("Aadi");

//This will show a error and ask you to make the file in .mjs format
//Instead, make a package.json file and add   "type": "module",   
//   If you change the extention to .mjs you will no longer have
//   access to (require(thing)) (__dirname) (__filename) etc.
// 2️⃣ Change the type to (module) using npm init.

import {person1,person2,person3} from './people.js'
console.log("Person 1 : " , person1);
console.log("Person 2 : " , person2);
console.log("Person 3 : " , person3);