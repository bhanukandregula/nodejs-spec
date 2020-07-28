require("dotenv").config();

const express = require("express");
const app = express();
const debug = require("debug")("express:index.js");

app.get("/", (request, response) => {
  response.send("Express server was successfully established.");
});

const port = process.env.PORT;
debug(" this is the running port: ", port);
app.listen(port, () => {
  debug(`Express server is running on port ${port}`);
});
