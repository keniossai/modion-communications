function postController(){
    
    return{
        post(req, res){
            console.log(req.body)
            res.redirect('/')
        }
    }
}


module.exports = postController