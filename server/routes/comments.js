const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken.js");
const { createComment, updateComment , deleteComment, getPostComment}  = require("../Controllers/commentController.js")
//Create
router.post("/create", verifyToken, createComment);

//Update
router.put("/:id", verifyToken, updateComment);
//Delete
router.delete("/:id", verifyToken, deleteComment);
//Get posts Comment 
router.get("/post/:postId", getPostComment);

module.exports = router;
