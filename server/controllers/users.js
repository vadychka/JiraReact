module.exports.getUser = async(req,res)=> {
   try{
      const {name, password} = req.params
      
      const newUser = new User({
         name: 'Vladd',
         email: 'dsijdsjaaaa',
         password: 'dsjissss'
      })
      console.log(1);
      await newUser.save()

      console.log(2)

      const candidate = await User.findOne({name:'Vlad'})
      if (name === candidate){
         console.log(candidate)
      }
      console.log('not found')

      // let result = Users.getUser(name, password)
      if(result){
         res.status(200).json(result)
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