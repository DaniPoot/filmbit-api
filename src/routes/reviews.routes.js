const { Router } = require("express");
const router = Router();
const {
  getAllReviewsByMovieId,
  getUserReviews,
} = require("../controllers/reviews.controller.js");

router.get("/:id", getAllReviewsByMovieId);

module.exports = router;
