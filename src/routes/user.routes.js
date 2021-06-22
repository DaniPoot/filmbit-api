const { Router } = require("express");
const router = Router();
const {
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller.js");

router.get("/", getUser);
router.put("/", updateUser);
router.delete("/", deleteUser);

module.exports = router;
