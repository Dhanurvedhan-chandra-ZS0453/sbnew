const express = require("express");
const config = require("./config");

const app = express();
const PORT = config.SERVER_PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Sample Node Application");
  });





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });