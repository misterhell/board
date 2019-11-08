const port = require('./params').PORT
const express = require('express')
const app = express()



const BoardsRoutes = require('./routes/boards')


const DB = require('./mongo')


app.use(express.urlencoded(), express.json())


app.use('/api/boards', BoardsRoutes)

app.get('/', (req, res) => {
  return res.send('Hello World!!!!') 
})

app.get('/', (req, res) => {
  return res.send('Hello World!!!!') 
})


app.listen(port, () => console.log(`EXPRESS APP LISTEN ${port}!`))
