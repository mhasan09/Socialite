const express = require('express')
const path = require('path')
const app = express()
const expressEdge = require('express-edge')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/socialite')
app.use(express.static('public'))
app.use(expressEdge) //adding functionality for templating engine
app.set('views', `${__dirname}/views`)
app.listen(3000,()=>{
    console.log("app listening on port 3000")
})
app.get('/',(request,response)=>{
    response.render('index')
})
app.get('/about',(request,response)=>{
    response.render('about')
})
app.get('/contact',(request,response)=>{
    response.render('contact')
})
app.get('/post',(request,response)=>{
    response.render('post')
})

