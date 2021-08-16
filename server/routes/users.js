const {Router}=  require('express')
const router =Router()
const Users = require('./../models/users')
const User = require('../mongoModels/user')
const {getUser} = require('../controllers/users')



router.get('/:name/:password', getUser)

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