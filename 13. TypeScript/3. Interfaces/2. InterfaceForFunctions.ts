interface mathOperation {
  (x:number,y:number):number;
}

const add: mathOperation = (a,b) => a+b;
console.log(add(2,2));