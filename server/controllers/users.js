
const User = require('../mongoModels/user')

module.exports.getUser = async(req,res)=> {
   try{
      const {name, password} = req.params
    
      const candidateName = await User.findOne({name:name})
      const candidatePassword = await User.findOne({password: password})
      if(candidateName && candidatePassword){
         res.status(200).json(candidateName)
      }
      else{
         res.status(400).json('invalid input')
      }
   }
   catch(ex){
      res.status(500).json({error:'Internal error server'})
   }
}
module.exports.postUser = async(req, res) => {
   try{
      const {name, email, password} = req.body
      const candidate = await User.findOne({name:name})

      if(!candidate){
         const newUser = new User(req.body)
         await newUser.save()
         res.status(200).json(newUser)
      }else{
         res.status(400).json('invalid input')
      }

   }
   catch(ex){
      res.status(500).json({error: 'Server error on the user'})
   }
}