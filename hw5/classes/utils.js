class Utils {
    validateLine(line) {
        const isValidateLine = /^-?(\d+|\d+.\d+)\s+-?(\d+|\d+.\d+)\s+.$/.test(line);
        if (!isValidateLine) {
            throw new FileContainsInvalidDataException(`ERROR: line '${line}' from file is invalid`);
        }
    }

    parseNumber(value) {
        let number;
        if (Number.parseInt(value) == NaN) {
            throw new NumberParsingException(`ERROR: cant parse value '${value}' to number`);
        } else {
            return number;
        }
    }

    checkOfSafeNumber(number) {
        if (number < Number.MIN_SAFE_INTEGER || number > Number.MAX_SAFE_INT) {
            console.log('Attention, mistake where you make a counting!')
        }
    }
}

module.exports = { Utils };