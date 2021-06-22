const { DataTypes } = require("sequelize");
const db = require("../config/db.js");

const Reviews = db.define("reviews", {
  id: {
    type: DataTypes.INTEGER(10),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Reviews;
