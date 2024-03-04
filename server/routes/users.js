const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken.js");
const {
  updateUser,
  deleteUser,
  getUser,
} = require("../Controllers/userController.js");

//Update
router.put("/:id", verifyToken, updateUser);

//Delete
router.delete("/:id", verifyToken, deleteUser);

//Get User
router.get("/:id", getUser);

module.exports = router;
