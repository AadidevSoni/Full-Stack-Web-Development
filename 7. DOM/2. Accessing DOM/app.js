// ************ DOM SELECTORS ************
// 1. getElementsByTagName
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1").length);

// 2. getElementById
console.log(document.getElementById("main"));
console.log(document.getElementById("id-1"));

// 3. getElementsByClassName
console.log(document.getElementsByClassName("cls"));

// 4. querySelector
console.log(document.querySelector("h4")); //only selects the first h4
console.log(document.querySelector(".cls-1"));
console.log(document.querySelector("#id-1"));
console.log(document.querySelector("li"));  //selects first li

// 5. querySelectorAll
document.querySelectorAll("h4");
console.log(document.querySelectorAll("li"));  //selects all li

// ---------------------------------------
// Storing data in variables
const h1 = document.querySelector("h1");  
console.log(h1);

const list = document.querySelectorAll("li");  
console.log(list);