const { check, validationResult, body } = require("express-validator");

exports.productDetail = function (req, res) {
  res.render("product_detail");
};

exports.checkOut = function (req, res) {
  res.render("check_out");
};

exports.productCreate = function (req, res) {
  res.render("product_create");
};

exports.newProduct = function (req, res) {
  errors = validationResult(req).mapped();
  if (errors.isEmpty) {
    res.redirect("/index");
  } else {
    res.render("product_create", { errors: errors });
  }
};
