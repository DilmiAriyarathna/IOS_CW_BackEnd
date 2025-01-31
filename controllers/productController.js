
const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')



//GET all product Data from the DataBase
const getProducts = asyncHandler(async(req, res) =>
{
    try 
    {
        const products = await Product.find({});
        res.status(200).json(products);
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
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } 
    catch (error) 
    {
        res.status(500);
        throw new Error(error.message);
        //res.status(500).json({message: error.message})
    }
})

//SAVE Data to the database
const saveProduct = asyncHandler(async(req, res) => 
{
    try 
    {
     const product = await Product.create(req.body)
     res.status(200).json(product);
    } 
    catch (error) 
    {
        res.status(500);
        throw new Error(error.message);
    }
 })

 // Update a product 
const updateProduct = asyncHandler(async(req, res) => 
{
    try 
    {
        const {id} = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product)
        {
            res.status(404);
            throw new Error(`Cannot find any product with ID ${id}`)
            //return res.status(404).json({message: `Cannot find any product with ID ${id}`});
        }
        //get latest product details
        const updatedProduct = await Product.findById(id);

        res.status(200).json(updatedProduct);
    } 
    catch (error) 
    {
        res.status(500);
        throw new Error(error.message);
    }
})

//Delete a product from DB
const deleteProduct = asyncHandler(async(req, res) => 
{
    try 
    {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product)
        {
            res.status(404);
            throw new Error(`Cannot find any product with ID ${id}`)
            //return res.status(404).json({message: `Cannot find any product with ID ${id}`});
        }
        res.status(200).json(product);
    } 
    catch (error) 
    {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {
    getProducts,
    getProduct,
    saveProduct,
    updateProduct,
    deleteProduct
}

