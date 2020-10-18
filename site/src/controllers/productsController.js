const { check, validationResult, body } = require("express-validator");
const cm_data = require("./cm_data");

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
  res.render("product_create", { old_data: cm_data });
};

exports.productUpdated = function (req, res) {
  errors = validationResult(req)
  console.log(errors.isEmpty());
  if (errors.isEmpty()) {
    res.redirect("/index");
  } else {
    res.render("product_create", { errors: errors.mapped(), old_data: cm_data });
  }
};
