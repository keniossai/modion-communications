const homeController = require('../app/http/controllers/homeController')
const aboutController = require('../app/http/controllers/aboutController')
const offersController = require('../app/http/controllers/offersController')
const blogController = require('../app/http/controllers/blogController')
const singlePostController = require('../app/http/controllers/singlePostController')
const contactController = require('../app/http/controllers/contactController')
const allguidesController = require('../app/http/controllers/allguidesController')
const createPostController = require('../app/http/controllers/createPostController')
const resourceController = require('../app/http/controllers/resourceController')
const storePostController = require('../app/http/controllers/storePostController')



function initialRoutes(app){

    // Homapage
    app.get('/', homeController)
    
    // Aboutpage
    app.get('/about', aboutController)

    // OffersPage
    app.get('/offers', offersController)

    // BlogPage
    app.get('/blog', blogController)

    // Single post
    app.get('/singlepost/:id', singlePostController)

    // Contact
    app.get('/contact', contactController)

    // Mision Vision
    app.get('/allguides', allguidesController)

    // Create Post
    app.get('/create', createPostController)

    // Resource Route
    app.get('/resource', resourceController)

    // Post Route
    app.post('/posts/store', storePostController)
}


module.exports = initialRoutes