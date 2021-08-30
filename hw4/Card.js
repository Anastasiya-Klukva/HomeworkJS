/* Написать класс Card, который хранит имя владельца банковской карты
и баланс счета на карте.От данного класса наследуйте CreditCard и 
DebitCard. CreditCard позволяют балансу уходить в минус(снять больше, чем на счету средств);
DebitCard не позволяет балансу быть отрицательным.
Bonus!
 -сделать поле баланса приватным(доступ и модификация осуществляется через соответствующие функции/методы).
-написать юнит-тесты (mocha+chai, jest, jasmine);
-для операций с балансом используйте обработку ошибок. */

class Card {

    constructor(options) {
        this.cardBalance = options.cardBalance;
        this.cardOwnerName = options.cardOwnerName;
    }
    getBalance() {
        console.log("I have got a balance from card " + this.cardBalance);
    }
}

class CreditCard extends Card {
    constructor(options) {
        super(options);

        this.hasUnlimitBalance = options.hasUnlimitBalance;
        this.type = " ";
    }
}

class DebitCard extends Card {
    constructor(options) {
        super(options);

        this.keepNoMinusBalance = options.keepNoMinusBalance;
        this.type = " ";
    }
}
console.log(Transaction = new CreditCard("Nastya", 100, 6000));

module.export = { Card };