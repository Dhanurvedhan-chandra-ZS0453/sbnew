const express = require("express");
const config = require("./config");
require("dotenv").config();
const app = express();
const PORT = config.SERVER_PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database:config.database,
  port: config.port,  
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
app.get("/", (req, res) => {
    res.send("Sample Node Application");
  });
app.get("/users", (req, res) => {
    connection.query('SELECT * FROM department', function(err, results) {
      if (err) throw err;
      res.send(results);
    });
  });


console.log("Server is running on port " + PORT);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });