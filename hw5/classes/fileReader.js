/* считайте файл,который называется input.txt,в котором через пробелы 
написаны 2 числа и символ(кол-во строк произвольное)
Написать калькулятор,который работает на событийной модели(EventEmitter).
Для считывания линии за линией используйте функцию nodejs -createReadStream.
События могут быть такие- plus, minus, devide, etc...
Каждое вхождение в событие должно также информировать о том, какое событие было вызвано и выходной результат,а также 
отдельное событие result,которое покажет результат подсчета.
Любой метод калькулятора возвращает ответ через 15 миллисекунд минимум.
Калькулятор и события на него- разные модули.
Бонус: юнит тесты*/



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
        utils.isSafeNumber(number1);

        const number2 = utils.parseNumber(value2);
        utils.isSafeNumber(number2);

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