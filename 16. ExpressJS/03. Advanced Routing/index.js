//npm i nodemon
//"dev": "nodemon index.js" in scripts in package.json
//npm run dev

import express from 'express';

const app = express(); //Creating the server

// Route callback can be in the form of
//  - Single Callback Function
//  - More then one callback
//  - Array Of Function
//  - Combination Of Both

app.get("/abcd", (req, res) => {
  res.send("Matched /abcd");
});

app.get("/acd", (req, res) => {
  res.send("Matched /acd");
});

//Regex
app.get(/x/,(req,res) => {
  res.send("If the path includes the letter 'x' it will work")
});

//users/1234 (4 digit number)
app.get(/^\/users\/[0-9]{4}$/,(req,res) => {
  res.send("WELCOME USER")
});

//Nested Route 
app.get('/products/iphone', (req,res) => {
  res.send("FREE IPHONE");
})

app.listen(8000, () => console.log("Server Up!"));