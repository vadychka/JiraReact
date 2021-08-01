let users = [{
   name: 'nnnnn',
   email: 'e',
   password: 'nnnnn'
}]

module.exports.getUser = (name, password) => {
   const selectUser = users.find(el => el.name === name);
   if(selectUser){
      if(selectUser.password === password){
         console.log(selectUser)
         return selectUser
      }else{
         return 'password'
      }
   }else{
      return 'login'
   }
}
module.exports.createUser = (user)  => {

   const checkUser = users.find(el => el.name === user.name)

   if(!checkUser){
      users.push(user)
      return user
   }else{
      return 111
   }
}