const express = require("express");
const { getProducts, deleteProduct, editProduct, addProduct } = require("../controllers/product");
const isAdmin = require("../middleware/isAdmin");
const isAgent = require("../middleware/isAgent");

const router=express.Router(); 
router.get('/allProducts',getProducts);
router.delete('/:_id',isAdmin, deleteProduct);
router.put('/editProduct/:_id',isAgent, editProduct);
router.post('/addProduct',isAgent, addProduct);

module.exports = router;