//const { FileEmptyException } = require('../exceptions/fileEmptyException');
//const { Error } = require('Error');

class FileEmptyException extends Error {
    constructor(message) {
        super(message);
        this.name = 'FileEmptyException';
    }
}

module.exports = { FileEmptyException };