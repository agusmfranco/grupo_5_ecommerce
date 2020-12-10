var express = require("express");
var router = express.Router();
var apiController = require("./../../controllers/api/apiController")

router.get("/products", apiController.productList);

module.exports = router;