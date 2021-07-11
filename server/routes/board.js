const {Router}=  require('express')
const router =Router()
const Columns = require('../models/board')

router.get('/', (req,res)=> {
   try{
      
      let result = Columns.getTasks()
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

router.post('/', (req, res) => {
   try{
      const task = req.body
      let result = Columns.addTasks(task)
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

// router.post('/', (req, res) => {
//    try{
      
//       const task = req.body
//       let result = Columns.dropTasks(task)
//       if(result){
//          res.status(200).json(result)
//       }
//       else{
//          res.status(400).json('invalid input')
//       }
//    }
//    catch(ex){
//       res.status(500).json({error:'Internal error server'})
//    }
// })


module.exports = router