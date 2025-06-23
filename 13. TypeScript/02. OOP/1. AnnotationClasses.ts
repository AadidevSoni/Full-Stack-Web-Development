class Person2 {
  readonly name: string;
  age: number
  constructor(name: string,age: number) {
    this.name = name;
    this.age = age;
  }
}

const person2 = new Person2("Aadi",18);
console.log(person2);