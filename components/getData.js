const express=require('express')
const router=express.Router()

//const mongo_port=process.env.MONGO_PORT
//const mongo_db=process.env.MONGO_DB        //Static Data like Mongo-url, mongo-database-name can be defined in .env file

router.get('/api/get/mongo/data',(req,res)=>{
    const mongo=require('mongodb').MongoClient
    mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
       let db=data.db('testDb')
       db.collection('testCollection').find({},function(error,result){
           let element_data=[]
         result.forEach(element => {
            element_data.push(element)
           },function(){
               res.send(element_data)
           }) 
       })
   })
})

module.exports=router