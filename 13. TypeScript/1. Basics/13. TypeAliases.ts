type User = {
  name: string;
  age: number;
  location: string;
};

const printUserInfo = (user: User) => {
  return `Name: (${user.name}) Age: (${user.age}) Location: (${user.location})`;
};

const result1 = printUserInfo({ name: "Alex", age: 20, location: "USA" });
console.log(result1);