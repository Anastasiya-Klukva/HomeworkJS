'use strict';

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

console.log('Start sleep: ' + new Date().toISOString());
console.log('  Sleep about 15 sec');
sleep(15000).then(() => {
    console.log('After sleep: ' + new Date().toISOString())
});

eventEmitter.emit('minus', 'I want to minus the file');
eventEmitter.emit('plus', 'I want to plus the file');
eventEmitter.emit('devide', 'I want to devide the file');
eventEmitter.emit('result', 'I want to devide the file');

module.exports = eventEmitter;