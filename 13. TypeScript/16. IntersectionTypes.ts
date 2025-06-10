type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

type User2 = UserInfo & AccountDetails;

const Aadi: User2 = {
  first: "Aadi",
  last: "WebDev",
  age: 18,
  email: "test@gmail.com",
  password: "strongpassword123",
};

console.log(
  `Name: (${Aadi.first} ${Aadi.last}) Age: (${Aadi.age}) Email: (${Aadi.email}) Password: (${Aadi.password})`
);