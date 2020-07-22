const Emitter = require("events");
const emitter = new Emitter();

emitter.on("eventMessage", (arg) => {
  console.log("Event emitted and invoked.");
  console.log("These are the arguments with event: ", arg);
});

emitter.emit("eventMessage", {
  name: "bhanukandregula",
  website: "https://www.bhanukandregula.com",
  mobile: "516-728-4204",
});
