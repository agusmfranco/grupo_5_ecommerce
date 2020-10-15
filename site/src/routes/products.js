var express = require("express");
var router = express.Router();

var products_controller = require("../controllers/productsController");
var products_middelware = require("../middlewares/productsMiddelware");

// Rutas para detalle
router.get("/detail", products_controller.productDetail);

// Rutas carrito
router.get("/checkout", products_controller.checkOut);

// Rutas para crear producto
router.get("/create", products_controller.productCreate);
router.post(
  "/create",
  products_middelware.coverUpload,
  products_controller.newProduct
);

module.exports = router;
