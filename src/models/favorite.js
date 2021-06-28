const { DataTypes } = require("sequelize");
const db = require("../config/db.js");

const Favorites = db.define(
  "favorites_list",
  {
    id_user: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    id_movie: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
  },
  {
    tableName: "favorites_list",
  }
);

Favorites.removeAttribute("id");
module.exports = Favorites;
