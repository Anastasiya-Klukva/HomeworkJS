const { fs } = require("fs/promises");
const { createReadStream } = require("fs");
const { readline } = require('readline');
const { FileEmptyException } = require('../exceptions/fileEmptyException');
const { Utils } = require('./utils');
const { resolve } = require("path");

class FileReader {
    async getNumbersFromFile(filePath) {
        const dataFromFile = await this.readFile(filePath);
        if (dataFromFile === '') {
            throw new FileEmptyException(`ERROR: file ${filePath} is empty`);
        }
        const utils = new Utils();
        utils.validateLine(dataFromFile);
        const [value1, value2] = dataFromFile.split(/\s+/);

        const number1 = utils.parseNumber(value1);
        const number2 = utils.parseNumber(value2);

        return [number1, number2];
    }

    async readFile(filePath) {

        const stream = createReadStream(filePath);
        setTimeout(() => {
            stream.on('error', err => {
                reject(err);
            });
            stream.on('data', data => {
                dataFromFile += data.toString();
            });
            stream.on('end', () => {
                resolve(dataFromFile)
            });
        }, 1500);
    }
}


module.exports = { FileReader };