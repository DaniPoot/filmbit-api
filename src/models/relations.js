const User = require("./user.js");
const Reviews = require("./reviews.js");
const Favorite = require("./favorite.js");

User.hasMany(Favorite);
Favorite.belongsTo(User);

User.hasMany(Reviews);
Reviews.belongsTo(User);
