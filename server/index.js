const express = require('express')
const app = express()
const port = 3300


const DB = require('./mongo')



const testFn = () => {

  DB.fetchBoards().then(resp => {
    console.log('resp :', resp)
  })
    // .then(r => console.log('r :', r))
    // .catch(e => console.log('e :', e))

  // MongoClient.connect(
  //   mongoUrl,
  //   connectionOptions,
  //   (err, client) => {
  //     if (err) {
  //       console.log(err);
  //       process.exit(0);
  //     }

  //     const db = client.db('test')

  //     db.createCollection('test-collection')
  //       .then(collection => {
  //         collection.insertOne({
  //           id: 1,
  //           lang: 'en'
  //         })
  //         .then(added => {
  //           console.log(added.insertedCount)
  //         })
  //         .catch()

  //         client.close()
  //       }) 
  //       .catch(err => {
  //         console.error(err)
  //       })

  //   });
}

app.get('/', (req, res) => {



  return res.send('Hello World!!!!')
})



app.listen(port, () => console.log(`EXPRESS APP LISTEN ${port}!`))



testFn()
