// ----------- BAD WAY-----------
const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = function() {
  console.log("BAD");
} 
//secondBtn.onmousemove = function() {
  //console.log("BAD");
//} 

// ----------- GREAT WAY-----------
const best = document.querySelector(".best");

function greetings() {
  console.log("Yay");
}
best.addEventListener("click",greetings);

// ----------- Event (e) Object -----------
const para = document.querySelector(".para");
para.addEventListener("click",(event) => {
  console.log(event);
})

const form = document.querySelector("form");
const input = document.querySelector("input");
form.addEventListener("submit",(event) => {
  event.preventDefault(); //prevents default refershing of the page
  console.log(event);
  console.log(input.value);
})