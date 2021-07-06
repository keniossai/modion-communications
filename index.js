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

config({ cache: process.env.NODE_ENV === 'production' })
app.use(engine)


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.use(express.static('public'))
app.set('views', `${__dirname}/views`)


// const initialRoutes = require('./routes/web')(app)


// Initial Routes

app.get('/', (req, res) => {
    res.render('home')
})

// About Routes
app.get('/about', (req, res) => {
    res.render('about')
})


// Resource Routes
app.get('/resource', (req, res) => {
    res.render('resource')
})


app.get('/create', (req, res) => {
    res.render('create')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/blog', (req, res) => {
    res.render('blog')
})


app.get('/allguides', (req, res) => {
    res.render('allguides')
})
app.get('/offers', (req, res) => {
    res.render('offers')
})


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

