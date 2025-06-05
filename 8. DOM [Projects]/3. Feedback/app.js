//Getting elements
const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

//Attach events
ratingsContainer.addEventListener("click", e => {
//e.target → The actual element that was clicked
//e.target.parentNode → The parent element of that clicked element
  if(e.target.parentNode.classList.contains("rating")){ //This line of JavaScript is checking if the parent element of the element that was clicked (or triggered an event) has the CSS class "rating".
    //console.log(e.target.parentNode.classList.contains("rating"));
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML; //to get the text and not the emoji
  }
});

sendBtn.addEventListener("click",() => {
    panel.innerHTML = `
      <p class = "heart">❤️</p>
      <strong>Thank You!</strong>
      <br>
      <strong>Feedback: ${selectedRating} </strong>
    `
});

function removeActive() {
  for(let i=0;i<ratings.length;i++){
    ratings[i].classList.remove("active");
  }
}