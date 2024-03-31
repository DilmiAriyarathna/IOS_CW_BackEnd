const mongoose = require('mongoose')

const productImage_Schema = mongoose.Schema(
    {
        image_id: {
            type: Number,
            required: true
        },
        product_id: {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
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

const ProductSpecificationsImage = mongoose.model('ProductSpecificationImage', productImage_Schema);

module.exports = ProductSpecificationsImage;