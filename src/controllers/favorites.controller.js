const Favorite = require("../models/favorite.js");

/*
 * URL = userId
 * funcionalidad: obtener todos los registros donde el id de usuario sea igual a userId.
 * res = Status 200 junto con la info de abajo.
 * Devolver listado de ids de las peliculas.
 */
const getAllFavorites = async (req, res) => {
  const id_user = req.params.userId;
  try {
    const favorite = await Favorite.findAll({
      where: { id_user },
      attributes: ["id_user", "id_movie"],
    });
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
const getFavorite = async (req, res) => {
  const { userId: id_user, movieId: id_movie } = req.params;
  try {
    const favorite = await Favorite.findOne({
      where: { id_user, id_movie },
      attributes: ["id_user", "id_movie"],
    });
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
const addNewFavorite = async (req, res) => {
  const { id_user, id_movie } = req.body;

  try {
    const favorite = await Favorite.create({ id_user, id_movie });
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
const deleteFavorite = async (req, res) => {
  const { userId: id_user, movieId: id_movie } = req.params;

  try {
    const favorite = await Favorite.destroy({
      where: {
        id_movie,
        id_user,
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
