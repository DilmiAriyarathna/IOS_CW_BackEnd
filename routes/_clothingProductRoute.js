const express = require('express');


const ClothingProduct = require('../models/_clothingProductModel')
const {saveProduct,getProducts, getProduct} = require('../controllers/_clothingProductController')

const router = express.Router();

//SAVE Data to the database
router.post('/', saveProduct)

//GET all product Data from the DataBase
router.get('/', getProducts);

//get one product from database using ID
router.get('/:name', getProduct)

module.exports = router;