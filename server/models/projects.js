const projects = [];
const id = 0

module.exports.getAllProjects = () => {
   return projects
}

module.exports.addProject = (project) => {
   if(project){
      const newProject = {
         ...project, id: id
      
      }
      {console.log(id)}
      projects.push(newProject)
      return newProject
   }

}