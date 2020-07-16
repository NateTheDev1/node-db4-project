const express = require("express");
const server = express();
const db = require("./data/knexconfig");
server.use(express.json());

server.get("/", (req, res) => {});

server.listen(5000, () => {
  console.log("Server listening on port 5000");
});
