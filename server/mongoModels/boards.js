const {Schema, Types, model} = require ('mongoose')

const schema = new Schema({
   title: {
      type:String,  
      required:true
   },
   details:  {
      type:String, 
      default: ''
   },
   priority: {
      type:String
   }
})

module.exports = model('Bard', schema)