const {Router}=  require('express')
const { createBoard, getBoard, addTasks, dragTask } = require('../controllers/boards')
const router =Router()
const Columns = require('../models/board')


router.get('/:id', getBoard)

router.post('/', addTasks)


router.patch('/drag', dragTask)
// (req, res) => {
//    try{
//       const task = req.body
//       let result = Columns.changePositionTask(task)
      
//       if(result){
//          res.status(200).json(result)
//       }
//       else{
//          res.status(400).json('invalid input')
//       }
//    }
//    catch(ex){
//       res.status(500).json({error:'Internal error server'})
//    }
// }



module.exports = router