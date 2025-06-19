import fs from 'fs'

// 👉 Blocking 👈
//console.log("Start");
//alert("Block");
//console.log("End");

// 👉- Non-Blocking 👈
//console.log("Start");
//setTimeout(() => {
//alert("Non-Blocking");
//}, 1000);
//console.log("End");

//Start , End , then Non Blocking

// ****************************************************
// Without Callback
console.log("Start");

let data = fs.readFileSync("test.txt");
console.log(data.toString());

console.log("Ended ");

//Start Hello World then End doo it is blocking our end code until it reads that file

// -------------------------------------
// With Callback

console.log("Program Start");

fs.readFile("test.txt", (err, res) =>
  err ? console.log(err) : console.log(res.toString())
);

console.log("Program Ended");
//Start End Hello World   soo it is non blocking
// ****************************************************