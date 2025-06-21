import express from 'express';

const app = express(); //Creating the server

// Route callback can be in the form of
//  - Single Callback Function
//  - More then one callback
//  - Array Of Function
//  - Combination Of Both

// One Callback Function 🛫
app.get("/single-cb", (req, res) => res.send("Single Callback"));

//Double callback
app.get("/double-cb", (req, res, next) => {
  console.log("First Callback");
  next();
}, (req, res) => {
  res.send("Second Callback");
});

//Arrays of callback function
const cb1 =(req,res,next) => {
  console.log("First Callback");
  next();
}

const cb2 =(req,res,next) => {
  console.log("Second Callback");
  next();
}

const cb3 =(req,res) => {
  console.log("Third Callback");
  res.send("Array of callbacks");
}

app.get("/array-cb", [cb1,cb2,cb3])

//Craziness
const cb_1 = (req,res,next) => {
  console.log("First Callback");
  next();
}

const cb_2 = (req,res,next) => {
  console.log("Second Callback");
  next();
}

app.get("/craziness",[cb_1,cb_2], (req,res,next) => {
   console.log("Thirs callback");
   next();
}, (req,res) => {
  console.log("Fourth Callback");
  res.send("CRAZYY!!"); 
});

app.listen(8000, () => console.log("Server Up!"));