// https://www.npmjs.com/package/multer

const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname == "portada") {
      cb(null, "public/images/portadas");  
    } else {
      cb(null, "public/images/fotos_autores");
    }
  },
  filename: function (req, file, cb) {
    if (file.fieldname == "portada") {
      cb(null, req.body.titulo.toLowerCase().split(" ").join("") + path.extname(file.originalname));
    } else { 
      cb(null, req.body.autor.toLowerCase().split(" ").join("") + path.extname(file.originalname));
    }
  },
});

exports.upload = multer({ storage: storage }).any();

