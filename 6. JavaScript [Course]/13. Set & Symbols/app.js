//Set - Unlike arrays, duplicate values are automatically removed 
const initial = [1,2,3,2,2,2];  
const mySet = new Set(initial);
console.log(mySet);
mySet.add("apple");
mySet.add("Orange");

console.log(mySet.has("apple"));

mySet.delete(3);
console.log(mySet);

for(let item of mySet){
  console.log(item);
}

//Symbols - unique and immutable datatype and acts as identifier for object properties to remove potential naming conflicts
const mySymbol = Symbol("My symbol");
console.log(mySymbol);

//Comparing symbols 
const symb1 = Symbol("name");
const symb2 = Symbol("name");
console.log(symb1 === symb2);

const symbol1 = Symbol("name");
const symbol2 = Symbol("name");

const huxn = {};
huxn.age = 17;
huxn["gender"] = "male";
huxn["gender"] = "female";  //gender value updated
huxn[symbol1] = "Alex";
huxn[symbol2] = "John";
console.log(huxn);