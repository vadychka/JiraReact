const Column = require('../mongoModels/column')

module.exports.getColumns = async () => {
   const column = new Column({title:'to do'})

   
   
   // const newColumn = new column({title: 'to do'})
   // columns.push(new column({title: 'to do'}))
   // await columns.save()
   console.log(column)
   return column
}