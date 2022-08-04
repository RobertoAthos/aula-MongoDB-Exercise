const express = require('express')
const mongoose = require('mongoose')
const PORT = 3000
const app = express()
const linkRoute = require('./routes/linkRoute')

mongoose.connect('mongodb://localhost/links', {useUnifiedTopology:true, useNewUrlParser:true })
.then((db)=>{
    console.log(db)
}).catch(error=>{
    console.log(error)
})

app.use('/', linkRoute)
app.listen(PORT ,()=>console.log('Listening to port',PORT))