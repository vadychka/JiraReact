let boards = []

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
module.exports.createBoard = (ProjectId) => {
  const newBoard = {
    columns, ProjectId
  }
  boards.push(newBoard)
}

 module.exports.getTasks = (ProjectId) => {
   const selectBoard = boards.find((el)=> el.ProjectId === ProjectId)
   return selectBoard.columns
 }

 module.exports.addTask = (data) => {
   console.log(data)
   const {tasks, id} = data

  if(data){
    
    let tmp = 0;
    columns.map((data)=>{
     
      data.tasks.map((el) => {
        el.id > tmp ? tmp = el.id : ++tmp
      });
    });
  
    const newTask = {...tasks, id: tmp}
    const selectedColumn  = columns.find((el)=> el.id === id,
    );
    selectedColumn.tasks.push(newTask);
    return newTask
  }
 }

 module.exports.changePositionTask = (data) => {
  
   let source = data.source
   let destination = data.destination
  const selectedColumn = columns.find((el)=> el.id === destination,
  );
  selectedColumn.tasks = source
   return source
 }