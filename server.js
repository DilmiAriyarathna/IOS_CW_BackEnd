const express = require('express')
const app = express()


//Routes
app.get('/', (req,res) => {
    res.send('Hello Node API')
})



app.listen(3000, () => {
    console.log('Node API APP is running of port 3000')
})