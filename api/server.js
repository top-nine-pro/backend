const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// User Router/Categories Router for Import, after being built
const authLogReg = require("../auth/auth-log-reg");
const categories = require("../categories/category-router");
const authenticate = require("../auth/auth-middleware");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authLogReg);
server.use("/api/categories", authenticate, categories);

server.get("/", (req, res) => {
  res.send(`<h1>My Top Nine - Backend</h1>`);
});

module.exports = server;
