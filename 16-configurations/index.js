const config = require('config');

// Configuration demo
// node index.js

// export NODE_ENV=production
// export NODE_ENV=development
// echo $NODE_ENV
// It will opt the environment configurations from /config files by default.
console.log('Application Name: ', config.get('name'));
console.log('SMS Service Name: ', config.get('sms.service'));

// app_password evironment variables will be mapped in the
// custom-environment-variables.json file
console.log('SMS Password Name: ', config.get('sms.password'));

