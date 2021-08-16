const {Schema, Types, model} = require ('mongoose')
const Column = require('./column')

const schema = new Schema({
   column: {
      type:[Column.schema]
   },
   projectId:{
      type:Types.ObjectId,
      ref:'Project'
   }
   
})

module.exports = model('Board', schema)