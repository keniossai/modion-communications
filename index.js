const path = require('path')
const dotenv = require('dotenv')
const express = require('express')
const { config, engine } = require('express-edge')
const bodyparser = require('body-parser')

const mongoose = require('mongoose')


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

config({ cache: process.env.NODE_ENV === 'production' })
app.use(engine)


app.use(express.urlencoded({extended: true}))
app.use(bodyparser.json())


app.use(express.static('public'))
app.set('views', `${__dirname}/views`)


const initialRoutes = require('./routes/web')(app)

app.post('/posts/store', (req, res) => {
    res.redirect('/')
})


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

