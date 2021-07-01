function blogController(){
    
    return{
        blog(req, res){
            res.render('blog')
        }
    }
}


module.exports = blogController