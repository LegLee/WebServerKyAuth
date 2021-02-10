const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tokenSchema = new Schema({
    tokenVK: {
        type: String,
        required: true;
    },
    tokenTG: {
        type: String,
        required: true;
    },
    chatIdTG:{
        type: String,
        required: true;
    },
    user:{
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('tokens', tokenSchema)