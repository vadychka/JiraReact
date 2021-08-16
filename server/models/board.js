const generateId = require('./../helpers/idGenerator')

let boards = []

module.exports.createBoard = (ProjectId) => {
  let columns = [
    {id: 'id111',
      name: 'To do',
      tasks: []},
    {id: 'id222',
      name: 'Review',
      tasks: []},
    {id: 'id333',
      name: 'Done',
      tasks: []},
  ]
  const newBoard = {
    columns, ProjectId
  }
  boards.push(newBoard)
}

 module.exports.getTasks = (projectId) => {
  const selectBoard  = boards.find((el)=> el.ProjectId === +projectId,
    );
   return selectBoard.columns
 }

 module.exports.addTask = (data) => {
  
   const {tasks, id, boardId} = data
  
  if(data){
    const selectedBoard = boards.find((el) => el.ProjectId === boardId)

    const newTask = {...tasks, id: generateId.generateUniqueId()}
    const selectedColumn  = selectedBoard.columns.find((el)=> el.id === id);
    selectedColumn.tasks.push(newTask);

    
    return newTask
  }
 }

 module.exports.changePositionTask = (data) => {
  const selectedBoard = boards.find(el => el.ProjectId === data.columnId)
   let source = data.source
   let destination = data.destination
  const selectedColumn = selectedBoard.columns.find((el)=> el.id === destination);
  selectedColumn.tasks = source
   return source
 }