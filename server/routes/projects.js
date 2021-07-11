const {Router}=  require('express')
const router =Router()
const Projects = require('../models/projects')

router.get('/', (req,res)=>{
   try{
      let result =  Projects.getAllProjects()
      if (result){
         res.status(200).json(result)
      }
      else{
         res.status(400).json('invalid input')
      }
   }
   catch(ex){
       res.status(500).json({error:'Internal server error'})
   }
})


router.post('/', (req,res)=>{
   try{
      const project = req.body
      let result =  Projects.addProject(project)
      
      if (result){
         res.status(200).json(result)
      }
      else{
         res.status(400).json('invalid input')
      }
   }
   catch(ex){
       res.status(500).json({error:'Internal server error'})
   }
})


module.exports = router