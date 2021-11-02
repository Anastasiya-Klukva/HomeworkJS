const EventEmitter = require('events');

class CalculationEvent extends EventEmitter {
    calculator;

    constructor(calculator) {
        super();
        this.calculator = calculator;

        this.on('plus', () => {
            console.log('event name is plus');
            this.calculator.plus();
        });

        this.on('minus', () => {
            console.log('event name is minus');
            this.calculator.plus();
        });

        this.on('divide', () => {
            console.log('event name is divide');
            this.calculator.minus();
        });

        this.on('multiply', () => {
            console.log('event name is multiply');
            this.calculator.multiply();
        });

        this.on('result', () => {
            console.log('event name is result');
            this.calculator.result();
        });

        this.on('go', () => {
            console.log('event name is go');
        });
    }
}

module.exports = { CalculationEvent };