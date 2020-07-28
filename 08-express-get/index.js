require("dotenv").config();

const express = require("express");
const app = express();
const debug = require("debug")("express:index.js");

app.get("/", (request, response) => {
  response.send("Express server was successfully established.");
});

app.get("/getnames", (request, response) => {
  const stringNames = [
    "Mr. Kandregula",
    "Ms. Boddeti",
    "Ms. Karri",
    "Mr. Surisetty",
  ];

  const jsonNames = [
    { name: "Bhanu", age: 28 },
    {
      name: "Raghu",
      age: 26,
    },
    {
      name: "Shyam",
      age: 23,
    },
  ];

  response.send(JSON.stringify(stringNames));
  // response.send(jsonNames);
  // response.send(JSON.stringify(jsonNames));
});

const port = process.env.PORT;
debug(" this is the running port: ", port);
app.listen(port, () => {
  debug(`Express server is running on port ${port}`);
});
