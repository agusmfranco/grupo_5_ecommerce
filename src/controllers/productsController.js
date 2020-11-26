const { check, validationResult, body } = require("express-validator");
const fs = require('fs');
const path = require('path');

let db_libros = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'db_libros.json')));

exports.productList = function (req, res) {
  res.render('productslist', {libros:db_libros})
};

exports.productDetail = function (req, res) {
  db_libros.forEach(libro => {
    if(libro.id == req.params.id) {
      res.render('productdetail', {libro: libro})
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
    res.send("Producto creado con éxito!. No implementado");
  } else {
    res.render("productcreate", {
      errors: errors.mapped(),
      body_data: req.body,
    });
  }
};

exports.productUpDate = function (req, res) {
  db_libros.forEach(libro => {
    if(libro.id == req.params.id) {
      res.render('productupdate', {old_data: libro})
    }
  });
};

exports.productUpdated = function (req, res) {
  errors = validationResult(req);
  if (errors.isEmpty()) {
    res.send("Producto modificado con éxito! No implementado.");
  } else {
    db_libros.forEach(libro => {
      if(libro.id == req.body.id) {
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
  res.send("Delete no implementado");
};


