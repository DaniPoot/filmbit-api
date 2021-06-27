const { Router } = require("express");
const router = Router();
const {
  getAllFavorites,
  addNewFavorite,
  deleteFavorite,
  getFavorite,
} = require("../controllers/favorites.controller.js");

router.get("/:id",verifyToken, getFavorite);
router.get("/:userId/:movieId", verifyToken, getAllFavorites);
router.post("/", verifyToken, addNewFavorite);
router.delete("/:id", verifyToken, deleteFavorite);

module.exports = router;

// Authorization: Bearer <token>
function verifyToken(req, res, next){
  const bearerHeader =  req.headers['authorization'];

  if(typeof bearerHeader !== 'undefined'){
     const bearerToken = bearerHeader.split(" ")[1];
     jwt.verify(bearerToken, 'privatekey', (error, authData) => {
         if(error){
             res.sendStatus(403);
         }else{
             next();
         }
     });
 }else{
     res.sendStatus(403);
 }
}
