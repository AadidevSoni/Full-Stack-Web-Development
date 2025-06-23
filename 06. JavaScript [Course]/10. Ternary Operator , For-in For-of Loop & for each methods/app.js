//Ternary Operator
let password =  8;
function passwordChecker(ps) {
  return ps == 8 ? "Strong" : "Weak";
}
let check = passwordChecker(password);
console.log(check);

//For-in loop
//In Object
let person = {
  name: "Aadi",
  age: 18,
  gender: "male"
};
for(let key in person) {
  console.log(key,person[key]);
}

//In Array
let nums = [1,2,3,4,5,6,7,8,9];
for(let index in nums){
  console.log(index + " : " + nums[index]);
}

//For-of loop
let peoples = ["Aadi","Adrik","Binit","Dany"];
for(let people of peoples){
  console.log(people);
}

const text = "Hello";
for(const char of text){
  console.log(char);
}

//for-each helper
const colors = ["green","red","blue"];
function printColor(color){
  console.log(color);
}
colors.forEach(color => printColor(color));
//colors.forEach(color =>  console.log(color);

colors.forEach((color,index,arr) => {
  arr[index] = color[0].toUpperCase() + color.substring(1);
  console.log(color + " -> " + arr[index]);
});
console.log(colors);  

//Challenge
let arr = [1,2,3,4,5];
let sum = 0;
function add(num){
  sum += num;
};
arr.forEach(number => add(number));
console.log("SUM = " + sum);