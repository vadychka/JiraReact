const { generateUniqueId } = require("../helpers/idGenerator")
const Project = require('../mongoModels/project');
const { createBoard } = require("./boards");

module.exports.getProjects = async (req,res)=>{
   try{
      Project.find({}, function(err, result) {
         if (result) {
            res.status(200).json(result)
         } else {
            res.status(400).json('invalid input')
         }
       });
   }
   catch(ex){
       res.status(500).json({error:'Internal get server error'})
   }
}

module.exports.postProject = async (req,res)=>{
   try{
      const project = req.body

      if (project){
         
         
         const createProject = {
         ...project,
         // users,
      }
      const newProject = new Project(createProject)
      await newProject.save()
      createBoard(newProject._id)
      const projectId = newProject._id

      res.status(200).json(project)
      }
      else{
         res.status(400).json('invalid input')
      }
   }
   catch(ex){
       res.status(500).json({error:'Internal server error'})
   }
}