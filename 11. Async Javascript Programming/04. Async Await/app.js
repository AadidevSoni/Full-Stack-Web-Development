//Async Functions can run in the background asynchronously while other code executes
//Await operator waits for a promise and can only be used inside an asyn function

function fetchDataFromServer() {
  return new  Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("User data retrieved from the server");
    },4000);
  });
};

async function getUserData() {
  try {
    const data = await fetchDataFromServer()
    console.log(data);
    console.log("Remaining task can be executed here");
  } catch (error) {
    console.log(error);
  }
}

getUserData();

//Refactoring prev code
function callbackHell() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Inside callbackHell function"
      console.log(data);
      resolve(data);
    },2000);
  });
};

function firstFunc(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = `${data} - Processed First`;
      console.log(`Inside firstFunc Function`);
      resolve(processedData);
    },2000);
  });
};

function secondFunc(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = `${data} - Processed Second`;
      console.log("Inside (secondFunc) Function.");
      resolve(processedData);
    },1500);
  });
};

async function processedDataWithAsyncAwait() {
  try {
    const data = await callbackHell();
    const processedData1 = await firstFunc(data);
    const processedData2 = await secondFunc(processedData1);
    console.log("Final data: " + processedData2);
  } catch (error) {
    console.log(error);
  }
}

setTimeout(() => {
  processedDataWithAsyncAwait()
},5000);