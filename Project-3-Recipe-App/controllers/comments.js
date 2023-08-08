const Post = require('../models/post');

module.exports = {
    create
}

async function create(req, res){
    console.log(req.body);
    try{
        const post = await Post.findById(req.params.id);
        post.comments.push({username: req.user.username, userId: req.user._id, content: req.body.review.content});
        await post.save()
        console.log(post)
        res.status(200).json({post})
    }catch(err){
        res.status(400).json({err})
    }
}