const CategoryModel = require("../models/Category");

// ============ create category ==============//

const createCategory = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const newCategory = await CategoryModel.create(data);

    return res.status(201).json({
      status: "OK",
      message: "Category Created Successfully",
      category: newCategory,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({
      status: "Failed",
    });
  }
};

// =============== get All categories =============//

const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    return res.json({
      status: "OK",
      categories: categories,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      status: "Fail",
    });
  }
};

// ========== get single category ===============//

const getSingleCategory = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const category = await CategoryModel.findById(id);
    res.json({
      status: "Ok",
      category: category,
    });
  } catch (err) {
    console.log(err);
    res.json({
      status: "Fail",
    });
  }
};

// ================= delete category =================//

const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const deleteCategory = await CategoryModel.findByIdAndDelete(id);
    res.json({
      status: "Ok",
      message: "Category Deleted Successfully",
    });
  } catch (err) {
    console.log(err);
    res.json({
      status: "Failed",
    });
  }
};

// ================= update category ==================//

const updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const data = req.body;
    const updateCategory = await CategoryModel.findByIdAndUpdate(id, data);
    res.json({
      status: "OK",
      message: "Category Updated Successfully",
      category: updateCategory,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "Failed",
    });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getSingleCategory,
  deleteCategory,
  updateCategory,
};
