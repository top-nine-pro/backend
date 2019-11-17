const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// User Router/Categories Router for Import, after being built

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

module.exports = server;