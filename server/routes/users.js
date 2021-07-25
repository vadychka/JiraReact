const {Router}=  require('express')
const router =Router()
const Users = require('./../models/users')


router.get('/', (req,res)=> {
   try{
      
      let result = Users.getUsers()
      if(result){
         res.status(200).json(result)
      }
      else{
         res.status(400).json('invalid input')
      }
   }
   catch(ex){
      res.status(500).json({error:'Internal error server'})
   }
})