function createPostController(){
    
    return{
        create(req, res){
            res.render('create')
        }
    }
}


module.exports = createPostController