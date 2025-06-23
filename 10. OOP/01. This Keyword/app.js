console.log(window);
console.log(this); //also givces us the window object
console.log(this === window);

window.firstName = "Aadi";
this.lastName = "Dev";
console.log("firstname: " + window.firstName);
console.log("lastname: " + window.lastName);

//Function

function printThis() {
  return this; //window
}

const res = printThis();
console.log(res); //window again

//Function in object

const obj = {
  firstName: "Aadi",
  lastName: "WebDev",
  fullName: function() {
    //return this; //owner obj
    return(`${this.firstName} ${this.lastName}`);
  }
}

const resu = obj.fullName();
console.log(resu);

//Arrow Function in object

const obj1 = {
  firstName: "Aadi",
  lastName: "WebDev",
  fullName: () => {
    //return this; //window
    return(`${this.firstName} ${this.lastName}`); 
  }
}

const resu1 = obj1.fullName();
console.log(resu1);