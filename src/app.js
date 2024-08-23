const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const {checkOverLoad} = require("./helpers/check.connect");
const app = express();

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression()); // compress all routes

// morgan('combined')
// morgan('short')
// morgan('tiny')
// morgan('common')
// morgan('dev')

// init db
require("./dbs/init.mongodb.js");
checkOverLoad()

// init routes
app.get("/", (req, res, next) => {
  const strCompress = "Hello";

  return res.status(200).json({
    msg: "hello world",
    // metadata: strCompress.repeat(1000),
  });
});

// handle error

module.exports = app;
