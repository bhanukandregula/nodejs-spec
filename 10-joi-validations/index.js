require("dotenv").config();

const express = require("express");
const app = express();
const debug = require("debug")("express:index.js");
var bodyParser = require("body-parser");
const Joi = require("@hapi/joi");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.send("Express server was successfully established.");
});

app.post("/addvegetables", (request, response) => {
  // lets validate the request body params of the vegetables
  const addvegetablesSchema = Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().required(),
    units: Joi.string().required(),
  });

  // request body must be send to end-point from the POSTMAN tool, with content type as JSON
  // This is the same request body
  //   {
  //     "name" : "Tomatoes",
  //     "price": "80",
  //     "units" : "kg"
  //   }

  const data = request.body;
  debug("This is the request.body content: ", data);
  const { error, result } = addvegetablesSchema.validate(data);
  if (error) {
    debug("There is an error", error);
    response.send(error.details[0].message);
  }
  debug("Validation was successfull.");
  response.send("This is the response from POST method");
});

const port = process.env.PORT;
debug(" this is the running port: ", port);
app.listen(port, () => {
  debug(`Express server is running on port ${port}`);
});
