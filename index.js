const expressEdge = require('express-edge')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const createUserController = require('./controllers/createUser')
const storeUserController = require('./controllers/storeUser')

const app = new express()

mongoose.connect('mongodb://localhost/node-js-blog')

app.use(express.static('public'))
app.use(expressEdge)
app.use(fileUpload())
app.set('views', `${__dirname}/views`)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const storePost = require('./middleware/storePost')

app.use('/posts/store', storePost)

app.get('/', homePageController)

app.get('/posts/new',createPostController)

app.get('/auth/register',createUserController)

app.post('/posts/store',storePostController)

app.get('/post/:id',getPostController )

app.post('/users/register', storeUserController)

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.listen(4000, () => {
  console.log('App listening on port 4000')
})
