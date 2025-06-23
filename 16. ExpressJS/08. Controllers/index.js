import express from 'express';
const app = express(); 

//Ugly code
app.get("/student", (req,res) => {
  res.send("All students");
})

app.post("/student", (req,res) => {
  res.send("Add new student");
})

app.put("/student", (req,res) => {
  res.send("Update student");
})

app.delete("/student", (req,res) => {
  res.send("Delete student");
})

//app.route()

app.route("/students")
  .get((req,res) => res.send("All students"))
  .post((req,res) => res.send("Add new student"))
  .put((req,res) => res.send("Update student"))
  .delete((req,res) => res.send("Delete student"))

app.listen(8000, () => console.log("Server Up!"));