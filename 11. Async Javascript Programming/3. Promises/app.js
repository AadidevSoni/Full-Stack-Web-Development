function checkNumber(number) {
  return new Promise((resolve,reject) => {
    if(number % 2 == 0){
      resolve(`${number} is an even number`);
    }else{
      reject(`${number} is not an even number`);
    }
  });
}

const num = 7;
checkNumber(num).then((message) => {
  console.log("Success: " + message);
}).catch(error => {
  console.log("Error: " + error);
})

//Refactoring previous code
function callbackHell(){
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Inside callbackHell function"
      console.log(data);
      resolve(data);
    },2000);
  });
};

function firstFunc(data) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const processedData1 = `${data} - Processed First`;
      console.log(`Inside firstFunc Function`);
      resolve(processedData1);
    },2000);
  });
};

function secondFunc(data) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const processedData2 = `${data} - Processed Second`;
      console.log("Inside (secondFunc) Function.");
      resolve(processedData2);
    },1500);
  });
};

callbackHell()
  .then(data => firstFunc(data))
  .then((processedData1) => secondFunc(processedData1))
  .then((processedData2) => console.log(`Final result of all functions: ${processedData2}`))
  .catch((error) => console.log(error));