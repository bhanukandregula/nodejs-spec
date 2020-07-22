const EventEmitter = require("events");
const emitter = new EventEmitter();

class Logger extends EventEmitter {
  log() {
    console.log("Test message");

    this.emit("eventMessage", {
      name: "Macbook Pro",
      ram: "8 GB",
      harddisk: "1 TB SSD",
    });
  }
}

module.exports = Logger;
