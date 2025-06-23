const person = {
  name: "Aadi",
  age: 18,
  greetRegular: function() {
  console.log(`Hello my name is ${this.name} & I'm ${this.age} years old`);
  },
  greetArrow: () => {
    console.log(`Hello my name is ${this.name} & I'm ${this.age} years old`);
  }
};

const res1 = person.greetRegular();
const res2 = person.greetArrow();



