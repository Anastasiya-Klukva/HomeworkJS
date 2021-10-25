//const { FileContainsInvalidDataException } = require('../exceptions/fileContainsInvalidDataException');
//const { NumberParsingException } = require('../exceptions/numberParsingException');

class Utils {
    validateLine(line) {
        const isValidateLine = /^-?(\d+|\d+.\d+)\s+-?(\d+|\d+.\d+)\s+.$/.test(line);
        if (!isValidateLine) {
            throw new FileContainsInvalidDataException(`ERROR: line '${line}' from file is invalid`);
        }
    }

    parseNumber(value) {
        let number = undefined;
        try {
            number = Number.parseInt(value);
        } catch (e) {
            try {
                number = Number.parseFloat(value);
            } catch (e) {}
        }
        if (!number) {
            throw new NumberParsingException(`ERROR: cant parse value '${value}' to number`);
        }
        //this.isSafeNumber(number);
        return number;
    }

    isSafeNumber(number) {
        if (number < Number.MIN_SAFE_INTEGER || number > Number.MAX_SAFE_INT) {
            console.log('Attention, mistake where you make a counting!')
        }
    }
}

module.exports = { Utils };