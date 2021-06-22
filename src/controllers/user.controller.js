const User = require("../models/user.js");

const getUser = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};
const updateUser = (req, res) => {};
const deleteUser = (req, res) => {};

module.exports = {
  getUser,
  updateUser,
  deleteUser,
};
