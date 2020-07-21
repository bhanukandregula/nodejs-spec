var logger = require("./logger");

console.log(logger);
console.log("test value");

var sayHi = function () {
  console.log(`I'm coming from inside function`);
};

sayHi();
logger.log("Bhanu Kandregula");

console.log(module);
