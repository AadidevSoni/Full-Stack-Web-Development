const person1 : {firstName:string;lastName:string;age:number} = {
  firstName: "Aadidev",
  lastName: "Soni",
  age: 18
};

console.log(`Name: ${person1.firstName} ${person1.lastName}, Age: ${person1.age}`);

// Using objects as function return value
function printUser(): {name:string;age:number;location:string} {
  return {
    name: "Aadi",
    age: 18,
    location: "India"
  };
};

const res4 = printUser();
console.log(res4);