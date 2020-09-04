const debug = require('debug')('index.js:custom-middlewar');

function log(request, response, next){
    debug("Logging.....");
    next();
}

module.exports = log;