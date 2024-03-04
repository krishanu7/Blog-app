const Post = require("../models/Post");
const Comment = require("../models/Comment");

const createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (err) {
    res.status(500).json(err);
  }
};
const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    await Comment.deleteMany({ postId: req.params.id });
    res.status(200).json("Post has been deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
};

const getPostDetails = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllposts = async (req, res) => {
  try {
    const searchTerm = req.query.search;
    const regex = new RegExp(searchTerm, "i");
    const searchFilter = {
      $or: [
        { title: { $regex: regex } },
        { description: { $regex: regex } },
        { categories: { $in: [regex] } },
      ],
    };
    const allPosts = await Post.find(searchTerm ? searchFilter : null);
    res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getUserPosts = async (req, res) => {
  try {
    const userPosts = await Post.find({ userId: req.params.userId });
    res.status(200).json(userPosts);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = {
  createPost,
  updatePost,
  deletePost,
  getPostDetails,
  getAllposts,
  getUserPosts,
};
