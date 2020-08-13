require("dotenv").config();

const express = require("express");
const app = express();
const debug = require("debug")("express:index.js");
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.send("Express server was successfully established.");
});

app.post("/addvegetables", (request, response) => {
  // request body must be send to end-point from the POSTMAN tool, with content type as JSON
  const data = request.body;
  debug("This is the request body: ", data);
  response.send("This is the response from POST method");
});

const port = process.env.PORT;
debug(" this is the running port: ", port);
app.listen(port, () => {
  debug(`Express server is running on port ${port}`);
});
