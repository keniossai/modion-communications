// PATH MODULE
const path = require('path')

// DOTENV
const dotenv = require('dotenv')

// EXPRESS
const express = require('express')

// EXPRESS EDGE
const { config, engine } = require('express-edge')

// BODY PARSER
const bodyParser = require('body-parser')

// MONGOOSE
const mongoose = require('mongoose')

// Post Model
const Post = require('./database/models/Post')

// EXPRES FILEUPLOAD
const fileUpload = require('express-fileupload')


// EXPRESS SERVER
const app = express()


mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', true)
mongoose.connect('mongodb://localhost/modion-coms')


const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database Connected....')
}).catch(error => {
    console.log('Connection failed...')
})



dotenv.config({path: './config/config.env'})


app.use(fileUpload())
app.use(express.static('public'))
app.set('views', `${__dirname}/views`)


config({ cache: process.env.NODE_ENV === 'production' })
app.use(engine)


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())




const storePost = require('./app/http/middlewares/storePost')
const messageStore = require('./app/http/middlewares/messageStore')



app.use('/posts/store', storePost)

app.use('/message/us', messageStore)


// INITIAL ROUTES
const initialRoutes = require('./routes/web')(app)



const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

