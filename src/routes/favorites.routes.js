const { Router } = require("express");
const router = Router();
const {
  getFavorites,
  addNewFavorite,
  deleteFavorite,
  deleteAllFavorites,
} = require("../controllers/favorites.controller.js");

router.get("/", getFavorites);
router.post("/", addNewFavorite);
router.delete("/:id", deleteFavorite);
router.delete("/all", deleteAllFavorites);

module.exports = router;
