const Favorite = require("../models/favorite.js");

/*
 * URL = userId
 * funcionalidad: obtener todos los registros donde el id de usuario sea igual a userId.
 * res = Status 200 junto con la info de abajo.
 * Devolver listado de ids de las peliculas.
 */
const getAllFavorites = (req, res) => {};


/*
 * URL = userId, movieId
 * funcionalidad: obtener registro que coincida con los dos parametros.
 * res = Status 200 junto con la info de abajo.
 * Devolver id de la pelicula, si no existe devolver json vacio.
 */
const getFavorite = (req, res) => {};

/*
 * req.body = {userId, movieId}
 * funcionalidad: validar que no hayan paramatros undefined, validar que no existe 
 * un registro con ambos paramentros y crear registro.
 * res = Status 200 si se creó correctamente. Status 400 si un parametro 
 * no llega o si ya existe un registro.
 */
const addNewFavorite = (req, res) => {};

/*
 * req.body = {id}
 * funcionalidad: eliminar el registro según el id de la pelicula.
 * res = Status 400 si un parametro no llega, Status 200 si se elimina el registro correctamente.
 */
const deleteFavorite = (req, res) => {};

module.exports = {
  getAllFavorites,
  getFavorite,
  addNewFavorite,
  deleteFavorite,
};
