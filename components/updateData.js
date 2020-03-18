const express=require('express')
const router=express.Router()
const bodyParser=require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.put('/api/update/mongo/data/:id',(req,res)=>{
    if(req.params.id){
        let mongo=require('mongodb').MongoClient
        mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
            let db=data.db('testDb')
                    db.collection('testCollection').updateOne(
                        {
                            'ID':req.params.id 
                        },{$set: 
                            {
                                'name':req.body.name
                            }
                        },(err,rslt)=>{
                            if(rslt){
                                res.send(rslt)
                            }else{
                                res.send(err)
                            }

                        })
                })
            }else{
                res.status(404).send('the data with the given ID was not found')
            }
})

module.exports=router