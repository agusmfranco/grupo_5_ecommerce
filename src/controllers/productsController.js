const { check, validationResult, body } = require("express-validator");
const fs = require("fs");
const { join } = require("path");
const path = require("path");
const db = require("../database/models");

let db_libros = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "data", "db_libros.json"))
);

exports.productList = function (req, res) {
  res.render("productslist", { libros: db_libros });
};

exports.productDetail = function (req, res) {
  db_libros.forEach((libro) => {
    if (libro.id == req.params.id) {
      res.render("productdetail", { libro: libro });
    }
  });
};

exports.checkOut = function (req, res) {
  res.render("check_out");
};

exports.productCreate = function (req, res) {
  res.render("productcreate");
};

exports.productCreated = function (req, res) {
  errors = validationResult(req);
  if (errors.isEmpty()) {
    let new_book = req.body;
    new_book.id = db_libros[db_libros.length - 1].id + 1;
    if (req.files.length > 0) {
      new_book.portada = req.files[0].filename;
    }
    if (req.files.length > 1) {
      new_book.foto_autor = req.files[1].filename;
    }
    db_libros.push(new_book);
    fs.writeFileSync(
      path.join(__dirname, "..", "data", "db_libros.json"),
      JSON.stringify(db_libros, null, 4)
    );
    res.redirect("/products");
  } else {
    res.render("productcreate", {
      errors: errors.mapped(),
      body_data: req.body,
    });
  }
};

exports.productUpDate = function (req, res) {
  db_libros.forEach((libro) => {
    if (libro.id == req.params.id) {
      res.render("productupdate", { old_data: libro });
    }
  });
};

exports.productUpdated = function (req, res) {
  errors = validationResult(req);
  Object.keys(req.body).forEach((key) => {
    console.log(req.body[key]);
  });
  if (errors.isEmpty()) {
    db_libros = db_libros.map((libro) => {
      if (libro.id == req.body.id) {
        Object.keys(req.body).forEach((key) => {
          libro[key] = req.body[key];
        });
        if (req.files.length > 0) {
          libro["portada"] = req.files[0].filename;
        }
        if (req.files.length > 1) {
          libro["foto_autor"] = req.files[1].filename;
        }
        return libro;
      } else {
        return libro;
      }
    });
    fs.writeFileSync(
      path.join(__dirname, "..", "data", "db_libros.json"),
      JSON.stringify(db_libros, null, 4)
    );
    res.redirect("/products");
  } else {
    db_libros.forEach((libro) => {
      if (libro.id == req.body.id) {
        res.render("productupdate", {
          errors: errors.mapped(),
          old_data: libro,
          body_data: req.body,
        });
      }
    });
  }
};

exports.productDelete = function (req, res) {
  new_db = db_libros.filter((libro) => libro.id != req.params.id);
  fs.writeFileSync(
    path.join(__dirname, "..", "data", "db_libros.json"),
    JSON.stringify(new_db)
  );
  res.redirect("/products?state=updated");
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
