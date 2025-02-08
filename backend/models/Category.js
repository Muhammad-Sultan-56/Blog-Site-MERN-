const mongoose = require("mongoose");

// Set Category Schema
const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const CategoryModel = mongoose.model("category", CategorySchema);

module.exports = CategoryModel;
