const { Router } = require("express");
const router = Router();
const {
  getAllFavorites,
  addNewFavorite,
  deleteFavorite,
  getFavorite,
} = require("../controllers/favorites.controller.js");
const { verifyToken } = require("../middlewares/tokens.js");

/**
 * @swagger
 * tags:
 *  name: favorites
 *  description: To manage your favorites.
 */

/**
 * @swagger
 * favorites/{userId}/{movieId}:
 *  get:
 *    tags:
 *      - favorites
 *    description: Obtener el favorito por id del usuario y id de la pelicula
 *    parameters:
 *    - name: userId
 *      description: ID del usuario que elimina su favorito
 *      in: path
 *      require: true
 *      type: number
 *    - name: movieId
 *      description: ID de la pelicula
 *      in: path
 *      require: true
 *      type: number
 */
router.get("/:userId/:movieId", verifyToken, getFavorite);

/**
 * @swagger
 * favorites/{userId}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - favorites
 *    description: Obtener la lista de favoritos de un usuario
 *    parameters:
 *    - name: userId
 *      description: ID del usuario
 *      in: path
 *      require: true
 *      type: string
 */
router.get("/:userId", verifyToken, getAllFavorites);

/**
 * @swagger
 * favorites/{userId}:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - favorites
 *    description: Añadir una nueva pelicula favorita favorita por usuario
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - id_user
 *              - id_movie
 *            properties:
 *              id_user:
 *                type: number
 *              id_movie:
 *                type: number
 */
router.post("/", verifyToken, addNewFavorite);

/**
 * @swagger
 * favorites/{userId}/{movieId}:
 *  delete:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - favorites
 *    description: Eliminar la pelicula favorita de un usuario
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - id_user
 *              - id_movie
 *            properties:
 *              id_user:
 *                type: number
 *              id_movie:
 *                type: number
 */
router.delete("/:userId/:movieId", verifyToken, deleteFavorite);

module.exports = router;
