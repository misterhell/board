const mongoose = require('mongoose')
const Schema = mongoose.Schema


const { CARD, COLUMN } = require('./model-names')

const CardSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    name: String,
    column: {
        type: Schema.Types.ObjectId, ref: COLUMN
    }
});



module.exports = mongoose.model(CARD, CardSchema);