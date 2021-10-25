/*'use strict'

const fs = require('fs');
const events = require('events');
const eventEmitter = new events.EventEmitter();

const sleep = msec => new Promise(resolve => {
    setTimeout(resolve, msec);
});

eventEmitter.on('minus', (fs) => {
    console.log('events name is minus', fs);
});
eventEmitter.on('plus', (fileStream) => {
    console.log('events name is plus', fileStream);
});
eventEmitter.on('devide', (fileStream) => {
    console.log('events name is devide', fileStream);
});
eventEmitter.on('result', (fileStream) => {
    console.log('events name is result', fileStream);
});
eventEmitter.addListener('devide', (fileStream) => {
    console.log('events name is devide', fileStream);
});

console.log('Start sleep: ' + new Date().toISOString());
console.log(' Sleep about 1.5 sec');
sleep(1500).then(() => {
    console.log('After sleep: ' + new Date().toISOString())
});

//const readline = require('readline');
//async function processLineByLine() {
//    const fileStream = fs.createReadStream('../input.txt');
//
//    const readLine = readline.createInterface({
//        input: fileStream
//    });
//
//    for await (const line of readLine) {
//        console.log(`Line from the file txt: ${line }`);
//    }
//}
//console.log(processLineByLine());


module.exports = eventEmitter; */