const mongoose = require('mongoose')



const MessageSchema = new mongoose.Schema({

    name: String,

    email: String,

    address: String,

    message: String,

)}



const Message = mongoose.model('Post', MessageSchema)


module.exports = Message
