var express = require("express");
var router = express.Router();

const users_controller = require("../controllers/usersController");
const forms_validators = require("../middlewares/formsValidators");

router.get("/register", users_controller.userRegister);
router.post(
  "/register",
  forms_validators.validateNewUser,
  users_controller.userSave
);

router.get("/update", users_controller.userUpdate);
router.put(
  "/update",
  forms_validators.validateNewUser,
  users_controller.userUpdated
);
router.delete("/update", users_controller.userDelete);

router.get("/login", users_controller.userLogin);

module.exports = router;
