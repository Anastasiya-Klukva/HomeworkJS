//const { NumberParsingException } = require('../exceptions/numberParsingException');
//const { Error } = require('Error');

class NumberParsingException extends Error {
    constructor(message) {
        super(message);
        this.name = 'NumberParsingException';
    }
}

module.exports = { NumberParsingException };