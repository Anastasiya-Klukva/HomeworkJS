class FileContainsInvalidDataException extends Error {
    constructor(message) {
        super(message);
        this.name = 'FileContainsInvalidDataException';
    }
}

module.exports = { FileContainsInvalidDataException };