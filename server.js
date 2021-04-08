const express = require("express");

const mongoose = require("mongoose");

const PORT = 4000;

// Initialize express
const app = express();

// Import Routes
const indexRoute = require('./routes/index');

// Mount Routes
app.use('/', indexRoute);

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
