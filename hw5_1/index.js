const fs = require('fs');
const readline = require('readline');
const eventEmitter = require('EventEmitter');

eventEmitter.emit('substract', 'I want to minus the file');
eventEmitter.emit('multiply', 'I want to multiply the file');
eventEmitter.emit('divide', 'I want to devide the file');
eventEmitter.emit('add', 'I want to add the file');

const eventEmitter = new EventEmitter();

eventEmitter.emit();


/*создать здесь объект. который читает файл, потом этот объект должен
завалидировать черех регулярку
распарсить файл*/