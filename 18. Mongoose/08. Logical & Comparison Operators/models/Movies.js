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
    
    //Comparison
    const result = await MovieModel.find({money:{$gt: 100000}});
    //console.log(result);

    const result1 = await MovieModel.find({money:{$lt: 100000}});
    //console.log(result1);

    //not included
    const result2 = await MovieModel.find({money:{$ne: 100000}});
    //console.log(result2);

    //Logical
    const result3 = await MovieModel.find({$and: [{money: 900000},{ratings: 5}]});
    console.log(result3);

    const result4 = await MovieModel.find({$or: [{money: 900000},{ratings: 5}]});
    console.log(result4);

  } catch (error) {
    console.log(error);
  }
}

export {singleDoc};