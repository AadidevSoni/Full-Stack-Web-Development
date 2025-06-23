import mongoose from "mongoose";

//Define Schma (blueprint for collection)
const movieSchema = new mongoose.Schema({
  name: {type:String, required:true, trim:true},
  ratings: {type:Number, required:true, min:1, max:5},
  money: {
    type:mongoose.Decimal128,
    required: true,
    validate: v => v >= 10,
  },
  genre: {type:Array},
  isActive: {type:Boolean},
  comments: [{value:{type:String}, published: {type:Date, default: Date.now}},],
});

//Creating Model
const MovieModel = mongoose.model("Movie",movieSchema); //Converts it into movies

//Create doc
const insertManyDoc = async () => {
  try {

    //Creating new document
    const m1 = new MovieModel({
      name: "Spiderman 2",
      ratings: 3,
      money: 600000,
      genre: ['action','adventure'],
      isActive: true,
      comments: [{value: "That was an amazign movie!"}]
    })

    const m2 = new MovieModel({
      name: "Black Panther",
      ratings: 2,
      money: 70000,
      genre: ['action','adventure'],
      isActive: true,
      comments: [{value: "This was a sad movie"}]
    })

    const m3 = new MovieModel({
      name: "Lightsw Out",
      ratings: 5,
      money: 900000,
      genre: ['horror','thriller'],
      isActive: true,
      comments: [{value: "That was a very scary movie!"}]
    })

    const m4 = new MovieModel({
      name: "Toy Story",
      ratings: 4,
      money: 80000,
      genre: ['kids','family','adventure'],
      isActive: true,
      comments: [{value: "That was an amazign movie!"}]
    })
    
    const result = await MovieModel.insertMany([m2,m3,m4]);
    
  } catch (error) {
    console.log(error);
  }
}

export {insertManyDoc};