const { isValidObjectId } = require('mongoose')
const Board = require('../mongoModels/board')
const ObjectId = require('mongodb').ObjectId;

 module.exports.createBoard = async(projectId)=> {
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
      res.status(500).json({error:'Internal error server'})
   }
}

module.exports.addTasks = async (req, res) => {
   try{
      
      const {tasks, id, boardId} = req.body

      if(req.body){
         const selectedBoard = await Board.findOne({"projectId":boardId}) 
         const selectedColumn = selectedBoard.column.find(el => String(el._id) === id)
         selectedColumn.tasks.push(tasks)
         await selectedBoard.save()
         const taskFromBack = selectedColumn.tasks[selectedColumn.tasks.length - 1]
         res.status(200).json(taskFromBack)
      }
      else{
         res.status(400).json('invalid input')
      }
   }
   catch(ex){
      res.status(500).json({error:'Internal error server'})
   }
}

module.exports.dragTask = async (req, res) => {
   try{
      const {source, destination, columnId} = req.body
      if(req.body){
         
         const selectedBoard = await Board.findOne({'projectId':columnId})
         const selectedColumn = selectedBoard.column.find(el => String(el._id) === destination);
         selectedColumn.tasks = source
         await selectedBoard.save()
         
         res.status(200).json(source)
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

module.exports.dragToColumn = async (req, res) => {
   try{
      const {sourceItems, sourceDrId,
         destItems, destinationDrId, columnId} = req.body
      if(req.body){
         
         const selectedBoard = await Board.findOne({'projectId':columnId})
         const selectedColumnDes = selectedBoard.column.find(el => String(el._id) === destinationDrId);
         const selectedColumnSou = selectedBoard.column.find(el => String(el._id) === sourceDrId);
         selectedColumnDes.tasks = destItems
         selectedColumnSou.tasks = sourceItems
         await selectedBoard.save()
         
         res.status(200).json('valid input')
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
