var express = require("express");
var router = express.Router();

var products_controller = require("../controllers/productsController");
var forms_validators = require("../middlewares/formsValidators");
var products_upload = require("../middlewares/productsUpload");

// Rutas para detalle
router.get("/detail/:id", products_controller.productDetail);

// Rutas para carrito
router.get("/checkout", products_controller.checkOut);

// Rutas para crear producto
router.get("/create", products_controller.productCreate);
router.post(
  "/create",
  products_upload.upload,
  forms_validators.validateNewBook,
  products_controller.productCreated
);

router.get("/update", products_controller.productUpDate);
router.put(
  "/update",
  products_upload.upload,
  forms_validators.validateNewBook,
  products_controller.productUpdated
);
router.delete("/delete", products_controller.productDelete);

module.exports = router;
