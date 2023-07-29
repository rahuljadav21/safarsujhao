const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripPlanSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
   destinations: [{
    type: Schema.Types.ObjectId,
    ref: 'Destination'
    }],
   totalExpense: {
    type: Number,
    required: true
   },
   totalTime: {
    type: Number,
    required: true
   },
   author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
   },
   tourists: [
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
   ]
});

module.exports = mongoose.model("TripPlan", tripPlanSchema);
