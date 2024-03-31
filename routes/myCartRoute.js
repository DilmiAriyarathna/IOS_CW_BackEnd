

const express = require('express');


const MyCart = require('../models/myCartModel')
const {getMyCartDetails,getMyCartDetail,saveMyCartDetail} = require('../controllers/myCartController')

const router = express.Router();

//GET all product Data from the DataBase
router.get('/', getMyCartDetails);

//get one product from database using ID
router.get('/:cartid', getMyCartDetail)

//SAVE Data to the database
router.post('/', saveMyCartDetail)

module.exports = router;