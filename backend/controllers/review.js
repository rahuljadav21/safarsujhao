const axios = require("axios");
const TripPlan = require("../models/tripPlan");
const user = require("../models/user");
const Review = require("../models/review");
const Destination = require("../models/destination");

module.exports.addreview = async (req,res,next) =>{
    try {
        const destination = await Destination.findById(req.params.id);
        const review = new Review(req.body.review);
        review.author = req.body.userId;
        let noOfReviews = destination.reviews.length;
        let r = destination.ratings ? destination.ratings : 0;
        let newRatings = (noOfReviews*r+ review.rating)/(noOfReviews+1);
        destination.reviews.push(review);
        destination.ratings = newRatings;
        
        await review.save();
        await destination.save();
        res.status(200).send("review added success fully");
    } catch (error) {
        next(error);
    }
}

module.exports.deleteReview = async (req, res) => {
    try {
        const { id, reviewId } = req.params;
        await Destination.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
        await Review.findByIdAndDelete(reviewId);
        res.status(200).send("review Deleted successfully");   
    } catch (error) {
        next(error);
    }
}