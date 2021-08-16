const {Schema, Types, model} = require ('mongoose')
const Task = require('./task')

const schema = new Schema({
   title: {
      type:String,  
      required:true
   },
   tasks:  {
      type:[Task.schema]
   }
})

module.exports = model('Column', schema)