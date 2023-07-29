const axios = require("axios");
const Destination = require("../models/destination");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapBoxToken = process.env.MAPBOX_TOKEN;
const { cloudinary } = require("../cloudinary");

module.exports.createDestination = async (req,res,next) =>{
    try {

        const geoData = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${req.body.name}.json?proximity=ip&access_token=${mapBoxToken}`)
        console.log(geoData)
        const destination = new Destination(req.body);
        destination.geometry = geoData.data.features[0].geometry;
        
        if(req.files){
            destination.photos = req.files.map(f => ({ url: f.path, filename: f.filename }));
        }
        await destination.save();
        res.send(destination);
    } catch (error) {
        next(error);
    }
}

module.exports.getAllDestination = async (req,res,next) =>{
    try {
        const destinations = await Destination.find({});
        res.status(200).send(destinations);
    } catch (error) {
        next(error);
    }
}


module.exports.getDestinationById = async (req,res,next) =>{
    try {
        const destination = await Destination.findById(req.params.id);
        res.status(200).send(destination);
    } catch (error) {
        next(error);
    }
}

module.exports.updateDestination = async (req,res,next) =>{
    try {
       
        const destination = await Destination.findByIdAndUpdate(req.params.id,{...req.body});
        if(req.files){
            const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }));
            destination.photos.push(...imgs);
        }        
        
        await destination.save();
        if (req.body.deleteImages) {
        for (let filename of req.body.deleteImages) {
            await cloudinary.uploader.destroy(filename);
        }
         await destination.updateOne({ $pull: { photos: { filename: { $in: req.body.deleteImages } } } })
        }
        res.status(200).send("Destination Updated Successfully");
        
    } catch (error) {
        next(error);
    }

}

module.exports.deleteDestination = async (req,res,next) =>{
    try {
        await Destination.findByIdAndDelete(req.params.id)
        res.status(200).send("Destination Deleted Successfully")
    } catch (error) {
        next(error);
    }
}