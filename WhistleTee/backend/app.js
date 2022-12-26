const express = require('express');
const app = express();

const cors = require("cors")
const logger = require("morgan")

// setup body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// CORS middleware
app.use(cors())

// Logger middleware
app.use(logger("dev"))


module.exports = app;
