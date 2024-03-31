const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')


//GET all product Data from the DataBase
const getUsers = asyncHandler(async(req, res) =>
{
    try 
    {
        const users = await User.find({});
        res.status(200).json(users);
    } 
    catch (error) 
    {
        //res.status(500).json({message: error.message})
        res.status(500);
        throw new Error(error.message);
    }
})


//SAVE Data to the database
const saveUsers = asyncHandler(async(req, res) => 
{
    try 
    {
     const saveuser = await User.create(req.body)
     res.status(200).json(saveuser);
    } 
    catch (error) 
    {
        res.status(500);
        throw new Error(error.message);
    }
 })


 module.exports = {
    getUsers, saveUsers
   
}
