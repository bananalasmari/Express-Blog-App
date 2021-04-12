// All my authentication routes will go here

const router = require('express').Router();

// HTTP GET - Signup Route - To load the signup form
router.get("/auth/signup", (req, res) => {
    res.render("auth/signup");
})

// HTTP POST - Signup Route - To save the data

// HTTP GET - Signin Route - To load the signin form
router.get("/auth/signin", (req, res) => {
    res.render("auth/signin");
})

// HTTP POST - Signin Route - To login the user

// HTTP GET - Logout Route

// HTTP GET - Load Profile

// HTTP GET - Change Password

// HTTP POST - Change Password

module.exports = router;