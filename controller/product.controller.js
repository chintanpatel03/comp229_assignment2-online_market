let ProductModel = require('../models/product.model');

// GET all products or product by name
const getProducts = async (req, res) => {
  try {
    const keyword = req.query.name;

    if (keyword) {
      // If 'name' query parameter is provided, search by Name
      const products = await ProductModel.find({ name: { $regex: keyword, $options: 'i' }});
      res.json(products);
    } else {
      // If 'name' query parameter is not provided, get all products
      const products = await ProductModel.find();
      res.json(products);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
  
// GET product by ID
const getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await ProductModel.findById(productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching product by ID' });
  }
};

// Add a new product
const addNewProduct = async (req, res) => {
  const { name, description, price, quantity, category } = req.body;
  try {
    const newProduct = new ProductModel({
      name,
      description,
      price,
      quantity,
      category,
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ error: 'Error adding a new product' });
  }
};

// Update product by ID
const updateProductById = async (req, res) => {
  const productId = req.params.id;
  const updateData = req.body;
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(productId, updateData, {
      new: true,
    });
    if (updatedProduct) {
      res.json(updatedProduct);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating product by ID' });
  }
};

// DELETE all products
const removeAllProducts = async (req, res) => {
  try {
    await ProductModel.deleteMany({});
    res.json({ message: 'All products have been removed' });
  } catch (error) {
    res.status(500).json({ error: 'Error removing all products' });
  }
};

// DELETE product by ID
const removeProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const deletedProduct = await ProductModel.findByIdAndRemove(productId);
    if (deletedProduct) {
      res.json({ message: 'Product has been removed' });
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error removing product by ID' });
  }
};
  
  module.exports = {
    getProducts,
    getProductById,
    addNewProduct,
    updateProductById,
    removeAllProducts,
    removeProductById,
  };