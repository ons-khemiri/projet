const express = require("express");
const { editComment, addComment, deleteComment, getComments } = require("../controllers/comment");
const isAdmin = require("../middleware/isAdmin");

const router=express.Router(); 
router.get('/allComments',getComments);
router.delete('/:_id',isAdmin, deleteComment);
router.put('/editComment/:_id',editComment);
router.post('/addComment',addComment);

module.exports = router;