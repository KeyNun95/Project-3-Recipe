const mongoose = require('mongoose');

// const commentSchema = new Schema({
//     content: {type: String},
//     userId: {type: mongoose.Schema.Types.ObjectId},
//     username: String
// },{
//     timestamps: true
// });

const likesSchema = mongoose.Schema({
    username: String,
    userId: { type: mongoose.Schema.Types.ObjectId }
})

const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    recipeTitle: String,
    ingredientList: String,
    direction: String,
    photoUrl: String,
    likes: [likesSchema],
    // comments: [commentSchema]
})

module.exports = mongoose.model('Post', postSchema);