const session = require("express-session");
const db = require("../database/models");

const adminAuth = function (req, res, next) {
  if (req.session.loggedUser.user_type_id != 1) {
    res.send("Necesitas ser administrador!");
  }
  next();
};

module.exports = adminAuth;