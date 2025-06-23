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
const createDoc = async () => {
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
    const result = await m1.save();
    console.log(result);
    
  } catch (error) {
    console.log(error);
  }
}

export {createDoc};