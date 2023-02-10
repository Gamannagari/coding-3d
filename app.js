const express = require("express");
const app = express();
app.get("/", (request, response) => {
  app.send("Express JS");
});
module.exports = app;
