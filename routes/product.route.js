const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");

// GET all products and products by name/specific keyword
router.get('/', productController.getProducts);

// GET product by ID
router.get('/:id', productController.getProductById);

// Add a new product
router.post('/', productController.addNewProduct);

// Update product by ID
router.put('/:id', productController.updateProductById);

// DELETE all products
router.delete('/', productController.removeAllProducts);

// DELETE product by ID
router.delete('/:id', productController.removeProductById);

module.exports = router;