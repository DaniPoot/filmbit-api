require("dotenv").config();
const db = require("./src/config/db.js");
const app = require("./src/app.js");
require("./src/models/relations.js");

db.authenticate()
  .then(() => console.log("DB connection success"))
  .catch(() => console.log("DB connection fail"));

app.listen(process.env.PORT, () => {
  console.log("Server online on port: ", process.env.PORT);
});
