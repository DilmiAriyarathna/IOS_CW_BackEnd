const express = require('express');


const Product = require('../models/productModel')
const {getProducts, getProduct, saveProduct, updateProduct, deleteProduct} = require('../controllers/productController')

const router = express.Router();

//GET all product Data from the DataBase
router.get('/', getProducts);

//get one product from database using ID
router.get('/:id', getProduct)

//SAVE Data to the database
router.post('/', saveProduct)

// Update a product 
router.put('/:id', updateProduct)

//Delete a product from DB
router.delete('/:id', deleteProduct)

// End routes //

module.exports = router;