const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    recipeTitle: String,
    ingredientList: String,
    direction: String,
    photoUrl: String
})

module.exports = mongoose.model('Post', postSchema);