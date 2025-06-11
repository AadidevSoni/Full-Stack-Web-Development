import express, {Request,Response} from "express";

const app = express()
const port = 3000;
app.get('/',  (request: Request,response: Response) => {
  response.send("Hello typescript with express.js")
})
app.listen(port, () => console.log(`Server running on port ${port}`));

//localhost:3000 will elt you see the server    