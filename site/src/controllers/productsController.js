const { check, validationResult, body } = require("express-validator");
const dummy_data = require("./dummy_data");

exports.productDetail = function (req, res) {
  res.render("product_detail");
};

exports.checkOut = function (req, res) {
  res.render("check_out");
};

exports.productCreate = function (req, res) {
  res.render("product_create");
};

exports.productCreated = function (req, res) {
  errors = validationResult(req);
  if (errors.isEmpty()) {
    res.send("Producto creado con éxito!. No implementado");
  } else {
    res.render("product_create", {
      errors: errors.mapped(),
      body_data: req.body,
    });
  }
};

exports.productUpDate = function (req, res) {
  res.render("product_update", { old_data: dummy_data });
};

exports.productUpdated = function (req, res) {
  errors = validationResult(req);
  console.log(errors.isEmpty());
  if (errors.isEmpty()) {
    res.send("Producto modificado con éxito! No implementado.");
  } else {
    res.render("product_update", {
      errors: errors.mapped(),
      old_data: dummy_data,
      body_data: req.body,
    });
  }
};

exports.productDelete = function (req, res) {
  res.send("Delete no implementado");
};
