import http from 'http'

const server = http.createServer((req,res) => {
  res.writeHead(202,"Good",{"Content-Type" :"text/html"});
  res.write("<h1> Hello Node.js Server! </h1>")
});

server.listen(8000, () => console.log("Server Up!"));
//Now we dont have to restart our server. if we make changes, itr updates it

/*
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  Above are added in package.json
*/