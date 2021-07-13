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

 module.exports.addTasks = (data) => {
   
  if(data){
    
    let tmp = 0;
    columns.map((data)=>{
      data.tasks.map((el) => {
        if(el.id > tmp){
          console.log(el.id)
          tmp = el.id
        }
         else{
           ++tmp
         }
      });
    });
  
     const newTask = {...data.tasks, id: tmp}
   
    const findColumn = columns.find((el)=> el.id === data.id,
    );
  
  
    findColumn.tasks.push(newTask);
    return newTask
  }
 }

 module.exports.dropTasks = (data) => {
  
   let source = data.source
   let destination = data.destination
  const findColumn = columns.find((el)=> el.id === destination,
  );
  findColumn.tasks = source
   return source
 }