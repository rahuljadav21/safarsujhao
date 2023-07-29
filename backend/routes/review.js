const {addreview,deleteReview} = require("../controllers/review")
const router = require("express").Router();

router.post("/:id",addreview);
router.delete("/:id/delete/:reviewId",deleteReview);

module.exports = router;
