import express from 'express';
import path from 'path'
import route from './routes/route.js'
import bodyParser from 'body-parser';
const app = express(); 

app.set('view engine','ejs'); //teels express that we arer using ejs

app.use('/',route);

//Inorder tyo use body parser
app.use(bodyParser.json());

//Getting data passed as JSON from thunderclient
app.post('/post', (req,res) => {
  const {name,age} = req.body; //Inorder to get data from body, we need to download body parser
  res.send(`data posted.. Name: ${name} , Age: ${age}`);
})

app.listen(8000, () => console.log("Server Up!"));