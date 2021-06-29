const { Router } = require("express");
const jwt = require("jsonwebtoken");

const router = Router();
const {
  getUser,
  updateUser,
  deleteUser,
  createUser,
} = require("../controllers/user.controller.js");

/**
 * @swagger
 * tags:
 *  name: user
 *  description: To manage your favorites.
 */

/**
 * @swagger
 * /login/:
 *  post:
 *    tags:
 *      - user
 *    description: Obtener el usuario por medio de su email y password
 *    responses:
 *      '2XX':
 *        content:
 *          application/json:
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 */
router.post("/", getUser);

/**
 * @swagger
 * /login/register:
 *  post:
 *    tags:
 *      - user
 *    description: Creacion de un nuevo usuario
 *    responses:
 *      '2XX':
 *        content:
 *          application/json:
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - name
 *              - email
 *              - password
 *            properties:
 *              name:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 */
router.post("/register", createUser);

/**
 * @swagger
 * /login/:
 *  put:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - user
 *    description: Obtener el favorito por id del usuario y id de la pelicula
 *    responses:
 *      '2XX':
 *        content:
 *          application/json:
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - email
 *            properties:
 *              name:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 */
router.put("/", verifyToken, updateUser);

/**
 * @swagger
 * login/:
 *  delete:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - user
 *    description: Obtener el favorito por id del usuario y id de la pelicula
 *    responses:
 *      '2XX':
 *        content:
 *          application/json:
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - email
 *            properties:
 *              email:
 *                type: string
 */
router.delete("/", verifyToken, deleteUser);

module.exports = router;

// Authorization: Bearer <token>
function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    jwt.verify(bearerToken, "privatekey", (error, authData) => {
      if (error) {
        res.sendStatus(403);
      } else {
        req.body.email = authData.email;
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
}
