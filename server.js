const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "school",
  password: "",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database Connected");

  app.get("/", (req, res) => {
    res.send("OK ROUTE IS OPEN");
  });
});

app.listen(8000, () => {
  console.log("server is ready....");
});
