//Template strings
console.log(`This is some
  random text`);

console.log(`${2+2}`);

const name = "Aadi";
console.log(`My name is ${name}`);

function info() {
  return("My name is Aadidev");
}
console.log(`${info()}`);

//Arrow Functions
greet = (username) => {
  return `Hello ${username}`;
}
//greet = (username) => `Hello ${username}`;
console.log(greet("Aadi"));

//Enhanced Object Literals
function user(name,age,work) {
  return {
    name,  //Since both are same soo we dont have to write name: name we can remove either  
    age,
    work,
    intro: function() {
      console.log("Hello my name is " + this.name);
    },
  };
}

const me = user("Aadi",19,"Web dev");
console.log(me);

//Challenge
const lib = {
  sum : (a,b) => a+b,
  mult: (a,b) => a*b,
};
console.log(lib.sum(1,2));
console.log(lib.mult(2,3));

//Challenge default parameters
function multiply(a,b=1){
  return(a*b);
}
console.log(multiply(2,3));
console.log(multiply(2));