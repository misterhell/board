const mongoose = require('mongoose')
const Schema = mongoose.Schema


const { BOARD, COLUMN } = require('./model-names')

const BoardSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    name: String,
    columns: [{
        type: Schema.Types.ObjectId, ref: COLUMN
    }]
});



module.exports = mongoose.model(BOARD, BoardSchema);