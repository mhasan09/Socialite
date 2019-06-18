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
const loginController = require('./controllers/login')
const expressSession = require('express-session')
const connectMongo = require('connect-mongo')
const mongoStore = connectMongo(expressSession)
const auth = require('./middleware/auth')
const connectFlash = require('connect-flash')
const redirectIfAuthenticated = require('./middleware/redirectIfAuthenticated')
const edge = require('edge.js')
const loginUserController = require('./controllers/loginUser')
const logoutController = require("./controllers/logout")
const cloudinary = require('cloudinary')
const app = new express()
mongoose.connect('mongodb://localhost/node-js-blog')

app.use(express.static('public'))
app.use(expressEdge)
app.use(expressSession({
  secret : 'secret',
  store : new mongoStore({
    mongooseConnection : mongoose.connection
  })

}))
app.use("*", (req, res, next) => {
  edge.global("auth", req.session.userId);
  next();
});
app.use(fileUpload())
app.set('views', `${__dirname}/views`)

app.use(connectFlash())
const storePost = require('./middleware/storePost')

app.use('/posts/store', storePost)

cloudinary.config({
  api_key : '229448141623746',
  api_secret : '3LCiz6aKuo6ISxDqD4-HdTeE5Eg',
  cloud_name : 'dbahof66r' , 
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', homePageController)

app.get('/posts/new',auth,createPostController)

app.get('/auth/login',redirectIfAuthenticated,loginController)

app.get("/auth/logout",auth, logoutController);

app.post('/posts/store',auth,storePost,storePostController)

app.get('/auth/register',createUserController)

app.get('/post/:id',getPostController )

app.post('/users/login',redirectIfAuthenticated,loginUserController)

app.post('/users/register', redirectIfAuthenticated,storeUserController)

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.use((req,res)=> res.render('not-found'))

app.listen(4000, () => {
  console.log('App listening on port 4000')
})
