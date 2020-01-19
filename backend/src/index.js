const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

if(mongoose.connect('mongodb://localhost:27017/apimap',
{ useNewUrlParser: true , useUnifiedTopology: true, useCreateIndex: true,
})) {
  console.log('mongo conectado com sucesso')
}
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => console.log('Servidor foi iniciado'))