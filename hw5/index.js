const { FileReader } = require('./classes/fileReader');
const { Calculator } = require('./classes/calculator');
const { CalculationEvent } = require('./classes/calculationEvent');

const filePath = '../input.txt';

const fileReader = new FileReader();
const [number1, number2] = fileReader.getNumbersFromFile(filePath);

const calculator = new Calculator(number1, number2);
const calculationEvent = new CalculationEvent(calculator);

calculationEvent.emit('result');

FileReader.calculationEvent.emit('plus');
calculationEvent.emit('result');

calculationEvent.emit('minus');
calculationEvent.emit('result');

calculationEvent.emit('divide');
calculationEvent.emit('result');

calculationEvent.emit('multiply');
calculationEvent.emit('result');