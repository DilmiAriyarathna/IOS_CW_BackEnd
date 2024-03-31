const express = require('express');


const Product = require('../models/userModel')
const {getUsers,saveUsers} = require('../controllers/userController')

const router = express.Router();

//GET all product Data from the DataBase
router.get('/', getUsers);

//SAVE Data to the database
router.post('/', saveUsers)

module.exports = router;