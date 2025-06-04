let firstLi = document.querySelector("li");

//parent
console.log(firstLi);  
console.log(firstLi.parentElement);
console.log(firstLi.parentElement.parentElement);
console.log(firstLi.parentElement.parentElement.parentElement);

//children
let ul = document.querySelector("ul");
console.log(ul.children);
console.log(ul.children[3]);
console.log(ul.children[1].innerText);

//Siblings
console.log(firstLi.nextElementSibling.textContent);
console.log(firstLi.nextElementSibling.nextElementSibling.textContent);

let fourthLi = document.querySelector(".fourth");
console.log(fourthLi.previousElementSibling.textContent);