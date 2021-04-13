// All my authentication routes will go here

const router = require("express").Router();
const bcrypt = require("bcrypt");
const salt = 10;
const { body, validationResult } = require("express-validator");

// Import passport configurations
let passport = require("../helper/ppConfig");

// Import User Model
const User = require("../models/User");

// HTTP GET - Signup Route - To load the signup form
router.get("/auth/signup", (req, res) => {
  res.render("auth/signup");
});

// HTTP POST - Signup Route - To save the data
router.post(
  "/auth/signup",
  [
    // Checks for the firstName
    body("firstName").isLength({ min: 5 }),

    // Checks for the LastName
    body("lastName").isLength({ min: 5 }),

    // Checks for the emailAddress
    body("emailAddress").isEmail(),

    // Checks for the password
    body("password").isLength({ min: 5 })
  ],
  (req, res) => {
    // console.log(req.body);
    let user = new User(req.body);
    let hash = bcrypt.hashSync(req.body.password, salt);
    // console.log(hash);

    user.password = hash;
    user
      .save()
      .then(() => {
        //   res.redirect("/");
        passport.authenticate("local", {
          successRedirect: "/",
          failureRedirect: "/auth/signin",
        })(req, res);
      })
      .catch((err) => {

        // console.log(err);
        // res.send("ERRROR!!!");

        const errors = validationResult(req);
        // return res.status(400).json({errors: errors});
        req.flash("validationErrors", errors.errors);
        return res.redirect("/auth/signup");
      });
  }
);

// HTTP GET - Signin Route - To load the signin form
router.get("/auth/signin", (req, res) => {
  res.render("auth/signin");
});

// HTTP POST - Signin Route - To login the user
router.post(
  "/auth/signin",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/signin",
  })
);

// HTTP GET - Logout Route
router.get("/auth/logout", (req, res) => {
  req.logout();
  req.flash("error", "You are logged out successfully.");
  res.redirect("/auth/signin");
});

// HTTP GET - Load Profile

// HTTP GET - Change Password

// HTTP POST - Change Password

module.exports = router;
