"use strict";

const monggoose = require("mongoose");
const { getNumConnections } = require("../helpers/check.connect");
const connectString = `mongodb://localhost:27017/marketplace`;

class Database {
  constructor() {
    this.connect();
  }

  // connect
  connect(type = "mongodb") {
    if (1 === 1) {
      monggoose.set("debug", true);
      monggoose.set("debug", { color: true });
    }
    monggoose
      .connect(connectString)
      .then(() => {
        console.log("connect db success", getNumConnections());
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongo = Database.getInstance();

module.exports = instanceMongo;
