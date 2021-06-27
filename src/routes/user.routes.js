const { Router } = require("express");
const router = Router();
const {
  getUser,
  updateUser,
  deleteUser,
  createUser,
} = require("../controllers/user.controller.js");

router.post("/", getUser);
router.post("/register", createUser);
router.put("/", verifyToken,  updateUser);
router.delete("/", verifyToken, deleteUser);

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
             req.email = authData.email
             next();
         }
     });
 }else{
     res.sendStatus(403);
 }
}
