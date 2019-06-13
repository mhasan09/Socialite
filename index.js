const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('public'))
app.listen(3000,()=>{
    console.log("app listening on port 3000")
})
app.get('/',(request,response)=>{
    response.sendFile(path.resolve(__dirname,'pages/index.html'))
})
app.get('/about',(request,response)=>{
    response.sendFile(path.resolve(__dirname,'pages/about.html'))
})
app.get('/contact',(request,response)=>{
    response.sendFile(path.resolve(__dirname,'pages/contact.html'))
})
