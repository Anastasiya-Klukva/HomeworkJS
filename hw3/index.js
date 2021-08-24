const { Card } = require('./card');
const getMultiple = require('./oneParameterFunction');


getMultiple(1);
getMultiple(3);
getMultiple(9);

Visa = new Card("Nastya", 10);
Visa.getBalance();
Visa.increaseBalance(5);
Visa.decreaseBalance(7);
Visa.convertBalance(2);