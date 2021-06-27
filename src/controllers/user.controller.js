const User = require("../models/user.js");
const shajs = require('sha.js');
const jwt = require("jsonwebtoken");

/*
 * req.body = {email, password}
 * funcionalidad: Validar que no haya parametros undefined, encriptar contraseña, 
 * buscar usuario que coincida con el email y la contraseña encriptada y generar token.
 * res = Status 400 si un parametro no llega o si no existe el usuario, 
 * Status 200 si se crea el token correctamente junto con la info de abajo.
 * Devolver id, email y nombre del usuario junto con el token generado
 * NO DEVOLVER LA CONTRASEÑA
 */
const getUser = (req, res) => {

   // vvv  ENCRIPTACIÓN DE CONTRASEÑA  vvv
  const passwordEncrypted = shajs('sha256').update(req.body.password).digest('hex');
  
  //obtener usuario aqui

  // vvv GENERACION DE TOKEN  vvv
  jwt.sign({email}, 'privatekey', (err, token) => {
    res.sendStatus(200).json({
        token
    });
  });
};

/*
 * req.body = {name, password, email}
 * funcionalidad: Validar que no haya parametros undefined, validar que no exista un usuario con
 * el mismo email en la BD, encriptar contraseña y crear registro.
 * res = Status 400 si un parametro no llega o si ya existe un usuario, 
 * Status 200 si se crea el registro correctamente.
 */
const createUser = (req, res) => {
  
 
};

/*
 * req.body = {name, password, email}
 * funcionalidad: Validar que no haya parametros undefined, encriptar contraseña y editar registro
 * según el email (WHERE email).
 * res = Status 400 si un parametro no llega, Status 200 si se edita el registro correctamente.
 */
const updateUser = (req, res) => {};

/*
 * req.body = {email}
 * funcionalidad: eliminar el registro según el email (WHERE email).
 * res = Status 200 si se elimina el registro correctamente.
 */
const deleteUser = (req, res) => {};


module.exports = {
  getUser,
  updateUser,
  deleteUser,
  createUser
};
