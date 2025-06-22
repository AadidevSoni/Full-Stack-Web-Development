import express from 'express';
import userCredential from './middlewares/logs.js'
const app = express(); 

//Middle wares can be used to analyse the req nd res like authorizing a user 


// request middleware response

app.use(userCredential); //This mkes it such that the middleware will run for every request  

app.get("/",(req,res) => {
  res.send("<h1>Hello Admin</h1>")
})

app.get("/about",(req,res) => {
  res.send("<h1>Hello Admin</h1>")
})

app.listen(8000, () => console.log("Server Up!"));