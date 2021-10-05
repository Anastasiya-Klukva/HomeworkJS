const events = require("events");

//create an EventEmitter object
const myEventEmitter = new events.EventEmitter();

myEventEmitter.on('minus', (fileStream) => {
    console.log("great", fileStream);
});
myEventEmitter.on('plus', (fileStream) => {
    console.log("ok", fileStream);
});
myEventEmitter.on('divide', (fileStream) => {
    console.log("nice", fileStream);
});


myEventEmitter.emit('minus', 'I want to minus the file');

myEventEmitter.emit('plus', 'I want to plus the file');

myEventEmitter.emit('divide', 'I want to divide the file');


module.exports = myEventEmitter;