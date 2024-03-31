require('dotenv').config()
const express = require('express')

const mongoose = require('mongoose')

const productRoute = require('./routes/productRoute')
const loginRoute = require('./routes/loginRoute')
const userRoute = require('./routes/userRoute')
const CProductRoute = require('./routes/_clothingProductRoute')
const productSpecificationRoute = require('./routes/productSpecificationRoute')
const productSpecificationImageRoute = require('./routes/imageRoute')
// call product model
const errorMiddleware = require('./middleware/errorMiddleware')
const app = express()
var cors = require('cors')

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/products', productRoute);

app.use('/api/login', loginRoute);

app.use('/api/users', userRoute);

app.use('/api/clothingproducts', CProductRoute);

app.use('/api/productspecifications', productSpecificationRoute);

app.use('/api/productimages', productSpecificationImageRoute);

//Routes
app.get('/', (req,res) => {
    res.send('Hello Node API')
})

app.get('/blog', (req,res) => {
    res.send('Hello API')
})

app.listen(3000, () => {
    console.log(`Hi`)
})
// app.post('/product', (req, res) => {
//     console.log(req.body);
//     res.send(req.body)
// })

app.use(errorMiddleware);

//connection string to mongoDB Atlas
mongoose.connect(MONGO_URL)
.then(() => {
    console.log('Connected DB')

    app.listen(PORT, () => {
        console.log(`Node API APP is running of port ${PORT}`)
    })

}).catch((error) => {
    console.log(error)
})