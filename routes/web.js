const homeController = require('../app/http/controllers/homeController')
const aboutController = require('../app/http/controllers/aboutController')
const offersController = require('../app/http/controllers/offfersController')
const blogController = require('../app/http/controllers/blogController')
const singlePostController = require('../app/http/controllers/singlePostController')
const contactController = require('../app/http/controllers/contactController')
const allguidesController = require('../app/http/controllers/allguidesController')

function initialRoutes(app){

    // Homapage
    app.get('/', homeController().home)
    
    // Aboutpage
    app.get('/about', aboutController().about)

    // OffersPage
    app.get('/offers', offersController().offers)

    // BlogPage
    app.get('/blog', blogController().blog)

    app.get('/singlepost', singlePostController().singlepost)

    app.get('/contact', contactController().contact)

    app.get('/allguides', allguidesController().allguides)
}


module.exports = initialRoutes