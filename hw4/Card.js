/* Написать класс Card, который хранит имя владельца банковской карты
и баланс счета на карте.От данного класса наследуйте CreditCard и 
DebitCard. CreditCard позволяют балансу уходить в минус(снять больше, чем на счету средств);
DebitCard не позволяет балансу быть отрицательным.
Bonus!
 -сделать поле баланса приватным(доступ и модификация осуществляется через соответствующие функции/методы).
-написать юнит-тесты (mocha+chai, jest, jasmine);
-для операций с балансом используйте обработку ошибок. */

class Card {
    constructor(cardOwnerName, cardBalance) {
        this.cardOwnerName = cardOwnerName || 'Nastya';
        this._cardBalance = cardBalance || 10;
    }
    _getCardBalance() {
        return this._cardBalance;
    }
    getCardOwnerName() {
        return this.cardOwnerName;
    }
}

class CreditCard extends Card {

    constructor(cardOwnerName, cardBalance, unlimOptionForBalance) {
        super(cardOwnerName, cardBalance);
        this.unlimOptionForBalance = unlimOptionForBalance || 500;
    }
    takeUnlimMoney(unlimOptionForBalance) {
        if (unlimOptionForBalance > this.cardBalance) {
            return this.cardBalance - unlimOptionForBalance;
        } else {
            console.log("You are so rich!");
        }
    }
    getCardBalance() {
        return this.cardBalance - this.unlimOptionForBalance;
    }
}

class DebitCard extends Card {
    constructor(cardOwnerName, cardBalance, balanceLimit) {
        super(cardOwnerName, cardBalance);
        this._balanceLimit = balanceLimit || 100;
    }
    checkBalance(value) {
        if (value < 100) throw new Error("Negative quantity of money");
        if (value > this.balanceLimit) throw new Error(" Too much money");
    }
}
console.log(masterCard = new Card());
console.log(masterCard._getCardBalance());
console.log(masterCard.getCardOwnerName());

console.log(masterCard = new CreditCard());
console.log(masterCard.takeUnlimMoney(120));
console.log(masterCard.getCardBalance());


console.log(masterCard = new DebitCard());
console.log(masterCard.checkBalance(99));


module.export = { Card, CreditCard, DebitCard };