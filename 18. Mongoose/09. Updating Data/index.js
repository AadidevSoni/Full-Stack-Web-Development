import express from 'express'
import connectDB from './db/connectDB.js';
import {updateDoc} from './models/Movies.js';
const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/test';

connectDB(DATABASE_URL);

updateDoc('68596b0e9904db9e7ec82b47');

app.listen(port, () => console.log("Server listening on port " + port));
