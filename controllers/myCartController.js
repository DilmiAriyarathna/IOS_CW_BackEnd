
const MyCart = require('../models/myCartModel')
const asyncHandler = require('express-async-handler')


const getMyCartDetails = asyncHandler(async(req, res) =>
{
    try 
    {
        const my_Cart = await MyCart.find({});
        res.status(200).json(my_Cart);
    } 
    catch (error) 
    {
        //res.status(500).json({message: error.message})
        res.status(500);
        throw new Error(error.message);
    }
})


const getMyCartDetail = asyncHandler(async(req, res) => 
{
    try 
    {
        const {cart_id} = req.params;
        const my_Cart = await MyCart.findById(cart_id);
        res.status(200).json(my_Cart);
    } 
    catch (error) 
    {
        res.status(500);
        throw new Error(error.message);
        //res.status(500).json({message: error.message})
    }
})

//SAVE Data to the database
const saveMyCartDetail = asyncHandler(async(req, res) => 
{
    try 
    {
     const my_Cart = await MyCart.create(req.body)
     res.status(200).json(my_Cart);
    } 
    catch (error) 
    {
        res.status(500);
        throw new Error(error.message);
    }
 })

module.exports = {
    getMyCartDetails,
    getMyCartDetail,
    saveMyCartDetail}

