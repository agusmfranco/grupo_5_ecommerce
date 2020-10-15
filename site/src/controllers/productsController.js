const { body } = require("express-validator");

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
  console.log(req.errors);
  res.redirect("/index");
};
