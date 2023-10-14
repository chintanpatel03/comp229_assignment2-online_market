let CategoryModel = require('../models/categories.model');

// GET all products or product by name
const getCategories = async (req, res) => {
  try {
    const keyword = req.query.name;

    if (keyword) {
      // If 'name' query parameter is provided, search by Name
      const categories = await CategoryModel.find({ name: { $regex: keyword, $options: 'i' }});
      res.json(categories);
    } else {
      // If 'name' query parameter is not provided, get all categories
      const categories = await CategoryModel.find();
      res.json(categories);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get Category by ID
const getCategoryById = async (req, res) => {
  try {
    const category = await CategoryModel.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add new Category
const addCategory = async (req, res) => {
  try {
    const newCategory = new CategoryModel(req.body);
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

// Update Category by ID
const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await CategoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCategory) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Remove all Categories
const removeAllCategories = async (req, res) => {
  try {
    await CategoryModel.deleteMany({});
    res.json({ message: 'All categories deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Remove Category by ID
const removeCategoryById = async (req, res) => {
  try {
    const result = await CategoryModel.findByIdAndRemove(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.json({ message: 'Category deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getCategories,
  getCategoryById,
  addCategory,
  updateCategory,
  removeAllCategories,
  removeCategoryById,
};