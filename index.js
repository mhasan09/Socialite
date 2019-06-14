const express = require('express')
const path = require('path')
const app = express()
const expressEdge = require('express-edge')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Post = require('./database/models/post')
mongoose.connect('mongodb://localhost/socialite', { useNewUrlParser: true })
app.use(express.static('public'))
app.use(expressEdge) //adding functionality for templating engine
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.set('views', `${__dirname}/views`)
app.listen(3000,()=>{
    console.log("app listening on port 3000")
})
app.get('/',async(request,response)=>{
    const posts = await Post.find({})
    console.log(posts)
    response.render('index',{
        posts  
    })
})
app.get('/about',(request,response)=>{
    response.render('about')
})
app.get('/contact',(request,response)=>{
    response.render('contact')
})
app.get('/post/:id',async(request,response)=>{
    const post = await Post.findById(request.params.id)
    response.render('post',{
        post
    })
})
app.get('/post/new',(request,response)=>{
    response.render('create')
})
app.post('/post/store',(request,response)=>{
    Post.create(request.body,(error,post)=>{
    response.redirect('/')
    }) 
})


