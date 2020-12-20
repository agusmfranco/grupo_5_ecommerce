const session = require("express-session");
const db = require("../database/models");

const loginAuth = function (req, res, next) {
  if (
    req.cookies.recordarme == undefined &&
    req.session.loggedUser == undefined
  ) {
    res.render("login", {
      errors: {},
      data: {},
    });
  }
  next();
};

module.exports = loginAuth;
