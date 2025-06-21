//create folder
//npm init -y
//npm i express
//create instance express
//provided port
//basic route

import express from 'express';

const app = express(); //Creating the server

//Basic Routing
app.get('/', (req,res) => {
  res.send("Welcome to ExpressJS")
})

app.listen(8000, () => console.log("Server Up!"));