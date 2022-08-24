const express = require("express");
const { register, login} = require("../controllers/user");
const isAuth = require("../middleware/isAuth");
const { registerValidation,validation,loginValidation} = require("../middleware/validator");

const router = express.Router();
router.post("/register",registerValidation(), validation, register);
router.post("/login", loginValidation(), validation, login);
router.get("/current", isAuth, (req, res) => {res.send(req.user);
});
module.exports = router;