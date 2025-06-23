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
    //Limits
    const result = await MovieModel.find().limit(3);
    //console.log(result);

    //Skip
    const result1 = await MovieModel.find().skip(2);
    //console.log(result1);

    //Count
    const result2 = await MovieModel.find().countDocuments();
    //console.log(result2);

    //Sort
    const result3 = await MovieModel.find().sort({name: 1});
    console.log(result3);

  } catch (error) {
    console.log(error);
  }
}

export {singleDoc};