//Maps - stores key-value pairs where both can be of any data type
//key can be of any data type 
const map = new Map();
const keyOne = "String";
const keyTwo = {};
const keyThree = function() {};
map.set(keyOne, "value of key1");
map.set(keyTwo, "value of key2");
map.set(keyThree, "value of key3");
console.log(map); 
console.log(map.keys());
console.log(map.values());
map.delete(keyThree);
console.log(map);
console.log(map.size);

//Iteration
for(let [key,value] of map) {
  console.log(`${key} --> ${value}`);
}

for(let key of map.keys()){
  console.log(key);
}

for(let value of map.values()){
  console.log(value);
}

//Challenge
const map1 = new Map();
const key1 = 'a';
const key2 = 'b';
const key3 = 'c';
map1.set(key1,1);
map1.set(key2,2);
map1.set(key3,3);
console.log(map1);
for(let [key,value] of map1){
  if(key === 'a'){
    console.log(value);  
  } 
}
console.log("Size = " + map1.size);