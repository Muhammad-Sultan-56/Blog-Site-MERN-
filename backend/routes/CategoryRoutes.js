const express = require("express");

const categoryRoute = express.Router();

// Category Controller
const {
  createCategory,
  getAllCategories,
  getSingleCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/CategoryController");

// create category
categoryRoute.post("/create", createCategory);

// get all categories
categoryRoute.get("/categories", getAllCategories);

// get a single id api
categoryRoute.get("/get/:id", getSingleCategory);

// delete a single id api
categoryRoute.delete("/deleteCategory/:id", deleteCategory);

// update a category api
categoryRoute.put("/updateCategory/:id", updateCategory);

module.exports = categoryRoute;
