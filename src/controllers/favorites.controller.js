const Favorite = require("../models/favorite.js");

/*
 * URL = userId
 * funcionalidad: obtener todos los registros donde el id de usuario sea igual a userId.
 * res = Status 200 junto con la info de abajo.
 * Devolver listado de ids de las peliculas.
 */
const getAllFavorites = (req, res) => {
  const { user_id } = req.body;
  try {
    const favorite = Favorite.findAll({ where: { user_id } });
    return res.status(200).json(favorite);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

/*
 * URL = userId, movieId
 * funcionalidad: obtener registro que coincida con los dos parametros.
 * res = Status 200 junto con la info de abajo.
 * Devolver id de la pelicula, si no existe devolver json vacio.
 */
const getFavorite = (req, res) => {
  const { user_id, movie_id } = req.body;
  try {
    const favorite = Favorite.findOne({ where: { user_id, movie_id } });
    return res.status(200).json(favorite);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

/*
 * req.body = {userId, movieId}
 * funcionalidad: validar que no hayan paramatros undefined, validar que no existe
 * un registro con ambos paramentros y crear registro.
 * res = Status 200 si se creó correctamente. Status 400 si un parametro
 * no llega o si ya existe un registro.
 */
const addNewFavorite = (req, res) => {
  const { user_id, movie_id } = req.body;

  try {
    const favorite = Favorite.create({ user_id, movie_id });
    return res.status(200).json(favorite);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

/*
 * req.body = {id}
 * funcionalidad: eliminar el registro según el id de la pelicula.
 * res = Status 400 si un parametro no llega, Status 200 si se elimina el registro correctamente.
 */
const deleteFavorite = (req, res) => {
  const { user_id, movie_id } = req.body;

  try {
    const favorite = Favorite.destroy({
      where: {
        user_id,
        movie_id,
      },
    });
    return res.status(200).json(favorite);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

module.exports = {
  getAllFavorites,
  getFavorite,
  addNewFavorite,
  deleteFavorite,
};
