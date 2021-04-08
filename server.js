const express = require('express');

const mongoose = require('mongoose');

const PORT = 4000;

// Initialize express
const app = express();

// Listen for HTTP request on PORT 4000

app.listen(PORT, () => {
    console.log(`Running on PORT  ${PORT}`);
})