const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please enter user name"]
        },
        email: {
            type: String,
            required: true,    
        },
        password: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema);

module.exports = User;