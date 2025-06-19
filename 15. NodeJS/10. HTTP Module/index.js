import http from "http"

//Create our server
const server = http.createServer((req,res) => {
  //console.log(req);
  //res.setHeader("Content-Type","text/html"); //to let the server know we are using html or text format
  //res.statusCode = 404;
  //res.statusMessage = "Not Found!";

  res.writeHead(202,"Good",{"Content-Type" :"text/html"});

  res.write("<h1> Hello from Node.js Server! </h1>")
});

//Port: 8000
//Listening on port 8000
server.listen(8000, () => console.log("Server Up!"));