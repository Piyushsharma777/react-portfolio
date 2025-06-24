// application server create
const express = require("express");
const app = express();

// import .env from folder .env for urls
require("dotenv").config();
const Port = process.env.PORT || 8000;

// middleware for parse json responses
app.use(express.json());

// import database and establish connection
const DATABASE = require("./config/mongoDB");
DATABASE.connect();

app.get("/", (req, res) => {
  res.send(`Portfolio Backend Server Started from Port No. ${Port}`);
});

app.listen(Port, () => {
  console.log(`Backend Server Started Successfully Port ${Port}`);
});
