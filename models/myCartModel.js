const mongoose = require('mongoose')

const myCart_Schema = mongoose.Schema(
    {
        cart_id: {
            type: Number,
            required: true
        },
        user_name: {
            type: String,
            required: true,         
        },
        prod_id:{
            type: Number,
            required: true,          
        },
        qty:{
            type: Number,
            required: true,          
        },
        status: {
            type: Number,
            required: true,
            default: 1
        }
    },
    {
        timestamps: true
    }
)

const MyCart = mongoose.model('MyCart', myCart_Schema);

module.exports = MyCart;