const mongoose = require('mongoose')


const PostSchema = new mongoose.Schema({

    title: String,

    description: String,

    conten: String
})

const Post = mongoose.model(Post, PostSchema)



module.exports = Post


// mongodb+srv://keniossai:<password>@kencluster.mpx9j.mongodb.net/test