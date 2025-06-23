//Spread operator
//In Functions
function giveMe4(a,b,c,d) {
  console.log("a",a);
  console.log("b",b);
  console.log("c",c);
  console.log("d",d);
}
const colors = ["red" , "green" , "blue" , "teal"];

giveMe4(...colors); //... is spread operator it spreads the content of the aray and gives it to each of the parametersa

//In Arrays
const strNums = ['one','two','three'];
const moreStrNums = ['four','five','six'];
const concat = [...strNums,...moreStrNums];
for(let i=0;i<concat.length;i++){
  console.log(concat[i]);
}

let moreNums = ['zero',...concat,'seven'];
for(let i=0;i<moreNums.length;i++){
  console.log(moreNums[i]);
}

//In Objects
const  obj1 = {x:1, y:2};
const obj2 = {z:3};
const obj3 = {...obj1,...obj2};
console.log(obj3);

let clone = {...obj1};
console.log(clone);

clone = {...obj1,a:4};
console.log(clone);

//Rest operator- allows a funcxtion to accept an injdefinite amount of arguments
function user(...userData) {
  console.log(userData);
}
user("Aadi",19,"Dev");

function userinfo(x,...userData) {
  console.log(x);
  console.log(userData);
}
userinfo("Aadi",19,"Dev");