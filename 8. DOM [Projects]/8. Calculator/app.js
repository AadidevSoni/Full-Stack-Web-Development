let nums = document.querySelectorAll(".num");
let res = document.querySelector(".result");
let op = document.querySelectorAll(".op");
let ans = document.querySelector(".ans");

let c = 0;
let num1 = '';
let num2 = '';
let opr = '';
window.addEventListener("click", e => {
  if(e.target.parentNode.classList.contains("numbers")){
    if(c == 0){
      res.innerText += e.target.value;
      num1 += e.target.value;
    }else{
      res.innerText = '';
      res.innerText += e.target.value;
      num2 += e.target.value;
    }
  };
  if(e.target.classList.contains("op")){
    c++;
    opr = e.target.value;
    switch(opr) {
      case '+' :
        num1 = Number(res.innerText);
        res.innerText = '';
        break;
      case '-' :
        num1 = Number(res.innerText);
        res.innerText = '';
        break;
      case 'x' :
        num1 = Number(res.innerText);
        res.innerText = '';
        break;
      case '/' :
        num1 = Number(res.innerText);
        res.innerText = '';
        break;
    }
    res.innerText += e.target.value;
  };
  if(e.target.classList.contains("ans")){
    num2 = Number(res.innerText);
    let p =0;
    switch(opr){
      case '+':
        p = num1 + num2
        res.innerText = String(p);
        break;
      case '-':
        p = num1 - num2
        res.innerText = String(p);
        break;
      case 'x':
        p = num1 * num2
        res.innerText = String(p);
        break;
      case '/':
        p = num1 / num2
        res.innerText = String(p);
        break;
      }
  }
  if(e.target.classList.contains("clear")){
    res.innerText = "";
  };
})