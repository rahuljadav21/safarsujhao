const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const airportSchma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    distance: {
        type: Number,
        required: true
    }
})

const railwayStationSchma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    distance: {
        type: Number,
        required: true
    }
})

const ImageSchema = new mongoose.Schema({
    url: String,
    filename: String
  });

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  city: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  state:{
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  country: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  airport: {
    type: airportSchma
  },
  railwayStation: {
    type: railwayStationSchma
  },
  timeToExplore: {
    type: Number,
    required: true
  },
  expense: {
    type: Number,
    required: true
  },
  bestTimeToVisit: {
    type: String,
  },
  geometry: {
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
  },
  photos:[ImageSchema],
  reviews: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }
    ]

});

module.exports = mongoose.model("Destination", destinationSchema);
