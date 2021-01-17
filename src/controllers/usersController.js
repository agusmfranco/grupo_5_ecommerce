const { check, validationResult, body } = require("express-validator");
const db = require("../database/models");
const bcrypt = require("bcrypt");
const session = require("express-session");

exports.userList = function (req, res) {
  db.Users.findAll({
    include: [{ association: "userstypes" }],
  }).then(function (users) {
    res.render("userslist", { users: users });
  });
};

exports.userCreate = function (req, res) {
  db.Userstypes.findAll().then(function (types) {
    res.render("usercreate", {
      types: types,
      errors: {},
      data: {},
    });
  });
};

exports.userCreated = function (req, res) {
  errors = validationResult(req);
  let user_photo;
  if (req.files.length > 0) {
    user_photo = req.files[0].filename;
  } else {
    user_photo = "default-avatar.png";
  }
  let passwordHash = bcrypt.hashSync(req.body.password, 10);
  if (errors.isEmpty()) {
    db.Users.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      dni: req.body.dni,
      birth: req.body.birth,
      address: req.body.address,
      cp: req.body.cp,
      email: req.body.email,
      user_type_id: req.body.user_type_id,
      password: passwordHash,
      user_photo: user_photo,
    });
    res.render("checkmark", { msg: "Usuario creado con éxito" });
  } else {
    db.Userstypes.findAll().then(function (types) {
      res.render("usercreate", {
        types: types,
        errors: errors.mapped(),
        data: req.body,
      });
    });
  }
};

exports.userUpdate = function (req, res) {
  let userPromise = db.Users.findByPk(req.session.loggedUser.id);
  let typesPromise = db.Userstypes.findAll();

  Promise.all([userPromise, typesPromise]).then(function ([user, types]) {
    res.render("userupdate", {
      types: types,
      data: user,
      errors: {},
    });
  });
};

exports.userUpdated = function (req, res) {
  errors = validationResult(req);
  let user_photo;
  if (req.files.length > 0) {
    user_photo = req.files[0].filename;
  } else {
    user_photo = req.body.old_photo;
  }
  if (errors.isEmpty()) {
    db.Users.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        dni: req.body.dni,
        email: req.body.email,
        address: req.body.address,
        birth: req.body.birth,
        user_type_id: req.body.user_type_id,
        cp: req.body.cp,
        user_photo: user_photo,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then(function () {
      res.render("checkmark", { msg: "Usuario modificado con éxito" });
    });
  } else {
    db.Userstypes.findAll().then(function (types) {
      res.render("userupdate", {
        types: types,
        errors: errors.mapped(),
        data: req.body,
      });
    });
  }
};

exports.userDelete = function (req, res) {
  db.Users.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send("Usuario elminado con éxito");
};

exports.userLogin = function (req, res) {
  res.render("login", { errors: {}, data: {} });
};

exports.processLogin = function (req, res) {
  let errors = validationResult(req);
  if (errors.isEmpty()) {
    db.Users.findOne({ where: { email: req.body.email } }).then(function (
      user
    ) {
      console.log(user);
      if (user == null) {
        res.render("login", {
          errors: { email: { msg: "Usuario inválido" } },
          data: {},
        });
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then(function (result) {
            if (result) {
              req.session.loggedUser = user;
              if (req.body.rememberme != undefined) {
                res.cookie("recordarme", user.email, { maxAge: 60000 * 60 });
              }
              res.render("index");
            } else {
              res.render("login", {
                errors: { password: { msg: "Password inválido" } },
                data: {},
              });
            }
          });
      }
    });
  } else {
    res.render("login", {
      errors: errors.mapped(),
      data: req.body,
    });
  }
  
};

exports.userDetail = function (req, res) {
  db.Users.findByPk(req.session.loggedUser.id).then(function (user) {
    res.render("userdetail", { data: user });
  });
};

exports.userData = function (req, res) {
  if (req.session.loggedUser) {
    db.Users.findByPk(req.session.loggedUser.id).then(function (user) {
      res.json(user);
    });
  } else {
    res.json({});
  }
};

exports.userAdmin = function (req,res) {
  res.render('adminpanel')
};