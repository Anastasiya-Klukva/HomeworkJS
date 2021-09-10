const Card = require('./card');
const DebitCard = require('./card');
const CreditCard = require('./card');
const PizzaPapa = require('./PizzaPapa').default;
const Pizza = require('./Pizza');

console.log(papaBo = new PizzaPapa('', ['cheese']));
console.log(papaJoe = new PizzaPapa('small'));
console.log(papaBo.getPrice());
console.log(papaBo.getCallories());
console.log(papaJoe.addToppings());

console.log(myPizza = new Pizza(Pizza.SIZES.small));
console.log(myPizza.addToppings(Pizza.TOPPINGS.oregano));
console.log(myPizza.isVegan);
console.log(myPizza.removeTopping(Pizza.TOPPINGS.salami));
console.log(myPizza.addToppings(Pizza.TOPPINGS.cheese));

console.log(masterCard = new Card());
console.log(masterCard._getCardBalance());
console.log(masterCard.getCardOwnerName());

console.log(masterCard = new CreditCard());
console.log(masterCard.takeUnlimMoney(120));
console.log(masterCard.getCardBalance());

console.log(masterCard = new DebitCard());
console.log(masterCard.checkBalance(99));