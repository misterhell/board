const express = require('express')
const app = express()
const port = 3300

const MongoClient = require('mongodb').MongoClient

const mongoUrl = 'mongodb://mongo:27017'

app.get('/', (req, res) => {


    MongoClient.connect(mongoUrl, (err, client) => {
        console.log("Connected successfully to mongo server");
        
        const db = client.db('test');
       


        client.close();
      });



    return res.send('Hello World!!!!')
})



app.listen(port, () => console.log(`EXPRESS APP LISTEN ${port}!`))