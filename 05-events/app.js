const EventEmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();

logger.on("eventMessage", (arg) => {
  console.log("Data from event emitter received: ", arg);
  console.log("Event emitted and invoked.");
});

logger.log();
