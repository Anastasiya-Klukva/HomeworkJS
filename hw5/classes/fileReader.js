const fs = require("fs");
const { FileEmptyException } = require('../exceptions/fileEmptyException');
const { Utils } = require('./utils');

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

    readFile(filePath) {
        return new Promise((resolve, reject) => {
            let dataFromFile = '';
            fs.createReadStream(filePath)
                .on('error', error => {
                    reject(error);
                })
                .on('data', (data) => {
                    dataFromFile += data.toString();
                })
                .on('end', () => {
                    resolve(dataFromFile);
                });
        });
    }
}

module.exports = { FileReader };