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


const errFn = err => console.error(err)

class Mongo {

    client = null

    db = null

    constructor() {
        this.connectToDb()
    }


    setDb(name) {
        this.db = this.client.db(name)
    }


    createBoard(board) {
        return this.getDb()
                .then(db => db.collection('boards').insertOne(board))
                .catch(errFn)
    }

    /**
     * return <Promise>
     */
    fetchBoards() {
        return this.getDb()
            .then(
                db => db.collection('boards')
                    .find()
                    .toArray()
            )
            .catch(errFn)
    }

    getDb() {
        return new Promise((resolve, reject) => {
            if (this.db) resolve(this.db)

            this.connectToDb()
                .then(db => resolve(db))
                .catch(errFn)
        })
    }

    connectToDb() {
        return MongoClient
            .connect(MONGO_URL, CONNECTION_OPTIONS)
            .then(client => {
                this.client = client
                this.setDb(DB_NAME)
                return this.db
            })
            .catch(err => { throw new Error(err) })
    }


}



module.exports = new Mongo()