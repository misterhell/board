const { MONGO_URL, MONGO_CONNECTION_OPTIONS, DB_NAME } = require('./params')


const mongoose = require('mongoose');

const Board = require('./models/board')


class Mongo {

    constructor() {
        mongoose.connect(MONGO_URL, MONGO_CONNECTION_OPTIONS);
        this.db = mongoose.connection.useDb(DB_NAME)
        this.db
            .on('error', console.error.bind(console, 'connection error:'));
    }


    createBoard(board) {
        return Board.create(board)
    }


    fetchBoards() {
        // return this.connectToDb()
        //     .then(
        //         db => db.collection('boards')
        //             .find()
        //             .toArray()
        //     )
        //     .catch(errFn)
    }




}



module.exports = new Mongo()