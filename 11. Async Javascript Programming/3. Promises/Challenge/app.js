//Refactoring previous code
console.log("Start");

function getUserDataFromDB(name) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("Getting User Name"); 
      if(name == "Aadidev"){
        reject(data);
      }
      resolve(name);
    },2000);
  });
};

function getUserHobbies(name) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("Getting User Hobbies");
      resolve(["Cricket", "Reading", "Dancing"]);
    },2000);
  });
};

getUserDataFromDB("Aadi")
  .then((name) => getUserHobbies(name)) 
  .then((hobby) => console.log("Hobby: " + hobby))
  .catch((error) => console.log("Invalid name"));

console.log("End");