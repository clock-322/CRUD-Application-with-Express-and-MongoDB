const express=require('express')
const router=express.Router()

router.delete('/api/delete/mongo/data/:id',(req,res)=>{
    console.log(req.params.id+'.......///')
    if(req.params.id){
        let mongo=require('mongodb').MongoClient
        mongo.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(error,data){
            let db=data.db('testDb')
                    db.collection('testCollection').deleteOne({
                            'ID':req.params.id
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