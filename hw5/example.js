const fs = require("fs");

let writeableStream = fs.createWriteStream("hello.txt");
writeableStream.write("Привет мир!");
writeableStream.write("Продолжение записи \n");
writeableStream.end("Завершение записи");
let readableStream = fs.createReadStream("hello.txt", "utf8");

readableStream.on("data", function(chunk) {
    console.log(chunk);
});

let events = require("events");

//create an EventEmitter object
let myEventEmitter = new events.EventEmitter();

myEventEmitter.on("someEvent", function(mssg) {
    console.log(mssg);
});

myEventEmitter.emit("someEvent", "the event was emitted");