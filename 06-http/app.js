const http = require("http");

//we can create a web server, which is event emitter.
const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write("Hello world");
    response.end();
  }

  if (request.url === "/members") {
    response.write(JSON.stringify(["Bhanu", "Raghu", "Bunny", "Divya"]));
    response.end();
  }
});

// Listen to the event, from server.listen() - which is an emitter
server.on("connection", (socket) => {
  console.log("Server socket connection established...");
});

// This is an inbuild EventEmitter
server.listen(3000);
console.log("Listenning on port 3000");
