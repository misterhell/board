const port = require('./params').PORT
const express = require('express')
const app = express()




const { apiRoutes } = require('./routes')





app.use(express.urlencoded(), express.json())



for (let route in apiRoutes) {
  app.use(`/api/${route}`, apiRoutes[route])
}


app.get('/', (req, res) => {
  return res.send('Hello World!!!!')
})



app.listen(port, () => console.log(`EXPRESS APP LISTEN ${port}!`))
