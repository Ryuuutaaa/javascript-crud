const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "school",
  password: "",
});

app.get("/", (req, res) => {
  res.send("OK ROUTE IS OPEN");
});

app.listen(8000, () => {
  console.log("server is ready....");
});
