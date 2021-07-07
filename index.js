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






// Initial Routes

app.get('/', async (req, res) => {

    const posts = await Post.find({})
    res.render('home', {

        posts
    })
})


// About Routes
app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/create', (req, res) => {
    res.render('create')
})

// Post Route
app.post('/posts/store', (req, res) => {
    
    const { image } = req.files

    image.mv(path.resolve(__dirname, 'public/posts', image.name), (error) => {

        Post.create({...req.body, image: `/posts/${image.name}`}, (error, post) => {
    
            res.redirect('/')
        })
    })
})

// Resource Routes
app.get('/resource', (req, res) => {
    res.render('resource')
})


app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/blog', (req, res) => {
    res.render('blog')
})

app.get('/singlepost/:id', async (req, res) => {

    const post = await Post.findById(req.params.id)
    res.render('singlepost', {

        post
    })
})


app.get('/allguides', (req, res) => {
    res.render('allguides')
})

app.get('/offers', (req, res) => {
    res.render('offers')
})


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

