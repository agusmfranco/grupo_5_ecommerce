var express = require("express");
var router = express.Router();

var products_controller = require("../controllers/productsController");

router.get("/detail", products_controller.productDetail);

router.get("/checkout", products_controller.checkOut);

router.get("/create", products_controller.productCreate);
router.post("/create", products_controller.newProduct)

module.exports = router;
