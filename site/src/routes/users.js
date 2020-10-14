var express = require("express");
var router = express.Router();
let multer = require("multer");
let path = require("path");

/* Multer */
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "tmp/uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({ storage: storage });
/* Multer */

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
