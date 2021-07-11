const express = require("express");
const  app = express()
const cors = require('cors')

const PORT = 5000;

app.use(cors())
app.use(express.json())

app.use('/projects', require('./routes/projects'));

app.use('/board', require('./routes/board'));


app.listen(PORT, ()=> console.log(`server is starter in ....${PORT}`))

