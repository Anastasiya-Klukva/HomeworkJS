let events = require("events");

//create an EventEmitter object
let myEventEmitter = new events.EventEmitter();

myEventEmitter.on("wow", (numbers) => {
    console.log("great", numbers);
});

function calc() {
    myEventEmitter.emit("wow"),
        myEventEmitter.emit('bu');
}

calc();

module.exports = myEventEmitter;