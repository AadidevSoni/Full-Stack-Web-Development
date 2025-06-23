//Fetch API
console.log(fetch("text.txt"));
//callback
//promises
//asnc and await

//text method returns promise
//if resolved returns text representation of body
fetch("text.txt")
  .then(res => res.text())
  .then((data) => console.log(data))
  .catch(error => console.log(error));
  //Fetch API only rejects when we have network error

//Better way to handle error
fetch("text.txt")
  .then(res => {
    if(!res.ok) throw Error(res.statusText)
    return res.text();
  })
  .then((data) => console.log(data))
  .catch(error => console.log(error));

//Refactroing and displaying
const result = document.querySelector(".results");

async function renderData() {
  try {
    const response = await fetch("text.txt");
    if(!response.ok) throw Error(response.statusText);
    const data = await response.text();
    result.textContent = data;
  } catch (error) {
    console.log(error);
  }
}

renderData();