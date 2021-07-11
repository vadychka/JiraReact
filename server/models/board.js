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


 module.exports.getTasks = () => {
    return columns
 }

 module.exports.addTasks = (task) => {
   
  if(task){
    console.log(task)
    
    let tmp = 0;
    columns.map((data)=>{
      data.tasks.map((el) => el.id > tmp ? tmp = el.tasks.id : ++tmp);
    });
    
    task.tasks.id = tmp;
    const findColumn = columns.find((el)=> el.id === task.id,
    );
    
    findColumn.tasks.push(task.tasks);
  }
 }

//  module.exports.dropTasks = ({data, elId}) => {
//   const findColumn = columns.find((el)=> el.id === elId,
//   );
//   findColumn.tasks= data
   
//  }