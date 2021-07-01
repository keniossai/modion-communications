const path = require('path')
const dotenv = require('dotenv')
const express = require('express')
const { config, engine } = require('express-edge')

dotenv.config({path: './config/config.env'})

const app = express()

config({ cache: process.env.NODE_ENV === 'production' })
app.use(engine)

app.use(express.static('public'))
app.set('views', `${__dirname}/views`)


const initialRoutes = require('./routes/web')(app)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

