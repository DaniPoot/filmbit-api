const { Router } = require("express");
const router = Router();
const {
  getAllFavorites,
  addNewFavorite,
  deleteFavorite,
  getFavorite,
} = require("../controllers/favorites.controller.js");
const { verifyToken } = require("../middlewares/tokens.js");

router.get("/:userId/:movieId", verifyToken, getFavorite);
router.get("/:userId", verifyToken, getAllFavorites);
router.post("/", verifyToken, addNewFavorite);
router.delete("/:userId/:movieId", verifyToken, deleteFavorite);

module.exports = router;
