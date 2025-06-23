//JSON - Javascript object notation for transmitting data between servers

const person = {
  "name" : "Aadidev",
  "age" : 19,
  "email" : "aadidev@gmail.com",
  "isSubsribed" : true,
  "hobbies" : ["Drawing","Painting"],
  "address" : {
    "city" : "New York",
    "idk" : true
  }
};

//JSON.stringyfy()
console.log(person);
const jsonString = JSON.stringify(person);
console.log(jsonString);

//JSON.parse()
const parsedOject = JSON.parse(jsonString);
console.log(parsedOject);