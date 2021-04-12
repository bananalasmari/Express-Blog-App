// All my authentication routes will go here

const router = require("express").Router();
const bcrypt = require("bcrypt");
const salt = 10;

// Import passport configurations
let passport = require("../helper/ppConfig");

// Import User Model
const User = require("../models/User");

// HTTP GET - Signup Route - To load the signup form
router.get("/auth/signup", (req, res) => {
  res.render("auth/signup");
});

// HTTP POST - Signup Route - To save the data
router.post("/auth/signup", (req, res) => {
  // console.log(req.body);
  let user = new User(req.body);
  let hash = bcrypt.hashSync(req.body.password, salt);
  // console.log(hash);

  user.password = hash;
  user
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.send("ERRROR!!!");
    });
});

// HTTP GET - Signin Route - To load the signin form
router.get("/auth/signin", (req, res) => {
  res.render("auth/signin");
});

// HTTP POST - Signin Route - To login the user
router.post(
  "/auth/signin",
  passport.authenticate("local", { 
    successRedirect: "/",  
    failureRedirect: "/auth/signin" })
);

// HTTP GET - Logout Route

// HTTP GET - Load Profile

// HTTP GET - Change Password

// HTTP POST - Change Password

module.exports = router;
