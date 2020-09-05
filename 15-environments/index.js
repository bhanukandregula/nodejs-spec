const morgan = require('morgan');
const express = require('express');
const app = express();

require('dotenv').config();

// export NODE_ENV=production
// System envronment variables value matters
NODE_ENV = process.env.NODE_ENV;
port = process.env.PORT;

console.log(`Environment Variable: ${process.env.NODE_ENV}`);
// defualt is development, if above NODE_ENV is not set to production.
console.log(`App environment: ${app.get('env')}`);


// export NODE_ENV=development
if(app.get('env') === 'development'){
    app.get(morgan('tiny'));
    console.log('Morgan middleware is enabled, in development environment.');
}

if(app.get('env') === 'production'){
    console.log('This is Hola, from production environment');
}

app.listen(3000, () => {
    console.log("Server is up and running");
});
