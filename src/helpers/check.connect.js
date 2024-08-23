"use strict";

const monggoose = require("mongoose");
const os = require("os");
// count connection
const getNumConnections = () => {
  const numConnections = monggoose.connection.length;
  console.log("number of connections", numConnections);
};

//check over load
const checkOverLoad = () => {
  setInterval(() => {
    const numConnections = monggoose.connection.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    // exmple of check over load

    const maxConnection = numCores * 5;

    console.log("Active connections", numConnections);
    console.log("Max connections", maxConnection);
    console.log("Memory usage", memoryUsage / 1024 / 1024); // in MB;

    if (numConnections > maxConnection) {
      console.log("over load");
    }
  }, 5000);
};

module.exports = { getNumConnections, checkOverLoad };
