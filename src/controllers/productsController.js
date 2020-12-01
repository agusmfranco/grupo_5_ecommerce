const { check, validationResult, body } = require("express-validator");
const fs = require("fs");
const { join } = require("path");
const path = require("path");
const db = require("../database/models");
const { Op } = require("sequelize");

exports.productList = function (req, res) {
  db.Books.findAll({
    include: [
      { association: "genres" },
      { association: "autors" },
      { association: "houses" },
      { association: "states" },
    ],
  }).then(function (books) {
    res.render("productslist", { books: books });
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
  }).then(function (book) {
    console.log(book.autors);
    res.render("productdetail", { book: book });
  });
};

exports.checkOut = function (req, res) {
  res.render("check_out");
};

exports.productCreate = function (req, res) {
  let genresPromise = db.Genres.findAll();
  let autorsPromise = db.Autors.findAll();
  let housesPromise = db.Houses.findAll();
  let statesPromise = db.States.findAll();

  Promise.all([
    genresPromise,
    autorsPromise,
    housesPromise,
    statesPromise,
  ]).then(function ([genres, autors, houses, states]) {
    res.render("productcreate", {
      genres: genres,
      autors: autors,
      houses: houses,
      states: states,
      errors: {},
      data: {},
    });
  });
};

exports.productCreated = function (req, res) {
  errors = validationResult(req);
  let book_cover;
  if (req.files.length > 0) {
    book_cover = req.files[0].filename;
  } else {
    book_cover = null;
  }
  if (errors.isEmpty()) {
    db.Books.create({
      title: req.body.title,
      autor_id: req.body.autor_id,
      house_id: req.body.house_id,
      genre_id: req.body.genre_id,
      isbn: req.body.isbn,
      price: req.body.price,
      state_id: req.body.state_id,
      amount: req.body.amount,
      sinopsis: req.body.sinopsis,
      book_cover: book_cover,
    });
    res.send("Libro creado");
  } else {
    let genresPromise = db.Genres.findAll();
    let autorsPromise = db.Autors.findAll();
    let housesPromise = db.Houses.findAll();
    let statesPromise = db.States.findAll();

    Promise.all([
      genresPromise,
      autorsPromise,
      housesPromise,
      statesPromise,
    ]).then(function ([genres, autors, houses, states]) {
      res.render("productcreate", {
        genres: genres,
        autors: autors,
        houses: houses,
        states: states,
        errors: errors.mapped(),
        data: req.body,
      });
    });
  }
};

exports.productUpDate = function (req, res) {
  let bookPromise = db.Books.findByPk(req.params.id);
  let genresPromise = db.Genres.findAll();
  let autorsPromise = db.Autors.findAll();
  let housesPromise = db.Houses.findAll();
  let statesPromise = db.States.findAll();

  Promise.all([
    bookPromise,
    genresPromise,
    autorsPromise,
    housesPromise,
    statesPromise,
  ]).then(function ([book, genres, autors, houses, states]) {
    res.render("productupdate", {
      genres: genres,
      autors: autors,
      houses: houses,
      states: states,
      errors: {},
      data: book,
    });
  });
};

exports.productUpdated = function (req, res) {
  errors = validationResult(req);
  let book_cover;
  if (req.files.length > 0) {
    book_cover = req.files[0].filename;
  } else {
    book_cover = req.body.book_cover;
  }
  if (errors.isEmpty()) {
    db.Books.update(
      {
        title: req.body.title,
        autor_id: req.body.autor_id,
        house_id: req.body.house_id,
        genre_id: req.body.genre_id,
        isbn: req.body.isbn,
        price: req.body.price,
        state_id: req.body.state_id,
        amount: req.body.amount,
        sinopsis: req.body.sinopsis,
        book_cover: book_cover,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.redirect("/products?value=updated");
  } else {
    console.log(errors);
    let genresPromise = db.Genres.findAll();
    let autorsPromise = db.Autors.findAll();
    let housesPromise = db.Houses.findAll();
    let statesPromise = db.States.findAll();

    Promise.all([
      genresPromise,
      autorsPromise,
      housesPromise,
      statesPromise,
    ]).then(function ([genres, autors, houses, states]) {
      res.render("productcreate", {
        genres: genres,
        autors: autors,
        houses: houses,
        states: states,
        errors: errors.mapped(),
        data: req.body,
      });
    });
  }
};

exports.productDelete = function (req, res) {
  db.Books.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.redirect("/products?value=updated");
};

exports.productSearch = function (req, res) {
  db.Books.findAll({
    where: {
      [Op.or]: [
        { title: { [db.Sequelize.Op.substring]: req.query.search_field } },
        { isbn: { [db.Sequelize.Op.substring]: req.query.search_field } },
        {
          "$autors.name$": {
            [db.Sequelize.Op.substring]: req.query.search_field,
          },
        },
        {
          "$houses.name$": {
            [db.Sequelize.Op.substring]: req.query.search_field,
          },
        },
        {
          "$genres.name$": {
            [db.Sequelize.Op.substring]: req.query.search_field,
          },
        },
      ],
    },
    include: [
      { association: "genres" },
      { association: "autors" },
      { association: "houses" },
      { association: "states" },
    ],
  }).then(function (books) {
    console.log(books[0].book_cover);
    res.render("productslist", { books, books });
  });
};

//sq controllers

/* exports.productDetailSq = function (req, res) {
  db.Books.findByPk(req.params.id, {
      include: [{ association: 'genre' }],
    }).then(function (book) {
      res.render('productdetail', { book: book });
    });
};

exports.productList = function (req, res) {
    db.Books.findAll({
        include: [{ association: 'genre' }]
    })
        .then(function(books){
            res.render('listadoLibros', {books:books})
        });
};

exports.search = function (req, res) {
  db.Books.findAll({
    where: {
      title: { [db.Sequelize.Op.substring]: req.body.title },
    },
    include: [{ association: 'genre' }],
  }).then(function (books) {
    res.render('listadoLibros', { books: books});
  });
};

exports.busqueda = function(req, res) {
    res.render('busqueda')
};
 */
