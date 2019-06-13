const express = require('express')
const app = express()
app.listen(3000,()=>{
    console.log("app listening on port 3000")
})
app.get('/',(request,response)=>{
    response.json({
        name : 'kati franz'
    })
})
app.get('/about',(request,response)=>{
    response.send({
        name : "Mahabubul Hasan"
    })
})