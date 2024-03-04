const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken.js");
const {
  createPost,
  updatePost,
  deletePost,
  getPostDetails,
  getAllposts,
  getUserPosts,
} = require("../Controllers/postController.js");
//Create
router.post("/create", verifyToken, createPost);

//Update
router.put("/:id", verifyToken, updatePost);
//Delete
router.delete("/:id", verifyToken, deletePost);
//Get POST DETAILS
router.get("/:id", getPostDetails);
//GET ALL POSTs
router.get("/", getAllposts);
// GET USER POSTS
router.get("/user/:userId", getUserPosts);

module.exports = router;
