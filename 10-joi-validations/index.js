const express = require('express')
const app = express();
const Joi = require("@hapi/joi");
app.use(express.json());

const genres = [
    {id:1 , genre: "action"},
    {id:2 , genre: "thriller"},
    {id:3 , genre: "comedy"},
    {id:4 , genre: "romance"}
]
//get the details of the genres available within the application vidly
app.get('/vidly.com/api/genres',(req,res)=>{
    res.send(`The list of genres available are ${JSON.stringify(genres)} `)
});

//post the new genre intto the array
app.post('/vidly.com/api/genres',(req,res)=>{
  console.log("This is the request body: ", req.body);
    const genre={
        id:genres.length + 1,
        genre: req.body.genre
    }

    //validate the genre params
    const genreSchema = Joi.object().keys({
        id : Joi.number().required(),
        genre : Joi.string().required()
    });

    const { error }=genreSchema.validate(genre)
    if(error){
        res.status(400).send(error)
    }
    genres.push(genre)
    console.log("**************************");
    res.send(genres)
})
app.listen(2000,()=>{
    console.log('connected to server!!')
})



// require("dotenv").config();

// const express = require("express");
// const app = express();
// const debug = require("debug")("express:index.js");
// var bodyParser = require("body-parser");
// const Joi = require("@hapi/joi");

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// // parse application/json
// app.use(bodyParser.json());

// app.get("/", (request, response) => {
//   response.send("Express server was successfully established.");
// });

// app.post("/addvegetables", (request, response) => {
//   // lets validate the request body params of the vegetables
//   const addvegetablesSchema = Joi.object().keys({
//     name: Joi.string().required(),
//     price: Joi.number().required(),
//     units: Joi.string().required(),
//   });

//   // request body must be send to end-point from the POSTMAN tool, with content type as JSON
//   // This is the same request body
//   //   {
//   //     "name" : "Tomatoes",
//   //     "price": "80",
//   //     "units" : "kg"
//   //   }

//   const data = request.body;
//   debug("This is the request.body content: ", data);
//   const { error, result } = addvegetablesSchema.validate(data);
//   if (error) {
//     debug("There is an error", error);
//     response.send(error.details[0].message);
//   }
//   debug("Validation was successfull.");
//   response.send("This is the response from POST method");
// });

// const port = process.env.PORT;
// debug(" this is the running port: ", port);
// app.listen(port, () => {
//   debug(`Express server is running on port ${port}`);
// });
