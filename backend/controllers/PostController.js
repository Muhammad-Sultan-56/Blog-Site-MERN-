const PostModel = require("../models/Post");

//==================== creat post api ==================//
const createPost = async (req, res) => {
  try {
    const data = req.body;
    const userId = req.userId;
    data.authorId = userId;
    data.image = req.file.filename;

    const post = await PostModel.create(data);

    return res.json({
      status: "Ok",
      message: "Post Created Successfully",
      post: post,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      status: "Fail",
    });
  }
};

//=================== get all posts ====================//
const getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.find().populate("authorId", "name");

    return res.json({
      status: "Ok",
      posts: posts,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      status: "Fail",
    });
  }
};

//================== get single post  ===============//

const getSinglePost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await PostModel.findById(id).populate("authorId", "name");
    return res.json({
      status: "Ok",
      post: post,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      status: "Failed",
    });
  }
};

//================== get posts by user  ===============//

const getPostsByUser = async (req, res) => {
  try {
    const posts = await PostModel.find({ authorId: req.userId }).populate(
      "authorId",
      "name image"
    );
    return res.json({
      status: "Ok",
      post: posts,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      status: "Failed",
    });
  }
};

//=============== update post ===============//
const updatePost = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updatePost = await PostModel.findByIdAndUpdate(id, data);

    return res.json({
      status: "Ok",
      message: "Post Updated Successfully...",
      post: updatePost,
    });
  } catch (error) {
    console.log(error);

    return res.json({
      status: "Failed",
    });
  }
};

//================= delete post =================//

const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const postDelete = await PostModel.findByIdAndDelete(id);
    return res.json({
      status: "Ok",
      message: "Post Deleted Successfully",
    });
  } catch (error) {
    console.log(error);

    return res.json({
      status: "Failed",
    });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
  getPostsByUser,
};
