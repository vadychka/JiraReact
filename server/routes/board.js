const {Router}=  require('express')
const router =Router()
const Columns = require('../models/board')


router.get('/:id', async(req,res)=> {
   try{
      const id = req.params.id
      // const newUser = new User({
      //    name: 'Vlad',
      //    email: 'dsijdsj',
      //    password: 'dsjis'
      // })
      // await newUser.save()
      // console.log(newUser)
      // const candidate = await User.findOne({name:'Vlad'})
      // console.log(candidate)
      let result = Columns.getTasks(id)
      if(result){
         res.status(200).json(result)
      }
      else{
         res.status(400).json('invalid input')
      }
   }
   catch(ex){
      res.status(500).json({error:'Internal error server'})
   }
})

router.post('/', (req, res) => {
   try{
      const task = req.body
      let result = Columns.addTask(task)

      if(result){
         res.status(200).json(result)
      }
      else{
         res.status(400).json('invalid input')
      }
   }
   catch(ex){
      res.status(500).json({error:'Internal error server'})
   }
})

router.patch('/drag', (req, res) => {
   try{
      const task = req.body
      let result = Columns.changePositionTask(task)
      
      if(result){
         res.status(200).json(result)
      }
      else{
         res.status(400).json('invalid input')
      }
   }
   catch(ex){
      res.status(500).json({error:'Internal error server'})
   }
})


module.exports = router