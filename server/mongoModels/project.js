const {Schema, Types, model} = require ('mongoose')

const schema =new Schema({
   title: {
      type: String,  
      required:true
   },
   details: {
      type: String, 
      default: ''
   },
   ProjectId: {
      type: Types.ObjectId
   },

})

module.exports = model('Project', schema)
