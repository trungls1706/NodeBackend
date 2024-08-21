const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");


const app = express();

// init middleware
app.use(morgan("dev"));
// app.use(helmet());

// morgan('combined')
// morgan('short')
// morgan('tiny')
// morgan('common')
// morgan('dev')


// init db

// init routes
app.get("/", (req, res, next) => {
   return res.status(200).json({ msg: "hello world" });
})

// handle error

module.exports = app;