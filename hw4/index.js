 const Card = require('./card');
 const DebitCard = require('./card');
 const CreditCard = require('./card');
 const Pizza = require('./Pizza');
 const PizzaToppings = require('./Pizza');



 console.log(masterCard = new Card());
 console.log(masterCard._getCardBalance());
 console.log(masterCard.getCardOwnerName());

 console.log(masterCard = new CreditCard());
 console.log(masterCard.takeUnlimMoney(120));
 console.log(masterCard.getCardBalance());


 console.log(masterCard = new DebitCard());
 console.log(masterCard.checkBalance(99));





 const myPizza = new PizzaToppings('small', 50, 20, 'cheese with basil', 10 + 10, 10 + 5);
 myPizza.bakePizzaWithToppings();
 bake();
 console.log("The total price for pizza is " + myPizza.sumPrice() + " rubbles.");
 console.log("The total sum of pizza calories is " + myPizza.sumCalories() + " .");



 //const Album = require('.Album');
 //const Artist = require('.Artist');
 //const Track = require('.Track');
 //const Library = require('.Library');
 //
 //const Godzilla = new Track('Godzilla', 15, 'Album', 'Singer', 'bad lexica(explicit)');
 //const Godzilla2 = new Track('Godzilla2', 15, ....Album..);
 //const eminemAlbum1 = new Album('The Eminem Show', [Godzilla, Godzilla2], ...);
 //const eminem = new Artist('Eminem', new Date('1997-08-20'), [eminemAlbum1]);
 //
 //Library.add(eminem);
 //Library.add(eminem, [Godzilla3, Godzilla4]);
 //Library.delete(Godzilla2);
 //Library.update(eminem, 'name', 'eminem');