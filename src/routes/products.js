var express = require("express");
var router = express.Router();

var products_controller = require("../controllers/productsController");
var forms_validators = require("../middlewares/formsValidators");
var products_upload = require("../middlewares/productsUpload");

router.get("/", products_controller.productList);

// Rutas para crear producto
router.get("/create", products_controller.productCreate);

// Rutas para carrito
router.get("/checkout", products_controller.checkOut);

router.post(
  "/create",
  products_upload.upload,
  forms_validators.validateNewBook,
  products_controller.productCreated
);

// Rutas para detalle
router.get("/:id", products_controller.productDetail);

router.get("/:id/edit", products_controller.productUpDate);

router.put(
  "/:id",
  products_upload.upload,
  forms_validators.validateNewBook,
  products_controller.productUpdated
);

router.delete("/:id", products_controller.productDelete);

module.exports = router;
