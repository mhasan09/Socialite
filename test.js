const mongoose = require('mongoose')
const Post = require('./database/models/post')
mongoose.connect('mongodb://localhost/socialite')
// Post.create({
//     title : 'sup Jesse',
//     description : 'Tuco',
//     content : 'Gustavo and mike'

// },(error,post)=>{
//     console.log(error,post)
// })

// Post.find({},(error,posts)=>{
//     console.log(error,posts)
// })
Post.findById("5d0353be1a1be22414b22e4",(error,post)=>{
    console.log(error, post)
})