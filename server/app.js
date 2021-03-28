const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const config = require('./app/config/config');



app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')))


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.listen(3000, () => console.log("App running on port 3000...yeh!!!"));

module.exports=app;
