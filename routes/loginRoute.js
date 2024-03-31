const express = require('express');

const Login = require('../models/loginModel');

const {userLogin} = require('../controllers/loginController')

const router = express.Router();

//GET all product Data from the DataBase
router.post('/', userLogin);


module.exports = router;