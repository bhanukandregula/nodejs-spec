require("dotenv").config();

const express = require("express");
const app = express();
const debug = require("debug")("express:index.js");
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// create an empty array to store vegetables
let vegetables = [
  { id: 1, name: "Tomatoes" },
  { id: 2, name: "Beans" },
  { id: 3, name: "Spinach" },
];

app.get("/", (request, response) => {
  response.send("Express server was successfully established.");
});

// this is the endpoint to fetch all vegetables from array
app.get("/allvegetables", (request, response) => {
  response.send(vegetables);
});

app.delete("/vegetable/:id", (request, response) => {
  const vegetable = vegetables.find(
    (c) => c.id === parseInt(request.params.id)
  );

  if (!vegetable) {
    return response.status(400).send("Vegetable with given ID is not found");
  }

  const index = vegetables.indexOf(vegetable);

  // make sure array function name is splice, but not slice :)
  vegetables.splice(index, 1);
  response.send("Vegetable deleted from array successfully");
});

const port = process.env.PORT;
debug(" this is the running port: ", port);
app.listen(port, () => {
  debug(`Express server is running on port ${port}`);
});
