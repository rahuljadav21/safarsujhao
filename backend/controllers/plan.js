const Destination = require("../models/destination");
const TripPlan = require("../models/tripPlan");
const user = require("../models/user");

module.exports.createTripPlan = async(req,res,next) =>{
    try {
        const tourists = [];
        tourists.push(req.body.userId)
        const tripPlan = new TripPlan({name:req.body.name,destinations:[],totalExpense:0,totalTime:0,tourists:tourists})
        const author = await user.findById(req.body.userId);
        author.tripPlans.push(tripPlan);
        tripPlan.author = author;
        await tripPlan.save();
        await author.save();
        res.status(200).send(tripPlan);
    } catch (error) {
        next(error);
    }
}

module.exports.getMyTripPlans = async (req,res,next) =>{
    try {
        const tripPlans = await TripPlan.find({author : req.body.userId});
        res.status(200).send(tripPlans);
    } catch (error) {
        next(error);
    }
}

module.exports.getTripPlan = async (req,res,next) =>{
    try {
        const tripPlan = await TripPlan.findById(req.params.id);
        res.status(200).send(tripPlan);
    } catch (error) {
        next(error);
    }
}

module.exports.addDestinationToPlan = async(req,res,next) =>{
    try {
        const tripPlan = await TripPlan.findById(req.params.id);
        const destination = await Destination.findById(req.params.desId);
        tripPlan.destinations.push(destination);
        tripPlan.totalExpense += destination.expense;
        tripPlan.totalTime += destination.timeToExplore;
        await tripPlan.save();
        res.status(200).send("Destination added Successfully")
    } catch (error) {
        next(error);
    }
}

module.exports.removeDestinationFromPlan = async(req,res,next) =>{
    try {
        const tripPlan = await TripPlan.findById(req.params.id);
        const destination = await Destination.findById(req.params.desId);
        await TripPlan.findByIdAndUpdate(req.params.id, { $pull: { destinations: req.params.desId } });
        tripPlan.totalExpense -= destination.expense;
        tripPlan.totalTime -= destination.timeToExplore;
        await tripPlan.save();
        
        res.status(200).send(tripPlan)
    } catch (error) {
        next(error);
    }
}

module.exports.addTourist = async(req,res,next) => {
    try {
        const tripPlan = await TripPlan.findById(req.params.id);
        const tourist = await user.findById(req.params.id);
        if(tourist) tripPlan.tourists.push(tourist);
        else res.status(404).send("Destination removed successfully");
        await tripPlan.save();
        res.status(200).send(tripPlan);
    } catch (error) {
        next(error);
    }
}

module.exports.deleteTripPlan = async(req,res,next) =>{
    try {
        await user.findByIdAndUpdate(req.body.userId,{$pull:{tripPlans:req.params.id}})
        await TripPlan.findByIdAndDelete(req.params.id);
        res.status(200).send("Trip plan deleted successfully");
    } catch (error) {
        next(error)
    }
}