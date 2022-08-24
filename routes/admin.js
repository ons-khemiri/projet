const express = require("express") ;
const { loginAdmin } = require("../controllers/admin");
const { getUsers } = require("../controllers/user");
const isAdmin = require("../middleware/isAdmin");
const { validation, loginValidation } = require("../middleware/validator");


const router = express.Router();
router.post("/loginAdmin", validation , loginValidation(), loginAdmin)
router.get ("/allusers" , getUsers)

module.exports = router;