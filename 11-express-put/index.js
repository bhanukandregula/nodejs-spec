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
];

app.get("/", (request, response) => {
  response.send("Express server was successfully established.");
});

// this is the endpoint to fetch all vegetables from array
app.get("/allvegetables", (request, response) => {
  response.send(vegetables);
});

app.post("/addvegetables", (request, response) => {
  const vegetable = {
    id: vegetables.length + 1,
    name: request.body.name,
  };

  vegetables.push(vegetable);
  response.send("This is the response from POST method - added");
});

app.get("/vegetable/:id", (request, response) => {
  debug("This is the request params id:", parseInt(request.params.id));

  // look up for the vegetables
  const vegetable = vegetables.find(
    (c) => c.id === parseInt(request.params.id)
  );

  debug("This is the vegetable: ", vegetable);

  // if not existing, return 404 error
  if (!vegetable) {
    response.status(400).send("Vegetable with given ID is not found");
  }

  response.send(vegetable);
});

app.put("/vegetable/:id", (request, response) => {
  debug("This is the request params id:", parseInt(request.params.id));

  // look up for the vegetables
  const vegetable = vegetables.find(
    (c) => c.id === parseInt(request.params.id)
  );

  // if not existing, return 404 error
  if (!vegetable) {
    response.status(400).send("Vegetable with given ID is not found");
  }

  // update the vegetable name
  vegetable.name = request.body.name;
  response.send(vegetable);
});

const port = process.env.PORT;
debug(" this is the running port: ", port);
app.listen(port, () => {
  debug(`Express server is running on port ${port}`);
});
