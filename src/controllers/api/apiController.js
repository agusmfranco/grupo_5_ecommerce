const { check, validationResult, body } = require("express-validator");
const fs = require("fs");
const { join } = require("path");
const path = require("path");
const db = require("../../database/models");
const { Op } = require("sequelize");

exports.productList = function (req, res) {
    db.Books.findAll({
      attributes: ["title", "price"],
      include: [
        { association: "genres",
          attributes: ["name"],
      },
        { association: "autors",
          attributes: ["name"],
      },
        { association: "houses" },
        { association: "states" },
      ],
    }).then(function (books) {
      let response = {
        meta: {
          status: 200,
          total: books.length,
          url: "/api/products"
        },
        data: books,
      }
      res.json(response)
    });
  };