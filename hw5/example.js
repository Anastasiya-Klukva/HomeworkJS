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

//хороший пример EventEmitter

var fs = require('fs');
var stream = fs.createReadStream(__dirname + '/read.text');

stream.on('data', function(chunk) {
    console.log('new chunk arrived');
    console.log(chunk);
    console.log('');
})

stream.on('close', function() {
    console.log('file closed')
})

stream.on('end', function() {
    console.log('stream ended')
})

stream.on('open', function() {
    console.log('File opened')
});

console.log('one');
console.log('two');