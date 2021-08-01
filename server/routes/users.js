const {Router}=  require('express')
const router =Router()
const Users = require('./../models/users')
const User = require('../mongoModels/user')



router.get('/:name/:password', async(req,res)=> {
   try{
      const name = req.params.name
      const password = req.params.password
      // const newUser = new User({
      //    name: 'Vladd',
      //    email: 'dsijdsj',
      //    password: 'dsjis'
      // })
      // console.log(1);
      // await newUser.save(console.log(3))

      // console.log(2)

      // const candidate = await User.findOne({name:'Vlad'})
      // if (name === candidate){
      //    console.log(candidate)
      // }
      // console.log('not found')

      let result = Users.getUser(name, password)
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
      const newUser = req.body
      let result = Users.createUser(newUser)
      if(result){
         res.status(200).json(result)
      }else{
         res.status(400).json('Internal  server error')
      }
   }
   catch(ex){
      res.status(500).json({error: 'Server error on the user'})
   }
})

module.exports = router