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
    res.redirect("/index");
  } else {
    res.render("product_create", { errors: errors.mapped() });
  }
};

exports.productUpDate = function (req, res) {
  res.render("product_create", { old_data: dummy_data });
};

exports.productUpdated = function (req, res) {
  errors = validationResult(req);
  console.log(errors.isEmpty());
  if (errors.isEmpty()) {
    res.redirect("/index");
  } else {
    res.render("product_create", {
      errors: errors.mapped(),
      old_data: dummy_data,
    });
  }
};

exports.productDelete = function (req, res) {
  res.send("Delete no implementado");
};
