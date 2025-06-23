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
const singleDoc = async () => {
  try {

    const result = await MovieModel.findById('68596b0e9904db9e7ec82b47');
    console.log(result);
    console.log(result.name);

    const result1 = await MovieModel.findById('68596b0e9904db9e7ec82b47',"money");
    console.log(result1);

    const result2 = await MovieModel.find({name: "Spiderman 2"});
    console.log(result2);

  } catch (error) {
    console.log(error);
  }
}

export {singleDoc};