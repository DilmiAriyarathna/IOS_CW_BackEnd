const express = require('express');


const ProductImage = require('../models/imageModel')
const {getProductSpecificationsImages, getProductSpecificationsImage, saveProductSpecificationsImages} = require('../controllers/imageController')

const router = express.Router();

//GET all product Data from the DataBase
router.get('/', getProductSpecificationsImages);

//get one product from database using ID
router.get('/:id', getProductSpecificationsImage)

//SAVE Data to the database
router.post('/', saveProductSpecificationsImages)

module.exports = router;