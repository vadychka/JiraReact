const {Schema, Types, model} = require ('mongoose')

const schema =new Schema({
   title: {
      type: String,  
      required:true
   },
   details: {
      type: String, 
      default: ''
   }
  

})

module.exports = model('Project', schema)
