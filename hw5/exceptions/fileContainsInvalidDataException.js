//const { FileContainsInvalidDataException } = require('../exceptions/fileContainsInvalidDataException');
//const { Error } = require('Error');

class FileContainsInvalidDataException extends Error {
    constructor(message) {
        super(message);
        this.name = 'FileContainsInvalidDataException';
    }
}

module.exports = { FileContainsInvalidDataException };