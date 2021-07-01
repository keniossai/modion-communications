function aboutController (){

    return{
        about(req, res){
            res.render('about')
        }
    }
}


module.exports = aboutController