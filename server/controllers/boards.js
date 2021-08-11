const Board = require('../mongoModels/board')
const task = require('../mongoModels/task')

 module.exports.createBoard = async(projectId)=> {
   // try{
      const columns = [{
         title: 'to do',
         tasks: []
      },{
         title: 'in process',
         tasks: []
      },{
         title: 'done',
         tasks: []
      }]
      const newBoard = new Board({column:columns, projectId:projectId})
      await newBoard.save()
      
      // if(newBoard){
      //    res.status(200).json(newBoard)
      // }
      // else{
      //    res.status(400).json('invalid input')
      // }
   // }
   // catch(ex){
   //    console.log(ex)
   //    res.status(500).json({error:'Internal error server'})
   // }
   
   // }
}


module.exports.getBoard = async (req,res) => {
   try{
   const projectId = req.params.id
   const selectBoard = await Board.findOne({projectId: projectId})

   if(selectBoard){
         res.status(200).json(selectBoard)
      }
      else{
         res.status(400).json('invalid input')
      }
   }
   catch(ex){
      console.log(ex)
      res.status(500).json({error:'Internal error server'})
   }
}

module.exports.addTasks = async (req, res) => {
   try{

      const {tasks, id, boardId} = req.body
      // console.log(req.body)
      //  console.log(req.body)
  
      // if(req.body){
      //   const selectedBoard = await Board.findOne({projectId: boardId})
      //   console.log(selectBoard)
    
      //   const newTask = {...tasks, id: generateId.generateUniqueId()}
      //   const selectedColumn  = selectedBoard.columns.find((el)=> el.id === id);
      //   selectedColumn.tasks.push(newTask);
    
        
      //   return newTask
      // }


      // const task = req.body
      // let result = Columns.addTask(task)

      if(req.body){
         const selectedBoard = await Board.findOne({projectId: boardId})
         // console.log(selectedBoard)
         // console.log(id)
         const selectedColumn =  await selectedBoard.column.find(el=> toString(el._id) === toString(id));
         // console.log(selectedColumn)
         selectedColumn.tasks.push(tasks)
         // console.log(selectedColumn)
         await selectedColumn.save()
         console.log(selectedColumn)
         
      //   console.log(selectedBoard)
         res.status(200).json(tasks)
      }
      else{
         console.log(400)
         res.status(400).json('invalid input')
      }
   }
   catch(ex){
      console.log(500)
      res.status(500).json({error:'Internal error server'})
   }
}