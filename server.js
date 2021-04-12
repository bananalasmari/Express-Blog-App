require('dotenv').config()

const express = require("express");

const mongoose = require("mongoose");

const PORT = process.env.PORT;

const expresslayouts = require("express-ejs-layouts");

// Initialize express
const app = express();

// Look for static files here in this folder
app.use(express.static("public"));

// Look into the views folder for layout.ejs file
app.use(expresslayouts);

// Import Routes
const indexRoute = require('./routes/index');
const articleRoute = require('./routes/article');
const authRoute = require('./routes/auth');

// Mount Routes
app.use('/', indexRoute);
app.use('/', articleRoute);
app.use('/', authRoute);

// Setting view engine to ejs.
// Node.js to look into the folder views for all ejs files
app.set("view engine", "ejs");

mongoose.connect(
  process.env.mongoDBURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  () => {
    console.log("Mongodb connected seccessfully!!!");
  }
);

// Listen for HTTP request on PORT 4000
app.listen(PORT, () => {
  console.log(`Running on PORT  ${PORT}`);
});
