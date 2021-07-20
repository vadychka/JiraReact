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

 module.exports.addTask = (data) => {
   
  if(data){
    
    let tmp = 0;
    columns.map((data)=>{
     
      data.tasks.map((el) => {
        el.id > tmp ? tmp = el.id : ++tmp
      });
    });
  
    const newTask = {...data.tasks, id: tmp}
    const eventColumn = columns.find((el)=> el.id === data.id,
    );
    eventColumn.tasks.push(newTask);
    return newTask
  }
 }

 module.exports.changePositionTask = (data) => {
  
   let source = data.source
   let destination = data.destination
  const findColumn = columns.find((el)=> el.id === destination,
  );
  findColumn.tasks = source
   return source
 }