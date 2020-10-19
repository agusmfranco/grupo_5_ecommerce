// https://github.com/validatorjs/validator.js

const { check, validationResult, body } = require("express-validator");

exports.validateNewBook = [
  check("titulo").notEmpty().withMessage("El título debe estar completo"),
  check("autor").notEmpty().withMessage("El autor debe estar completo"),
  check("editorial").notEmpty().withMessage("La editorial debe estar completa"),
  check("genero").notEmpty().withMessage("El género debe estar completo"),
  check("isbn")
    .notEmpty()
    .withMessage("El ISBN debe estar completo")
    .isNumeric()
    .withMessage("El ISBN solo puede contener números")
    .isLength({ min: 10, max: 13 })
    .withMessage("El ISBN debe tener entre 10 y 13 digitos"),
  check("precio")
    .notEmpty()
    .withMessage("El precio debe estar completo")
    .isNumeric()
    .withMessage("El precio debe contener solamente números"),
  check("sinopsis").notEmpty().withMessage("La sinopsis debe estar completa"),
  check("biografia").notEmpty().withMessage("La biografía debe estar completa"),
];

exports.validateNewUser = [
  check("nombre").notEmpty().withMessage("El nombre debe estar completo"),
  check("apellido").notEmpty().withMessage("El apellido debe estar completo"),
  check("dni").notEmpty().withMessage("El DNI debe estar completo"),
  check("nacimiento")
    .notEmpty()
    .withMessage("La fecha de nacimiento debe estar completa"),
  check("direccion").notEmpty().withMessage("La direccion debe estar completa"),
  check("cp").notEmpty().withMessage("El coodigo postal debe estar completo"),
  check("email")
    .notEmpty()
    .withMessage("El correo electronico debe estar completo"),
  check("password").notEmpty().withMessage("La contraseña debe estar completa"),
];
