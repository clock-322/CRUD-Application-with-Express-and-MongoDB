const express=require('express')
const router=express.Router()
const bodyParser=require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post('/api/add/mongo/data',(req,res)=>{
        let prmis=new Promise((resolve,reject)=>{
        let mongo=require('mongodb').MongoClient
            mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
                let db=data.db('testDb')
                    db.collection('testCollection').insertOne(
                        {
                            ID:req.body.id,
                            name:req.body.name,
                            course:req.body.course
                        },function(error,rslt){
                            if(error){
                                res.send(error)
                            }else{
                                res.send(rslt)
                            }
                        })
                })
        })
    return prmis
})

module.exports=router