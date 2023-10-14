const express = require("express");
const router = express.Router();
const categoryController = require("../controller/categories.controller");

// GET all products and categories by name/specific keyword
router.get('/', categoryController.getCategories);

// GET product by ID
router.get('/:id', categoryController.getCategoryById);

// Add a new product
router.post('/', categoryController.addCategory);

// Update product by ID
router.put('/:id', categoryController.updateCategory);

// DELETE all products
router.delete('/', categoryController.removeAllCategories);

// DELETE product by ID
router.delete('/:id', categoryController.removeCategoryById);

module.exports = router;