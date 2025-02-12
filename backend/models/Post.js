const mongoose = require("mongoose");
require("dotenv").config();

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      default: "Draft",
    },
    image: {
      type: String,
      required: true,
      default: "post.jpg",
      get: (value) => {
        return "http://localhost:3001/" + value;
      },
    },
  },
  { timestamps: true, toJSON: { getters: true }, toObject: { getters: true } }
);

const PostModel = mongoose.model("post", PostSchema);

module.exports = PostModel;
