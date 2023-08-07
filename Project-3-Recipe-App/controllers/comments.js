// const Comment = require('../models/post');

// module.exports = {
//     create
// }

// async function create(req, res){
//     try{
//         const comment = await Comment.findById(req.params.id);
//         comment.comments.push({username: req.user.username, userId: req.user._id});
//         await comment.save()
//         res.status(203).json({data: 'comment added'})
//     }catch(err){
//         res.status(400).json({err})
//     }
// }