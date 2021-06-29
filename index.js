require("dotenv").config();
const db = require("./src/config/db.js");
const app = require("./src/app.js");
require("./src/models/relations.js");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const swaggerOpt = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Filmbit-api",
      version: "1.0.0",
    },
    host: "http://localhost:3000/",
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.js"], // files containing annotations as above
};

const swaggerDocs = swaggerJsDoc(swaggerOpt);

db.authenticate()
  .then(() => console.log("DB connection success"))
  .catch(() => console.log("DB connection fail"));

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.listen(process.env.PORT, () => {
  console.log("Server online on port: ", process.env.PORT);
});
