// https://github.com/validatorjs/validator.js

const { check, validationResult } = require("express-validator");

exports.validateNewBook = [
  check("titulo").notEmpty().withMessage("El título debe estar completo"),
  check("autor").notEmpty().withMessage("El título debe estar completo"),
  check("editorial").notEmpty().withMessage("La editorial debe estar completa"),
  check("genero").notEmpty().withMessage("El género debe estar completo"),
  check("isbn")
    .notEmpty()
    .withMessage("El ISBN debe esta completo")
    .isNumeric()
    .withMessage("El ISBN solo puede contener números")
    .isLength({ min: 10, max: 13 })
    .withMessage("El ISBN debe tener entre 10 y 13 digitos"),
  check("sinopsis").notEmpty().withMessage("La sinopsis debe estar completa"),
  check("sinopsis").notEmpty().withMessage("La sinopsis debe estar completa"),
  check("biografia").notEmpty().withMessage("La biografía debe estar completa"),
  check("precio")
    .notEmpty()
    .withMessage("El precio debe estar completo")
    .isNumeric()
    .withMessage("El precio debe contener solamente números")
    .isLength({ min: 0.01 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send(errors.array());
    } else {
      next();
    }
  },
];
