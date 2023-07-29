const {createDestination,getDestinationById,getAllDestination,updateDestination,deleteDestination} = require("../controllers/destination")
const router = require("express").Router();

const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

router.post("/",upload.array('image'), createDestination);
router.put("/update/:id",updateDestination);
router.get("/:id", getDestinationById);
router.get("/",getAllDestination);
router.delete("/:id", deleteDestination);


module.exports = router;
