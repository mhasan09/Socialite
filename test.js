const mongoose = require('mongoose')
const Post = require('./database/models/post')
mongoose.connect('mongodb://localhost/socialite')
Post.create({
    title : 'sup Mr White',
    description : 'so',
    content : 'ada'

},(error,post)=>{
    console.log(error,post)
})