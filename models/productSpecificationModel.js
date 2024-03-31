const mongoose = require('mongoose')

const productSpecification_Schema = mongoose.Schema(
    {
        specification_id: {
            type: Number,
            required: true
        },
        product_id: {
            type: Number,
            required: true,
            default: 0
        },
        specification_name: {
            type: String,
            required: true,
        },
        specification_value: {
            type: String,
            required: false,
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

const ProductSpecifications = mongoose.model('ProductSpecification', productSpecification_Schema);

module.exports = ProductSpecifications;