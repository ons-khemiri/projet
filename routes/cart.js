const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const Product = require("../models/Product");
const { getCart, EmptyCart, AddToCart, DeleteItemCart } = require("../controllers/cart");
const isAuth = require("../middleware/isAuth");

const router = express.Router();
router.get("/",isAuth,getCart )
router.get("/:user/:product/",AddToCart);
router.delete("/:user/:product/",DeleteItemCart );
router.delete("/:user",EmptyCart );

module.exports = router;