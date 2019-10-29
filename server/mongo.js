const MongoClient = require('mongodb').MongoClient

const params = require('./params')




const errFn = err => console.error(err)

class Mongo {

    client = null

    constructor() {
        this.connectToDb()
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
        return this.connectToDb()
            .then(
                db => db.collection('boards')
                    .find()
                    .toArray()
            )
            .catch(errFn)
    }

    connectToDb() {
        return MongoClient
            .connect(params.MONGO_URL, params.MONGO_CONNECTION_OPTIONS)
            .then(client => {
                this.client = client
                return this.client.db(params.DB_NAME)
            })
            .catch(err => { throw new Error(err) })
    }


}



module.exports = new Mongo()