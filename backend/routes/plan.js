const {getMyTripPlans,removeDestinationFromPlan,createTripPlan,getTripPlan,addDestinationToPlan,addTourist, deleteTripPlan} = require("../controllers/plan")
const router = require("express").Router();

const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

router.post("/",createTripPlan);
router.get("/myplans",getMyTripPlans);
router.get("/:id",getTripPlan);
router.put("/:id/adddestination/:desId",addDestinationToPlan);
router.put("/:id/removedestination/:desId",removeDestinationFromPlan);
router.put("/addtourist",addTourist);
router.delete("/delete/:id",deleteTripPlan);

module.exports = router;
