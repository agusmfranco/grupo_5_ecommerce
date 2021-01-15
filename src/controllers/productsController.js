const { check, validationResult, body } = require("express-validator");
const fs = require("fs");
const { join } = require("path");
const path = require("path");
const db = require("../database/models");
const { Op } = require("sequelize");
const { createBrotliDecompress } = require("zlib");
const session = require("express-session");

exports.productIndex = function (req, res) {
  const booksPromise = db.Books.findAll({
    include: [
      { association: "genres" },
      { association: "autors" },
      { association: "houses" },
      { association: "states" },
    ],
  });
  const genresPromise = db.Genres.findAll();

  Promise.all([booksPromise, genresPromise]).then(function ([books, genres]) {
    res.render("index", {
      books: books,
      genres: genres,
    });
  });
};

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
    res.render("checkmark", { msg: "Libro creado con exito!" });
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
    res.render("checkmark", { msg: "Libro modificado con exito!" });
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
  res.render("bookcheckmark", { msg: "Libro eliminado con exito!" });
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
    res.render("productslist", { books, books });
  });
};

exports.checkOut = function (req, res) {
  db.Checkouts.findAll({
    where: {
      user_id: req.session.loggedUser.id,
    },
  }).then(function (items) {
    let books_id = [];
    items.forEach((item) => {
      books_id.push(item.dataValues.book_id);
    });
    db.Books.findAll({
      where: {
        id: {
          [Op.or]: books_id,
        },
      },
      include: [
        { association: "genres" },
        { association: "autors" },
        { association: "houses" },
        { association: "states" },
      ],
    }).then(function (books) {
      console.log(items);
      res.render("checkout", {
        books: books,
        items: items,
      });
    });
  });
};

exports.checkOutData = function (req, res) {
  if (req.session.loggedUser) {
    db.Checkouts.findAll({
      where: {
        user_id: req.session.loggedUser.id,
      },
    }).then(function (items) {
      res.json({ items: items });
    });
  } else {
    res.send();
  }
};

exports.checkOutSave = function (req, res) {
  db.Checkouts.findAll({
    where: {
      book_id: req.body.book_id,
      user_id: req.session.loggedUser.id,
    },
  }).then(function (checkouts) {
    if (checkouts.length == 0) {
      db.Checkouts.create({
        book_id: req.body.book_id,
        user_id: req.session.loggedUser.id,
        quantity: req.body.quantity,
      }).then(function () {
        db.Checkouts.findAll({
          where: {
            user_id: req.session.loggedUser.id,
          },
        }).then(function (items) {
          res.json(JSON.stringify({ length: items.length }));
        });
      });
    } else {
      let book = checkouts[0];
      book.quantity = req.body.quantity;
      book.save().then(function () {
        db.Checkouts.findAll({
          where: {
            user_id: req.session.loggedUser.id,
          },
        }).then(function (items) {
          res.json(JSON.stringify({ length: items.length }));
        });
      });
    }
  });
};

exports.checkOutDelete = function (req, res) {
  db.Checkouts.destroy({
    where: {
      id: req.body.item_id,
      user_id: req.session.loggedUser.id,
    },
  }).then(function () {
    res.json({
      status: 200,
      item: req.body.item_id,
    });
  });
};

exports.checkOutPurchase = function (req, res) {
  db.Purchase.create({
    user_id: req.session.loggedUser.id,
    total: req.body.total,
  }).then((purchase) => {
    Object.entries(req.body.detail).forEach((ent) => {
      db.BooksPurchase.create({
        purchase_id: purchase.id,
        book_id: ent[0],
        quantity: ent[1],
      });
    });
    db.Checkouts.destroy({
      where: {
        user_id: req.session.loggedUser.id,
      },
    });
  });
};
