const express = require("express");
const postRouter = express.Router();
const upload = require("../helpers/ImageUpload");

const AuthCheck = require("../middlewares/AuthCheck");

// Post Controller
const {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
  getPostsByUser,
} = require("../controllers/PostController");

// creat post
postRouter.post("/create", [AuthCheck, upload.single("image")], createPost);

// get all posts
postRouter.get("/get", getAllPosts);

// get single post
postRouter.get("/single/:id", getSinglePost);
// get posts by users
postRouter.get("/user", AuthCheck, getPostsByUser);

// update post
postRouter.put("/update/:id", updatePost);

// delet post
postRouter.delete("/delete/:id", deletePost);

module.exports = postRouter;
