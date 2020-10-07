const express = require("express");
const helmet = require("helmet");
const dbFunctions = require("../database/dbHelpers.js");

const server = express();
server.use(helmet());
server.use(express.json());

//api endpoints for cars db table
//CRUD

//Create

//Read
server.get("/cars", (req, res) => {
  dbFunctions
    .get()
    .then((dbRes) => {
      res.status(200).json(dbRes);
    })
    .catch((dbErr) => {
      res.status(500).json(dbErr);
    });
});

module.exports = server;