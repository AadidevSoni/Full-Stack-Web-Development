//IF Statements
let a = 10;
let b = 20;
if(a>b){
  console.log("a is greater than b");
}else if(a == b){
  console.log("a is equal to b");
}
else{
  console.log("a is smaller than b");
}

//Challenge
let password;
if(password == 8){
  console.log("Welcome");
}else if(password <= 8){
  console.log("Password too short");
}else if(password >= 8){
  console.log("Password too long");
}else{
  console.log("Please provide a password");
}

//Switch Statements
let x = 0;
let text;

switch(x) {
  case 0:
    text = "off";
    break;
  case 1:
    text = "on";
    break;
  default:
    text = "no value";
    break;
}
console.log(text);

//For Loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//While Loop
let i = 1;
while(i <= 5){
  console.log(i);
  i++;
}

//Do While Loop
i = 1;
do {
  console.log("Hello world",i);
  i++;
}while(i<10);

//LOGICAL OPERATOR
// && || !
const A = true;
const B = false;
const c = 4;
console.log(A && B);
console.log(A || B);
console.log(!A);

let pass = "aadi-web";
if(pass.length > 7 && pass.includes("web")){
  console.log("VALID PASSWORD");
}else{
  console.log("INVALID PASSWORD");
}