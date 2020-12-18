const session = require("express-session");
const db = require("../database/models");

const cookieAuth = function (req, res, next) {
  next();

  if (
    req.cookies.recordarme != undefined &&
    req.session.loggedUser == undefined
  ) {
    db.Users.findOne({ where: { email: req.cookies.recordarme } }).then(
      function (user) {
        req.session.loggedUser = user;
      }
    );
  }
};

module.exports = cookieAuth;
