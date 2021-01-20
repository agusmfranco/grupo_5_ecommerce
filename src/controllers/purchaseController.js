const { check, validationResult, body } = require("express-validator");
const fs = require("fs");
const { join } = require("path");
const path = require("path");
const db = require("../database/models");
const { Op } = require("sequelize");
const { createBrotliDecompress } = require("zlib");
const session = require("express-session");

exports.newPurchase = function (req, res) {
  console.log("-----------nueva compra------------------");
  console.log("-----------nueva compra------------------");
  console.log("-----------nueva compra------------------");
  console.log("-----------nueva compra------------------");
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
