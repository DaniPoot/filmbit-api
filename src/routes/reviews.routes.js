const { Router } = require("express");
const router = Router();
const {
  getAllReviewsByMovieId,
  addReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviews.controller.js");
const { verifyToken } = require("../middlewares/tokens.js");

router.get("/:movieId", verifyToken, getAllReviewsByMovieId);
router.put("/:id", verifyToken, updateReview);
router.delete("/", verifyToken, deleteReview);
router.post("/", verifyToken, addReview);

module.exports = router;
