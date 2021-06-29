const { Router } = require("express");
const router = Router();
const {
  getAllReviewsByMovieId,
  addReview,
  updateReview,
  deleteReview,
  getAllReviewsCSV,
  getAllReviewsPDF,
} = require("../controllers/reviews.controller.js");
const { verifyToken } = require("../middlewares/tokens.js");

/**
 * @swagger
 * tags:
 *  name: reviews
 *  description: To manage your favorites.
 */

router.get("/pdf", verifyToken, getAllReviewsPDF);

/**
 * @swagger
 * /{movieId}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - reviews
 *    description: Obtener todas las reviews por el id de la pelicula
 *    parameters:
 *    - name: movieId
 *      description: ID of the movie
 *      in: path
 *      require: true
 *      type: number
 */
router.get("/:movieId", verifyToken, getAllReviewsByMovieId);

/**
 * @swagger
 * /{id}:
 *  put:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - reviews
 *    description: Actualizar review por su id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - body
 *            properties:
 *              body:
 *                type: string
 *    parameters:
 *    - name: movieId
 *      description: ID del review
 *      in: path
 *      require: true
 *      type: number
 */
router.put("/:id", verifyToken, updateReview);

/**
 * @swagger
 * /:
 *  delete:
 *    tags:
 *      - reviews
 *    description: Eliminar la review de la pelicula por su id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - id
 *            properties:
 *              id:
 *                type: number
 */
router.delete("/", verifyToken, deleteReview);

/**
 * @swagger
 * /:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - reviews
 *    description: Crear una nueva review para la pelicula
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - id_user
 *              - id_movie
 *              - body
 *            properties:
 *              id_user:
 *                type: number
 *              id_movie:
 *                type: number
 *              body:
 *                type: string
 */
router.post("/", verifyToken, addReview);
router.get("/csv", verifyToken, getAllReviewsCSV);

module.exports = router;
