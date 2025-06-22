import express from 'express';
import students from './routes/student.js'
const app = express(); 

// First check this link out 👇
// http://expressjs.com/en/5x/api.html#router

// 1. Create routes folder and put your routes in a seperate file.
// 2. Create instance of express.Router()
// 3. Instead of app.method change that to "router.method"
// 4. Export router from a specific file
// 5. Import route in index.js file
// 6. use the (app.use) built-in middleware & provide your routes.

app.use('/students',students)

app.listen(8000, () => console.log("Server Up!"));