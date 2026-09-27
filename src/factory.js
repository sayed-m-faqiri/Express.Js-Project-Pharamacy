const tables = require("./masterfile")
const express = require("express");
const app = express();
app.use(express.json())

tables.forEach((obj) => {
    app.get()
})
module.exports = app
