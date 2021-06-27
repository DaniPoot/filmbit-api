const Reviews = require("../models/reviews.js");

/*
 * URL = movieId
 * funcionalidad: obtener todos los registros donde el id de la pelicula sea igual a movieId. 
 * Hacer un join con users para devolver también el nombre del usuario
 * res = Status 200 junto con la info de abajo.
 * Devolver listado de las reviews de las peliculas. 
 */
const getAllReviewsByMovieId = (req, res) => {};


/*
 * req.body = {userId, movieId, body}
 * funcionalidad: validar que no hayan paramatros undefined y crear registro.
 * res = Status 200 si se creó correctamente. Status 400 si un parametro no llega.
 */
const addReview = (req, res) => {};

/*
 * req.body = {body} URL = reviewId
 * funcionalidad: validar que no hayan paramatros undefined y actualizar cuerpo del comentario.
 * res = Status 200 si se editó correctamente. Status 400 si un parametro no llega.
 */
const updateReview = (req, res) => {};

/*
 * req.body = {idReview}
 * funcionalidad: eliminar el registro según el id enviado.
 * res = Status 200 si se elimina el registro correctamente.
 */
const deleteReview = (req, res) => {};


module.exports = {
  getAllReviewsByMovieId,
  addReview,
  updateReview,
  deleteReview
};
