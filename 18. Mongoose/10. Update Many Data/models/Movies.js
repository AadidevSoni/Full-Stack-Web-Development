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
const updateManyDoc = async () => {
  try {

      //UpdateMany
      const result  = await MovieModel.updateMany({ratings: 3},{name: "Three Star Movie"});
      console.log(result);

  } catch (error) {
    console.log(error);
  }
}

export {updateManyDoc};