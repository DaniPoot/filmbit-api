const Reviews = require("../models/reviews.js");

/*
 * URL = movieId
 * funcionalidad: obtener todos los registros donde el id de la pelicula sea igual a movieId.
 * Hacer un join con users para devolver también el nombre del usuario
 * res = Status 200 junto con la info de abajo.
 * Devolver listado de las reviews de las peliculas.
 */
const getAllReviewsByMovieId = async (req, res) => {
  const id_movie = req.params.movieId;

  try {
    const allreviews = await Reviews.findAll({
      where: {
        id_movie,
      },
      attributes: ["id_user", "body", "id_movie"],
    });
    return res.status(200).json(allreviews);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

/*
 * req.body = {user_id, movie_id, body}
 * funcionalidad: validar que no hayan paramatros undefined y crear registro.
 * res = Status 200 si se creó correctamente. Status 400 si un parametro no llega.
 */
const addReview = async (req, res) => {
  const { id_user, id_movie, body } = req.body;
  try {
    const review = await Reviews.create({
      id_user,
      id_movie,
      body,
    });
    return res.status(200).json(review);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
};

/*
 * req.body = {body} URL = reviewId
 * funcionalidad: validar que no hayan paramatros undefined y actualizar cuerpo del comentario.
 * res = Status 200 si se editó correctamente. Status 400 si un parametro no llega.
 */
const updateReview = async (req, res) => {
  const id = req.params.id;
  const { body } = req.body;
  try {
    const review = await Reviews.findOne({
      where: {
        id,
      },
      attributes: ["id", "id_user", "body", "id_movie"],
    });

    await review
      .update({
        body,
      })
      .catch((e) => console.log(e));
    return res.status(200).json(review);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

/*
 * req.body = {idReview}
 * funcionalidad: eliminar el registro según el id enviado.
 * res = Status 200 si se elimina el registro correctamente.
 */
const deleteReview = async (req, res) => {
  const { id } = req.body;
  try {
    await Reviews.destroy({ where: { id } });
    return res.status(200).json({
      message: "The review was deleted",
    });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

module.exports = {
  getAllReviewsByMovieId,
  addReview,
  updateReview,
  deleteReview,
};
