function sum(result) {
    return result + sum;
}

function divide(result) {
    return result;
}

function minus(result) {
    return result;
}

function errorParse() {
    console.log("Failed to parse file");
}

errorParse();

module.exports = { sum: sum, divide: divide, minus: minus, errorParse: errorParse };