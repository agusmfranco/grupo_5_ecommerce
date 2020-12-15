var express = require("express");
var router = express.Router();

const users_controller = require("../controllers/usersController");
const forms_validators = require("../middlewares/formsValidators");

router.get("/", users_controller.userList)

router.get("/create", users_controller.userCreate);
router.post(
  "/create",
  forms_validators.validateNewUser,
  users_controller.userCreated
);

router.get("/:id/edit", users_controller.userUpdate);
router.put(
  "/:id",
  forms_validators.validateNewUser,
  users_controller.userUpdated
);

router.delete("/:id", users_controller.userDelete);

router.get("/login", users_controller.userLogin);
router.post('/login', forms_validators.validateLogin, users_controller.processLogin)

//prueba

router.get('/check', function(req, res){
  if (req.cookies.recordarme == undefined && req.session.loggedUser == undefined){
    res.send('no estas logeado')
  } else if (req.cookies.recordarme != undefined || req.session.loggedUser != undefined) {
    res.send('estas logeado')
  }
});


module.exports = router;
