const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new mongoose.Schema({
  url: String,
  filename: String
});


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  firstname: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  lastname: {
    type: String,
    required: true,
    min: 3,
    max: 20
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  profilePicture: {
    type:ImageSchema
  },
  mobile: {
    type: String,
    require: false,
    unique: true,
    min: 10,
    max: 12,
  },
  address: {
    type: String,
    require: false,
    unique: false,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  tripPlans:[{
    type: Schema.Types.ObjectId,
      ref: 'TripPlan'
  }]
  ,
  favouritePlaces:[
    { 
      type: Schema.Types.ObjectId,
      ref: 'Destination'
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
