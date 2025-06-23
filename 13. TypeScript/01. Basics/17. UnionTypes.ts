let password : string | number = 12;

type UserInfo1 = {
  first: string;
  last: string;
  age: number;
}

type AccountDetails1 = {
  email: string;
  password: string;
};

let user2: UserInfo1 | AccountDetails1 = {
  first: "HuXn",
  last: "WebDev",
  age: 29,
}

console.log(user2);

//In arrays
const item3: (number | string)[] = [1, 3, "hello"];
console.log(item3);