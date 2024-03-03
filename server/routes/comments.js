const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const verifyToken = require("../middleware/verifyToken.js");

//Create
router.post("/create", verifyToken, async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    const saveComment = await newComment.save();
    res.status(200).json(saveComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update
// implement when user wants to update its password user must provide his prev password
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(req.params.id,{ $set: req.body },{ new: true });
    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Delete
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json("Comment has been deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
});
//Get posts Comment 
router.get("/post/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({postId:req.params.postId});
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
