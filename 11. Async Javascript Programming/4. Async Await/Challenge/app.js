//Refactoring previous code
console.log("Start");

function getUserDataFromDB(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Getting User Name");
      resolve(name);
    },2000);
  });
};

function getUserHobbies(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Getting User Hobbies");
      resolve(["Cricket", "Reading", "Dancing"]);
    },2000)
  });
};

async function asyncFunction() {
  const name = await getUserDataFromDB("Aadi");
  const hobby = await getUserHobbies(name);
  console.log("Hobbies: " + hobby);
  console.log("End");
}

asyncFunction();
