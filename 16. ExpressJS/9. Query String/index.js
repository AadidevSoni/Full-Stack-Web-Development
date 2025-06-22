import express from 'express';
const app = express(); 

// A query string is the part of a URL that follows the question mark (?).
// It is used to pass data from the client to the server.
// The query string consists of one or more key-value pairs separated by ampersands (&), where each key is separated from its value by an equals sign (=).

app.get('/product',(req,res) => {
  res.send(`RESPONSE OK! ${req.query.category}`) //http://localhost:8000/product/?category=apple
})

app.get('/products',(req,res) => {
  const {category} = req.query;
  res.send(`RESPONSE OK! ${category}`) //http://localhost:8000/products/?category=apple
})

//Multiplee Query

app.get('/productz',(req,res) => {
  const {category,id} = req.query;
  res.send(`Product Category ${category} & Product ID: ${id}`); //http://localhost:8000/productz/?category=apple&id=1234
})


app.listen(8000, () => console.log("Server Up!"));