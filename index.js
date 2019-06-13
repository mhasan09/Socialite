const express = require('express')
const path = require('path')
const app = express()
app.listen(3000,()=>{
    console.log("app listening on port 3000")
})
app.get('/',(request,response)=>{
    response.sendFile(path.resolve(__dirname,'index.html'))
})
app.get('/about',(request,response)=>{
    response.sendFile(path.resolve(__dirname,'about.html'))
})
app.get('/contact',(request,response)=>{
    response.sendFile(path.resolve(__dirname,'contact.html'))
})