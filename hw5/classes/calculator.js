const { Utils } = require('../classes/utils');

class Calculator {
    utils = new Utils();
    value1;
    value2;
    resultOfCalculation;
    constructor(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    }

    plus() {
        this.resultOfCalculation = this.value1 + this.value2;
        this.utils.checkOfSafeNumber(this.resultOfCalculation);
    }

    minus() {
        this.resultOfCalculation = this.value1 - this.value2;
        this.utils.checkOfSafeNumber(this.resultOfCalculation);
    }

    multiply() {
        this.resultOfCalculation = this.value1 * this.value2;
        this.utils.checkOfSafeNumber(this.resultOfCalculation);
    }

    divide() {
        this.resultOfCalculation = this.value1 / this.value2;
        this.utils.checkOfSafeNumber(this.resultOfCalculation);
    }

    result() {
        if (!this.resultOfCalculation) {
            console.log('there is no result of calculation');
        } else {
            console.log('result  is ' + this.resultOfCalculation);
        }
    }
}

module.exports = { Calculator };