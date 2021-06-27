const { Router } = require("express");
const router = Router();
const {
  getAllReviewsByMovieId,
  addReview,
  updateReview,
  deleteReview
} = require("../controllers/reviews.controller.js");

router.get("/:movieId", verifyToken, getAllReviewsByMovieId);
router.put("/:id", verifyToken, updateReview);
router.delete("/", verifyToken, deleteReview);
router.post("/", verifyToken, addReview);

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
