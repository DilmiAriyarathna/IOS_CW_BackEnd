const express = require('express');


const ProductSp = require('../models/productSpecificationModel')
const {getProductSpecifications, getProductSpecification, saveProductpecification} = require('../controllers/productSpecificationController')

const router = express.Router();

//GET all product Data from the DataBase
router.get('/', getProductSpecifications);

//get one product from database using ID
router.get('/:id', getProductSpecification)

//SAVE Data to the database
router.post('/', saveProductpecification)

module.exports = router;