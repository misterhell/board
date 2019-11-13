const mongoose = require('mongoose')

const { MONGO_URL, MONGO_CONNECTION_OPTIONS, DB_NAME } = require('./params')

class Mongo {

    constructor() {
        mongoose.connect(MONGO_URL, MONGO_CONNECTION_OPTIONS);
        this.db = mongoose.connection.useDb(DB_NAME)
        this.db
            .on('error', console.error.bind(console, 'connection error:'))
    }

}



module.exports = new Mongo()