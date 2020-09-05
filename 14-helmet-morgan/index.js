const morgan = require('morgan');

const express = require('express');
// list of interesting middlewares can be seen here.
http://expressjs.com/en/resources/middleware.html 

var helmet = require('helmet');
const app = express();

// export DEBUG=index.js:*
// set DEBUG=index.js:*
// echo $DEBUG
const debug = require('debug')('index.js:helmet-middleware');
require('dotenv').config();

app.use(express.json());

// Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(helmet());

// every time when we send a request to server, it will be logged with morgan
// models => tiny, 
app.use(morgan('tiny'));

app.get('/', (request, response) => {
    response.send('Express server configured successfully.');
});

const port = process.env.PORT;
app.listen(port, () =>{
    debug(`Server is up n running on port ${port}`);
});