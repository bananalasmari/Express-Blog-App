// All our Article related routes will go here in this file

const express = require('express');

const router = express.Router();

// Import Model
const Article = require("../models/Article");

// Grab the form data
router.use(express.urlencoded({extended: true}));

// HTTP GET - Retrive data from the database - R 
// HTTP POST - To send the data into the database - C - Done
// HTTP PUT - TO update the data into the database - U
// HTTP DELETE - To delete the data from the database - D


// HTTP GET - Load an Article Form
router.get("/article/add", (req, res) => {
    res.render("article/add");
})

// HTTP POST - To post the Article
router.post("/article/add", (req, res) => {

    let article = new Article(req.body);

    // Save the data to the database
    article.save()
    .then(() => {
        res.redirect("/article/index");
    })
    .catch((err) => {
        console.log(err);
        res.send("ERROR!!!");
    })
})

// HTTP GET - Article Index
router.get("/article/index", (req, res) => {
    // Find all Articles
    Article.find()
    .then(articles => {
        res.render("article/index", {articles});
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = router;