const { check, validationResult, body } = require("express-validator");
const fs = require("fs");
const { join } = require("path");
const path = require("path");
const db = require("../../database/models");
const { Op } = require("sequelize");

exports.productList = function (req, res) {
  db.Books.findAll({
    attributes: ["id", "title", "sinopsis", "genre_id"],
    include: [
      { association: "genres", attributes: ["name"] },
      { association: "autors", attributes: ["name"] },
      { association: "houses" },
      { association: "states" },
    ],
  }).then(function (books) {
    let response = {
      meta: {
        status: 200,
        count: books.length,
        url: "/api/products",
      },
      data: books
    };
    res.json(response);
  });
};

exports.productDetail = function (req, res) {
  db.Books.findByPk(req.params.id, {
    include: [
      { association: "genres" },
      { association: "autors" },
      { association: "houses" },
      { association: "states" },
    ],
  }).then(function (books) {
    let response = {
      meta: {
        status: 200,
        url: "/api/products/" + req.params.id,
      },
      data: [{img: __dirname + books.book_cover,
              properties: books
      }]
    };
    res.json(response);
  });
};

exports.userList = function (req, res) {
  db.Users.findAll({
    include: [{ association: "userstypes" }],
  }).then(function (users) {
    let response = {
      meta: {
        status: 200,
        count: users.length,
        url: "/api/users",
      },
      data: users
    };
    res.json(response);
  });
};

exports.userDetail = function (req, res) {
  db.Users.findByPk(req.params.id, {
    include: [{ association: "userstypes" }],
  }).then(function (users) {
    let response = {
      meta: {
        status: 200,
        url: "/api/users/" + req.params.id,
        profile_pic: __dirname + users.user_photo
      },
      data: users
    };
    res.json(response);
  });
};


