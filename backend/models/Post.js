const mongoose = require("mongoose");

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
    image: {
      type: String,
      required: true,
      default: "post.jpg",
    },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("post", PostSchema);

module.exports = PostModel;
