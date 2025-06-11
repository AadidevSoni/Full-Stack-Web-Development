type myType = string | number;
function exampleFunction(value:myType):void {
  if(typeof value === "string") {
    console.log(value.toUpperCase());
  }else {
    console.log(value.toFixed(2));
  }
}

exampleFunction("hello"); 
exampleFunction(42);