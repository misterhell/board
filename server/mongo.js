import { Exception } from 'handlebars'
const MongoClient = require('mongodb').MongoClient


const MONGO_URL = 'mongodb://mongo:27017'

const CONNECTION_OPTIONS = {
    useUnifiedTopology: true,
    auth: {
        user: 'root',
        password: 'password'
    }
}

const DB_NAME = 'boars-db'

class Mongo {

    client = null

    db = null

    constructor() {
        MongoClient
            .connect(MONGO_URL, CONNECTION_OPTIONS)
            .then(client => {
                this.client = client
                this.setDb(DB_NAME)
            })
            .catch(err => { throw new Error(err) })
    }


    setDb(name) {
        this.db = this.client.db(name)
    }


    addBoard() {
        
    }


}



export default new Mongo()