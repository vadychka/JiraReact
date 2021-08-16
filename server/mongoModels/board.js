const {Schema, Types, model} = require ('mongoose')
const Column = require('./column')

const schema = new Schema({
   columns: {
      type:[Column.schema],
      default: []
   },
   projectId:{
      type:Types.ObjectId,
      ref:'Project'
   }
   
})

module.exports = model('Board', schema)