const Card = require('./card');
const DebitCard = require('./card');
const CreditCard = require('./card');
const PizzaPapa = require('./PizzaPapa').default;

console.log(papaBo = new PizzaPapa('', ['cheese']));
console.log(papaBo.getPrice());
console.log(papaBo.getCallories());



console.log(masterCard = new Card());
console.log(masterCard._getCardBalance());
console.log(masterCard.getCardOwnerName());

console.log(masterCard = new CreditCard());
console.log(masterCard.takeUnlimMoney(120));
console.log(masterCard.getCardBalance());

console.log(masterCard = new DebitCard());
console.log(masterCard.checkBalance(99));