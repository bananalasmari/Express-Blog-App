const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title: String,
    content: String,
    isPublished: Boolean,
    totalWords: Number,
    author: String,
},
{
    timestamps: true // means createdAt and updatedAt
});



const Article = mongoose.model("Article", articleSchema);

module.exports = Article;