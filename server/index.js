const port = require('./params').PORT
const express = require('express')
const app = express()


const DB = require('./mongo')

app.use(express.urlencoded())


const testFn = () => {

  DB.fetchBoards().then(resp => {
    console.log('resp :', resp)
  })
}

app.get('/', (req, res) => {



  return res.send('Hello World!!!!')
})


app.post('/api/boards/create', (req, res) => {
  console.log('hi :', req.body);
})

app.get('/api/boards', (req, res) => {
  DB.fetchBoards()
    .then(boards => res.json(boards))
})

app.listen(port, () => console.log(`EXPRESS APP LISTEN ${port}!`))



// testFn()
