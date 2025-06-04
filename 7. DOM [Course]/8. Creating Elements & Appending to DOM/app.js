// ------------------------------------
// createElement()
const h1 = document.createElement("h1");
h1.textContent = "Hello World";
h1.classList.add("greetings");
h1.style.color = "green";
h1.style.backgroundColor = "lightGreen";
h1.style.textAlign = "center";
h1.style.padding = "20px";
console.log(h1);

// appendChild()
const body = document.body;
body.appendChild(h1);

const ul = document.querySelector("ul"); 
const newLi = document.createElement("li");
newLi.innerText = "NEW";
newLi.style.color = "teal";
ul.appendChild(newLi);

// insertBefore()
const firstLi = document.querySelector("li");
//selector.insertBefore(what,where);
ul.insertBefore(newLi,firstLi);

// append()
let section = document.querySelector("section");
const j = document.createElement("j");
j.innerText = "Fabulous";
j.style.color = "violet";
const span = document.createElement("span");
span.innerText = "Smile";
span.style.color = "blue";
//section.append(j,span);

// prepend()
section.prepend(j,span);

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

const firstP = document.querySelector("p");
const i = document.createElement("i");
i.innerText = "Hello, My name is Aadi";
i.style.color = "skyblue";
firstP.insertAdjacentElement("beforebegin",i); //inserts the i before firstP begins
firstP.insertAdjacentElement("afterbegin",i);
firstP.insertAdjacentElement("beforeend",i);
firstP.insertAdjacentElement("afterend",i);

// removeChild()
const newList = document.querySelector(".new-list");
const fourth = document.querySelector(".fourth");
newList.removeChild(fourth);

// remove()
//newList.remove();
// ------------------------------------