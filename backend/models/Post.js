const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  authorId: {
    type: String,
    required: true,
  },
});

const PostModel = mongoose.model("post", PostSchema);

module.exports = PostModel;
