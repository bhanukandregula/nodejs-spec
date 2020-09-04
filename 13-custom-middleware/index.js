const express = require('express');
const app = express();

const logger = require('./logger');

// export DEBUG=index.js:*
// set DEBUG=index.js:*
// echo $DEBUG
const debug = require('debug')('index.js:custom-middlewar');
require('dotenv').config();

// default middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// this is used to serve static files
app.use(express.static('public'));

app.get('/', (request, response) => {
    response.send('Express server configured successfully.');
});

// this is the middleware demo
// middleware functions are called in sequence
app.use(logger);

app.use(function(request, response, next){
    debug("Authenticating....");
    // response.send("Authentication was successfull");
    next();
});

const port = process.env.PORT;
app.listen(port, () =>{
    debug(`Server is up n running on port ${port}`);
});