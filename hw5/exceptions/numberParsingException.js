class NumberParsingException extends Error {
    constructor(message) {
        super(message);
        this.name = 'NumberParsingException';
    }
}

module.exports = { NumberParsingException };