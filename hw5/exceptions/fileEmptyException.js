class FileEmptyException extends Error {
    constructor(message) {
        super(message);
        this.name = 'FileEmptyException';
    }
}

module.exports = { FileEmptyException };