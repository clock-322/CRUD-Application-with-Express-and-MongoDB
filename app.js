const express=require('express')
const app=express()
const port=process.env.PORT||3000

app.use(require(__dirname+'/components/getData'))
app.use(require(__dirname+'/components/addData'))
app.use(require(__dirname+'/components/updateData'))
app.use(require(__dirname+'/components/deleteData'))

app.listen(port,()=>{
    console.log('current port number is:- '+port)
})