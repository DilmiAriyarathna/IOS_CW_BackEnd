
const productSpecification = require('../models/productSpecificationModel')
const asyncHandler = require('express-async-handler')


const getProductSpecifications = asyncHandler(async(req, res) =>
{
    try 
    {
        const product_specifications = await productSpecification.find({});
        res.status(200).json(product_specifications);
    } 
    catch (error) 
    {
        //res.status(500).json({message: error.message})
        res.status(500);
        throw new Error(error.message);
    }
})


const getProductSpecification = asyncHandler(async(req, res) => 
{
    try 
    {
        const {specification_id} = req.params;
        const product_specifications = await productSpecification.findById(specification_id);
        res.status(200).json(product_specifications);
    } 
    catch (error) 
    {
        res.status(500);
        throw new Error(error.message);
        //res.status(500).json({message: error.message})
    }
})

//SAVE Data to the database
const saveProductpecification = asyncHandler(async(req, res) => 
{
    try 
    {
     const product_specifications = await productSpecification.create(req.body)
     res.status(200).json(product_specifications);
    } 
    catch (error) 
    {
        res.status(500);
        throw new Error(error.message);
    }
 })

 // Update a product 
// const updateProduct = asyncHandler(async(req, res) => 
// {
//     try 
//     {
//         const {id} = req.params;

//         const product = await Product.findByIdAndUpdate(id, req.body);
//         if(!product)
//         {
//             res.status(404);
//             throw new Error(`Cannot find any product with ID ${id}`)
//             //return res.status(404).json({message: `Cannot find any product with ID ${id}`});
//         }
//         //get latest product details
//         const updatedProduct = await Product.findById(id);

//         res.status(200).json(updatedProduct);
//     } 
//     catch (error) 
//     {
//         res.status(500);
//         throw new Error(error.message);
//     }
// })

// //Delete a product from DB
// const deleteProduct = asyncHandler(async(req, res) => 
// {
//     try 
//     {
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);

//         if(!product)
//         {
//             res.status(404);
//             throw new Error(`Cannot find any product with ID ${id}`)
//             //return res.status(404).json({message: `Cannot find any product with ID ${id}`});
//         }
//         res.status(200).json(product);
//     } 
//     catch (error) 
//     {
//         res.status(500);
//         throw new Error(error.message);
//     }
// })

module.exports = {
    getProductSpecifications,
    getProductSpecification,
    saveProductpecification
}

