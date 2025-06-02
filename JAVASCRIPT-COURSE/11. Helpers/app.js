//map helper - creates a new arrays and performs a specific task to each elements in the array
let numbers = [1,2,3,4,5];
let double = numbers.map(num => num*2);
//for each method modifies the existing array while map method creates a new array with modified values
console.log(double);

let peoples = [
  {firstName: "Aadidev" , lastName: "Soni"},
  {firstName: "Nael" , lastName: "Saade"},
  {firstName: "Asher" , lastName:"Saji"}
];
const result = peoples.map(person => {
  return([person.firstName , person.lastName]);
});
console.log(result);

let num = [1,2,3,4,5];
function multiply(numb){
  return numb *= 10;
}
let newNum = num.map(numb => multiply(numb));
//let newNum = num.map(multiply);
console.log(newNum);

//filter helper - creates a new array that passes a certain condiiton
const songs = [
  { name: "Lucky You", duration: 4.34 },
  { name: "Just Like You", duration: 3.23 },
  { name: "The Search", duration: 2.33 },
  { name: "Old Town Road", duration: 1.43 },
  { name: "The Box", duration: 5.23 },
];
let newSongs = songs.filter(song => song.duration > 3);
//console.log(songs.filter(song => song.duration > 3));
console.log(newSongs);

const computers = [
  { ram: 4, hdd: 100 },
  { ram: 8, hdd: 200 },
  { ram: 16, hdd: 300 },
  { ram: 32, hdd: 400 },
];
console.log(computers.filter(pc => pc.ram > 16));

//Challenge
const ages = [12,67,34,2,98,17];
function isKid(age){
  return(age <= 18);
}
let kids = ages.filter(isKid);
//let kids = ages.filter(age => isKid(age)); 
console.log(kids);

//Challenge
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
function greater(word){
  return(word.length > 6);
}
console.log(words.filter(greater));

//find helper - finds the first element in the array that matches a specific condition
const humans = [
  { name: "huxn", age: 17 },
  { name: "john", age: 18 },
  { name: "alex", age: 20 },
  { name: "jimmy", age: 30 },
  { name: "alex", age: 30 },
];
const res = humans.find(human => human.name === "alex");
console.log(res);

//every and some helper
//every helper returns true if every element i nthe array passes the given condition in callback function
//some method checks if atleast one element in the array apsses the given condition 

const friends = ["stephen","asher","nael"];
let ans = friends.every(friend => friend.length == 4);
console.log(ans);
ans = friends.some(friend => friend.length == 4);
console.log(ans); 

//reduce helper -> applies the reducer function to every element and accumulates the result into a single value
const nums = [1,2,3,4,5,6];
const sum = nums.reduce((p,c) => { //p and c are prev and current value in the array and we put 0 as the default prev value at start and whatever is in the {} is the current value
  return p+c
},0);
console.log(sum);

const people = [
  {
    name: "HuXn WebDev",
    age: 18,
  },
  {
    name: "Alex Mead",
    age: 29,
  },
  {
    name: "Brain Griffin",
    age: 40,
  },
];
const oldest = people.reduce((p,c) => (c.age > p ? c.age:p),0);
console.log(oldest);

const Words = [
  "apple",
  "banana",
  "orange",
  "banana",
  "apple",
  "orange",
  "apple",
  "grape",
];
let wordFrequency = Words.reduce((frequencyMap,word) => {
  frequencyMap[word] = frequencyMap[word] || 0+1; 
  return frequencyMap;
}, {});
console.log(wordFrequency); 
