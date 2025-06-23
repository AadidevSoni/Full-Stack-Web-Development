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
const deleteDoc = async () => {
  try {
      //Delete By ID
      const result  = await MovieModel.findByIdAndDelete('68596c84311a405977772783');
      //console.log(result);

      //Delete One
      const result1  = await MovieModel.deleteOne({name: "Lightsw Out"});
      console.log(result1);

      //Delete Many
      const result2  = await MovieModel.deleteMany({$or: [{ratings:3},{ratings:4}]});
      console.log(result2);

  } catch (error) {
    console.log(error);
  }
}

export {deleteDoc};