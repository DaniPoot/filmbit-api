const User = require("../models/user.js");
const shajs = require("sha.js");
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
const getUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    const passwordEncrypted = shajs("sha256").update(password).digest("hex");

    if (typeof user !== "undefined" && user.password === passwordEncrypted) {
      user.password = undefined;
      jwt.sign({ email }, "privatekey", (err, token) => {
        return res.status(202).json({
          token,
          user,
        });
      });
    } else {
      return res.status(503).json(err);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
  // vvv GENERACION DE TOKEN  vvv
  // jwt.sign({ email }, "privatekey", (err, token) => {
  //   res.sendStatus(200).json({
  //     token,
  //   });
  // });
};

/*
 * req.body = {name, password, email}
 * funcionalidad: Validar que no haya parametros undefined, validar que no exista un usuario con
 * el mismo email en la BD, encriptar contraseña y crear registro.
 * res = Status 400 si un parametro no llega o si ya existe un usuario,
 * Status 200 si se crea el registro correctamente.
 */
const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  console.log(req.body);
  const passwordEncrypted = shajs("sha256").update(password).digest("hex");

  try {
    User.create({
      name,
      email,
      password: passwordEncrypted,
    });

    return res.status(202).json({
      message: "User was created",
    });
  } catch (err) {
    let { errors } = err || {};

    if (errors && errors.length > 0) {
      console.log("Error if", errors);
      errors = errors.map((someError) => {
        const message = someError.message.split(".")[1];
        const key = message.split(" ")[0];
        const obj = {};
        obj[key] = message;
        return obj;
      });
    }
    return res.status(500).json({ errors });
  }
};

/*
 * req.body = {name, password, email}
 * funcionalidad: Validar que no haya parametros undefined, encriptar contraseña y editar registro
 * según el email (WHERE email).
 * res = Status 400 si un parametro no llega, Status 200 si se edita el registro correctamente.
 */
const updateUser = async (req, res) => {
  const { name, email, password } = req.body;

  const passwordEncrypted = shajs("sha256").update(password).digest("hex");

  try {
    const user = await User.findOne({ where: { email } });
    user.update({
      name,
      password: passwordEncrypted,
    });
    delete user.password;
    return res.status(202).json({
      message: "User was updated",
      user,
    });
  } catch (err) {
    let { errors } = err || {};

    if (errors && errors.length > 0) {
      console.log("Error if", errors);
      errors = errors.map((someError) => {
        const message = someError.message.split(".")[1];
        const key = message.split(" ")[0];
        const obj = {};
        obj[key] = message;
        return obj;
      });
    }
    console.log(err);
    return res.status(500).json({ errors });
  }
};

/*
 * req.body = {email}
 * funcionalidad: eliminar el registro según el email (WHERE email).
 * res = Status 200 si se elimina el registro correctamente.
 */
const deleteUser = async (req, res) => {
  const { email } = req.body;

  try {
    await User.destroy({ where: { email } });
    const response = {
      message: "User was deleted",
    };
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  getUser,
  updateUser,
  deleteUser,
  createUser,
};
