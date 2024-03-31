const Login = require('../models/loginModel')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt');

//Login
const userLogin = asyncHandler(async(req, res) =>
{
    try 
    {
        const { username, password } = req.body;
        const loginUsername = await Login.findOne({username});
        if(!loginUsername)
        {
             res.status(404);
             throw new Error(`Invalid UserName`);
        }

        if (loginUsername.password !== password) 
        {
             res.status(404);
             throw new Error('Invalid credentials');
        }
       
        res.status(200).send('Login successful');
    } 
    catch (error) 
    {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {userLogin}

// app.post('/login', async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         const user = await User.findOne({ username });
//         if (!user) {
//             return res.status(404).send('User not found');
//         }
//         const passwordMatch = await bcrypt.compare(password, user.password);
//         if (!passwordMatch) {
//             return res.status(401).send('Invalid credentials');
//         }
//         res.status(200).send('Login successful');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// res.status(404);
//             throw new Error(`Cannot find any product with ID ${id}`)