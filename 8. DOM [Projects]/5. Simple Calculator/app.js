const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const num1 = document.querySelector(".num1").value;
  const num2 = document.querySelector(".num2").value;
  const op = document.getElementById("selectOp").value;
  const result = document.querySelector(".result");

  switch(op){
    case "plus":
      result.innerHTML = +num1 + +num2;
      break;
    case "min":
      result.innerHTML = +num1 - +num2;
      break;   
    case "dev":
      result.innerHTML = +num1 / +num2;
      break;
    case "multi":
      result.innerHTML = +num1 * +num2;
      break;
  }
});