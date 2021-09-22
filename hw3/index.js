const { Card } = require('./card');
const getMultiple = require('./oneParameterFunction');

const { Car2, GazolineStation } = require('./car2');


getMultiple(1);
getMultiple(3);
getMultiple(9);

Visa = new Card("Nastya", 100);
Visa.getBalance();
Visa.increaseBalance(5);
Visa.getBalance();
Visa.decreaseBalance(7);
Visa.getBalance();
Visa.convertBalance(2);