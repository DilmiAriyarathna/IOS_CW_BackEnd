
const productSpecificationImage = require('../models/imageModel')
const asyncHandler = require('express-async-handler')


const getProductSpecificationsImages = asyncHandler(async(req, res) =>
{
    try 
    {
        const product_specificationsimg = await productSpecificationImage.find({});
        res.status(200).json(product_specificationsimg);
    } 
    catch (error) 
    {
        //res.status(500).json({message: error.message})
        res.status(500);
        throw new Error(error.message);
    }
})


const getProductSpecificationsImage = asyncHandler(async(req, res) => 
{
    try 
    {
        const {specification_id} = req.params;
        const product_specificationsimg = await productSpecificationImage.findById(specification_id);
        res.status(200).json(product_specificationsimg);
    } 
    catch (error) 
    {
        res.status(500);
        throw new Error(error.message);
        //res.status(500).json({message: error.message})
    }
})

//SAVE Data to the database
const saveProductSpecificationsImages = asyncHandler(async(req, res) => 
{
    try 
    {
     const product_specificationsimg = await productSpecificationImage.create(req.body)
     res.status(200).json(product_specificationsimg);
    } 
    catch (error) 
    {
        res.status(500);
        throw new Error(error.message);
    }
 })

module.exports = {
    getProductSpecificationsImages,
    getProductSpecificationsImage,
    saveProductSpecificationsImages
}

