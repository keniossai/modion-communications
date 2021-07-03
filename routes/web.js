const homeController = require('../app/http/controllers/homeController')
const aboutController = require('../app/http/controllers/aboutController')
const offersController = require('../app/http/controllers/offfersController')
const blogController = require('../app/http/controllers/blogController')
const singlePostController = require('../app/http/controllers/singlePostController')
const contactController = require('../app/http/controllers/contactController')
const allguidesController = require('../app/http/controllers/allguidesController')
const createPostController = require('../app/http/controllers/createPostController')
const postController = require('../app/http/controllers/postController')

function initialRoutes(app){

    // Homapage
    app.get('/', homeController().home)
    
    // Aboutpage
    app.get('/about', aboutController().about)

    // OffersPage
    app.get('/offers', offersController().offers)

    // BlogPage
    app.get('/blog', blogController().blog)

    // Single post
    app.get('/singlepost', singlePostController().singlepost)

    // Contact
    app.get('/contact', contactController().contact)

    // Mision Vision
    app.get('/allguides', allguidesController().allguides)

    // Create Post
    app.get('/create', createPostController().create)

    // Post Route
    app.post('/posts/store', postController().post)
}


module.exports = initialRoutes