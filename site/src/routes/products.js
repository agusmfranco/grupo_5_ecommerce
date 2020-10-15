var express = require("express");
var router = express.Router();

var products_controller = require("../controllers/productsController");
var products_validator = require("../middlewares/productsValidator");
var products_upload = require("../middlewares/productsUpload");

// Rutas para detalle
router.get("/detail", products_controller.productDetail);

// Rutas para carrito
router.get("/checkout", products_controller.checkOut);

// Rutas para crear producto
router.get("/create", products_controller.productCreate);
router.post("/create", products_upload.upload, products_validator.validateNewBook, products_controller.newProduct);

module.exports = router;
