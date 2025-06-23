import path from "path";

//Return the last portion of a path. Similar to the Unix basename command. Often used to extract the file name from a fully qualified path.
console.log(path.basename("c:/nodejs/index.js")); //gives last portion - index.js

console.log(path.basename("c:/nodejs/index.js",".js"));  //This removes the .js extension of index

console.log(path.dirname("c:/nodejs/courses/index.js"));

console.log(path.extname("c:/nodejs/courses/index.js"));

console.log(path.join('c:','nodejs','courses','index.js'));

//Go Up a level
console.log(path.join('c:','nodejs','courses','index.js',"..")); //Hence it removes the index.js as it goes up
console.log(path.join('c:','nodejs','courses','index.js',"..",".."));

console.log(path.normalize('c:/aadidev/webdev/fullstack/nodejs/courses/index.js'));

console.log(path.parse("c://nodejs/courses/index.js"));
console.log(path.parse("c://nodejs/courses/index.js").ext);
console.log(path.parse("c://nodejs/courses/index.js").base);