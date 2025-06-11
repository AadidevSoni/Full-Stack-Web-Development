function greet1(person: string = "Anonymous") {
  return `Hello ${person}`;
}

const res1 = greet1();
console.log(res1);