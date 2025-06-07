// A factory function is a type of function that is used to create and return objects. It's a design pattern that provides an alternative way to create objects compared to using constructors and the new keyword.
//A function that returns an object

function createPerson(firstName,lastName,pl) {
  return {
    firstName: firstName,
    lastName: lastName,
    pl: pl,
    fullName: function() {
      console.log(`Hello my name is ${this.firstName} ${this.lastName} and I love ${pl}`);
    },
  }
};

const aadi = createPerson("Aadidev","Soni","JAVA");
console.log(aadi);
aadi.fullName();