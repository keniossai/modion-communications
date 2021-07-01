const homeController = require('../app/http/controllers/homeController')
const aboutController = require('../app/http/controllers/aboutController')
const offersController = require('../app/http/controllers/offfersController')
const blogController = require('../app/http/controllers/blogController')

function initialRoutes(app){

    // Homapage
    app.get('/', homeController().home)
    
    // Aboutpage
    app.get('/about', aboutController().about)

    // OffersPage
    app.get('/offers', offersController().offers)

    // BlogPage
    app.get('/blog', blogController().blog)
}


module.exports = initialRoutes