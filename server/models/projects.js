const generateId = require('./../helpers/idGenerator')
const Boards = require('./board')

const projects = [];

module.exports.getAllProjects = () => {
   return projects
}

module.exports.addProject = (project) => {
   if(project){
      const newProject = {
         ...project, ProjectId: generateId.generateUniqueId()
      }
      Boards.createBoard(newProject.ProjectId)

      projects.push(newProject)
      return newProject
   }

}