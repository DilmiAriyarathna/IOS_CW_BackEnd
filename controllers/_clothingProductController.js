
const ClothingProduct = require('../models/_clothingProductModel')
const asyncHandler = require('express-async-handler')


const saveProduct = asyncHandler(async(req, res) => 
{
    try 
    {
     const cproduct = await ClothingProduct.create(req.body)
     res.status(200).json(cproduct);
    } 
    catch (error) 
    {
        res.status(500);
        throw new Error(error.message);
    }
 })

 //GET all product Data from the DataBase
const getProducts = asyncHandler(async(req, res) =>
{
    try 
    {
        const cproduct = await ClothingProduct.find({});
        res.status(200).json(cproduct);
    } 
    catch (error) 
    {
        //res.status(500).json({message: error.message})
        res.status(500);
        throw new Error(error.message);
    }
})

//get one product from database using ID
const getProduct = asyncHandler(async(req, res) => 
{
    try 
    {
        const {name} = req.params;

        const cproduct = await ClothingProduct.findByName(name); 

        //const cproduct = await ClothingProduct.findByName({ name: name });
        res.status(200).json(cproduct);

        // const cproduct = await ClothingProduct.findOne(name);
        // res.status(200).json(cproduct);
    } 
    catch (error) 
    {
        res.status(500);
        throw new Error(error.message);
        //res.status(500).json({message: error.message})
    }
})

 module.exports = {
    saveProduct, getProducts, getProduct
}
