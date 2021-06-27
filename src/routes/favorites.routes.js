const { Router } = require("express");
const router = Router();
const {
  getAllFavorites,
  addNewFavorite,
  deleteFavorite,
  getFavorite,
} = require("../controllers/favorites.controller.js");
const { verifyToken } = require("../middlewares/tokens.js");

router.get("/:id", verifyToken, getFavorite);
router.get("/:userId/:movieId", verifyToken, getAllFavorites);
router.post("/", verifyToken, addNewFavorite);
router.delete("/:id", verifyToken, deleteFavorite);

module.exports = router;
