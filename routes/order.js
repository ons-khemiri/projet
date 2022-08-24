const express = require("express") ;
const { addOrder, getOrders, deleteOrder } = require("../controllers/order");
const isAgent = require("../middleware/isAgent");

const router = express.Router();
router.post('/addOrder', addOrder)
router.get('/allOrders',isAgent, getOrders)
router.delete('/:_id',isAgent, deleteOrder);

module.exports = router;