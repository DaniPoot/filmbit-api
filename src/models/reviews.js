const { DataTypes } = require("sequelize");
const db = require("../config/db.js");

const Reviews = db.define("reviews", {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  id_user: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  id_movie: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
});

module.exports = Reviews;
