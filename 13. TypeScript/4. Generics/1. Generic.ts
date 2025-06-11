function printType<T>(s1:T,s2:T):[T,T] {
  return [s1,s2];
}

const st = printType<string>("Aadi","Dev");
const nm = printType<number>(1,2);
const bl = printType<boolean>(true,false);
console.log(st);
console.log(nm);
console.log(bl);

//Interface

interface Dog1 {
  name: string;
  breed: string;
}
const dogPair = printType<Dog1>(
  { name: "Buddy", breed: "Labrador" },
  { name: "Default", breed: "Unknown" }
);
console.log(dogPair);

//Key Value Pairs

function getRandomKeyValuePairs<T>(obj:{[key:string] : T}) : {key:string,value:T} {
  const keys = Object.keys(obj); //Gets all the keys
  const randKey = keys[Math.floor(Math.random() * keys.length)];

  return {key:randKey,value: obj[randKey]};
}

const stringObject = { a: "apple", b: "banana", c: "cherry" };
const randomStringPair = getRandomKeyValuePairs<string>(stringObject);
console.log(randomStringPair);

const numberObject = { one: 1, two: 2, three: 3, four: 4 };
const randomNumberPair = getRandomKeyValuePairs<number>(numberObject);
console.log(randomNumberPair);

//Arrays filter VVIP ---------------------------------------------------------

function filterArray<T>(array:T[],condition:(item:T) => boolean):T[] {
  return array.filter((item) => condition(item));
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);
console.log(evenNumbers); // Outputs: [2, 4, 6, 8, 10]

const stringArray = ["apple", "banana", "cherry", "date"];
const shortWords = filterArray<string>(stringArray, (word) => word.length < 6);
console.log(shortWords); // Outputs: ["apple", "date"]

interface Fruit {
  name: string;
  color: string;
}

const fruitArray: Fruit[] = [
  { name: "Apple", color: "Red" },
  { name: "Banana", color: "Yellow" },
  { name: "Cherry", color: "Red" },
];

const redFruits = filterArray<Fruit>(
  fruitArray,
  (fruit) => fruit.color === "Red"
);
console.log(redFruits);