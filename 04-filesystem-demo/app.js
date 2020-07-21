const fs = require("fs");

// This is Synchronous way
// this reads all the files in current directory
const files = fs.readdirSync("./");
console.log(files);

// This is Asynchronous way
// Async function has two params, error and an string array
fs.readdir("./", (error, files) => {
  if (error) {
    console.log(error);
  } else {
    console.log(files);
  }
});
