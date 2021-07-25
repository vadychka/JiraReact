const express = require("express");
const  app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const PORT = 5000;

const mongoUrl = 'mongodb+srv://vadychka:Gy3uq7JGXw5QKkf@cluster0.yfn5w.mongodb.net/Cluster0?retryWrites=true&w=majority'

 app.use(cors())
app.use(express.json())

app.use('/projects', require('./routes/projects'));

app.use('/board', require('./routes/board'));


async function start () {
   try{
      await mongoose.connect(mongoUrl, {useNewUrlParser:true, useUnifiedTopology: true})   
      app.listen(PORT, ()=> console.log(`server is starter in ....${PORT}`))
      
   }
   catch(e){
      console.log('server has error', e)
   }
}

start()


