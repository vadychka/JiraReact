const {Router}=  require('express')
const { createBoard, getBoard, addTasks, dragTask, dragToColumn } = require('../controllers/boards')
const router =Router()


router.get('/:id', getBoard)

router.post('/', addTasks)

router.patch('/drag', dragTask)

router.patch('/dragC', dragToColumn)



module.exports = router
