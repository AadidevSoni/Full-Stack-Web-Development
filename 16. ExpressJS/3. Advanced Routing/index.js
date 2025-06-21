//npm i nodemon
//"dev": "nodemon index.js" in scripts in package.json
//npm run dev

import express from 'express';

const app = express(); //Creating the server

app.get('/',(req,res) => {
  res.send("<h1>HOME PAGE</h1>");
});

app.get('/about',(req,res) => {
  res.send('<h1>ABOUT</h1>');
});

app.listen(8000, () => console.log("Server Up!"));