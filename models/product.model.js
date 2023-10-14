var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,

    },
    category: {
        type: String,
    }
});

var collectionName = 'product'
module.exports = mongoose.model('products', ProductSchema, collectionName);