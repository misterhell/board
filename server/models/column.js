const mongoose = require('mongoose')
const Schema = mongoose.Schema


const { COLUMN, BOARD, CARD } = require('./model-names')

const ColumnSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    name: String,
    title: String,
    cards: [{
        type: Schema.Types.ObjectId, ref: CARD
    }],
    board: {
        type: Schema.Types.ObjectId, ref: BOARD
    }
});



module.exports = mongoose.model(COLUMN, ColumnSchema);