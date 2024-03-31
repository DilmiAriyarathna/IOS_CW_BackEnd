const mongoose = require('mongoose')

const _clothingproductSchema = mongoose.Schema(
    {
        id: {type: Number, required: true},
        mcat: {type: String, required: false},
        scat: {type: String, required: false},
        brand: {type: String, required: false},
        type: {type: String, required: false},
        name: {type: String, required: [true, "Please enter product name"]},
        quantity: {type: Number, required: true,default: 0},
        price: {type: String, required: true},
        details: {type: String, required: false},
        unitname: {type: String, required: false},
        unitvalue: {type: String, required: true},
        image: {type: String, required: false},
        size: {type: String, required: false},
        variations: {type: String, required: false},
        clothingmeterial: {type: String, required: false},
        sleeves: {type: String, required: false},
        dressshape: {type: String, required: false},
        collartype: {type: String, required: false},
        boxcontent: {type: String, required: false},
        sizeimg: {type: String, required: false},
        neckline: {type: String, required: false},
        sleevlength: {type: String, required: false},
        colors: {type: String, required: false},

    },
    {
        timestamps: true
    }
)

_clothingproductSchema.statics.findByName = async function(name) {
    return await this.findOne({ name: name });
};

const _clothingProduct = mongoose.model('ClothingProduct', _clothingproductSchema);

module.exports = _clothingProduct;