// 1. Check the innerText of "first" element
// 2. Check the textContent of "second" element
// 3. Check the innerHTML of "third" element

const text1 = document.querySelector(".first");
console.log(text1.innerText);

const text2 = document.querySelector(".second");
console.log(text2.textContent);

const text3 = document.querySelector(".third");
console.log(text3.innerHTML);