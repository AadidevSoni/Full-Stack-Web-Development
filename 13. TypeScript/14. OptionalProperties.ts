type User1 = {
  name: string;
  age?: number;
  location: string;
};

const user: User1 = {
  name: "HuXn",
  location: "Arabic",
};

console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);