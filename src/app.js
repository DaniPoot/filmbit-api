const express = require("express");
const app = express();
const cors = require("cors");

const favoritesRoutes = require("./routes/favorites.routes.js");
const userRoutes = require("./routes/user.routes.js");
const reviewsRoutes = require("./routes/reviews.routes.js");

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//Routes
app.use("/login", userRoutes);
app.use("/favorites", favoritesRoutes);
app.use("/reviews", reviewsRoutes);

module.exports = app;
