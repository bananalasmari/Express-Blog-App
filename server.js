const express = require("express");

const mongoose = require("mongoose");

const PORT = 4000;

const expresslayouts = require("express-ejs-layouts");

// Initialize express
const app = express();

// Look into the views folder for layout.ejs file
app.use(expresslayouts);

// Import Routes
const indexRoute = require('./routes/index');
const articleRoute = require('./routes/article');

// Mount Routes
app.use('/', indexRoute);
app.use('/', articleRoute);

// Setting view engine to ejs.
// Node.js to look into the folder views for all ejs files
app.set("view engine", "ejs");

mongoose.connect(
  "mongodb://localhost:27017/blogapp",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongodb connected seccessfully!!!");
  }
);

// Listen for HTTP request on PORT 4000
app.listen(PORT, () => {
  console.log(`Running on PORT  ${PORT}`);
});
