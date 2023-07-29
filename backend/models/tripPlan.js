const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripPlanSchema = new mongoose.Schema({
   destinations: [{
    type: Schema.Types.ObjectId,
    ref: 'Destination'
    }],
   totalExpence: {
    type: Number,
    required: true
   },
   totalTime: {
    type: Number,
    required: true
   },
   tourists: [
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
   ]
});

module.exports = mongoose.model("TripPlan", tripPlanSchema);
