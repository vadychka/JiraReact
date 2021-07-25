const {Schema, Types, model} = require ('mongoose')

const schema =new Schema({
   title: {type: String}
   // usersId : [{
   //    id: {type: Types.ObjectId, ref: 'User'}
   // }]

})

module.exports = model('Project', schema)
