const { createDestination, getDestinationById, getAllDestination, removeFromFavoritePlaces, updateDestination, deleteDestination, addToFavoritePlaces } = require("../controllers/destination")
const router = require("express").Router();

const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

router.post("/", upload.array('image'), createDestination);
router.put("/update/:id", updateDestination);
router.get("/:id", getDestinationById);
router.get("/", getAllDestination);
router.delete("/:id", deleteDestination);
router.put("/addtofav/:id", addToFavoritePlaces);
router.put("/removefav/:id", removeFromFavoritePlaces);
module.exports = router;