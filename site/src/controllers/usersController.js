const { check, validationResult, body } = require("express-validator");
const dummy_user = require("./dummy_user");

exports.userRegister = function (req, res) {
  res.render("new_user");
};

exports.userSave = function (req, res) {
  errors = validationResult(req);
  if (errors.isEmpty()) {
    res.send("Usuario creado con exito! Falta implementar");
  } else {
    res.render("new_user", { errors: errors.mapped(), body_data: req.body });
  }
};

exports.userUpdate = function (req, res) {
  res.render("user_update", { old_data: dummy_user });
};

exports.userUpdated = function (req, res) {
  errors = validationResult(req);
  if (errors.isEmpty()) {
    res.send("Usuario modificado con exito! Falta implementar.");
  } else {
    res.render("user_update", {
      errors: errors.mapped(),
      old_data: dummy_user,
      body_data: req.body,
    });
  }
};

exports.userDelete = function (req, res) {
  res.send("Delete no implementado.");
};

exports.userLogin = function (req, res) {
  res.render("login");
};
