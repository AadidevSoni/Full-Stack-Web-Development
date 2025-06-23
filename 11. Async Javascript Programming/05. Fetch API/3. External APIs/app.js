const btn = document.querySelector(".btn");
btn.addEventListener('click',makeRequest);

let clickCount = 0; //adding clickcount for fun
function makeRequest() {
  fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => {
    if(!res.ok) new Error(res.statusText);
    clickCount++;
    return res.json();
  }).then(data => {
    if(clickCount == 1){
      console.log(data.id);
      document.querySelector(".body").innerHTML = "";
      document.querySelector(".id").innerHTML = data.id;
    }
    if(clickCount == 2){
      console.log(data.title)
      document.querySelector(".id").innerHTML = "";
      document.querySelector(".title").innerHTML = data.title;
    }
    if(clickCount == 3){
      console.log(data.body);
      document.querySelector(".title").innerHTML = "";
      document.querySelector(".body").innerHTML = data.body;
      clickCount = 0;
    }
  }).catch(error => console.log(error));
}

//100 posts

const btn1 = document.querySelector(".btn1");
btn1.addEventListener('click',makeRequest1);

function makeRequest1() {
  fetch("https://jsonplaceholder.typicode.com/posts").then(res => {
    if(!res.ok) new Error(res.statusText);
    clickCount++;
    return res.json();
  }).then(data => {
    let output = document.querySelector(".all-posts");
    data.forEach(element => {
      output.innerHTML += 
        ` <div> (ID) : ${element.id} </div>
          <div> (TITLE) : ${element.title} </div>
          <div> (BODY ) : ${element.body} </div>
          <div class = "line" ></div> <br>
        `
    })
  }).catch(error => console.log(error));
}