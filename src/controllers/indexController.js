const { check, validationResult, body } = require("express-validator");
const fs = require("fs");
const { join } = require("path");
const path = require("path");
const db = require("../database/models");
const { Op } = require("sequelize");
const { createBrotliDecompress } = require("zlib");
const session = require("express-session");

exports.indexBooks = function (req, res) {
  let itemsPromise = [];
  let userPromise = {};

  if (req.session.loggedUser) {
    itemsPromise = db.Items.findAll({
      where: {
        user_id: req.session.loggedUser.id,
      },
    });
    userPromise = db.Users.findByPk(req.session.loggedUser.id);
  }

  const booksPromise = db.Books.findAll({
    include: [
      { association: "genres" },
      { association: "autors" },
      { association: "houses" },
      { association: "states" },
    ],
  });

  const genresPromise = db.Genres.findAll();

  Promise.all([booksPromise, genresPromise, itemsPromise, userPromise]).then(
    function ([books, genres, items, user]) {
      res.render("index", {
        books: books,
        genres: genres,
        items: items,
        user: user,
      });
    }
  );
};
