import express from 'express';
import path from 'path'
const app = express(); 

const fullPath = path.join(process.cwd(), './16. ExpressJS/12. Serving Static Files/public');
app.use(express.static(fullPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(fullPath, 'index.html'));
});

app.listen(8000, () => console.log("Server Up!"));