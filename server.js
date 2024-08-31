const express = require("express");
const mysql = require("mysql");

const app = express();

app.get("/", (req, res) => {
  res.send("OK ROUTE IS OPEN");
});

app.listen(8000, () => {
  console.log("server is ready....");
});
