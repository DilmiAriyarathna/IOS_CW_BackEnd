const mongoose = require('mongoose')

const loginSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please enter user name"]
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

const Login = mongoose.model('Users', loginSchema);

module.exports = Login;