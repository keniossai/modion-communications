const Post = require('./database/models/Post')

function postController(){
    
    return{
        posts(req, res){
            
            Post.create(req.body, (error, post) => {
                res.redirect('/')
            })
        }
    }
}


module.exports = postController