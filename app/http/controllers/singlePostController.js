function singlePostController(){
    
    return{
        singlepost(req, res){
            res.render('singlepost')
        }
    }
}


module.exports = singlePostController